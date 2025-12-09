import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import App from './show/App'; // ← App.jsxを読み込む

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
