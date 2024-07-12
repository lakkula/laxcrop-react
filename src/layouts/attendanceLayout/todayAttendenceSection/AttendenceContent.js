import React from 'react'
import AttendanceGraph from '../../../components/attendenceContent/AttendanceGraph'
import AttendanceDescription from '../../../components/attendenceContent/AttendanceDescription'
import TimeLeft from '../../../components/attendenceContent/TimeLeft'
import MarkPresentBtn from '../../../components/attendenceContent/MarkPresentBtn'

export default function AttendenceContent() {
  return (
    <div>
      <div style={{display:'flex'}}>
        <div>
          <img src='' alt='fingprint'/>
          <AttendanceDescription/>
          <div style={{marginTop:'15px'}}>
            <TimeLeft/>
          </div>
        </div>
       <AttendanceGraph/>
      </div>
      <div style={{marginTop:'20px'}}>
        <MarkPresentBtn/>
      </div>
    </div>
  )
}
