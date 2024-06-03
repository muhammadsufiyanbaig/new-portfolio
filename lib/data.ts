import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Ecommerce from "@/public/Ecommerce.jpg";
import PictureGallery from "@/public/PictureGallery.jpg";
import ExpenseTracker from "@/public/ExpenseTracker.jpg";
import LoginSignup from "@/public/LoginSignup.jpg"
import Quiz from "@/public/Quiz.jpg"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Intern",
    location: "Karachi, Pakistan",
    description:
      "I'm now a full-stack intern working at Panacloud. My stack includes React, Next.js, TypeScript, Tailwind, Firebase, Express.js and SQLite. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Sep-2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rupeeya Expense Tracker",
    description:
      "This is a Expense Tracker. It is built using React.js, Tailwind CSS, JS and Chart.js. It is hosted on Vercel.",
    tags: ["React", "Tailwind", "Javascript"],
    imageUrl: ExpenseTracker,
    projectLink: "https://rupeeya.vercel.app/"
  },
  {
    title: "Next Commerce",
    description:
      "This is a Next.js e-commerce website. It is built using Next.js, Tailwind CSS and Sanity.io. It is hosted on Vercel.",
    tags: ["React", "Next.js", "Tailwind CSS", "Sanity.io", "Shadcn UI"],
    imageUrl: Ecommerce,
    projectLink: "https://nxtcom.vercel.app/"
  },
  {
    title: "Gallery Grid",
    description:
      "It's a Next.js Picture Gallery website. It is built using Next.js, Tailwind CSS, NextAuth and Firebase. It is hosted on Vercel.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase"],
    imageUrl: PictureGallery,
    projectLink: "https://gallerygrid.vercel.app/"
  },
  {
    title: "Authentication System",
    description:
      "This project is an authentication system with React.js front end, Express.js back end, and SQLite database.",
    tags: ["React", "Tailwind", "Javascript", "Express.js", "SQLite", "JWT"],
    imageUrl: LoginSignup,
    projectLink: "https://github.com/muhammadsufiyanbaig/Authentication"
  },
  {
    title: "Full-Stack Quiz",
    description:
      "A full-stack Quiz Application using React.js and Tailwind CSS for the frontend, Express.js with SQLite for the backend, and middleware for secure authorization.",
    tags: ["React", "Tailwind", "Javascript", "Express.js", "SQLite", "JWT"],
    imageUrl: Quiz,
    projectLink: "https://github.com/muhammadsufiyanbaig/Middleware-Quiz"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQLite",
  "Redux",
  "Groq",
  "Sanity.io",
  "Express",
  "Vercel Postgress",
  "Python",
  "FastAPI",
  "Framer Motion",
] as const;
