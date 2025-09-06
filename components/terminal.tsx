"use client"

import { useEffect, useState, useRef } from "react"

interface TerminalProps {
  text: string
  typingSpeed?: number
  className?: string
  showPrompt?: boolean
  onComplete?: () => void
  skipAnimation?: boolean
}

export function Terminal({
  text,
  typingSpeed = 50,
  className = "",
  showPrompt = true,
  onComplete,
  skipAnimation = false,
}: TerminalProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<NodeJS.Timeout>()

  // Efecto para manejar cambios en skipAnimation
  useEffect(() => {
    if (skipAnimation) {
      setDisplayedText(text)
      setIsTyping(false)
      if (onComplete) onComplete()
    } else {
      setDisplayedText("")
      setIsTyping(true)
    }
  }, [skipAnimation, text, onComplete])

  // Efecto para la animación de tipeo
  useEffect(() => {
    if (skipAnimation) return

    let currentIndex = 0

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1))
        currentIndex++
        animationRef.current = setTimeout(typeNextCharacter, typingSpeed)
      } else {
        setIsTyping(false)
        setCursorVisible(true)
        if (onComplete) onComplete()
      }
    }

    typeNextCharacter()

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [text, typingSpeed, onComplete, skipAnimation])

  // Efecto para el cursor parpadeante
  useEffect(() => {
    if (isTyping) return

    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 500)

    return () => clearInterval(interval)
  }, [isTyping])

  return (
    <div className={`terminal-window scanline ${className}`} ref={containerRef}>
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <div className="terminal-title">terminal</div>
      </div>
      <div className="terminal-content">
        {showPrompt && <span className="text-neon-pink">$ </span>}
        <span>{displayedText}</span>
        {(isTyping || cursorVisible) && <span className="terminal-cursor">|</span>}
      </div>
    </div>
  )
}