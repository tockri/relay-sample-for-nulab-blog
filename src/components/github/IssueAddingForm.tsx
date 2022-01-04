import { Button, Grid, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Assignee, AssigneeSelector } from './assignee/Selector'
import { Label, LabelSelector } from './label/Selector'
import { Milestone, MilestoneSelector } from './milestone/Selector'
import { Repository, RepositorySelector } from './repository/Selector'

type FormData = {
  repository: Repository | null
  label: Label | null
  assignee: Assignee | null
  milestone: Milestone | null
  title: string | null
  description: string | null
}
const emptyFormData: FormData = {
  repository: null,
  label: null,
  assignee: null,
  milestone: null,
  title: null,
  description: null,
}

const isSubmittable = (formData: FormData): boolean =>
  !!formData.repository && !!formData.title && !!formData.description

export const IssueAddingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(emptyFormData)

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <RepositorySelector
            value={formData.repository}
            onChange={(repository) => {
              setFormData((curr) => ({
                ...curr,
                repository,
                label: null,
                assignee: null,
                milestone: null,
              }))
            }}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <MilestoneSelector
            repositoryName={formData.repository?.label || ''}
            onChange={(milestone) => {
              setFormData((curr) => ({
                ...curr,
                milestone,
              }))
            }}
            value={formData.milestone}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <LabelSelector
            repositoryName={formData.repository?.label || ''}
            value={formData.label}
            onChange={(label) => {
              setFormData((curr) => ({
                ...curr,
                label,
              }))
            }}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <AssigneeSelector
            repositoryName={formData.repository?.label || ''}
            value={formData.assignee}
            onChange={(assignee) => {
              setFormData((curr) => ({
                ...curr,
                assignee,
              }))
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={formData.title}
            label="Title"
            size="small"
            fullWidth={true}
            onChange={(ev) =>
              setFormData((curr) => ({
                ...curr,
                title: ev.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline={true}
            rows={5}
            value={formData.description}
            label="Description"
            size="small"
            fullWidth={true}
            onChange={(ev) =>
              setFormData((curr) => ({
                ...curr,
                description: ev.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button type="reset" onClick={() => setFormData(emptyFormData)}>
              Reset
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={!isSubmittable(formData)}
            >
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  )
}
