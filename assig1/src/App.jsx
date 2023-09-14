import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

let routers = createBrowserRouter([{
  path: "", element: <LayOut />, children: [
    { index: true, element: <Home /> },
    { path: "about", element: <About /> },
    { path: "portfolio", element: <Portfolio /> },
    { path: "contact", element: <Contact /> }
  ]
}])


export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

