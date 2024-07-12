import React from 'react'
import GreetingSection from './attendanceLayout/GreetingSection'
import CurrentTimeSection from './attendanceLayout/CurrentTimeSection'
import TodayAttendenceSection from './attendanceLayout/TodayAttendenceSection'
import AttendenceStatSection from './attendanceLayout/AttendenceStatSection'
import TableSection from './attendanceLayout/TableSection'

export default function AttendanceLayout() {
  return (
    <div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <GreetingSection/>
            <CurrentTimeSection/>
        </div>
        <div style={{display:'flex', gap:'20px'}}>
          <div style={{padding:'20px'}}>
            <TodayAttendenceSection/>
          </div>
          <div style={{padding:'20px'}}>
            <AttendenceStatSection/>
          </div>    
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <TableSection/>
            <TableSection/>
        </div>  
    </div>
  )
}
