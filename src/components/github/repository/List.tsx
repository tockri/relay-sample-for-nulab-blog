import Link from 'next/link'
import React, { useEffect } from 'react'
import {
  PreloadedQuery,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { repoListFragment, repoListQuery } from './Repo'
import { Repo_ListQuery } from './__generated__/Repo_ListQuery.graphql'

type InnerProps = {
  preloaded: PreloadedQuery<Repo_ListQuery>
}

const ListInner: React.FC<InnerProps> = ({ preloaded }) => {
  const result = usePreloadedQuery<Repo_ListQuery>(repoListQuery, preloaded)
  const { data, loadNext } = usePaginationFragment<Repo_ListQuery, _>(
    repoListFragment,
    result.viewer
  )
  return (
    <div>
      {data.edges &&
        data.nodes.map((n, index) =>
          n ? (
            <div key={index}>
              <Link passHref={true} href={`/repo/${n.id}`}>
                <a>{n.name}</a>
              </Link>
            </div>
          ) : null
        )}
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
