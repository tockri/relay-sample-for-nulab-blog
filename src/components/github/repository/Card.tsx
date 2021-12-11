import Link from 'next/link'
import React from 'react'
import { graphql, useFragment } from 'react-relay'
import { CardFragment$key } from './__generated__/CardFragment.graphql'

export type CardProps = {
  node: CardFragment$key
}

export const Card: React.FC<CardProps> = (props) => {
  const { node } = props
  const repo = useFragment<CardFragment$key>(
    graphql`
      fragment CardFragment on Repository {
        id
        name
      }
    `,
    node
  )
  return (
    <Link passHref={true} href={`/repo/${repo.id}`}>
      <a>{repo.name}</a>
    </Link>
  )
}
