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
  workTenure: string;
}

export const projects: IProject[] = [
  {
    title: "Eatoes",
    subtitle:
      "Android and Web Dashboard help food startups to grow their business.",
    href: "https://eatoes.com",
    icon: eatoes,
    workTenure: "Aug 2021 - Aug 2022",
  },
  {
    title: "Mehra Music Production",
    subtitle:
      "Web platform to distribute music and callertunes to all music stores such as Spotify, JioSaavn, iTunes etc.",
    href: "https://mehramusicproduction.com",
    icon: mehramusicproduction,
    workTenure: "Nov 2022 - Feb 2023",
  },
  {
    title: "Mices",
    subtitle:
      "Jetpack Compose android application built for a private business to generate invoices and track patient reports. Also available on playstore.",
    href: "https://developbharat.github.io/MicesWebsite",
    icon: mices,
    workTenure: "Mar 2023 - Apr 2023",
  },
  {
    title: "YoutubeBot",
    subtitle: "A Robot to use Youtube Services",
    href: "https://github.com/developbharat/YoutubeBot",
    icon: nodejs,
    workTenure: "Jan 2024 - Feb 2024",
  },
  {
    title: "Develop Bharat",
    subtitle: "A venture to make India, a software independent Nation.",
    href: "https://www.developbharat.com",
    icon: developbharat,
    workTenure: "Jun 2023 - Current",
  },
];
