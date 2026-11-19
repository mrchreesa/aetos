import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import PropTypes from "prop-types";

const HighlightsMenu = ({ title, text, image }) => (
  <Flex
    as="li"
    listStyleType="none"
    w="full"
    direction={{ base: "column", md: "row" }}
    align={{ base: "center", md: "flex-start" }}
    gridGap={{ base: 6, md: 8 }}
  >
    <Box
      w={{ base: "full", md: "200px", lg: "170px", xl: "200px" }}
      maxW="327px"
      flexShrink={0}
      overflow="hidden"
      lineHeight="0"
      shadow="lg"
    >
      <NextImage
        src={image}
        alt={title}
        layout="responsive"
        sizes="(min-width: 768px) 200px, 327px"
        placeholder="blur"
      />
    </Box>
    <Box
      w="32px"
      h="1px"
      bg="primary.beaver"
      mt="14px"
      flexShrink={0}
      display={{ base: "none", md: "block", lg: "none", xl: "block" }}
      aria-hidden="true"
    />
    <Box textAlign={{ base: "center", md: "left" }}>
      <Heading as="h3" variant="h3l" color="white" mb="2">
        {title}
      </Heading>
      <Text textStyle="body2" color="whiteAlpha.800" maxW="383px">
        {text}
      </Text>
    </Box>
  </Flex>
);

HighlightsMenu.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HighlightsMenu;
