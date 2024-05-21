"use client";
import {
  Collapse,
  Header,
  HeaderContent,
  HeaderToggler,
  Icon,
  Nav,
} from "design-react-kit";
import { NavItem, NavLink } from "reactstrap";

export default function NavHeader({ theme }: { theme?: "dark" | "light" }) {
  return (
    <Header theme={theme || ""} type="navbar">
      <HeaderContent expand="lg" megamenu>
        <HeaderToggler
          aria-controls="nav1"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {}}
        >
          <Icon icon="it-burger" />
        </HeaderToggler>
        <Collapse header navbar onOverlayClick={() => {}}>
          <div className="menu-wrapper">
            <Nav navbar>
              <NavItem active>
                <NavLink active href="#">
                  <span>link 1 active </span>
                  <span className="visually-hidden">current</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">
                  Link 2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link 3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link 4</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </HeaderContent>
    </Header>
  );
}
