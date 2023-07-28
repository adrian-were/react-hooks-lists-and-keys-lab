import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const displayLink = links.map((link) =>{
    return <a href={`#${link}`} key={link}>{link}</a>
  })

  return <nav>{displayLink}</nav>;
}

export default NavBar;
