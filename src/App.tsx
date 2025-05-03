import { useState } from 'react'
import Card from './components/Card'
import './App.css'

interface CardData {
  id: number
  title: string
  color: string
  position: { x: number; y: number }
  imageUrl: string
}

function App() {
  const [cards, setCards] = useState<CardData[]>([
    { 
      id: 1, 
      title: '风景照', 
      color: '#63EF8D', 
      position: { x: 100, y: 100 },
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=700&q=80' 
    },
    { 
      id: 2, 
      title: '建筑', 
      color: '#63EF8D', 
      position: { x: 350, y: 120 },
      imageUrl: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&h=700&q=80' 
    },
    { 
      id: 3, 
      title: '城市夜景', 
      color: '#63EF8D', 
      position: { x: 600, y: 150 },
      imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&h=700&q=80' 
    },
    { 
      id: 4, 
      title: '海滩', 
      color: '#63EF8D', 
      position: { x: 200, y: 300 },
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=700&q=80' 
    },
    { 
      id: 5, 
      title: '山脉', 
      color: '#63EF8D', 
      position: { x: 450, y: 320 },
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=700&q=80' 
    },
  ])

  const updateCardPosition = (id: number, position: { x: number; y: number }) => {
    setCards(prevCards =>
      prevCards.map(card => 
        card.id === id ? { ...card, position } : card
      )
    )
  }

  return (
    <div className="app">
      <h1>照片相册</h1>
      <div className="card-container">
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            color={card.color}
            position={card.position}
            onPositionChange={updateCardPosition}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default App 