import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {Button} from 'antd'
import Header from '../components/Header'

const Home = () => (
  <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
  </div>
)

export default Home
