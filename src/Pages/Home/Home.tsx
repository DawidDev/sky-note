import React from 'react'
import Jumbutron from '../../components/Jumbutron/Jumbutron'
import FeatureBox from '../../components/FeatureBox/FeatureBox'
import Advantages from '../../components/Advantages/Advantages'
import { Flex, Heading, VStack } from '@chakra-ui/react'

const Home = () => {
    return(
        <>
            <Jumbutron />
            <Flex flexDir="column">
            <FeatureBox />
            <Heading textAlign="center" mb="42px">Zapisuj swoje obserwacje </Heading>
            <Advantages />
            </Flex>
        </>
    )
}

export default Home