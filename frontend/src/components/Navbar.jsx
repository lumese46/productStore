import React from 'react';
import { Container, Flex, Text, Button, HStack, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa'; // Font Awesome Icons
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="1140px" px={4} py={4}>
      <Flex 
        h={16} 
        alignItems="center" 
        justifyContent="space-between" 
        flexDir={{ base: "column", sm: "row" }}
      >
        {/* Store Title */}
      <Text
        fontSize={{ base: "22px", sm: "28px" }}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
        bgGradient="linear(to-r, cyan.400, blue.500)"
        bgClip="text"
        mt={2}
      >
        <Link to="/">Product Store 🛒</Link>
      </Text>
      <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
        <Button>
            <FaPlusSquare fontSize={20} />
        </Button>
        </Link>
        <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
        </Button>
      </HStack> 
    </Flex>
    </Container>
  );
}

export default Navbar;
