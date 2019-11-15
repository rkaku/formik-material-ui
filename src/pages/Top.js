import React from 'react'
import './Top.css'
import logo from './../data/logo192.png'
// import { ReactComponent as Logo } from './logo512.png'
import MiningButton from './../layouts/buttons/MiningButton'


export default function Top () {
  return (
    <div className="wrapper">
      <img src={ logo } alt="Logo" />
      <p>Blockchain Playground</p>
      <a href="#">Getting Started</a>
    </div>
  )
}
// https://ruby-on-earth.firebaseapp.com