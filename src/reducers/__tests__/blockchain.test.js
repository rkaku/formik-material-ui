import types from "actionTypes";
import blockchainReducer from "reducers/blockchain";

describe("Blockchain Reducer", () => {
  it("returns default state", () => {
    const newState = blockchainReducer(undefined, {});
    expect(newState).toEqual({ chain: {}, mining: {}, pool: [], wallet: {} });
  });

  it("returns correct state from GET_WALLET", () => {
    const data = {
      0: {
        address: "VAJfKcgCfmtFTeK7o3nURWQk18t3RoibSf",
        priv_key:
          "Lzhp9LopCHc5baafRVrffRsdjvHq89ZZKYAftuU4DtouF7T9sYjAJrBnVf7ZskfpGrHNQCd2KFyUsLJEtNoGgNGPJyaWt45aaAESN5DhmdGRCX2s3FzuUauumkiHANkL8TWXmeR1i4g5qwhA4LEDJGdxxS8t5A49z",
        pub_key:
          "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyDaiKS5fSGUQS8Eh8kFP4mZWBoEcA83BFo3j6v44irm5T2ttgV65UmRTnGxnjzbTQsh4MMWSpdYvWeunNYKe9HJL",
      },
      1: {
        address: "gYQJW2D2RhiCvDUsVQioTXLDEAkqwccu9R",
        priv_key:
          "Lzhp9LopCCVE7eG3FtcDW1oSzKWmo1tG46vgdmsC5eKd1XGF3Rjxi1bUfnoZTi512YR2FW2Af28SFbjhWGGa3ErrLd78PNdVqvmSKttVvLXGFYqMJSLhABhEjdzvuEBNPo93Dxnxsi3z8Ga3ZkrTi9GDiWrTP1Xy9",
        pub_key:
          "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCxxJyh5TWLNMppcDDRYLwL9ekisD9NP6dqxYE9WEfYGoPxwL35UGQWrCmT6FzaTBFAC285NhbdtTEy3GiD4oLdY3q",
      },
    };
    const newState = blockchainReducer(undefined, {
      type: types.GET_WALLET,
      response: { data: data },
    });
    expect(newState.wallet).toEqual(data);
  });

  it("returns correct state from POST_SEND_MONEY", () => {
    const newState = blockchainReducer(undefined, {
      type: types.POST_SEND_MONEY,
    });
    expect(newState).toEqual({ chain: {}, mining: {}, pool: [], wallet: {} });
  });

  it("returns correct state from GET_POOL", () => {
    const data = [
      {
        recipient_address: "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
        sender_address: "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
        value: 100,
      },
    ];
    const newState = blockchainReducer(undefined, {
      type: types.GET_POOL,
      response: { data: data },
    });
    expect(newState.pool).toEqual(data);
  });

  it("returns correct state from GET_MINE", () => {
    const response = { data: false };
    const newState = blockchainReducer(undefined, {
      type: types.GET_MINE,
      response: response,
    });
    expect(newState.mining).toEqual(response.data);
  });

  it("returns correct state from GET_CHAIN", () => {
    const data = {
      0: [
        {
          nonce: 0,
          previous_hash:
            "44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a",
          timestamp: "2019-11-12 10:41:03 +0900",
          transactions: [],
        },
        {
          nonce: 10374,
          previous_hash:
            "2358632ad548aec8f6736120a9f5230072607756b1286c00765b22d77a42417e",
          timestamp: "2019-11-12 10:41:41 +0900",
          transactions: [
            {
              recipient_address: "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
              sender_address: "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
              value: 100,
            },
            {
              recipient_address: "2VTnrimUwphfxyDQLVarHdB9qh8dgaqjgcP",
              sender_address:
                "a0dc65ffca799873cbea0ac274015b9526505daaaed385155425f7337704883e",
              value: 1,
            },
          ],
        },
      ],
      1: "-100",
      2: "100",
    };
    const newState = blockchainReducer(undefined, {
      type: types.GET_CHAIN,
      response: { data: data },
    });
    expect(newState.chainw).toEqual(data);
  });
});
