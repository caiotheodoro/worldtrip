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
            <Flex w="100%" my="20" maxW={1480} mx="auto" px="6" marginBlockEnd={20}>
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

                                <Heading size="3xl" color="color.highlight" fontWeight="semibold" textAlign="center">
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
            <Flex w="100%" my="20" maxW={1480} mx="auto" px="6">
                <Box w="100%" marginBlockEnd={20}>
                    <Heading size="xl" color="color.dark" fontWeight="medium" >
                        Cidades +100
                    </Heading>
                </Box>
                <HStack spacing={20}>
                    <Box w="300px" h="340px">
                        <Box>

                        </Box>
                        <Box >

                        </Box>
                    </Box>
                    <Box w="300px" h="340px" borderRadius={6}>
                        <Box w="100%" h="59%">
                            <Image src='./cards/london.png' alt='Cidade' w="100%" h="auto" />
                        </Box>
                        <Box borderRadius={6} w="100%" h="40%" borderBlockEnd={"1px solid #FFBA08"} borderLeft={"1px solid #FFBA08"} borderRight={"1px solid #FFBA08"}  display={"flex"} >
                            <Flex w="100%" mx="auto" px="6" justifyContent={"space-between"} justify={"center"} alignItems={"center"}>
                                <Flex>
                                    <Heading size="lg" color="color.dark" fontWeight="semibold" >
                                        Londres
                                        <Heading size="md" color="color.info" fontWeight="semibold" >
                                            Reino Unido

                                        </Heading>
                                    </Heading>
                                </Flex>
                                <Flex>
                                    <Image src='./cards/london1.png' alt='Flag' w="35px" h="auto" />
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </HStack>
            </Flex>
        </>
    )
}