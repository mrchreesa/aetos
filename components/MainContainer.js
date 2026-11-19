import { Box, Flex } from "@chakra-ui/react";

import storefront from "../assets/homepage/aetos-front.jpg";
import food from "../assets/homepage/coffee-lunch.webp";

import MainBox from "./MainBox";

const MainContainer = (props) => (
  <Flex
    as="section"
    aria-label="About us"
    w="full"
    direction="column"
    py={{ base: 16, lg: 0 }}
    pb={{ lg: 32 }}
    bg="white"
    pos="relative"
    {...props}
  >
    <MainBox
      isFirst
      imageSide="left"
      image={storefront}
      alt="The front of Aetos Greek Taverna on Seven Sisters Road at night"
      title="Welcome to our family-owned taverna"
    >
      <p>
        We are a family who share a love for what we do, and we take pride in
        everything we serve. Whether you&rsquo;re after a coffee and breakfast,
        Greek mama&rsquo;s home cooking or a glass of good wine, we&rsquo;ve got
        you covered.
      </p>
      <p>
        From our friendly service to our attention to detail, we want everyone
        who walks through our doors to feel at home. We look forward to
        welcoming you.
      </p>
    </MainBox>

    <Box h={{ base: 16, md: 24, lg: 32 }} />

    <MainBox
      imageSide="right"
      isCutout
      image={food}
      alt="Coffee, breakfast and lunch dishes at Aetos"
      title="Start your day off right"
    >
      <p>
        Join us for a delicious breakfast and freshly brewed coffee, or stay for
        a satisfying lunch or dinner. Our menu runs from Greek moussaka and
        salads to juicy burgers and a full-of-flavour sea bass, so there&rsquo;s
        something for everyone.
      </p>
      <p>
        Our ingredients are always fresh and of the highest quality. Come and
        taste the difference.
      </p>
    </MainBox>
  </Flex>
);

export default MainContainer;
