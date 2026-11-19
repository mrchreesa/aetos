import { Box } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import PropTypes from "prop-types";

import logo from "../assets/brand/logo.png";

const Logo = ({ priority = false }) => (
  <NextLink href="/" passHref>
    <Box
      as="a"
      display="block"
      w={{ base: "150px", md: "200px", xl: "230px" }}
      flexShrink={0}
      aria-label="Aetos Greek Taverna – home"
    >
      <NextImage
        src={logo}
        alt=""
        layout="responsive"
        sizes="(min-width: 1440px) 230px, (min-width: 768px) 200px, 150px"
        priority={priority}
      />
    </Box>
  </NextLink>
);

Logo.propTypes = {
  priority: PropTypes.bool,
};

export default Logo;
