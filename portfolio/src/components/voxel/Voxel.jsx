import * as THREE from 'three'
import * as React from 'react'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader'
import { ProgressLabel } from '@chakra-ui/react'

const url = process.env.PUBLIC_URL;

const LowPolyComputerObjSrc = url + '/models/computer-cute.obj';
const LowPolyComputerMtlSrc = url + '/models/computer-cute.mtl'
const LowPolyComputerTexture = url + '/models/computer-cute.png'

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

class VoxelTemplate extends React.Component {
    componentDidMount() {
        var templateRenderer = new THREE.WebGLRenderer();

        instanceVoxelTemplate(this.props, templateRenderer);
        this.mount.appendChild(templateRenderer.domElement);
    }
    
    render() {
        return (
            <div ref={(mount) => {this.mount = mount}}>
            </div>
        )
    }
}

function instanceTemplateScene(props, templateRenderer, templateCamera, templateScene) {
    templateRenderer.setSize(props.width, props.height);
    templateCamera.position.setZ(2);
    templateScene.background = new THREE.Color(props.color)

    var templateAmbientLight = new THREE.AmbientLight(0xFFFFFF, 1);
    templateScene.add(templateAmbientLight);
}

function instanceVoxelTemplate(props, templateRenderer) {
    console.log(props)

    var templateCamera = new THREE.PerspectiveCamera(75, props.width / props.height);
    var templateScene = new THREE.Scene();

    instanceTemplateScene(props, templateRenderer, templateCamera, templateScene);

    var templateOBJLoader = new OBJLoader();
    var templateMTLLoader = new MTLLoader();
    var templateTextureLoader = new THREE.TextureLoader();

    templateMTLLoader.load(url + props.baseURL + ".mtl", mtl => {
        mtl.preload();

        var texture = templateTextureLoader.load(url + ProgressLabel.baseURL + ".png", texture => {
            return texture
        });

        templateOBJLoader.setMaterials(mtl);

        console.log(url + props.baseURL + ".obj");
        
        templateOBJLoader.load(url + props.baseURL + ".obj", obj => {
            obj.rotateX((props.rot[0] / 180) * 3.14);
            obj.rotateY((props.rot[1] / 180) * 3.14);
            obj.rotateZ((props.rot[2] / 180) * 3.14);
            
            obj.children[0].map = texture;
            templateScene.add(obj);
            templateAnimate(templateRenderer, templateCamera, templateScene, obj, props); // Refactor to blob / obj.
        }); 
    });
}

function templateAnimate(templateRenderer, templateCamera, templateScene, obj, props) {
    var tempAnimationObj = {
        main: function() {
            tempAnimationObj.update();
            tempAnimationObj.draw();
            requestAnimationFrame(tempAnimationObj.main);
        },

        update: function() {
            this.obj.rotateY(.01);
        },

        draw: function() {
            this.renderer.render(this.scene, this.camera);
        }
    }

    tempAnimationObj.renderer = templateRenderer;
    tempAnimationObj.camera = templateCamera;
    tempAnimationObj.scene = templateScene;
    tempAnimationObj.obj = obj;
    tempAnimationObj.props = props;

    tempAnimationObj.main();
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

export {Voxel, VoxelTemplate}