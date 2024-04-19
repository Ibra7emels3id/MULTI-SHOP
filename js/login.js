
// login 

let Submitlogin = document.getElementById(`submit-login`)
let getPass1 = document.getElementById(`getPass1`)
let getuserName = document.getElementById(`getuserName`)

let getuserlocal = localStorage.getItem(`userName`)
let getpasslocal = localStorage.getItem(`subPass1`)

// console.log(getuserlocal)



Submitlogin.addEventListener(`click` , (e)=>{
    e.preventDefault();


    if(getuserlocal && getuserlocal.trim() == getuserName.value.trim() && getpasslocal && getpasslocal == getPass1.value){
        setTimeout(() => {
                window.location = `index.html`
        }, 1000);
    }else{
        alert(`please Enter Data`)
        console.log(`toas test`);
    }
})


