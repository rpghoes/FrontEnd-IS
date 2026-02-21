import { Link, useSearchParams } from "react-router-dom";
import { courses } from "./data";

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") || "asc"; // Читаем параметр ?sort= [cite: 217, 219]

  const sortedCourses = [...courses].sort((a, b) => {
    return sortOrder === "desc" 
      ? b.title.localeCompare(a.title) 
      : a.title.localeCompare(b.title);
  });

  const toggleSort = () => {
    setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" }); // Обновляем URL [cite: 227, 228]
  };

  return (
    <div>
      <h2>Courses</h2>
      <button onClick={toggleSort}>
        Sort: {sortOrder.toUpperCase()}
      </button>
      <ul>
        {sortedCourses.map((c) => (
          <li key={c.id}>
            {/* Используем шаблонные строки для динамических ссылок [cite: 197, 205] */}
            <Link to={`/courses/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;