import React from 'react'

export default function SingleLegendBox({color}) {
  return (
    <div style={{
      width:'10px',
      height:'10px',
      backgroundColor:color,
      borderRadius:'50%'
    }}
    >
    </div>
  )
}
