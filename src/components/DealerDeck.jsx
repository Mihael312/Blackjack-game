import cardsEl from "..";

export default function DealerDeck () {
    return (
                <div className='flex justify-center'>
                  <img className='w-28 h-40 m-2' src={cardsEl[0].img} alt="nema" />
                  <img className='w-28 h-40 m-2' src={cardsEl[0].img} alt="nema" />
                  <img className='w-28 h-40 m-2' src={cardsEl[0].img} alt="nema" />
                </div>
    )
}