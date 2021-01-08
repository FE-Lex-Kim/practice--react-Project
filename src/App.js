import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';

function App() {
  return (
    <>
      <Route path={'/login'} component={LoginPage} />
      <Route path={'/register'} component={RegisterPage} />
      <Route path={'/write'} component={WritePage} />
      <Route path={'/@:username/:postId'} component={PostPage} />
      <Route path={['/@:username', '/']} exact component={PostListPage} />
    </>
  );
}

export default App;
