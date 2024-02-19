import {forwardRef,useRef,  useImperativeHandle} from 'react';
import {createPortal} from 'react-dom'

const ResultModal = forwardRef(
    function ResultModal({targetTime, timeRemaining, handleReset}, ref){
        const dialog = useRef();
        const userLost  = timeRemaining <= 0;
        const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
        const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
        useImperativeHandle(ref, ()=>{
            return {
                open (){
                    dialog.current.showModal();
                }
            }
        });
        return createPortal(
            <dialog ref={dialog} className="result-modal">
                {userLost && <h2>You Lost!</h2>}
                {!userLost && <h2>You Score:{score}</h2>}
                <p>The target time was <strong>{targetTime} seconds.</strong></p>
                <p>You stopped the timer with <strong>{formattedTimeRemaining} seconds left.</strong></p>
                <form method="dialog" onSubmit={handleReset}>
                    <button>Close</button>
                </form>
            </dialog>
        ,document.querySelector('#modal'));
    }
)
export default ResultModal;