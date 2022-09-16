import React, { useState, useEffect } from "react";
import MarkdownPreviewer from "./MarkdownPreviewer/MarkdownPreviewer";
import MarkdownEditor from "./MarkdownEditor/MarkdownEditor";
import { MarkdownBox } from "./MarkdownContainer.styled";

type MarkdownContainerProps = {
  getMarkdown: (markdown: string) => void;
  markdown: string;
};

const MarkdownContainer = ({
  getMarkdown,
  markdown,
}: MarkdownContainerProps) => {
  const updateMarkdown = (markdown: string) => {
    getMarkdown(markdown);
  };

  return (
    <MarkdownBox>
      <MarkdownEditor updateMarkdown={updateMarkdown} markdown={markdown} />
      <MarkdownPreviewer markdown={markdown} />
    </MarkdownBox>
  );
};

export default MarkdownContainer;
