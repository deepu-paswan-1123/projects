import React from 'react'
import ReactDOM from 'react-dom/client'
import PostListProvider from "./store/Post-List-Store";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreatePost from './component/CreatePost.jsx';
import PostList from './component/PostList.jsx';

const router=createBrowserRouter([
  {path:"/",element:<App/>,children:[
    {path:"/" , element:<PostList/>},
    {path:"/create-post",element:<CreatePost></CreatePost>},
  ]},
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
