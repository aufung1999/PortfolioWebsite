import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme, useSSR } from "@nextui-org/react";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  );
}

export default MyApp;
