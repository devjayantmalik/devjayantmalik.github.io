import "../css/main.css";
import "../css/custom.css";

import { Sidebar } from "~src/components/Sidebar/Sidebar";
import { Navbar } from "~src/components/Navbar/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Portfolio | Jayant Malik",
  description: "We are pleased to welcome you here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
