import React from 'react'

export default function LegendValue({value, title}) {
  return (
    <p style={{color:'gray'}}><span style={{fontWeight:'bold', color:'black'}}>{value}</span>{' '}{title}</p>
  )
}
