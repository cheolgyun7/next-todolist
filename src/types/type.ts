export type CompanyInfo = {
  name: string;
  description: string;
  image: string;
};

export type Todos = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export type NewTodo = {
  title: string;
  contents: string;
  isDone: boolean;
};
