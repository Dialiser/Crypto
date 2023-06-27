import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'6'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading alignSelf={'center'}>R CRYPTO</Heading>
            <Avatar alignSelf={'center'} boxSize={'12'} />
  
            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'green'}
            />
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'green'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'green'}
            />
  
            <Button colorScheme={'green'} type={'submit'}>
              Sign Up
            </Button>
  
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'green'}>
                <Link to={'/login'}>Login In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;