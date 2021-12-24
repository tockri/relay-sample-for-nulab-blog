import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { PreloadedQuery } from 'react-relay'
import { Loading } from '../../common/Loading'
import { useRepositoryItems, useRepositoryListLoader } from './Repo'
import { Repo_ListQuery } from './__generated__/Repo_ListQuery.graphql'

export type RepositorySelectorProps = {
  onChange: (repositoryId: string, repositoryName: string) => void
}

export const RepositorySelector: React.FC<RepositorySelectorProps> = (
  props
) => {
  const preloaded = useRepositoryListLoader()
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
  const { preloaded, onChange } = props
  const { items, startLoadMore } = useRepositoryItems(preloaded)
  return (
    <Autocomplete
      sx={{ width: 300 }}
      size="small"
      renderInput={(params) => <TextField {...params} label="Repository" />}
      options={items}
      onOpen={startLoadMore}
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
