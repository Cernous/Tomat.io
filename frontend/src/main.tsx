import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
// Import the generated route tree
import { routeTree } from './routeTree.gen'
import React from "react"
import { OpenAPI } from './client/core/OpenAPI'

OpenAPI.BASE = import.meta.env.VITE_API_URL
OpenAPI.TOKEN = async () => {
  return localStorage.getItem("access_token") || ""
}

const queryClient = new QueryClient()

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
        <ChakraProvider>
          <QueryClientProvider client={queryClient}> 
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ChakraProvider>
    </StrictMode>,
  )
}