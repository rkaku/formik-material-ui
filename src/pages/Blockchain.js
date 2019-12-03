import React, { Component } from "react";
import { connect } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
// import * as Actions from "actionCreators";
import { getChain } from "actionCreators";
import ChainDisplay from "layouts/lists/ChainDisplay";

export class Blockchain extends Component {
  componentDidMount() {
    this.props.getChain();
  }

  render() {
    const { selector } = this.props;
    return (
      <Box minHeight='80vh' data-test='box'>
        {
          // :TODO: Alice & Bob Amount Display
        }
        {selector[0] &&
          selector[0].map((chain, index) => {
            return <ChainDisplay key={index} chain={chain} data-test='chain' />;
          })}
      </Box>
    );
  }
}

const mapStateToProps = state => ({ selector: state.blockchain.chain });

export default connect(mapStateToProps, { getChain })(Blockchain);

// export default Blockchain = () => {
//   // Axios GET /chain => Blockchain Data
//   const dispatch = useDispatch();
//   React.useEffect(() => {
//     dispatch(Actions.getChain());
//   }, [dispatch]);
//   const selector = useSelector(state => state.blockchain.chain);

//   // :TODO: Alice & Bob Amount
//   // const aliceAmount = selector[ 1 ]
//   // const bobAmount = selector[ 2 ]

//   return (
//     <Box minHeight='80vh' data-test='box'>
//       {
//         // :TODO: Alice & Bob Amount Display
//       }
//       {selector[0] &&
//         selector[0].map((chain, index) => {
//           return <Chain key={index} chain={chain} data-test='chain' />;
//         })}
//     </Box>
//   );
// };

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

// (3) [Array(4), -400, 400]
// 0: (4) [{…}, {…}, {…}, {…}]
// 1: -400
// 2: 400

// chain: Array( 4 )
// 0: { nonce: 0, previous_hash: "44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a", timestamp: "2019-11-13 23:37:58 +0000", transactions: Array( 0 ) }
// 1: { nonce: 206, previous_hash: "2ac88683c5d20a3fa9516c3b5d790d22402d7a86c858c1bb55f17becaff1009d", timestamp: "2019-11-13 23:42:08 +0000", transactions: Array( 2 ) }
// 2: { nonce: 76, previous_hash: "f01029b51ce0800028ff19fc4549829083c59a581ef4ba611f5664c16598b664", timestamp: "2019-11-13 23:46:07 +0000", transactions: Array( 1 ) }
// 3: { nonce: 490, previous_hash: "681f2bae907594ba9b7c51b028590ad451074d0f6cc04c64dc18ef590eb9a86c", timestamp: "2019-11-13 23:56:20 +0000", transactions: Array( 2 ) }
