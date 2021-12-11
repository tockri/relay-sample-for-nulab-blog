import Link from 'next/link'
import React from 'react'
import { useFragment } from 'react-relay'
import { repoCardFragment } from './Repo'
import { Repo_CardFragment$key } from './__generated__/Repo_CardFragment.graphql'

export type CardProps = {
  node: Repo_CardFragment$key
}

export const Card: React.FC<CardProps> = (props) => {
  const { node } = props
  const repo = useFragment<Repo_CardFragment$key>(repoCardFragment, node)
  return (
    <Link passHref={true} href={`/repo/${repo.id}`}>
      <a>{repo.name}</a>
    </Link>
  )
}
