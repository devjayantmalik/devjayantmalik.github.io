import type { NextPage } from "next";
import { PaperPlaneOutlined } from "~src/components/Icons";

const Contact: NextPage = () => {
  return (
    <article>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      {/* <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6859.633166560807!2d76.83412474251719!3d30.7235563483544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9333773d5863%3A0xf32395e75d7dffc0!2sIT%20Park%20Chandigarh!5e0!3m2!1sen!2sin!4v1694520035735!5m2!1sen!2sin"
            width={400}
            height={300}
            loading="lazy"
          />
        </figure>
      </section> */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Details</h3>
        <ul className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Name</h4>
            <p className="timeline-text">Jayant Malik</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Mobile</h4>
            <p className="timeline-text">+917015108956</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Email</h4>
            <p className="timeline-text">work.jayantmalik@gmail.com</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Location</h4>
            <p className="timeline-text">Chandigarh, India</p>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Contact;
