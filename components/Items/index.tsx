import { Box, Flex, Heading, HStack, Image } from "@chakra-ui/react"

export const Items = () => {
    return (
        <Flex w="100%" marginBlockStart={20} maxW={1480} mx="auto" px="6" >
            <HStack spacing={"200px"}
                mx={"8"}
                pr={"8"}
                justify={"space-between"}
                py="1">
                <Box alignItems={"center"} alignContent={"center"} >
                    <Image src={'cocktail 1.svg'} w="100px" h="auto" />
                    <Heading size="md" my="24px" fontWeight="semibold" textAlign={"center"}>vida noturna</Heading>
                </Box>
                <Box >
                    <Image src={'surf 1.svg'} w="100px" h="auto" />
                    <Heading size="md" my="24px" fontWeight="semibold" textAlign={"center"}>praia </Heading>
                </Box>
                <Box >
                    <Image src={'building 1.svg'} w="100px" h="auto" />
                    <Heading size="md" my="24px" fontWeight="semibold" textAlign={"center"}>moderno </Heading>
                </Box>
                <Box >
                    <Image src={'museum 1.svg'} w="100px" h="auto" />
                    <Heading size="md" my="24px" fontWeight="semibold" textAlign={"center"}>clássico </Heading>
                </Box>
                <Box >
                    <Image src={'earth 1.svg'} w="100px" h="auto" />
                    <Heading size="md" my="24px" fontWeight="semibold" textAlign={"center"}>e mais... </Heading>
                </Box>
            </HStack>
        </Flex>
    )
}