import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {crypt} from "../index"
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.100"} w={"full"} h={"85vh"}>
        <motion.div 
        style={{
            height:"80vh"
        }}
        animate={{
            translateY:"25px",
            // translateX:"10PX"
        }}
        transition={{
            duration:1,
            repeat:Infinity,
            repeatType:"reverse",
        }}

    >
    <Image w={"full"}
     h={"full"}
     objectFit={"contain"}   
     src={`${crypt}`}/>
     </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thick"}
        color={"gold.700"}
        mt={"-20"}
      >
        R CRYPTO
      </Text>
    </Box>
  )
}

export default Home
