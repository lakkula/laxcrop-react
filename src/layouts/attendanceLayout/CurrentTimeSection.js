import React from 'react'
import TimeSectionWrapper from '../../components/currentTimeSection/TimeSectionWrapper'
import TimeSectionTitle from '../../components/currentTimeSection/TimeSectionTitle'
import DateTime from '../../components/currentTimeSection/DateTime'

export default function CurrentTimeSection() {
  return (
    <div>
      <TimeSectionWrapper>
      <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
        <div>
          <TimeSectionTitle/>
          <DateTime/>
        </div>
        <img src='' alt='clock'/>
      </div>
      </TimeSectionWrapper> 
    </div>
  )
}
