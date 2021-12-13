import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  PreloadedQuery,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { repoListFragment, repoListQuery } from './Repo'
import { Repo_ListFragment$key } from './__generated__/Repo_ListFragment.graphql'
import { Repo_ListQuery } from './__generated__/Repo_ListQuery.graphql'

export type RepositorySelectorProps = {
  onChange: (id: string, label: string) => void
}

type InnerProps = {
  preloaded: PreloadedQuery<Repo_ListQuery>
} & RepositorySelectorProps

const Inner: React.FC<InnerProps> = (props) => {
  const { preloaded, onChange } = props
  const result = usePreloadedQuery<Repo_ListQuery>(repoListQuery, preloaded)
  const { data, loadNext } = usePaginationFragment<
    Repo_ListQuery,
    Repo_ListFragment$key
  >(repoListFragment, result.viewer)
  const [loadMore, setLoadMore] = useState(false)
  useEffect(() => {
    if (loadMore) {
      if (data?.repositories?.pageInfo.hasNextPage) {
        loadNext(20)
      } else {
        setLoadMore(false)
      }
    }
  }, [loadMore, data?.repositories?.pageInfo.endCursor])

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
      onOpen={() => {
        if (data?.repositories?.pageInfo.hasNextPage) {
          setLoadMore(true)
        }
      }}
      onChange={(ev, value) => {
        if (value && value.id) {
          onChange(value.id, value.label || '')
        } else {
          onChange('', '')
        }
      }}
    />
  )
}

export const RepositorySelector: React.FC<RepositorySelectorProps> = (
  props
) => {
  const [preloaded, load] = useQueryLoader<Repo_ListQuery>(repoListQuery)
  useEffect(() => {
    load({})
  }, [])
  return preloaded != null ? (
    <React.Suspense fallback="...loading...">
      <Inner {...props} preloaded={preloaded} />
    </React.Suspense>
  ) : null
}
