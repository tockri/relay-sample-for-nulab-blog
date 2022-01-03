import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { AssigneeSelector } from './assignee/Selector'
import { LabelSelector } from './label/Selector'
import { RepositorySelector } from './repository/Selector'

type FormData = {
  repositoryName: string | null
  labelId: string | null
  assigneeId: string | null
  title: string | null
  description: string | null
}
const emptyFormData: FormData = {
  repositoryName: null,
  labelId: null,
  assigneeId: null,
  title: null,
  description: null,
}

const isSubmittable = (formData: FormData): boolean =>
  !!formData.repositoryName && !!formData.title && !!formData.description

export const IssueAddingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(emptyFormData)

  return (
    <Box sx={{ width: 900 }}>
      <form>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <RepositorySelector
              onChange={(repositoryId, repositoryName) => {
                setFormData((curr) => ({
                  ...curr,
                  repositoryName,
                  labelId: repositoryName ? curr.labelId : null,
                  assigneeId: repositoryName ? curr.assigneeId : null,
                }))
              }}
            />
            <LabelSelector
              repositoryName={formData.repositoryName}
              onChange={(id) => {
                setFormData((curr) => ({
                  ...curr,
                  labelId: id,
                }))
              }}
            />
            <AssigneeSelector
              repositoryName={formData.repositoryName}
              onChange={(id) => {
                setFormData((curr) => ({
                  ...curr,
                  assigneeId: id,
                }))
              }}
            />
          </Stack>
          <Box>
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
          </Box>
          <Box>
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
          </Box>
          <Box>
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
          </Box>
        </Stack>
      </form>
    </Box>
  )
}
