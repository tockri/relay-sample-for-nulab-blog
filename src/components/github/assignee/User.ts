import { useEffect } from 'react'
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { UserListFragment$key } from './__generated__/UserListFragment.graphql'
import { UserListQuery } from './__generated__/UserListQuery.graphql'

const userListFragment = graphql`
  fragment UserListFragment on UserConnection {
    nodes {
      id
      name
      login
      avatarUrl
    }
  }
`

const userListQuery = graphql`
  query UserListQuery($repoName: String!) {
    viewer {
      repository(name: $repoName) {
        assignableUsers(first: 100) {
          ...UserListFragment
        }
      }
    }
  }
`

export type UserListItem = {
  id: string
  name: string | null
  avatarUrl: string | null
  login: string
}

export const useUserListPreload = (
  repoName: string | null
): PreloadedQuery<UserListQuery> | null => {
  const [preload, load] = useQueryLoader<UserListQuery>(userListQuery)
  useEffect(() => {
    if (repoName) {
      load({ repoName })
    }
  }, [load, repoName])
  return (repoName && preload) || null
}

export const useUserList = (
  preload: PreloadedQuery<UserListQuery>
): ReadonlyArray<UserListItem> => {
  const result = usePreloadedQuery(userListQuery, preload)
  const users = useFragment<UserListFragment$key>(
    userListFragment,
    result.viewer.repository?.assignableUsers ?? null
  )
  return (
    users?.nodes?.flatMap((node) =>
      node
        ? [
            {
              id: node.id,
              name: node.name,
              avatarUrl: (node.avatarUrl as string) || null,
              login: node.login,
            },
          ]
        : []
    ) ?? []
  )
}
