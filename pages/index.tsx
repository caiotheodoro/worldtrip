import { Box, Divider, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TripSection } from '../components/TripSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Flex 
     
      flexDirection="column"
    >
      <Header />
      <Banner />
      <TripSection />
    </Flex>
  )
}
