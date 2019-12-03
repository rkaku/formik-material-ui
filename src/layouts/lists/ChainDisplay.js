import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import EnhancedEncryptionOutlinedIcon from "@material-ui/icons/EnhancedEncryptionOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Box from "@material-ui/core/Box";
// import * as Actions from "actionCreators";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 960,
    backgroundColor: theme.palette.background.paper,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Chain({ chain }) {
  const classes = useStyles();
  return (
    <Box maxWidth='840px' ml='auto' mr='auto'>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <List
              component='nav'
              className={classes.root}
              aria-label='contacts'
            >
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <VpnKeyOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={`Nonce: ${chain.nonce}`} />
              </ListItem>
              <Divider variant='middle' />
              <ListItem button>
                <ListItemIcon>
                  <EnhancedEncryptionOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Previous Hash: ${chain.previous_hash}`}
                />
              </ListItem>
              <Divider variant='middle' />
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={`Time Stamp: ${chain.timestamp}`} />
              </ListItem>
              <Divider variant='middle' />
              <ListItem button>
                <ListItemIcon>
                  <ArrowDropDownIcon />
                </ListItemIcon>
                <ListItemText primary={`Transactions:`} />
              </ListItem>
              <Divider variant='middle' />
              {chain.transactions &&
                chain.transactions.map((tran, index) => {
                  return (
                    <>
                      <Paper key={index} className={classes.control}>
                        <ListItem button>
                          <ListItemIcon></ListItemIcon>
                          <ListItemText
                            inset
                            secondary={`Recipient Address: ${tran.recipient_address}`}
                          />
                        </ListItem>
                        <Divider component='li' variant='inset' />
                        <ListItem button>
                          <ListItemIcon></ListItemIcon>
                          <ListItemText
                            inset
                            secondary={`Sender Address: ${tran.sender_address}`}
                          />
                        </ListItem>
                        <Divider component='li' variant='inset' />
                        <ListItem button>
                          <ListItemIcon></ListItemIcon>
                          <ListItemText
                            inset
                            secondary={`Amount: ${tran.value}`}
                          />
                        </ListItem>
                      </Paper>
                    </>
                  );
                })}
              <Divider />
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

Chain.propTypes = {
  chain: PropTypes.shape({
    nonce: PropTypes.number.isRequired,
    previous_hash: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        recipient_address: PropTypes.string,
        sender_address: PropTypes.string,
        value: PropTypes.number,
      }),
    ).isRequired,
  }),
};
