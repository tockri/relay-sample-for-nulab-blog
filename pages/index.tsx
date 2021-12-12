import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { RepositorySelector } from '../src/components/github/repository/Selector'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Relay sample</title>
      </Head>
      <h1>Add Issue</h1>
      <RepositorySelector />
    </>
  )
}

export default Home
