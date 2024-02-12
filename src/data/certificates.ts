interface ICertificate {
  title: string;
  issuer: "HackerRank" | "Udemy" | "UiPath";
  issueDate: string;
  href: string;
}

export const certificates: ICertificate[] = [
  {
    title: "Linux Bash Scripting",
    issuer: "Udemy",
    href: "https://www.udemy.com/certificate/UC-cff76f2b-759d-4d82-891d-ba49bfd80b04/",
    issueDate: "Jan 2024",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/a47afdba7182",
    issueDate: "Aug 2022",
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/11d8d847b3eb",
    issueDate: "Aug 2022",
  },
  {
    title: "NodeJS (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/1532ab94ed73",
    issueDate: "Aug 2022",
  },
  {
    title: "Node.js (Intermediate)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/06d811f74ec4",
    issueDate: "Aug 2022",
  },
  {
    title: "C# Basic",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/6bf89efac9de",
    issueDate: "Aug 2022",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/0245dd8693ec",
    issueDate: "Aug 2022",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/2b56d95bfb53",
    issueDate: "Aug 2022",
  },
];
