import React from "react";
import AddNetworkKeplr from "./AddNetworkKeplr";

export default function MochaNetwork() {
  const MOCHA_PARAMS = {
    chainId: "mocha-4",
    chainName: "Mocha Testnet",
    rpc: "https://rpc-mocha.pops.one/",
    rest: "https://api-mocha.pops.one/",
  };

  return <AddNetworkKeplr params={MOCHA_PARAMS} />;
}
