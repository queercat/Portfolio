import {PageContainer, PageContainerNonC} from '../pagecontainer/PageContainer'
import {Card} from '../card/Card'
import {Grid, Box, Text, Center, Heading} from '@chakra-ui/react'
import {VoxelTemplate} from '../voxel/Voxel'


function About() {
    return (<div>
        <PageContainerNonC style={{backgroundColor: "#FFFFFF"}}>            
            <Center height="100vh">
                <Grid templateColumns='repeat(2, 1fr)' gap='6'>
                    <Card text="Music" description="is a huge part of my life"><VoxelTemplate color="#FFFFFF" rot={[45, 90, 0]} trans={[0, 0, 0]} animRot={[0.01, 0.01, 0.01]} width=".25" height=".25" baseURL="/models/keyboard"/></Card>
                    <Card text="Hello World" description="Lorem ipsum dolor sit amet"></Card>
                    <Card text="Hello World" description="Lorem ipsum dolor sit amet"></Card>
                    <Card text="Hello World" description="Lorem ipsum dolor sit amet"></Card>
                </Grid>
            </Center>
        </PageContainerNonC>
    </div>
    )
}

export {About}