import { Navbar } from "~src/components/Navbar/Navbar";
import { Sidebar } from "~src/components/Sidebar/Sidebar";
import "../css/custom.css";
import "../css/main.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Portfolio | Jayant Malik",
  description: "We are pleased to welcome you here.",
  icons: [
    { rel: "icon", url: "/icon.png" },
    { rel: "apple-touch-icon", url: "/apple-icon.png" },
  ],
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
