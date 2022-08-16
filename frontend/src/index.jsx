import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Connect from './pages/Connect';
import CreatePost from './pages/CreatePost';
import ModifyPostForm from './components/ModifyPost';
import Page403 from './pages/Page403';

import StylePageConnect from './utils/style/PageConnectStyle';
import StyledPageHome from './utils/style/PageHomeStyle';
import StyledPageCreate from './utils/style/PageCreateStyle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={
        <div>
          <StyledPageHome />
          <Home />
        </div>}/>
      <Route path='/createpost' element ={
        <div>
          <StyledPageCreate />
          <CreatePost />
        </div>} />
      <Route path ='/connect' element={
      <div>
        <StylePageConnect />
        <Connect />
      </div>
      } 
      />
      <Route path='/:postId' element={
        <div>
          <StyledPageCreate />
          <ModifyPostForm />
        </div>} 
      />
      <Route path='/403-forbidden' element={
        <div>
          <StylePageConnect />
          <Page403 />
        </div>  
      } 
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

