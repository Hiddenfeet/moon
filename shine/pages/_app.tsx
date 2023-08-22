import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { Cronos } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import Head from "next/head";
import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets';

const MAINNET_RPC_URL = 'https://node.croswap.com/rpc';
const injected = injectedModule();
const wallets = [injected]


const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '0x25',
      token: 'CRO',
      label: 'Cronos Mainnet',
      rpcUrl: MAINNET_RPC_URL
    }
  ],
  appMetadata: {
    name: 'Liquor Token Cronos',
    icon: 'https://www.liquor-swap.io/images/LiquorToken.png',
    description: 'we are the $Liquor'
  }
});


const activeChain = "Cronos";
const sdk = new ThirdwebSDK(Cronos, {
  clientId: "beb50f196f8946470dc38480e7c41dc2",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.TW_CLIENT_ID}
      activeChain={Cronos}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
