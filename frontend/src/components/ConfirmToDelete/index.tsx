import React from "react";
import { FiX } from "react-icons/fi";

import { ITool } from "../../store/types";

import { Modal, Container } from "./styles";

interface Prop {
  tool: ITool;
  close(): void;
  requestDelete(id: number): Promise<void>;
}

const ConfirmToDelete: React.FC<Prop> = ({ tool, close, requestDelete }) => {
  return (
    <Modal>
      <Container>
        <header>
          <FiX />
          <strong>Remove tool</strong>
        </header>
        <p>
          Are you sure you want to remove <span>{tool.title}</span>
        </p>
        <footer>
          <button className="no" onClick={close}>
            Cancel
          </button>
          <button
            className="yes"
            onClick={() => {
              requestDelete(tool.id);
              close();
            }}
          >
            Yes, remove
          </button>
        </footer>
      </Container>
    </Modal>
  );
};

export default ConfirmToDelete;
