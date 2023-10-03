<script setup>
</script>

<template>
	<div class="w-full h-20 flex flex-row justify-center items-center">
	<div id="sliderbar" class="flex flex-col justify-center items-center">
		<input v-model="sildervalue" @input="emitSliderValue" type="range" class="myslider" min="2002" max="2023">
		<!-- <span class="rangeValue">{{sildervalue}}</span> -->
		<div class="years flex flex-row gap-1.5 mt-3">
			<p class="year">2002</p>
			<p class="year">2003</p>
			<p class="year">2004</p>
			<p class="year">2005</p>
			<p class="year">2006</p>
			<p class="year">2007</p>
			<p class="year">2008</p>
			<p class="year">2009</p>
			<p class="year">2010</p>
			<p class="year">2011</p>
			<p class="year">2012</p>
			<p class="year">2013</p>
			<p class="year">2014</p>
			<p class="year">2015</p>
			<p class="year">2016</p>
			<p class="year">2017</p>
			<p class="year">2018</p>
			<p class="year">2019</p>
			<p class="year">2020</p>
			<p class="year">2021</p>
			<p class="year">2022</p>
			<p class="year">2023</p>
		</div>
	</div>
	<button
	  @click="emitChangeSeason"
	  type="button"
	  class="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	>
	  Switch Season
	</button>
	</div>
</template>


<script>
export default {
	data () {
		return {
			sildervalue: 2002,
			season: true
		}
	},
	methods: {
		emitSliderValue() {
			this.$emit("sliderChange", this.sildervalue);
		},
		emitChangeSeason() {
			this.season = !this.season;
			this.$emit("seasonChange", this.season);
		}
	}
}
</script>

<style scoped>
.myslider {
	/* position: absolute; */
	bottom: 1rem;
	width: 710px;
	height: 5px;
	/* transform: translate(-50%, -50%); */
	-webkit-appearance: none;
	appearance: none;
	background-color: #ffffff;
	/* border: 1px solid #ffffff;
	border-radius: 1rem; */
	opacity: 0.7;
	transition: opacity .2s ease-in;
	-webkit-transition: opacity .2s ease-in;
}

.myslider:hover {
	opacity: 1;
}

.myslider::-webkit-slider-thumb {  
	-webkit-appearance: none;
	appearance: none;
	height: 20px;
	width: 20px;
	background-color: #868686;
	/* border: 1px solid #000000;
	border-radius: 1rem; */
	-webkit-transition: all .3s ease-in;
	transition: all .3s ease-in;
}

.myslider::-webkit-slider-thumb:hover {
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0,4);
}


.rangeValue {
	color: #ffffff;
	text-align: center;

}

.year{
	color: #ffffff;
	font-size: 0.5rem;
	font-family: "Jura";
}

</style>
