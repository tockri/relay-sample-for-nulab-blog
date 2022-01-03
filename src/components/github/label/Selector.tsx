import { Autocomplete, SxProps, TextField } from '@mui/material'
import React from 'react'
import { PreloadedQuery } from 'react-relay'
import { Loading } from '../../common/Loading'
import { useLabelListLoader, useLabels } from './Label'
import { LabelListQuery } from './__generated__/LabelListQuery.graphql'

export type LabelSelectorProps = {
  repositoryName: string | null
  onChange: (id: string, label: string) => void
}

export const LabelSelector: React.FC<LabelSelectorProps> = (props) => {
  const { repositoryName } = props
  const preloaded = useLabelListLoader(repositoryName)
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
      label="Labels"
      sx={textFieldProps}
    />
  )
}

type InnerProps = {
  preloaded: PreloadedQuery<LabelListQuery>
} & LabelSelectorProps

const Inner: React.FC<InnerProps> = (props) => {
  const { preloaded, onChange } = props
  const labels = useLabels(preloaded)
  return (
    <Autocomplete
      sx={{ width: 300 }}
      size="small"
      renderInput={(params) => (
        <TextField {...params} label="Labels" sx={textFieldProps} />
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
