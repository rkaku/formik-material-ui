import React from 'react'
import './Top.css'
import mars from './../data/mars.svg'
// import mars from './../data/mars.png'
import martian from './../data/martian.png'
import GettingStartedButton from '../layouts/buttons/GettingStartedButton.js'
import Box from '@material-ui/core/Box'


export default function Home () {
  // console.log( { Mars } )
  return (
    <div className="wrapper">
      <Box mt={0.13} pt={0.8} pr={0.2}>
        <img id="background" src={ mars } alt="mars" />
        <img className="fluffy" src={ martian } alt="martian" />
        <h1>Blockchain Playground</h1>
        <div id="button-wrapper">
          <GettingStartedButton
            // className={ classes.button }
            to={ '/wallet' }
          />
        </div>
      </Box>
    </div>
  )
}