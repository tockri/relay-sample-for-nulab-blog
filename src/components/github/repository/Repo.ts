// noinspection GraphQLUnresolvedReference,GraphQLSchemaValidation

import { useEffect, useState } from 'react'
import {
  graphql,
  PreloadedQuery,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { RepoListFragment$key } from './__generated__/RepoListFragment.graphql'
import { RepoListQuery } from './__generated__/RepoListQuery.graphql'

const repoListFragment = graphql`
  fragment RepoListFragment on User
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
  query RepoListQuery {
    viewer {
      ...RepoListFragment
    }
  }
`

export const useRepositoryListPreload =
  (): PreloadedQuery<RepoListQuery> | null => {
    const [preloaded, loadRepository] =
      useQueryLoader<RepoListQuery>(repoListQuery)
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
  preloaded: PreloadedQuery<RepoListQuery>
): RepositoryItemsType => {
  const result = usePreloadedQuery<RepoListQuery>(repoListQuery, preloaded)
  const { data, loadNext } = usePaginationFragment<
    RepoListQuery,
    RepoListFragment$key
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
