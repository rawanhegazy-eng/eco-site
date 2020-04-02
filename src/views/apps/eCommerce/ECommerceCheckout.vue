 

<template>

    <div id="ecommerce-checkout-demo">
        <navbar-default></navbar-default>
         <!-- End navbar-->
<div class="container mt-2" style="width:80%">
<vx-card style=" " class=" ">
  <div class="">  
  
        <form-wizard
            ref="checkoutWizard"
            color="rgba(var(--vs-primary), 1)"
            :title="null"
            :subtitle="null"
            :hide-buttons="true">

            <!-- tab 1 content -->
            <tab-content title="Cart" icon="feather icon-shopping-cart" class="mb-5">

                <!-- IF CART HAVE ITEMS -->
                <div class="vx-row" v-if="cartItems.length">

                    <!-- LEFT COL -->
                    <div class="vx-col lg:w-2/3 w-full relative">
                        <div class="items-list-view" v-for="(item, index) in cartItems" :key="item.id">
                            <item-list-view :item="item" class="mb-base">

                                <!-- SLOT: ITEM META -->
                                <template slot="item-meta">
                                    <h6
                                      class="item-name font-semibold mb-1 cursor-pointer hover:text-primary"
                                     >{{ item.name }}</h6>
                                    <p class="text-sm mb-2">By <span class="font-semibold cursor-pointer">{{ item.brand }}</span></p>
                                    <p class="text-success text-sm" v-if="item.status">Avaliable</p>
                                     <p class="text-success text-sm" v-else>Not Avaliable</p>

                                    <h5 class="mt-4 font-bold text-sm">Quantity</h5>
                                    <vs-input-number min="1" max="10" :value="item.quantity" @input="updateItemQuantity($event, index)" class="inline-flex" />

                                    <p class="font-medium text-grey mt-4">Will Derlivred at :  {{ item.delivery_time}}&ensp;min</p>
                                    <star-rating :rtl="$vs.rtl" :rating="item.rat" :read-only="true" :increment="0.01" :star-size="10" vs-offset="2" vs-type="flex" vs-justify="center" vs-align="center" ></star-rating>
                                    
                                    <span class="font-medium text-primary cursor-pointer" @click="openRating(item)">You Can Rate From Here.</span>
                               <vs-popup class="holamundo"  title="Put Suitable Rate" :active.sync="item.popupActivo">
                                  <!-- CAPTURE ON HOVER -->
                                    
                                    <div @mouseleave="showCurrentRating(0)" style="float:right;">
                                        <star-rating :star-size="20" :rtl="$vs.rtl" :show-rating="false" @current-rating="showCurrentRating" @rating-selected="setCurrentSelectedRating" :increment="0.5" ></star-rating>
                                    </div>
                                    <div class="font-semibold text-right" >
                                        {{currentSelectedRating}}
                                    </div>
                                </vs-popup>
                                 </template>

                                <!-- SLOT: ACTION BUTTONS -->
                                <template slot="action-buttons">

                                    <!-- PRIMARY BUTTON: REMOVE -->
                                    <div class="item-view-primary-action-btn bg-danger p-3 rounded-lg flex flex-grow items-center justify-center cursor-pointer mb-3" @click="removeItemFromCart(item)">
                                        <feather-icon icon="XIcon" svgClasses="h-4 w-4" style="color:white;" />
                                        <span class="text-sm font-semibold ml-2" style="color:white;">Delete</span>
                                    </div>

                                   
                                </template>
                            </item-list-view>
                        </div>
                    </div>

                    <!-- RIGHT COL -->
                    <div class="vx-col lg:w-1/3 w-full">
                        <vx-card>
                            <p class="text-grey mb-3">Options</p>
                            <div class="flex justify-between">
                                <span class="font-semibold">Coupons</span>
                                <span class="font-medium text-primary cursor-pointer" @click="popupActive=true">Apply</span>
                                <vs-popup :active.sync="popupActive" title="Coupons">
                                      <div  class="popup-card">
                                       <form data-vv-scope="cvv-form">
                                        <div class="flex items-center flex-wrap">
                                            <span class="mt-4 ml-5"> Enter Coupon Number: </span>
                                            <vs-input class="mr-3 ml-2 mt-4 col-lg-6 col-md-4 " v-model=codeCoupon />
                                            <vs-button class="mt-4" @click.prevent="makePayment" :disabled="false">Apply</vs-button>
                                        </div>
                                     </form>
                                         
                                        </div>
                                    </vs-popup>
                            </div>

                            <vs-divider />

                            <p class="font-semibold mb-3">Price Details</p>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey">Total MRP</span>
                                <span>{{getTotal}}</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey">Bag Discount</span>
                                <span class="text-success">{{proValue}}</span>
                            </div>
                           
                            

                            <vs-divider />

                            <div class="flex justify-between font-semibold mb-3">
                                <span>Total</span>
                                <span>{{getTotalAfter}}</span>
                            </div>

                            <vs-button class="w-full" @click="check()">PLACE ORDER</vs-button>
                        </vx-card>
                    </div>
                </div>

                <!-- IF NO ITEMS IN CART -->
                <vx-card title="You don't have any items in your cart." v-else>
                    <vs-button @click="$router.push('/pages/Offers').catch(() => {})">Browse Shop</vs-button>
                </vx-card>

            </tab-content>

            <!-- tab 2 content -->
            <tab-content title="Address" icon="feather icon-home" class="mb-5">

                <div class="vx-row">

                    <!-- LEFT COL: NEW ADDRESS -->
                    <div class="vx-col lg:w-2/3 w-full">
                        <vx-card title="اضافة عنوان جديد" subtitle="تاكد من التحقق من &quot;التوصيل لهذا العنوان&quot; عندما تنتهي." class="mb-base">

                            <form data-vv-scope="add-new-address">
                                <div class="vx-row">
                                    <div class="vx-col sm:w-1/2 w-full">

                                        <vs-input
                                            v-validate="'required|alpha_spaces'"
                                            data-vv-as="field"
                                            name="fullName"
                                            label="الاسم بالكامل : "
                                            v-model="fullName"
                                            class="w-full mt-5" />
                                        <span v-show="errors.has('add-new-address.fullName')" class="text-danger">{{ errors.first('add-new-address.fullName') }}</span>

                                    </div>

                                    <div class="vx-col sm:w-1/2 w-full">

                                        <vs-input
                                            v-validate="'required|digits:10'"
                                            name="mobileNum"
                                            label="رقم الموبايل : "
                                            v-model="mobileNum"
                                            class="w-full mt-5" />
                                        <span v-show="errors.has('add-new-address.mobileNum')" class="text-danger">{{ errors.first('add-new-address.mobileNum') }}</span>
                                    </div>

                                </div>

                                <div class="vx-row">


                                    <div class="vx-col sm:w-1/2 w-full">

                                        <vs-input
                                            v-validate="'required'"
                                            name="houseNum"
                                            label="شقة , عمارة رقم : "
                                            v-model="houseNum"
                                            class="w-full mt-5" />
                                        <span v-show="errors.has('add-new-address.houseNum')" class="text-danger">{{ errors.first('add-new-address.houseNum') }}</span>
                                    </div>

                                    <div class="vx-col sm:w-1/2 w-full">

                                        <vs-input
                                            name="landmark"
                                            label="علامة مميزه . مثال بجوار مستشفى :"
                                            v-model="landmark"
                                            class="w-full mt-5" />
                                    </div>

                                </div>

                                <div class="vx-row">
                                    <div class="vx-col sm:w-1/2 w-full">
                                        <p class="w-full mt-4" style="font-size:.85rem;">دولة :</p>
                                        <select v-model="country" class="custom-select mr-sm-2 h-12" id="inlineFormCustomSelect">
                                            <option  :key="index" :value="item"  v-for="(item,index) in getCountries" >{{item.label}}</option>
                                        </select>
                                    </div>
                                    

                                    <div class="vx-col sm:w-1/2 w-full">
                                             <p class="w-full mt-4" style="font-size:.85rem;">مدينة :</p>
                                            <select v-model="city" class="custom-select mr-sm-2 h-12" id="inlineFormCustomSelect">
                                                <option :key="index" :value="item"  v-for="(item,index) in getCities">{{item.label}}</option>
                                            </select>
                                    </div>
                                </div>

                                <div class="vx-row">

                                    <div class="vx-col sm:w-1/2 w-full">
                                        <p class="w-full mt-4" style="font-size:.85rem;">منطقة :</p>
                                        <select v-model="area" class="custom-select mr-sm-2 h-12" id="inlineFormCustomSelect">
                                            <option  :key="index" :value="item" :text="item.label" v-for="(item,index) in getAreas">{{item.label}}</option>
                                        </select>      
                                    </div>
                                    

                                    <div class="vx-col sm:w-1/2 w-full">
                                        <p class="w-full mt-4" style="font-size:.85rem;">نوع العنوان :</p>
                                        <select v-model="addressType" class="custom-select mr-sm-2 h-12" id="inlineFormCustomSelect">
                                            <option selected :key="index" :value="item.value"  v-for="(item,index) in addressTypeOptions">{{item.label}}</option>
                                        </select>
                                    </div>

                                </div>
                                      <vs-button class="mt-6 ml-auto flex" @click.prevent="submitNewAddressForm">الحفظ والتوصيل الى هنا</vs-button>
                            </form>
                        </vx-card>
                    </div>

                    <!-- RIGHT COL: CONTINUE WITH SAVED ADDRESS -->
                    <div class="vx-col lg:w-1/3 w-full" v-if="address.length"> 
                        <vx-card :title= userName >
                            <div v-for="(i,index) in getAddress">
                    <vs-radio v-model="deliveryAddress" :vs-value="i">Address {{index+1}}</vs-radio>
         
                  
                    <div class="invoice__recipient-info my-4">
                        <p>{{ i.line1}}</p>
                         <p>{{ i.line2}}</p>
                         <p>{{ i.area}}</p>
                        <p>{{ i.city }}</p>
                        <p>{{ i.country }}</p>
                      
                    </div>
                     </div>
                        <p>{{phone}}</p>
                           

                            <vs-divider />
                             <vs-button disabled class="w-full" v-if="!deliveryAddress">التوصيل الى هذا العنوان</vs-button>
                            <vs-button class="w-full" @click="$refs.checkoutWizard.nextTab()" v-else>التوصيل الى هذا العنوان</vs-button>
                        </vx-card>
                    </div>

                </div>
            </tab-content>

            <!-- tab 3 content -->
            <tab-content title="Payment" icon="feather icon-credit-card" class="mb-5">

                <div class="vx-row">

                    <!-- LEFT COL: PAYMENT OPTIONS -->
                    <div class="vx-col lg:w-2/3 w-full">
                        <vx-card title="طرق الدفع" subtitle="تاكد من الضغط على طريقة الدفع الصحيحة" class="mb-base">

                            <div class="mt-3">
                                <ul>
                                  <!-- OPTION 1 -->
                                  <li>
                                    <!-- CARD DETAILS -->
                                    <div class="flex flex-wrap justify-between items-center">
                                        <vs-radio v-model="paymentMethod" vs-value="debit-card">
                                            <div class="flex items-center">
                                                <img src="@/assets/images/pages/eCommerce/bank.png" alt="bank-logo" height="40" width="50" class="inline-flex">
                                                <span> 12XX XXXX XXXX 0000</span>
                                            </div>
                                        </vs-radio>
                                        <span>{{userName}}</span>
                                     
                                    </div>

                                    <!-- CVV BLOCK -->
                                    <form data-vv-scope="cvv-form">
                                        <div class="flex items-center flex-wrap">
                                            <span class="mt-4">ادخل الرقم : </span>
                                            <vs-input
                                                v-validate="'required|digits:3'"
                                                name="cvv"
                                                v-model="cvv"
                                                class="mr-3 ml-2 mt-4" />
                                          <vs-button class="mt-4" @click.prevent="makePayment" :disabled="false">CONTINUE</vs-button>
                                        </div>
                                        <span v-show="errors.has('cvv-form.cvv')" class="text-danger ml-24">{{ errors.first('cvv-form.cvv') }}</span>
                                    </form>
                                  </li>

                                  <vs-divider class="my-6" />

                                  <!-- OPTION 2 -->
                                  <li  v-for="i in paymentMethods">
                                    <vs-radio v-model="paymentMethod" :vs-value="i.value">{{i.label}}</vs-radio>
                                  </li>
</ul>
                                 
                                    <vs-button class="mt-4" @click.prevent="makePayment2" :disabled="false">CONTINUE</vs-button>
                                
                                <!--
                                <vs-divider />

                                 GIFT CARD 
                                <div class="inline-flex items-center cursor-pointer">
                                    <feather-icon icon="PlusSquareIcon" class="mr-2" svgClasses="h-6 w-6" />
                                    <span>Add Gift Card</span>
                                </div>-->
                            </div>
                        </vx-card>
                    </div>

                    <!-- RIGHT COL: PRICE -->
                    <div class="vx-col lg:w-1/3 w-full">
                        <vx-card title="تفاصيل السعر">

                            <div class="flex justify-between mb-2">
                                <span> سعر{{cartItems.length}} اصناف</span>
                                <span class="font-semibold">{{getTotal}}</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span>قيمة خدمة التوصيل </span>
                                <span class="text-success">{{getTotalDeliveryFee}}</span>
                            </div>

                            <vs-divider />

                            <div class="flex justify-between">
                                <span>اجمالى المدفوعات</span>
                                <span class="font-semibold">{{getTotalAfter}}</span>
                            </div>
                        </vx-card>
                    </div>
                </div>
            </tab-content>

        </form-wizard>
        </div>
</vx-card>
</div>
    </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import NavbarDefault from '../../components/vuesax/navbar/NavbarDefault.vue'
import TheFooter           from '@/layouts/components/TheFooter.vue'
import PopupBackground from '../../components/vuesax/popup/PopupBackground.vue'
import Service from '../../../services'
 import StarRating from 'vue-star-rating'
 import vSelect from 'vue-select'
const ItemListView = () => import('./components/ItemListView.vue')

export default {
    data() {
        return {
             city:"",
     country:"",
     area:'',
     
        countryoptions:[],
            item:{},
            proValue:0,
            deliveryFee:20,
            userName:"",
            phone:"",
            address:[],
            addresses:[],
            deliveryAddress:"",
            codeCoupon:"",
          // TAB 2
            fullName: "",
            mobileNum: "",
            pincode: "",
            houseNum: "",
           
            landmark: "",
            
            
            addressType: 1,
            addressTypeOptions: [
                { label: 'Home', value: 1 },
                { label: 'Office', value: 2 },
            ],

            // TAB 3
            paymentMethod: "debit-card",
            paymentMethods:[],
            statusList:[],
            cvv: '',
            popupActive: false,
            popupActivo:false,
            rating: "No Rating Selected",
            currentRating: "No Rating",
            currentSelectedRating: "لم يتم تحديد تقييم بعد...",
            boundRating: 3,
            outletIds:[]
        }
        

       
        

    },
    created(){
      this.getAllCountries()
      this.getPaymethods()
      this.getStatus()
      
    },
    computed: {
        cartItems() {
            return this.$store.state.eCommerce.cartItems.slice().reverse();
        },
       
        getTotal()
        {
            var total=0
        for(var i=0; i<this.cartItems.length;i++){
            total+=this.cartItems[i].price *this.cartItems[i].quantity 
        }
        return total
        },
        getTotalAfter(){
          return  this.getTotal-(this.getTotal*this.proValue)+this.getTotalDeliveryFee
        },
        getTotalDeliveryFee(){
         var total=0  
        var arr= this.cartItems.filter((v,i,a)=>a.findIndex(t=>(t.outletId === v.outletId))===i)
        
       for(var i=0;i<arr.length;i++){
        total += arr[i].delivery_fee
        this.outletIds.push(arr[i].outletId)
        }
        return total
       },
         getCountries(){
  return this.countryoptions
},
       getCities(){
           console.log(this.country)
  
  if(this.country){
    return this.getCountries[this.getCountries.indexOf(this.country)].cities
  }
  else{
  return []
  }
 
},
getAreas(){
    if(!this.getCities[this.getCities.indexOf(this.city)]){
     return []
       }

       else{
        
         return this.getCities[this.getCities.indexOf(this.city)].areas
          
}
},
getAddress(){
    return this.address
}
    
    },
    methods: {
     async getPaymethods(){
      var method= await Service.getPaymethods()
       for(var key in method.data) {
      if(method.data.hasOwnProperty(key)) {
        var value = method.data[key];
       this.paymentMethods.push({value:value._id,label:value.name})
    }}
      }, 

     goToCuntry (country){
       this.country=country
     }, 
    openRating(item){
       this.item=item
       item.popupActivo=true
    },

        check(){
             var toke=localStorage.getItem("token")
            if(toke) {
            this.$refs.checkoutWizard.nextTab()
            
            this.getUserInfo(localStorage.getItem("id"))
            }
            else{
              this.$router.push("/pages/login")
            }


        },

       async getUserInfo(id){
        this.address=[]
         var user=await Service.getUserInfo(id)
        
         this.userName=user.data.name
         this.addresses=user.data.address
         this.phone=user.data.phone

           for(var key in this.addresses) {
    if(this.addresses.hasOwnProperty(key)) {
    var value = this.addresses[key];

   var area="";
   var city="";
   var country="";
  
   try{
      
   var cityInfo=await Service.getCityInfo(value.city)
   city=cityInfo.data.ar_name
    
   
 
   var countryInfo=await Service.getCountryInfo(value.country)
   country=countryInfo.data.ar_name

 
    var areaInfo=await Service.getAreasInfo(value.area)
    area=areaInfo.data.ar_name

  
     
   }
   catch(err){console.error(err)}
   
   this.address.push({line1:value.address_line1,line2:value.address_line2,area:area,city:city,country:country})

    }
    }
  },




        // TAB 1
        removeItemFromCart(item) {
            this.$store.dispatch('eCommerce/toggleItemInCart', item)
        },


       
     
        updateItemQuantity(event, index) {
            const itemIndex = Math.abs(index + 1 - this.cartItems.length)
            this.$store.dispatch("eCommerce/updateItemQuantity", { quantity: event, index: itemIndex })
        },

        // TAB 2
        submitNewAddressForm() {
            return new Promise(() => {
                this.$validator.validateAll('add-new-address').then(result => {
                    if (result) {
                        // if form have no errors
                        this.$refs.checkoutWizard.nextTab()
                        this.updateAddress()

                    } else {
                        this.$vs.notify({
                            title: 'Error',
                            text: 'Please enter valid details',
                            color: 'warning',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle'
                        })
                    }
                })
            })
        },
       async updateAddress(){
           
            this.addresses.push({address_line1:this.houseNum,
            address_line2:this.landmark,
            area:this.area.value,
            city:this.city.value,
            country:this.country.value
            })
           
            await Service.updateUserInfo(localStorage.getItem("id"),this.addresses,this.phone)
      
      },

        // TAB 3
    async makePayment() {
            
              var result = await Service.checkCoupons(this.codeCoupon)
                    if (result) {
                        console.log(result)
                         for(var key in result.data) {
                      if(result.data.hasOwnProperty(key)) {
                       var value = result.data[key];
                        if(value.active){
                        this.$vs.notify({
                            title: 'Success',
                            text: 'Coupon active',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check'
                        })
                         this.popupActive=false
                    } 
                    else {
                        this.$vs.notify({
                            title: 'Error',
                            text: 'Coupon not active',
                            color: 'warning',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle'
                        })
                         this.popupActive=false
                    }

                      }}}
                      else {
                        this.$vs.notify({
                            title: 'Error',
                            text: 'Please enter valid details',
                            color: 'warning',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle'
                        })
                         this.popupActive=false
                    }

            
           
        }
        
        ,
        async  makePayment2() {
           
     try{
       var app=this;   
     for(var i=0;i<this.outletIds.length;i++){
          var outId=this.outletIds[i]
         var arr=[]
      for(var n=0;n<this.cartItems.length;n++){
       
          if(this.cartItems[n].outletId===this.outletIds[i])
            arr.push(this.cartItems[n])
       }
        var total=0
        for(var i=0; i<arr.length;i++){
            total+=arr[i].price *arr[i].quantity 
        }
     
        var totalAfter=total+arr[0].delivery_fee

        console.log(
               "order 5",
    this.statusList[0],
	this.paymentMethod,
	false,
    totalAfter,
    'not_delivered','delivery',
    new Date(),
    outId,
    localStorage.getItem("id")
        )
      
       await Service.addOrder(
    "order 5",
    this.statusList[0],
	this.paymentMethod,
	false,
    totalAfter,
    'not_delivered','delivery',
    new Date(),
  
    outId,
    localStorage.getItem("id"),
    localStorage.getItem("id"))
   }
    this.$vs.notify({
                            title: 'Success',
                            text: 'Payment received successfully',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check'
                        })

                        this.$router.push('/pages/HomePage');
                        for(var i=0;i<this.cartItems.length;i++){
                        this.$store.dispatch('eCommerce/toggleItemInCart',this.cartItems[i])
                        }
     }
     catch(err){
       
                        this.$vs.notify({
                            title: 'Error',
                            text: err,
                            color: 'warning',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle'
                        })
     }




   
                  
               
         
        },
    setRating: function(rating) {
      this.rating = " لقد قمت بتحديد :" + rating + " نجوم";
    },
    showCurrentRating: function(rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
    },
    setCurrentSelectedRating: async function(rating) {
      this.currentSelectedRating = " لقد قمت بتحديد : " + rating + " نجوم";
      await Service.addReviewItem(this.item.id,localStorage.getItem("id"),rating)
 },
     async getAllCountries(){
   var country = await Service.getCountries()
   
 for(var key in country.data) {
    if(country.data.hasOwnProperty(key)) {
     
     var value =country.data[key];

      var cityOptions =[]
      var city = await Service.getCities(value._id)
     
     if(city.data){
      for(var key in city.data) {
      if(city.data.hasOwnProperty(key)) {
         var value1 =city.data[key];

          
      var areaOptions =[]
        var area = await Service.getAreas(value1._id)
      if(area.data){
      for(var key in area.data) {
      if(area.data.hasOwnProperty(key)) {
         var value2 =area.data[key];

        

        areaOptions.push({
            value: value2._id,
            label: value2.en_name ,
            
        })
        
      }}
       
      }

      
      cityOptions.push({
            value: value1._id,
            label: value1.en_name ,
            areas:  areaOptions
        })
        
     }}
     }

        this.countryoptions.push({
        value: value._id,
        label: value.en_name ,
        cities:cityOptions,
        
       })
        
   }
 }


},
 async getStatus(){
      var status = await Service.getStatus()
     
   
 for(var key in status.data) {
    if(status.data.hasOwnProperty(key)){
      var value =status.data[key];
     this.statusList.push(value._id)
    }
 }
}






    },
    components: {
        ItemListView,
        FormWizard,
        TabContent,
        //NavbarDefault,
        TheFooter,
        PopupBackground,
        StarRating,
        vSelect
    }
}
</script>

<style lang="scss" scoped>
#ecommerce-checkout-demo {
    .item-view-primary-action-btn {
        color: #2c2c2c !important;
        background-color: #f6f6f6;
    }

    .item-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
    }

    .vue-form-wizard {
        padding-bottom: 0;

        ::v-deep .wizard-header {
            padding: 0;
        }

        ::v-deep .wizard-tab-content {
            padding-right: 0;
            padding-left: 0;
            padding-bottom: 0;

            .wizard-tab-container{
              margin-bottom: 0 !important;
            }
        }
    }
}
</style>
