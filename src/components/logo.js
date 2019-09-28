import React from 'react'

export const Logo = () => {
  return (
    <div
      className="hover:text-green-300 text-shadow-subtle"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        textTransform: 'uppercase',
        fontSize: '1.5rem',
        lineHeight: '1.5rem',
      }}
    >
      <span className="font-bold">Bardos</span> <br />
      Foundation
    </div>
  )
}
