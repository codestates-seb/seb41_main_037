import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import MainPage from "./pages/MainPage/MainPage";
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
    path: "/itemList",
    element: <MainPage />,
  },
  {
    path: "/itemList/:itemId",
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
    path: "/admin/update",
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
