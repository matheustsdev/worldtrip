import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
