import { useState } from "react";
import "./App.css";

function App() {
  const allUsers = ["john", "ali", "abhi", "grain", "shein", "sher"];

  const [users, setUsers] = useState(allUsers);

  const handleSearch=(text:string)=>{
    const filteredUser=users.filter((user)=>{
           return user.includes(text);
           
    });
    setUsers(filteredUser);
}

const handleShuffle=()=>{
    const shuffledUsers=[...users].sort(()=>Math.random()-0.5)
    setUsers(shuffledUsers)
}

  return (
    <div className="search">
      <h2>Shuffle Or Search</h2>
      <div>
        <button className="shuffleBtn" onClick={handleShuffle}>
          Shuffle
        </button>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
