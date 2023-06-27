import {Button, Drawer,HStack, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack, useDisclosure} from "@chakra-ui/react"
import React from 'react'
import {BiMenuAltLeft} from"react-icons/bi"
import {Link} from "react-router-dom"

const Header = () => {
    const {isOpen ,onOpen,onClose}=useDisclosure();
  return (
    <>
     
      <Button 
  colorScheme='green'
  zIndex={'overlay'}
  top={'4'}
  left={'4'}
  pos={'fixed'}
  w={'10'}
  h={'10'}
  borderRadius={'full'}
  onClick={onOpen}
   >
    <BiMenuAltLeft size={20}/>
  </Button>
  <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
    <DrawerOverlay/>
    <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>R CRYPTO</DrawerHeader>
        <DrawerBody>
<VStack alignItems={'flex-start'}>
<Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'green'}
              >
            
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'green'}
              >
                <Link to={'/exchanges'}>Exchanges</Link>
              </Button>

              

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'green'}
              >
                <Link to={'/coins'}>Coins</Link>
              </Button>
            </VStack>
            
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'green'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'green'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>

        </DrawerBody>
    </DrawerContent>
  </Drawer>
    </>
  )
}

export default Header
