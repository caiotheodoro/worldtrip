import { Box, Flex, Heading, HStack, Image } from "@chakra-ui/react"
import { Items } from "../Items"

export const TripSection = () => {
    return (
        <Box w="100%">
            <Items />

            <Flex alignItems={"center"} alignContent={"center"} flexDir={"column"}>
                <Box h={"2px"} alignSelf={"center"} w="160px" background={"color.dark"} />

                <Box mt="20">
                    <Heading textAlign={"center"} fontWeight="medium" lineHeight={"54px"} >
                        Vamos nessa? <br/>
                        Então escolha seu continente

                    </Heading>
                </Box>
            </Flex>
        </Box>
    )
}