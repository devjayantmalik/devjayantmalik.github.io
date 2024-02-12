"use client";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Routes } from "~constants/Routes";

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NextLink
            className={clsx(
              "navbar-link",
              pathname === Routes.about ? "active" : null
            )}
            href={Routes.about}
          >
            About
          </NextLink>
        </li>
        <li className="navbar-item">
          <NextLink
            className={clsx(
              "navbar-link",
              pathname === Routes.experience ? "active" : null
            )}
            href={Routes.experience}
          >
            Experience
          </NextLink>
        </li>
        <li className="navbar-item">
          <NextLink
            className={clsx(
              "navbar-link",
              pathname === Routes.skills ? "active" : null
            )}
            href={Routes.skills}
          >
            Skills
          </NextLink>
        </li>
        <li className="navbar-item">
          <NextLink
            className={clsx(
              "navbar-link",
              pathname === Routes.certifications ? "active" : null
            )}
            href={Routes.certifications}
          >
            Certifications
          </NextLink>
        </li>
        
        <li className="navbar-item">
          <NextLink
            className={clsx(
              "navbar-link",
              pathname === Routes.projects ? "active" : null
            )}
            href={Routes.projects}
          >
            Projects
          </NextLink>
        </li>
        <li className="navbar-item">
          <NextLink
            className={clsx(
              "navbar-link",
              pathname === Routes.contact ? "active" : null
            )}
            href={Routes.contact}
          >
            Contact
          </NextLink>
        </li>
      </ul>
    </nav>
  );
};
