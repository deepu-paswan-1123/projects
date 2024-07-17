import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import PostList from "./component/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-List-Store";
import CreatePost from "./component/CreatePost";
import { Outlet } from "react-router-dom";
// import PaginationSize from "./component/PaginationSize";

function App() {
  const [selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
      <div className="appcontainer">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
        <div className="content">
            <Header></Header>
            <div className="userContent">
            {/* {selectedTab==='Home'?<PostList></PostList> : <CreatePost></CreatePost>} */}
              <Outlet></Outlet>
            </div>
            {/* <PaginationSize></PaginationSize> */}
            <Footer></Footer>
          </div>
      </div>
    </PostListProvider>
  );
}

export default App;





