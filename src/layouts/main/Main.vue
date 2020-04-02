<!-- =========================================================================================
    File Name: Main.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
 <div class="layout--main" :class="[layoutTypeClass, navbarClasses, footerClasses, {'no-scroll': isAppPage}]">

    <vx-tour :steps="steps" v-if=" (windowWidth >= 1200 && mainLayoutType === 'vertical' && verticalNavMenuWidth == 'default')" />

    <the-customizer
      v-if                    = "!disableCustomizer"
      :footerType             = "footerType"
      :hideScrollToTop        = "hideScrollToTop"
      :navbarColor            = "navbarColor"
      :navbarType             = "navbarType"
      :routerTransition       = "routerTransition"
      @toggleHideScrollToTop  = "toggleHideScrollToTop"
      @updateFooter           = "updateFooter"
      @updateNavbar           = "updateNavbar"
      @updateNavbarColor      = "updateNavbarColor"
      @updateRouterTransition = "updateRouterTransition" />

    <!--<v-nav-menu
      :navMenuItems = "navMenuItems"
      title         = "GMS"
      parent        = ".layout--main" />-->

    <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
      <div id="content-overlay" />


<template >
  
  
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-0">
  <a class="navbar-brand pull-left" style="cursor:pointer" @click="home()"><img id="amazon-logo" style="width: 80px; height:80px;" src="@/assets/images/Amazon-icon.png"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="row col-lg-8">
                  
                  <div class="search col-lg-8">
                    <div class="input-group" style="">
                      <span class="input-group-addon">
                      <select>
                        <option >All Categories</option>
                        <option v-for="i in categoryOptions">{{i.label}}</option>
                       
                    </select>
                  </span>

                      <input id="email" type="text" class="form-control" name="email" placeholder="Search">

                      <span> </span>
                    </div>
                  </div>
                  
                </div>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" style="cursor:pointer" @click="home()">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">

        <a class="nav-link" style="cursor:pointer" @click="product()">Products</a>

      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" @click="login()" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Login
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

          <a class="dropdown-item" @click="login()"> Login</a>
          <a class="dropdown-item" href="">Seller Account</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="">Logout</a>
        </div>
      </li>
      <li class='nav-item'>
        <a class='nav-link' style="cursor:pointer" @click="cart()" >Shopping Cart</a>
      </li>
      <li class="nav-item">
      
        <a href=""  class="nav-link" style='color: white;'>Hello, {{reviewer}}</a>
       

      </li>
      
    </ul>

  </div>
</nav>


</template>

</nav>
      <div class="content-wrapper">

        <div class="router-view">
          <div class="router-content">

           

            <div class="content-area__content">

              <back-to-top bottom="5%" :right="$vs.rtl ? 'calc(100% - 2.2rem - 38px)' : '30px'" visibleoffset="500" v-if="!hideScrollToTop">
                <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg btn-back-to-top" />
              </back-to-top>

              <transition :name="routerTransition" mode="out-in">
                <router-view @changeRouteTitle="changeRouteTitle" @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)" />
              </transition>
            </div>
          </div>
        </div>
      </div>
      <the-footer />
    </div>
  </div>
</template>


<script>
import Service from '../../services'
 import  Dropdown from '@/components/Dropdown.vue'
 import NavbarToggleButton from '@/components/NavbarToggleButton.vue'
  import Navbar from '@/components/Navbar.vue'
  import  NavLink from '@/components/NavLink.vue'
   import  FormGroupInput  from '@/components/formGroupInput.vue'
 // import categories from '../api/categoriesTable'

import BackToTop           from 'vue-backtotop'
import HNavMenu            from "@/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue"
import navMenuItems        from "@/layouts/components/vertical-nav-menu/navMenuItems.js"
import TheCustomizer       from "@/layouts/components/customizer/TheCustomizer.vue"
import TheNavbarHorizontal from '@/layouts/components/navbar/TheNavbarHorizontal.vue'
import TheNavbarVertical   from '@/layouts/components/navbar/TheNavbarVertical.vue'
import TheFooter           from '@/layouts/components/TheFooter.vue'
import themeConfig         from '@/../themeConfig.js'
import VNavMenu            from '@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue'
import vSelect from 'vue-select'

const VxTour = () => import('@/components/VxTour.vue')

export default {
   name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
      profileId: Number,
    },
  components: {
  // DropDown ,
   'v-select': vSelect,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [FormGroupInput.name]: FormGroupInput,
    BackToTop,
    HNavMenu,
    TheCustomizer,
    TheFooter,
    TheNavbarHorizontal,
    TheNavbarVertical,
    VNavMenu,
    VxTour
  },
  data() {
    return {
      reviewer:"",
      category:{label:"All",value:"All"},
      categoryOptions:[],
      disableCustomizer : themeConfig.disableCustomizer,
      //disableThemeTour  : themeConfig.disableThemeTour,
      dynamicWatchers   : {},
      footerType        : themeConfig.footerType  || 'static',
      hideScrollToTop   : themeConfig.hideScrollToTop,
      isNavbarDark      : false,
      navbarColor       : themeConfig.navbarColor || '#fff',
      navbarType        : themeConfig.navbarType  || 'floating',
      navMenuItems      : navMenuItems,
      routerTransition  : themeConfig.routerTransition || 'none',
      routeTitle        : this.$route.meta.pageTitle,
      steps: [{
          target  : '#btnVNavMenuMinToggler',
          content : 'Toggle Collapse Sidebar.'
        },
        {
          target  : '.vx-navbar__starred-pages',
          content : 'Create your own bookmarks. You can also re-arrange them using drag & drop.'
        },
        {
          target  : '.i18n-locale',
          content : 'You can change language from here.'
        },
        {
          target  : '.navbar-fuzzy-search',
          content : 'Try fuzzy search to visit pages in flash.'
        },
        {
          target  : '.customizer-btn',
          content : 'Customize template based on your preference',
          params  : {
            placement: 'left'
          }
        },
        {
          target  : '.vs-button.buy-now',
          content : 'Buy this awesomeness at affordable price!',
          params  : {
            placement: 'top'
          }
        },
      ],
    }
  },
  watch: {
    "$route"() {
      this.routeTitle = this.$route.meta.pageTitle
    },
    isThemeDark(val) {
      const color = this.navbarColor == "#fff" && val ? "#10163a" : "#fff"
      this.updateNavbarColor(color)
    },
   // "$store.state.mainLayoutType"(val) {
    //  this.setNavMenuVisibility(val)
   //   this.disableThemeTour = true
   // }
  },
  computed: {
    bodyOverlay() { return this.$store.state.bodyOverlay },
  /* contentAreaClass() {
      if(this.mainLayoutType === "vertical") {
        if      (this.verticalNavMenuWidth == "default") return "content-area-reduced"
        else if (this.verticalNavMenuWidth == "reduced") return "content-area-lg"
        else return "content-area-full"
      }
      // else if(this.mainLayoutType === "boxed") return "content-area-reduced"
      else return "content-area-full"
    },*/
    footerClasses() {
      return {
        'footer-hidden': this.footerType == 'hidden',
        'footer-sticky': this.footerType == 'sticky',
        'footer-static': this.footerType == 'static',
      }
    },
    isAppPage() {
      return this.$route.meta.no_scroll
    },
    isThemeDark()     { return this.$store.state.theme == 'dark' },
    layoutTypeClass() { return `main-${this.mainLayoutType}` },
    mainLayoutType()  { return this.$store.state.mainLayoutType  },
    navbarClasses()   {
      return {
        'navbar-hidden'   : this.navbarType == 'hidden',
        'navbar-sticky'   : this.navbarType == 'sticky',
        'navbar-static'   : this.navbarType == 'static',
        'navbar-floating' : this.navbarType == 'floating',
      }
    },
    verticalNavMenuWidth() { return this.$store.state.verticalNavMenuWidth },
    windowWidth()          { return this.$store.state.windowWidth }
  },
  methods: {
    product(){
      this.$router.push({name:'ecommerce-shhop'})
    },
    cart(){
      this.$router.push({name:'ecommerce-check'})
    },

    home(){
      this.$router.push({name:'basicCards'})
    },
    login(){
this.$router.push({name:'page-login'})
    },
    changeRouteTitle(title) {
      this.routeTitle = title
    },
    updateNavbar(val) {
      if (val == "static") this.updateNavbarColor(this.isThemeDark ? "#10163a" : "#fff")
      this.navbarType = val
    },
    updateNavbarColor(val) {
      this.navbarColor = val
      if (val == "#fff") this.isNavbarDark = false
      else this.isNavbarDark = true
    },
    updateFooter(val) {
      this.footerType = val
    },
    updateRouterTransition(val) {
      this.routerTransition = val
    },
    setNavMenuVisibility(layoutType) {
      if((layoutType === 'horizontal' && this.windowWidth >= 1200) || (layoutType === "vertical" && this.windowWidth < 1200)) {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
        this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')
      }
      else {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
      }
    },
    toggleHideScrollToTop(val) {
      this.hideScrollToTop = val
    }
  },
 async created() {
   var user= await Service.getMe()
   this.reviewer=user.data.name
     try{
     var cate= await Service.getMainCategory()
 for(var key in cate.data) {
    if(cate.data.hasOwnProperty(key)) {
        var value = cate.data[key];
            this.categoryOptions.push({
          value:value._id,
          label:value.name,
               
       })
        
   }
 }
    }
 catch(err){

 }
    const color = this.navbarColor == "#fff" && this.isThemeDark ? "#10163a" : this.navbarColor
    this.updateNavbarColor(color)
    this.setNavMenuVisibility(this.$store.state.mainLayoutType)

    // Dynamic Watchers for tour
    // Reason: Once tour is disabled it is not required to enable it.
    // So, watcher is required for just disabling it.
  /*  this.dynamicWatchers.windowWidth = this.$watch("$store.state.windowWidth", (val) => {
      if(val < 1200) {
        this.disableThemeTour = true
        this.dynamicWatchers.windowWidth()
      }
    })

    this.dynamicWatchers.verticalNavMenuWidth = this.$watch("$store.state.verticalNavMenuWidth", () => {
      this.disableThemeTour = true
      this.dynamicWatchers.verticalNavMenuWidth()
    })

    this.dynamicWatchers.rtl = this.$watch("$vs.rtl", () => {
      this.disableThemeTour = true
      this.dynamicWatchers.rtl()
    })*/
  },
  beforeDestroy() {
    Object.keys(this.dynamicWatchers).map(i => {
      this.dynamicWatchers[i]()
      delete this.dynamicWatchers[i]
    })
  }
}

</script>
<style scoped>
.navbar-light .navbar-brand {
    color: #eaeded;
}
.white{
    color: #eaeded;
}

.badge {
  position: relative;
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}

#lblCartCount {
    font-size: 12px;
    background: #fca225;
    color: #fff;
    padding:5px;
    vertical-align: top;
    margin-left: -10px; 
}
.x{
  margin-bottom: 100px;
  color: rgb(63, 63, 63);
}
.headeroneLink{
  font-size:10px;
  
}
navbar
{ background-color: #232f3e; 

}
.navbar3 {
  overflow: hidden;
  background-color: #232f3e; 
  margin-top: -20px;
}

.navbar3 a {
  float: right;
  font-size: 12px;
  color:  #f3a847;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.subnav3 {
  float: right;
  overflow: hidden;
}

.subnav3 .subnavbtn {
  font-size: 12px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar3 a:hover, .subnav3:hover .subnavbtn {
  background-color: rgb(82, 169, 255);
  
}

.subnav3-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: rgb(82, 169, 255);
  width: 100%;
  z-index: 1;
}

.subnav3-content a {
  float: right;
  color: white;
  text-decoration: none;
}

.subnav3-content a:hover {
  background-color: #eee;
  color: black;
}

.subnav3:hover .subnav3-content {
  display: block;
}
 select {
  background: transparent;
   border: none;
  padding: 10.5px ;
  
}
 
.input-group-addon {
   
  background-color: #f3a847;
  height: 35px;
  border-radius: 0px;
}
.search
{

}
#navcolor
{
  background-color: #f3a847;
}
</style>
