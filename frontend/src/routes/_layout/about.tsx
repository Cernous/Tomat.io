import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text, Box, keyframes} from '@chakra-ui/react'
import React from 'react'

export const Route = createFileRoute('/_layout/about')({
  component: About,
})

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, 15vh); /* Start slightly below the initial position */
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0vh); /* Final position */
  }
`;




function About() {

  const github1 = () => {
    window.location.href = "https://github.com/forGOATten";
  };
  const github2 = () => {
    window.location.href = "https://github.com/Cernous";
  };
  const github3 = () => {
    window.location.href = "https://github.com/MRWHITEGIVE111";
  };
  const github4 = () => {
    window.location.href = "https://github.com/Alarmsoff";
  };

  return (
    <Box  
    display="flow"
    justifyContent="center"
    alignItems="center"
    height="60vh" // Full viewport height
    transform="translateX(17%)"
    >
    <SimpleGrid 
    spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    <Card animation={`${fadeUp} 1s ease-out`}>
      <CardHeader >
        <Heading size='md'> Gorden Quach</Heading>
      </CardHeader>
      <CardBody>
        <Text>"To may toes or to mah toes?"</Text>
      </CardBody>
      <CardFooter>
        <Button onClick= {github1}>Github</Button>
      </CardFooter>
    </Card>
    <Card animation={`${fadeUp} 1.5s ease-out`}>
      <CardHeader>
        <Heading size='md'> Clarence Zhen</Heading>
      </CardHeader>
      <CardBody>
        <Text>"When life gives you tomatoes, you throw back the tomatoes."</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={github2}>Github</Button>
      </CardFooter>
    </Card>
    <Card animation={`${fadeUp} 2s ease-out`}>
      <CardHeader>
        <Heading size='md'> Zhibo Wang</Heading>
      </CardHeader>
      <CardBody>
        <Text>"Don't go gentle into the tomatoes, but go into my Resume."</Text>
      </CardBody>
      <CardFooter>
        <Button onClick= {github3}>Github</Button>
      </CardFooter>
    </Card>
    <Card animation={`${fadeUp} 2.5s ease-out`}>
      <CardHeader >
        <Heading size='md'> Yuran Wang</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all my works at Github!</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={github4}>Github</Button>
      </CardFooter>
    </Card>
  </SimpleGrid>
  </Box>
  )
}
