import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
  const dialog = useRef();
  const timer = useRef();
  
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if(timeRemaining <= 0){
    clearInterval(timer.current); 
    dialog.current.open();
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000);
  }
  function startChallenge(){
    timer.current = setInterval(()=>{
        setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);

  }
  function stopChallenge(){
    clearInterval(timer.current);
    dialog.current.open();
  }
  

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        handleReset = {handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
         {<button onClick={isTimerActive ? stopChallenge : startChallenge}>
            {isTimerActive ? "Stop" : "Start"}
          </button>}
        </p>

        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
export default TimerChallenge;
