import React from "react";
import styles from "./Keplr.module.css";

export default function AddNetworkKeplr({ params }) {
  async function add() {
    if (!window.keplr) {
      alert("Please install Keplr extension");
      return;
    }

    if (window.keplr.experimentalSuggestChain) {
      try {
        await window.keplr.experimentalSuggestChain({
          chainId: params.chainId,
          chainName: params.chainName,
          rpc: params.rpc,
          rest: params.rest,
          bip44: { coinType: 118 },
          bech32Config: {
            bech32PrefixAccAddr: "celestia",
            bech32PrefixAccPub: "celestiapub",
            bech32PrefixValAddr: "celestiavaloper",
            bech32PrefixValPub: "celestiavaloperpub",
            bech32PrefixConsAddr: "celestiavalcons",
            bech32PrefixConsPub: "celestiavalconspub",
          },
          currencies: [
            {
              coinDenom: "TIA",
              coinMinimalDenom: "utia",
              coinDecimals: 6,
              coinGeckoId: "celestia",
            },
          ],
          feeCurrencies: [
            {
              coinDenom: "TIA",
              coinMinimalDenom: "utia",
              coinDecimals: 6,
              coinGeckoId: "celestia",
              gasPriceStep: { low: 0.01, average: 0.02, high: 0.1 },
            },
          ],
          stakeCurrency: {
            coinDenom: "TIA",
            coinMinimalDenom: "utia",
            coinDecimals: 6,
            coinGeckoId: "celestia",
          },
        });
        alert(`Successfully added ${params.chainName}`);
      } catch (error) {
        alert("Failed to suggest the chain: " + error.message);
      }
    }

    try {
      await window.keplr.enable(params.chainId);
    } catch (error) {
      alert("Failed to enable the chain: " + error.message);
    }
  }

  return (
    <div className={styles.center}>
      <button className={styles.keplrButton} onClick={add}>
        Add/Switch to {params.chainName}
      </button>
    </div>
  );
}
