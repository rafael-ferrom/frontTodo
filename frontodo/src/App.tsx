import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";
import StartPage from "./pages/StartPage/StartPage";
import TodoPage from "./pages/todoPage/TodoPage";
import UserPage from "./pages/userPage/UserPage";
import MainPage from "./pages/mainPage/MainPage";

function App() {

   const router = createBrowserRouter(
    [
  {
    path: "/",
    element: <PageLayout></PageLayout>,
    children: [
      {
        path: "/",
        element: <StartPage></StartPage>,
      },
      {
        path: "/Fetch",
        element: <TodoPage></TodoPage> ,
      },
      {
        path: "/Axios",
        element: <UserPage></UserPage>,
      },
      {
        path: "/Thunk",
        element: <MainPage></MainPage>,
      },
    ],
  },
]
   )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
