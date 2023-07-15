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

export default class Animation{
	constructor() {
		this.scene = null;
		this.renderer = null;
		this.camera = null;
		this.handleResize = () => {};
        this.window = null;
	}

	start() {
		this.scene = new THREE.Scene();
        this.window = window;
		this.camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor(0x0e0e0f);
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		let canvas = this.renderer.domElement;
		canvas.style.position = 'absolute';
		canvas.style.width = '100%';
		canvas.style.top = '0px';
		canvas.style.zIndex = '-1';
		document.body.appendChild(this.renderer.domElement);

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
		this.scene.add(cube);

		const planeGeometry = new THREE.PlaneGeometry(100, 100);
		const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
		const plane = new THREE.Mesh(planeGeometry, materialGold);
		plane.receiveShadow = true;
		plane.rotation.x = -Math.PI / 2;
		this.scene.add(plane);

		const light = new THREE.DirectionalLight(0xffffff, 1);
		light.position.set(5, 10, 7);
		light.castShadow = true;
		this.scene.add(light);

		const ambientLight = new THREE.AmbientLight(0x404040);
		this.scene.add(ambientLight);

		light.shadow.mapSize.width = 1024;
		light.shadow.mapSize.height = 1024;
		light.shadow.camera.near = 0.5;
		light.shadow.camera.far = 100;
		light.shadow.camera.left = -10;
		light.shadow.camera.right = 10;
		light.shadow.camera.top = 10;
		light.shadow.camera.bottom = -10;

		this.camera.position.z = 15;

		const animate = () => {
			requestAnimationFrame(animate);

			cube.rotation.x += 0.002;
			cube.rotation.y += 0.002;

			this.renderer.render(this.scene, this.camera);
		};

		this.handleResize = function() {
			const width = window.innerWidth;
			const height = window.innerHeight;
			this.camera.aspect = width / height;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(width, height);
		};

		animate();
		window.addEventListener('resize', this.handleResize);
	}
	delete() {
		// ...deletion logic here...
        console.log(this.handleResize);
        if(this.window){
            this.window.removeEventListener('resize', this.handleResize);
            document.body.removeChild(this.renderer.domElement);
        }

	}
};
