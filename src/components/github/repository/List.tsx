import React, { useEffect } from 'react'
import {
  PreloadedQuery,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { Card } from './Card'
import { repoListFragment, repoListQuery } from './Repo'
import { Repo_ListFragment$key } from './__generated__/Repo_ListFragment.graphql'
import { Repo_ListQuery } from './__generated__/Repo_ListQuery.graphql'

type InnerProps = {
  preloaded: PreloadedQuery<Repo_ListQuery>
}

const ListInner: React.FC<InnerProps> = (props) => {
  const { preloaded } = props
  const result = usePreloadedQuery<Repo_ListQuery>(repoListQuery, preloaded)
  const { data, loadNext } = usePaginationFragment<
    Repo_ListQuery,
    Repo_ListFragment$key
  >(repoListFragment, result.viewer)
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
  const [preloaded, load] = useQueryLoader<Repo_ListQuery>(repoListQuery)
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
