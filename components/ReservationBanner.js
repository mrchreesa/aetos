import { Box, Flex, Heading } from "@chakra-ui/react";

import { maxScreenWidth } from "../constants/style";
import BookingForm from "./bookingForm/BookingForm";
import CustomLink from "./CustomLink";
import booking from "../assets/homepage/booking.jpg";

const ReservationBanner = () => {
  return (
    <Box
      bgImage={{
        base: "/images/booking.jpg",
        md: "/images/booking.jpg",
        xl: "/images/booking.jpg",
      }}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      role="region"
      aria-label="Reservation banner"
    >
      <Flex
        direction={{ base: "column", xl: "row" }}
        align="center"
        justify={{ base: "center", xl: "space-between" }}
        textAlign="center"
        py={{ base: 20, xl: 24 }}
        maxW={maxScreenWidth}
        mx="auto"
      >
        <Heading as="h2" variant="h2" color="white" mb={{ base: 6, xl: 0 }}>
          Ready to book a table?
        </Heading>
        <BookingForm />
        {/* <CustomLink href="/booking" variant="dark">
          Make A Reservation
        </CustomLink> */}
      </Flex>
    </Box>
  );
};

export default ReservationBanner;
