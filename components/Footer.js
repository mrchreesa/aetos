import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";

import { BUSINESS } from "../constants/business";
import { maxScreenWidth } from "../constants/style";

import { AddressBlock, HoursBlock, InstagramLink } from "./ContactInfo";
import Logo from "./Logo";

const Footer = () => (
  <Box as="footer" bg="primary.codgray" borderTop="1px solid" borderColor="#272727">
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "center" }}
      justify="space-between"
      gridGap="6"
      px={{ base: 6, md: 8, xl: 0 }}
      py={{ base: 10, md: 8 }}
      mx="auto"
      maxW={maxScreenWidth}
      textAlign={{ base: "center", md: "left" }}
    >
      <Logo />
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 5, md: 10 }}
        align="center"
        color="brand.gold"
        fontSize="xs"
        letterSpacing="wide"
      >
        <AddressBlock />
        <HoursBlock />
        <InstagramLink />
      </Stack>
    </Flex>
    <Box
      color="whiteAlpha.600"
      fontSize="xs"
      textAlign="center"
      pb="6"
      px="6"
      lineHeight="1.8"
    >
      <Text color="inherit" fontSize="inherit">
        © {new Date().getFullYear()} {BUSINESS.name}
      </Text>
      <Text color="inherit" fontSize="inherit" whiteSpace="nowrap">
        Made with{" "}
        <Box as="span" role="img" aria-label="love">
          ♡
        </Box>{" "}
        by{" "}
        <Link
          href="https://www.webm8agency.com/"
          isExternal
          variant="basic"
          p="0"
          fontWeight="inherit"
          fontSize="inherit"
          letterSpacing="inherit"
          textTransform="none"
          color="inherit"
          textDecoration="underline"
          sx={{ textUnderlineOffset: "3px" }}
          _hover={{ color: "white", textDecorationThickness: "2px" }}
        >
          WebM8
        </Link>
      </Text>
    </Box>
  </Box>
);

export default Footer;
