// noinspection GraphQLUnresolvedReference,GraphQLSchemaValidation

import { useEffect, useState } from 'react'
import {
  graphql,
  PreloadedQuery,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { Repo_ListFragment$key } from './__generated__/Repo_ListFragment.graphql'
import { Repo_ListQuery } from './__generated__/Repo_ListQuery.graphql'

const repoListFragment = graphql`
  fragment Repo_ListFragment on User
  @argumentDefinitions(
    f: { type: "Int", defaultValue: 10 }
    a: { type: "String" }
  )
  @refetchable(queryName: "Repo_ListPaginationQuery") {
    repositories(
      first: $f
      after: $a
      orderBy: { field: CREATED_AT, direction: DESC }
    ) @connection(key: "Repo_ListPaginationQuery_repositories") {
      edges {
        node {
          id
          name
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

const repoListQuery = graphql`
  query Repo_ListQuery {
    viewer {
      ...Repo_ListFragment
    }
  }
`

export const useRepositoryListLoader =
  (): PreloadedQuery<Repo_ListQuery> | null => {
    const [preloaded, loadRepository] =
      useQueryLoader<Repo_ListQuery>(repoListQuery)
    useEffect(() => {
      loadRepository({})
    }, [])
    return preloaded || null
  }

export type RepositoryItemsType = {
  items: ReadonlyArray<{ readonly id: string; readonly label: string }>
  startLoadMore: () => void
}

export const useRepositoryItems = (
  preloaded: PreloadedQuery<Repo_ListQuery>
): RepositoryItemsType => {
  const result = usePreloadedQuery<Repo_ListQuery>(repoListQuery, preloaded)
  const { data, loadNext } = usePaginationFragment<
    Repo_ListQuery,
    Repo_ListFragment$key
  >(repoListFragment, result.viewer)
  const pageInfo = data.repositories.pageInfo
  const [loadMore, setLoadMore] = useState(false)
  useEffect(() => {
    if (loadMore) {
      if (pageInfo.hasNextPage) {
        loadNext(10)
      } else {
        setLoadMore(false)
      }
    }
  }, [loadMore, pageInfo.endCursor])

  const items =
    data.repositories?.edges?.map((edge) => ({
      id: edge?.node?.id || '',
      label: edge?.node?.name || '',
    })) ?? []

  const startLoadMore = () => {
    if (pageInfo.hasNextPage) {
      setLoadMore(true)
    }
  }
  return { items, startLoadMore }
}
