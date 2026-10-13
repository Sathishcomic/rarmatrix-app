import PageHero from '../components/ui/PageHero';
import ResourceRequestForm from '../components/forms/ResourceRequestForm';
import useReveal from '../hooks/useReveal';

export default function ResourceRequest() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Resource Request"
        title="Request an IT Resource"
        desc="Tell us the role, skills and engagement model you need — we'll identify and screen suitable professionals."
      />
      <section>
        <div className="wrap">
          <ResourceRequestForm />
        </div>
      </section>
    </>
  );
}
