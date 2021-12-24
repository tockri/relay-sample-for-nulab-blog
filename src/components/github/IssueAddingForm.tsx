import React, { useState } from 'react'
import { LabelSelector } from './label/Selector'
import { RepositorySelector } from './repository/Selector'

export const IssueAddingForm: React.FC = () => {
  type FormData = {
    repositoryName: string | null
    labelId: string | null
  }
  const [formData, setFormData] = useState<FormData>({
    repositoryName: null,
    labelId: null,
  })

  return (
    <form>
      <RepositorySelector
        onChange={(repositoryId, repositoryName) => {
          setFormData((curr) => ({
            ...curr,
            repositoryName: repositoryName,
          }))
        }}
      />
      <LabelSelector
        repositoryName={formData.repositoryName}
        onChange={(id, label) => {
          setFormData((curr) => ({
            ...curr,
            labelId: id,
          }))
        }}
      />
    </form>
  )
}
