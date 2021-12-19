import './profile.css'
import {PageContainer} from '../pagecontainer/PageContainer';
import {Hero} from '../hero/Hero';
import {VoxelTemplate}  from '../voxel/Voxel'

import {Button, Divider, HStack} from '@chakra-ui/react';

function ScrollToID(id) {
    var elem = document.getElementById(id);

    elem.scrollIntoView();
}

function Profile() {
    return (<div>
        <PageContainer id="profile" style={{backgroundColor: "white"}}>
            <VoxelTemplate baseURL="/models/computer-cute" width=".4" height=".25" rot={[0, 45, 0]} trans={[0, -.6, 0]} animRot={[0, 0.01, 0]}></VoxelTemplate>
            <Hero text="May Tusek" subtext={["Full Stack Developer", "Software Engineer"]}/>
            <Divider/>
            <HStack>
                <Button onClick={() => ScrollToID("about")}>About Me</Button>
                <Button onClick={() => ScrollToID("projects")}>Projects</Button>
                <Button onClick={() => ScrollToID("hire me")}>Hire Me</Button>
            </HStack>
        </PageContainer>
      </div>
    )
}

export {Profile}