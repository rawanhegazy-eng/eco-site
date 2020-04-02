<template>
  <div class="container x">
        <section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<div class="controls">
					<i class="material-icons">share</i>
					<i class="material-icons">favorite_border</i>
				</div>
				<img src="@/assets/images/Amazon-icon.png" alt="img">
			</div>
			<div class="photo-album">
				<ul>
					<li><img src="@/assets/images/Amazon-icon.png" alt="img1"></li>
					<li><img src="@/assets/images/Amazon-icon.png" alt="img2"></li>
					<li><img src="@/assets/images/Amazon-icon.png" alt="img3"></li>
					<li><img src="@/assets/images/Amazon-icon.png" alt="img4"></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>{{details.name}}</h1>
			<span>{{details.condition}}</span>
		</div>
		<div class="price">
			$ <span>{{details.price}}</span>
		</div>
		<div class="variant">
			<h3>SELECT A COLOR</h3>
			<ul>
				<li><img src="@/assets/images/Amazon-icon.png" alt="c1"></li>
				<li><img src="@/assets/images/Amazon-icon.png" alt="c2"></li>
				<li><img src="@/assets/images/Amazon-icon.png" alt="c3"></li>
				<li><img src="@/assets/images/Amazon-icon.png" alt="c4"></li>
			</ul>
		</div>
		<div class="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>Lorem ipsum, or lipsum. </li>
				<li>Lorem ipsum, or lipsum ipsum.</li>
				<li>Lorem ipsum, or lipsumor lipsum.  </li>
				<li>Lorem ipsum, or lipsumLorem ipsum, or lipsum. </li>
			</ul>
		</div>
		<button class="buy--btn">ADD TO CART</button>
	</div>
</section>
    </div>
</template>
<script>
import Service from '../../services'
export default {
    data(){
        return{
details:"",
image:""
        }
    },
    methods:{

    },
   async created(){
       this.productId=this.$route.params.productId;
var get=await Service.getOneProduct(this.productId)
this.details=get.data
this.image=`http://tmgate.cloud:5545/${get.data.image[0]}`

    }
}
</script>
<style lang="scss">

$color-primary: #4c4c4c;
$color-secondary: #a6a6a6;
$color-highlight: #ff3f40;
* {
	box-sizing: border-box;
}
.x{
    display: grid;
}

 

h3 {
	font-size: 0.7em;
	letter-spacing: 1.2px;
	color: $color-secondary;
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
	background-color: white;
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
	background-color: #f3a847;
	background: radial-gradient(#f3a847, #f3a847);

	.controls {
		display: flex;
		justify-content: space-between;
		padding: 0.8em;
		color: #fff;

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
	border-radius: 0 0 6px 6px;
	background-color: #fff;

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
	margin: 2em 0;

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