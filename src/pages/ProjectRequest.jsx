import PageHero from '../components/ui/PageHero';
import ProjectRequestForm from '../components/forms/ProjectRequestForm';
import useReveal from '../hooks/useReveal';

export default function ProjectRequest() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Project Request"
        title="Start your IT project with RARMATRIX"
        desc="Tell us your scope, timeline and existing infrastructure — we'll plan the engagement from there."
      />
      <section>
        <div className="wrap">
          <ProjectRequestForm />
        </div>
      </section>
    </>
  );
}
