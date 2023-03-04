import { Box, Flex, Text } from "@chakra-ui/react";

import { maxScreenWidth } from "../constants/style";
import AuthorBanner from "./AuthorBanner";

import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <Flex role="contentinfo" bg="primary.codgray">
        <Flex
          pos="absolute"
          top="0"
          left="0"
          color="white"
          direction={{ base: "column", md: "row" }}
          align={{ base: "center" }}
          justify="space-around"
          //   px={{ base: 6, md: 16, xl: 0 }}
          //   py={{ base: 16, xl: 20 }}
          mx="auto"
          //   maxW={maxScreenWidth}
          w="100%"
          overflowY="hidden"
          backgroundColor="rgb(17,17,17)"
        >
          <Box mb={{ base: 6, md: 0 }}>
            <Logo />
          </Box>

          <Flex
            align={{ base: "center" }}
            direction={{ base: "row", lg: "row" }}
            justify="center"
            textAlign="center"
          >
            <Text color="#fcbc5a" fontSize="xs" mr="8">
              156A Seven Sisters Road
              <br />
              N7 7PL, London, UK
              <br />
              02072635582
              <br />
            </Text>
            <Text color="#fcbc5a" fontSize="xs">
              Opening Times <br />
              SUN - THU: 10:00 AM - 11:00 PM
              <br />
              FRI - SAT: 10:00 AM - 02:00 AM
              <br />
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <AuthorBanner />
    </>
  );
};

export default NavBar;
