import './profile.css'
import {PageContainer} from '../pagecontainer/PageContainer';
import {Hero} from '../hero/Hero';
import {Voxel}  from '../voxel/Voxel'

import {Button, Divider, HStack} from '@chakra-ui/react';

function Profile() {
    return (<div>
        <PageContainer style={{backgroundColor: "white"}}>
            <Voxel></Voxel>
            <Hero text="May Tusek" subtext={["Full Stack Developer", "Software Engineer"]}/>
            <Divider/>
            <HStack>
                <Button>About Me</Button>
                <Button>Projects</Button>
                <Button>Hire Me</Button>
            </HStack>
        </PageContainer>
      </div>
    )
}

export {Profile}