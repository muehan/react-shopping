import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/articles", element: <Articles /> },
]);


function App() {
  return (
    <div className="App">
      <Menu />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
