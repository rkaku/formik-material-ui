import React from 'react'
import * as ReactRouter from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';


function a11yProps ( index ) {
  return {
    id: `nav-tab-${ index }`,
    'aria-controls': `nav-tabpanel-${ index }`,
  };
}

function LinkTab ( props ) {
  const history = ReactRouter.useHistory()
  return (
    <Tab
      component="a"
      onClick={ event => {
        event.preventDefault()
        history.push( props.href )
      } }
      { ...props }
    />
  );
}

const useStyles = makeStyles( theme => ( {
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
} ) )

export default function NavTabs () {
  const classes = useStyles();
  const [ value, setValue ] = React.useState( 0 )

  const handleChange = ( event, newValue ) => {
    setValue( newValue )
  }

  return (
    <div className={ classes.root }>
      <Paper square>
        <Tabs
          variant="fullWidth"
          value={ value }
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={ handleChange }
          aria-label="nav tabs example"
        >
          <LinkTab label="Wallet" href="/wallet" { ...a11yProps( 0 ) } />
          <LinkTab label="Transaction Pool" href="/pool" { ...a11yProps( 1 ) } />
          <LinkTab label="Blockchain" href="/chain" { ...a11yProps( 2 ) } />
        </Tabs>
      </Paper>
    </div>
  )
}