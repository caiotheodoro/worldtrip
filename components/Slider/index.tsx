import { Box, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';


export const Slider = ({isDrawerSidebar}) => {


    return (
        <Box position={"relative"} marginBlockStart={20} marginBlockEnd={20} flexDir={"row"} display={"flex"}>
            <Swiper spaceBetween={30} hashNavigation={{
                "watchState": true
            }} pagination={{
                "clickable": true
            }} navigation={true}
                color='color.highlight'

            >
                {
                    data.map((item) => (

                <SwiperSlide data-hash={item.datahash}  >
                    <Link href={item.href}>
                        <Box as="a">
                            <img src={item.img} alt={item.datahash} width={1900} height={"500px"} style={{objectFit:'fill'}} />
                            <Heading size="3xl" position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} color="white" fontWeight="bold" lineHeight={"100px"} textAlign={"center"}>{item.title} <br /><Heading size="md">{item.description}</Heading> </Heading>
                        </Box>
                    </Link>
                </SwiperSlide>
                    ))}

           
            </Swiper>
        </Box>
    )
    
}

const data = [
    {
        id: 1,
        datahash: "slide1",
        img: "./continent/europe.png",
        href: "/continent#europe",
        title: "Europa",
        description: "O continente mais antigo."

    },
    {
        id: 2,
        datahash: "slide2",
        img: "./continent/oceania.png",
        href: "/continent#oceania",
        title: "Oceania",
        description: "Para aventuras selvagens."
    },
    {
        id: 3,
        datahash: "slide3",
        img: "./continent/africa.jpg",
        href: "/continent#africa",
        title: "Africa",
        description: "Para grandes descobertas."
    },
    {
        id: 4,
        datahash: "slide4",
        img: "./continent/america.jpg",
        href: "/continent#america",
        title: "America",
        description: "Para muita loucura."
    },
    {
        id: 5,
        datahash: "slide5",
        img: "./continent/asia.jpg",
        href: "/continent#asia",
        title: "Asia",
        description: "Para conhecer diferentes culturas."
    }

]