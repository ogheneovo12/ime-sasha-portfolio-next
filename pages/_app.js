import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "components/Fonts";
import theme from "theme"
import { appWithTranslation } from 'next-i18next';


function MyApp({ Component, pageProps }) {
 
  return (
    <ChakraProvider theme={theme}>
      
       <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}


export default appWithTranslation(MyApp);
