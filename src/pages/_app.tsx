import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { AppProps } from "next/app";

import "/styles/global.css";
import { ContinentsProvider } from "../hooks/useContinents";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsProvider>
        <Component {...pageProps} />
      </ContinentsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
