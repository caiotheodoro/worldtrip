import { Box, Flex, Heading, Image } from "@chakra-ui/react"

export const Banner = () => {
    return (
        <Flex
          w="100%"
        >
            <Box
                bgImage={'Background.png'}
                w="100%" h="365px"
                bgPosition="center"
                bgSize={'cover'}
            >
                <Flex w="100%" my="20" maxW={1480} mx="auto" px="6" >
                    <Flex w="100%" justify={"space-between"} position={"relative"}>
                        <Flex flexDir={"column"}>
                            <Heading size="xl" color="white" letterSpacing={1} lineHeight={"60px"} fontWeight="medium">5 Continentes, <br /> infinitas possibilidades. <br /></Heading>
                            <Heading size="md" my="20px" color="color.info" letterSpacing={1} fontWeight="regular">Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.</Heading>
                        </Flex>
                        <Flex justify={"flex-end"}>
                            <Image src={'Airplane.svg'} h="auto" position={"absolute"} bottom={"-120px"} />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}