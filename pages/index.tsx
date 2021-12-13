import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { IssueAddingForm } from '../src/components/github/IssueAddingForm'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Relay sample</title>
      </Head>
      <h1>Add Issue</h1>
      <IssueAddingForm />
    </>
  )
}

export default Home
