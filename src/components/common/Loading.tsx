import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loading: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <CircularProgress size={32} />
    </Box>
  )
}
