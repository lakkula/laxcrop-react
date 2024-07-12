import React from 'react'

export default function TimeLeft() {
  return (
    <div style={{display:'flex', gap:'5px'}}>
        <div style={{width:'5px', height:'25px', backgroundColor:'red'}}></div>
        <p style={{color:'gray'}}>Time left: <span style={{color:'red'}}>56m 44s</span></p>
    </div>
  )
}
