import React, { useState } from "react";
import {
  MarkdownEditorBox,
  MarkdownEditorHeader,
  MarkdownEditorTitle,
  MarkdownTextarea,
} from "./MarkdownEditor.styled";

type MarkdownEditorProps = {
  updateMarkdown: (markdown: string) => void;
  markdown: string;
};

const MarkdownEditor = ({ updateMarkdown, markdown }: MarkdownEditorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateMarkdown(e.target.value);
  };

  return (
    <MarkdownEditorBox>
      <MarkdownEditorHeader>
        <MarkdownEditorTitle>MARKDOWN</MarkdownEditorTitle>
      </MarkdownEditorHeader>
      <MarkdownTextarea
        onChange={handleChange}
        value={markdown}
        placeholder="Type your markdown in here"
      ></MarkdownTextarea>
    </MarkdownEditorBox>
  );
};

export default MarkdownEditor;
