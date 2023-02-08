export interface SearchResults {
  objects: Object[];
  total: number;
  time: string;
}

export interface Object {
  package: Package;
  score: Score;
  searchScore: number;
}

export interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords?: string[];
  date: string;
  links: Links;
  author: Author;
  publisher: Publisher;
  maintainers: Maintainer[];
}

export interface Links {
  npm: string;
  homepage?: string;
  repository?: string;
  bugs?: string;
}

export interface Author {
  name: string;
}

export interface Publisher {
  username: string;
  email: string;
}

export interface Maintainer {
  username: string;
  email: string;
}

export interface Score {
  final: number;
  detail: Detail;
}

export interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}
