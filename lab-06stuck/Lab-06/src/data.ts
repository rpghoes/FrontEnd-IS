// src/data.ts
export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Basics", instructor: "Dr. Smith", description: "Learn React fundamentals." },
  { id: 2, title: "Advanced Routing", instructor: "Prof. Jones", description: "Deep dive into React Router." },
  { id: 3, title: "TypeScript Mastery", instructor: "Sarah Lee", description: "Strongly typed React apps." },
  { id: 4, title: "Web Performance", instructor: "Mike Ross", description: "Optimize your web apps." }
];