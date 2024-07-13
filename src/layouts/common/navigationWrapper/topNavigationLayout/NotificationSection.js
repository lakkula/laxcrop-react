import React from 'react'
import MailIcon from '../../../../components/notificationSection/MailIcon'
import NotificationIcon from '../../../../components/notificationSection/NotificationIcon'

export default function NotificationSection() {
  return (
    <div style={{display:'flex', gap:'30px'}}>
      <MailIcon/>
      <NotificationIcon/>
    </div>
  )
}
