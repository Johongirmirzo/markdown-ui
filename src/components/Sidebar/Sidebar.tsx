import React, { useEffect } from "react";
import MarkdownList from "../MarkdownList/MarkdownList";
import {
  SidebarBox,
  SidebarOverlay,
  SidebarMenuContainer,
  SidebarNav,
  SidebarList,
  SidebarHeader,
  SidebarTitle,
} from "./Sidebar.styled";

interface MarkdownDataInterface {
  markdown: string;
  markdownName: string;
  user: string;
  _id: string;
}

type SidebarProps = {
  isSidebarOpen: boolean;
  markdownList: MarkdownDataInterface[];
  getMarkdownId: (markdownId: string) => void;
  getEditedMarkdown: (markdown: MarkdownDataInterface) => void;
  onDeleteModalOpen: () => void;
  toggleSidebar: () => void;
};

const Sidebar = ({
  isSidebarOpen,
  markdownList,
  getMarkdownId,
  getEditedMarkdown,
  onDeleteModalOpen,
  toggleSidebar,
}: SidebarProps) => {
  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    if (isSidebarOpen) {
      body.classList.add("sidebar-open");
    } else {
      body.classList.remove("sidebar-open");
    }
  }, [isSidebarOpen]);

  return (
    <SidebarBox>
      {isSidebarOpen && <SidebarOverlay onClick={toggleSidebar} />}
      <SidebarMenuContainer className={isSidebarOpen ? "active" : ""}>
        <>
          <SidebarHeader>
            <SidebarTitle>Markdown Editor</SidebarTitle>
          </SidebarHeader>

          <SidebarNav>
            <SidebarList>
              <MarkdownList
                markdownList={markdownList}
                getMarkdownId={getMarkdownId}
                getEditedMarkdown={getEditedMarkdown}
                onDeleteModalOpen={onDeleteModalOpen}
              />
            </SidebarList>
          </SidebarNav>
        </>
      </SidebarMenuContainer>
    </SidebarBox>
  );
};

export default Sidebar;
