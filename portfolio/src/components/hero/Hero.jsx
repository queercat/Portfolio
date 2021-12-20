import "./hero.css"

import {Text, Heading} from "@chakra-ui/react"
import {useRef} from "react";

// function ScrollToNext() {
//     const ref = useRef(null)
  
//     const doScroll = () => window.scrollTo(0, this.ref.current.offsetTop);
  
//     return (<>
//         <div ref={ref}></div>
//         <button onClick={doScroll}>Click me!</button>
//       </>
//     )
//   }

function Hero(props) {
    const textItems = props.subtext.map((value) => 
        <Text fontSize="4xl" key={value}>
            > {value}
        </Text>
    );
    
    return (
      <div className='hero'>
        <Heading fontSize="6xl">{props.text}</Heading>
        {textItems}
      </div>
    );
  }

  function HeroBlink(props) {
    const textItems = props.subtext.map((value) => 
        <Text fontSize="4xl" key={value}>
            > {value}
        </Text>
    );
    
    return (
      <div className='hero'>
        <Heading fontSize="6xl">{props.text}<a className="blink">_</a></Heading>
        {textItems}
      </div>
    );
  }

export {Hero, HeroBlink}