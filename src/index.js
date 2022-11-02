import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createStore, compose, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Dashboard, Login, Protected, About, Blog, ListKontak } from './components';
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Login/>}></Route>

          <Route path='/dashboard' element={          
            <Protected>
                <Dashboard />
            </Protected> 
          }></Route>

          <Route path='/about' element={          
            <Protected>
                <About />
            </Protected>
          }></Route>

          <Route path='/blog' element={          
            <Protected>
                <Blog />
            </Protected>
          }></Route>

          <Route path='/list-cars' element={          
            <Protected>
                <ListKontak />
            </Protected>
          }></Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
