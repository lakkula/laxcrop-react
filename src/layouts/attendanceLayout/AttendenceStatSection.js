import React from 'react'
import OverViewSection from './attendenceStatSection/OverViewSection'
import StatSection from './attendenceStatSection/StatSection'

export default function AttendenceStatSection() {
  return (
    <div style={{display:'flex', gap:'20px'}}>
      <OverViewSection/>
      <StatSection/>
    </div>
  )
}
