import React from 'react'

export default function AttendenceTitleSection() {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'10px', justifyContent:'space-between'}}>
        <h4>Today</h4>
        <span
        style={{
            backgroundColor:'red',
            borderRadius:'10px',
            padding:'5px 10px',
            color:'white'
        }}
        >
        Absent
        </span>
  </div>
  )
}
