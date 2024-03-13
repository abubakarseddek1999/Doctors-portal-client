import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import NotFound from '../Pages/ErrorPage/NotFound';
import Main from '../Layout/Main';


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFound></NotFound>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
    ]
    },
  ]);

export default Router;