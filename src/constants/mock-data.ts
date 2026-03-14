import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CSC101",
    name: "Introduction to Computer Science",
    department: "computer-science",
    description:
      "Foundational concepts in computing, algorithms, and problem-solving with practical lab sessions.",
    createdAt: "2026-01-10T09:00:00.000Z",
  },
  {
    id: 2,
    code: "MTH201",
    name: "Linear Algebra",
    department: "mathematics",
    description:
      "Core study of vectors, matrices, and linear transformations used across science and engineering.",
    createdAt: "2026-01-12T10:30:00.000Z",
  },
  {
    id: 3,
    code: "PHY115",
    name: "General Physics I",
    department: "physics",
    description:
      "Mechanics, motion, and energy principles with experiments to build analytical and scientific reasoning.",
    createdAt: "2026-01-15T11:15:00.000Z",
  },
  {
    id: 4,
    code: "ENG202",
    name: "English Literature",
    department: "english",
    description:
      "Exploration of literary works from various periods and cultures, focusing on critical analysis and interpretation.",
    createdAt: "2026-01-18T14:00:00.000Z",
  },
];
