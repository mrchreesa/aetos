import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

import bookingBg from "../assets/homepage/booking-bg.jpg";
import { maxScreenWidth } from "../constants/style";

import BookingForm from "./bookingForm/BookingForm";

const ReservationBanner = () => (
  <Box
    as="section"
    id="booking"
    pos="relative"
    overflow="hidden"
    bg="primary.codgray"
    aria-labelledby="booking-heading"
  >
    <NextImage
      src={bookingBg}
      alt=""
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      placeholder="blur"
      sizes="100vw"
    />
    {/* Darken the photo so the heading stays readable */}
    <Box
      pos="absolute"
      inset="0"
      bgGradient="linear(to-b, blackAlpha.700, blackAlpha.500)"
      aria-hidden="true"
    />

    <Flex
      pos="relative"
      direction={{ base: "column", xl: "row" }}
      align="center"
      justify={{ base: "center", xl: "space-between" }}
      gridGap={{ base: 10, xl: 16 }}
      py={{ base: 20, xl: 28 }}
      px={{ base: 4, sm: 6, xl: 0 }}
      maxW={maxScreenWidth}
      mx="auto"
    >
      <Box textAlign={{ base: "center", xl: "left" }} maxW="420px">
        <Heading as="h2" id="booking-heading" variant="h2" color="white">
          Ready to book a table?
        </Heading>
        <Text color="whiteAlpha.800" textStyle="body2">
          Send us your request and we&rsquo;ll get back to you to confirm. For
          groups larger than 10, please give us a call.
        </Text>
      </Box>
      <BookingForm />
    </Flex>
  </Box>
);

export default ReservationBanner;
