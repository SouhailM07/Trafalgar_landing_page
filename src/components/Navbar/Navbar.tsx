// style
import "./navbar.css";
// react hooks
import { useState } from "react";
// react icons
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
/*=======================================================================================*/
/*                                       have fun*/
/*=======================================================================================*/
export default function Navbar() {
  let navarr: string[] = [
    "Home",
    "Find a doctor",
    "Apps",
    "Testimonials",
    "About us",
  ];
  //  state

  let [menu, menuToggle]: any = useState(true);
  return (
    <nav id="navbar" className=" flex justify-between mt-12">
      <div
        id="navbar__logo"
        className="flex items-center  w-28 justify-between"
      >
        <div className="w-8 h-8  bg-blue-500 rounded-full grid text-white place-items-center">
          T
        </div>
        <span>Trafalgar</span>
      </div>
      <ul id="navbar__links" className="flex items-center ">
        {navarr.map((link, index) => {
          return (
            <li key={index} className="mx-3">
              <a href={"#" + link}>{link}</a>
            </li>
          );
        })}
      </ul>
      <MenuRoundedIcon
        id="menu__icon"
        onClick={() => {
          menuToggle(!menu);
          let links_menu = document.querySelector(
            "#navbar__links"
          ) as HTMLUListElement;
          if (menu) {
            links_menu.style.display = "flex";
          } else {
            links_menu.style.display = "none";
          }
        }}
      />
    </nav>
  );
}

// var screenWidth = window.innerWidth;
// console.log("Current screen width: " + screenWidth + " pixels");

// {window.innerWidth < 700 ? (
//   <ul id="navbar__links" className="flex items-center ">
//     {navarr.map((link, index) => {
//       return (
//         <li key={index} className="mx-4">
//           <a href={"#" + link}>{link}</a>
//         </li>
//       );
//     })}
//   </ul>
// ) : null}
