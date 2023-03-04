import {
  Box,
  Button,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import fish from "../assets/homepage/fish.jpg";
import salad from "../assets/homepage/salad.jpg";
import burger from "../assets/homepage/burger.jpg";
import meze from "../assets/homepage/meze.jpg";
import { maxScreenWidth } from "../constants/style";

import HighlightsMenu from "./HighlightsMenu";
import PatternDivider from "./patterns/PatternDivider";

const HighlightsContainer = () => {
  return (
    <Box
      bg="primary.codgray"
      w="full"
      role="region"
      aria-label="Highlights section"
    >
      <Flex
        justify="center"
        align="center"
        direction={{ base: "column", lg: "row" }}
        pt={{ base: "30px", md: "50px", lg: "120px", xl: "180px" }}
        pb={{ base: "70px", md: "90px", lg: "120px" }}
        px={{ base: 6, lg: 16, xl: 0 }}
        maxW={maxScreenWidth}
        mx="auto"
      >
        <Flex
          textAlign={{ base: "center", xl: "left" }}
          maxW="445px"
          mx={{ base: "auto", xl: 0 }}
          mr={{ base: "auto", lg: "20px" }}
          direction="column"
          align={{ base: "center", xl: "flex-start" }}
          mb="60px"
        >
          <PatternDivider paddingY={{ base: "45px", lg: "0" }} />
          <Heading
            as="h2"
            variant="h2"
            color="white"
            maxW={{ sm: "350px" }}
            mt={{ lg: "45px" }}
          >
            A few highlights from our menu
          </Heading>
          <Text color="white" textStyle="body2">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our favourites.
          </Text>
          <Button
            variant="dark"
            display={{ base: "none", lg: "inline-flex" }}
            w="fit-content"
            mt="20"
          >
            <a href="/menu.pdf" target="_blank">
              FULL MENU
            </a>
          </Button>
        </Flex>

        <VStack
          spacing="4"
          divider={<StackDivider borderColor="#272727" />}
          maxW="540px"
          mx="auto"
          ml={{ xl: "125px" }}
          mt={{ xl: "50px" }}
        >
          <HighlightsMenu
            title="Seared Seabass"
            text="Indulge in the flavours of the Mediterranean with our sea bass, accompanied with roasted potatoes and broccoli"
            image={fish}
          />
          <HighlightsMenu
            title="Beef Burger"
            text="The ultimate comfort food, our classic beef burger featuring a flame-grilled patty, melted cheese and fresh veggies for the ultimate burger experience"
            image={burger}
          />
          <HighlightsMenu
            title="Mix Starters"
            text="A medley of tantalising flavours featuring creamy tzatziki, hummus, tirokafteri, olives and giant beans, served with fresh pitta bread"
            image={meze}
          />
          <HighlightsMenu
            title="Greek Salad"
            text="Experience the fresh and vibrant flavours of Greece with our signature Greek salad"
            image={salad}
          />
        </VStack>
        <Button
          variant="dark"
          display={{ base: "inline-flex", lg: "none" }}
          w="fit-content"
          mt="20"
        >
          <a href="/menu.pdf" target="_blank">
            FULL MENU
          </a>
        </Button>
      </Flex>
    </Box>
  );
};

export default HighlightsContainer;
