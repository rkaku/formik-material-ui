import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
// import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined'
// import FormatBoldOutlinedIcon from '@material-ui/icons/FormatBoldOutlined'
// import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined'
// import * as ReactRouter from 'react-router-dom'
import { Link } from 'react-router-dom'


const useStyles = makeStyles( {
  root: {
    width: 690,
  },
} )

export default function SimpleBottomNavigation () {
  const classes = useStyles()
  const [ value, setValue ] = React.useState( 0 )
  // const location = ReactRouter.useLocation()
  // const history = ReactRouter.useHistory()

  return (
    <BottomNavigation
      value={ value }
      onChange={ ( event, newValue ) => {
        setValue( newValue )
      } }
      showLabels
      className={ classes.root }
    >
      <BottomNavigationAction component={ Link } to="/" label="Home" icon={ <HomeOutlinedIcon /> } />
      {/* <BottomNavigationAction component={ Link } to="/wallet" label="Wallet" icon={ <AttachMoneyOutlinedIcon /> } />
      <BottomNavigationAction component={ Link } to="/pool" label="Transaction Pool" icon={ <PetsOutlinedIcon /> } />
      <BottomNavigationAction component={ Link } to="/chain" label="Blockchain" icon={ <FormatBoldOutlinedIcon /> } /> */}
    </BottomNavigation>
  )
}