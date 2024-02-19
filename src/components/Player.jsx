import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const [userName, setUserName] = useState(null);
  const playerName = useRef();
  function setButtonHandler(){
    setUserName(playerName.current.value);
    playerName.current.value="";
  }
  
  
  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={setButtonHandler}>Set Name</button>
      </p>
    </section>
  );
}
