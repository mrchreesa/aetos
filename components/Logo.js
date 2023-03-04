import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import logo from "../assets/brand/logo.png";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Box
        as="a"
        w={{ base: "183px", md: "270px" }}
        mx={{ base: "auto", md: 0 }}
        cursor="pointer"
        display="block"
      >
        <Image src={logo} alt="" />
      </Box>
    </NextLink>
  );
};

export default Logo;
