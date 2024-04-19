
// Registration 

let SubmitRegistration = document.getElementById(`submit-Registration`)
let subName = document.getElementById(`subName`)
let userName = document.getElementById(`userName`)
let subPass1 = document.getElementById(`subPass1`)
let subPass2 = document.getElementById(`subPass2`)
let subEmail = document.getElementById(`subEmail`)

let ArrDataAccount = [] ;
SubmitRegistration.addEventListener(`click` , (e)=>{
    e.preventDefault();

    if(subName.value == `` || userName.value == `` || subPass1.value == `` ||subPass2.value == `` || subEmail.value == `` ){
        alert(`text`)
    }else{
        if(subPass1.value == subPass2.value){

            let DataAccount = {
                subName: subName.value ,
                userName: userName.value ,
                subPass1: subPass1.value ,
                subPass2: subPass2.value ,
                subEmail: subEmail.value ,
            }
            ArrDataAccount.push(DataAccount)
            console.log(ArrDataAccount);
            // localStorage.setItem(`ARRDataCount`  , JSON.stringify(ArrDataAccount))

            localStorage.setItem(`subName` , subName.value)
            localStorage.setItem(`userName` , userName.value)
            localStorage.setItem(`subPass1` , subPass1.value)
            localStorage.setItem(`subPass2` , subPass2.value)
            localStorage.setItem(`subEmail` , subEmail.value)
            
        setTimeout(() => {
            window.location = `login.html`
        }, 1000);

        }else{
            alert(`Error`)
        }
    }
})
