import './index.css'

import {Profile} from './components/profile/Profile';
import {Navbar} from './components/navbar/Navbar';
import {Projects} from './components/projects/Projects';
import {Voxel} from './components/voxel/Voxel';

import {Container, Heading, Grid, GridItem, Center, VStack, Text} from '@chakra-ui/react';
import {Motion} from 'framer-motion';
import {} from '@chakra-ui/icons';

function Hero(props) {
  const textItems = props.subtext.map((value) => 
    <Text fontSize="4xl" key={value}>{value}</Text>
  );
  
  return (
    <div className='hero'>
      <Heading fontSize="6xl">{props.text}</Heading>
      {textItems}
    </div>
  );
}


function Canvas(props) {
  return (
    <canvas id={props.id}></canvas>
  )
}

function App() {
  return (
    <div className='app'>
      <Container h="100vh">
        <Center h="100vh">
          <VStack>
          <Voxel></Voxel>
          <Hero text="May Tusek" subtext={["Full Stack Developer", "Software Engineer"]}></Hero>
          </VStack>
        </Center>
      </Container>
    </div>
  );
}

export default App;
