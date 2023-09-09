import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import AddTodo from "./myComponents/AddTodo";
import About from "./myComponents/About";
import React, { useState, useEffect } from "react";
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import {
//   Routes,
//   Route,
//   BrowserRouter,
// } from "react-router-dom";
import "./body.css";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

    return (
      <>
      <Router>
      <Header title="TODO-List" searchBar={false}/>
      {/* <Switch>
            <Route exact path="/" render={()=>{
              return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>)
            }}>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>  */}
             <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
      </Router>
     </>
    );
  }
//   return (
//     <>
//       <Header title="TODO-List" searchBar={false} />
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <AddTodo addTodo={addTodo} />
//                 <Todos todos={todos} onDelete={onDelete} />
//               </>
//             }
//           />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </>
//   );
// }

export default App;