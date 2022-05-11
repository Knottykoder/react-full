import React, { useState } from "react";

function User(props) {
  const [usrName, setusrName] = useState("");
  const [usrEmail, setusrEmail] = useState("");
  // const [isValid, setisValid] = useState(true);
  const [usrerr,setusrerr]=useState('')
  const [Emailerr,setEmailerr]=useState('')

  const addUser = (event) => {
    event.preventDefault();
    if (usrName.trim() === "" && usrEmail.trim() === "") {
      return alert("enter the correct value");
    }
    props.addUser(usrName, usrEmail);
    setusrName("");
    setusrEmail("");
  };

  const userName = (event) => {
    setusrName(event.target.value);
    if(usrName.length>4){
      setusrerr('')
    }else{
      setusrerr('enter the full name')
    }
  };

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const userEmail = (e) => {
    setusrEmail(e.target.value);
    if(re.test(usrEmail)){
 setEmailerr('')
    }else{
      setEmailerr("invalid Email")
    }
  };

  return (
    <form>
      <label>User name :</label>
      <input type="text" onChange={userName} value={usrName} />
      <span>{usrerr}</span>
      <label>Email : </label>
      <input type="text" onChange={userEmail} value={usrEmail} />
      <span>{Emailerr}</span>
      <button  type="submit" onClick={addUser}>
        Add User
      </button>
    </form>
  );
}

export default User;
