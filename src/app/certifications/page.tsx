import type { NextPage } from "next";
import { BoatOutlined, BookOutlined, CalendarOutlined } from "~src/components/Icons";
import { education, experience } from "~src/data";
import { certificates } from "~src/data/certificates";

const Certificates: NextPage = () => {
  return (
    <article>
      <header>
        <h2 className="h2 article-title">Edu Certificates</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <CalendarOutlined />
          </div>
          <h3 className="h3">Certifications</h3>
        </div>
        <ol className="timeline-list">
          {certificates.map((cert) => (
            <li key={cert.href} className="timeline-item">
              <a href={cert.href} rel="noreferrer" target="_blank">
                <h4 className="h4 timeline-item-title">{cert.title}</h4>
              <span>{cert.issueDate}</span>
              <p className="timeline-text">{cert.issuer}</p>
              </a>
            </li>
          ))}
        </ol>
      </section>
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
    </article>
  );
};

export default Certificates;
