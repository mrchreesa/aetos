import { Box, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { maxScreenWidth } from "../constants/style";
import insta from "../assets/brand/insta.png";
import Image from "next/image";

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
          // direction={{ base: "column", md: "row" }}
          align={{ base: "center" }}
          justify="space-between"
          px={{ base: 6, md: 6, xl: 0 }}
          // py={{ base: 2, xl: 4 }}
          mx="auto"
          maxW={maxScreenWidth}
          w="100%"
          overflowY="hidden"
        >
          <Box>
            <Logo />
          </Box>

          <Flex
            justify="center"
            textAlign="center"
            align={{ base: "center" }}
            // direction={{ base: "column", md: "row" }}
            // display={{ base: "none", md: "flex" }}
          >
            <Text
              color="#fcbc5a"
              fontSize="xs"
              display={{ base: "none", lg: "block" }}
              mr="8"
            >
              156A Seven Sisters Road
              <br />
              N7 7PL, London, UK
              <br />
              02072635582
              <br />
            </Text>
            <Text
              color="#fcbc5a"
              fontSize="xs"
              display={{ base: "none", md: "block" }}
            >
              Opening Times <br />
              SUN - THU: 10:00 AM - 11:00 PM
              <br />
              FRI - SAT: 10:00 AM - 02:00 AM
              <br />
            </Text>
            <a
              style={{ cursor: "pointer", marginLeft: 40 }}
              rel="noopener noreferrer"
              target="_blank"
              href="http://www.instagram.com/aetos_loungetaverna"
            >
              <Image height={35} width={35} src={insta} alt="instagram" />
            </a>
          </Flex>
        </Flex>
      </Flex>
      {/* <AuthorBanner /> */}
    </>
  );
};

export default Footer;
