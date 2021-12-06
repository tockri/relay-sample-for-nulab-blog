import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Home: NextPage = () => {
  const router = useRouter()
  const repoId = router.query.id as string
  return (
    <>
      <Head>
        <title>IssueList</title>
      </Head>
      <h1>Issues</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
    </>
  )
}

export default Home
