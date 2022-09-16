import React, { useState, useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Button,
} from "@chakra-ui/react";
import { SleepEntryInput } from "./DeleteMarkdownModal.styled";
import { deleteMarkdown } from "../../api/markdown";

type MarkdownProps = {
  isDeleteModalOpen: boolean;
  markdownId: string;
  onDeleteModalOpen: () => void;
  onDeleteModalClose: () => void;
  getIsCreatingMarkdownValue: (val: boolean) => void;
  deleteCurrentMarkdown: (markdownId: string) => void;
};

const DeleteMarkdownModal = ({
  isDeleteModalOpen,
  markdownId,
  onDeleteModalClose,
  getIsCreatingMarkdownValue,
  deleteCurrentMarkdown,
}: MarkdownProps) => {
  const [agreementTerm, setAgreementTerm] = useState("");

  const deleteEntry = () => {
    (async function () {
      if (markdownId) {
        try {
          await deleteMarkdown(markdownId);
          deleteCurrentMarkdown(markdownId);
          getIsCreatingMarkdownValue(false);
          setAgreementTerm("");
          onDeleteModalClose();
        } catch (err) {
          console.error(err);
        }
      }
    })();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAgreementTerm(e.target.value);

  const closeModal = () => {
    setAgreementTerm("");
    onDeleteModalClose();
  };
  return (
    <>
      <Modal isCentered isOpen={isDeleteModalOpen} onClose={closeModal}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent p="5" bgColor="#222" color="#fff">
          <ModalHeader p="0" mb="4">
            You Are Deleting Markdown
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody p="0">
            <Text color="#c5c5c5" fontWeight="600">
              You are deleting current markdown. If you are really sure about
              that, then you need to fill input with the words "I'm sure that I
              want to delete this markdown"
            </Text>
            <Text mt="2" color="#c5c5c5" fontWeight="bold">
              Type: I'm sure that I want to delete this markdown
            </Text>
            <SleepEntryInput
              type="text"
              placeholder="Enter the word"
              value={agreementTerm}
              onChange={handleChange}
            />
            <Button
              onClick={deleteEntry}
              disabled={
                agreementTerm !== "I'm sure that I want to delete this markdown"
                  ? true
                  : false
              }
              colorScheme="red"
              w="100%"
              mt="3"
              type="submit"
            >
              I understand the consequences
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteMarkdownModal;
