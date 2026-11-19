import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import privateHire from "../assets/homepage/private-hire.jpg";
import { maxScreenWidth } from "../constants/style";

import CustomLink from "./CustomLink";
import PatternLines from "./PatternLines";
import PatternDivider from "./patterns/PatternDivider";

const EventsContainer = () => (
  <Box
    as="section"
    bg="white"
    pos="relative"
    overflow="hidden"
    aria-labelledby="private-hire-heading"
  >
    <Box
      display={{ base: "none", md: "block" }}
      pos="absolute"
      top="0"
      left="0"
      w="55%"
      h="320px"
      bg="rgba(92, 103, 121, 0.077)"
      borderTopRightRadius="100px"
      aria-hidden="true"
    />

    <Flex
      direction={{ base: "column", lg: "row" }}
      align="center"
      gridGap={{ base: 10, lg: 16, xl: 24 }}
      py={{ base: 16, md: 24, xl: 32 }}
      px={{ base: 6, md: 10, xl: 0 }}
      maxW={{ lg: "960px", xl: maxScreenWidth }}
      mx="auto"
      pos="relative"
    >
      <Box
        pos="relative"
        flexShrink={0}
        w={{ base: "full", md: "560px", lg: "460px", xl: "540px" }}
        maxW="full"
      >
        <PatternLines
          display={{ base: "none", md: "block" }}
          top="-38px"
          left="-40px"
          zIndex="1"
        />
        <Box shadow="2xl" overflow="hidden" lineHeight="0" pos="relative">
          <NextImage
            src={privateHire}
            alt="The Aetos dining room set up for a private event"
            layout="responsive"
            sizes="(min-width: 1440px) 540px, (min-width: 1024px) 460px, (min-width: 768px) 560px, 100vw"
            placeholder="blur"
          />
        </Box>
      </Box>

      <Flex
        direction="column"
        align={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "left" }}
        maxW={{ base: "560px", xl: "457px" }}
      >
        <PatternDivider mb={{ base: 8, lg: 10 }} />
        <Heading as="h2" id="private-hire-heading" variant="h2" color="primary.codgray">
          Private Hire
        </Heading>
        <Text textStyle={{ base: "body2", md: "body1" }} color="gray.700" mb={{ base: 8, md: 10 }}>
          Celebrating a special occasion, hosting a corporate event or throwing a
          party with friends and family? The whole restaurant can be reserved
          exclusively for you, with flexible menus, seating and timings so your
          event runs smoothly. Get in touch and our team will help you plan it.
        </Text>
        <CustomLink href="#booking" variant="black">
          Make reservation
        </CustomLink>
      </Flex>
    </Flex>
  </Box>
);

export default EventsContainer;
