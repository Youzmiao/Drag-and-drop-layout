import { useState, useRef, useEffect } from 'react'
import './Card.css'

interface CardProps {
  id: number
  title: string
  color: string
  position: { x: number; y: number }
  onPositionChange: (id: number, position: { x: number; y: number }) => void
  imageUrl: string
}

const Card = ({ id, title, position, onPositionChange, imageUrl }: CardProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (cardRef.current) {
      e.preventDefault()
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
      setIsDragging(true)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (isDragging) {
        const newPosition = {
          x: e.clientX - offset.x,
          y: e.clientY - offset.y
        }
        onPositionChange(id, newPosition)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    // 添加全局事件监听
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    // 清理事件监听
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, offset, id, onPositionChange])

  return (
    <div
      ref={cardRef}
      className={`card ${isDragging ? 'dragging' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isDragging ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(0deg)',
        zIndex: isDragging ? 100 : id,
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="card-image" style={{height: '100%'}}>
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  )
}

export default Card 