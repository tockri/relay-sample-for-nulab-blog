import { useEffect } from 'react'
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { UserListQuery } from './__generated__/UserListQuery.graphql'

const userListQuery = graphql`
  query UserListQuery($repoName: String!) {
    viewer {
      repository(name: $repoName) {
        assignableUsers(first: 100) {
          edges {
            node {
              id
              name
              avatarUrl
            }
          }
        }
      }
    }
  }
`

type User = {
  id: string
  name: string
  avatarUrl: string
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
): ReadonlyArray<User> => {
  const result = usePreloadedQuery(userListQuery, preload)
  return (
    result?.viewer?.repository?.assignableUsers?.edges?.map((edge) => ({
      id: (edge?.node?.id as string) || '',
      name: (edge?.node?.name as string) || '',
      avatarUrl: (edge?.node?.avatarUrl as string) || '',
    })) ?? []
  )
}
