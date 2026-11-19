import { Box } from "@chakra-ui/react";

/** Decorative stripe block used beside photos. Purely presentational. */
const PatternLines = (props) => (
  <Box
    pos="absolute"
    w="160px"
    h="76px"
    bgImage="url(/images/pattern-lines.svg)"
    bgRepeat="no-repeat"
    bgSize="contain"
    pointerEvents="none"
    aria-hidden="true"
    {...props}
  />
);

export default PatternLines;
