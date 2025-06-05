import { notifications } from '@/temp/NotificationData'
import React from 'react'
import NotificationCard from './NotificationCard'

const NotificationsList = () => {
  return (
    <div>
      <div className='flex flex-col gap-3'>
        {notifications.map((notification,index) => {
          return (
            <NotificationCard key={index} {...notification} />
          )
        })}
      </div>
    </div>
  )
}

export default NotificationsList