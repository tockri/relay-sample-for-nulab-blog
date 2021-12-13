import React from 'react'
import { RepositorySelector } from './repository/Selector'

export const IssueAddingForm: React.FC = () => {
  return (
    <form>
      <RepositorySelector
        onChange={(id, label) => console.log({ id, label })}
      />
    </form>
  )
}
