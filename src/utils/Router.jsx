import Header from "../components/Header";
import App from "../App";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import HomePage from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";

const Page404 = () => <h1>404 - Halaman tidak ditemukan</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header showProfile={true} />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "*", element: <Page404 /> },
    ],
  },
  {
    path: "/",
    element: <Header showProfile={false} />,
    children: [
      { index: true, element: <App /> }, // ← pindah ke sini
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default router;
