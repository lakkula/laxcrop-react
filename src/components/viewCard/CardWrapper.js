import React from 'react'

export default function CardWrapper({children}) {
  return (
    <div style={{
        boxShadow:'2px 2px 4px rgba(0,0,0,0.5)',
        padding:'10px',
        height:'100px',
        width:'150px',
    }}
    >
        {children}
    </div>
  )
}
