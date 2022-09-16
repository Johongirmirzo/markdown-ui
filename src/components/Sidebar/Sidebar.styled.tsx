import styled, { css } from "styled-components";

const SidebarBox = styled.aside`
  /* &::before {
    position: absolute;
    content: "";
    right: 0;
    width: 100%;
    z-index: 0;
    top: 0;
    bottom: 0;
    box-shadow: 3px 0 10px rgba(0, 0, 0, 0.07);
  }

  &.light-mode::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 84%);
  } */
`;
const SidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
`;
const SidebarMenuContainer = styled.div`
  position: fixed;
  padding-top: 80px;
  top: 0;
  bottom: 0;
  width: 300px;
  padding-right: 0;
  transform: translateX(-500px);
  background: hsl(0, 0%, 17%);
  color: #fff;
  transition: all 0.3s ease-out;

  &.active {
    transform: translateX(0);
    padding-right: 20px;
  }

  @media (max-width: 550px) {
    max-width: 250px;
    min-width: 200px;
  }
`;
const SidebarNav = styled.nav`
  margin-top: 25px;
`;
const SidebarList = styled.ul``;
const SidebarHeader = styled.header`
  padding-left: 20px;
  padding-top: 5px;
`;
const SidebarTitle = styled.h2`
  font-size: clamp(1.6rem, calc(2.5vw + 1rem), 2rem);
  font-weight: 600;
`;

export {
  SidebarBox,
  SidebarOverlay,
  SidebarMenuContainer,
  SidebarNav,
  SidebarList,
  SidebarHeader,
  SidebarTitle,
};
