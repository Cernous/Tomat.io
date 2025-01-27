import { Box, Input, Link, Center, Flex, InputGroup, InputRightElement, Button, ChakraProvider, keyframes, AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,} from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { createFileRoute } from '@tanstack/react-router'
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { RecipeServices, UserRequest } from '../../client';

export const Route = createFileRoute('/_layout/')({
  component: Index,
})

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 15vh); /* Start slightly below the initial position */
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0vh); /* Final position */
  }
`;

const fadeUp2 = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 15vh); /* Start slightly below the initial position */
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -10vh); /* Final position */
  }
`;

function readQueryReply(data: UserRequest) {
	return {
		queryFn: () => RecipeServices.get_Recipe(data),
		queryKey: ["recipe"],
	}
}

function Index() {
  const qclient = useQueryClient()
  const [value, setValue] = useState("");
  const [queryParams, setQueryParams] = useState({ time: "", query: "", choice: [] }); // Start as null, but will later become an object
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  
  const { data, isLoading, error } = useQuery(
    ["getRecipe", queryParams],
    () => RecipeServices.get_Recipe(queryParams),
    {
      enabled: !!queryParams, // Only fetch when queryParams is not null
    }
  );

  // Reactively log `data` and `isLoading` changes
  useEffect(() => {
    if (isLoading) {
      console.log("Loading data...");
    } else if (data) {
      console.log("Data fetched:", data);
    }
  }, [isLoading, data]);


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // console.log("Enter key pressed. Current value:", value);
      const now = new Date();
      const formattedTime = `${now.getHours()}:${now.getMinutes()}`;
      // Update `queryParams` with a consistent object format
      console.log("Get Got")
      // setQueryParams({ time: formattedTime, query: value, choice: []});
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
    <div>
      

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="fixed"
              left="35%"
              transform="translate(-50%, -10vh)"
              width="60%" // Adjust width as needed
              height="0%" // Adjust height as needed
              fontWeight={1000}
              color="green"
              textAlign="center"
              fontSize="5rem"
              animation={`${fadeUp2} 1.5s ease-out`} // Apply the animation
            >
              Don't Be A Tomato.
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="fixed"
              left="70%"
              transform="translate(-50%, 0vh)"
              width="60%" // Adjust width as needed
              height="0%" // Adjust height as needed
              fontWeight={1000}
              color="green"
              textAlign="center"
              fontSize="5rem"
              animation={`${fadeUp} 2s ease-in`} // Apply the animation
            >
               Eat A Tomat.io
            </Box>
                
                
        <Box position="fixed" 
         bottom="23vh" 
         width="38%" 
         p={4}
         left="50%" 
         transform="translateX(-50%)" 
         borderRadius={50}
         borderColor={'red'}
         borderWidth={"2px"}
         borderStyle={'inset'}
         transition="all 0.3s ease-in-out"
         color = "darkgreen"
         textAlign={"center"}
         fontWeight={500}
         fontSize={18}
         lineHeight={"2.5rem"}>
            Meet Tomat.io, your personal meal prep buddy. 
            Say goodbye to boring meal routines! Tomat.io serves up meal suggestions, 
            recipes, and even video guides tailored to your cravings.
         </Box>

      <Box position="fixed" 
         bottom="4vh" 
         width="30%" 
         bg="white" p={4}
         left="50%" 
         transform="translateX(-50%)" 
         boxShadow="2xl" 
         borderRadius={50}
         transition="all 0.3s ease-in-out"
         _focusWithin={{
           transform: "translateX(-50%) translateY(-20vh)",
           width: "75%",
           boxShadow: "lg",
         }}>

        <Input
          type ="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          name= "query"
          placeholder="Enter Your Questions Here"
          borderColor="green"
          focusBorderColor="green"
          _focusWithin={{
            borderColor: "lime",
            borderWidth:"2px"
          }}
        />

<AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Your Personnalized Recipe
            </AlertDialogHeader>

            <AlertDialogBody>
              request response
            </AlertDialogBody>

            <AlertDialogFooter>
             This response is AI generateds
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
    </div>
    
  )
}
