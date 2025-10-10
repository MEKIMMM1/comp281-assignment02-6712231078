import * as THREE from 'three'; // three จากที่กำหนดใน importmap
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import Stats from 'three/addons/libs/stats.module.js';
import { M3D, createLabel2D, FPS } from './utils-module.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
document.addEventListener("DOMContentLoaded", main);

document.addEventListener("DOMContentLoaded", main);

function main() {
	// ใช้ M3D ที่นำเข้ามา
	document.body.appendChild(M3D.renderer.domElement);
	document.body.appendChild(M3D.cssRenderer.domElement);

	M3D.renderer.setClearColor(0x333333); // กำหนดสีพื้นหลังของ renderer (canvas)
	M3D.renderer.setPixelRatio(window.devicePixelRatio); // ปรับความละเอียดของ renderer ให้เหมาะสมกับหน้าจอ
	M3D.renderer.shadowMap.enabled = true; // เปิดใช้งาน shadow map
	M3D.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // กำหนดประเภทของ shadow map
	M3D.renderer.physicallyCorrectLights = true; // เปิดใช้งานการคำนวณแสงแบบฟิสิกส์
	M3D.renderer.outputEncoding = THREE.sRGBEncoding; // กำหนดการเข้ารหัสสีของ renderer
	M3D.renderer.setAnimationLoop(animate); // ตั้งค่า animation loop

	// Prepaire objects here
	// TODO: วาดฉากทิวทัศน์ 3D ด้วย Three.js
	// ต้องมีครบ 6 อย่าง: ภูเขา, พระอาทิตย์, ท้องนา, ต้นไม้, บ้าน/กระท่อม, แม่น้ำ
	// องค์ประกอบอื่น ๆ เพิ่มเติมได้ตามต้องการ (เช่น ท้องฟ้า, ก้อนเมฆ ฯลฯ)


	// พื้น 75x75 หนา 0.3
	const geoPlane = new THREE.BoxGeometry(75, 0.3, 75); //สร้างพื้นขนาด 75x75 หนา 0.3
	const matPlane = new THREE.MeshStandardMaterial({color: 0x006400, side: THREE.DoubleSide}); //สร้างวัสดุพื้นเป็น สีเขียว
	const meshPlane = new THREE.Mesh(geoPlane, matPlane); //แสดงพื้นดด้านบน,ด้านล่าง
	//meshPlane.rotation.x = -Math.PI/2; //หมุนพื้นให้เป็นแนวราบตามแกน y (ไม่ได้ใช้)
	meshPlane.receiveShadow = true; //รับเงา
	M3D.scene.add(meshPlane); //เพิ่มลงในฉาก


	//ภูเขา
	const motigeo = new THREE.ConeGeometry( 12, 27, 18 ); 
	const motimat = new THREE.MeshStandardMaterial( {color: 0x003300} );
	const mountain1 = new THREE.Mesh( motigeo, motimat );
	mountain1.position.set(-25.5, 13.5, -25.5);
	mountain1.castShadow = true;
	M3D.scene.add( mountain1 );

	const motigeo2 = new THREE.ConeGeometry( 9, 19, 9 ); 
	const motimat2 = new THREE.MeshStandardMaterial( {color: 0x003300} );
	const mountain2 = new THREE.Mesh( motigeo2, motimat2 );
	mountain2.position.set(-14.5, 9.5, -28.5);
	mountain2.castShadow = true;
	M3D.scene.add( mountain2 );

	const motigeo3 = new THREE.ConeGeometry( 9, 19, 9 ); 
	const motimat3 = new THREE.MeshStandardMaterial( {color: 0x003300} );
	const mountain3 = new THREE.Mesh( motigeo3, motimat3 );
	mountain3.position.set(-28.5, 9.5, -12.5);
	mountain3.castShadow = true;
	M3D.scene.add( mountain3 );

	//ท้องนา
	const geoPlane8 = new THREE.BoxGeometry(7, 0.3, 7); //ขนาดนา
	const matPlane8 = new THREE.MeshStandardMaterial({color: 0x663300, side: THREE.DoubleSide}); //สร้างวัสดุพื้นเป็น สีน้ำตาล
	const meshPlane8 = new THREE.Mesh(geoPlane8, matPlane8); //แสดงพื้นดด้านบน,ด้านล่าง
	meshPlane8.position.set(33, 0.050, 22.9); //ตำแหน่ง
	meshPlane8.receiveShadow = true; //รับเงา
	M3D.scene.add(meshPlane8); //เพิ่มลงในฉาก

	const geoPlane7 = new THREE.BoxGeometry(7, 0.3, 7); //ขนาดนา
	const matPlane7 = new THREE.MeshStandardMaterial({color: 0x663300, side: THREE.DoubleSide}); //สร้างวัสดุพื้นเป็น สีน้ำตาล
	const meshPlane7 = new THREE.Mesh(geoPlane7, matPlane7); //แสดงพื้นดด้านบน,ด้านล่าง
	meshPlane7.position.set(25, 0.050, 22.9); //ตำแหน่ง
	meshPlane7.receiveShadow = true; //รับเงา
	M3D.scene.add(meshPlane7); //เพิ่มลงในฉาก

	const geoPlane6 = new THREE.BoxGeometry(7, 0.3, 7); //ขนาดนา
	const matPlane6 = new THREE.MeshStandardMaterial({color: 0x663300, side: THREE.DoubleSide}); //สร้างวัสดุพื้นเป็น สีน้ำตาล
	const meshPlane6 = new THREE.Mesh(geoPlane6, matPlane6); //แสดงพื้นดด้านบน,ด้านล่าง
	meshPlane6.position.set(33, 0.050, 14.9); //ตำแหน่ง
	meshPlane6.receiveShadow = true; //รับเงา
	M3D.scene.add(meshPlane6); //เพิ่มลงในฉาก

	const geoPlane5 = new THREE.BoxGeometry(7, 0.3, 7); //ขนาดนา
	const matPlane5 = new THREE.MeshStandardMaterial({color: 0x663300, side: THREE.DoubleSide}); //สร้างวัสดุพื้นเป็น สีน้ำตาล
	const meshPlane5 = new THREE.Mesh(geoPlane5, matPlane5); //แสดงพื้นดด้านบน,ด้านล่าง
	meshPlane5.position.set(25, 0.050, 14.9); //ตำแหน่ง
	meshPlane5.receiveShadow = true; //รับเงา
	M3D.scene.add(meshPlane5); //เพิ่มลงในฉาก

	//ต้นข้าว
	function addBox2(position, scale = [0.245, 0.5, 0.245], color = 0x00ff00) {
		const geometry = new THREE.BoxGeometry(...scale);
		const material = new THREE.MeshStandardMaterial({ color });
		const mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(...position);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		M3D.scene.add(mesh);
	}

	//เรียกใช้ฟังชั่น
	addBox2([35.5, 0.2, 25.5]);
	addBox2([34, 0.2, 25.5]);
	addBox2([32.5, 0.2, 25.5]);
	addBox2([30.5, 0.2, 25.5]);

	addBox2([35.5, 0.2, 23.5]);
	addBox2([34, 0.2, 23.5]);
	addBox2([32.5, 0.2, 23.5]);
	addBox2([30.5, 0.2, 23.5]);
	
	addBox2([35.5, 0.2, 21.5]);
	addBox2([34, 0.2, 21.5]);
	addBox2([32.5, 0.2, 21.5]);
	addBox2([30.5, 0.2, 21.5]);

	addBox2([35.5, 0.2, 20]);
	addBox2([34, 0.2, 20]);
	addBox2([32.5, 0.2, 20]);
	addBox2([30.5, 0.2, 20]);

	// แม่น้ำ
	const riverWidth = 75; //ความยาว
	const riverDepth = 10; //ขนาดความกว้าง
	const riverHeight = 0.01; //หนาของน้ำ
	const riverGeom = new THREE.BoxGeometry(riverWidth, riverHeight, riverDepth);
	const riverMat = new THREE.MeshStandardMaterial({
		color: 0x1e90ff,
		transparent: true, //ทำให้น้ำโปร่งใส	
		opacity: 0.9, //ความทึบ
		metalness: 0.9, //ความมันเงา
	});
	const river = new THREE.Mesh(riverGeom, riverMat);
	river.receiveShadow = true;
	//plane ขนาด 75 มีครึ่งความยาว 37.5 => edge z = +37.5
	const planeHalfZ = 75 / 2; 
	//แม่น้ำอยู่ภายในพื้นที่
	river.position.set(0, 0.15 + riverHeight / 2 + 0.01, planeHalfZ - riverDepth / 2 - 0.01);
	M3D.scene.add(river);


	//ฟังชั่น โหลดโมเดล 3D
		function addGLTFModel({ path, position, scale, rotationY = 0 }) { //ให้รับพารามิเตอร์เป็น path, position, scale, rotationY 
	const loader = new GLTFLoader(); //สร้าง GLTFLoader
	loader.load(
		path,
		function (gltf) { //Function ทำงานเมื่อโหลดโมเดล 3D สำเร็จ, gltf คือข้อมูลโมเดลที่โหลดมา (json)
		const model = gltf.scene; //เข้าถึงโมเดลที่โหลดมา
		model.position.set(...position); //ตำแหน่ง
		model.scale.set(...scale); //ขนาดโมเดล
		model.rotation.y = rotationY; //หมุนโมเดล
		model.traverse((child) => { //วนลูปผ่านทุกส่วนของโมเดล (ในกรณีที่โมเดลมีหลายส่วนหรือ Mesh ย่อย)
			if (child.isMesh) { // ถ้าchild เป็น Mesh
			child.castShadow = true; //ให้ Mesh สร้างเงา
			child.receiveShadow = true; //ให้ Mesh รับเงา
			}
		});
		model.castShadow = true;
		M3D.scene.add(model); //เพิ่มโมเดลลงใน Scene
		},
		function (xhr) { //Function ทำงานเมื่อการโหลดโมเดล 3D กำลังดำเนินการ
		console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // แสดงเปอร์เซ็นต์การโหลดโมเดล
		},
		function (error) { //Function ทำงานเมื่อโหลดโมเดล 3D ไม่สำเร็จ
		console.error('An error happened while loading the model:', error); //แสดงข้อผิดพลาดหากโหลดโมเดลไม่สำเร็จ
		}
	);
	}
	
	addGLTFModel({
		path: './Model/japanese_cherry_tree_low-poly.glb', //เปลี่ยน path เป็นที่เก็บโมเดล ต้นไม้ใจกลาง
		position: [1, 0, -1],
		scale: [3, 3, 3],
		rotationY: [3*Math.PI/2],
	});

	addGLTFModel({
		path: './Model/gundam.glb', //เปลี่ยน path เป็นที่เก็บโมเดล gundam
		position: [-32, 0, 10],
		scale: [7, 7, 7],
		rotationY: [3*Math.PI/2],
	});

	addGLTFModel({
		path: './Model/aot_erens_home_low-poly.glb', //เปลี่ยน path เป็นที่เก็บโมเดล บ้าน
		position: [25, 0, -26],
		scale: [1.5, 1.5, 1.5],
		rotationY:[3*Math.PI/2],
	});

	addGLTFModel({
		path: './Model/home_2.glb', //เปลี่ยน path เป็นที่เก็บโมเดล บ้าน 2
		position: [9, 0.5, -28],
		scale: [1.5, 1.5, 1.5],
		rotationY:[4*Math.PI/2],
	});

	addGLTFModel({
		path: './Model/tiny_home.glb', //เปลี่ยน path เป็นที่เก็บโมเดล บ้าน 3
		position: [43, 0.5, -20],
		scale: [2, 2, 2],
		rotationY:[3*Math.PI/2],
	});

	addGLTFModel({
		path: './Model/realistic_tree_models_for_games.glb', //เปลี่ยน path เป็นที่เก็บโมเดล ต้นไม้
		position: [-4, 0.001, -35],
		scale: [2, 2, 2],
		rotationY:[0],
	});

	addGLTFModel({
		path: './Model/realistic_tree_models_for_games.glb', //เปลี่ยน path เป็นที่เก็บโมเดล ต้นไม้
		position: [36.5, 0.01, 27],
		scale: [1, 1, 1],
		rotationY:[0],
	});


	//กลุ่มวัตถุ 3D
 	const grop = new THREE.Group(); 
	//สร้างกลุ่ม grop เพื่อใช้เป็น parent ของวัตถุ 3D อื่น ๆ
	const boxgo = new THREE.BoxGeometry(0.1, 0.1, 0.11); 
	const boxmate = new THREE.MeshStandardMaterial({color : 0x000000});
	const box = new THREE.Mesh(boxgo, boxmate);
	box.position.set(0, 0.01, 0)
	box.castShadow = true; 
	M3D.scene.add (box);
	box.add(grop);

	//พระอาทิตย์
	const spherego = new THREE.SphereGeometry(4, 16); //วงกลมรัศ4
    const Spheremate = new THREE.MeshStandardMaterial({color : 0xFFFF00, emissive: 0x0033FF, emissiveIntensity: 1}); //สีเหลืองเรืองแสง
    const sphere = new THREE.Mesh(spherego, Spheremate); 
    sphere.position.set(0, 50, -60)  //ตำแหน่ง
    grop.add(sphere);

	//แสงจากพระอาทิตย์
	const light = new THREE.DirectionalLight(0xffffff, 10);
	light.position.set(0, 50, -60);
	light.castShadow = true;
	light.shadow.mapSize.width = 2048;
	light.shadow.mapSize.height = 2048;
	light.shadow.camera.left = -100;
	light.shadow.camera.right = 100;
	light.shadow.camera.top = 100;
	light.shadow.camera.bottom = -50;
	grop.add(light);
	
	const light2 = new THREE.DirectionalLight(0xffffff, 1);
	light2.position.set(0, 10, 0); // กำหนดตำแหน่งของแสง
	light2.castShadow = true; // เปิดใช้งานการสร้างเงา
	grop.add(light2);


	//แสง
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);  //
	M3D.scene.add(ambientLight);
	

	// Stats
	const stats = new Stats(); // สร้าง Stats เพื่อตรวจสอบประสิทธิภาพ
	document.body.appendChild(stats.dom); // เพิ่ม Stats ลงใน body ของ HTML

	// GUI
	const gui = new GUI(); // สร้าง GUI สำหรับปรับแต่งค่าต่างๆ 

	const clock = new THREE.Clock(); // สร้างนาฬิกาเพื่อติดตามเวลา
	function animate() {
		// คำนวณ delta time จาก clock ก่อนใช้งาน (ป้องกัน reference error)
		const delta = clock.getDelta();
		M3D.controls.update(); // อัปเดต controls
		stats.update(); // อัปเดต Stats
		FPS.update(); // อัปเดต FPS
		grop.rotation.z -= delta * Math.PI / 7.5; //หมุนกลุ่ม grop รอบแกน z
		// UPDATE state of objects here
		// TODO: อัปเดตสถานะของวัตถุต่างๆ ที่ต้องการในแต่ละเฟรม (เช่น การเคลื่อนที่, การหมุน ฯลฯ)
		

		// RENDER scene and camera
		M3D.renderer.render(M3D.scene, M3D.camera); // เรนเดอร์ฉาก
		//console.log(`FPS: ${FPS.fps}`); // แสดงค่า FPS ในคอนโซล
	}
}