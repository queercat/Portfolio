import {PageContainer, PageContainerNonC} from '../pagecontainer/PageContainer'
import {Card} from '../card/Card'
import {Grid, Box, Text, Center, Heading} from '@chakra-ui/react'
import {VoxelTemplate} from '../voxel/Voxel'


function About() {
    return (<div>
        <PageContainerNonC style={{backgroundColor: "#FFFFFF"}}>            
            <Center height="100vh">
                <Grid templateColumns='repeat(2, 1fr)' gap='6'>
                    <Card text="Hello World" description="Lorem ipsum dolor sit amet"><VoxelTemplate color="#FFFFFF" rot={[45, 90, 0]} width="500" height="200" baseURL="/models/keyboard"/></Card>
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