import { Box, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { maxScreenWidth } from "../constants/style";
import AuthorBanner from "./AuthorBanner";

import Logo from "./Logo";

const Footer = () => {
  const TextBlock = (props) => {
    const { children } = props;

    return (
      <Box
        textAlign={{ base: "center", md: "left" }}
        textTransform="uppercase"
        mb="6"
        fontSize="14px"
        letterSpacing="widest"
        lineHeight="2"
        {...props}
      >
        <Text color="white">{children}</Text>
      </Box>
    );
  };

  TextBlock.propTypes = {
    children: PropTypes.array,
  };

  return (
    <>
      <Flex role="contentinfo" bg="primary.codgray">
        <Flex
          color="white"
          direction={{ base: "column", md: "row" }}
          align={{ base: "center" }}
          justify="space-between"
          px={{ base: 6, md: 16, xl: 0 }}
          py={{ base: 2, xl: 4 }}
          mx="auto"
          maxW={maxScreenWidth}
          w="full"
        >
          <Box mb={{ base: 6, md: 0 }}>
            <Logo />
          </Box>

          <Flex
            justify="center"
            textAlign="center"
            align={{ base: "center" }}
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
          >
            <Text color="#fcbc5a" fontSize="sm" mr="8">
              156A Seven Sisters Road
              <br />
              N7 7PL, London, UK
              <br />
              02072635582
              <br />
            </Text>
            <Text color="#fcbc5a" fontSize="sm">
              Opening Times <br />
              SUN - THU: 10:00 AM - 11:00 PM
              <br />
              FRI - SAT: 10:00 AM - 02:00 AM
              <br />
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* <AuthorBanner /> */}
    </>
  );
};

export default Footer;
