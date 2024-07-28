import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider, CssBaseline } from '@mui/material';
import './App.css';
import { MainPage } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </StyledEngineProvider>
    </BrowserRouter>
  );
};
