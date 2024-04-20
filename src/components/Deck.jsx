export default function Deck ({cards}) {
    return (
      <div className='flex justify-center' >
                  {cards.map((card, index) => (
                    <img key={index} className='w-28 h-40 m-2' src={card.img} value={card.value} alt="card" />
                  ))}
                </div>
    )
}