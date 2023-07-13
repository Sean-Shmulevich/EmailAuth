// import * as SC from 'svelte-cubed';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();

const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });

function handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

export default function animate() {
	const scene = new THREE.Scene();

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x0e0e0f);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	let canvas = renderer.domElement;
	canvas.style.position = 'absolute';
	canvas.style.width = '100%';
	canvas.style.top = '0px';
	canvas.style.zIndex = '-1';
	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.TorusKnotGeometry(4, 0.5, 100, 12);
	const material = new THREE.MeshPhysicalMaterial({
		color: 0xffffff,
		metalness: 1,
		wireframe: true
	});
	// const material = new THREE.MeshPhysicalMaterial({
	//   color: 0xffcd75,
	//   clearcoat, 1.0,
	//   metalness: .5,
	//   wireframe: true,
	// });
	const materialGold = new THREE.MeshPhysicalMaterial({
		color: 0xffcd75,
		metalness: 0.5,
		roughness: 0.2,
		clearcoat: 1.0,
		clearcoatRoughness: 0.3
	});
	const cube = new THREE.Mesh(geometry, material);
	cube.castShadow = true;
	scene.add(cube);

	const planeGeometry = new THREE.PlaneGeometry(100, 100);
	const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const plane = new THREE.Mesh(planeGeometry, materialGold);
	plane.receiveShadow = true;
	plane.rotation.x = -Math.PI / 2;
	scene.add(plane);

	const light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(5, 10, 7);
	light.castShadow = true;
	scene.add(light);

	const ambientLight = new THREE.AmbientLight(0x404040);
	scene.add(ambientLight);

	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	light.shadow.camera.near = 0.5;
	light.shadow.camera.far = 100;
	light.shadow.camera.left = -10;
	light.shadow.camera.right = 10;
	light.shadow.camera.top = 10;
	light.shadow.camera.bottom = -10;

	camera.position.z = 15;

	function animate() {
		requestAnimationFrame(animate);

		cube.rotation.x += 0.002;
		cube.rotation.y += 0.002;

		renderer.render(scene, camera);
	}



	animate();
	window.addEventListener('resize', handleResize);
}

function stopHandlingResize() {
	window.removeEventListener('resize', handleResize);
}

export function stopAnimation() {
	document.body.removeChild(renderer.domElement);
	stopHandlingResize();
}
