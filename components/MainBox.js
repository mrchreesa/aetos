import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import PropTypes from "prop-types";

import { maxScreenWidth } from "../constants/style";

import PatternLines from "./PatternLines";
import PatternDivider from "./patterns/PatternDivider";

const MainBox = ({
  isFirst,
  isCutout,
  imageSide,
  image,
  alt,
  title,
  children,
}) => {
  const isLeftImage = imageSide === "left";

  return (
    <Box w="full" pos="relative">
      {/* Soft curved panel behind the photo */}
      <Box
        display={{ base: "none", lg: "block" }}
        pos="absolute"
        top={isFirst ? "180px" : "120px"}
        bottom={isFirst ? "-60px" : "-120px"}
        w="60%"
        left={isLeftImage ? 0 : "auto"}
        right={isLeftImage ? "auto" : 0}
        bg="rgba(92, 103, 121, 0.077)"
        borderTopRightRadius={isLeftImage ? "100px" : 0}
        borderTopLeftRadius={isLeftImage ? 0 : "100px"}
        aria-hidden="true"
      />

      <Flex
        direction={{ base: "column", lg: isLeftImage ? "row" : "row-reverse" }}
        align="center"
        justify="space-between"
        gridGap={{ base: 10, lg: 16, xl: 24 }}
        px={{ base: 6, md: 10, xl: 0 }}
        maxW={{ lg: "960px", xl: maxScreenWidth }}
        mx="auto"
        pos="relative"
      >
        <Box
          pos="relative"
          flexShrink={0}
          w={{ base: "full", md: "560px", lg: "460px", xl: "540px" }}
          maxW="full"
          mt={{ lg: isFirst ? "-80px" : 0 }}
        >
          <Box
            lineHeight="0"
            // Cut-out images have transparent corners, so shadow the shape
            // itself rather than the bounding box.
            shadow={isCutout ? "none" : "2xl"}
            overflow={isCutout ? "visible" : "hidden"}
            filter={isCutout ? "drop-shadow(0 24px 32px rgba(0,0,0,0.22))" : "none"}
          >
            <NextImage
              src={image}
              alt={alt}
              layout="responsive"
              sizes="(min-width: 1440px) 540px, (min-width: 1024px) 460px, (min-width: 768px) 560px, 100vw"
              placeholder={isCutout ? "empty" : "blur"}
            />
          </Box>
          {!isLeftImage && (
            <PatternLines
              display={{ base: "none", md: "block" }}
              bottom="-38px"
              right={{ md: "-60px", xl: "-90px" }}
            />
          )}
        </Box>

        <Flex
          direction="column"
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          maxW={{ base: "560px", xl: "445px" }}
        >
          <PatternDivider mb={{ base: 8, lg: 10 }} />
          <Heading as="h2" variant="h2" color="primary.codgray">
            {title}
          </Heading>
          <Text
            textStyle={{ base: "body2", xl: "body1" }}
            color="gray.700"
            as="div"
            sx={{ "p + p": { mt: 4 } }}
          >
            {children}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

MainBox.propTypes = {
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  imageSide: PropTypes.oneOf(["right", "left"]).isRequired,
  isCutout: PropTypes.bool,
  isFirst: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default MainBox;
