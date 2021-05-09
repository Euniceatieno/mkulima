 class Mkulima{
        constructor(farms,groceryVendors,products,orders){
            this.farms=farms
            this.groceryVendors=groceryVendors
            this.products=products
            this.orders=orders
        }
        addFarm(farmId,name,farmer,phoneNumber,address){
            var aFarm={
                farmId:farmId,
                name:name,
                farmer:farmer,
                phoneNumber:phoneNumber,
                address:address
            }
            this.farms.push(aFarm)
            return this.farms
        }
        removeFarm(farmId){
            let theFarm=this.farms.find(theFarm=>theFarm.farmId==farmId)   
           return delete this.farms[theFarm]
        }
        updateFarm(farmId,name,farmer,phoneNumber,address){
            let farmToBeUpdated=this.farms.find(theFarm=>theFarm.farmId==12345)
            farmToBeUpdated={
                farmId:farmId,
                name:name,
                farmer:farmer,
                phoneNumber:phoneNumber,
                address:address
            } 
            return farmToBeUpdated
        }
        getFarm(farmId){
            let farmToBeFound=this.farms.find(theFarm=>theFarm.farmId==farmId)
            return farmToBeFound   
        }
        addProduct(productId,name,price){
            var aProduct={
                productId:productId,
                name:name,
                price:price
            }
            this.products.push(aProduct)
            return this.products
        }
        removeProduct(productId){
            let theProduct=this.products.find(theProduct=>theProduct.productId==productId)   
            return delete this.products[theProduct]   
        }
        updateProduct(productId,name,price){
            let productToBeUpdated=this.products.find(productToBeUpdated=>productToBeUpdated.productId==672)
            productToBeUpdated={
                productId:productId,
                name:name,
                price:price
            } 
            return productToBeUpdated 
        }
        getProduct(productId){
            let productToBeFound=this.products.find(productToBeFound=>productToBeFound.productId==productId)   
            return productToBeFound
        }
        printProducts(){    
            for(let items of this.products){
                console.log([items.name+":"+items.price])
            }
        }
        calculateOrderCost(productId,quantity){

            let myProduct=this.products.find(myProduct=>myProduct.productId==productId)
            return myProduct.price*quantity
        }
        }
        let mkulima=new Mkulima([],[],[],[])
        console.log(mkulima.addFarm(12345,"Salo","Mainge","072079875","Eldoret"))
        console.log(mkulima.addFarm(1234,"Selo","Njoroge","0798676088","Kisumu"))
        console.log(mkulima.addFarm(123,"Silo","Chege","0703720914","Nakuru"))
        
        console.log(mkulima.removeFarm(1234))
        
        console.log(mkulima.updateFarm(1345,"Sulo","Maina","098765678","Limuru"))
        console.log(mkulima.getFarm(123))
        
        console.log(mkulima.addProduct(987,"Cabbage",450))
        console.log(mkulima.addProduct(672,"Apple",670))
        console.log(mkulima.addProduct(879,"Orange",590))
        
        console.log(mkulima.removeProduct(987))
        console.log(mkulima.updateProduct(8765,"Flour",230))
        mkulima.printProducts()
        console.log(mkulima.calculateOrderCost(879,10))

        
       
   

    