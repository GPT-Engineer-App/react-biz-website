import React from "react";
import { Box, Container, Flex, Heading, Text, Stack, Button, Image, VStack, HStack, Icon, Input, Textarea, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="header" width="full" align="center" justifyContent="space-between" p={4} bg={bg} color={color}>
        <Heading as="h1" size="lg">
          My Business
        </Heading>
        <HStack as="nav" spacing={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">About Us</Button>
          <Button variant="ghost">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex align="center" justify="center" bg={bg} minH="70vh">
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="2xl">
            Welcome to My Business
          </Heading>
          <Text fontSize="xl">We provide the best services for you.</Text>
          <Button size="lg" colorScheme="blue">
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* Services Section */}
      <Container maxW="container.xl" p={4}>
        <Heading as="h3" size="xl" textAlign="center" mb={6}>
          Our Services
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center" align="center">
          <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h4" size="md">
              Service 1
            </Heading>
            <Text mt={4}>Description of Service 1.</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h4" size="md">
              Service 2
            </Heading>
            <Text mt={4}>Description of Service 2.</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h4" size="md">
              Service 3
            </Heading>
            <Text mt={4}>Description of Service 3.</Text>
          </Box>
        </Stack>
      </Container>

      {/* About Us Section */}
      <Box bg={bg} color={color}>
        <Container maxW="container.xl" p={4}>
          <Heading as="h3" size="xl" textAlign="center" mb={6}>
            About Us
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtfGVufDB8fHx8MTcwOTQ5NDAwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Our Team" mr={8} />
            <Text fontSize="lg">We are a team of dedicated professionals providing top-notch services to our clients. Our mission is to deliver excellence in everything we do.</Text>
          </Flex>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.xl" p={4}>
        <Heading as="h3" size="xl" textAlign="center" mb={6}>
          Contact Us
        </Heading>
        <Stack spacing={4} as="form">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" />
          <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="blue">
            Send Message
          </Button>
        </Stack>
        <Flex justifyContent="center" alignItems="center" mt={6}>
          <Icon as={FaPhoneAlt} mr={2} />
          <Text>+123 456 7890</Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt={4}>
          <HStack spacing={4}>
            <Icon as={FaFacebookF} w={6} h={6} />
            <Icon as={FaTwitter} w={6} h={6} />
            <Icon as={FaInstagram} w={6} h={6} />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
