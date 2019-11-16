import React from 'react'
import './Home.css'
import mars from './../data/mars.png'
import martian from './../data/martian.png'
import GettingStartedButton from '../layouts/buttons/GettingStartedButton.js'


export default function Home () {
  // console.log( { Mars } )
  return (
    <div className="wrapper">
      <img id="background" src={ mars } alt="mars" />
      <img className="fluffy" src={ martian } alt="Martian" />
      <p>Blockchain Playground</p>
      <div id="button-wrapper">
        <GettingStartedButton
          // className={ classes.button }
          to={ '/wallet' }
        />
      </div>
    </div>
  )
}