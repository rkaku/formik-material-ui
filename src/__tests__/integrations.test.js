import moxios from "moxios";
import storeFactory from "test/storeFactory";
import * as Actions from "actionCreators";
import heroku from "api/heroku";

describe("Async Action Creators", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe("getWallet Action Creator", () => {
    test("Store is updated correctly", () => {
      const expectedState = [
        {
          address: "2h3J1eRHhsbqb2wdLGkvwnYmyELhTyzzCo1",
          priv_key:
            "Lzhp9LopCJLfMu5rArrEJePScdqQ5FgzcSUtL2TfDi2HAjDAADEr3Dshq7mEczgWejuz3pwS4Jdj31EiYuu2qd9qz3wGVCM3pSyLMYLnHPfWn9ikKgNfUeGzYSRjtD9ZyhyURMVhvLrr3JJ4VypzPsrixkEhanHZ6",
          pub_key:
            "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCyh22wi1qBunhbLn5ZeJdi9CiNz9ZMizqSC16bBjGr8HJd8kCEymz7VSityf5Ut5VV6Du63B9m3e7Z74f6uV2Uzzg",
        },
        {
          address: "hg1SWeuCcTWjw6VwH2fxerVCWXWbBE4cib",
          priv_key:
            "Lzhp9LopCJU3iKPw6C1L9hQrvSkoQbMHk7c13chfVCRaeoSUrArHZ9RqUNEZYtQ74BSpq1x6x9T97UShvoRtc9SKuJDPYmEvw3CwDmkWAVC31NUrXhaTpw3bbc3JoA6W2Z1sUwoEKXZy43VvZAiaKrcezLAAK2p5p",
          pub_key:
            "PZ8Tyr4Nx8MHsRAGMpZmZ6TWY63dXWSCww2c5M8Vr4qe979enUqPKr2bZWWZ2fJwKXYogG9WyET7eABhhdck2F99TwD5Hg2ccB6pc5pjN6ceeqkQmtg4xQdG",
        },
      ];
      moxios.stubRequest(heroku.WALLET, {
        status: 200,
        response: expectedState,
      });
      const store = storeFactory();
      moxios.wait(done => {
        return store.dispatch(Actions.getChain()).then(() => {
          const newState = store.getState();
          expect(newState.chain).toEqual(expectedState);
          done();
        });
      });

      //   const store = storeFactory();
      //   moxios.wait(() => {
      //     const request = moxios.requests.mostRecent();
      //     request.respondWith({
      //       status: 200,
      //       response: { data: expectedState },
      //     });
      //   });
      //   return store.dispatch(Actions.getWallet()).then(() => {
      //     const newState = store.getState();
      //     expect(newState.wallet).toEqual(expectedState);
      //   });
    });
  });

  describe("getPool Action Creator", () => {
    test("Store is updated correctly", () => {
      const expectedState = [
        {
          recipient_address: "2hTpb6dPuGehb3d73y6LqRkdguBLe1aRjEf",
          sender_address: "2LEgdLLaUnoS5yqmPPxXpq7BCPtmMPdw1jV",
          value: 100,
        },
      ];
      moxios.stubRequest(heroku.POOL, {
        status: 200,
        response: expectedState,
      });
      const store = storeFactory();
      moxios.wait(done => {
        return store.dispatch(Actions.getPool()).then(() => {
          const newState = store.getState();
          expect(newState.chain).toEqual(expectedState);
          done();
        });
      });
    });
  });

  describe("getChain Action Creator", () => {
    test("Store is updated correctly", () => {
      const expectedState = [
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
      ];
      moxios.stubRequest(heroku.CHAIN, {
        status: 200,
        response: expectedState,
      });
      const store = storeFactory();
      moxios.wait(done => {
        return store.dispatch(Actions.getChain()).then(() => {
          const newState = store.getState();
          expect(newState.chain).toEqual(expectedState);
          done();
        });
      });
    });
  });
});
