<template>
<div>
    <title>Storemenu/Home</title>

    <!-- Sidebar/menu -->
	
    	<SideBar />


  <header class="w3-bar w3-top w3-hide-large w3-red w3-xlarge">
	<div class="w3-container" id="head">
		<h1 id="title">Welcome to Parts and Co
			<i class="fas fa-wrench"></i>
		</h1>
	</div>
	<a id="toggole" href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-24 w3-left"  @click="w3_open()">
		<i class="fas fa-bars"></i>
	</a>
</header>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large" @click="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:270px">

	<!-- Push down content on small screens -->
	<div class="w3-hide-large" style="margin-top:83px"></div>

	<!-- Top header -->
	<header class="w3-container w3-xlarge">
		<div class="w3-container w3-hide-medium w3-hide-small w3-red">
			<h1 id="title">Welcome to Parts and Co
				<i class="fas fa-wrench"></i>
			</h1>
		</div>

		<!--Dashboard-->
		<dashboard></dashboard> 
	</header>


	<div id="seller" class="w3-container w3-xlarge">
		<div class="w3-display-container w3-container">
			<img src="../../assets/img/controller.jpg" alt="Microcontroller" style="width: 100%;" />
			<div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
				<h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
				<h1 class="w3-hide-large w3-hide-medium">New arrivals</h1>
				<h1 class="w3-hide-small">2017 Editions</h1>
				<p>
					<a href="#products" class="w3-button w3-hover-red w3-padding-large w3-large">SHOP NOW</a>
				</p>
			</div>
		</div>
	</div>
	<div class="w3-container w3-text-grey" id="products">
		<p>8 items</p>
	</div>

	<!-- Product grid -->
	<!-- <div class="w3-row">
		<div *ngFor="let products of products" id="product-gallery">
			<div class="w3-col l3 s6">
				<div class="w3-container">
					<a id="imgr" [routerLink]="['/products']">
						<img src="{{products.img}}"  style="width:160px; height: 160px;">
					</a>
					<p>{{ products.name }}
						<br>
						<a routerLink="{{products.byLink}}">
							Product by <em>{{products.by}}</em>
						</a>
						<br>
						<b id="{{products.NewOrSale}}">{{products.cost | currency: "£" }}</b>
					</p>
				</div>	
			</div>
		</div> 
	</div> --> 


	<!-- Subscribe section -->
	<div class="w3-container w3-red w3-padding-16">
		<h1>Subscribe</h1>
		<p>To get special offers and VIP treatment:</p>
		<p>
			<input class="w3-input w3-border" type="text" placeholder="Enter e-mail" style="width:100%">
		</p>
		<button type="button" class="w3-button w3-margin-bottom w3-black">Subscribe</button>
	</div>

	<!-- Footer -->
	<footer class="w3-padding-64 w3-white w3-small w3-center " id="footer">
		<div class="w3-row-padding">
			<div class="w3-col s4 w3-text-red" id="contact">
				<h4>Contact</h4>
				<p>Questions? Go ahead.</p>
				<form action="/action_page.php" target="_blank">
					<p>
						<input class="w3-input w3-border w3-c w3-text-black" type="text" placeholder="Name" name="Name" required>
					</p>
					<p>
						<input class="w3-input w3-border w3-c w3-text-black" type="text" placeholder="Email" name="Email" required>
					</p>
					<p>
						<input class="w3-input w3-border w3-c w3-text-black" type="text" placeholder="Subject" name="Subject" required>
					</p>
					<p>
						<input class="w3-input w3-border w3-c w3-text-black" type="text" placeholder="Message" name="Message" required>
					</p>
					<button type="submit" class="w3-button w3-block w3-red">Send</button>
				</form>
			</div>

			<div class="w3-col s4 w3-white w3-text-red" id="about">
				<h4>About</h4>
				<p>
					<a href="/about-us">About us</a>
				</p>
				<p>
					<a href="#">We're hiring</a>
				</p>
				<p>
					<a href="#">Support</a>
				</p>
				<p>
					<a href="#">Find store</a>
				</p>
				<p>
					<a href="#">Shipment</a>
				</p>
				<p>
					<a href="#">Payment</a>
				</p>
				<p>
					<a href="#">Gift card</a>
				</p>
				<p>
					<a href="#">Return</a>
				</p>
				<p>
					<a href="#">Help</a>
				</p>
			</div>

			<div class="w3-col s4 w3-white w3-text-red" id="store">
				<h4>Store</h4>
				<p>
					<i class="fas fa-fw fa-map-marker"></i>Parts and Co
					<i class="fas fa-wrench"></i>
				</p>
				<p>
					<i class="fas fa-fw fa-phone"></i> 0044123123</p>
				<p>
					<i class="fas fa-fw fa-envelope"></i> ex@mail.com</p>
				<h4>We accept</h4>
				<p>
					<i class="fab fa-fw fa-cc-amex"></i> Amex</p>
				<p>
					<i class="fas fa-fw fa-credit-card"></i> Credit Card</p>
				<br>
				<i class="fab fa-facebook-f w3-hover-opacity w3-large"></i>
				<i class="fab fa-instagram w3-hover-opacity w3-large"></i>
				<i class="fab fa-snapchat w3-hover-opacity w3-large"></i>
				<i class="fab fa-pinterest-p w3-hover-opacity w3-large"></i>
				<i class="fab fa-twitter w3-hover-opacity w3-large"></i>
				<i class="fab fa-linkedin w3-hover-opacity w3-large"></i>
				<i class="fab fa-google-plus-g w3-hover-opacity w3-large"></i>
			</div>
		</div>
	</footer>

	<div class="w3-red w3-center w3-padding-24">&copy; Made By Zachary Koyama</div>

	<!-- End page content -->
</div>

<!-- Newsletter Modal -->
<div id="newsletter" class="w3-modal">
	<div class="w3-modal-content w3-animate-zoom" style="padding:32px">
		<div class="w3-container w3-white w3-center">
			<i onclick="document.getElementById('newsletter').style.display='none'" class="fas fa-times fa-2x w3-right"></i>
			<h2 class="w3-wide">NEWSLETTER</h2>
			<p>Join our mailing list to receive updates on new arrivals and special offers.</p>
			<p>
				<input class="w3-input w3-border" type="text" placeholder="Enter e-mail">
			</p>
			<button type="button" class="w3-button w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('newsletter').style.display='none'">Sign up!</button>
		</div>
	</div>
</div>
</template>

<script>
import SideBar from '../SideBar';

export default {
	name: 'HomePage',
  	components: {
    	SideBar
  	},
	methods: {

		// Open and close sidebar
		w3_open : function w3_open() {
  			document.getElementById("mySidebar").style.display = "block";
  			document.getElementById("myOverlay").style.display = "block";
		},

		w3_close : function w3_close() {
  			document.getElementById("mySidebar").style.display = "none";
  			document.getElementById("myOverlay").style.display = "none";
		}
	}
};
</script>

<style>
body {
	font-size: 16px;
}
#title {
	text-align: center;
}
#contenthd {
	margin-top: 5px;
	padding-left: 0px;
}
#toggole{
	margin-top: 73px; 
	 /* minwidth: 21px; */ 
}
/* #head{
	minwidth: 526px;
} */

/*Search section*/
#searchbar{
	margin-top: 40px;
} 

#searchengine{
	margin-top: 40px;
	margin-right: 400px;
	margin-left: 290px;
	margin-bottom: 5px;
} 

#searchicon{
	margin-top: 59px;
	margin-right: 0px;
	margin-left: 1187px;
	margin-bottom: 5px;
}

#shop{
	margin-top: 59px;
	margin-right: 0px;
	margin-bottom: 5px;
	text-decoration: none;
}
#cart{
	text-decoration: none;
}
#carticon{
	margin-top: 50px;
	text-decoration: none;
}
#sign{
	margin-top: 59px;
	margin-right: 74px;
	text-decoration: none;
	margin-bottom: 5px;
}
#user{
	text-align: center;
	font-size: 16px;
}
#password{
	text-align: center;
	font-size: 16px;
}
#rme{
	text-align: center;
	font-size: 16px;
	margin-top: 28px;
	margin-left: 70px;
}
#newbtn{
	text-align: center;
	font-size: 16px;
	padding-bottom: 10px;
	text-decoration: none;
}
#newbtnlink{
	text-decoration: none;
}
#loginq{
	text-align: center;
}
/* #new{
	textalign: center;
	fontsize: 16px
}*/

/* New Or Sale Or No */

#new {
	color: red;
}

#sale {
	color: red;
}

#no {
	color: black;
}


/* image link box remover */
#imgr{
	text-decoration: none;
	border-style: none;
	outline: none;
}
#buy{
	justify-content: center;
	margin-left: 22px;
}
#seller{
	margin-top: 10px;
	margin-left: 0px;
}
#products{
	margin-top: 20px;
}
#productgallery{
	margin-left: 10px;
}
</style>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #FF2724;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'istwitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $red;
$linkinvert: $primary-invert;
$linkfocusborder: $primary;


</style>
