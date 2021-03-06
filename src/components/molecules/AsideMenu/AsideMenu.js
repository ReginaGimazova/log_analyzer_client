import React from "react";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import AsideMenuWrapper from "./styles";

const AsideMenu = () => {
  return (
    <AsideMenuWrapper>
      <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
        <Link to="/?byHost=false" activeclassname="active">
          Original dump analyze
        </Link>
        <Link to="/critical-statuses?explain=true" activeclassname="active">
          Critical statuses
        </Link>
        <Link to="/tables" activeclassname="active">
          Table calls stats
        </Link>
        <Link to="/configuration?explain=true" activeclassname="active">
          Сonfiguration
        </Link>
      </Menu>
    </AsideMenuWrapper>
  );
};

export default AsideMenu;
