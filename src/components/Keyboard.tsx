const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

import styles from "../Keyboard.module.css";

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter:string) => void
    disabled?: boolean
}
 
const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled=false}:KeyboardProps) => {
  return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))", gap:"0.5rem"}}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return <button key={key} disabled={isActive || isInactive || disabled} onClick={() => addGuessedLetter(key)} className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}>{key}</button>
            })}
        </div>
  )
};

export default Keyboard;