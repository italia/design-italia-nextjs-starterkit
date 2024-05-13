"use client";
import {
  Button,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
  Icon,
  LinkList,
  LinkListItem,
  Row,
} from "design-react-kit";
export default function SlimHeader({ theme }: { theme?: "dark" | "light" }) {
  return (
    <Header theme={theme || ""} type="slim">
      <HeaderContent>
        <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
        <HeaderRightZone>
          <Dropdown inNavbar>
            <DropdownToggle caret inNavbar>
              ITA
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem href="#" inDropdown>
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem href="#" inDropdown>
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </Dropdown>
          <Button className="btn-icon btn-full" color="primary" href="#">
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" />
            </span>
            <span className="d-none d-lg-block">Accedi all'area personale</span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
}
