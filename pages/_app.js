import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from 'react-bootstrap/SSRProvider'
import "../styles/globals.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <SSRProvider>
     <Component {...pageProps} />
     </SSRProvider>
  )
}
