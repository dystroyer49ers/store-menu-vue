<template>
<div>
    <title>Storemenu/Home</title>

    <!-- Sidebar/menu -->
    <SideBar />

    <!-- Top menu on small screens  -->
    <header class="bar top hidelarge red xlarge">
      <div class="container" id="head">
        <h1 id="title">
          Welcome to Parts and Co
          <i class="fas fa-wrench"></i>
        </h1>
      </div>
      <a
        id="toggole"
        href="javascript:void(0)"
        class="bar-item button padding24 left"
        onclick="_open()"
      >
        <i class="fas fabars"></i>
      </a>
    </header>

     <!-- Overlay effect when opening sidebar on small screens  -->
    <div class="overlay hidelarge" onclick="_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

    <!-- <! !PAGE CONTENT! > -->
    <div class="main" style="margin-left:270px">
      <!-- <! Push down content on small screens > -->
      <div class="hidelarge" style="margin-top:83px"></div>

      <!-- <! Top header > -->
      <header class="container xlarge">
        <div class="container hidemedium hidesmall red">
          <h1 id="title">
            Welcome to Parts and Co
            <i class="fas fawrench"></i>
          </h1>
        </div>

        <!--Dashboard-->
        <!-- <dashboard></dashboard> -->
      </header>

      <div id="seller" class="container xlarge">
        <div class="displaycontainer container">
          <img src="../../assets/img/controller.jpg" alt="Microcontroller" style="width: 100%;"> 
          <div class="displaytopleft textwhite" style="padding:24px 48px">
            <h1 class="jumbo hidesmall">New arrivals</h1>
            <h1 class="hidelarge hidemedium">New arrivals</h1>
            <h1 class="hidesmall">2017 Editions</h1>
            <p>
              <a href="#products" class="button hoverred paddinglarge large">SHOP NOW</a>
            </p>
          </div>
        </div>
      </div>
      <div class="container textgrey" id="products">
        <p>8 items</p>
      </div>

      <!-- <! Product grid > -->
      <!-- <div class="row">
        <div *ngFor="let products of products" id="productgallery">
          <div class="col l3 s6">
            <div class="container">
              <a id="imgr" [routerLink]="['/products']">
                <img src="{{products.img}}" style="width:160px; height: 160px;">
              </a>
              <p>
                {{ products.name }}
                <br>
                <a routerLink="{{products.byLink}}">
                  Product by
                  <em>{{products.by}}</em>
                </a>
                <br>
                <b id="{{products.NewOrSale}}">{{products.cost | currency: "£" }}</b>
              </p>
            </div>
          </div>
        </div>
      </div>-->

      <!-- Subscribe section -->
      <div class="container red padding16">
        <h1>Subscribe</h1>
        <p>To get special offers and VIP treatment:</p>
        <p>
          <input
            class="input border"
            type="text"
            placeholder="Enter email"
            style="width:100%"
          >
        </p>
        <button type="button" class="button marginbottom black">Subscribe</button>
      </div>

      <!-- Footer -->
      <footer class="padding64 white small center" id="footer">
        <div class="rowpadding">
          <div class="col s4 textred" id="contact">
            <h4>Contact</h4>
            <p>Questions? Go ahead.</p>
            <form action="/action_page.php" target="_blank">
              <p>
                <input
                  class="input border c textblack"
                  type="text"
                  placeholder="Name"
                  name="Name"
                  required
                >
              </p>
              <p>
                <input
                  class="input border c textblack"
                  type="text"
                  placeholder="Email"
                  name="Email"
                  required
                >
              </p>
              <p>
                <input
                  class="input border c textblack"
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  required
                >
              </p>
              <p>
                <input
                  class="input border c textblack"
                  type="text"
                  placeholder="Message"
                  name="Message"
                  required
                >
              </p>
              <button type="submit" class="button block red">Send</button>
            </form>
          </div>

          <div class="col s4 white textred" id="about">
            <h4>About</h4>
            <p>
              <a href="/aboutus">About us</a>
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

          <div class="col s4 white textred" id="store">
            <h4>Store</h4>
            <p>
              <i class="fas fafw famapmarker"></i>Parts and Co
              <i class="fas fawrench"></i>
            </p>
            <p>
              <i class="fas fafw faphone"></i> 0044123123
            </p>
            <p>
              <i class="fas fafw faenvelope"></i> ex@mail.com
            </p>
            <h4>We accept</h4>
            <p>
              <i class="fab fafw faccamex"></i> Amex
            </p>
            <p>
              <i class="fas fafw facreditcard"></i> Credit Card
            </p>
            <br>
            <i class="fab fafacebookf hoveropacity large"></i>
            <i class="fab fainstagram hoveropacity large"></i>
            <i class="fab fasnapchat hoveropacity large"></i>
            <i class="fab fapinterestp hoveropacity large"></i>
            <i class="fab fatwitter hoveropacity large"></i>
            <i class="fab falinkedin hoveropacity large"></i>
            <i class="fab fagoogleplusg hoveropacity large"></i>
          </div>
        </div>
      </footer>

      <div class="red center padding24">&copy; Made By Zachary Koyama</div>

      <!-- End page content -->
    </div>

    <!-- Newsletter Modal -->
    <div id="newsletter" class="modal">
      <div class="modalcontent animatezoom" style="padding:32px">
        <div class="container white center">
          <i
            onclick="document.getElementById('newsletter').style.display='none'"
            class="fas fatimes fa2x right"
          ></i>
          <h2 class="wide">NEWSLETTER</h2>
          <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
          <p>
            <input class="input border" type="text" placeholder="Enter email">
          </p>
          <button
            type="button"
            class="button paddinglarge red marginbottom"
            onclick="document.getElementById('newsletter').style.display='none'"
          >Sign up!</button>
        </div>
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
  	}
}
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
