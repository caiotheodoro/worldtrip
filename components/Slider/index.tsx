import { Box, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';


export const Slider = () => {


    return (
        <Box position={"relative"} marginBlockStart={20} marginBlockEnd={20} flexDir={"row"} display={"flex"}>
            <Swiper spaceBetween={30} hashNavigation={{
                "watchState": true
            }} pagination={{
                "clickable": true
            }} navigation={true}
                color='color.highlight'

            >
                <SwiperSlide data-hash="slide1"  >
                    <Link href="/continent#europe">
                        <Box as="a"  >
                            <img src="./continent/europe.png" alt="slide1" width={1700} height={"auto"} />
                            <Heading size="3xl" position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} color="white" fontWeight="bold" lineHeight={"100px"} textAlign={"center"}>Europa <br /><Heading size="md">O continente mais antigo.</Heading> </Heading>
                        </Box>
                    </Link>
                </SwiperSlide>

                <SwiperSlide data-hash="slide2">
                    <Link href="/continent#oceania">
                        <Box as="a"  >
                            <img src="./continent/oceania.png" alt="slide2" width={1700} height={"auto"} />
                            <Heading size="3xl" position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} color="white" fontWeight="bold" lineHeight={"100px"} textAlign={"center"}>Oceania <br /><Heading size="md">Para aventuras selvagens.</Heading> </Heading>
                        </Box>
                    </Link>
                </SwiperSlide>


                <SwiperSlide data-hash="slide2">
                    <Link href="/continent#africa">
                        <Box as="a"  >
                            <img src="./continent/africa.jpg" alt="slide3" width={1700} height={"auto"} />
                            <Heading size="3xl" position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} color="white" fontWeight="bold" lineHeight={"100px"} textAlign={"center"}>Africa <br /><Heading size="md">Para grandes descobertas.</Heading> </Heading>
                        </Box>
                    </Link>

                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <Link href="/continent#america">
                        <Box as="a"  >
                            <img src="./continent/america.jpg" alt="slide4" width={1700} height={"auto"} />
                            <Heading size="3xl" position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} color="white" fontWeight="bold" lineHeight={"100px"} textAlign={"center"}>America <br /><Heading size="md">Para muita loucura.</Heading> </Heading>
                        </Box>
                    </Link>

                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <Link href="/continent#asia">
                        <Box as="a"  >
                            <img src="./continent/asia.jpg" alt="slide5" width={1700} height={"auto"} />
                            <Heading size="3xl" position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} color="white" fontWeight="bold" lineHeight={"100px"} textAlign={"center"}>Asia <br /><Heading size="md">Para conhecer diferentes culturas.</Heading> </Heading>
                        </Box>
                    </Link>

                </SwiperSlide>
            </Swiper>
        </Box>
    )
}