import '@/styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router';
const progress = new  ProgressBar({
  size:4,
  color: "#FE595E",
  delay: 100,
  className: "z-50"
})

// when the page changes or router is called, call the progressBar
Router.events.on('routeChangeStart', progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// loading indicator, instead of displaying nothing display a loading symbol.