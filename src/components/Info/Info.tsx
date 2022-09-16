import React from "react";

import {
  InfoBox,
  InfoHeader,
  InfoTitle,
  InfoDescription,
  InfoButton,
} from "./Info.styled";

type InfoProps = {
  getIsCreatingMarkdownValue: (val: boolean) => void;
};

const Info = ({ getIsCreatingMarkdownValue }: InfoProps) => {
  return (
    <InfoBox>
      <InfoHeader>
        <InfoTitle>In-Browser Markdown Editor</InfoTitle>
        <InfoDescription>
          In-Browser Markdown Editor is the application where you can create
          your markdown for the blog posts or parse markdowns that you already
          have to HTML
        </InfoDescription>
      </InfoHeader>
      <InfoDescription>
        If you'd like to create markdown please click "Create Markdown" button
      </InfoDescription>
      <InfoButton onClick={() => getIsCreatingMarkdownValue(true)}>
        Create Markdown
      </InfoButton>
    </InfoBox>
  );
};

export default Info;
