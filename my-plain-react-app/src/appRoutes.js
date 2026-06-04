import { createBrowserRouter, Navigate, Outlet, redirect, replace } from "react-router";
import { RouterProvider } from "react-router/dom";
import TaskController from "./page/task_list/task.controller.tsx";
import TaskAddController from "./page/task_add/task.controller.tsx";
import TaskEditController from "./page/task_edit/task_Edit.controller.tsx";
import LoginController from "./page/login/login.controller.tsx";
import SignUp from "./page/signUp/signUp.controller.tsx";
import HeaderDashboard from "./compononts/header/header.tsx";
import { Get, Post } from "./service/request.tsx";

async function beforeEveryRoute({request}) {

  // const isLogin = localStorage.getItem("login") === "true";
  // const url = new URL(request.url);
  // const currentPath = url.pathname;
  
  // if (currentPath !== "/login" && isLogin !== true) {
  //   const code = new URLSearchParams(window.location.search).get("code");
  //   await Post("/auth/exchange", {"code": code});
  //   const mySelf = await Get("/me");
  //   if(mySelf.status == 200){
  //     localStorage.setItem("login", "true");
  //     localStorage.setItem("name", mySelf.data.name);
  //   }
  //   else throw redirect("/login");
  // }else if(currentPath == "/login" && isLogin == true){
  //   throw redirect("/list");
  // }
}
function DashboardLayout() {
  return (
    <>
      <HeaderDashboard/>
      <Outlet />
    </>
  ) 
}

// ROUTER WITH GLOBAL LOADER
const router = createBrowserRouter([
  {
    path:"/",
    element: <Outlet />,
    loader: ()=>{},
    children:[
      {index:true, element:<Navigate to="/dashboard" replace/>},
      // All Site routes
      {
        path: "/dashboard",
        element: <DashboardLayout/>,
        loader: ()=>{},
        children: [
          { index: true, element: <h1>Dashboard</h1> },
          { path: "list", element: <h1>List</h1> },
          // { path: "list", element: <TaskController /> },
          { path: "add", element: <TaskAddController /> },
          { path: "edit", element: <TaskEditController /> },
          // Task manager Routes
          { 
            path: "/dashboard/taskmanager",
            element: <Outlet />,
            loader: ()=>{},
            children: [
              { index: true, element: <h1>Default page of taskmanager.</h1> },
              { path: "list", element: <h1>Task Manager List</h1> },
            ],
          },
          // Vocablary Routes
          {
            path: "/dashboard/vocablary",
            element: <Outlet />,
            loader: ()=>{},
            children: [
              { index: true, element: <h1>Default page of Vocablary.</h1> },
              { path: "/dashboard/vocablary", element: <h1>Vocablary Page</h1> },
            ],
          },
          // Time Table Routes
          {
            path: "/dashboard/timetable",
            element: <Outlet />,
            loader: ()=>{},
            children: [
              { index: true, element: <h1>Default page of Time Table.</h1> },
              { path: "/dashboard/timetable", element: <h1>Time Table Page</h1> },
            ],
          }
        ],
      },
      // Authrization routes
      {
        path: "/auth",
        element: <Outlet />,
        loader: ()=>{},
        children: [
          { path: "login", element: <LoginController /> },
          { path: "sign-up", element: <SignUp /> },
        ],
      },
      // 404 Fallback route
      {path:"*", element:<h1>404 Fallback page.</h1>} 
    ]
  }
]);
export default function AppRoutes() {
    return <RouterProvider router={router} />;
}