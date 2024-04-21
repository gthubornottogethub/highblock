
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sabet from "./components/sabet.jsx";
import Home from "./components/Home.jsx";
import News from "./components/pages/news.jsx";
import Commentary from "./components/pages/commentary.jsx";
import Articles from "./components/pages/articles.jsx";
import Media from "./components/pages/media.jsx";
import FullPost from "./components/fullPost.jsx";
const App = () => {
  return (
       <Routes>
           <Route path="/" element={<Sabet />}>
             <Route index element={<News />} />
             <Route path="/news" element={<News />} />
             <Route path="/commentary" element={<Commentary />} />
             <Route path="/articles" element={<Articles />} />
             <Route path="/media" element={<Media />} />
           </Route>
           <Route path="/:id" element={<FullPost />} />
       </Routes>
  );
};

export default App;