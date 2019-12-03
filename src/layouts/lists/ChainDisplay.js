import React from "react";
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

export default function Chain(props) {
  const { chain } = props;
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

// chain:
// nonce: 297
// previous_hash: "d20722b176c30b2564af1c858e3dd96276928bf0e22c43410ca67fca13cb2ebe"
// timestamp: "2019-12-03 06:14:21 +0000"
// transactions: Array(2)
// 0:
// recipient_address: "2hFPbbH2DaAU5KCpdZibZ3voCPegU5tSkHm"
// sender_address: "9ELt9pVEH7k98nxBcGFW6J5SuJxX9SbKy9"
// value: 100
// __proto__: Object
// 1:
// recipient_address: "YGSYSvB9GDnNwMjYqgZNHkxFccrirABXnP"
// sender_address: "BLOCKCHAIN PLAYGROUND"
// value: 1

// [
//   [
//     {
//       nonce: 0,
//       previous_hash: "44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a",
//       timestamp: "2019-11-12 10:41:03 +0900",
//       transactions: []
//     },
//     {
//       nonce: 10374,
//       previous_hash: "2358632ad548aec8f6736120a9f5230072607756b1286c00765b22d77a42417e",
//       timestamp: "2019-11-12 10:41:41 +0900",
//       transactions: [
//         {
//           recipient_address: "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
//           sender_address: "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
//           value: 100
//         },
//         {
//           recipient_address: "2VTnrimUwphfxyDQLVarHdB9qh8dgaqjgcP",
//           sender_address: "a0dc65ffca799873cbea0ac274015b9526505daaaed385155425f7337704883e",
//           value: 1
//         }
//       ]
//     }
//   ],
//   -100,
//   100
// ]
