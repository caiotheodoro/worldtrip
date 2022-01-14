import { Box, Divider, Flex, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TripSection } from '../components/TripSection'
import styles from '../styles/Home.module.css'

export default function Home() {

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
});
useEffect (() => {
  
  console.log(isDrawerSidebar)
}, [isDrawerSidebar ])
  return (
    <Flex 
     
      flexDirection="column"
    >
      <Header hasBack={false}  />
      <Banner isDrawerSidebar={isDrawerSidebar} />
      <TripSection isDrawerSidebar={isDrawerSidebar} />
    </Flex>
  )
}
