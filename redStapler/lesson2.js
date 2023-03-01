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

// console.log("Renderer: ", renderer)
// console.log("Scene: ", scene)
// console.log("Camera: ", camera)

let geometry = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({color: 0xff0000});
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);

cube.position.z = -5;
cube.rotation.x = 10;
cube.rotation.y = 5;

// renderer.render(scene, camera);

let animate = function(){
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
