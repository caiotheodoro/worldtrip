import { Box, Flex, Image } from "@chakra-ui/react"
import Link from "next/link"

export const Header = ({hasBack}) => {
    return (
        <Flex
            w="100%"
            h={["140px","120px"]}
            align="center"
            justify="center"
        >
            { hasBack &&
                <Link href={"/"}  >
                    <Image cursor={"pointer"} src='back.svg' alt='Voltar' position={"absolute"} left={"10%"} />
                </Link>

            }
            <Image src='Logo.svg' alt='WorldTrip' w="184px" />
        </Flex>
    )
}