import { AxiosResponse } from "axios";

import { ITool, INewTool } from "./types";
import api from "../services/api";

class ToolRepository {
  async getTools() {
    const resp = await api.get<ITool[]>("/tools");

    return resp.data;
  }

  async addTool(newTool: INewTool) {
    const resp = await api.post<ITool>("/tools", newTool);

    return resp.data;
  }

  async deleteTool(id: number) {
    await api.delete(`/tools/${id}`);
  }

  async getToolsByFilter(byTag: boolean, inputValue: string) {
    let resp: AxiosResponse<ITool[]>;
    if (byTag) {
      resp = await api.get(`/tools?tags_like=${inputValue}`);

      return resp.data;
    }

    resp = await api.get(`/tools?q=${inputValue}`);

    return resp.data;
  }
}

export default ToolRepository;
