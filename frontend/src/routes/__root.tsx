import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Box, Flex, Divider } from '@chakra-ui/react';

export const Route = createRootRoute({
  component: () => (
    <>
      <Box id="topbar" p={2} bg="gray.100">
        <Flex gap={4} align="center">
          <Link to="/" style={{ fontWeight: 'normal' }} _active={{ fontWeight: 'bold' }}>
            Home
          </Link>
          <Link to="/about" style={{ fontWeight: 'normal' }} _active={{ fontWeight: 'bold' }}>
            About-Us
          </Link>
        </Flex>
      </Box> 
      <Divider />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
