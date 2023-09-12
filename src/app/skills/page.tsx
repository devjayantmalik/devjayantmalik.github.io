import type { NextPage } from "next";
import { skillset } from "./data";

const Skills: NextPage = () => {
  return (
    <article>
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>

      <div className="grid gap-6 grid-cols-2">
        {skillset.map(({ category, skills }) => (
          <section key={category} className="skill content-card">
            <h3 className="h3 skills-title">{category}</h3>
            <ul className="skills-list content-card">
              {skills.map(({ name, percent }) => (
                <li key={name} className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">{name}</h5>
                    <data className="ml-auto" value={percent}>
                      {percent}%
                    </data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
};

export default Skills;
