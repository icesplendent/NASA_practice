<template>
  <div
    :img="imgData"
    ref="container"
    id="rotatePlay"
    class="w-full h-full"
  ></div>
  <button @click="vueSize">TEST</button>
  <div>
    <popup
      :data="DataSrc[current_point]"
      :showPopup="isPopupVisible"
      @closePopup="closeChildPopup"
      @update_data="update_data"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useCollectionStore } from "../stores/collection";
import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import * as TWEEN from "https://cdn.skypack.dev/@tweenjs/tween.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/renderers/CSS2DRenderer.js";

const isPopupVisible = ref(false);

const container = ref(null);
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();
import popup from "./popup.vue";

const closeChildPopup = () => {
  console.log("emit");
  isPopupVisible.value = false;
};

const update_data = (my_data) => {
  console.log("receive the emit update @ parent canva");
  DataSrc.value = my_data;
  // if (!collected.value.includes(current_point.value))
  //   collected.value.push(current_point.value);
  // console.log(DataSrc, collected.value); // debug

  if (!collectionStore.collection.includes(current_point.value))
    collectionStore.addCollection(current_point.value);
  console.log(collectionStore.collection);
};
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

// current point 0: california, 1: Barents Sea 2: redsea 3, 4: other points
const current_point = ref(0);
const collected = ref([]);

const collectionStore = useCollectionStore();

const DataSrc = [
  {
    state: 1, //0: not spot 1: select  2: answer is right
    pic: "../assets/test.jpg",
    character: "./character_0.svg",
    real: "./real_character_0.svg",
    state_1_title: "California",
    state_1_question:
      "Q: Diatoms are a significant group of phytoplankton in California waters and also largest species of phytoplankton in the world. Which are not true about phtoplankton like diatoms playing indispensable role in world's ecosystems and the overall health of the planet？",
    state_2_answer:
      "algal bloom can cause mass fish kills, contaminate seafood, and lead to health issues in humans and marine organisms.",
    state_2_fact:
      "40% of the organic carbon annually comes from the photosynthesis of diatoms, making diatoms a significant contributor to the removal of carbon dioxide from the atmosphere.",
    state_2_prize_index: 1,
    state_2_prize_src: "/img/collection0.png",
    // state_2_prize_src: "../assets/character.jpg",
    options: [
      {
        description:
          "It is responsible for a significant portion of the Earth's carbon fixation through photosynthesis",
        is_ans: false,
      },
      {
        description: "It forms the base of marine food chains",
        is_ans: false,
      },
      {
        description:
          "Algal bloom, dense aquatic population of phytoplankton, only have positive effects on ocean ecosystem",
        is_ans: true,
      },
    ],
  },
  {
    state: 1, //0: not spot 1: select  2: answer is right
    pic: "../assets/test.jpg",
    character: "./character_1.svg",
    real: "./real_character_1.svg",
    state_1_title: "Barents Sea",
    state_1_question:
      "Q: Coccolithophores are marine algae that possess calcite plates called coccoliths. Though they are little, about 2.0–75.0 μm in cell diameter, they play crucial roles in our everyday life since…(choose the wrong answer)",
    state_2_answer:
      "Coccolithophores are a group of marine microalgae known for their unique calcium carbonate plates called coccoliths. ",
    state_2_fact:
      "phytoplankton remove between 5-12 gigatons of carbon dioxide per year, which approxiately equivalent to the annual emissions of about 1.85 billion to 4.35 billion passenger cars (this is approximately the number of cars on the road worldwide).",
    state_2_prize_index: 1,
    state_2_prize_src: "/img/collection1.png",
    options: [
      {
        description: "they assimilate carbon during photosynthesis",
        is_ans: false,
      },
      {
        description:
          "They are known for their ability to fix nitrogen in aquatic environments.",
        is_ans: true,
      },
      {
        description:
          "their coccoliths(made up of CaCO3) removes carbon from the surface oceans when they die ",
        is_ans: false,
      },
    ],
  },
  {
    state: 1, //0: not spot 1: select  2: answer is right
    pic: "../assets/test.jpg",
    real: "./real_character_2.svg",
    character: "./character_2.svg",
    state_1_title: "Red Sea",
    state_1_question:
      "Q: One of the most notable effects of rising temperatures due to global warming in the Red Sea is the decline of its coral reefs. As the sea is warmer and warmer, zooxanthellae,  living within coral tissues and providing food from photosynthesis, is expelled from coral reef, causing the coral turning into white. The process is called coral bleaching. What is not the impact that coral bleaching brings?",
    state_2_answer:
      "Coral bleaching is a stress response in corals that can lead to the loss of their symbiotic algae, reduced coral health, and, in severe cases, coral mortality. This, in turn, can have a cascading effect on the health and diversity of the entire reef ecosystem.",
    state_2_fact:
      "Coral reef and zooxanthellae together provide home for countless species of fish and other marine creatures. But do you know that？Half of all net primary production in the world is from marine phytoplankton! This is how important these tiny creatures are! ",
    state_2_prize_index: 1,
    state_2_prize_src: "/img/collection2.png",
    options: [
      {
        description: "Increased coral growth and reef resilience.",
        is_ans: true,
      },
      {
        description: "Protect coastlines from erosion and storms.",
        is_ans: false,
      },
      {
        description:
          "Regulating the Earth's climate by absorbing and storing carbon dioxide",
        is_ans: false,
      },
    ],
  },
  {
    state: 0, //0: not spot 1: select  2: answer is right
    pic: "/prize_test.svg",
    character: "./character_3.svg",
    real: "./real_character_3.svg",
    state_0_title: "Equatorial Atlantic Ocean ( Amazon River Plume )",
    state_0_content:
      "Over recent decades, it has soaked up 90% of the warming caused by the rise in greenhouse gases, with the uppermost few meters of the ocean containing as much heat as the entire Earth's atmosphere. - nasa",
  },
  {
    state: 0, //0: not spot 1: select  2: answer is right
    pic: "/prize_test.svg",
    character: "./character_4.svg",
    real: "./real_character_4.svg",
    state_0_title: "Kalahari Desert",
    state_0_content:
      "40% of the human-produced CO2 in the ocean, worldwide, was originally absorbed from the atmosphere into the Southern Ocean, making it one of the most important carbon sinks on our planet. -nasa",
  },
];
// define functions needed to be exposed
defineExpose({
  changeTexture,
  isPopupVisible,
});

// onMounted
onMounted(() => {
  canva_setup();
  // resize listener

  window.addEventListener("resize", (event) => onWindowResize(event, sphere));
});

const canva_setup = () => {
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
  console.log(controls);

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
  const markerCount = 5;
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

    float lineThickness = 0.35;
    float line1 = abs(lUv.x - lUv.y);
    float line2 = abs(lUv.x + lUv.y);

    val = max(val, 1.0 - step(lineThickness, line1));
    val = max(val, 1.0 - step(lineThickness, line2));


    if (val < 0.5) discard;

    vec4 diffuseColor = vec4( diffuse, opacity );`
      );
      // console.log(shader.fragmentShader);
    },
  });
  mMarker.defines = { USE_UV: " " }; // needed to be set to be able to work with UVs
  let markers = new THREE.InstancedMesh(gMarker, mMarker, markerCount);
  let dummy = new THREE.Object3D();
  let phase = [];

  let markersData = [
    {
      position: new THREE.Vector3(-1.75, 2.4, 2.75),
      mag: "coastal California", //
      // index: 0,
    },
    {
      position: new THREE.Vector3(0.8, 3.85, -0.75),
      mag: "Barents Sea", //
      // index: 1,
    },
    {
      position: new THREE.Vector3(2.9, 1.5, -2.3),
      mag: "Red Sea", //
      index: 2,
    },
    {
      position: new THREE.Vector3(2.85, 0.25, 2.81),
      mag: "Equatorial Atlantic Ocean",
      // index: 3,
    },
    {
      position: new THREE.Vector3(3.65, -1.6, -0.47),
      mag: "Ocean near Kalahari Desert",
      // index: 4,
    },
  ];
  for (let i = 0; i < markerCount; i++) {
    //dummy.position.randomDirection().setLength(rad + 0.1);
    dummy.position.copy(markersData[i].position);
    dummy.lookAt(dummy.position.clone().setLength(rad + 1));
    dummy.scale.set(0.5, 0.5);
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
  raycaster.params.Points.threshold = 100;
  let intersections;
  window.addEventListener("pointerdown", (event) => {
    const { width, height } = container.value.getBoundingClientRect();
    pointer.x = (event.clientX / width) * 2 - 1;
    pointer.y = -(event.clientY / height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    intersections = raycaster.intersectObject(markers).filter((m) => {
      return m.uv.subScalar(0.5).length() * 2 < 5;
    });
    if (intersections.length > 0) {
      const targetPosition = new THREE.Vector3();
      targetPosition.copy(intersections[0].point);
      targetPosition.normalize().multiplyScalar(camera.position.length());
      new TWEEN.Tween(camera.position)
        .to(targetPosition, 1500)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
      isPopupVisible.value = true;
      const labelSound = new Audio("/sound/button.wav");
      labelSound.volume = 0.05;
      labelSound.play();
      current_point.value = intersections[0].instanceId;
      // current_point.value = markersData[iid].index;
      // console.log(iid, current_point.value);
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
  let isMouseDown = false;

  container.value.addEventListener("mousedown", () => {
    isMouseDown = true;
    setTimeout(() => {
      isMouseDown = false;
    }, 500);
  });
  container.value.addEventListener("mousemove", () => {
    if (isMouseDown && !isPopupVisible.value) {
      const earthRotate = new Audio("/sound/earth2.mp3");
      earthRotate.volume = 0.5;
      earthRotate.play();
      isMouseDown = false;
    }
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
