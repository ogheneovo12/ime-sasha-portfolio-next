import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: "#77CEFF",
    secondary: "#13151F",
    bgdark: "#12141D",
    bgprimary: "#177AB3",
    sectext: "#4E5A6B",
  },
  breakpoints: {
    '2sm':"311px",
    fld: "960px",
  },
  fonts: {
    body: "Work Sans, Roboto, sans-serif",
    heading: "Work Sans, Roboto, serif",
    mono: "Work Sans, Roboto",
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Work Sans, Roboto",
        fontWeight: "300",
        fontSize: "14px",
        color: "white",
      },
      h1: {
        fontWeight: "600",
        fontSize: "28px",
        lineHeight: "41px",
        color: "primary",
      },
      h2: {
        fontWeight: "500",
        fontSize: "18.5816px",
        color: "white",
        lineHeight: "22px",
        letterSpacing: "0.1em",
      },
      h3: {
        fontWeight: "300",
        fontSize: "18px",
        lineHeight: "21px",
        letterSpacing: "0.1em",
      },
      [`@media screen and (min-width: ${props.theme.breakpoints.md})`]: {
        body: {
          fontSize: "16px",
        },
        h1: {
          fontSize: "53.0986px",
          lineHeight: "67px",
        },
        h2: {
          fontSize: "27.7746px",
          lineHeight: "33px",
        },
        h3: {
          fontSize: "21.2394px",
          lineHeight: "25px",
        },
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "20px",
        minHeight: "40px",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: "15px",
        color: "#13151F",
      },
      sizes: {
        md: {
          fontSize: "12px",
        },
      },
      variants: {
        solid: {
          background: "primary",
        },
        ghost: {
          background: "transparent",
          border: "0.837838px solid rgba(255, 255, 255, 0.5)",
          color: "#FFF",
        },
      },
      defaultProps: {
        size: "md",
        variants: "solid",
      },
    },
  },
});
