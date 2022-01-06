import { Flex, Image } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Flex
            w="100vw"
            h="140px"
            align="center"
            justify="center"
        >
            <Image src='Logo.svg' alt='WorldTrip' w="184px" />
        </Flex>
    )
}