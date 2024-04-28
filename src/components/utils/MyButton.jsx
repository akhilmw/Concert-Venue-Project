import React from 'react'
import { Button } from '@mui/material'
import ticketIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {

    


  return (
    <Button href={props.link} variant='contained' size='large' style={{background: '#8e8e8e', color: 'white'}}
    >
        <img className='iconImage' src={ticketIcon} alt="icon_button" />
      {props.text}
    </Button>
  )
}

export default MyButton
