import React, {useState} from 'react';
import './App.css';
import MainView from './components/views/MainView';
import BlogPostContext from './context/BlogPostContext';
import { Switch, Route } from 'react-router-dom';
import EditView from './components/views/EditView';
import Container from '@material-ui/core/Container'


function App() {
  const [blogPosts, setBlogPosts] = useState([
    {
        "id": "604dd9b9625ba51295a29b5f",
        "blogTitle": "testing",
        "blogText": "testing testing!",
        "timeCreated": "123423"
    },
    {
        "id": "604e182040497b21259a115f",
        "blogTitle": "testing",
        "blogText": "This is updated",
        "timeCreated": "123423"
    },
    {
        "id": "604e33c8cb700a5a8a3e9ec1",
        "blogTitle": "testing",
        "blogText": "Tsädääää,",
        "timeCreated": "22222"
    }
]);
 
  // Context provides the blogPost state to all child components
  // Switches render views according to current url

  return (
  
    <BlogPostContext.Provider
      value ={{
      blogPosts,
      setBlogPosts
    }}
    >
      <Container maxWidth="medium">
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
