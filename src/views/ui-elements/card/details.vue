<template>
  <div class="container xx mt-20">
        <section class="product">
            <div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<div class="controls">
					<i class="material-icons">share</i>
					<span style="mr-10">Swipe Left and Right</span>
					
					<i class="material-icons">favorite_border</i>
					
				</div>
					 <div class="carousel-exampleee">
        <div class="swiper-innerr swiper-containerx">
            <!-- swiper -->
            <swiper :options="swiperOption66" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
                <swiper-slide class="swipR" v-for="k in image" :key="k">
                  <img class="responsive" style="height:250px; width:300px;" :src="k.name" alt="banner">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
				
            </swiper>
			
        </div>
		
    </div>
			</div>
			<div class="photo-album" v-for="x in image" :key="x" >
				<ul style="display:block; background-color:#2f2d2a;">
					<li ><img  :src="x.name" ></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="product__info">
		<div class="title">
			<h1>{{details.name}}</h1>
			<span style="font-size:13px">{{details.condition}}</span>
		</div>
		<div class="price">
			$ <span>{{details.price}}</span>
		</div>
		<div class="variant">
		
		</div>
		<div class="description">
			<h3 class="font">DESCRIPTION</h3>
			<P style="font-size:17px; color:black;">{{details.description}}</P>
		</div>
		<button class="buy--btn">ADD TO CART</button>
	</div>
</section>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Service from '../../../services'
export default {
    data(){
        return{
details:"",
image:[],
   swiperOption66: {
                effect: 'cube',
                grabCursor: true,
                cubeEffect: {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            }

        }
    },
    methods:{

    },
    components: {
        swiper,
        swiperSlide
    },
   async created(){
       this.productId=this.$route.params.productId;
var get=await Service.getOneProduct(this.productId)

this.details=get.data[0]
for(var i =0;i<get.data[0].image.length;i++){
this.image.push({name:`http://tmgate.cloud:5545/${get.data[0].image[i]}`})
}
console.log(this.details)

    }
}
</script>
<style lang="scss">
.swiper-innerr {
    position: relative;
    overflow: hidden;
    height: 330px;
    padding: 15px;
}

.swiper-containerx {
    width: 300px !important;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
}

.swipR {
    background-position: center;
    background-size: cover;
}
$color-primary: #4c4c4c;
$color-secondary: #a6a6a6;
$color-highlight: #ff3f40;
* {
	box-sizing: border-box;
}
.xx{
    display: block;
   
}

 

.font {
	font-size: 1.1em;
	font-weight: bold;
	letter-spacing: 1.2px;
	color: #fff;
}

img {
			max-width: 100%;
			filter: drop-shadow(1px 1px 3px $color-secondary);
		}

/* ----- Product Section ----- */
.product {
	display: grid;
	grid-template-columns: 0.9fr 1fr;
	margin: auto;
	padding: 2.5em 0;
	min-width: 600px;
	background-color: #fdc04e;
	border-radius: 5px;
}

/* ----- Photo Section ----- */
.product__photo {
	position: relative;
}

.photo-container {
	position: absolute;
	left: -2.5em;
	display: grid;
	grid-template-rows: 1fr;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}

.photo-main {
	border-radius: 6px 6px 0 0;
	background-color: #faf3e3;
	background: radial-gradient(#faf3e3, #faf3e3);

	.controls {
		display: flex;
		justify-content: space-between;
		padding: 0.8em;
		color: #ff8100;
		

		i {
			cursor: pointer;
		}
	}

	img {
		position: absolute;
		left: -1em;
		top: 2em;
		max-width: 110%;
		filter: saturate(150%) contrast(120%) hue-rotate(10deg)
			drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
	}
}

.photo-album {
	padding: 0.7em 1em;
	
	background-color: #faf3e3;

	ul {
		display: flex;
		justify-content: space-around;
	}

	li {
		float: left;
		width: 55px;
		height: 55px;
		padding: 7px;
		border: 1px solid $color-secondary;
		border-radius: 3px;
	}
}

/* ----- Informations Section ----- */
.product__info {
	padding: 0.8em 0;
}

.title {
	h1 {
		margin-bottom: 0.1em;
		color: $color-primary;
		font-size: 1.5em;
		font-weight: 900;
	}

	span {
		font-size: 0.7em;
		color: $color-secondary;
	}
}

.price {
	margin: 1.5em 0;
	color: $color-highlight;
	font-size: 1.2em;

	span {
		padding-left: 0.15em;
		font-size: 2.9em;
	}
}

.variant {
	overflow: auto;

	h3 {
		margin-bottom: 1.1em;
	}

	li {
		float: left;
		width: 35px;
		height: 35px;
		padding: 3px;
		border: 1px solid transparent;
		border-radius: 3px;
		cursor: pointer;

		&:first-child,
		&:hover {
			border: 1px solid $color-secondary;
		}
	}

	li:not(:first-child) {
		margin-left: 0.1em;
	}
}

.description {
	clear: left;

	h3 {
		margin-bottom: 1em;
	}

	ul {
		font-size: 0.8em;
		list-style: disc;
		margin-left: 1em;
	}

	li {
		text-indent: -0.6em;
		margin-bottom: 0.5em;
	}
}

.buy--btn {
	padding: 1.5em 3.1em;
	border: none;
	border-radius: 7px;
	font-size: 0.8em;
	font-weight: 700;
	letter-spacing: 1.3px;
	color: #fff;
	background-color: black;
	box-shadow: 2px 2px 25px -7px $color-primary;
	cursor: pointer;

	&:active {
		transform: scale(0.97);
	}
}
</style>