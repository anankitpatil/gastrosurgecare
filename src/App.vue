<template>
<div id="app">
  <!-- Sub navigation -->
  <!--<div class="sub-nav">
    <div class="container">
      <a href="#">Gastrosurge Care Clinic</a>
      <a href="#">Email us</a>
      <a href="#">How to find us</a>
      <a href="#" class="social"><svg xmlns="http://www.w3.org/2000/svg" width="1298" height="2500" viewBox="88.428 12.828 107.543 207.085"><path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z" fill="#AAA"/></svg></a>
      <a href="#" class="social">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path style="text-indent:0;text-align:start;line-height:normal;text-transform:none;block-progression:tb;-inkscape-font-specification:Sans;fill:#AAA" d="M 11.46875 5 C 7.9162454 5 5 7.9154247 5 11.46875 L 5 20.53125 C 5 24.083755 7.9154247 27 11.46875 27 L 20.53125 27 C 24.083755 27 27 24.084575 27 20.53125 L 27 11.46875 C 27 7.9162454 24.084575 5 20.53125 5 L 11.46875 5 z M 11.46875 7 L 20.53125 7 C 23.003925 7 25 8.9972546 25 11.46875 L 25 20.53125 C 25 23.003925 23.002745 25 20.53125 25 L 11.46875 25 C 8.9960753 25 7 23.002745 7 20.53125 L 7 11.46875 C 7 8.9960753 8.9972546 7 11.46875 7 z M 21.90625 9.1875 C 21.404224 9.1875 21 9.5917228 21 10.09375 C 21 10.595776 21.404224 11 21.90625 11 C 22.408277 11 22.8125 10.595776 22.8125 10.09375 C 22.8125 9.5917228 22.408277 9.1875 21.90625 9.1875 z M 16 10 C 12.698136 10 10 12.698136 10 16 C 10 19.301864 12.698136 22 16 22 C 19.301864 22 22 19.301864 22 16 C 22 12.698136 19.301864 10 16 10 z M 16 12 C 18.220984 12 20 13.779016 20 16 C 20 18.220984 18.220984 20 16 20 C 13.779016 20 12 18.220984 12 16 C 12 13.779016 13.779016 12 16 12 z" overflow="visible" font-family="Sans"/>
        </svg>
      </a>
    </div>
  </div>-->
  <!-- Main navigation -->
  <nav>
    <div class="container">
      <router-link active-class="active" to="/" class="logo"><img src="./assets/gastrosurge-care-logo.jpg" /><span>Gastrosurge<br /><span class="light">Care</span> <span class="lighter">Clinic</span></span>
      </router-link>
      <ul class="menu">
        <li>
          <router-link active-class="active" to="/">Home</router-link>
        </li>
        <li class="dropdown">
          <a>Expertise</a>
          <ul class="sub-menu">
            <li>
              <router-link active-class="active" to="/upper-gi">Upper GI</router-link>
            </li>
            <li>
              <router-link active-class="active" to="/hpb">HPB</router-link>
            </li>
            <li>
              <router-link active-class="active" to="/lower-gi">Lower GI</router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a>Treatments</a>
          <ul class="sub-menu">
            <li>
              <router-link active-class="active" to="/routine">Routine</router-link>
            </li>
            <li>
              <router-link active-class="active" to="/specialised">Specialized</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link active-class="active" to="/about">About</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/contact">Contact</router-link>
        </li>
        <li>
          <a>Appointments</a>
          <ul class="sub-menu">
            <li>
              <router-link active-class="active" to="/appointment">Book an appointment</router-link>
            </li>
            <li>
              <router-link active-class="active" to="/faq">FAQs</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  <!-- Burger button -->
  <a href="#" class="burger-btn" @click="mobileMenuOpen=!mobileMenuOpen" :class="{active: mobileMenuOpen}">
    <span></span>
    <span></span>
    <span></span>
  </a>
  <!-- Burger menu -->
  <div class="burger-menu" :class="{open: mobileMenuOpen}">
    <ul>
      <li>
        <router-link active-class="active" to="/">Home</router-link>
      </li>
      <li class="dropdown">
        <router-link active-class="active" to="/expertise">Expertise</router-link>
        <ul class="sub-menu">
          <li>
            <router-link active-class="active" to="/expertise#Upper-GI">Upper GI</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/expertise#HPB">HPB</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/expertise#Lower-GI">Lower GI</router-link>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <router-link active-class="active" to="/treatments">Treatments</router-link>
        <ul class="sub-menu">
          <li>
            <router-link active-class="active" to="/expertise#Upper-GI">Routine</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/expertise#HPB">Specialized</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link active-class="active" to="/academics">Academics</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/appointment">Book an appointment</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/faq">FAQs</router-link>
      </li>
    </ul>
  </div>
  <!-- Router View -->
  <transition name="router">
    <router-view/>
  </transition>
  <!-- Footer -->
  <footer>
    <div class="container">
      <div>
        <div class="icon-tab">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
          	<path class="icon-fill" d="M108.8,0H94.6c-3.3,0-6.3,1.5-8.4,3.8h10.2h10.4c5.2,0,9.4,4.2,9.4,9.4v10.4v10.2c2.3-2.1,3.8-5,3.8-8.4V11.2
          		C120,5,115,0,108.8,0z"/>
          	<path class="icon-fill" d="M11.2,0h14.1c3.3,0,6.3,1.5,8.4,3.8H23.5H13.1c-5.2,0-9.4,4.2-9.4,9.4v10.4v10.2c-2.3-2.1-3.8-5-3.8-8.4V11.2
          		C0,5,5,0,11.2,0z"/>
          	<path class="icon-fill" d="M108.8,120H94.6c-3.3,0-6.3-1.5-8.4-3.8h10.2h10.4c5.2,0,9.4-4.2,9.4-9.4V96.5V86.2c2.3,2.1,3.8,5,3.8,8.4
          		v14.1C120,115,115,120,108.8,120z"/>
          	<path class="icon-fill" d="M11.2,120h14.1c3.3,0,6.3-1.5,8.4-3.8H23.5H13.1c-5.2,0-9.4-4.2-9.4-9.4V96.5V86.2c-2.3,2.1-3.8,5-3.8,8.4
          		v14.1C0,115,5,120,11.2,120z"/>
          	<path class="icon-fill" d="M60,50.6c-4.5,0-8.3,3.2-9.2,7.5c-0.1,0.6-0.2,1.2-0.2,1.9c0,0.7,0.1,1.4,0.3,2.1c0.8,3.5,3.5,6.2,7,7
          		c0.7,0.2,1.4,0.3,2.1,0.3c0.6,0,1.3-0.1,1.9-0.2c4.3-0.9,7.5-4.6,7.5-9.2C69.4,54.8,65.2,50.6,60,50.6z M61.2,65.5
          		c-0.4,0.1-0.8,0.1-1.2,0.1c-3.1,0-5.6-2.5-5.6-5.6c0-0.4,0-0.8,0.1-1.2c0.5-2.5,2.8-4.4,5.5-4.4c3.1,0,5.6,2.5,5.6,5.6
          		C65.6,62.7,63.7,65,61.2,65.5z"/>
          </svg>
          <div class="content">
            Flat No. 3 Navyug Apartments,<br /> Next to BMW Showroom, Near Rosery School,<br /> Ambedkar Road, Pune<br />
          </div>
        </div>
        <div class="icon-tab">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
          	<g>
          		<path class="icon-fill" d="M86.2,0H33.8c-6.2,0-11.2,5-11.2,11.2v97.5c0,6.2,5,11.2,11.2,11.2h52.5c6.2,0,11.2-5,11.2-11.2V11.2
          			C97.5,5,92.5,0,86.2,0z M93.8,106.9c0,5.2-4.2,9.4-9.4,9.4H35.6c-5.2,0-9.4-4.2-9.4-9.4V13.1c0-5.2,4.2-9.4,9.4-9.4h48.8
          			c5.2,0,9.4,4.2,9.4,9.4V106.9z"/>
          	</g>
          	<rect x="26.2" y="90" class="icon-fill" width="67.5" height="3.8"/>
          	<circle class="icon-fill" cx="60" cy="105" r="3.8"/>
          </svg>
          <div class="content">
            <a href="tel:02085670707">020 8567 0707</a>
          </div>
        </div>
      </div>
      <div>
        <ul class="quick-links">
          <li>
            <router-link active-class="active" to="/">Home</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/upper-gi">Upper G. I.</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/hpb">HPB</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/lower-gi">Lower G. I.</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/routine">Routine Treatments</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/specialised">Specialised Treatments</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/about">About</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/appointment">Book an appointment</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/faq">FAQs</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <!-- Copyright -->
  <div class="footer-copy">
    &copy; 2018, Gastrosurge Care.
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
  methods: {},
  watch: {
    'mobileMenuOpen': function(value) {
      var self = this

      setTimeout(function() {
        //document.getElementsByTagName('body')[0].classList.toggle('noscroll')
      }, 1000)
      //if (!value) self.scrollToTop(100)
    }
  }
}
</script>
