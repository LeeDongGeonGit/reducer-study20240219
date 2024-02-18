
import ReactDOM  from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import { legacy_createStore } from "redux";

const store = legacy_createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
    
    <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
   
);



