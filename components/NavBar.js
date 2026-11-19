import { Flex } from "@chakra-ui/react";

import ContactInfo from "./ContactInfo";
import Logo from "./Logo";

const NavBar = () => (
  <Flex
    as="header"
    pos="absolute"
    top="0"
    left="0"
    w="full"
    zIndex="docked"
    align="center"
    justify="space-between"
    px={{ base: 5, md: 8 }}
    py="3"
    bg="primary.codgray"
  >
    <Logo priority />
    <ContactInfo />
  </Flex>
);

export default NavBar;
