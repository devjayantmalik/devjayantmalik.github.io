import type { NextPage } from "next";
import { BoatOutlined, BookOutlined } from "~src/components/Icons";
import { education, experience } from "~src/data";

const Certifications: NextPage = () => {
  return (
    <article>
      <header>
        <h2 className="h2 article-title">Certifications</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOutlined />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {education.map((edu) => (
            <li key={edu.dateInterval} className="timeline-item">
              <h4 className="h4 timeline-item-title">{edu.subject}</h4>
              <span>
                {edu.dateInterval} | {edu.place}
              </span>
              <p className="timeline-text">{edu.description}</p>
            </li>
          ))}
        </ol>
      </section>
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

export default Certifications;
