import { Box, Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import EventsContainer from "../components/EventsContainer";
import FadeInOnScroll from "../components/FadeInOnScroll";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HighlightsContainer from "../components/HighlightsContainer";
import MainContainer from "../components/MainContainer";
import Maps from "../components/Maps";
import ReservationBanner from "../components/ReservationBanner";

export default function Home() {
  return (
    <Box>
      <NextSeo
        title="Home"
        description="The perfect place to experience the rich flavours and hospitality of Greece."
      />
      <Box role="main">
        <Flex direction="column" align="center">
          <Hero />
          <FadeInOnScroll>
            <MainContainer zIndex={1000} />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <HighlightsContainer />
          </FadeInOnScroll>
        </Flex>

        <FadeInOnScroll>
          <EventsContainer />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <ReservationBanner />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Maps />
        </FadeInOnScroll>
      </Box>
      <Footer />
    </Box>
  );
}
