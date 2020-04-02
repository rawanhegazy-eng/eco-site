<template>
     <div  >
<div id="container" v-for="i in items" :key="i">	
	
 
	<div class="product-details" >
		
	 
	<h1>{{i.name}}</h1>
<!-- 		<span class="hint new">New</span> -->
<!-- 		<span class="hint free-shipping">Free Shipping</span> -->
<!-- 		the Product rating -->
	<span class="hint-star star">
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star-half-o" aria-hidden="true"></i>
		<i class="fa fa-star-o" aria-hidden="true"></i>
	</span>
		
	
<!-- The most important information about the product -->
		<p class="information">{{i.description}} </p>

		<br/>
		<br/>
		<br/>
		<br/>
		
<!-- 		Control -->
<div class="control">
	
<!-- Start Button buying -->
	<button class="btn">
<!-- 		the Price -->
	 <span class="price">{{i.price}}</span>
<!-- 		shopping cart icon-->
   <span class="shopping-cart">
       <vs-icon icon="shopping_cart" size="small" ></vs-icon>
</span>
<!-- 		Buy Now / ADD to Cart-->
   <span class="buy">Buy Now</span>
 </button>
	<!-- End Button buying -->
	
</div>
			
</div>
	
<!-- 	End	Product details   -->
	
	
	
<!-- 	Start product image & Information -->
	
<div class="product-image">
	
	<img :src="i.img" alt="img1">
	
<!-- 	product Information-->
<div class="info">
	<h2>The Description</h2>
	<ul>
		<li><strong>Feature One: </strong>title one</li>
		<li><strong>Feature two: </strong>title two</li>
		<li><strong>Feature three: </strong>title three</li>
		<li><strong>Feature four: </strong>title four</li>
		<li><strong>Feature five: </strong>title five</li>
		<li><strong>Features six: </strong>title six</li>
	</ul>
</div>
</div>
<!--  End product image  -->


</div>
                                    

                                </div>
</template>
<script>
import Service from '../../services'
export default {
    data(){
        return{
            items:[]

        }
    },
    methods:{
        isInWishList(){},
        isInCart(){},
    },
   async created(){
          this.categoryId=this.$route.params.categoryId;
          var get=await Service.getProductbyCategory(this.categoryId)
           for(var key in get.data) {
    if(get.data.hasOwnProperty(key)) {
        var value = get.data[key];
            this.items.push({
          id:value._id,
          name:value.name,
          price:value.price,
          status:value.status,
          description:value.description,
          img:`http://tmgate.cloud:5545/${value.image[0]}`
       })
        
   }
 }
    }
    
}
</script>
<style scoped>

#container{
	box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
	background: rgba(255, 255, 255, 0.90);
	text-align: center;
	border-radius: 5px;
	overflow: hidden;
	margin: 5em auto;
	height: 300px;
	width: 1500px;
    
    
	
}



/* 	Product details  */
.product-details {
	position: relative;
	text-align: left;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 70%;
background-color:rgb(255, 243, 226);
}

/* 	Product Name */
#container .product-details h1{
	font-family: 'Old Standard TT', serif;
	display: inline-block;
	position: relative;
	font-size: 34px;
	color: #344055;
	margin: 0;
	
}

#container .product-details h1:before{
	position: absolute;
	content: '';
	right: 0%; 
	top: 0%;
	transform: translate(25px, -15px);
	font-family: 'Farsan', cursive;
	display: inline-block;
	background: #FFA69E;
	border-radius: 5px;
	font-size: 14px;
	padding: 5px;
	color: #FFF;
	margin: 0;
	animation: chan-sh 6s ease infinite;

}


@keyframes chan-sh {
	from  {content: 'free shipping';}
	to  {content: 'New';}
	
}

/*Product Rating  */
.hint-star {
	display: inline-block;
	margin-left: 0.5em;
	color: gold;
	width: 50%;
}


/* The most important information about the product */
#container .product-details > p {
	
	text-align: center;
	font-size: 20px;
	color: #7d7d7d;
    margin-top: 30px;
    margin-left: 5%;
	width: 900px;
    
}

/* control */

.control{
	position: absolute;
	bottom: 10%;
	left: 40%;
	
}
/* the Button */
.btn {
	transform: translateY(0px);
	transition: 0.3s linear;
	background: orange;
	border-radius: 5px;
  position: relative;
  overflow: hidden;
	cursor: pointer;
	outline: none;
	border: none;
	color: #eee;
	padding: 0;
	margin: 0;
	
}

.btn:hover{transform: translateY(-4px);}

.btn span {
	font-family: 'Farsan', cursive;
	transition: transform 0.3s;
	display: inline-block;
  padding: 10px 20px;
	font-size: 1.2em;
	margin:0;
	
}
/* shopping cart icon */
.btn .price, .shopping-cart{
	background: #333;
	border: 0;
	margin: 0;
}

.btn .price {
	transform: translateX(-10%); padding-right: 15px;
}

/* the Icon */
.btn .shopping-cart {
	transform: translateX(-100%);
  position: absolute;
	background: #333;
	z-index: 1;
  left: 0;
  top: 0;
}

/* buy */
.btn .buy {z-index: 3; font-weight: bolder;}

.btn:hover .price {transform: translateX(-110%);}

.btn:hover .shopping-cart {transform: translateX(0%);}



/* product image  */
.product-image {
	transition: all 0.3s ease-out;
	display: inline-block;
	position: relative;
	overflow: hidden;
	height: 100%;
	float: right;
	width: 30%;
	display: inline-block;
}

#container img {width: 100%;height: 100%;}

.info {
    background: rgba(27, 26, 26, 0.9);
    font-family: 'Farsan', cursive;
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 2.3;
    text-align: left;
    font-size: 120%;
    cursor: no-drop;
    color: #FFF;
    height: 100%;
    width: 100%;
    left: 50;
    top: 0;
}

.info h2 {text-align: center}
.product-image:hover .info{transform: translateX(0);}

.info ul li{transition: 0.3s ease;
margin-left: 30px;}
.info ul li:hover{transform: translateX(50px) scale(1.3);}

.product-image:hover img {transition: all 0.3s ease-out;}
.product-image:hover img {transform: scale(1.2, 1.2);}
</style>