import React from 'react'
import Box from '@material-ui/core/Box'
import './Top.css'
import mars from './../data/mars.svg'
import martian from './../data/martian.png'
import GettingStartedButton from '../layouts/buttons/GettingStartedButton.js'


export default function Home () {
  return (
    <div className="wrapper">
      <Box mt={0.13} pt={0.8} pr={0.2}>
        <img id="background" src={ mars } alt="mars" />
        <img className="fluffy" src={ martian } alt="martian" />
        <h1>Blockchain Playground</h1>
        <div id="button-wrapper">
          <GettingStartedButton
            to={ '/wallet' }
          />
        </div>
      </Box>
    </div>
  )
}