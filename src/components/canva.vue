<template>
  <div :img="imgData" ref="container" class="w-full h-full"></div>
  <button @click="vueSize">TEST</button>
  <!-- <popup /> -->
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import * as TWEEN from "https://cdn.skypack.dev/@tweenjs/tween.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/renderers/CSS2DRenderer.js";

const container = ref(null);
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();
import popup from "./popup.vue";
const vueSize = () => {
  console.log(width.value, height.value);
};

// const width = ref(0);
// const height = ref(0);
// let imgData = "/world1.jpeg";

// scene
const scene = new THREE.Scene();

// camera
let camera;

// renderer
let renderer = new THREE.WebGLRenderer({
  antialias: true,
});

// label renderer
let labelRenderer = new CSS2DRenderer();

// sphere object
let sphere;

// Props
const props = defineProps({
  imgData: {
    type: String,
    default: "",
  },
});

// load new texture
const changeTexture = (img) => {
  let newTexture = new THREE.TextureLoader().load(img);
  sphere.material.map = newTexture;
  renderer.render(scene, camera);
};

// define functions needed to be exposed
defineExpose({
  changeTexture,
});

// onMounted
onMounted(() => {
  canva_setup();

  // resize listener
  window.addEventListener("resize", (event) => onWindowResize(event, sphere));
});

const canva_setup = () => {
  // width.value = container.value.clientWidth;
  // height.value = container.value.clientHeight;

  // Use inner window as width

  //   console.log(width.value, height.value, container.value);

  // update camera
  camera = new THREE.PerspectiveCamera(45, width.value / height.value, 1, 2000);

  const axesHelper = new THREE.AxesHelper(5);
  camera.position.set(0.5, 0.5, 1).setLength(14);

  renderer.setSize(width.value, height.value);
  renderer.setClearColor(0x212121);
  // console.log("test", container.value);
  container.value.appendChild(renderer.domElement);

  labelRenderer.setSize(width.value, height.value);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0px";
  container.value.appendChild(labelRenderer.domElement);

  //   control the camera view point
  let controls = new OrbitControls(camera, labelRenderer.domElement);
  controls.enablePan = false;
  controls.minDistance = 6;
  controls.maxDistance = 15;
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed *= 0.25;

  let globalUniforms = {
    time: { value: 0 },
  };

  // <Sphere>
  const geometry = new THREE.SphereGeometry(4, 32, 16);
  const texture = new THREE.TextureLoader().load(props.imgData);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  //   scene.add(axesHelper);

  // <GLOBE>
  // https://web.archive.org/web/20120107030109/http://cgafaq.info/wiki/Evenly_distributed_points_on_sphere#Spirals
  let counter = 200000;
  let rad = 4;
  let sph = new THREE.Spherical();

  let r = 0;
  let dlong = Math.PI * (3 - Math.sqrt(5));
  let dz = 2 / counter;
  let long = 0;
  let z = 1 - dz / 2;

  let pts = [];
  let clr = [];
  let c = new THREE.Color();
  let uvs = [];

  for (let i = 0; i < counter; i++) {
    r = Math.sqrt(1 - z * z);
    let p = new THREE.Vector3(
      Math.cos(long) * r,
      z,
      -Math.sin(long) * r
    ).multiplyScalar(rad);
    pts.push(p);
    z = z - dz;
    long = long + dlong;

    c.setHSL(0.45, 0.5, Math.random() * 0.25 + 0.25);
    // c.setO();
    c.toArray(clr, i * 3);

    sph.setFromVector3(p);
    uvs.push((sph.theta + Math.PI) / (Math.PI * 2), 1.0 - sph.phi / Math.PI);
  }

  let g = new THREE.BufferGeometry().setFromPoints(pts);
  g.setAttribute("color", new THREE.Float32BufferAttribute(clr, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  let m = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    //TODO: makes it no color (opacity & transparency both needed)
    opacity: 0,
    transparent: true,
    // onBeforeCompile: (shader) => {
    //   shader.uniforms.globeTexture = {
    //     value: new THREE.TextureLoader().load(props.imgData),
    //   };
    // },
  });
  let globe = new THREE.Points(g, m);
  scene.add(globe);

  // <Markers>
  const markerCount = 8;
  let markerInfo = []; // information on markers
  let gMarker = new THREE.PlaneGeometry();
  let mMarker = new THREE.MeshBasicMaterial({
    color: 0xff3232,
    onBeforeCompile: (shader) => {
      shader.uniforms.time = globalUniforms.time;
      shader.vertexShader = `
    	attribute float phase;
      varying float vPhase;
      ${shader.vertexShader}
    `.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
      	vPhase = phase; // de-synch of ripples
      `
      );
      //console.log(shader.vertexShader);
      shader.fragmentShader = `
    	uniform float time;
      varying float vPhase;
    	${shader.fragmentShader}
    `.replace(
        `vec4 diffuseColor = vec4( diffuse, opacity );`,
        `
      vec2 lUv = (vUv - 0.5) * 2.;
      float val = 0.;
      float lenUv = length(lUv);
      val = max(val, 1. - step(0.25, lenUv)); // central circle
      val = max(val, step(0.4, lenUv) - step(0.5, lenUv)); // outer circle

      float tShift = fract(time * 0.5 + vPhase);
      val = max(val, step(0.4 + (tShift * 0.6), lenUv) - step(0.5 + (tShift * 0.5), lenUv)); // ripple

      if (val < 0.5) discard;

      vec4 diffuseColor = vec4( diffuse, opacity );`
      );
      //console.log(shader.fragmentShader)
    },
  });
  mMarker.defines = { USE_UV: " " }; // needed to be set to be able to work with UVs
  let markers = new THREE.InstancedMesh(gMarker, mMarker, markerCount);
  let dummy = new THREE.Object3D();
  let phase = [];

  let markersData = [
    { position: new THREE.Vector3(4, 0, 0), mag: "X" },
    { position: new THREE.Vector3(0, 4, 0), mag: "Y" },
    { position: new THREE.Vector3(0, 0, 4), mag: "Z" },
    {
      position: new THREE.Vector3(-1.75, 2.4, 2.75),
      mag: "coastal California",
    },
    { position: new THREE.Vector3(0.8, 3.85, -0.75), mag: "Barents Sea" },
    { position: new THREE.Vector3(2.9, 1.5, -2.3), mag: "Red Sea" },
    {
      position: new THREE.Vector3(2.85, 0.25, 2.81),
      mag: "Equatorial Atlantic Ocean",
    },
    {
      position: new THREE.Vector3(3.65, -1.6, -0.47),
      mag: "Ocean near Kalahari Desert",
    },
  ];
  for (let i = 0; i < markerCount; i++) {
    //dummy.position.randomDirection().setLength(rad + 0.1);
    dummy.position.copy(markersData[i].position);
    dummy.lookAt(dummy.position.clone().setLength(rad + 1));
    dummy.updateMatrix();
    markers.setMatrixAt(i, dummy.matrix);
    phase.push(Math.random());

    markerInfo.push({
      id: i + 1,
      mag: markersData[i].mag,
      crd: dummy.position.clone(),
    });
  }
  gMarker.setAttribute(
    "phase",
    new THREE.InstancedBufferAttribute(new Float32Array(phase), 1)
  );

  scene.add(markers);
  // </Markers>

  // <Label>
  let labelDiv = document.getElementById("markerLabel");
  let closeBtn = document.getElementById("closeButton");

  closeBtn.addEventListener("pointerdown", (event) => {
    labelDiv.classList.add("hidden");
    const targetPosition = new THREE.Vector3();
    targetPosition.copy(intersections[0].point);
    targetPosition.normalize().multiplyScalar(camera.position.length() + 5);
    new TWEEN.Tween(camera.position)
      .to(targetPosition, 1000)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
    controls.autoRotate = true;
  });
  let label = new CSS2DObject(labelDiv);
  label.userData = {
    cNormal: new THREE.Vector3(),
    cPosition: new THREE.Vector3(),
    mat4: new THREE.Matrix4(),
    trackVisibility: () => {
      // the closer to the edge, the less opacity
      let ud = label.userData;
      ud.cNormal
        .copy(label.position)
        .normalize()
        .applyMatrix3(globe.normalMatrix);
      ud.cPosition
        .copy(label.position)
        .applyMatrix4(
          ud.mat4.multiplyMatrices(camera.matrixWorldInverse, globe.matrixWorld)
        );
      let d = ud.cPosition.negate().normalize().dot(ud.cNormal);
      d = smoothstep(0.2, 0.7, d);
      label.element.style.opacity = d;

      // https://github.com/gre/smoothstep/blob/master/index.js
      function smoothstep(min, max, value) {
        var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
        return x * x * (3 - 2 * x);
      }
    },
  };
  scene.add(label);
  // </Label>

  // <Interaction>
  let pointer = new THREE.Vector2();
  let raycaster = new THREE.Raycaster();
  // let bar = document.getElementById("bar");
  // let bar_width = bar.clientWidth;
  let intersections;
  let divID = document.getElementById("idNum");
  let divMag = document.getElementById("magnitude");
  let divCrd = document.getElementById("coordinates");
  window.addEventListener("pointerdown", (event) => {
    // pointer.x = ((event.clientX - (innerWidth - width) / 2) / innerWidth) * 2 - 1;
    // const { width, height } = container.getBoundingClientRect();
    let bar = document.getElementById("bar").getBoundingClientRect();
    const { width, height } = container.value.getBoundingClientRect();
    let bar_width = bar.width;
    // console.log("bar_width", bar_width);

    // pointer.x = ((event.clientX - bar_width) / width) * 2 - 1;
    pointer.x = (event.clientX / width) * 2 - 1;
    pointer.y = -(event.clientY / height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    // scene.add(
    //   new THREE.ArrowHelper(
    //     raycaster.ray.direction,
    //     raycaster.ray.origin,
    //     300,
    //     0xff0000
    //   )
    // );
    intersections = raycaster.intersectObject(markers).filter((m) => {
      // console.log(m);
      return m.uv.subScalar(0.5).length() * 2 < 0.25; // check, if we're in the central circle only
    });
    // console.log(intersections);
    if (intersections.length > 0) {
      let iid = intersections[0].instanceId;
      let mi = markerInfo[iid];
      divID.innerHTML = `ID: <b>${mi.id}</b>`;
      divMag.innerHTML = `Mag: <b>${mi.mag}</b>`;
      divCrd.innerHTML = `X: <b>${mi.crd.x.toFixed(
        2
      )}</b>; Y: <b>${mi.crd.y.toFixed(2)}</b>; Z: <b>${mi.crd.z.toFixed(
        2
      )}</b>`;
      label.position.copy(mi.crd);
      label.element.animate(
        [
          { width: "0px", height: "0px", marginTop: "0px", marginLeft: "0px" },
          {
            width: "230px",
            height: "50px",
            marginTop: "-25px",
            maginLeft: "120px",
          },
        ],
        {
          duration: 250,
        }
      );
      label.element.classList.remove("hidden");
      const targetPosition = new THREE.Vector3();
      targetPosition.copy(intersections[0].point);
      targetPosition.normalize().multiplyScalar(camera.position.length() - 5);
      new TWEEN.Tween(camera.position)
        .to(targetPosition, 1500)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
      controls.autoRotate = false;
    }
  });
  // </Interaction>

  let clock = new THREE.Clock();

  renderer.setAnimationLoop(() => {
    let t = clock.getElapsedTime();
    globalUniforms.time.value = t;
    // label.userData.trackVisibility();
    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    TWEEN.update();
  });
};

const onWindowResize = (sphere) => {
  // const { width, height } = container.value.getBoundingClientRect();

  // update camera
  camera.aspect = width.value / height.value;
  camera.position.set(0.5, 0.5, 1).setLength(14);
  camera.updateProjectionMatrix();

  renderer.setSize(width.value, height.value);
  labelRenderer.setSize(width.value, height.value);

  console.log(width.value, height.value);
};
</script>

<style lang="scss" scoped></style>
