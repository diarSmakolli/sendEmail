'use client'
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Center,
  Textarea,
  useColorModeValue,
  Alert,
  AlertIcon,
  Spinner,
  Toast,
  useToast,
  createStandaloneToast,
  Modal, 
  ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Select, 
  ModalFooter,
  useDisclosure,
  InputGroup,
  InputLeftAddon,
  VStack,
} from '@chakra-ui/react';
import theme from '../theme.js';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function JoinOurTeam() {

  const toast = useToast();

 

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5500/send-email', {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        company: formData.company,
        message: formData.message,
        subject: formData.subject,
      });

      console.log('Server response:', response.data);

    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Center>
        <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
           
            <Text as={'span'} color={useColorModeValue('white', 'black')} fontFamily={'Syne'} lineHeight={'1.2'}>
              Digital Initiative: Connect with us for innovative solutions.
            </Text>
            
          </Heading>
        </Center>
        <Stack
          bg={useColorModeValue('gray.900', '#fff')}
          borderWidth="1px" borderRadius="3xl"
          boxShadow={useColorModeValue('2px 0px 50px 5px rgba(62, 2, 114, 0.2)', '2px 0px 50px 5px rgba(62, 2, 114, 0.2)')}
          borderColor={useColorModeValue('gray.700', 'gray.200')}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={useColorModeValue('gray.100', 'gray.800')}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '3xl' }}
              fontFamily={'Poppins'}>
              Let's talk about your business growing
              <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              Fill in the form below and codesculp reperesentative will get in touch with you soon.
            </Text>
          </Stack>

         



          <Box as={'form'} mt={0} onSubmit={handleSubmit}>
            <Stack spacing={4}>
              
              <Input
                placeholder="Full Name"
                bg={useColorModeValue('gray.700', 'gray.100')}  
                color={useColorModeValue('gray.100', 'gray.800')}
                border={0}
                _placeholder={{
                  color: 'gray.500',
                }}
                name='fullName'
                value={formData.fullName}
                onChange={(e) => handleChange(e, 'fullName')}
                required
                autoComplete="off"
              />
              <Input
                border={0}
                placeholder="Email"
                bg={useColorModeValue('gray.700', 'gray.100')}
                color={useColorModeValue('gray.100', 'gray.800')}
                _placeholder={{
                  color: 'gray.500',
                }}
                name='email'
                value={formData.email}
                onChange={(e) => handleChange(e, 'email')}
                required
                autoComplete="off"
              />
              
             
                <Input
                border={0}
                placeholder="Phone Number"
                bg={useColorModeValue('gray.700', 'gray.100')}
                color={useColorModeValue('gray.100', 'gray.800')}
                _placeholder={{
                  color: 'gray.500',
                }}
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={(e) => handleChange(e, 'phoneNumber')}
                required
                autoComplete="off"
              />
             

              <Input
                border={0}
                placeholder="Company"
                bg={useColorModeValue('gray.700', 'gray.100')}
                color={useColorModeValue('gray.100', 'gray.800')}
                _placeholder={{
                  color: 'gray.500',
                }}
                name='company'
                value={formData.company}
                onChange={(e) => handleChange(e, 'company')}
                required
                autoComplete="off"
              />

              <Input
                border={0}
                placeholder="Subject"
                bg={useColorModeValue('gray.700', 'gray.100')}
                color={useColorModeValue('gray.100', 'gray.800')}
                _placeholder={{
                  color: 'gray.500',
                }}
                name='subject'
                value={formData.subject}
                onChange={(e) => handleChange(e, 'subject')}
                required
                autoComplete="off"
              />

              <Textarea
                border={0}
                placeholder="Tell us how can we help you?"
                bg={useColorModeValue('gray.700', 'gray.100')}
                color={useColorModeValue('gray.100', 'gray.800')}
                _placeholder={{
                  color: 'gray.500',
                }}
                name='message'
                value={formData.message}
                onChange={(e) => handleChange(e, 'message')}
                required
                autoComplete="off"
              />
              
            </Stack>
            <Button
              type='submit'
              fontFamily={'heading'}
              mt={5}
              w={'full'}
              bg='#4F00FC'
              color={'white'}
              _hover={{bg: '#4F00FC'}}
              >
                {/* {isSubmitting ? <Spinner /> : 'Submit'} */}
                Submit
            </Button>
            
            <Box mt={2}>
            
            </Box>


          </Box>
          
        </Stack>
      </Container>
      {/* <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} /> */}
    </Box>
  )
}


