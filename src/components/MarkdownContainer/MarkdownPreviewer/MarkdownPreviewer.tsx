import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  MarkdownPreviewerBox,
  MarkdownPreviewerHeader,
  MarkdownPreviewerTitle,
  MarkdownPreviewerContainer,
} from "./MarkdownPreviewer.styled";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import emoji from "remark-emoji";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

type MarkdownPreviewerProps = {
  markdown: string;
};

const MarkdownPreviewer = ({ markdown }: MarkdownPreviewerProps) => {
  const [isMarkdownHidden, setIsMarkdownHidden] = useState(false);

  const toggleMarkdown = () => setIsMarkdownHidden(!isMarkdownHidden);
  return (
    <MarkdownPreviewerBox>
      <MarkdownPreviewerHeader>
        <MarkdownPreviewerTitle>PREVIEW</MarkdownPreviewerTitle>
        {!isMarkdownHidden ? (
          <AiOutlineEye
            onClick={toggleMarkdown}
            style={{ fontSize: "23px", color: "#999", cursor: "pointer" }}
          />
        ) : (
          <AiOutlineEyeInvisible
            onClick={toggleMarkdown}
            style={{ fontSize: "23px", color: "#999", cursor: "pointer" }}
          />
        )}
      </MarkdownPreviewerHeader>
      <MarkdownPreviewerContainer>
        {!isMarkdownHidden && (
          <ReactMarkdown
            children={markdown}
            remarkPlugins={[emoji, remarkGfm, remarkToc]}
            components={{
              code({
                node,
                inline,
                className,
                children,
                ...props
              }: {
                node: any;
                inline: any;
                className: any;
                children: any;
              }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={xonokai}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        )}
      </MarkdownPreviewerContainer>
    </MarkdownPreviewerBox>
  );
};

export default MarkdownPreviewer;
