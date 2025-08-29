export interface Assignment {
    title: string;
    description: string;
    pages: string[];
    due: string;
    mode: "Digital" | "Hand-made" | "Both";
    difficulty: "Easy" | "Medium" | "Hard";
  }
  