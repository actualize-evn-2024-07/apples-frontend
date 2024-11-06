import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { ApplesPage } from "./ApplesPage";
import { ApplesNew } from "./ApplesNew";
import { Footer } from "./Footer";

const router = createBrowserRouter([
  {
    element: (
      <div className="font-['Futura'] flex min-h-screen flex-col">
        <Header />
        <div className="container mx-auto p-6 flex-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ApplesPage />,
      },
      {
        path: "/apples/new",
        element: <ApplesNew />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;