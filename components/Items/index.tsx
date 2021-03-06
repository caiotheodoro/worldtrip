import { Box, Flex, Heading, HStack, Image, Wrap } from "@chakra-ui/react"

export const Items = ({isDrawerSidebar}) => {
    return (
        <Flex w="100%" marginBlockStart={20} marginBlockEnd={20} maxW={1480} mx="auto" px="6" >
            
            <Wrap spacing='200px'  justify={"center"}>
           
         
            {
                        data.map(({image, title}) => (
                <Box alignItems={"center"} alignContent={"center"}   flexDirection={"row"} display={ isDrawerSidebar ? "flex" : "block"}>
                  {  !isDrawerSidebar && <Image src={image} w="100px" h="auto" /> }
                    
                  { isDrawerSidebar && <Box w="15px" h="15px" mr="5"  backgroundColor={"color.highlight"} borderRadius={"full"}></Box>}<Heading  size={!isDrawerSidebar ? "md" : 'lg'} my="24px" fontWeight="semibold" textAlign={"center"}>  {title}</Heading>
                </Box>
                        ))
                    }
            </Wrap>
        </Flex>
    )
}

const data = [
    {
        id: 1,
        image: 'cocktail 1.svg',
        title: 'vida noturna',

    },
    {
        id: 2,
        image: 'surf 1.svg',
        title: 'praia',
    },
    {
        id: 3,
        image: 'building 1.svg',
        title: 'moderno',
    },
    {
        id: 4,
        image: 'museum 1.svg',
        title: 'clássico',
    },
    {
        id: 5,
        image: 'earth 1.svg',
        title: 'e mais...',
    },

  

]