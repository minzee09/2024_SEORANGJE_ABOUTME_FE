import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  DiaryPage,
  SigninPage,
  SignupPage,
  ThemePage,
  MakingPage,
  HomePage,
} from './pages';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
              <HomePage />
          }
        />
        <Route
          path='/diary'
          element={
              <DiaryPage />
          }
        />
        <Route
          path='sign-in'
          element={
              <SigninPage />
          }
        />
        <Route
          path='/sign-up'
          element={
              <SignupPage />
          }
        />
        <Route
          path='/theme'
          element={
              <ThemePage />
          }
        />
        <Route
          path='/making'
          element={
              <MakingPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;