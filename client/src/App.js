import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react'

function App() {
  const [usersList, setUsersList] = useState([])
  useEffect(()=> {
    Axios.get("http://localhost:3001/users")
    .then((res)=>{
      setUsersList(res.data)
    })
  })
  return (
    <div className="App">
       {
        usersList.map((user)=>{
          return(
            <div>
              <h2>Name: {user.username}</h2>
              </div>
          )

        })


      }

    </div>
  );
}

export default App;
