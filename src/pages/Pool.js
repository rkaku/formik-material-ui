import React, { Component } from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import PoolDisplay from "layouts/lists/PoolDisplay";
import MineButton from "layouts/buttons/MineButton";
import { getMine, getPool } from "actionCreators";
// import { useDispatch, useSelector } from "react-redux";
// import * as Actions from "actionCreators";

class Pool extends Component {
  componentDidMount() {
    this.props.getPool();
  }

  _handleOnClick = () => this.props.getMine();

  render() {
    const { selector } = this.props;
    return (
      <Box minHeight='80vh'>
        <Box m={2}>
          <MineButton onClick={this._handleOnClick} />
        </Box>
        {selector &&
          selector.map((transaction, index) => {
            return <PoolDisplay key={index} transaction={transaction} />;
          })}
      </Box>
    );
  }
}

const mapStateToProps = state => ({ selector: state.blockchain.pool });

export default connect(mapStateToProps, { getMine, getPool })(Pool);

// export default Pool = () => {
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
//           return <PoolDisplay key={index} transaction={transaction} />;
//         })}
//     </Box>
//   );
// };

// [
//   {
//     "recipient_address": "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
//     "sender_address": "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
//     "value": 100
//   }
// ]

// { transaction: { … } }
// transaction:
// recipient_address: "2d61Xrz2GnRbTj7zjXT7NodtgaZXvmAJPEX"
// sender_address: "m68BpefzBQ3aZ1LMB6gMy569eoUai371y1"
// value: 100
// __proto__: Object
