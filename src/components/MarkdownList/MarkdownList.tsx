import React from "react";
import MarkdownItem from "./MarkdownItem/MarkdownItem";

interface MarkdownDataInterface {
  markdown: string;
  markdownName: string;
  user: string;
  _id: string;
}

type MarkdownListProps = {
  markdownList: MarkdownDataInterface[];
  getMarkdownId: (markdownId: string) => void;
  getEditedMarkdown: (markdown: MarkdownDataInterface) => void;
  onDeleteModalOpen: () => void;
};

const MarkdownList = ({
  markdownList,
  getMarkdownId,
  getEditedMarkdown,
  onDeleteModalOpen,
}: MarkdownListProps) => {
  return (
    <>
      {markdownList.map((markdown) => (
        <MarkdownItem
          key={markdown._id}
          markdown={markdown}
          getMarkdownId={getMarkdownId}
          getEditedMarkdown={getEditedMarkdown}
          onDeleteModalOpen={onDeleteModalOpen}
        />
      ))}
    </>
  );
};

export default MarkdownList;
