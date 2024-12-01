import React from "react";
import AddNetworkKeplr from "./AddNetworkKeplr";

export default function ArabicaNetwork() {
  const ARABICA_PARAMS = {
    chainId: "arabica-11",
    chainName: "Arabica Devnet",
    rpc: "https://rpc.celestia-arabica-11.com/",
    rest: "https://api.celestia-arabica-11.com/",
  };

  return <AddNetworkKeplr params={ARABICA_PARAMS} />;
}
