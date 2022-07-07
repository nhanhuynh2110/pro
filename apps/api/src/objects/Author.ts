export type Author = {
  id: number;
  firstName?: string;
  lastName?: string;
  posts?: Post[];
};

export type Post = {
  id: number;
  title: string;
  votes?: number;
};
