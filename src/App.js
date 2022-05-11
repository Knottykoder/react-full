import React, {  useReducer,useState } from "react";
import FetchData from "./component/FetchData";
import Products from "./component/Products";
import useFetchdata from "./component/useFetchdata";
import User from "./component/User";
import UserList from "./component/UserList";


const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};
function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  const [usersList, setusersList] = useState([]);
  const [isShow, setisShow] = useState(true);
  const [buttontext, setbuttontext] = useState(false);
  
  const data1 = useFetchdata("https://dummyjson.com/products")
  // const data = useFetchdata("https://api.chucknorris.io/jokes/random")
  
  const ShowHide = () => {
    setisShow(!isShow);
    setbuttontext(prev => !prev);
  };
  
  const AddUserHandler = (uName, UEmail) => {
    setusersList((prev) => {
      return [...prev, { name: uName, Email: UEmail }];
    });
  };
  
//   const showData = ()=>{
    
//  }

  
  return (
    <>
      <div>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({ type: "INCREMENT" })}>Increase me!</button>
        <button onClick={()=>dispatch({ type: "DECREMENT" })}>Decrease me!</button>
        <br />
        {isShow === true ? <h2>Wecome</h2> : null}
        <button onClick={ShowHide}>{buttontext ? "show" : "hide"}</button>
      </div>
      <User addUser={AddUserHandler} />
      <br />
      <UserList users={usersList} />
      {/* <button onClick={showData}>Show Data</button> */}
      {/* <FetchData userss={data}/> */}
      <Products product={data1}/>
    </>
  );
}

export default App;
