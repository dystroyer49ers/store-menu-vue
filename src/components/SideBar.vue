<template>
<div>
	<nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:270px" id="mySidebar">
        <div class="w3-container w3-red w3-display-container w3-padding-16">
    	  <i sclass="fas fa-times w3-hide-large w3-button w3-display-topright"></i>

    	  <h3 class="w3-bar-item w3-red" style="font-weight:bold">
    	    Parts and Co <i class="fas fa-wrench"></i>
    	  </h3>
    	</div>
		<div class=" w3-padding-64 w3-large">
    		<a routerLink="/about-us" class="item w3-bar-item w3-button w3-hover-red">About Us</a>

			<div class="navbar-menu">
        	    <div class="navbar-end">
        	        <b-dropdown v-model="navigation" position="is-bottom-left" aria-role="menu">
        	            <a class="navbar-item item w3-bar-item w3-button w3-hover-red dropdown-item" slot="trigger" role="button">
        	                Products <i class="fa fa-caret-down"></i>
        	            </a>
        	            <b-dropdown-item has-link aria-role="menuitem">
        	               	<a routerLink="/products" class="item w3-bar-item w3-button w3-hover-red dropdown-item">Produt Lits</a>
        	            </b-dropdown-item>
						<b-dropdown-item has-link aria-role="menuitem">
							<a routerLink="/all-products" class="item w3-bar-item w3-button w3-hover-red dropdown-item">All Products</a>
						</b-dropdown-item>

						<b-dropdown-item has-link aria-role="menuitem">
							<a href="#" class="item w3-bar-item w3-button w3-hover-red dropdown-item">New Products</a>
						</b-dropdown-item>
						<b-dropdown-item has-link aria-role="menuitem">
							<a href="#" class="item w3-bar-item w3-button w3-hover-red dropdown-item">Our Products</a>
						</b-dropdown-item>
						<b-dropdown-item has-link aria-role="menuitem">
								<a href="#" class="item w3-bar-item w3-button w3-hover-red dropdown-item">2016 Editions</a>
						</b-dropdown-item>
        	        </b-dropdown>
        	    </div>
        	</div>

			<div class="navbar-menu">
        	    <div class="navbar-end">
        	        <b-dropdown v-model="navigation" position="is-bottom-left" aria-role="menu">
        	            <a class="navbar-item item w3-bar-item w3-button w3-hover-red dropdown-item" slot="trigger" role="button">
        	                Brands <i class="fa fa-caret-down"></i>
        	            </a>
        	            <b-dropdown-item has-link aria-role="menuitem">
        	               	<a href="#" class="item w3-bar-item w3-button w3-hover-red dropdown-item">
    		      				Parts and Co <i class="fas fa-wrench" aria-hidden="true"></i>
    		    			</a>
        	            </b-dropdown-item>
						<b-dropdown-item has-link aria-role="menuitem">
							<a routerLink="/parts-n-bits" class="item w3-bar-item w3-button w3-hover-red dropdown-item">Parts 'n' Bits</a>
						</b-dropdown-item>

						<b-dropdown-item has-link aria-role="menuitem">
							<a routerLink="/tex-e" class="item w3-bar-item w3-button w3-hover-red dropdown-item">TEX Electronics</a>
						</b-dropdown-item>
						<b-dropdown-item has-link aria-role="menuitem">
							<a routerLink="/q-electronics" class="item w3-bar-item w3-button w3-hover-red dropdown-item">Q Electronics</a>
						</b-dropdown-item>
        	        </b-dropdown>
        	    </div>
        	</div>
    		<a href="#" class="item w3-bar-item w3-button w3-hover-red">
    		   Deals and
    		   <br>New Products
    		</a>
    		<a href="#" class="item w3-bar-item w3-button w3-hover-red">Services</a>
    		<a href="#" class="item w3-bar-item w3-button w3-hover-red">Help</a>

		</div>
    	<!--Non-navigation -->
    	<a href="#footer" class="w3-bar-item w3-button w3-padding w3-hover-red">Contact</a>
    	<a
    	  href="javascript:void(0)"
    	  class="w3-bar-item w3-button w3-padding w3-hover-red"
    	  onclick="document.getElementById('newsletter').style.display='block'"
    	>Newsletter</a>
    	<a href="#footer" class="w3-bar-item w3-button w3-padding w3-hover-red">Subscribe</a>
	</nav>
</div>
</template>

<script>
export default {
	name: "SideBar",
    methods: {
        toggleDropdown (event) {
            event.currentTarget.classList.toggle('is-active')
        },
		// Open and close sidebar
		w3_open : function w3_open() {
		  document.getElementById("mySidebar").style.display = "block";
		  document.getElementById("myOverlay").style.display = "block";
		},

		w3_close :function w3_close() {
		  document.getElementById("mySidebar").style.display = "none";
		  document.getElementById("myOverlay").style.display = "none";
		}
    }
};
</script>

<style>
a:link {
text-decoration: none;
}
a {
font-size: 20px;
}
menu {
background-color: white;
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

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
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
$link-invert: $primary-invert;
$link-focus-border: $primary;

html, body, #app {
  height: 100%;
}
#app {
  min-height: 100%;
  //display: flex;
  //flex-direction: column;
}
/*.main-content {
  //flex: 1;
}*/

.footer {
  margin-top: -12px;
}
@media screen and (max-width: 768px) {
  #menu-toggle:checked + .nav-menu {
    display: block;
  }
}
</style>
