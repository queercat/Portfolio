import {Container, Heading, Grid, GridItem, Center, VStack, Text, chakra, propNames} from '@chakra-ui/react';

function PageContainer(props) {
    return (
    <div style={props.style}>
    <Container h="100vh">
        <Center h="100vh">
            <VStack>
                {props.children}
            </VStack>
        </Center>
    </Container>
    </div>
    )
}

export {PageContainer}