import React, { useEffect } from 'react'
import {
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { repoListFragment, repoListQuery } from './Repo'
import { Repo_ListFragment$key } from './__generated__/Repo_ListFragment.graphql'
import { Repo_ListQuery } from './__generated__/Repo_ListQuery.graphql'

type InnerProps = {
  preloaded: PreloadedQuery<Repo_ListQuery>
}

const ListInner: React.FC<InnerProps> = ({ preloaded }) => {
  const result = usePreloadedQuery<Repo_ListQuery>(repoListQuery, preloaded)
  const list = useFragment<Repo_ListFragment$key>(
    repoListFragment,
    result.viewer.repositories
  )
  return (
    <div>
      {list.nodes &&
        list.nodes.map((n, index) =>
          n ? (
            <div key={index}>
              {n.id} / {n.name}
            </div>
          ) : null
        )}
    </div>
  )
}

export const RepositoryList: React.FC = () => {
  const [preloaded, load] = useQueryLoader<Repo_ListQuery>(repoListQuery)
  useEffect(() => {
    load({
      first: 5,
    })
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
