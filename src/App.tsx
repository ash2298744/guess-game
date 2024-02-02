import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import words from './wordList.json';

import Keyboard from "./components/Keyboard";
import GuessArt from "./components/GuessArt";
import GuessWord from "./components/GuessWord";

function getWord(){
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length >= wordToGuess.length * 1.5;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter:string)=>{
    if(guessedLetters.includes(letter) || isLoser || isWinner) return;
    setGuessedLetters(currentLetter => [...currentLetter, letter]);
  }, [guessedLetters, isWinner, isLoser])


  useEffect(() => {
    const handler = (e:KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  },[guessedLetters])

  useEffect(() => {
    const handler = (e:KeyboardEvent) => {
      const key = e.key
      if(key != "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    }
  },[])


  return (
    <div style={{maxWidth:"800px", display:"flex", flexDirection:"column", gap:"2rem", margin:"0 auto", alignItems:"center"}}>
      <div style={{fontSize:"2rem", textAlign:"center"}}>
        {isWinner && "Congratulations! - Click to Try Again"}
        {isLoser && "Great Effort! - Reload to Give It Another Shot"}
      </div>

      <GuessArt numberOfGuesses = {incorrectLetters.length}/>
      <GuessWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser}/>

      <div style={{alignSelf:"stretch"}}>
        <Keyboard 
          disabled = {isWinner || isLoser}
          activeLetters = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters = {incorrectLetters}
          addGuessedLetter = {addGuessedLetter}
        />
      </div>
      
    </div>
  )
}

export default App
