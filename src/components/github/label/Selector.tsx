import { Autocomplete, TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import React from 'react'
import { PreloadedQuery } from 'react-relay'
import { Loading } from '../../common/Loading'
import { useLabelListPreload, useLabels } from './Label'
import { LabelListQuery } from './__generated__/LabelListQuery.graphql'

export type Label = {
  id: string
  label: string
}

export type LabelSelectorProps = {
  repositoryName: string | null
  onChange: (value: Label | null) => void
  value: Label | null
}

export const LabelSelector: React.FC<LabelSelectorProps> = (props) => {
  const { repositoryName } = props
  const preloaded = useLabelListPreload(repositoryName)
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
  label: 'Label',
  fullWidth: true,
  variant: 'outlined',
}

const EmptyFrame: React.FC = () => {
  return <TextField disabled={true} {...textFieldProps} />
}

type InnerProps = {
  preloaded: PreloadedQuery<LabelListQuery>
} & LabelSelectorProps

const Inner: React.FC<InnerProps> = (props) => {
  const { preloaded, onChange, value } = props
  const labels = useLabels(preloaded)
  return (
    <Autocomplete
      size="small"
      value={value}
      renderInput={(params) => <TextField {...textFieldProps} {...params} />}
      options={labels.map((l) => ({ id: l.id, label: l.name }))}
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
