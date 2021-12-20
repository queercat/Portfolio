import {Container, Heading, Text, Center, VStack, Button} from '@chakra-ui/react';
import './card.css';
import { motion, AnimatePresence, useViewportScroll, whileInView, useAnimation} from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react'

function Card({isVisible, text, description, children, key}) { 
    
    const controls = useAnimation();

    const {ref, inView} = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }

        if (!inView) {
            controls.start("hidden");
        }

    }, [controls, inView]);
    
    var state = {
        cardDialogue: false
    };

    const variants = {
        visible: {opacity: 1, x: 0},
        hidden: {opacity: 0, x: "-80vw"}
    };

    const expand = () => {
        state.cardDialogue = !state.cardDialogue;
    };

    return (
        <AnimatePresence>
            {
                state.cardDialogue? 
                
                <motion.div className='dialogue'>    
                    <Text>Test</Text>
                </motion.div>
                
                :
                <div></div>
            }

            <motion.div className='card' transition={{duration: .3, ease: 'easeIn'}} ref={ref} variants={variants} initial={"hidden"} animate={controls} key={{key}}>
                <Center h="120px">
                    <VStack>
                        <Heading textColor>{text}</Heading>
                        <Text as="i">{description}</Text>
                    </VStack>
                </Center>

                <div className='afterCard'>
                    <Button onClick={expand} colorScheme={"green"}><span>More</span></Button>
                </div>

                {children}
            </motion.div>
        </AnimatePresence>
    )
}

function IconCard(props) {
    return (
        <Container className='iconCard'>
            <Center h="10vh">
                <VStack>
                    <Heading>{props.date}</Heading>
                </VStack>
            </Center>
        </Container>
    )
}

export {Card, IconCard}