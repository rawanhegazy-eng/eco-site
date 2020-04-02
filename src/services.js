import axios from 'axios';
const url="http://tmgate.cloud:5545/";

class Service {
  

    static login(email,password){
        return axios.post(`${url}signin`,{email,password}, {headers: {'Access-Control-Allow-Origin': '*'}})
}
//----------------------User-----------------------

static getUser(){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/user/`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static uploadUserPhoto(image){
    let formData = new FormData()
        formData.append('image', image)

        let header3= {
                'Content-Type': 'multipart/form-data',
                'Authorization':'Bearer ' +localStorage.getItem("token"),
                'cache-control':'no-cache'
            }
          

         return axios({ method: 'POST', url: `${url}api/user/photo`, headers: header3, data: formData })
    

}
static getMe(){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/user/me`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static getOneUser(userId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/user/${userId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}

static deleteUser(userId){
    return axios.delete(`${url}api/user/${userId}`,{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
}


static editUser(userId,name,photo,email){
    return new Promise(async(resolve,reject)=>{
        try{
          const res=axios.put(`${url}api/user/${userId}`,{name,photo,email},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)
}


catch(err){
   reject(err)
}
})
}

static createUser(){
    return new Promise(async(resolve,reject)=>{
        try{
          const res= await axios.post(`${url}api/user/`,{},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)

  }

catch(err){
reject(err)
}
})
}
///////////////////////////Main Category///////////////////
static getMainCategory(){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/category/`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static createCategory(name,slug,status,image){
    return new Promise(async(resolve,reject)=>{
        try{
          const res= await axios.post(`${url}api/category/`,{name,slug,status,image},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)

  }

catch(err){
reject(err)
}
})
}
static deleteCategory(categoryId){
    return axios.delete(`${url}api/category/${categoryId}`,{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
}
static getOneCategory(categoryId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/category/${categoryId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static getOneSub(subId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/category/sub/${subId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static getOneSubByname(name){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/category/sub/${name}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static createSubb(categoryId,name,slug,status){
    return new Promise(async(resolve,reject)=>{
        try{
          const res=axios.post(`${url}api/category/sub/${categoryId}`,{name,slug,status},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)
}


catch(err){
   reject(err)
}
})
}
static editSub(categoryId,subId,name,slug,status){
    return new Promise(async(resolve,reject)=>{
        try{
          const res=axios.put(`${url}api/category/sub/${categoryId}/${subId}`,{name,slug,status},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)
}


catch(err){
   reject(err)
}
})
}
static editCategory(categoryId,name,slug,status,image){
    return new Promise(async(resolve,reject)=>{
        try{
          const res=axios.put(`${url}api/category/${categoryId}`,{name,slug,status,image},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)
}


catch(err){
   reject(err)
}
})
}
static updateSub(categoryId,subCategory){
    return new Promise(async(resolve,reject)=>{
        try{
          const res=axios.put(`${url}api/category/${categoryId}`,{subCategory},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)
}


catch(err){
   reject(err)
}
})
}
static uploadCategoryPhoto(image){
    let formData = new FormData()
        formData.append('image', image)

        let header3= {
                'Content-Type': 'multipart/form-data',
                'Authorization':'Bearer ' +localStorage.getItem("token"),
                'cache-control':'no-cache'
            }
          

         return axios({ method: 'POST', url: `${url}api/category/photo`, headers: header3, data: formData })
    

}
///////////////////////////Sub Category///////////////////
static getSubCategory(){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/subCategory/`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static createSubCategory(category_id,name,slug,status){
    return new Promise(async(resolve,reject)=>{
        try{
          const res= await axios.post(`${url}api/subCategory/`,{category_id,name,slug,status},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)

  }

catch(err){
reject(err)
}
})
}
static deleteSubCategory(categoryId){
    return axios.delete(`${url}api/subCategory/${categoryId}`,{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
}
static getOneSubCategory(subId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/subCategory/${subId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static getFiltterCategory(subId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/subCategory/category/${subId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static editSubCategory(categoryId,category_id,name,slug,status){
    return new Promise(async(resolve,reject)=>{
        try{
          const res=axios.put(`${url}api/subCategory/${categoryId}`,{category_id,name,slug,status},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)
}


catch(err){
   reject(err)
}
})
}
///////////////////////////Child Category///////////////////
static getChildCategory(){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/childCategory/`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static getFiltterSubCategory(subId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/childCategory/subCategory/${subId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static createChildCategory(category_id,subCategory_id,name,slug,status){
    return new Promise(async(resolve,reject)=>{
        try{
          const res= await axios.put(`${url}api/category/sub/childcat/update/${category_id}/${subCategory_id}`,{name,slug,status},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)

  }

catch(err){
reject(err)
}
})
}
static deleteChildCategory(childId){
    return axios.delete(`${url}api/childCategory/${childId}`,{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
}
static getOneChildCategory(childId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/category/sub/child/${childId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static editChildCategory(category_id,subCategory_id,childId,name,slug,status){
    return new Promise(async(resolve,reject)=>{
        try{
          const res=axios.put(`${url}api/category/sub/child/${category_id}/${subCategory_id}/${childId}`,{name,slug,status},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)
}


catch(err){
   reject(err)
}
})
}
///////////////////////////Product///////////////////
static uploadProductPhoto(image){
    let formData = new FormData()
        formData.append('image', image)

        let header3= {
                'Content-Type': 'multipart/form-data',
                'Authorization':'Bearer ' +localStorage.getItem("token"),
                'cache-control':'no-cache'
            }
          

         return axios({ method: 'POST', url: `${url}api/Product/photo`, headers: header3, data: formData })
    

}
static getProduct(){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/product/`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static getDisProduct(){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/product/status/disactive`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static createSProduct(type,name,price,description,image){
    return new Promise(async(resolve,reject)=>{
        try{
          const res= await axios.post(`${url}api/product/`,{type,name,price,description,image},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)

  }

catch(err){
reject(err)
}
})
}
static createProduct(type,name,condition,category_id,subCategory_id,
    childCategory_id,image,shipping_time,sizes,description,
    price,previous_price,stock,measurement,video_url,policy,meta,product_tags){
    return new Promise(async(resolve,reject)=>{
        try{
          const res= await axios.post(`${url}api/product/`,{type,name,condition,category_id,subCategory_id,
            childCategory_id,image,shipping_time,sizes,description,
            price,previous_price,stock,measurement,video_url,policy,meta,product_tags},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)

  }

catch(err){
reject(err)
}
})
}
static deleteProduct(productId){
    return axios.delete(`${url}api/product/${productId}`,{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
}
static getOneProduct(productId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/product/${productId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static getProductbyCategory(categoryId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/product/category/${categoryId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static getsubCategoryProduct(subCategoryId){
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.get(`${url}api/product/subCategory/${subCategoryId}`,{headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token"),
                'cache-control':'no-cache'
            }})
            
            const data =res.data;
            resolve(data)
       
        }
        catch(err){
           reject(err)
        }
    })
}
static editSProduct(productId,type,name,price,description,image){
    return new Promise(async(resolve,reject)=>{
        try{
          const res=axios.put(`${url}api/product/${productId}`,{type,name,price,description,image},{headers:{
        'Accept':'application/json',
        'Authorization':'Bearer '  +localStorage.getItem("token"),
        'cache-control':'no-cache'
    }})
    const data =res.data;
    resolve(data)
}


catch(err){
   reject(err)
}
})
}

}
export default Service    