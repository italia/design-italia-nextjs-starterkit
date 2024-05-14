"use client";
import {
  Collapse,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Header,
  HeaderContent,
  HeaderToggler,
  Icon,
  LinkList,
  LinkListItem,
  MegamenuHighlightColumn,
  MegamenuItem,
  Nav,
} from "@/design-react-kit";
import { Col, Row, NavItem, NavLink } from "reactstrap";

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
              <Dropdown inNavbar tag="li">
                <DropdownToggle caret inNavbar>
                  <span>Menu Dropdown</span>
                </DropdownToggle>
                <DropdownMenu>
                  <LinkList>
                    <LinkListItem href="#" inDropdown>
                      <span>Link list 1</span>
                    </LinkListItem>
                    <LinkListItem href="#" inDropdown>
                      <span>Link list 2</span>
                    </LinkListItem>
                    <LinkListItem href="#" inDropdown>
                      <span>Link list 3</span>
                    </LinkListItem>
                    <LinkListItem href="#" inDropdown>
                      <span>Link list 4</span>
                    </LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </Dropdown>
              <MegamenuItem itemName="Megamenu con Immagine e Descrizione">
                <Row>
                  <MegamenuHighlightColumn description lg="4" xs="12">
                    <div className="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                      <figure className="figure">
                        <img
                          alt="Segnaposto"
                          className="figure-img img-fluid rounded"
                          src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine"
                        />
                      </figure>
                    </div>
                    <p>
                      Omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam.
                    </p>
                  </MegamenuHighlightColumn>
                  <Col lg="8" xs="12">
                    <div className="it-heading-link-wrapper">
                      <a className="it-heading-link" href="#">
                        <Icon
                          className="icon icon-sm me-2 mb-1"
                          icon="it-arrow-right-triangle"
                        />
                        <span>Esplora la sezione megamenu</span>
                      </a>
                    </div>
                    <Row>
                      <Col lg="6" xs="12">
                        <LinkList>
                          <LinkListItem href="#" inDropdown>
                            <Icon
                              className="me-2"
                              color="primary"
                              icon="it-arrow-right-triangle"
                              size="xs"
                            />
                            <span>Link lista 1</span>
                          </LinkListItem>
                          <LinkListItem href="#" inDropdown>
                            <Icon
                              className="me-2"
                              color="primary"
                              icon="it-arrow-right-triangle"
                              size="xs"
                            />
                            <span>Link lista 2</span>
                          </LinkListItem>
                          <LinkListItem href="#" inDropdown>
                            <Icon
                              className="me-2"
                              color="primary"
                              icon="it-arrow-right-triangle"
                              size="xs"
                            />
                            <span>Link lista 3</span>
                          </LinkListItem>
                        </LinkList>
                      </Col>
                      <Col lg="6" xs="12">
                        <LinkList>
                          <LinkListItem href="#" inDropdown>
                            <Icon
                              className="me-2"
                              color="primary"
                              icon="it-arrow-right-triangle"
                              size="xs"
                            />
                            <span>Link lista 4</span>
                          </LinkListItem>
                          <LinkListItem href="#" inDropdown>
                            <Icon
                              className="me-2"
                              color="primary"
                              icon="it-arrow-right-triangle"
                              size="xs"
                            />
                            <span>Link lista 5</span>
                          </LinkListItem>
                          <LinkListItem href="#" inDropdown>
                            <Icon
                              className="me-2"
                              color="primary"
                              icon="it-arrow-right-triangle"
                              size="xs"
                            />
                            <span>Link lista 6</span>
                          </LinkListItem>
                        </LinkList>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </MegamenuItem>
            </Nav>
          </div>
        </Collapse>
      </HeaderContent>
    </Header>
  );
}
