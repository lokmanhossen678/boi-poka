import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BooksDetails from "../pages/booksDetails/BooksDetails";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/About",
        Component:About,
      },
      {
        path:'readList',
        Component: ReadList,
      },
      {
        path:'/booksDetails/:id',
        loader: () => fetch("./booksData.json"),
        Component:BooksDetails,
      },
    ],
  },
]);
