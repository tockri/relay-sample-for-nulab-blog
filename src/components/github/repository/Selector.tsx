import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import {
  PreloadedQuery,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { repoListFragment, repoListQuery } from './Repo'
import { Repo_ListFragment$key } from './__generated__/Repo_ListFragment.graphql'
import { Repo_ListQuery } from './__generated__/Repo_ListQuery.graphql'

type InnerProps = {
  preloaded: PreloadedQuery<Repo_ListQuery>
}

const Inner: React.FC<InnerProps> = (props) => {
  const { preloaded } = props
  const result = usePreloadedQuery<Repo_ListQuery>(repoListQuery, preloaded)
  const { data, loadNext } = usePaginationFragment<
    Repo_ListQuery,
    Repo_ListFragment$key
  >(repoListFragment, result.viewer)

  const items =
    data.repositories?.edges?.map((edge) => ({
      id: edge?.node?.id,
      label: edge?.node?.name,
    })) ?? []
  return (
    <Autocomplete
      sx={{ width: 300 }}
      size="small"
      renderInput={(params) => <TextField {...params} label="Repository" />}
      options={items}
      onSelect={(value) => console.log({ value })}
      onScroll={(ev) => console.log(ev)}
    />
  )
}

export const RepositorySelector: React.FC = () => {
  const [preloaded, load] = useQueryLoader<Repo_ListQuery>(repoListQuery)
  useEffect(() => {
    load({})
  }, [])
  return preloaded != null ? (
    <React.Suspense fallback="...loading...">
      <Inner preloaded={preloaded} />
    </React.Suspense>
  ) : null
}
