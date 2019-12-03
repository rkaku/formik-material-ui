// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { makeStyles } from "@material-ui/core/styles";
// import * as Actions from "actionCreators";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
// import FormatBoldIcon from "@material-ui/icons/FormatBold";
// import MineButton from "layouts/buttons/MineButton";
// import Box from "@material-ui/core/Box";
// import PropTypes from "prop-types";

// export default function C() {
//   Pool.propTypes = {
//     transaction: PropTypes.shape({
//       recipient_address: PropTypes.string.isRequired,
//       sender_address: PropTypes.string.isRequired,
//       value: PropTypes.number.isRequired,
//     }),
//   };

//   function Pool({ transaction }) {
//     const classes = useStyles();
//     return (
//       <Box maxWidth='840px' ml='auto' mr='auto'>
//         <Grid container className={classes.root} spacing={2}>
//           <Grid item xs={12}>
//             <Paper className={classes.control}>
//               <List
//                 component='nav'
//                 className={classes.root}
//                 aria-label='contacts'
//               >
//                 <Divider />
//                 <ListItem button>
//                   <ListItemIcon>
//                     <EmailOutlinedIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={`Sender Address: ${transaction.sender_address}`}
//                   />
//                 </ListItem>
//                 <Divider variant='middle' />
//                 <ListItem button>
//                   <ListItemIcon>
//                     <EmailOutlinedIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={`Recipient Address: ${transaction.recipient_address}`}
//                   />
//                 </ListItem>
//                 <Divider variant='middle' />
//                 <ListItem button>
//                   <ListItemIcon>
//                     <FormatBoldIcon />
//                   </ListItemIcon>
//                   <ListItemText primary={`Amount: ${transaction.value} BTC`} />
//                 </ListItem>
//                 <Divider />
//               </List>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   }

//   // Axios GET /pool => Transaction Pool Data
//   const dispatch = useDispatch();
//   React.useEffect(() => {
//     dispatch(Actions.getPool());
//   }, [dispatch]);
//   const selector = useSelector(state => state.blockchain.pool);

//   // Axios GET /mine => Mining
//   const _handleOnClick = React.useCallback(() => {
//     dispatch(Actions.getMine());
//   }, [dispatch]);

//   return (
//     <Box minHeight='80vh'>
//       <Box m={2}>
//         <MineButton onClick={_handleOnClick} />
//       </Box>
//       {selector &&
//         selector.map((transaction, index) => {
//           return <Pool key={index} transaction={transaction} />;
//         })}
//     </Box>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     maxWidth: 960,
//     backgroundColor: theme.palette.background.paper,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

// // [
// //   {
// //     "recipient_address": "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
// //     "sender_address": "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
// //     "value": 100
// //   }
// // ]

// // { transaction: { … } }
// // transaction:
// // recipient_address: "2d61Xrz2GnRbTj7zjXT7NodtgaZXvmAJPEX"
// // sender_address: "m68BpefzBQ3aZ1LMB6gMy569eoUai371y1"
// // value: 100
// // __proto__: Object
