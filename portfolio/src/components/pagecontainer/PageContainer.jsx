import {Container, Heading, Grid, GridItem, Center, VStack, Text, chakra, propNames} from '@chakra-ui/react';

function PageContainer(props) {
    return (
    <div style={props.style}>
    <Container id={props.id} h="100vh">
        <Center h="100vh">
            <VStack>
                {props.children}
            </VStack>
        </Center>
    </Container>
    </div>
    )
}

function PageContainerNonC(props) {
    return (
        <div style={props.style}>
        <Container id={props.id} h="100vh">
            {props.children}
        </Container>
        </div>
        )
}

export {PageContainer, PageContainerNonC}