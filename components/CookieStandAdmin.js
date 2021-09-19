import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../context/auth'

const CookieStandAdmin = () => {
  const [stores, Stores] = useState('0')
  const { user, login, logout } = useAuth();

  return (
    <div>

      <Head>
        <title> Cookie Stand Admin </title>
      </Head>

      <Header />

      {user ?
        <Main Stores={Stores} />
        :
        <LoginForm login={login} />
      }

      <Footer stores={stores} />

    </div>
  )
}

export default CookieStandAdmin;