import { useEffect, useRef } from 'react';

/**
 * WireSphere Component
 *
 * High-performance 3D wireframe sphere with depth-based rendering.
 * Uses canvas for efficient rendering of a Fibonacci sphere distribution
 * with dynamic connections, glow effects, and perspective projection.
 *
 * Features:
 * - 38 nodes distributed using Fibonacci sphere algorithm
 * - 6 nearest-neighbor connections per node for dense mesh
 * - Depth-based opacity and glow for front/back node distinction
 * - Smooth rotation with subtle wobble
 * - Shadow/glow effects on lines and nodes
 * - Responsive to window resize
 *
 * Performance: ~60fps on modern browsers
 */
export default function WireSphere({
  nodes = 100,
  radius = 180,
  neighbors = 10,
  speed = 0.0025,
  tiltX = 0.25,
  wobble = 0.075,
  wobbleSpeed = 1,
  color = [25, 151, 202],
  focal = 650,
  nodeRadius = 10,
  glow = 100,
  lineWidth = 2,
  lineOpacity = 0.55,
  className = '',
  style = {},
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let rotationY = Math.random() * Math.PI * 3;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    /*
     * --------------------------------------------------
     * CREATE SPHERICAL POINTS
     * --------------------------------------------------
     *
     * Fibonacci sphere gives us evenly distributed
     * points over a real 3D spherical surface.
     */

    const points = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < nodes; i++) {
      const y = 1 - (i / (nodes - 1)) * 2;
      const ringRadius = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;

      points.push({
        x: Math.cos(theta) * ringRadius * radius,
        y: y * radius,
        z: Math.sin(theta) * ringRadius * radius,
        /*
         * Small random variation gives
         * the nodes a natural network look.
         */
        size: 0.95 + Math.random() * 0.35,
      });
    }

    /*
     * --------------------------------------------------
     * CREATE NETWORK CONNECTIONS
     * --------------------------------------------------
     */

    const edges = [];
    const edgeSet = new Set();

    for (let i = 0; i < points.length; i++) {
      const distances = [];

      for (let j = 0; j < points.length; j++) {
        if (i === j) continue;

        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        const distance = dx * dx + dy * dy + dz * dz;

        distances.push({ index: j, distance });
      }

      distances.sort((a, b) => a.distance - b.distance);

      for (let n = 0; n < Math.min(neighbors, distances.length); n++) {
        const j = distances[n].index;
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;

        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          edges.push({ a: i, b: j });
        }
      }
    }

    /*
     * --------------------------------------------------
     * RESIZE
     * --------------------------------------------------
     */

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    /*
     * --------------------------------------------------
     * 3D ROTATION
     * --------------------------------------------------
     */

    function rotatePoint(point, time) {
      /*
       * Very subtle vertical movement.
       * This keeps the sphere alive without
       * making it look like it is wobbling.
       */

      const dynamicTilt = tiltX + Math.sin(time * 0.0010 * wobbleSpeed) * wobble;

      /*
       * Y AXIS ROTATION
       */

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const x1 = point.x * cosY - point.z * sinY;
      const z1 = point.x * sinY + point.z * cosY;

      /*
       * X AXIS ROTATION
       */

      const cosX = Math.cos(dynamicTilt);
      const sinX = Math.sin(dynamicTilt);
      const y2 = point.y * cosX - z1 * sinX;
      const z2 = point.y * sinX + z1 * cosX;

      /*
       * Perspective projection
       */

      const scale = focal / (focal + z2);

      return { x: x1, y: y2, z: z2, scale };
    }

    /*
     * --------------------------------------------------
     * SOFT SPHERE GLOW
     * --------------------------------------------------
     */

    function drawSphereGlow(cx, cy) {
      const gradient = ctx.createRadialGradient(
        cx,
        cy,
        radius * 0.25,
        cx,
        cy,
        radius * 1.18
      );

      gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.055)`);
      gradient.addColorStop(0.65, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.025)`);
      gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.18, 0, Math.PI * 2);
      ctx.fill();
    }

    /*
     * --------------------------------------------------
     * DRAW
     * --------------------------------------------------
     */

    function render(time) {
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      /*
       * Slow rotation
       */

      rotationY += speed;

      /*
       * Soft atmospheric glow
       */

      drawSphereGlow(cx, cy);

      /*
       * Project every 3D point
       */

      const projected = points.map((point, index) => {
        const p = rotatePoint(point, time);

        return {
          ...p,
          index,
          sx: cx + p.x * p.scale,
          sy: cy + p.y * p.scale,
        };
      });

      /*
       * ------------------------------------------------
       * DRAW CONNECTIONS
       * ------------------------------------------------
       */

      for (const edge of edges) {
        const a = projected[edge.a];
        const b = projected[edge.b];

        /*
         * Average depth.
         *
         * Front = brighter
         * Back = darker
         */

        const averageZ = (a.z + b.z) / 2;
        const depth = Math.max(0, Math.min(1, (averageZ + radius) / (radius * 2)));

        /*
         * Back lines are still visible,
         * but much more subtle.
         */

        const alpha = 0.12 + depth * lineOpacity;

        /*
         * Line glow effect
         */

        ctx.shadowColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha * 0.6})`;
        ctx.shadowBlur = 6 + depth * 4;

        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
        ctx.lineWidth = Math.max(0.7, lineWidth * (0.55 + depth * 0.65));
        ctx.stroke();

        ctx.shadowBlur = 0;
      }

      /*
       * ------------------------------------------------
       * DEPTH SORT
       * ------------------------------------------------
       */

      projected.sort((a, b) => a.z - b.z);

      /*
       * ------------------------------------------------
       * DRAW NODES
       * ------------------------------------------------
       */

      for (const point of projected) {
        const depth = Math.max(0, Math.min(1, (point.z + radius) / (radius * 2)));

        /*
         * Back nodes are smaller.
         * Front nodes are larger.
         */

        const nodeSize = nodeRadius * point.scale * (0.72 + depth * 0.42) * point.size;

        /*
         * Back nodes are dimmer.
         */

        const alpha = 0.25 + depth * 0.75;
        const px = point.sx;
        const py = point.sy;

        /*
         * NODE OUTER GLOW
         */

        ctx.shadowColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
        ctx.shadowBlur = glow * (0.6 + depth);

        /*
         * NODE
         */

        ctx.beginPath();
        ctx.arc(px, py, Math.max(2, nodeSize), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
        ctx.fill();

        /*
         * BRIGHT CENTER
         */

        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.8, nodeSize * 0.38), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225, 250, 255, ${0.35 + depth * 0.55})`;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationFrame = requestAnimationFrame(render);
    }

    /*
     * INITIALIZE
     */

    resize();
    window.addEventListener('resize', resize);
    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [nodes, radius, neighbors, speed, tiltX, wobble, wobbleSpeed, color, focal, nodeRadius, glow, lineWidth, lineOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        ...style,
      }}
    />
  );
}
