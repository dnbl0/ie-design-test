import React from 'react';
import { BrandProvider } from './src/context/BrandContext';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
  <BrandProvider>{element}</BrandProvider>
);
