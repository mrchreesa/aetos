import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import NavBar from "./NavBar";
import Parallax from "./Parallax";
// import dishImageDesktop from "../assets/homepage/musaka-bg-desktop.JPG";
import dishImageDesktop from "../assets/homepage/musaka-circle1.png";

import dishImageMobile from "../assets/homepage/musaka-circle-mobile1.png";
import dishImageTablet from "../assets/homepage/musaka-circle-mobile.png";
import { maxScreenWidth } from "../constants/style";

import CustomLink from "./CustomLink";
import Logo from "./Logo";

const Hero = () => {
  return (
    <Box
      bg="primary.codgray"
      w="full"
      pos="relative"
      role="region"
      aria-label="Hero landmark"
      scroll-behavior="smooth"
    >
      {/* Hero bg image lg */}
      <Box
        display={{ base: "none", lg: "inline-flex" }}
        w={{ lg: "600px", xl: "600px" }}
        h="full"
        pos="absolute"
        bottom="0"
        right="0"
        zIndex="base"
        opacity={0.85}
        // overflow="hidden"
      >
        <Parallax>
          <NextImage
            className="header-logo"
            src={dishImageDesktop}
            alt="Dine hero desktop image"
            objectFit="cover"
            objectPosition="bottom"
          />
        </Parallax>
      </Box>

      <Flex
        // pos="relative"
        direction={{ base: "column", lg: "row" }}
        mx="10"
        justify="space-between"
        boxSizing="content-box"
        maxW={{ lg: "960px", xl: maxScreenWidth }}
      >
        <NavBar />

        {/* Hero bg image mobile */}
        <Box
          display={{ base: "inline-flex", md: "none" }}
          mt="70px"
          overflow="hidden"
        >
          <Parallax>
            <NextImage src={dishImageMobile} alt="Dine hero mobile image" />
          </Parallax>
        </Box>

        {/* Hero bg image tablet */}
        <Box
          display={{ base: "none", md: "inline-flex", lg: "none" }}
          mt="70px"
          overflow="hidden"
        >
          <Parallax>
            <NextImage src={dishImageTablet} alt="Dine hero tablet image" />
          </Parallax>
        </Box>

        {/* Hero content */}
        <Flex
          className="header"
          w="100%"
          direction="column"
          pt={{ base: 10, sm: 12, md: 6, lg: 20, xl: "65px" }}
          // padding for the main images
          pb={{
            base: "60px",
            sm: "60px",
            md: "220px",
            lg: "220px",
            xl: "200px",
          }}
          pl={{ base: 6, lg: 20, xl: 0 }}
          pr={{ base: 6, lg: "0", xl: "0" }}
          mx={{ base: "auto", lg: 0 }}
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          zIndex="docked"
          // overflow="hidden"
        >
          <Box
            display={{ base: "none", lg: "block" }}
            visibility="hidden"
            h="auto"
            opacity="0.75"
            overflowX="hidden"
            backgroundColor="primary.codgray"
            mb={{ base: 0, lg: 4, xl: "150px" }}
          >
            <Logo />
          </Box>
          <Parallax>
            <Flex direction="column" align="center">
              <Heading
                as="h1"
                variant="h1"
                color="white"
                mb="10"
                pb="4"
                pl="5"
                maxW={{ md: "400px", lg: "500px", xl: "600px" }}
                fontFamily="Baskervillle"
                fontSize={{ base: "90px", lg: "110px" }}
                letterSpacing="10px"
                shadow="0px 10px #e2a54a"
              >
                AETOS
              </Heading>

              <Text
                color="white"
                fontSize="20px"
                textAlign="center"
                textStyle={{ base: "body2", xl: "body1" }}
                mb={{ base: 6, lg: 8, xl: 10 }}
                maxW={{ base: "400px", xl: "500px" }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "40px",
                    paddingTop: "16px",
                  }}
                >
                  The perfect place{" "}
                </h1>{" "}
                <br /> to experience the rich flavours and hospitality of
                Greece.
              </Text>

              <CustomLink
                // style={{ backgroundColor: "#150e03" }}
                variant="dark"
                href="#booking"
                mb="20"
              >
                MAKE RESERVATION
              </CustomLink>
              <Text
                color="#fcbc5a"
                fontSize="xl"
                display={{ base: "block", md: "none" }}
              >
                156A Seven Sisters Road
                <br />
                N7 7PL, London, UK
                <br />
                02072635582
                <br />
              </Text>
            </Flex>
          </Parallax>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
