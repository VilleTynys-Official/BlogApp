import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import MainView from './components/views/MainView';
import BlogPostContext from './context/BlogPostContext';
import { Switch, Route } from 'react-router-dom';
import EditView from './components/views/EditView';
import Container from '@material-ui/core/Container'
import { getByPlaceholderText } from '@testing-library/dom';


function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  const getBlogPosts = async () => {
    try {
      const response = await axios.get('/blogposts');
      const data = await response.data;
      console.log(response);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  console.log('blogPosts in app are::: ', blogPosts);
  
  useEffect( () => {
    getBlogPosts()
      .then(data => setBlogPosts(data))
      .catch(((err) => console.log("something went wrong")
    ))

    return () => {
      //place for cleanup functions
    }
  }, [])

 
  // Context provides the blogPost state to all child components
  // Switches render views according to current url
  return (
  
    <BlogPostContext.Provider
      value ={{
      blogPosts,
      setBlogPosts
    }}
    >
      <Container maxWidth="md">
        <div className='App'>
          <Switch>
            <Route
            exact
            path='/'
            render={()=> <MainView></MainView>}
            ></Route>
          </Switch>

          <Switch>
            <Route
            exact
            path='/editview'
            render={()=> <EditView></EditView>}
            ></Route>
          </Switch>
        </div>
      </Container>
    </BlogPostContext.Provider>
  );
}

export default App;
