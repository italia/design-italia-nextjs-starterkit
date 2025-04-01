'use client';
import {
  Button,
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
} from 'design-react-kit';

export default function SlimHeader({ theme }: { theme?: 'dark' | 'light' }) {
  return (
    <Header theme={theme || ''} type="slim">
      <HeaderContent>
        <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
        <HeaderRightZone>
          <Dropdown inNavbar>
            <DropdownToggle inNavbar caret>
              ITA
            </DropdownToggle>
            <DropdownMenu style={{ marginTop: 60 }}>
              <LinkList>
                <LinkListItem inDropdown href="#">
                  <span>ITA</span>
                </LinkListItem>
                <LinkListItem inDropdown href="#">
                  <span>ENG</span>
                </LinkListItem>
              </LinkList>
            </DropdownMenu>
          </Dropdown>
          <Button className="btn-icon btn-full" color="primary" href="#">
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" />
            </span>
            <span className="d-none d-lg-block">
              Accedi all&#39;area personale
            </span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
}
