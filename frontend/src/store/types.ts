export interface ITool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export interface INewTool {
  title: string;
  link: string;
  description: string;
  tags: string[];
}
