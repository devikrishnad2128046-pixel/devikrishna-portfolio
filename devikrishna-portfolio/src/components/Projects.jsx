import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const projects = [
  {
    n: "01",
    title: "Online Food Management",
    desc: "A platform for browsing food items, managing orders and making the ordering process simple.",
    tags: ["React", "CSS", "JavaScript"],
    style: "project-art-one",
  },
  {
    n: "02",
    title: "Student Registration",
    desc: "A responsive registration interface with clear form fields and a user-friendly layout.",
    tags: ["React", "Tailwind CSS"],
    style: "project-art-two",
  },
  {
    n: "03",
    title: "To-Do Application",
    desc: "A simple task manager to add, view and organise everyday tasks.",
    tags: ["React", "CSS"],
    style: "project-art-three",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-space">

      <div className="container-shell">

        <Reveal>
          <SectionTitle
            eyebrow="Selected work"
            title="Projects I have built."
            text="A few projects that show what I enjoy creating."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">

          {projects.map((project, index) => (

            <Reveal
              key={project.n}
              delay={
                index === 1
                  ? "reveal-delay-1"
                  : index === 2
                  ? "reveal-delay-2"
                  : ""
              }
            >

              <article className="project-card">

                <div className={`project-art ${project.style}`}>

                  <span className="project-number">
                    {project.n} / 03
                  </span>

                  <div className="mock-window">

                    <div className="mock-dots">
                      ● ● ●
                    </div>

                    <div className="mock-lines">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>

                    <div className="mock-blocks">
                      <b></b>
                      <b></b>
                      <b></b>
                    </div>

                  </div>

                  <span className="project-spark">✦</span>

                </div>

                <div className="p-7">

                  <h3>{project.title}</h3>

                  <p className="mt-3 min-h-[76px] text-sm leading-6 text-slate-400">
                    {project.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}