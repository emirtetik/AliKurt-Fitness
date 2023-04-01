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
        <link  rel="icon" href="/favicon.ico" />
      
        <title>{title}</title>
    </Head>
    </div>
  )
}

export default Meta