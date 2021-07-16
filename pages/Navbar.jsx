import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import styles from '../styles/Navbar.module.css';
import ModalButton from './Modal';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const modalProps =  {
  //   name: topCoins.name,
  //   price: topCoins.current_price
  // }

  return (
    <div>
      <Navbar className={styles.navbar} expand="md">
        <NavbarBrand className={styles.navbar} href="/">Cryptocurrency Price Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            {/* <ModalButton props={topCoins}/> */}
            
              {/* <NavLink className={styles.navbar} href="/modal/">Wealth</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;