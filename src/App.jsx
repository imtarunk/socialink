import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./Components/Head";
import Footer from './Components/Footer';
import SideBar from "./Components/SideBar";
import LoginForm from './Components/LoginForm';
import PostList from './Components/PostList';
import { useState } from 'react';
import PostListProvider from './store/PostList-store';

function App() {

  const [selectedTab, setSelectedTab] = useState(["Home"]);


  return (
    <PostListProvider>
      <div className="app-container">
        <div className="sidebar-Box">
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} ></SideBar>
        </div>

        <div className="content">
          <Head></Head>

          {selectedTab.includes("Home") ?
            (<PostList></PostList>) :
            (<LoginForm ></LoginForm>)}

          <Footer></Footer>

        </div>
      </div >
    </PostListProvider>

  )
}

export default App
