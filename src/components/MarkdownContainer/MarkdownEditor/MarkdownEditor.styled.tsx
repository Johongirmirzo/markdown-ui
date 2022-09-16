import styled from "styled-components";

const MarkdownEditorBox = styled.div``;
const MarkdownEditorHeader = styled.header`
  padding: 10px;
  background: #333;
`;
const MarkdownEditorTitle = styled.h2`
  color: #999;
  font-size: 18px;
  font-weight: 500;
  padding-left: 15px;
`;

const MarkdownTextarea = styled.textarea`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  color: hsl(0, 0%, 80%);
  background: #222;
  padding: 15px;
  font-weight: 500;
  outline: transparent;
  font-size: 18px;
  resize: none;
`;

export {
  MarkdownEditorBox,
  MarkdownEditorHeader,
  MarkdownEditorTitle,
  MarkdownTextarea,
};
