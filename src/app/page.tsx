import Image from "next/image";
import iconDesign from "~assets/images/about/icon-design.svg";
import iconDev from "~assets/images/about/icon-dev.svg";
import iconApp from "~assets/images/about/icon-app.svg";
import iconPhoto from "~assets/images/about/icon-photo.svg";

export default function Home() {
  return (
    <article>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I&apos;m Software Engineer and Tech Saavy from Chandigarh, India,
          working in web development, android development, core development and
          DevOps. I enjoy turning complex problems into simple, beautiful and
          intuitive code.
        </p>
        <p>
          I really enjoy coding and hunting down bugs. I drive company missions
          through teamwork, R&D, and innovation. Furthermore, I use
          collaborative experience sharing to make company stronger and move
          forward. Thinking out of the box is magic recipe that I use to make
          systems stronger and optimised.
        </p>
      </section>
      {/*- service */}
      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>
        <ul className="service-list">
         
          <li className="service-item">
            <div className="service-icon-box">
              <Image src={iconDev} alt="Web development icon" width={40} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <Image src={iconApp} alt="mobile app icon" width={40} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>
              <p className="service-item-text">
                Professional development of applications for both iOS and Android.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <Image
                src={iconDesign}
                alt="design icon"
                width={40}
                height={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Technical Consulting</h4>
              <p className="service-item-text">
                The most efficient team management and technical consulting made
                at a professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <Image src={iconPhoto} alt="camera icon" width={40} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Co-Foundership</h4>
              <p className="service-item-text">
                I like to build professional services with teams to bring value.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
