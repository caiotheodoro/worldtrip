import { Box, Flex, Heading, HStack, Image, Wrap } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Header } from "../../components/Header"


const data = [
    {
        nameContinent: 'Europa',
        description: ' A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        countries: '50',
        languagues: '60',
        numCities: '27',
        banner: './banner/Europe.png',
        cities: [
            {
                name: 'Londres',
                country: 'Reino Unido',
                url: './cards/london.png',
                flag: './cards/london1.png',
            },
            {
                name: 'Roma',
                country: 'Italia',
                url: './cards/rome.png',
                flag: './cards/rome1.png',
            },
            {
                name: 'Amsterdan',
                country: 'Holanda',
                url: './cards/amsterdan.png',
                flag: './cards/amsterdan1.png',
            },
            {
                name: 'Paris',
                country: 'França',
                url: './cards/paris.png',
                flag: './cards/paris1.png',
            },
            {
                name: 'Praga',
                country: 'Holanda',
                url: './cards/praga.png',
                flag: './cards/praga1.png',
            },
        ]
    },
    {
        nameContinent: 'Oceania',
        description: ' A Oceania é o menor continente da Terra, sendo em maior parte composta pela Austrália, principal e mais desenvolvido país da região. A Oceania é um continente localizado a sudeste da Ásia, compreendendo um conjunto de ilhas somado à Austrália, essa última considerada como uma massa continental chamada de “Australásia”.',
        countries: '14',
        languagues: '41',
        numCities: '15',
        banner: './banner/Oceania.jpg',
        cities: [
            {
                name: 'Londres',
                country: 'Reino Unido',
                url: './cards/london.png',
                flag: './cards/london1.png',
            },
            {
                name: 'Roma',
                country: 'Italia',
                url: './cards/rome.png',
                flag: './cards/rome1.png',
            },
            {
                name: 'Amsterdan',
                country: 'Holanda',
                url: './cards/amsterdan.png',
                flag: './cards/amsterdan1.png',
            },
            {
                name: 'Paris',
                country: 'França',
                url: './cards/paris.png',
                flag: './cards/paris1.png',
            },
            {
                name: 'Praga',
                country: 'Holanda',
                url: './cards/praga.png',
                flag: './cards/praga1.png',
            },
        ]
    },
    {
        nameContinent: 'Africa',
        description: ' África é o continente localizado ao sul da Europa e sudoeste da Ásia, banhado pelo Oceano Atlântico. África é um dos seis continentes do mundo, sendo o terceiro maior em extensão territorial. O território estende-se por mais de 30 milhões de km², ocupando, aproximadamente, 20% da área continental da Terra.',
        countries: '88',
        languagues: '201',
        numCities: '23',
        banner: './banner/Africa.jpg',
        cities: [
            {
                name: 'Londres',
                country: 'Reino Unido',
                url: './cards/london.png',
                flag: './cards/london1.png',
            },
            {
                name: 'Roma',
                country: 'Italia',
                url: './cards/rome.png',
                flag: './cards/rome1.png',
            },
            {
                name: 'Amsterdan',
                country: 'Holanda',
                url: './cards/amsterdan.png',
                flag: './cards/amsterdan1.png',
            },
            {
                name: 'Paris',
                country: 'França',
                url: './cards/paris.png',
                flag: './cards/paris1.png',
            },
            {
                name: 'Praga',
                country: 'Holanda',
                url: './cards/praga.png',
                flag: './cards/praga1.png',
            },
        ]
    },
    {
        nameContinent: 'America',
        description: ' América é o maior continente em extensão norte–sul localizado no Hemisfério Ocidental e compreende uma área total de 42.189.120 km2. O continente é habitado por cerca de 902.892.047 pessoas, e nele são faladas diversas línguas, como espanhol, inglês, português, francês, neerlandês e línguas nativas.',
        countries: '102',
        languagues: '207',
        numCities: '42',
        banner: './banner/America.jpg',
        cities: [
            {
                name: 'Londres',
                country: 'Reino Unido',
                url: './cards/london.png',
                flag: './cards/london1.png',
            },
            {
                name: 'Roma',
                country: 'Italia',
                url: './cards/rome.png',
                flag: './cards/rome1.png',
            },
            {
                name: 'Amsterdan',
                country: 'Holanda',
                url: './cards/amsterdan.png',
                flag: './cards/amsterdan1.png',
            },
            {
                name: 'Paris',
                country: 'França',
                url: './cards/paris.png',
                flag: './cards/paris1.png',
            },
            {
                name: 'Praga',
                country: 'Holanda',
                url: './cards/praga.png',
                flag: './cards/praga1.png',
            },
        ]
    },
    {
        nameContinent: 'Asia',
        description: ' A Ásia é o maior continente em extensão territorial do mundo. A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial.',
        countries: '92',
        languagues: '303',
        numCities: '71',
        banner: './banner/Asia.jpg',
        cities: [
            {
                name: 'Londres',
                country: 'Reino Unido',
                url: './cards/london.png',
                flag: './cards/london1.png',
            },
            {
                name: 'Roma',
                country: 'Italia',
                url: './cards/rome.png',
                flag: './cards/rome1.png',
            },
            {
                name: 'Amsterdan',
                country: 'Holanda',
                url: './cards/amsterdan.png',
                flag: './cards/amsterdan1.png',
            },
            {
                name: 'Paris',
                country: 'França',
                url: './cards/paris.png',
                flag: './cards/paris1.png',
            },
            {
                name: 'Praga',
                country: 'Holanda',
                url: './cards/praga.png',
                flag: './cards/praga1.png',
            },
        ]
    },
]

export default function continent() {


    const [index, setIndex] = useState(null)
    useEffect(() => {
        async function getIndex() {
            let urlData = window.location.hash.split("#")[1]
            if (urlData == 'europe') {
                setIndex(0)
            }
            if (urlData == 'oceania') {
                setIndex(1)
            }
            if (urlData == 'africa') {
                setIndex(2)
            }
            if (urlData == 'america') {
                setIndex(3)
            }
            if (urlData == 'asia') {
                setIndex(4)
            }
        }
        getIndex()
    }, [])

    console.log()
    return (
        <>
            <Box marginBlockEnd={20}>
                <Header hasBack={true} />
                <Flex position={"relative"}>
                    <Image src={data[index]?.banner} alt='Continent' w="100%" />
                    <Heading position={"absolute"} size="2xl" color="white" fontWeight="semibold" lineHeight="60px" textAlign="center" mt="20px" left="10%" bottom="10%">
                        {data[index]?.nameContinent}
                    </Heading>
                </Flex>
            </Box>
            <Flex w="100%" my="20" maxW={1480} mx="auto" px="6" marginBlockEnd={20}>
                <Box w="50%" my="20" mx="auto" px="6">
                    <Heading size="lg" color="color.dark" fontWeight="regular" lineHeight="40px" textAlign="justify" mt="20px" left="10%" bottom="10%">
                        {data[index]?.description}
                    </Heading>
                </Box>
                <Box w="50%" h="auto" justifyContent={"center"} alignSelf={"center"} my="20" mx="auto" ml="20" px="6">
                    <HStack spacing={20}>
                        <Box>
                            <Heading size="3xl" color="color.highlight" fontWeight="semibold" textAlign="center">
                                {data[index]?.countries}
                                <Heading size="lg" color="color.dark" fontWeight="semibold" textAlign="center">
                                    países
                                </Heading>
                            </Heading>

                        </Box>
                        <Box>
                            <Heading size="3xl" color="color.highlight" fontWeight="semibold" textAlign="center">
                                {data[index]?.languagues}
                                <Heading size="lg" color="color.dark" fontWeight="semibold" textAlign="center">
                                    línguas
                                </Heading>
                            </Heading>

                        </Box>
                        <Box w="100%" display={"flex"} flexDir={"row"}>
                            <Box w="90%">

                                <Heading size="3xl" color="color.highlight" fontWeight="semibold" textAlign="center">
                                    {data[index]?.numCities}
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
            <Box w="100%" my="20" maxW={1480} mx="auto" px="6">
                <Box w="100%" marginBlockEnd={20}>
                    <Heading size="xl" color="color.dark" fontWeight="medium" >
                        Cidades +100
                    </Heading>
                </Box>
                <Box w="100%">
                    <Wrap spacing='75px' >
                        {
                            data[index]?.cities.map((item, index) => (
                                <Box w="300px" h="340px" borderRadius={6} marginBlockEnd={20}>
                                    <Box w="100%" h="59%">
                                        <Image src={item.url} alt='Cidade' w="100%" h="auto" />
                                    </Box>
                                    <Box borderRadius={6} w="100%" h="40%" borderBlockEnd={"1px solid #FFBA08"} borderLeft={"1px solid #FFBA08"} borderRight={"1px solid #FFBA08"} display={"flex"} >
                                        <Flex w="100%" mx="auto" px="6" justifyContent={"space-between"} justify={"center"} alignItems={"center"}>
                                            <Flex>
                                                <Heading size="lg" color="color.dark" fontWeight="semibold" >
                                                    {item.name}
                                                    <Heading size="md" color="color.info" fontWeight="semibold" >
                                                        {item.country}

                                                    </Heading>
                                                </Heading>
                                            </Flex>
                                            <Flex>
                                                <Image src={item.flag} alt='Flag' w="35px" h="auto" />
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </Box>
                            ))
                        }
                       


                    </Wrap>
                </Box>
            </Box>
        </>
    )
}

