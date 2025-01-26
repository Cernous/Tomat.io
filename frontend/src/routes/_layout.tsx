import {
  Flex,
  Center,
  Link,
  Image,
  Box,
} from '@chakra-ui/react'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import tomatioLogo from '../assets/tomat-01.svg'
import React from 'react'

// Define the route
export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

// Main Route Component
function RouteComponent() {
  return (
    <Flex
      direction="column"
      minHeight="100vh" // Full viewport height
      bg="antiquewhite"
    >
      {/* Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="center"
        bg="antiquewhite"
        width="100%"
        height="10vh" // Navbar height
        boxShadow="md"
        p={4}
      >
        <Link
          href="/about"
          fontWeight="bold"
          fontSize="lg"
          _hover={{
            color: 'orange',
            textDecoration: 'none',
          }}
        >
          About Us
        </Link>
      </Flex>

      {/* Logo Section */}
      <Flex
        justify="center"
        align="center"
        height="40vh" // Allocate space for the logo
        bg="antiquewhite" // Optional: background color for separation
      >
        <Link
          href="/"
        >
          <Image
            boxSize="150px"
            src={tomatioLogo}
            alt="tomatio-logo"
          />
        </Link>
      </Flex>


      {/* Outlet for Nested Routes */}
      <Outlet />
    </Flex>
  )
}


