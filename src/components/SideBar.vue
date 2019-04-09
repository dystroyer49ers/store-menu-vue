<template>
  <nav
    class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top"
    style="z-index:3;width:270px"
    id="mySidebar"
  >
    <div class="w3-container w3-red w3-display-container w3-padding-16">
      <i sclass="fas fa-times w3-hide-large w3-button w3-display-topright"></i>

      <h3 class="w3-bar-item w3-red" style="font-weight:bold">
        Parts and Co
        <i class="fas fa-wrench"></i>
      </h3>
    </div>

    <div class="w3-padding-64 w3-large">
      <a routerLink="/about-us" class="item w3-bar-item w3-button w3-hover-red">About Us</a>
    	<b-dropdown v-model="navigation" position="is-bottom-right" aria-role="menu">
                    <a
                        class="navbar-item item w3-bar-item w3-button w3-hover-red dropdown-item"
                        slot="trigger"
                        role="button">
                        <span>Menu</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item custom aria-role="menuitem">
                        Logged as <b>Rafael Beraldo</b>
                    </b-dropdown-item>
                    <hr class="dropdown-divider">
                    <b-dropdown-item has-link aria-role="menuitem">
                        <a href="https://google.com" target="_blank">
                            <b-icon icon="link"></b-icon>
                            Google (link)
                        </a>
                    </b-dropdown-item>
                    <b-dropdown-item value="home" aria-role="menuitem">
                        <b-icon icon="home"></b-icon>
                        Home
                    </b-dropdown-item>
                    <b-dropdown-item value="products" aria-role="menuitem">
                        <b-icon icon="cart"></b-icon>
                        Products
                    </b-dropdown-item>
                    <b-dropdown-item value="blog" disabled aria-role="menuitem">
                        <b-icon icon="book-open"></b-icon>
                        Blog
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem">
                    <b-dropdown-item value="settings">
                        <b-icon icon="settings"></b-icon>
                        Settings
                    </b-dropdown-item>
                    <b-dropdown-item value="logout" aria-role="menuitem">
                        <i class="fa fab-sign-out"></i>
                        Logout
                    </b-dropdown-item>
        </b-dropdown>

      <div class="item w3-bar-item w3-button w3-white w3-hover-white">
        <div class="w3-hover-white w3-dropdown-content">
			<button class="w3-button">Products</button>
        	<i class="fas fa-caret-down"></i>
        	<a routerLink="/products" class="item w3-bar-item w3-button w3-hover-red dropdown-item">Produt Lits</a>
        	<a routerLink="/all-products" class="item w3-bar-item w3-button w3-hover-red dropdown-item">All Products</a>
        	<a href="#" class="item w3-bar-item w3-button w3-hover-red dropdown-item">New Products</a>
        	<a href="#" class="item w3-bar-item w3-button w3-hover-red dropdown-item">Our Products</a>
        	<a href="#" class="item w3-bar-item w3-button w3-hover-red dropdown-item">2016 Editions</a>
        </div>
      </div>

		<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
      <span>Content</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
</div>

      <div class="item w3-bar-item w3-button w3-white w3-hover-white" suiDropdown>
        <span class="text">Brands</span>
        <i class="fas fa-caret-down"></i>
        <div class="w3-hover-white" suiDropdownMenu>
          <a href="#" class="item w3-bar-item w3-button w3-hover-red dropdown-item">
            Parts and Co
            <i class="fas fa-wrench" aria-hidden="true"></i>
          </a>
          <a
            routerLink="/parts-n-bits"
            class="item w3-bar-item w3-button w3-hover-red dropdown-item"
          >Parts 'n' Bits</a>
          <a
            routerLink="/tex-e"
            class="item w3-bar-item w3-button w3-hover-red dropdown-item"
          >TEX Electronics</a>
          <a
            routerLink="/q-electronics"
            class="item w3-bar-item w3-button w3-hover-red dropdown-item"
          >Q Electronics</a>
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
</template>

<script>
export default {
	name: "SideBar",
    methods: {
        toggleDropdown (event) {
            event.currentTarget.classList.toggle('is-active')
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


</style>
