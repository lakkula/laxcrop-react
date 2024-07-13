import React from 'react'

export default function TimeSectionWrapper({children}) {
  return (
    <div style={{boxShadow:'2px 2px 4px rgba(0,0,0,0.5)', padding:'10px'}}>
        {children}
    </div>
  )
}
