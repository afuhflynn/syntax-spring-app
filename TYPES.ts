export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  languages: string[];
  slug: string;
  examples?: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints?: string[];
  defaultCode?: {
    [key: string]: string;
  };
  languageIcons?: {
    [key: string]: string;
  };
}
