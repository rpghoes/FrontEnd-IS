export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React Basics",
    instructor: "John Smith",
    description: "Introduction to React",
  },
  {
    id: 2,
    title: "TypeScript",
    instructor: "Anna Brown",
    description: "Learn TypeScript fundamentals",
  },
  {
    id: 3,
    title: "Web Development",
    instructor: "David Lee",
    description: "Full-stack web development",
  },
  {
    id: 4,
    title: "Advanced React",
    instructor: "Sarah White",
    description: "Hooks, Context, Router",
  },
];

export function getCourseById(id: number) {
  return courses.find((course) => course.id === id);
}
