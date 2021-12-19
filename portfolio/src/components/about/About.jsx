import {PageContainer, PageContainerNonC} from '../pagecontainer/PageContainer'
import {Card} from '../card/Card'
import {Grid, Box, Text, Center, Heading} from '@chakra-ui/react'
import {VoxelTemplate} from '../voxel/Voxel'


function About() {
    return (<div>
        <PageContainerNonC id="about" style={{backgroundColor: "white"}}>            
            <Center height="100vh">
                <Grid templateColumns='repeat(2, 1fr)' gap='6'>
                    <Card text="Music" description="is a huge part of my life and has allowed me to express myself and think in a variety of ways."><VoxelTemplate color="#FFFFFF" rot={[45, 90, 0]} trans={[0, 0, 0]} animRot={[0.00, 0.005, 0.00]} width=".25" height=".25" baseURL="/models/keyboard"/></Card>
                    <Card text="Video Games" description="led me into the world of computers and programming."><VoxelTemplate color="#FFFFFF" rot={[45, 0, 0]} trans={[0, 0, 0]} animRot={[0.01, 0.0, 0.00]} width=".25" height=".25" baseURL="/models/controller"/></Card>
                    <Card text="Home Town" description="being from the beautifully green town of Eugene, Oregon has helped me meet some amazing individuals."><VoxelTemplate color="#FFFFFF" rot={[90, 0, 0]} trans={[0, -3, 0]} animRot={[0.00, 0.00, -0.001]} width=".25" height=".25" baseURL="/models/oregon"></VoxelTemplate></Card>
                    <Card text="Hello World" description="Lorem ipsum dolor sit amet"></Card>
                </Grid>
            </Center>
        </PageContainerNonC>
    </div>
    )
}

export {About}