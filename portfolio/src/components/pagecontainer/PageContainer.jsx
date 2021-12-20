import {Container, Heading, Grid, GridItem, Center, VStack, Text, chakra, propNames} from '@chakra-ui/react';

function PageContainer(props) {
    return (
    <div style={props.style}>
    <Container cid={props.id} h="100vh">
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
            <div id={props.id} style={{height: "100vh"}}>
                {props.children}
            </div>
        </div>
        )
}

export {PageContainer, PageContainerNonC}