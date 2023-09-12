import Image from "next/image";
import React from "react";
import me from "~assets/pics/me.png";
import {
  ChevronDownOutlined,
  DownloadOutlined,
  EarthOutlined,
  GithubLogo,
  LinkedinLogo,
  LocationOutlined,
  MailOutlined,
  ManOutlined,
  PhonePortraitOutlined,
  TwitterLogo,
} from "~src/components/Icons";

interface ISidebarProps {}

export const Sidebar: React.FC<ISidebarProps> = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image src={me} width={180} height={180} alt="Jayant Malik" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Jayant malik">
            Jayant Malik
          </h1>
          <p className="title">Software Engineer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ChevronDownOutlined />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutlined />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:work.jayantmalik@gmail.com"
                className="contact-link"
              >
                work.jayantmalik@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <PhonePortraitOutlined />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+917015108956" className="contact-link">
                +91 (701) 510-8956
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ManOutlined />
            </div>
            <div className="contact-info">
              <p className="contact-title">Gender</p>
              <p className="contact-link">Male</p>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <LocationOutlined />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Chandigarh, India</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a
              href="/content/Jayant-CV.pdf"
              target="_blank"
              className="social-link"
            >
              <DownloadOutlined />
            </a>
          </li>
          <li className="social-item">
            <a
              target="_blank"
              href="https://www.developbharat.com"
              className="social-link"
            >
              <EarthOutlined />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/devjayantmalik"
              target="_blank"
              className="social-link"
            >
              <LinkedinLogo />
            </a>
          </li>
          <li className="social-item">
            <a
              target="_blank"
              href="https://twitter.com/BharatDevelop"
              className="social-link"
            >
              <TwitterLogo />
            </a>
          </li>
          <li className="social-item">
            <a
              target="_blank"
              href="https://github.com/devjayantmalik"
              className="social-link"
            >
              <GithubLogo />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
