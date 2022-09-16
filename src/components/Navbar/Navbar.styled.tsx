import styled from "styled-components";

const NavbarHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  background: #444;
  @media (min-width: 828px) {
    flex-direction: row;
  }
`;
const NavLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Hamburger = styled.div`
  background: #555;
  padding: 20px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 9999;
  &.active {
    & > *:first-child {
      transform: rotate(45deg) translate(6px, 8px);
    }
    & > *:nth-child(2) {
      transform: translate(100px);
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    & > *:last-child {
      transform: rotate(-45deg) translate(5px, -9px);
    }
  }
`;

const HamburgerLine = styled.div`
  width: 36px;
  height: 3px;
  background: #fff;
  margin-bottom: 7px;
  transition: all 0.35s ease-out;
`;
const NavTitle = styled.h2`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
  border-right: 2px solid #d9d9d9;
  padding-right: 20px;
`;
const NavMarkdownInputBox = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-left: 20px;
  }
  & p {
    color: #fff;
    margin-bottom: 3px;
  }
  & input {
    background: transparent;
    outline: transparent;
    color: #f7f7f7;
    &::placeholder {
      color: #999;
    }
  }
`;
const NavRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 0;
  margin-bottom: 20px;
  align-self: center;
  text-align: center;

  @media (min-width: 828px) {
    margin-bottom: 0;
    margin-right: 15px;
  }
`;

const Button = styled.button`
  color: #fff;
  fontw-weight: 600;
  padding: 8px 15px;
  border-radius: 5px;
`;

const NavButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: hsl(17, 77%, 56%);
`;
const NavLogoutButton = styled(Button)`
  background: #e53e3e;
`;
const NavCreateMarkdownButton = styled(Button)`
  background: hsl(215, 100%, 50%);
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  padding: 8px 20px;
`;

export {
  NavbarHeader,
  NavLeftSide,
  Hamburger,
  HamburgerLine,
  NavTitle,
  NavMarkdownInputBox,
  NavRightSide,
  NavButton,
  NavLogoutButton,
  NavCreateMarkdownButton,
};
