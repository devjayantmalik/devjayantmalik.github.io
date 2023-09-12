interface IEducation {
  subject: string;
  dateInterval: string;
  place: string;
  description: string;
}

export const education: IEducation[] = [
  {
    subject: "B.Tech Computer Science & Engineering",
    dateInterval: "2018 — 2022",
    place: "MDU, Rohtak, IN",
    description:
      "A learning journey that will never be forgotten, taught us skills to make computers work hard for us and made some good friends to spend time while computer calculates value of PI. And we really worked hard to wrap our head around data structures.",
  },
  {
    subject: "Web Development with Python and JavaScript",
    dateInterval: "Jul 2019 — Oct 2019",
    place: "CS50, HarvardX, USA",
    description:
      "Brian was an excellent teacher to explain concepts during the course. The lectures and assignments provided a future ready foundation to face real world challenges.",
  },
  {
    subject: "Introduction to Computer Science",
    dateInterval: "Jul 2019 — Oct 2019",
    place: "CS50, HarvardX, USA",
    description:
      "David was an excellent cordinator along with Brian our main Instructor during the course. The lectures and assignments provided a future ready foundation to face real world challenges.",
  },
];
