"use client";
import {
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
  HeaderSearch,
  HeaderSocialsZone,
  Icon,
} from "design-react-kit";
export default function CenterHeader({ theme }: { theme?: "dark" | "light" }) {
  return (
    <Header theme={theme || ""} type="center">
      <HeaderContent>
        <HeaderBrand iconAlt="it code circle icon" iconName="it-code-circle">
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h3>Inserire qui la tag line</h3>
        </HeaderBrand>
        <HeaderRightZone>
          <HeaderSocialsZone label="Seguici su">
            <ul>
              <li>
                <a aria-label="Facebook" href="#" target="_blank">
                  <Icon icon="it-facebook" />
                </a>
              </li>
              <li>
                <a aria-label="Github" href="#" target="_blank">
                  <Icon icon="it-github" />
                </a>
              </li>
              <li>
                <a aria-label="Twitter" href="#" target="_blank">
                  <Icon icon="it-twitter" />
                </a>
              </li>
            </ul>
          </HeaderSocialsZone>
          <HeaderSearch iconName="it-search" label="Cerca" />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
}
