import '../styles/globals.css'
import '../styles/styles.css'
import Nav from '../component/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='dark-ink-higher siteWrap'>
          <Nav/>
          <div className='pageWraper'>
              <Component {...pageProps} />       
          </div>
          <div className='pagePading t-metadata-sm footer'>Dukyeon Ha</div>
      </div>
      <div className='bg'></div>
    </>
  )
}

export default MyApp
