import PropTypes from "prop-types";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import axiosConfig from "../../axiosConfig";
import Menu from "../Menu";
const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const [category, setCategoryList] = useState([]);

  const getCategory = () => {
    axiosConfig
      .get(`/admin/getallCategory`)
      .then(response => {
        setCategoryList(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
          </li>

          <li>
            <Link to="/kundaliform">Match Making</Link>
          </li>

          {/* <li>
            <Link to="/freekundli"> Free Kundli</Link>
          </li> */}

          <li>
            <Link to="/allastrologerlist">Talk Astrologer</Link>
          </li>

          <li>
            <Link to="/liveAstrologer">Live Astrologer</Link>
          </li>
          <li>
            <Link to="#">Dosh</Link>
            <ul className="submenu">
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/manglikdosh"}>
                  Manglik Dosh
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  Pitra Dosh
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  Kalsharp Dosh
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Horoscopes</Link>
            <ul className="submenu">
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/heroscopestwo3"}>
                  Tomorrow
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/heroscopestwo"}>
                  Daily
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/heroscopestwo1"}>
                  Weekly
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/heroscopestwo2"}>
                  Monthly
                </Link>
              </li>
            </ul>
          </li>

          <li className="">
            <Link to={process.env.PUBLIC_URL + "/astromallList"}>
              Astromall
            </Link>
          </li>
          {/* <li>
            <Link onclick={Menu()}>Menu</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);
