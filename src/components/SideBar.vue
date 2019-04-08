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

