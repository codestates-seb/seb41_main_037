import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import MainPage from "./pages/MainPage/MainPage";
import CuMainPage from "./pages/MainPage/CuMainPage";
import GsMainPage from "./pages/MainPage/GsMainPage";
import SevenMainPage from "./pages/MainPage/SevenMainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import MyPage from "./pages/MyPage/MyPage";
import ItemCreatePage from "./pages/AdminPage/ItemCreatePage/ItemCreatePage";
import ItemSearchPage from "./pages/AdminPage/ItemSearchPage/ItemSearchPage";
import ItemUpdatePage from "./pages/AdminPage/ItemUpdatePage/ItemUpdatePage";
import CommentDeletePage from "./pages/AdminPage/CommentDeletePage/CommentDeletePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <div>Not found</div>,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/products",
    element: <MainPage />,
  },
  {
    path: "/products/cu",
    element: <CuMainPage />,
  },
  {
    path: "/products/gs25",
    element: <GsMainPage />,
  },
  {
    path: "/products/seveneleven",
    element: <SevenMainPage />,
  },
  {
    path: "/products/:id",
    element: <DetailPage />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/admin/create",
    element: <ItemCreatePage />,
  },
  {
    path: "/admin/search",
    element: <ItemSearchPage />,
  },
  {
    path: "/admin/update/:productId",
    element: <ItemUpdatePage />,
  },
  {
    path: "/admin/comment/delete",
    element: <CommentDeletePage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
