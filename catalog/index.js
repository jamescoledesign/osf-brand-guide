import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";


const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./Welcome.md"))
  },
  {
    path: "/Page1.md",
    title: "Page 1",
    content: pageLoader(() => import("./Page1.md"))
  },
  {
    path: "/Page2.md",
    title: "Page 2",
    content: pageLoader(() => import("./Page2.md"))
  },
  {
    path: "/Page3.md",
    title: "Page 3",
    content: pageLoader(() => import("./Page3.md"))
    
  }
];

ReactDOM.render(
  <Catalog 
  title= 'Brand Guidelines'
  logoSrc="OSF_Logo_RGB_Horiz_Badge.svg" 
  pages={pages} />,
  document.getElementById("catalog")
);
