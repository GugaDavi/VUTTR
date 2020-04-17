import React, { useState, FormEvent, ChangeEvent, KeyboardEvent } from "react";
import { FiPlus, FiX } from "react-icons/fi";

import { Modal, Container } from "./styles";

import { INewTool } from "../../store/types";

interface Props {
  isOpened(): void;
  addNewTool(newTool: INewTool): void;
}

const NewToolForm: React.FC<Props> = ({ isOpened, addNewTool }) => {
  const [toolName, setToolName] = useState("");
  const [toolURL, setToolURL] = useState("");
  const [toolDescription, setToolDescription] = useState("");
  const [letterCount] = useState(200);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  function handleAddNewTool(e: FormEvent) {
    e.preventDefault();

    addNewTool({
      title: toolName,
      description: toolDescription,
      link: toolURL,
      tags,
    });

    isOpened();
  }

  function updateLetterCount(e: ChangeEvent<HTMLTextAreaElement>) {
    const newDescription = e.target.value;

    if (newDescription.length <= letterCount) {
      setToolDescription(newDescription);
    } else {
      setToolDescription(newDescription.substring(0, letterCount));
    }
  }

  function updateTagsList() {
    setTags([...tags, tag.trim()]);
    setTag("");
  }

  function addTag(e: KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 32) {
      updateTagsList();
    }
  }

  function handleDeleteTag(index: number) {
    const _updatedTags = tags;
    _updatedTags.splice(index, 1);
    setTags([..._updatedTags]);
  }

  return (
    <Modal>
      <Container>
        <header>
          <div>
            <FiPlus />
            <h5>Add new tool</h5>
          </div>
          <FiX onClick={isOpened} />
        </header>
        <form onSubmit={handleAddNewTool}>
          <label htmlFor="toolName">
            <span>Tool Name</span>
            <input
              type="text"
              id="toolName"
              placeholder="My Tool"
              value={toolName}
              onChange={(e) => setToolName(e.target.value)}
            />
          </label>
          <label htmlFor="toolURL">
            <span>Tool Link</span>
            <input
              type="text"
              id="toolURL"
              placeholder="https://example.com"
              value={toolURL}
              onChange={(e) => setToolURL(e.target.value)}
            />
          </label>
          <label htmlFor="description">
            <span>Tool description</span>
            <textarea
              name=""
              id="description"
              placeholder="Description about the tool"
              value={toolDescription}
              onChange={updateLetterCount}
            ></textarea>
            <span className="lettersCount">
              {letterCount - toolDescription.length}/200
            </span>
          </label>
          <label htmlFor="tags">
            <span>Tags</span>
            <input
              type="text"
              id="tags"
              placeholder="Ex: webDevelomentTool"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onKeyUp={addTag}
              onBlur={(e) => updateTagsList()}
            />
          </label>
          <ul>
            {tags.map((tagItem, index) => (
              <li onClick={() => handleDeleteTag(index)} key={index}>
                #{tagItem}
              </li>
            ))}
          </ul>

          <button
            type="submit"
            disabled={!toolName || !toolURL || !toolDescription}
          >
            Add tool
          </button>
        </form>
      </Container>
    </Modal>
  );
};

export default NewToolForm;
