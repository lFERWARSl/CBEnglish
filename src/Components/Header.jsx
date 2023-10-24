import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
function Header() {
  const [active, setActive] = useState("");
  const navHandler = (e) => {
    if (active === "") {
      setActive("active");
    } else if (active === "active") {
      setActive("");
    }
  };
  return (
    <>
      <header className="header-wrapper">
        <div className="container-xxl d-flex justify-content-between align-items-center py-2">
          <div className="header-left">
            <div className="header-logo">
              <NavLink to={"/"}>
                <img
                  src="/images/logo1.webp"
                  alt="logo"
                  className="img-fluid"
                />
              </NavLink>
            </div>
          </div>
          <div className="header-right d-flex align-items-center">
            <div>
              <div
                onClick={(e) => navHandler(e)}
                className="nav-button-container"
              >
                <span className="nav-button">
                  {active === "active" ? <RxCross2 /> : <AiOutlineMenu />}
                </span>
              </div>
              <ul className={`nav-menu ${active}`}>
                <NavLink
                  onClick={(e) => navHandler(e)}
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "header-link active" : "header-link"
                  }
                >
                  <li>Inicio</li>
                </NavLink>

                <NavLink
                  onClick={(e) => navHandler(e)}
                  to={"/Cursos"}
                  className={({ isActive }) =>
                    isActive ? "header-link active" : "header-link"
                  }
                >
                  <li>Cursos</li>
                </NavLink>

                <NavLink
                  onClick={(e) => navHandler(e)}
                  to={"/certificaciones"}
                  className={({ isActive }) =>
                    isActive ? "header-link active" : "header-link"
                  }
                >
                  <li>Certificaciónes</li>
                </NavLink>
                <NavLink
                  onClick={(e) => navHandler(e)}
                  to={"/nosotros"}
                  className={({ isActive }) =>
                    isActive ? "header-link active" : "header-link"
                  }
                >
                  <li>CB English</li>
                </NavLink>
                <NavLink
                  onClick={(e) => navHandler(e)}
                  to={"/Contacto"}
                  className="button"
                >
                  <li>Contacto</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
