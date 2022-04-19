import Context from "./context";
import React,{useState} from 'react'

const State = (props) => {
    const [user, setUser] = useState({
        name: "",
        password: "",
      });
    
  return (
      <Context.Provider value={{user,setUser}}>
          {props.children}
          </Context.Provider>
  )
}

export default State;