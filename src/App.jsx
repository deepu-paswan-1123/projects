import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import PostList from "./component/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-List-Store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <PostListProvider>
      <div className={`appcontainer ${isDarkMode ? 'dark-mode' : ''}`}>
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}></Header>
          <div className={`userContent ${isDarkMode ? 'dark-mode' : ''}`}>
            <Outlet></Outlet>
            <Footer isDarkMode={isDarkMode}></Footer>
          </div>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;


