import { useParams, useLoaderData } from "react-router-dom";
import type { Course } from "./data";

function CourseDetail() {
  const { id } = useParams(); // Получаем ID из URL [cite: 176]
  const { course } = useLoaderData() as { course: Course }; // Получаем данные из лоадера [cite: 177]

  return (
    <div style={{ padding: "20px" }}>
      <h2>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <small>Route Parameter ID: {id}</small>
    </div>
  );
}

export default CourseDetail;