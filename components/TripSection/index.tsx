import { Box, Flex, Heading } from "@chakra-ui/react"
import { Items } from "../Items"




import SwiperCore, {
    Keyboard,Pagination,Navigation
  } from 'swiper';
import { Slider } from "../Slider";
  

  // install Swiper modules
  SwiperCore.use([Keyboard,Pagination,Navigation]);

export const TripSection = () => {
    return (
        <Box w="80%" alignContent={"center"} alignItems={"center"} alignSelf={"center"}>
            <Items />

            <Flex alignItems={"center"} alignContent={"center"} flexDir={"column"}>
                <Box   h={"2px"} alignSelf={"center"} w="160px" background={"color.dark"} />
                <br/>
                <br/>
                <br/>
                <Box >
                    <Heading textAlign={"center"} fontWeight="medium" lineHeight={"54px"} >
                        Vamos nessa? <br />
                        Então escolha seu continente

                    </Heading>
                </Box>
            </Flex>

            <Slider />

        </Box>

    )
}