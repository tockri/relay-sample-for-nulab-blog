import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { RepositoryList } from '../src/components/github/repository/List'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Relay sample</title>
      </Head>
      <h1>Repositories</h1>
      <RepositoryList />
    </>
  )
}

export default Home
