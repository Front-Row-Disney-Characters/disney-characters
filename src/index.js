import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Favorites } from './components/Favorites';

// createRoot(document.getElementById('app')).render(<App />);
const contain = document.getElementById('app');
const root = createRoot(contain);
root.render(
    <Favorites>
        <App />
    </Favorites>
);
