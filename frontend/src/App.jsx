import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar /> 
      <Routes>
        {/* The home page route */}
        <Route path="/" element={<HomePage/>} />
        {/* The create page route */}
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
    </Box>
  )
}

export default App
