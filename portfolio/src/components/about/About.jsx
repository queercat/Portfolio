import {Card, IconCard} from '../card/Card'
import {Heading, VStack, Spacer} from '@chakra-ui/react'
import './about.css'

function About() {
    return (
        <div className="about" id="about">     
            <VStack spacing={12}>
                <Heading size="4xl" mt="5">Experience</Heading>
                <Spacer/>
                <Card text="SQL / App Developer" description="B & R Autowrecking"></Card>

                <Card text="Fullstack Developer" description="Springfield Data Recovery"/>

                <Card text="Fullstack Developer" description="White Bird"/>
            </VStack>
        </div>
    )
}

export {About}