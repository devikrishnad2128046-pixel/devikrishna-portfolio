import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-space section-muted">

      <div className="container-shell">

        <Reveal>

          <SectionTitle
            eyebrow="Get in touch"
            title="Have a project in mind?"
            text="I would love to hear about your idea, discuss an opportunity or simply connect."
          />

        </Reveal>

        <Reveal className="contact-panel">

          <div>

            <p className="text-sm uppercase tracking-[.2em] text-cyan-300">
              Let's create something
            </p>

            <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Let's make it happen.
            </h3>

          </div>

          <a
            className="button-primary mt-8 sm:mt-0"
            href="mailto:hello@example.com"
          >
            Send me an email ↗
          </a>

        </Reveal>

        <p className="mt-6 text-center text-xs text-slate-500">
          Change hello@example.com to your own email address.
        </p>

      </div>

    </section>
  );
}