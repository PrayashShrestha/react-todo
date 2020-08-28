import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <div>
      <Navbar color="dark">
        <NavbarBrand className="mx-auto text-danger font-weight-bold font-italic">
          TODO--APP
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;
