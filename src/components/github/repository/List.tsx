// noinspection GraphQLUnresolvedReference,GraphQLSchemaValidation

import React, { useEffect } from 'react'
import {
  graphql,
  PreloadedQuery,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { Card } from './Card'
import { ListFragment$key } from './__generated__/ListFragment.graphql'
import { ListQuery } from './__generated__/ListQuery.graphql'

type InnerProps = {
  preloaded: PreloadedQuery<ListQuery>
}

const listQuery = graphql`
  query ListQuery {
    viewer {
      ...ListFragment
    }
  }
`

const ListInner: React.FC<InnerProps> = ({ preloaded }) => {
  const result = usePreloadedQuery<ListQuery>(listQuery, preloaded)
  const { data, loadNext, refetch } = usePaginationFragment<
    ListQuery,
    ListFragment$key
  >(
    graphql`
      fragment ListFragment on User
      @argumentDefinitions(
        f: { type: "Int", defaultValue: 5 }
        a: { type: "String" }
      )
      @refetchable(queryName: "ListPaginationQuery") {
        repositories(
          first: $f
          after: $a
          orderBy: { field: CREATED_AT, direction: DESC }
        ) @connection(key: "ListPaginationQuery_repositories") {
          edges {
            node {
              ...CardFragment
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `,
    result.viewer
  )
  return (
    <div>
      {(data.repositories?.edges ?? []).map((edge, index) =>
        edge && edge.node ? (
          <div key={index}>
            <React.Suspense fallback={'loading repo...'}>
              <Card node={edge.node} />
            </React.Suspense>
          </div>
        ) : null
      )}
      {data.repositories.pageInfo.hasNextPage ? (
        <button type="button" onClick={() => loadNext(10)}>
          load next
        </button>
      ) : null}
    </div>
  )
}

export const RepositoryList: React.FC = () => {
  const [preloaded, load] = useQueryLoader<ListQuery>(listQuery)
  useEffect(() => {
    load({})
  }, [])

  return (
    <div>
      Repositories
      {preloaded != null ? (
        <React.Suspense fallback="...loading...">
          <ListInner preloaded={preloaded} />
        </React.Suspense>
      ) : null}
    </div>
  )
}
