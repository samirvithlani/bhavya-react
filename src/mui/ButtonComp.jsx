import { Button } from '@mui/material'
import React from 'react'

export const ButtonComp = (props) => {
  return (
    <Button variant='contained' color='primary'>
        {props.name}
    </Button>
  )
}
