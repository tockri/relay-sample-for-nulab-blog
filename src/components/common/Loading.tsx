import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loading: React.FC = () => {
  return (
    <Box sx={{ marginX: 'auto' }}>
      <CircularProgress />
    </Box>
  )
}
