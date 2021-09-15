import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'

const CookieStandAdmin = () => {
  const [stores, Stores] = useState('0')
  return (
    <div>

      <Head>
        <title> Cookie Stand Admin </title>
      </Head>

      <Header />

      <Main Stores = {Stores} />

      <Footer stores = {stores} />

    </div>
  )
}

export default CookieStandAdmin;