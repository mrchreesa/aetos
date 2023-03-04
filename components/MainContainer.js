import { Box, Flex } from "@chakra-ui/react";

import placeDesktop from "../assets/homepage/aetos-front.jpeg";
import placeMobile from "../assets/homepage/aetos-front.jpeg";
import placeTablet from "../assets/homepage/aetos-front.jpeg";
import foodDesktop from "../assets/homepage/coffee-lunch.png";
import foodMobile from "../assets/homepage/coffee-lunch.png";
import foodTablet from "../assets/homepage/coffee-lunch.png";

import MainBox from "./MainBox";

const MainContainer = () => {
  return (
    <Flex
      w="full"
      direction="column"
      py={{ base: 8, sm: 0 }}
      bg="white"
      role="region"
      aria-label="Main container"
    >
      <MainBox
        isFirst={true}
        imageSide="left"
        imageDesktop={placeDesktop}
        imageMobile={placeMobile}
        imageTablet={placeTablet}
        alt="Enjoyable place image"
        imageBackground={true}
        title="Welcome to our family-owned business!"
        text=" We are a team of family members who share a love for what we do. We take pride in offering high-quality products. Whether you're looking for a cup of coffee and breakfast, Greek mama’s food, or a delicious glass of wine, we've got you covered. From our friendly customer service to our attention to detail, we provide a great experience for everyone who walks through our doors. Thank you for considering us for your needs. We look forward to serving you."
      />
      <Box h={{ base: "0", sm: "90px", md: "130px", xl: "120px" }} />
      <MainBox
        imageSide="right"
        imageDesktop={foodDesktop}
        imageMobile={foodMobile}
        imageTablet={foodTablet}
        alt="Locally sourced food"
        imageBackground={true}
        title="The most locally sourced food"
        text="Start your day off right with our delicious breakfast options and freshly brewed coffee or
Join us for a satisfying lunch or dinner experience! Our menu features a variety of mouth-watering dishes.
From a Greek Moussaka and Salad to juicy burgers and a full of flavour sea bass, we offer something for everyone. Our ingredients are always fresh and of the highest quality, ensuring that each dish is bursting with flavour. Come visit us for breakfast, lunch or dinner and taste the difference in our delicious and satisfying dishes!
"
      />
    </Flex>
  );
};

export default MainContainer;
