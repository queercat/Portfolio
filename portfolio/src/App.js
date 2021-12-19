import './index.css'

import {Profile} from './components/profile/Profile';
import {Navbar} from './components/navbar/Navbar';
import {Projects} from './components/projects/Projects';
import {Voxel} from './components/voxel/Voxel';
import {PageContainer} from './components/pagecontainer/PageContainer';
import {Hero} from './components/hero/Hero';

import {Container, Heading, Grid, GridItem, Center, VStack, Text, Button, Divider, Spacer, HStack} from '@chakra-ui/react';
import {Motion} from 'framer-motion';
import {} from '@chakra-ui/icons';

function App() {
  return (
    <div className='app'>
      <PageContainer style={{backgroundColor: "white"}}>
        <Voxel></Voxel>
        <Hero text="May Tusek" subtext={["Full Stack Developer", "Software Engineer"]}/>
        <Divider/>
        <HStack>
          <Button className="next">Projects</Button>
          <Button className="next">Hire Me</Button>
        </HStack>
      </PageContainer>

      <PageContainer style={{backgroundColor: "orange"}}>

      </PageContainer>

      <PageContainer style={{backgroundColor: "black"}}>

      </PageContainer>
    </div>
  );
}

export default App;
