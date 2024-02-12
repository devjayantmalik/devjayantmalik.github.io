import type { NextPage } from "next";
import { BoatOutlined } from "~src/components/Icons";
import { experience } from "~src/data";

const Experience: NextPage = () => {
  return (
    <article>
      <header>
        <h2 className="h2 article-title">Experience</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BoatOutlined />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experience.map((exp) => (
            <li key={exp.dateInterval} className="timeline-item">
              <h4 className="h4 timeline-item-title">{exp.title}</h4>
              <span>{exp.dateInterval}</span>
              <p className="timeline-text">{exp.company}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export default Experience;
