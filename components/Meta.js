import React from 'react'
import Head from 'next/head'
const Meta = ({description,title,keywords}) => {
  return (
    <div>
                <Head>
     <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords'  content={keywords} />
        <meta name='author' content='Emir Tetik' />
        {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/> */}
        {/* <link  rel="icon" href="/favicon.ico" /> */}
         {/* <link rel="icon" href="/favicon.ico" type="image/x-icon"/> */}
         <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>{title}</title>
    </Head>
    </div>
  )
}

export default Meta