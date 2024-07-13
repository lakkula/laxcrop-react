import React from 'react'

export default function CardValue({value, valColor}) {
  return (
    <p style={{fontWeight:'bold', fontSize:'20px', color:valColor}}>{value}</p>
  )
}
