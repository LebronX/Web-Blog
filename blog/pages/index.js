import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {Button} from 'antd'


const Home = () => (
  <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Button>Button</Button>
      </div>
  </div>
)

export default Home
