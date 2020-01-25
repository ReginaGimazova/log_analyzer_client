import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import {Link} from "react-router-dom";
import {AsideMenuWrapper} from './styles';

const AsideMenu = () => {
  return (
    <AsideMenuWrapper>
      <Menu>
        <Link to='/' activeClassName="active">Original dump size</Link>
        <Link to='/critical-statuses' activeClassName="active">Critical statuses</Link>
        <Link to='/tables' activeClassName="active">Table calls stats</Link>
        <Link to='/configuration' activeClassName="active">Сonfiguration</Link>
      </Menu>
    </AsideMenuWrapper>
  )
};

export default AsideMenu;
