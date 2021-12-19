import * as THREE from 'three'
import * as React from 'react'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader'

import LowPolyComputerObjSrc from '../../models/computer-cute.obj'
import LowPolyComputerMtlSrc from '../../models/computer-cute.mtl'
import LowPolyComputerTexture from '../../models/computer-cute.png'

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, .1, 1000);
const Controls = new OrbitControls(camera, renderer.domElement);

var computerObj;

// https://stackoverflow.com/questions/49469961/ref-callbacks-this-mount-reactjs
class Voxel extends React.Component {
    componentDidMount() {
        this.mount.appendChild(renderer.domElement);
    }
    
    render() {
        return (
            <div ref={(mount) => { this.mount = mount }}>
            </div>
        )
    }
}

function createScene() {
    renderer.setSize(200, 200);
    camera.position.setZ(2);

    onWindowResize();

    const AmbientLight = new THREE.AmbientLight(0xFFFFFF);
    scene.add(AmbientLight);

    // const PointLight = new THREE.PointLight(0xFFFFFF, 4, 100, 0);
    // // PointLight.translateZ(1);
    // scene.add(PointLight);

    scene.background = new THREE.Color(0xFFFFFF);

    loadComputer();
}

createScene();

function loadComputer() {
    const mLoader = new MTLLoader();
    const oLoader = new OBJLoader();

    mLoader.load(LowPolyComputerMtlSrc, function(mat) {
        mat.preload();

        const TextureLoader = new THREE.TextureLoader();
        const Texture = TextureLoader.load(LowPolyComputerTexture);

        oLoader.setMaterials(mat);  
        oLoader.load(LowPolyComputerObjSrc, function(obj) {
            obj.rotateY(1/2 * 3.14);
            obj.translateY(-.6);
            obj.children[0].material.map = Texture;
            scene.add(obj);

            computerObj = obj;
            Animate();
        });
    });
}

window.addEventListener( 'resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = (window.innerWidth / 2) / (window.innerHeight / 4);
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 4);
}

function Animate() {
    requestAnimationFrame(Animate);

    Controls.update();

    camera.aspect = (window.innerWidth / window.innerHeight);
    renderer.render(scene, camera);

    computerObj.rotateY(.01);
}

export {Voxel}