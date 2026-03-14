import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Импорт компонентов
import Layout from "./Layout";
import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import NotFound from "./NotFound";
import CourseDetail from "./CourseDetail";

// Импорт функции для получения данных
import { getCourseById } from "./data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: "about", 
        element: <About /> 
      },
      { 
        path: "courses", 
        element: <Courses /> 
      },
      { 
        // Динамический маршрут для деталей курса
        path: "courses/:id", 
        element: <CourseDetail />,
        // Обработка ошибок, если курс не найден
        errorElement: (
          <div style={{ padding: "20px" }}>
            <h2>Course not found!</h2>
            <p>The course ID you are looking for does not exist.</p>
          </div>
        ),
        // Лоадер для получения данных курса перед рендером
        loader: async ({ params }) => {
          const course = getCourseById(Number(params.id));
          
          if (!course) {
            // Если курс не найден, пробрасываем ошибку в errorElement
            throw new Response("Not Found", { status: 404 });
          }
          
          // Возвращаем объект с данными курса
          return { course };
        },
      },
      { 
        path: "*", 
        element: <NotFound /> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);