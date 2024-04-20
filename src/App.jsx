import './style.css';
import { useState } from 'react';
import Deck from './components/Deck';
import DealerDeck from './components/DealerDeck';
import cardsEl from '.';

function App() {
  const [deal, setDeal] = useState(true);
  const [deck, setDeck] = useState([]);
  const [myScore, setMyScore] = useState(0);
  const [result, setResult] = useState("");

  // Function to add a new card to the deck
  const addCard = () => {
    const randomNum = Math.ceil(Math.random() * 9);
    const newCard = {
      img: cardsEl[randomNum].img,
      value: cardsEl[randomNum].value
    };
    setMyScore(prevScore => prevScore + newCard.value);
    setDeck([...deck, newCard]);
  };

  // Function to deal cards when the "Deal cards" button is clicked
  const dealCards = () => {
    // Add initial card when dealing cards for the first time
    if (deal) {
      addCard();
    }
    setDeal(false);
  };

  const stand = () => {
    const dealerScore = 14 + Math.ceil(Math.random() * 11);
    if (myScore > 21) {
      setResult("Game over! Score over 21");
    } else if (myScore > dealerScore && dealerScore < 22) {
      setResult(`You won! Dealer has ${dealerScore}`);
    } else if (myScore === dealerScore) {
      setResult(`Tie! Dealer has ${dealerScore}`);
    } else if (myScore < dealerScore && dealerScore < 22){
      setResult(`You lost! Dealer has ${dealerScore}`);
    }
    setTimeout(() => {setDeal(true),setMyScore(0),setResult(""),setDeck([])}, 2000)
  };

  return (
    <div className='h-[100vh] flex flex-col justify-center'>
      <div className='flex flex-col justify-center h-[100%]'>
        {deal ? (
          <div className='flex justify-center'>
            <button className='border border-red-500 bg-yellow-300 p-4' onClick={dealCards}>Deal cards</button>
          </div>
        ) : (
          <div className='h-[100%]'>
            <div className='h-[40%] flex flex-col justify-end'>
              <DealerDeck />
              <h1 className='text-center font-mono font-bold text-2xl text-stone-50 '>DEALER</h1>
            </div>

            <div className='h-[20%] flex justify-center gap-2'>
              <button onClick={addCard} className='w-24 h-24 bg-green-600 my-6 mx-20 rounded-full border-4 border-yellow-500 font-mono font-bold text-2xl text-stone-50 '>HIT</button>
              <button onClick={stand} className='w-24 h-24 bg-green-600 my-6 mx-20 rounded-full border-4 border-yellow-500 font-mono font-bold text-2xl text-stone-50 '>STAND</button>
            </div>

            <div className='h-[40%] flex flex-col justify-top'>
              <h1 className='text-center font-mono font-bold text-2xl text-stone-50 '>YOUR DECK</h1>
              <Deck cards={deck} />
              <h1 className='text-center font-mono font-bold text-xl text-stone-50 '>score: {myScore}</h1>
              {result && <h1 className='text-center font-mono font-bold text-xl text-stone-50'>{result}</h1>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
