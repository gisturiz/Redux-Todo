import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
import Todo from './Todo';
import './index.css';

const store = createStore (reducer);


function App() {
    return (
      <div className="App">
       <Todo />
      </div>
    );
  }


ReactDOM.render(<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));

