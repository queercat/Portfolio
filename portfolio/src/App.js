import './index.css'

import {Profile} from './components/profile/Profile';
import {About} from './components/about/About';
import {Projects} from './components/projects/Projects';
import {Voxel} from './components/voxel/Voxel';
import {PageContainer} from './components/pagecontainer/PageContainer';
import {Hero} from './components/hero/Hero';

import {Container, Heading, Grid, GridItem, Center, VStack, Text, Button, Divider, Spacer, HStack} from '@chakra-ui/react';
import {Motion} from 'framer-motion';

function App() {
  return (
    <div className='app'>
      <Profile/>
      <About/>

      {/* <PageContainer style={{backgroundColor: "#1E093C"}}>

      </PageContainer> */}
    </div>
  );
}

export default App;
