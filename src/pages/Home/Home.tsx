import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Info from "../../components/Info/Info";
import MarkdownContainer from "../../components/MarkdownContainer/MarkdownContainer";
import DeleteMarkdownModal from "../../components/DeleteMarkdownModal/DeleteMarkdownModal";
import {
  createMarkdown,
  getAllMarkdowns,
  editMarkdown,
} from "../../api/markdown";

import { MainArea } from "./Home.styled";

interface MarkdownDataInterface {
  _id: string;
  user: string;
  markdown: string;
  markdownName: string;
}

const Home = () => {
  const [markdownName, setMarkdownName] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [editingMarkdown, setEditingMarkdown] = useState(
    {} as MarkdownDataInterface
  );
  const [isCreatingMarkdown, setIsCreatingMarkdown] = useState(false);
  const [markdownList, setMarkdownList] = useState<MarkdownDataInterface[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [markdownId, setMarkdownId] = useState("");

  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();

  useEffect(() => {
    (async function () {
      try {
        const response = await getAllMarkdowns();
        console.log(response);
        setMarkdownList(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const getMarkdownName = (markdownName: string) =>
    setMarkdownName(markdownName);

  const getMarkdown = (markdown: string) => setMarkdown(markdown);

  const getIsCreatingMarkdownValue = (value: boolean) =>
    setIsCreatingMarkdown(value);

  const getEditedMarkdown = (markdown: MarkdownDataInterface) => {
    setEditingMarkdown(markdown);
    setMarkdown(markdown.markdown);
    setMarkdownName(markdown.markdownName);
    setIsCreatingMarkdown(true);
  };

  const saveMarkdown = async (markdownId?: string) => {
    if (markdown.trim().length > 0 && markdownName.trim().length > 0) {
      if (markdownId) {
        // editing markdown
        try {
          await editMarkdown({ markdown, markdownName }, markdownId);
          setMarkdownList(
            markdownList.map((mw) =>
              mw._id === markdownId ? { ...mw, markdown, markdownName } : mw
            )
          );
        } catch (err) {
          console.error(err);
        }
      } else {
        // createing new markdown
        try {
          const response = await createMarkdown({ markdown, markdownName });
          setMarkdownList([...markdownList, response.data]);
        } catch (err) {
          console.error(err);
        }
      }
      setEditingMarkdown({ _id: "", markdownName: "", markdown: "", user: "" });
      setMarkdownName("");
      setMarkdown("");
      getIsCreatingMarkdownValue(false);
    } else {
      alert("Markdown can't be empty");
    }
  };

  const deleteEditingMarkdown = () => {
    getIsCreatingMarkdownValue(false);
    setEditingMarkdown({ _id: "", markdownName: "", markdown: "", user: "" });
    setIsSidebarOpen(false);
    setMarkdown("");
    setMarkdownName("");
  };
  const getMarkdownId = async (markdownId: string) => setMarkdownId(markdownId);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const deleteCurrentMarkdown = (markdownId: string) => {
    setMarkdownList(
      markdownList.filter((markdown) => markdown._id !== markdownId)
    );
    setEditingMarkdown({ _id: "", markdownName: "", markdown: "", user: "" });
    setIsSidebarOpen(false);
    setMarkdown("");
    setMarkdownName("");
  };

  return (
    <MainArea>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        markdownList={markdownList}
        onDeleteModalOpen={onDeleteModalOpen}
        getMarkdownId={getMarkdownId}
        getEditedMarkdown={getEditedMarkdown}
        toggleSidebar={toggleSidebar}
      />
      <div style={{ flex: "1" }}>
        <Navbar
          saveMarkdown={saveMarkdown}
          getMarkdownName={getMarkdownName}
          getIsCreatingMarkdownValue={getIsCreatingMarkdownValue}
          toggleSidebar={toggleSidebar}
          deleteMarkdown={deleteEditingMarkdown}
          editingMarkdown={editingMarkdown}
          isSidebarOpen={isSidebarOpen}
          markdownName={markdownName}
          isCreatingMarkdown={isCreatingMarkdown}
        />
        {isCreatingMarkdown ? (
          <MarkdownContainer getMarkdown={getMarkdown} markdown={markdown} />
        ) : (
          <Info getIsCreatingMarkdownValue={getIsCreatingMarkdownValue} />
        )}
        {markdownId && (
          <DeleteMarkdownModal
            isDeleteModalOpen={isDeleteModalOpen}
            markdownId={markdownId}
            onDeleteModalOpen={onDeleteModalOpen}
            onDeleteModalClose={onDeleteModalClose}
            getIsCreatingMarkdownValue={getIsCreatingMarkdownValue}
            deleteCurrentMarkdown={deleteCurrentMarkdown}
          />
        )}
      </div>
    </MainArea>
  );
};

export default Home;
