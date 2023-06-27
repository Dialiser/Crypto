import React from 'react'
import {
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <Container>
       <form>
        <VStack
        alignItems={'stretch'}
        //jo button ya inpput fiel hai wo lamba kr dega
        w={['full','96']}
        m={'auto'}
        my={'16'}
        >
            <Heading textTransform={'uppercase'}>
                welcome Back rishav
            </Heading>
            <Input type={"email"}
                   placeholder={'email'}
                      required
                      focusBorderColor={'green'}
            ></Input>
             <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'green'}
          />
             <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>
          <Button colorScheme={'green'} type={'submit'}>
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?
              <Button variant={'link'} colorScheme={'green'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
            </Text>
        </VStack>
       </form>
    </Container>
  )
}

export default Login
