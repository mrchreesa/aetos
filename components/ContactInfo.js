import { Box, Link, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { BUSINESS } from "../constants/business";

const linkProps = {
  variant: "basic",
  p: 0,
  fontWeight: "inherit",
  textTransform: "none",
  color: "inherit",
  _hover: { color: "white", textDecoration: "underline" },
};

export const AddressBlock = (props) => (
  <Box as="address" fontStyle="normal" lineHeight="1.7" {...props}>
    <Link href={BUSINESS.mapsUrl} isExternal {...linkProps}>
      {BUSINESS.street}
      <br />
      {BUSINESS.postcode}, {BUSINESS.city}
    </Link>
    <br />
    <Link href={BUSINESS.phoneHref} {...linkProps}>
      {BUSINESS.phoneDisplay}
    </Link>
  </Box>
);

export const HoursBlock = (props) => (
  <Box lineHeight="1.7" {...props}>
    <Text color="inherit" fontWeight="semibold" fontSize="inherit">
      Opening times
    </Text>
    {BUSINESS.hours.map(({ label, time }) => (
      <Text key={label} color="inherit" fontSize="inherit">
        {label}: {time}
      </Text>
    ))}
  </Box>
);

export const InstagramLink = ({ size = 32 }) => (
  <Link
    href={BUSINESS.instagram}
    isExternal
    aria-label="Aetos on Instagram (opens in a new tab)"
    variant="basic"
    p="2"
    color="brand.gold"
    display="inline-flex"
    transition="color 0.2s, transform 0.2s"
    _hover={{ color: "white", transform: "translateY(-1px)" }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
    </svg>
  </Link>
);

InstagramLink.propTypes = {
  size: PropTypes.number,
};

const ContactInfo = ({ showAddressFrom = "lg", showHoursFrom = "md" }) => (
  <Stack
    direction="row"
    spacing={{ base: 4, md: 8 }}
    align="center"
    color="brand.gold"
    fontSize="xs"
    letterSpacing="wide"
    textAlign="left"
  >
    <AddressBlock display={{ base: "none", [showAddressFrom]: "block" }} />
    <HoursBlock display={{ base: "none", [showHoursFrom]: "block" }} />
    <InstagramLink />
  </Stack>
);

ContactInfo.propTypes = {
  showAddressFrom: PropTypes.string,
  showHoursFrom: PropTypes.string,
};

export default ContactInfo;
