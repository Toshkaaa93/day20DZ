import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PostListProvider from "./contexts/PostListContext";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Contacts from "./components/Contacts/Contacts";
import DetailPage from "./components/Posts/DetailPage/DetailPage";
import About from "./components/About/About";
import SignIn from "./components/SignIn/SignIn";


function App() {
  return (
    <PostListProvider>
      <div className="container py-5">
      <BrowserRouter>
        <Header />
             <Routes>
               <Route path="/" element={<RequireAuth> <Main /> </RequireAuth>}/>
               <Route path="/about" element={<About />} />
               <Route path="/info" element={<Contacts />} />
               <Route path ="/:id" element={<DetailPage />} />
               <Route path ="/signin" element={<SignIn />} />
             </Routes>
     
      </BrowserRouter>
        
      </div>
    </PostListProvider>

  )
}

export default App;



