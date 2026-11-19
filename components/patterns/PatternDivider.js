import { Box, Flex } from "@chakra-ui/react";

/** Small gold line-and-circle ornament above section headings. */
function PatternDivider(props) {
  return (
    <Flex
      justify={{ base: "center", lg: "flex-start" }}
      aria-hidden="true"
      {...props}
    >
      <Box w="71px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 7">
          <g fill="none" fillRule="evenodd">
            <path fill="#9E7F66" d="M15 3h56v1H15z" />
            <circle cx={3.5} cy={3.5} r={3} stroke="#9E7F66" />
          </g>
        </svg>
      </Box>
    </Flex>
  );
}

export default PatternDivider;
