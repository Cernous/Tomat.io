import { Box, Divider, Flex, ColorMode} from '@chakra-ui/react'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

import React from 'react'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <Breadcrumb fontFamily={'serif'} fontWeight = 'medium' fontSize = 'md'>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem >
        <BreadcrumbLink as={Link} to="/about">About Us</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Box id="topbar" p={2} bg="black" >
      <Flex gap={4} align="center">
        <Link to="/" style={{ fontWeight: 'normal' }}>
          Home
        </Link>
        <Link to="/about" color = "white" style={{ fontWeight: 'normal' }}>
          About-Us
        </Link>
      </Flex>
    </Box>
    <Divider />
    <Outlet />
    </>
  )
}
