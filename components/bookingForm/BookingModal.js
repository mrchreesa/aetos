import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import { BUSINESS } from "../../constants/business";
import { parseISODate } from "../../lib/booking";

const Row = ({ label, value }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    gridGap="4"
    py="2"
    borderBottom="1px solid"
    borderColor="gray.100"
  >
    <Text as="dt" color="gray.600" fontSize="sm">
      {label}
    </Text>
    <Text as="dd" fontSize="sm" fontWeight="semibold" textAlign="right">
      {value}
    </Text>
  </Box>
);

Row.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node,
};

const formatDate = (iso) => {
  const date = parseISODate(iso);
  return date
    ? date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : iso;
};

const BookingModal = ({ isOpen, onClose, bookingData }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent borderRadius="none" mx="4" pt="10" pb="4" bg="white">
      <ModalCloseButton />
      <ModalBody>
        {bookingData && (
          <Box textAlign="center">
            <Heading as="h2" variant="h3l" fontSize="2xl" mb="3">
              Thank you, {bookingData.name.split(" ")[0]}!
            </Heading>
            <Text fontSize="md" color="gray.700" mb="6">
              We&rsquo;ve received your booking request and will be in touch to
              confirm it.
            </Text>
            <Box as="dl" textAlign="left" mb="6">
              <Row label="Date" value={formatDate(bookingData.date)} />
              <Row label="Time" value={bookingData.time} />
              <Row label="Guests" value={bookingData.guests} />
              <Row label="Email" value={bookingData.email} />
            </Box>
            <Text fontSize="sm" color="gray.600">
              Need to change something? Call us on{" "}
              <a href={BUSINESS.phoneHref} style={{ textDecoration: "underline" }}>
                {BUSINESS.phoneDisplay}
              </a>
            </Text>
          </Box>
        )}
      </ModalBody>
      <ModalFooter justifyContent="center">
        <Button variant="black" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

BookingModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  bookingData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    guests: PropTypes.number,
  }),
};

export default BookingModal;
