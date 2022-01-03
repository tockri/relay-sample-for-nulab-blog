import { Autocomplete, SxProps, TextField } from '@mui/material'
import React from 'react'
import { PreloadedQuery } from 'react-relay'
import { Loading } from '../../common/Loading'
import { useUserList, useUserListPreload } from './User'
import { UserListQuery } from './__generated__/UserListQuery.graphql'

export type AssigneeSelectorProps = {
  repositoryName: string | null
  onChange: (id: string, label: string) => void
}

export const AssigneeSelector: React.FC<AssigneeSelectorProps> = (props) => {
  const { repositoryName } = props
  const preloaded = useUserListPreload(repositoryName)
  return preloaded ? (
    <React.Suspense fallback={<Loading />}>
      <Inner preloaded={preloaded} {...props} />
    </React.Suspense>
  ) : (
    <EmptyFrame />
  )
}

const textFieldProps: SxProps = {
  width: 300,
}

const EmptyFrame: React.FC = () => {
  return (
    <TextField
      disabled={true}
      size="small"
      label="Assignee"
      sx={textFieldProps}
    />
  )
}

type InnerProps = {
  preloaded: PreloadedQuery<UserListQuery>
} & AssigneeSelectorProps

const Inner: React.FC<InnerProps> = (props) => {
  const { preloaded, onChange } = props
  const labels = useUserList(preloaded)
  return (
    <Autocomplete
      sx={{ width: 300 }}
      size="small"
      renderInput={(params) => (
        <TextField {...params} label="Assignee" sx={textFieldProps} />
      )}
      options={labels.map((l) => ({ id: l.id, label: l.name }))}
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
