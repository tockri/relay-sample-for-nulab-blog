import { Autocomplete, TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import React from 'react'
import { PreloadedQuery } from 'react-relay'
import { Loading } from '../../common/Loading'
import { useUserList, useUserListPreload } from './User'
import { UserListQuery } from './__generated__/UserListQuery.graphql'

export type Assignee = {
  id: string
  label: string
}

export type AssigneeSelectorProps = {
  repositoryName: string | null
  onChange: (value: Assignee | null) => void
  value: Assignee | null
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

const textFieldProps: TextFieldProps = {
  size: 'small',
  label: 'Assignee',
  fullWidth: true,
  variant: 'outlined',
}

const EmptyFrame: React.FC = () => {
  return <TextField disabled={true} {...textFieldProps} />
}

type InnerProps = {
  preloaded: PreloadedQuery<UserListQuery>
} & AssigneeSelectorProps

const Inner: React.FC<InnerProps> = (props) => {
  const { preloaded, onChange, value } = props
  const labels = useUserList(preloaded)
  return (
    <Autocomplete
      size="small"
      value={value}
      renderInput={(params) => <TextField {...textFieldProps} {...params} />}
      options={labels.map((l) => ({
        id: l.id,
        label: `${l.login} (${l.name || ''})`,
      }))}
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
