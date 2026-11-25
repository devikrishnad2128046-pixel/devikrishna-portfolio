import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const skills = [
  ["HTML5", "Markup & structure", "01"],
  ["CSS3", "Layouts & styling", "02"],
  ["JavaScript", "Interactive experiences", "03"],
  ["React", "Component-based UI", "04"],
  ["Tailwind CSS", "Responsive design", "05"],
  ["Git & GitHub", "Version control", "06"],
];

export default function Skills() {
  return (
    <section id="skills" className="section-space section-muted">

      <div className="container-shell">

        <Reveal>
          <SectionTitle
            eyebrow="What I work with"
            title="Skills & technologies."
            text="Tools I use to turn ideas into responsive and engaging web experiences."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map(([name, detail, number], index) => (

            <Reveal
              key={name}
              delay={
                index % 3 === 1
                  ? "reveal-delay-1"
                  : index % 3 === 2
                  ? "reveal-delay-2"
                  : ""
              }
            >

              <div className="skill-card">

                <span className="text-xs text-cyan-300">
                  {number}
                </span>

                <div>
                  <h3>{name}</h3>
                  <p>{detail}</p>
                </div>

                <span className="skill-arrow">↗</span>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}