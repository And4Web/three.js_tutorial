import * as THREE from "https://unpkg.com/three/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

//usually we create 3D model externally using Blender or 3jsMax etc and import the model.
//some important geometry methods:
/*
BoxGeometry
CircleGeometry
PlaneGeometry
...

implementaion of all these geometries are almost same, just remember the basic understanding of what they do. details are available on the official website: 
https://threejs.org/docs/#api/en/geometries
*/