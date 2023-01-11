
import { BookmarkAdd } from '@mui/icons-material'
import { AspectRatio, Box, Button, IconButton, Typography, Card } from '@mui/joy'

import React from 'react'
import Lend from '../../models/lend'
import Tool from '../../models/tool'

type lendProps = {
  lend: Lend
}
export function LendComponent({ lend }: lendProps) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {lend.returnDate?.toString()}
      </Typography>
      {/* <Typography level="body2">April 24 to May 02, 2021</Typography> */}
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={lend.tool.image} alt="" />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">{lend.lendingDate.toString()}</Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Lend
        </Button>
      </Box>
    </Card>
  )
}