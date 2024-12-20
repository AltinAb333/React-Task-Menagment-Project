import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import CreateTransaction from "./components/CreateTransaction.jsx";
import ErrorPage from "./pages/Error.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import AuthenticationPage from "./pages/Authentication.jsx";
import TransactionDetails from "./pages/TransactionDetail.jsx";
import EditTransaction from "./pages/EditTransaction.jsx";
import { tokenLoader } from "./util/auth"; // Import the custom hook to manage auth

function App() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen((prevState) => !prevState);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout isOpen={isOpen} toggleSidebar={toggleSidebar} />,
      errorElement: <ErrorPage isOpen={isOpen} toggleSidebar={toggleSidebar} />,
      id:"root",
      loader : tokenLoader,
      children: [
        { path:"/", element: <Home isOpen={isOpen} /> },
        { path: "transaction/:id", element: <TransactionDetails /> },
        { path: "transaction/new", element: <CreateTransaction /> },
        { path: "transaction/:id/edit", element: <EditTransaction /> },
        {
          path: "auth",
          element: <AuthenticationPage />,
          // action: authAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
