import {createRoot} from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import PageNotFound from "./Views/PageNotFound/PageNotFound";
import Contact from "./Views/Contact/Contact";
import "./index.css"

const root = createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />

  },{
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '*',
    element:  <PageNotFound/>
  }

]);


root.render(
  <div>
    <RouterProvider router={router} />
  </div>
)
