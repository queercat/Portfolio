import {Container, Heading, Text, Center, VStack} from '@chakra-ui/react'
import './card.css'

function Card(props) {
    return (
        <Container className='card'>
            <Center h="45vh">
                <VStack>
                {props.children}
                <Heading>{props.text}</Heading>
                <Text>{props.description}</Text>
                </VStack>
            </Center>
        </Container>
    )
}

export {Card}