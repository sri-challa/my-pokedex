import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";
import ModalHeader from "./ModalHeader/ModalHeader";
import React from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  backgroundColor?: string;
  body: React.ReactNode;
}

export default function CustomModal({
  isOpen,
  onClose,
  heading,
  backgroundColor,
  body,
}: CustomModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          sx={{
            backgroundColor: backgroundColor ?? "gray.300",
            maxWidth: "1200px",
          }}
        >
          <ModalHeader
            middleContent={<Text fontSize={["2xl"]}>{heading}</Text>}
            rightContent={
              <IconButton
                backgroundColor="transparent"
                icon={<IconX />}
                aria-label={`Close ${heading} details`}
                onClick={onClose}
              />
            }
          />
          <Divider borderColor="black" />
          <ModalBody>{body}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
