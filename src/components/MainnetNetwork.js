import React from "react";
import AddNetworkKeplr from "./AddNetworkKeplr";

export default function MainnetNetwork() {
  const MAINNET_PARAMS = {
    chainId: "celestia",
    chainName: "Celestia Mainnet",
    rpc: "https://rpc.lunaroasis.net/",
    rest: "https://api.lunaroasis.net/",
  };

  return <AddNetworkKeplr params={MAINNET_PARAMS} />;
}
