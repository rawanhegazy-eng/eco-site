<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
   <!-- <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a href="https://1.envato.market/vuexy_admin" target="_blank" rel="nofollow">Pixinvent</a>, All rights Reserved</span>
        <span class="md:flex hidden items-center">
            <span>Hand-crafted & Made with</span>
            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
        </span>

        <!-- buyNow component ->
        <component :is="injections.components.BuyNow"></component>
    </footer>-->
    <footer class="page-footer font-small mdb-color pt-4  bg-dark text-white">

    <div class="container text-center text-md-left">

        <div class="row text-center text-md-left mt-3 pb-3">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold x">Introduction: </h6>
                <p>This is an GMS. The World's Biggest Material E-commerce site, Tmgate.cloud. This is
                    a
                    Material Market Platform. Easy and fast way to reach customers and market news. Easy way to get
                    multi offers with updated and compete price.</p>
            </div>

            <hr class="w-100 clearfix d-md-none">
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold x">Members</h6>

                <p>
                    <a href="http://tmgate.cloud">TMGATE</a>
                </p>
                <p>
                    <a href="http://sqmegy.com">SQM</a>
                </p>
                <p>
                    <a href="http://tmgate.org">TMG</a>
                </p>
            </div>

            <hr class="w-100 clearfix d-md-none">
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold x">CONTACT US</h6>
                <p>
                    <a href="#">info@tmgate.org</a>
                </p>

            </div>

            <hr class="w-100 clearfix d-md-none">
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold"></h6>
                <p><i class="fa fa-home mr-3"> TMGATE </i></p> <a href="http://tmgate.org">http://tmgate.org</a>
                <hr>
                <p><i class="fa fa-at mr-3"> SQM</i></p>
                <a href="http://sqmegy.com">http://sqmegy.com
                </a>

            </div>

        </div>

        <hr>
        <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-8">
                <p class="text-center text-md-left">© 2020 Copyright:
                    <strong>TMGATE, SQM.</strong>
                   
                </p>

            </div>
        </div>
    </div>
</footer>
</template>

<script>
import BuyNow from '../../components/BuyNow.vue'

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    },
    inject: {
      components:{
          default: {
            BuyNow
          }
      }
    }
}
</script>
<style scoped>
.x{
    color: white;
}
</style>
