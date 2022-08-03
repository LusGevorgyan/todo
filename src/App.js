import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState,useEffect} from "react";
import PageInput from './page/PageInput'
import Component from './page/Component';

function App() {
  const [todos, setTodos] = useState([])
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      return res.json();
    })
    .then(data => setTodos(data));
   },[])

  return ( 
    <div className="bg-[#E5E5E5] w-full min-h-[100vh] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<PageInput/>}>
          </Route>
          <Route path="new" element={
            <>
              <Component 
                todos={todos}
                setTodos={setTodos}
              />
            </>
          }>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
