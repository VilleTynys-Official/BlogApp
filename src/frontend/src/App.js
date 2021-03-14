import React, {useState} from 'react';
import './App.css';
import MainView from './components/views/MainView';
import BlogPostContext from './context/BlogPostContext';

function App() {
  const [blogPosts, setBlogPosts] = useState("blaah");
  console.log("in app", blogPosts);
  
  return (
    <BlogPostContext.Provider
      value ={{
      blogPosts,
      setBlogPosts
    }}
    >
      <div className="App">
        <MainView></MainView>
      </div>
    </BlogPostContext.Provider>
  );
}

export default App;
