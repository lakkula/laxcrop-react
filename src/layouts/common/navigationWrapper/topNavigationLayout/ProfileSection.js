import React from 'react'
import DropDownIcon from '../../../../components/profileSection/DropDownIcon'
import ProfilePic from '../../../../components/profileSection/ProfilePic'

export default function ProfileSection() {
  return (
    <div style={{display:'flex', gap:'3px'}}>
      <ProfilePic/>
      <DropDownIcon/>
    </div>
  )
}
