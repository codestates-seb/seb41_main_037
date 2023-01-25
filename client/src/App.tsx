import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import MainPage1 from "./pages/MainPage/MainPage1";
import MainPage2 from "./pages/MainPage/MainPage2";
import MainPage3 from "./pages/MainPage/MainPage3";
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
    path: "/cu",
    element: <MainPage1 />,
  },
  {
    path: "/gs25",
    element: <MainPage2 />,
  },
  {
    path: "/seveneleven",
    element: <MainPage3 />,
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
