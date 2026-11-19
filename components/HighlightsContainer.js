import { Box, Flex, Heading, Link, StackDivider, Text, VStack } from "@chakra-ui/react";

import burger from "../assets/homepage/burger.jpg";
import fish from "../assets/homepage/fish.jpg";
import meze from "../assets/homepage/meze.jpg";
import salad from "../assets/homepage/salad.jpg";
import { maxScreenWidth } from "../constants/style";

import HighlightsMenu from "./HighlightsMenu";
import PatternDivider from "./patterns/PatternDivider";

const DISHES = [
  {
    title: "Seared Seabass",
    image: fish,
    text: "Indulge in the flavours of the Mediterranean with our sea bass, served with roasted potatoes and broccoli.",
  },
  {
    title: "Beef Burger",
    image: burger,
    text: "The ultimate comfort food: a flame-grilled patty, melted cheese and fresh veggies.",
  },
  {
    title: "Mixed Starters",
    image: meze,
    text: "A medley of creamy tzatziki, hummus, tirokafteri, olives and giant beans, served with warm pitta.",
  },
  {
    title: "Greek Salad",
    image: salad,
    text: "The fresh, vibrant flavours of Greece in our signature horiatiki salad.",
  },
];

const MenuLink = (props) => (
  <Link
    href="/menu.pdf"
    isExternal
    variant="dark"
    display="inline-flex"
    w="fit-content"
    aria-label="Full menu (PDF, opens in a new tab)"
    {...props}
  >
    Full menu
  </Link>
);

const HighlightsContainer = () => (
  <Box as="section" bg="primary.codgray" w="full" aria-labelledby="highlights-heading">
    <Flex
      justify="space-between"
      align={{ base: "center", lg: "flex-start" }}
      direction={{ base: "column", lg: "row" }}
      gridGap={{ base: 14, lg: 16 }}
      pt={{ base: "80px", lg: "140px", xl: "180px" }}
      pb={{ base: "80px", lg: "120px" }}
      px={{ base: 6, lg: 10, xl: 0 }}
      maxW={{ lg: "960px", xl: maxScreenWidth }}
      mx="auto"
    >
      <Flex
        direction="column"
        align={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "left" }}
        maxW={{ base: "445px", lg: "340px", xl: "445px" }}
        pos={{ lg: "sticky" }}
        top={{ lg: "80px" }}
      >
        <PatternDivider mb={{ base: 8, lg: 10 }} />
        <Heading as="h2" id="highlights-heading" variant="h2" color="white">
          A few highlights from our menu
        </Heading>
        <Text color="whiteAlpha.800" textStyle="body2">
          We cater for all dietary requirements, but here&rsquo;s a glimpse at
          some of our favourites.
        </Text>
        <MenuLink mt="12" display={{ base: "none", lg: "inline-flex" }} />
      </Flex>

      <VStack
        as="ul"
        m="0"
        p="0"
        spacing="8"
        divider={<StackDivider borderColor="#272727" />}
        maxW="560px"
        w="full"
      >
        {DISHES.map((dish) => (
          <HighlightsMenu key={dish.title} {...dish} />
        ))}
      </VStack>

      <MenuLink display={{ base: "inline-flex", lg: "none" }} />
    </Flex>
  </Box>
);

export default HighlightsContainer;
