function increment (incDec,prc,itm) {
    let count = document.getElementById(incDec,prc,itm)
    let price = document.getElementById(prc)
    let item = document.getElementById(itm)
    let pr_amount = document.getElementById("pr_amount").innerHTML
    let charge = document.getElementById("charge").innerHTML
    let total_ammount = document.getElementById("total_ammount").innerHTML
    if(count.value >= 5) {
        count.value = 5
        alert("only five products allowed")
    }
    else{
        count.value++
        let result = parseInt(price.innerHTML) + parseInt(item.innerHTML)
        item.innerHTML = result

        //for product ammount
        let total_product = parseInt(price.innerHTML) + parseInt(pr_amount)
        document.getElementById("pr_amount").innerHTML = total_product

        //for total + charge
        let newResult = total_product + parseInt(charge)
        document.getElementById("total_ammount").innerHTML = newResult

        //make condition
        let kupon_main_div = document.getElementById("kupon_main_div")
        
        if(total_ammount > 200){
            kupon_main_div.style.display = "block"
        }
        
    }
}

//for minus button
function decrement(incDec,prc,itm){
    let count = document.getElementById(incDec,prc,itm)
    let price = document.getElementById(prc)
    let item = document.getElementById(itm)
    let pr_amount = document.getElementById("pr_amount").innerHTML
    let charge = document.getElementById("charge").innerHTML
    let total_ammount = document.getElementById("total_ammount").innerHTML
    if(count.value <=0){
        count.value = 0
        alert("only minimun one product allowed")
    }
    else{
        count.value--
        let result = parseInt(item.innerHTML) - parseInt(price.innerHTML)
        item.innerHTML = result

        //for product ammount
        let total_product = parseInt(pr_amount) - parseInt(price.innerHTML) 
        document.getElementById("pr_amount").innerHTML = total_product

         //for total + charge
        let newResult = total_product + parseInt(charge)
        document.getElementById("total_ammount").innerHTML = newResult
    }
}

let kupon_main_div = document.getElementById("kupon_main_div")
kupon_main_div.style.display = "none"

let applyBtn = document.getElementById("applyBtn")
applyBtn.addEventListener("click",function(){
    let kuponinput = document.getElementById("kuponinput")
    let total_ammount = document.getElementById("total_ammount").innerHTML
    if(kuponInput.value === "TASKIRUR_RAHMAN"){
        let total = parseInt(total_ammount) - 50
        document.getElementById("total_ammount").innerHTML = total
        alert("congratulations")
        kupon_main_div.style.display = "none"
    }
    else{
        alert("kupon does not match")
    }
})