import React from 'react'
import './Home.css'
import logo from './../data/logo192.png'
// import { ReactComponent as Logo } from './logo512.png'
import GettingStartedButton from '../layouts/buttons/GettingStartedButton.js'


export default function Top () {
  return (
    <div className="wrapper">
      <img src={ logo } alt="Logo" />
      <p>Blockchain Playground</p>
      {/* <a href="#">Getting Started</a> */}
      <GettingStartedButton
        className="getting-started-button"
        to={ '/wallet' }
      />
    </div>
  )
}
// https://ruby-on-earth.firebaseapp.com