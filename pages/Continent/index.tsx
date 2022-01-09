import { Box, Flex, Heading, HStack, Image } from "@chakra-ui/react"
import { Header } from "../../components/Header"

export default function continent() {
    return (
        <>
            <Box marginBlockEnd={20}>
                <Header hasBack={true} />
                <Flex position={"relative"}>
                    <Image src='./banner/Europe.png' alt='Continent' w="100%" />
                    <Heading position={"absolute"} size="2xl" color="white" fontWeight="semibold" lineHeight="60px" textAlign="center" mt="20px" left="10%" bottom="10%">
                        Europa
                    </Heading>
                </Flex>
            </Box>
            <Flex w="100%" my="20" maxW={1480} mx="auto" px="6">
                <Box w="50%" my="20" mx="auto" px="6">
                    <Heading size="lg" color="color.dark" fontWeight="regular" lineHeight="40px" textAlign="justify" mt="20px" left="10%" bottom="10%">
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Heading>
                </Box>
                <Box w="50%" h="auto" justifyContent={"center"} alignSelf={"center"} my="20" mx="auto" ml="20" px="6">
                    <HStack spacing={20}>
                        <Box>
                            <Heading size="3xl" color="color.highlight" fontWeight="semibold" textAlign="center">
                                50
                                <Heading size="lg" color="color.dark" fontWeight="semibold" textAlign="center">
                                    países
                                </Heading>
                            </Heading>

                        </Box>
                        <Box>
                            <Heading size="3xl" color="color.highlight" fontWeight="semibold" textAlign="center">
                                60
                                <Heading size="lg" color="color.dark" fontWeight="semibold" textAlign="center">
                                    línguas
                                </Heading>
                            </Heading>

                        </Box>
                        <Box w="100%" display={"flex"} flexDir={"row"}>
                            <Box w="90%">

                            <Heading  size="3xl" color="color.highlight" fontWeight="semibold" textAlign="center">
                                27
                                <Heading size="lg" color="color.dark" fontWeight="semibold" textAlign="center">
                                    cidades +100
                                </Heading>

                            </Heading>
                            </Box>
                            <Box w="10%" alignSelf={"end"} marginBlockEnd={"10px"}>
                                <Image src='info.svg' alt='Flag' w="15px" />
                            </Box>
                        </Box>

                    </HStack>
                </Box>
            </Flex>
        </>
    )
}