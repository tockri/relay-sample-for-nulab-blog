import { Autocomplete, TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import React from 'react'
import { PreloadedQuery } from 'react-relay'
import { Loading } from '../../common/Loading'
import { useMilestoneList, useMilestoneListPreload } from './Milestone'
import { MilestoneListQuery } from './__generated__/MilestoneListQuery.graphql'

export type Milestone = {
  id: string
  label: string
}

export type MilestoneSelectorProps = {
  repositoryName: string | null
  onChange: (value: Milestone | null) => void
  value: Milestone | null
}

export const MilestoneSelector: React.FC<MilestoneSelectorProps> = (props) => {
  const { repositoryName } = props
  const preloaded = useMilestoneListPreload(repositoryName)
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
  label: 'Milestone',
  fullWidth: true,
  variant: 'outlined',
}

const EmptyFrame: React.FC = () => {
  return <TextField disabled={true} {...textFieldProps} />
}

type InnerProps = {
  preloaded: PreloadedQuery<MilestoneListQuery>
} & MilestoneSelectorProps

const Inner: React.FC<InnerProps> = (props) => {
  const { preloaded, onChange, value } = props
  const milestones = useMilestoneList(preloaded)
  return (
    <Autocomplete
      size="small"
      value={value}
      renderInput={(params) => <TextField {...textFieldProps} {...params} />}
      options={milestones.map((l) => ({ id: l.id, label: l.title }))}
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
