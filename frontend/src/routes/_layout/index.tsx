import { Box, Input, Link } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/_layout/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        bg="teal.500"
      >
        <Link
          href="https://en.wikipedia.org/wiki/Tomato"
          color="white"
          fontSize="2xl"
          fontWeight="bold"
        >
          Tomat.io
        </Link>
      </Box>

      <Box p={4}>
        <Input
          type="text"
          name="query"
          placeholder="Enter Questions Here!"
          size="lg"
          variant="outline"
        />
      </Box>
    </div>
  )
}
