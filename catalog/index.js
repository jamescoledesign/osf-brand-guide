import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Intro",
    content: pageLoader(() => import("./Intro.md"))
  },

  // Brand Pages
  {
    title: "Airship",
    // Subpages of 'Airship'
    pages: [
      {
        path: '/Pages/Airship/AS-About.md',
        title: 'About',
        content: pageLoader(() => import("./Pages/Airship/AS-About.md"))
      },
      {
        path: '/Pages/Airship/AS-Logos.md',
        title: 'Logos',
        content: pageLoader(() => import("./Pages/Airship/AS-Logos.md"))
      },
      {
        path: "/Pages/Airship/AS-Colors.md",
        title: "Colors",
        content: pageLoader(() => import("./Pages/Airship/AS-Colors.md"))
      },
      {
        path: "/Pages/Airship/AS-Typography.md",
        title: "Typography",
        content: pageLoader(() => import("./Pages/Airship/AS-Typography.md"))
      },
      {
        path: "/Pages/Airship/AS-Iconography.md",
        title: "Iconography",
        content: pageLoader(() => import("./Pages/Airship/AS-Iconography.md"))
      }
    ]
  },

  {
    title: "Kata Containers",
    // Subpages of 'Kata Containers'
    pages: [
      {
        path: '/Pages/KataContainers/KC-About.md',
        title: 'About',
        content: pageLoader(() => import("./Pages/KataContainers/KC-About.md"))
      },
      {
        path: '/Pages/KataContainers/KC-Logos.md',
        title: 'Logos',
        content: pageLoader(() => import("./Pages/KataContainers/KC-Logos.md"))
      },
      {
        path: "/Pages/KataContainers/KC-Colors.md",
        title: "Colors",
        content: pageLoader(() => import("./Pages/KataContainers/KC-Colors.md"))
      },
      {
        path: "/Pages/KataContainers/KC-Typography.md",
        title: "Typography",
        content: pageLoader(() => import("./Pages/KataContainers/KC-Typography.md"))
      },
      {
        path: "/Pages/KataContainers/KC-Iconography.md",
        title: "Iconography",
        content: pageLoader(() => import("./Pages/KataContainers/KC-Iconography.md"))
      }
    ]
  },

  {
    title: "OpenStack",
    // Subpages of 'OpenStack'
    pages: [
      {
        path: '/Pages/OpenStack/OS-About.md',
        title: 'About',
        content: pageLoader(() => import("./Pages/OpenStack/OS-About.md"))
      },
      {
        path: '/Pages/OpenStack/OS-Logos.md',
        title: 'Logos',
        content: pageLoader(() => import("./Pages/OpenStack/OS-Logos.md"))
      },
      {
        path: "/Pages/OpenStack/OS-Colors.md",
        title: "Colors",
        content: pageLoader(() => import("./Pages/OpenStack/OS-Colors.md"))
      },
      {
        path: "/Pages/OpenStack/OS-Typography.md",
        title: "Typography",
        content: pageLoader(() => import("./Pages/OpenStack/OS-Typography.md"))
      },
      {
        path: "/Pages/OpenStack/OS-Iconography.md",
        title: "Iconography",
        content: pageLoader(() => import("./Pages/OpenStack/OS-Iconography.md"))
      }
    ]
  },

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
    title: "StarlingX",
    // Subpages of 'StarlingX'
    pages: [
      {
        path: '/Pages/StarlingX/SX-About.md',
        title: 'About',
        content: pageLoader(() => import("./Pages/StarlingX/SX-About.md"))
      },
      {
        path: '/Pages/StarlingX/SX-Logos.md',
        title: 'Logos',
        content: pageLoader(() => import("./Pages/StarlingX/SX-Logos.md"))
      },
      {
        path: "/Pages/StarlingX/SX-Colors.md",
        title: "Colors",
        content: pageLoader(() => import("./Pages/StarlingX/SX-Colors.md"))
      },
      {
        path: "/Pages/StarlingX/SX-Typography.md",
        title: "Typography",
        content: pageLoader(() => import("./Pages/StarlingX/SX-Typography.md"))
      },
      {
        path: "/Pages/StarlingX/SX-Iconography.md",
        title: "Iconography",
        content: pageLoader(() => import("./Pages/StarlingX/SX-Iconography.md"))
      }
    ]
  },

  {
    title: "Zuul",
    // Subpages of 'Zuul'
    pages: [
      {
        path: '/Pages/Zuul/ZL-About.md',
        title: 'About',
        content: pageLoader(() => import("./Pages/Zuul/ZL-About.md"))
      },
      {
        path: '/Pages/Zuul/ZL-Logos.md',
        title: 'Logos',
        content: pageLoader(() => import("./Pages/Zuul/ZL-Logos.md"))
      },
      {
        path: "/Pages/Zuul/ZL-Colors.md",
        title: "Colors",
        content: pageLoader(() => import("./Pages/Zuul/ZL-Colors.md"))
      },
      {
        path: "/Pages/Zuul/ZL-Typography.md",
        title: "Typography",
        content: pageLoader(() => import("./Pages/Zuul/ZL-Typography.md"))
      },
      {
        path: "/Pages/Zuul/ZL-Iconography.md",
        title: "Iconography",
        content: pageLoader(() => import("./Pages/Zuul/ZL-Iconography.md"))
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
