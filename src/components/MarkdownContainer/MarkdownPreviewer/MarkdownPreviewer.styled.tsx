import styled from "styled-components";

const MarkdownPreviewerBox = styled.div`
  background: #222;
  border-left: 0;
  min-height: 100vh;
  color: #fff;
  @media (min-width: 768px) {
    border-left: 5px solid #666;
  }
`;
const MarkdownPreviewerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #333;
`;
const MarkdownPreviewerTitle = styled.h2`
  color: #999;
  font-size: 18px;
  font-weight: 500;
  padding-left: 15px;
`;
const MarkdownPreviewerContainer = styled.div`
  padding: 15px;
  color: hsl(0, 0%, 80%);

  & > * {
    margin: 10px 0;
  }
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    font-weight: 600;
  }
  & h1 {
    font-size: clamp(2rem, calc(3.5vw + 1rem), 3rem);
  }
  & h2 {
    font-size: clamp(1.6rem, calc(3vw + 1rem), 2.6rem);
  }
  & h3 {
    font-size: clamp(1.3rem, calc(2.4vw + 1rem), 2.3rem);
  }
  & h4 {
    font-size: clamp(1.2rem, calc(2.2vw + 1rem), 2rem);
  }
  & h5 {
    font-size: clamp(1.1rem, calc(1.8vw + 1rem), 1.8rem);
  }
  & h6 {
    font-size: clamp(1rem, calc(1.5vw + 1rem), 1.6rem);
  }
  & a {
    color: #1583e4;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-color: #1583e4;
  }
  & ul,
  ol {
    padding-left: 30px;
  }
  & pre {
    margin: 10px 0;
  }
  & blockquote {
    background: #555;
    padding: 25px;
    border-radius: 5px;
    font-size: 1.1rem;
    border-left: 5px solid hsl(17, 77%, 56%);
    margin: 10px 0;
  }
`;

export {
  MarkdownPreviewerBox,
  MarkdownPreviewerHeader,
  MarkdownPreviewerTitle,
  MarkdownPreviewerContainer,
};
