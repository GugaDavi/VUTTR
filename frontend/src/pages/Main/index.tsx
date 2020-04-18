import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus, FiX } from "react-icons/fi";

import { ITool, INewTool } from "../../store/types";
import ToolRepository from "../../store/actions";

import {
  Container,
  ToolsList,
  successBanner,
  errorBanner,
  warningBanner,
} from "./styles";
import ConfirmToDelete from "../../components/ConfirmToDelete";
import NewToolForm from "../../components/NewToolForm";

interface Props {
  toolRepository: ToolRepository;
}

const Main: React.FC<Props> = ({ toolRepository }) => {
  const [findInTags, setFindInTags] = useState(false);
  const [tools, setTools] = useState<ITool[]>([]);
  const [openNewToolForm, setOpenNewToolForm] = useState(false);
  const [deleteConfimation, setDeleteConfirmation] = useState(false);
  const [
    selectedToolToDelete,
    setSelectedToolToDelete,
  ] = useState<ITool | null>();
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function loadTools() {
      setTools(await toolRepository.getTools());
      successBanner("Welcome to the application");
    }

    loadTools();
  }, []);

  async function handleSearchTool() {
    if (!isSearching) {
      setIsSearching(true);

      const findedTools = await toolRepository.getToolsByFilter(
        findInTags,
        searchValue
      );

      findedTools.length === 0 && warningBanner("No tools found");

      setTools(findedTools);
      setIsSearching(false);
    }
  }

  async function handleDeleteTool(id: number) {
    await toolRepository.deleteTool(id);

    const nextState = tools.filter((tool) => tool.id !== id);

    setTools(nextState);

    errorBanner("Tool deleted with success");
  }

  async function handleAddNewTool(newTool: INewTool) {
    const addedTool = await toolRepository.addTool(newTool);

    setTools([addedTool, ...tools]);

    successBanner("New tool added with success");
  }

  return (
    <Container>
      <header>
        <h1>VUTTR</h1>
        <h4>Very Useful Tools to Remember</h4>

        <div id="searchAndAddTool">
          <div>
            <label htmlFor="input">
              <div id="searchInput">
                <FiSearch />
                <input
                  type="text"
                  id="input"
                  placeholder="search"
                  value={searchValue}
                  onKeyUp={handleSearchTool}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </label>

            <label htmlFor="withTag" className="checkboxArea">
              <input
                onChange={() => setFindInTags(!findInTags)}
                type="checkbox"
                name="withTag"
                id="withTag"
                checked={findInTags}
              />
              <span>search in tags only</span>
            </label>
          </div>
          <button onClick={() => setOpenNewToolForm(!openNewToolForm)}>
            <FiPlus /> <span>Add</span>
          </button>
        </div>
      </header>

      <ToolsList>
        <ul>
          {tools.map((tool) => (
            <li key={String(tool.id)}>
              <header>
                <a href={tool.link} className="title" target="_blanck">
                  {tool.title}
                </a>
                <button
                  className="deleteButton"
                  onClick={() => {
                    setSelectedToolToDelete(tool);
                    setDeleteConfirmation(!deleteConfimation);
                  }}
                >
                  <FiX />
                  <span>remove</span>
                </button>
              </header>

              <p>{tool.description}</p>

              <ul>
                {tool.tags.map((tool) => (
                  <li key={tool}>#{tool}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ToolsList>
      {openNewToolForm && (
        <NewToolForm
          isOpened={() => setOpenNewToolForm(!openNewToolForm)}
          addNewTool={handleAddNewTool}
        />
      )}
      {deleteConfimation && selectedToolToDelete && (
        <ConfirmToDelete
          tool={selectedToolToDelete}
          close={() => {
            setDeleteConfirmation(!deleteConfimation);
            setSelectedToolToDelete(null);
          }}
          requestDelete={handleDeleteTool}
        />
      )}
    </Container>
  );
};

export default Main;
