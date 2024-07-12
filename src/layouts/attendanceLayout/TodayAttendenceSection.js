import React from 'react'
import TitleAndContentWrapper from './common/TitleAndContentWrapper'
import AttendenceTitleSection from './todayAttendenceSection/AttendenceTitleSection'
import AttendenceContent from './todayAttendenceSection/AttendenceContent'

export default function TodayAttendenceSection() {
  return (
    <div>
      <TitleAndContentWrapper>
        <AttendenceTitleSection slot={'first'}/>
        <AttendenceContent slot={'second'}/>
      </TitleAndContentWrapper>
    </div>
  )
}
