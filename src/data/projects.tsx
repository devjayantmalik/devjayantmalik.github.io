import { StaticImageData } from "next/image";
import developbharat from "~assets/images/projects/developbharat.webp";
import eatoes from "~assets/images/projects/eatoes.webp";
import mehramusicproduction from "~assets/images/projects/mehramusicproduction.webp";
import mices from "~assets/images/projects/mices.webp";
import nodejs from "~assets/images/projects/nodejs.webp";

interface IProject {
  title: string;
  subtitle: string;
  href: string;
  icon: StaticImageData;
}

export const projects: IProject[] = [
  {
    title: "Develop Bharat",
    subtitle:
      "My Self funded project to Develop Products That Serve Humanity, Empowering a Self-Reliant Nation through Digital Innovation.",
    href: "https://www.developbharat.com",
    icon: developbharat,
  },
  {
    title: "Eatoes",
    subtitle:
      "Android and Web Dashboard help businesses find delicious food options nearby and allow you to quickly browse through food reviews before ordering.",
    href: "https://eatoes.com",
    icon: eatoes,
  },
  {
    title: "Mehra Music Production",
    subtitle:
      "Web platform to distribute music and callertunes to all music stores such as Spotify, JioSaavn, iTunes etc.",
    href: "https://mehramusicproduction.com",
    icon: mehramusicproduction,
  },
  {
    title: "Mices",
    subtitle:
      "Jetpack Compose android application built for a private business to generate invoices and track patient reports. Also available on playstore.",
    href: "https://developbharat.github.io/MicesWebsite",
    icon: mices,
  },
  {
    title: "YoutubeBot",
    subtitle:
      "A Robot to use Youtube Services",
    href: "https://github.com/developbharat/YoutubeBot",
    icon: nodejs,
  },
];
