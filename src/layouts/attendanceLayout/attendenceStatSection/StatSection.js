import React from 'react'
import TitleAndContentWrapper from '../common/TitleAndContentWrapper'
import StatTitleSection from './statSection/StatTitleSection'
import StatContent from './statSection/StatContent'

export default function StatSection() {
  return (
    <div>
      <TitleAndContentWrapper>
        <StatTitleSection slot={'first'}/>
        <StatContent slot={'second'}/>
      </TitleAndContentWrapper>
    </div>
  )
}
