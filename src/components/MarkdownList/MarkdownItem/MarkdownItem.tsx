import React, { useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MarkdownItemBox, MarkdownItemText } from "./MarkdownItem.styled";

interface MarkdownDataInterface {
  markdown: string;
  markdownName: string;
  user: string;
  _id: string;
}

type MarkdownItemProps = {
  markdown: MarkdownDataInterface;
  getMarkdownId: (markdownId: string) => void;
  getEditedMarkdown: (markdown: MarkdownDataInterface) => void;
  onDeleteModalOpen: () => void;
};

const MarkdownItem = ({
  markdown,
  getMarkdownId,
  getEditedMarkdown,
  onDeleteModalOpen,
}: MarkdownItemProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const handleClick = () => {
    document.querySelectorAll(".markdown__items").forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      ref.current.classList.add("active");
    });

    getEditedMarkdown(markdown);
  };

  const handleMarkdownDeleteClick = () => {
    getMarkdownId(markdown._id);
    onDeleteModalOpen();
  };

  return (
    <MarkdownItemBox
      onClick={handleClick}
      ref={ref}
      className={
        ref?.current?.classList?.contains("active")
          ? "markdown__items active"
          : "markdown__items"
      }
    >
      <MarkdownItemText>{markdown.markdownName}</MarkdownItemText>
      <FaRegTrashAlt
        onClick={handleMarkdownDeleteClick}
        style={{ color: "#e53e3e", fontWeight: "bold" }}
      />
    </MarkdownItemBox>
  );
};

export default MarkdownItem;
