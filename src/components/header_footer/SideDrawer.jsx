import React from 'react'
import { scroller } from 'react-scroll'

import {Drawer, List, ListItemButton, duration} from '@mui/material'


const SideDrawer = (props) => {
    
    const links = [
        {where : 'featured', value: 'To top'},
        {where : 'venuenfo', value: 'Venue NFO'},
        {where : 'highlights', value: 'Highlights'},
        {where : 'pricing', value: 'Pricing'},
        {where : 'location', value: 'Location'}
    ]

    const scrollToItem = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay:100,
            smooth:true,
            offset:-150
        })
        props.onClose(false)
    }

    const renderLinks = (item) => {
        return (
        <ListItemButton onClick={() => scrollToItem(item.where)} key={item.where}> 
            {item.value}
        </ListItemButton>
        )
    }

  return (
    <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}

    > 
        <List component="nav">
            {links.map((item) => renderLinks(item))}
        </List>

    </Drawer>
  )
}

export default SideDrawer