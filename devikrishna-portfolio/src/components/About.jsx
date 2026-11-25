import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-space">

      <div className="container-shell">

        <Reveal>
          <SectionTitle
            eyebrow="A little about me"
            title="Turning ideas into reality."
            text="I enjoy combining design and technology to create websites that look great, feel intuitive and work smoothly on every screen."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr]">

          <Reveal className="glass-panel p-8 sm:p-10">

            <p className="text-lg leading-8 text-slate-300">
              I'm an enthusiastic learner and aspiring front-end developer.
              I love exploring new technologies, solving problems and
              improving my skills through practical projects.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              My goal is to build meaningful digital experiences
              while growing as a developer every day.
              I believe good websites should be simple to use,
              beautiful to look at and accessible to everyone.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex gap-3 text-sm font-semibold text-cyan-300"
            >
              More about me ↗
            </a>

          </Reveal>

          <Reveal delay="reveal-delay-2" className="grid grid-cols-2 gap-4">

            {[
              ["01+", "Years learning"],
              ["05+", "Mini projects"],
              ["100%", "Curiosity"],
              ["∞", "Ideas to build"],
            ].map(([number, label]) => (

              <div className="stat-card" key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>

            ))}

          </Reveal>

        </div>

      </div>

    </section>
  );
}