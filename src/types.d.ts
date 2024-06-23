type Author = {
  name: string;
  url?: string;
  institution: string;
  notes?: string[];
}

type Link = {
  url: string;
  name: string;
  icon?: string;
}

export { Author, Link };