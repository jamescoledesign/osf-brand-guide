import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/Pages/Intro.md",
    title: "Intro",
    content: pageLoader(() => import("./Pages/Intro.md"))
  },
  // Brand Pages
  {
    title: "OSF",
    // Subpages of 'OSF'
    pages: [
      {
        path: '/Pages/OSF/OSF-About.md',
        title: 'About',
        content: pageLoader(() => import("./Pages/OSF/OSF-About.md"))
      },
      {
        path: '/Pages/OSF/Values.md',
        title: 'Values',
        content: pageLoader(() => import("./Pages/OSF/OSF-Values.md"))
      },
      {
        path: '/Pages/OSF/OSF-Logos.md',
        title: 'Logos',
        content: pageLoader(() => import("./Pages/OSF/OSF-Logos.md"))
      },
      {
        path: "/Pages/OSF/OSF-Colors.md",
        title: "Colors",
        content: pageLoader(() => import("./Pages/OSF/OSF-Colors.md"))
      },
      {
        path: "/Pages/OSF/OSF-Typography.md",
        title: "Typography",
        content: pageLoader(() => import("./Pages/OSF/OSF-Typography.md"))
      },
      {
        path: "/Pages/OSF/OSF-Patterns.md",
        title: "Patterns",
        content: pageLoader(() => import("./Pages/OSF/OSF-Patterns.md"))
      }
    ]
  },
  {
    title: "Events",
    // Subpages of 'Events'
    pages: [
      {
        path: '/Pages/Events/Events-About.md',
        title: 'About',
        content: pageLoader(() => import("./Pages/Events/Events-About.md"))
      },
      {
        path: '/Pages/Writing/Event1.md',
        title: 'Event 1',
        content: pageLoader(() => import("./Pages/Events/Event1.md"))
      },
      {
        path: '/Pages/Writing/Event2.md',
        title: 'Event 2',
        content: pageLoader(() => import("./Pages/Events/Event2.md"))
      }
    ]
  },
  {
    title: "Writing",
    // Subpages of 'Writing'
    pages: [
      {
        path: '/Pages/Writing/Voice.md',
        title: 'Voice',
        content: pageLoader(() => import("./Pages/Writing/Voice.md"))
      },
      {
        path: '/Pages/Writing/Terms.md',
        title: 'Terms',
        content: pageLoader(() => import("./Pages/Writing/Terms.md"))
      }
    ]
  },
  {
    path: "/Pages/Contact.md",
    title: "Contact",
    content: pageLoader(() => import("./Pages/Contact.md"))
  }
];

ReactDOM.render(
  <Catalog 
  title= 'Brand Guidelines'
  logoSrc="OSF_Logo_RGB_Horiz_Badge.svg" 
  pages={pages}
  theme={{
      textColor: "#000102",
      background: "#f6f6f6",
      linkColor: "#EC1944",
      pageHeadingBackground: "#EC1944",
      pageHeadingTextColor: "#fff",
      navBarBackground: "#EEEEEE",
      navBarTextColor: "#133e68",
      fontFamily: "'Open Sans', sans-serif",
      fontHeading: "'Open Sans bold', sans-serif",
      fontMono: "'Source Code Pro', monospace"
    }}  
 />,
  document.getElementById("catalog")
);
