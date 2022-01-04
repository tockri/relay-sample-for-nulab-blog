import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { PreloadedQuery } from 'react-relay'
import { Loading } from '../../common/Loading'
import { useRepositoryItems, useRepositoryListPreload } from './Repo'
import { Repo_ListQuery } from './__generated__/Repo_ListQuery.graphql'

export type Repository = {
  id: string
  label: string
}

export type RepositorySelectorProps = {
  onChange: (value: Repository | null) => void
  value: Repository | null
}

export const RepositorySelector: React.FC<RepositorySelectorProps> = (
  props
) => {
  const preloaded = useRepositoryListPreload()
  return preloaded ? (
    <React.Suspense fallback={<Loading />}>
      <Inner {...props} preloaded={preloaded} />
    </React.Suspense>
  ) : null
}

type InnerProps = {
  preloaded: PreloadedQuery<Repo_ListQuery>
} & RepositorySelectorProps

const Inner: React.FC<InnerProps> = (props) => {
  const { preloaded, onChange, value } = props
  const { items, startLoadMore } = useRepositoryItems(preloaded)
  return (
    <Autocomplete
      size="small"
      value={value}
      renderInput={(params) => (
        <TextField {...params} label="Repository" fullWidth={true} />
      )}
      options={items}
      onOpen={startLoadMore}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(ev, value) => {
        if (value && value.id) {
          onChange(value)
        } else {
          onChange(null)
        }
      }}
    />
  )
}
