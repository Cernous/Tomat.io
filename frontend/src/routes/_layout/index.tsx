import { Box, Input, Link, Center, Flex, InputGroup, InputRightElement, Button} from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'


export const Route = createFileRoute('/_layout/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <Flex
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        p={4}
        bg="teal.500"
      > 
      <Box>
      <Center>
          <Link
            href="https://en.wikipedia.org/wiki/Tomato"
            color="white"
            fontSize="2xl"
            fontWeight="bold"
          > 
            Tomat.io
          </Link>
        </Center></Box>
      </Flex>


      <Box 
      p={4}
      alignSelf = "center">
        <Flex>
        <Input
          type="text"
          name="query"
          display="flex"
          flexDir="column"
          placeholder="Enter Questions Here!"
          size="lg"
          variant="outline"


        />
      </Flex>
      </Box>
      <Box position="fixed" bottom="0" width="100%" bg="white" p={4} boxShadow="lg">
      <InputGroup size="md">
        <Input
          placeholder="Enter Your Questions Here"
          borderColor="gray.300"
          focusBorderColor=".500"
        />
        <InputRightElement>
          <Button colorScheme="teal" size="sm" width = "50%">
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
    </div>
  )
}
