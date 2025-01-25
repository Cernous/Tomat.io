import { Box, Divider, Flex } from '@chakra-ui/react'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <Box id="topbar" p={2} bg="gray.100">
      <Flex gap={4} align="center">
        <Link to="/" style={{ fontWeight: 'normal' }}>
          Home
        </Link>
        <Link to="/about" style={{ fontWeight: 'normal' }}>
          About-Us
        </Link>
      </Flex>
    </Box>
    <Divider />
    <Outlet />
    </>
  )
}
