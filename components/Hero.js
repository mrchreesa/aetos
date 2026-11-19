import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import heroDesktop from "../assets/homepage/hero-desktop.jpg";
import heroMobile from "../assets/homepage/hero-tablet.jpg";
import { maxScreenWidth } from "../constants/style";

import { AddressBlock } from "./ContactInfo";
import CustomLink from "./CustomLink";
import NavBar from "./NavBar";
import Parallax from "./Parallax";

const HERO_ALT = "Homemade moussaka served at Aetos Greek Taverna";

/**
 * Full-viewport hero. On load the copy slides in from the left (staggered
 * line by line) and the photo slides in from the right. Animations live in
 * styles/globals.css and switch off for prefers-reduced-motion.
 */
const Hero = () => (
  <Box
    as="section"
    className="hero"
    bg="primary.codgray"
    w="full"
    minH="100vh"
    display="flex"
    flexDirection="column"
    pos="relative"
    overflow="hidden"
    aria-label="Welcome"
  >
    <NavBar />

    {/* Desktop image (lg+): fills the right side, top to bottom */}
    <Box
      display={{ base: "none", lg: "block" }}
      pos="absolute"
      top="0"
      bottom="0"
      right="0"
      w={{ lg: "50%", xl: "48%" }}
      maxW="900px"
      className="hero-image"
    >
      <Parallax style={{ position: "absolute", inset: 0 }}>
        <NextImage
          src={heroDesktop}
          alt={HERO_ALT}
          layout="fill"
          objectFit="cover"
          objectPosition="left center"
          sizes="(min-width: 1440px) 48vw, 50vw"
          placeholder="blur"
          priority
        />
      </Parallax>
      {/* Soft edge so the photo melts into the background */}
      <Box
        pos="absolute"
        inset="0"
        bgGradient="linear(to-r, primary.codgray 0%, transparent 18%)"
        pointerEvents="none"
        aria-hidden="true"
      />
    </Box>

    <Flex
      flex="1"
      direction="column"
      justify={{ lg: "center" }}
      w="full"
      maxW={{ lg: "960px", xl: maxScreenWidth }}
      mx="auto"
      pos="relative"
    >
      {/* Mobile + tablet image (< lg) */}
      <Box
        display={{ base: "block", lg: "none" }}
        mt={{ base: "72px", md: "100px" }}
        className="hero-image"
      >
        <NextImage
          src={heroMobile}
          alt={HERO_ALT}
          layout="responsive"
          sizes="100vw"
          placeholder="blur"
          priority
        />
      </Box>

      <Flex
        direction="column"
        align={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "left" }}
        pt={{ base: 6, md: 8, lg: "140px" }}
        pb={{ base: 16, md: 24, lg: "100px" }}
        px={{ base: 6, lg: 10, xl: 0 }}
        maxW={{ lg: "520px" }}
      >
        <Parallax>
          <Flex direction="column" align={{ base: "center", lg: "flex-start" }}>
            <Box display="inline-block" mb="8">
              <Heading
                as="h1"
                className="hero-reveal hero-reveal--1"
                fontFamily="display"
                fontWeight="normal"
                color="white"
                fontSize={{ base: "56px", sm: "68px", md: "88px", lg: "104px" }}
                lineHeight="1"
                letterSpacing="0.1em"
                // Optical correction: trailing letter-spacing pushes the
                // word left of centre on mobile.
                mr="-0.1em"
                pb="4"
              >
                AETOS
              </Heading>
              <Box
                className="hero-rule"
                h="8px"
                w="full"
                bg="brand.goldDeep"
                aria-hidden="true"
              />
            </Box>

            <Text
              className="hero-reveal hero-reveal--2"
              color="white"
              fontSize={{ base: "30px", md: "38px" }}
              fontWeight="light"
              lineHeight="1.2"
              mb="3"
            >
              The perfect place
            </Text>
            <Text
              className="hero-reveal hero-reveal--3"
              color="whiteAlpha.800"
              textStyle={{ base: "body2", xl: "body1" }}
              fontSize={{ base: "17px", xl: "19px" }}
              maxW="420px"
              mb={{ base: 8, xl: 10 }}
            >
              to experience the rich flavours and hospitality of Greece
            </Text>

            <Box className="hero-reveal hero-reveal--4">
              <CustomLink variant="dark" href="#booking">
                Make reservation
              </CustomLink>
            </Box>

            <AddressBlock
              className="hero-reveal hero-reveal--5"
              display={{ base: "block", md: "none" }}
              mt="12"
              color="brand.gold"
              fontSize="lg"
            />
          </Flex>
        </Parallax>
      </Flex>
    </Flex>
  </Box>
);

export default Hero;
