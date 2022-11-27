import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

app.post('/api/', (req, res) => {
    res.send('YOOO');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

//app.listen(PORT, () => console.log('akouo sthn porta 3000'))*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
