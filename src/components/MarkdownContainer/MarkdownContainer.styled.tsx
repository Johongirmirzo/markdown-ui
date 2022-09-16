import styled from "styled-components";

const MarkdownBox = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    flex: 1;
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    & > * {
      width: 50%;
    }
  }
`;
export { MarkdownBox };
