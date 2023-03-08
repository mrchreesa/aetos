import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
  chakra,
} from "@chakra-ui/react";
import NextImage from "next/image";
import PropTypes from "prop-types";

import privateHire from "../assets/homepage/private-hire.jpg";
import privateHireTab from "../assets/homepage/private-hire-tablet.jpg";
import privateHireMob from "../assets/homepage/private-hire-mobile.jpg";

import CustomLink from "./CustomLink";

const EventsContainer = () => {
  const tabData = {
    label: "Private Hire",
    content:
      "Our private hire option offers the perfect solution for those who want to celebrate a special occasion, host a corporate event, a birthday party, or throw a private party with friends and family. Our restaurant can be exclusively reserved for your party. We offer flexibility in terms of menu options, seating arrangements, and timing to ensure your event runs smoothly. Please contact us to discuss your private hire requirements, and our team will be happy to assist you in planning your perfect event.",
    imageMobile: privateHireMob,
    imageTablet: privateHireTab,
    imageDesktop: privateHire,
    imageAlt: "restaurant",
  };

  function DataTabs({ data }) {
    const tabsOrientation = useBreakpointValue({
      base: "vertical",
      md: "horizontal",
      xl: "vertical",
    });

    return (
      <Tabs
        isFitted
        orientation={tabsOrientation}
        variant="unstyled"
        id="eventsTabs"
        py={{ base: 16, md: 24, xl: 32 }}
      >
        <Flex direction={{ base: "column", lg: "row" }} align="center">
          <Flex>
            <Box
              w={{ base: "full", sm: tabData.imageMobile.width / 1.7 }}
              h={{ base: "full", sm: tabData.imageMobile.height / 1.7 }}
              shadow="2xl"
              display={{ base: "inline-flex", md: "none" }}
            >
              <NextImage
                placeholder="blur"
                src={tabData.imageMobile}
                width={tabData.imageMobile.width / 1.7}
                height={tabData.imageMobile.height / 1.7}
                alt={tabData.imageAlt}
              />
            </Box>
            {/* image tablet version (md) */}
            <Box
              w={tabData.imageTablet.width / 2}
              h={tabData.imageTablet.height / 2}
              shadow="2xl"
              display={{ base: "none", md: "block", xl: "none" }}
              pos="relative"
            >
              <NextImage
                placeholder="blur"
                src={tabData.imageTablet}
                width={tabData.imageTablet.width / 2}
                height={tabData.imageTablet.height / 2}
                alt={tabData.imageAlt}
              />
              <Box pos="absolute" top="-38px" left="-60px" w="160px" h="76px">
                <NextImage
                  src="/images/pattern-lines.svg"
                  layout="fill"
                  role="presentation"
                  alt=""
                />
              </Box>
            </Box>
            <Box
              display={{ base: "none", xl: "inline-flex" }}
              pos="relative"
              shadow="2xl"
            >
              <NextImage
                placeholder="blur"
                src={tabData.imageDesktop}
                width={tabData.imageDesktop.width / 2}
                height={tabData.imageDesktop.height / 2}
                alt={tabData.imageAlt}
              />
              <Box pos="absolute" top="-38px" left="-40px" w="160px" h="76px">
                <NextImage
                  src="/images/pattern-lines.svg"
                  layout="fill"
                  role="presentation"
                  alt=""
                />
              </Box>
            </Box>
          </Flex>

          <Flex
            direction={{ base: "column", xl: "column-reverse" }}
            pl={{ xl: 24 }}
          >
            <TabPanels>
              <TabPanel textAlign={{ base: "center", xl: "left" }}>
                <Flex
                  direction="column"
                  align={{ base: "center", xl: "flex-start" }}
                >
                  <Heading as="h2" variant="h2" mb="4" color="primary.codgray">
                    {tabData.label}
                  </Heading>
                  <Flex justify="center">
                    <Text
                      textStyle={{ base: "body2", md: "body1" }}
                      mb={{ base: 6, md: 8 }}
                      maxW="457px"
                      color="primary.codgray"
                    >
                      {tabData.content}
                    </Text>
                  </Flex>
                  <CustomLink href="#booking" variant="black" mb={{ xl: 10 }}>
                    Make reservation
                  </CustomLink>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Flex>
        </Flex>
      </Tabs>
    );
  }

  return (
    <Box bg="white">
      <Box
        bgImage="/images/pattern-curve-top-right.svg"
        bgRepeat="no-repeat"
        bgSize={{
          md: "895px 320px",
        }}
        bgPos={{
          md: "-520px 0",
          lg: "-300px 0",
          xl: "-355px 0",
        }}
      />
      <Box
        w="full"
        h={{
          md: "320px",
        }}
        pos="absolute"
        bgImage="/images/pattern-curve-top-right.svg"
        bgRepeat="no-repeat"
        bgSize={{
          md: "895px 320px",
        }}
        bgPos={{
          md: "-520px 0",
          lg: "-300px 0",
          xl: "-355px 0",
        }}
      />

      <Flex justify="center" role="region" aria-label="Events section">
        <DataTabs data={tabData} />
      </Flex>
    </Box>
  );
};

EventsContainer.propTypes = {
  data: PropTypes.object,
};

export default EventsContainer;
