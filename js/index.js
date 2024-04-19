// nav list Acount
let Account = document.getElementById(`Account`)
let linkAcount = document.querySelector(`.linkAcount`)

Account.addEventListener(`click`, () => {
    linkAcount.classList.toggle(`show`)
})

// ======================
// show Account
// ======================
function showUser() {
    let ShowAccuont = document.querySelector(`.ShowAccuont`)
    let linkAcount = document.querySelector(`.linkAcount`)

    if (localStorage.getItem(`userName`)) {
        ShowAccuont.style.display = `block`;
        linkAcount.style.display = `none`;
        Account.innerHTML = `
        <span id="Account"> my Account </span>
        `;
        console.log(`test`);

    } else {
        ShowAccuont.style.display = `none`
        console.log(`tooo test`);
    }
}
showUser()


// ======================
// Navlist Icon
// ======================
let Navlist = document.getElementById(`Navlist`)
let navList = document.querySelector(`.navList`)
let iconArr = document.getElementById(`iconArr`)

Navlist.addEventListener(`click`, () => {
    navList.classList.toggle(`show`)
    iconArr.classList.toggle(`show`)
})


// ======================
// show list Card
// ======================

let AddToCardHtml = document.querySelector(`.AddToCardHtml`)
function ShowListCard() {
    AddToCardHtml.classList.toggle(`show`)
}

function CancelListBrodect() {
    AddToCardHtml.classList.remove(`show`)
}


// ======================
// categories shop
// ======================

let Shop = document.getElementById(`Shop`)
let categoriesDate = [];
let Cardes = [];


// ======================
// slider swiper
// ======================

const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});





// ======================
// Add categories html 
// ======================

function categories() {
    categoriesDate.forEach(category => {
        let CategorieShop = document.querySelector(`.CategorieShop`)
        let NewCategry;
        NewCategry = `
        <div data-aos="fade-up" class="m-1 col-lg-3 col-md-6 col-sm-12 pb-1  box d-flex align-items-center justify-content-center ">
            <div class="cateImg w-50">
                <img class="w-100 " src="${category.imageUrl}" alt="">
            </div>
            <div class="text w-50">
                <h6>${category.title}</h6>
                <p>${category.count}</p>
            </div>
        </div> `;
        CategorieShop.innerHTML += NewCategry
    });
}
categories()
let prodectesCard1 = document.querySelector(`.prodectesCard1`)
let prodectesCardOffer = document.querySelector(`.prodectesCardOffer`)
let searchProdectesCard = document.querySelector(`.searchProdectesCard`)
let showData = document.getElementById(`showData`)



// ======================
// Add Products Html
// ======================

function prodectAddtoHtml() {
    categoriesDate.forEach(category => {
        let NewProdect;
        NewProdect = `
        <div data-aos="fade-up" class="col-lg-3 col-md-4 col-sm-6 col-xs-12  box d-flex ">
            <div class='m-2 bg-white'>
                <div class="cateImg w-100">
                    <img class="w-100 " src="${category.imageUrl}" alt="">
                    <div class="iconAddCard">
                        <i onclick="AddCardId(${category.id}) , MassAddToCArds(${category.id})" class="fa-solid fa-cart-plus"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-rotate-right"></i>
                        <i id="showData" onclick="showCard(${category.id})" class="fa-solid fa-eye"></i>
                    </div>
                </div>
                <div class="text ">
                    <h6>${category.titleCard}</h6>
                    <p>${category.price} $123.00</p>
                    <div class="iconStar">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(${category.quntate})</p>
                    </div>
                </div>
            </div>
        </div>    
        `;

        prodectesCard1.innerHTML += NewProdect
        prodectesCardOffer.innerHTML += NewProdect
        searchProdectesCard.innerHTML += NewProdect

    });
    AddCardToHtml()
}


// ======================
// Add to Cart Html 
// ======================

function AddCardId(id) {
    let positionthinprodect = Cardes.findIndex((Card) => Card.id == id);
    if (Cardes.length <= 0) {
        Cardes.push({
            id: id,
            quantity: 1,
        });
    }
    else if (positionthinprodect < 0) {
        Cardes.push({
            id: id,
            quantity: 1,
        });
    }
    else {
        Cardes[positionthinprodect].quantity = Cardes[positionthinprodect].quantity + 1;
    }
    AddCardToHtml()
    AddcardtoMemre()
}


// ======================
// Add Card to momre
// ======================
let AddcardtoMemre = () => {
    localStorage.setItem(`cardItem`, JSON.stringify(Cardes))
}

let listCard = document.querySelector(`.AddCard`)
let totalpriceCard = document.getElementById(`totalpriceCard`)

const AddCardToHtml = () => {
    listCard.innerHTML = ``;
    let totalPrice = 0
    let NumIConShop = 0;
    if (Cardes.length > 0) {
        Cardes.forEach(card => {
            NumIConShop = NumIConShop + card.quantity;
            Shop.innerHTML = NumIConShop

            let positionthinprodect = categoriesDate.findIndex((category) => category.id == card.id)
            let info = categoriesDate[positionthinprodect]

            let totalPriceQuantity = info.price * card.quantity
            totalPrice += totalPriceQuantity


            let newprodect;
            newprodect = `
            <div class="AddCardoxs">
                <div class="cateImg">
                    <img class=" " src="${info.imageUrl}" >
                </div>
                <div class="text ">
                    <h6>${info.titleCard}</h6>
                    <p>${info.price} $123.00</p>
                </div>

                <div class="count">
                    <button id="miunsCardKey" onclick="miunsCard(${info.id})" ><</button>
                    <p>${card.quantity * info.price}</p>
                    <button onclick="AddCardId(${info.id})">></button>
                </div>

                <div class="RemoveItme">
                    <i onclick="RemoveItemKey(${card.id})" class="fa-solid fa-trash"></i>
                </div>
            </div>    
            `;
            document.querySelector(`.AddCard`).innerHTML += newprodect
            document.getElementById('totalpriceCard').innerHTML = totalPrice
        });
    }
}




// ======================
// miuns Card
// ======================

function miunsCard(id) {
    let positionthinprodect = Cardes.findIndex((Card) => Card.id == id);

    if (Cardes.length <= 0) {

    }
    else if (Cardes[positionthinprodect].quantity === 1) {

    }
    else {
        Cardes[positionthinprodect].quantity = Cardes[positionthinprodect].quantity - 1;
    }
    AddCardToHtml()
    AddcardtoMemre()

}


function RemoveItemKey(id) {
    let positionthinprodect = Cardes.findIndex((Card) => Card.id == id);
    Cardes.splice(positionthinprodect, 1)
    AddCardToHtml();
    AddcardtoMemre()
}

let AinCat = () => {
    fetch('js/Prodectes.json')
        .then(Response => Response.json())
        .then(data => {
            categoriesDate = data;
            categories()
            prodectAddtoHtml()

        })
    if (localStorage.getItem(`cardItem`)) {
        Cardes = JSON.parse(localStorage.getItem(`cardItem`))
        AddCardToHtml()
    }
}
AinCat()



// ======================
// mass Add to Card
// ======================

function MassAddToCArds(id) {
    let MassAddToCard = document.querySelector(`.MassAddToCard`)
    MassAddToCard.innerHTML = `
        <div class="TextMass">
            <h3>Added to cart</h3>
            <span class="boed"></span>
        </div>
    `;
    MassAddToCard.style.display = `block`
    let boed = document.querySelector(`.boed`)
    boed.classList.add(`show`)

    setTimeout(() => {
        MassAddToCard.style.display = `none`
    }, 2000);
}



// ======================
// search Data
// ======================

function SearchData(value) {
    let NewProdect = ``;
    for (let i = 0; i < categoriesDate.length; i++) {

        if (categoriesDate[i].titleCard.includes(value.toLowerCase())) {
            NewProdect += `
                <div class="m-2 col-lg-3 col-md-6 col-sm-12 pb-1  box d-flex bg-white">
                        <div class="cateImg w-100">
                            <img class="w-100 " src="${categoriesDate[i].imageUrl}" alt="">
                            <div class="iconAddCard">
                                <i onclick="AddCardId(${categoriesDate[i].id}) , MassAddToCArds(${categoriesDate[i].id})" class="fa-solid fa-cart-plus"></i>
                                <i class="fa-solid fa-heart"></i>
                                <i class="fa-solid fa-rotate-right"></i>
                            </div>
                        </div>
                        <div class="text ">
                            <h6>${categoriesDate[i].titleCard}</h6>
                            <p>${categoriesDate[i].price} $123.00</p>
                            <div class="iconStar">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <p>(${categoriesDate[i].quntate})</p>
                            </div>
                        </div>
                        
                    </div>    
                `;
            searchProdectesCard.innerHTML = NewProdect
        }
    }
}



// ======================
// show Details Card 
// ======================

function showCard(id) {

    let ShowDataDetaills = document.querySelector(`.ShowDataDetaills`)
    ShowDataDetaills.classList.add(`show`)
    let showDataCard = categoriesDate.find((categor) => categor.id == id);
    let newshowprodect;
    newshowprodect = `
        <div class="box w-100 h-80 d-flex p-4">
                    <div class="cateImgShow">
                        <img class="w-100" src="${showDataCard.imageUrl}" alt="">
                    </div>
                    <div class="text ">
                        <h6 class="">${showDataCard.title}</h6>
                        <p>$${showDataCard.price} <u>$123.00</u></p>
                        <div class="iconStar">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="iconColor">
                            <span class="red"></span>
                            <span class="black"></span>
                            <span class="blue"></span>
                            <span class="yellow"></span>
                        </div>
                        <div class="iconAddCard mt-5">
                            <i onclick="AddCardId(${showDataCard.id}) , MassAddToCArds(${showDataCard.id})" class="fa-solid fa-cart-plus Addcard mt-5"></i>
                            <i class="fa-solid fa-heart liveCard mt-5"></i>
                            <i class="fa-solid fa-share share mt-5"></i>
                        </div>
                    </div>
                </div>
                
                `;
    document.querySelector(`.ShowData`).innerHTML = newshowprodect
}

function cansel() {
    let ShowDataDetaills = document.querySelector(`.ShowDataDetaills`)
    ShowDataDetaills.classList.remove(`show`)
}

//   shoping 
let btnClick = document.querySelector(`.btn-sucss`)

function AllDataprodect(value) {

    console.log(value);


    let NewProdect = ``;
    for (let i = 0; i < categoriesDate.length; i++) {

        if (categoriesDate[i].ProductType.includes(value)) {

            NewProdect += `
                    <div class="m-2 col-lg-3 col-md-6 col-sm-12 pb-1  box d-flex bg-white">
                            <div class="cateImg w-100">
                                <img class="w-100 " src="${categoriesDate[i].imageUrl}" alt="">
                                <div class="iconAddCard">
                                    <i onclick="AddCardId(${categoriesDate[i].id}) , MassAddToCArds(${categoriesDate[i].id})" class="fa-solid fa-cart-plus"></i>
                                    <i class="fa-solid fa-heart"></i>
                                    <i class="fa-solid fa-rotate-right"></i>
                                </div>
                            </div>
                            <div class="text ">
                                <h6>${categoriesDate[i].titleCard}</h6>
                                <p>${categoriesDate[i].price} $123.00</p>
                                <div class="iconStar">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <p>(${categoriesDate[i].quntate})</p>
                                </div>
                            </div>
                            
                        </div>    
                    `;
            searchProdectesCard.innerHTML = NewProdect
        } else if (value === `All`) {

            NewProdect += `
                    <div class="m-2 col-lg-3 col-md-6 col-sm-12 pb-1  box d-flex bg-white">
                            <div class="cateImg w-100">
                                <img class="w-100 " src="${categoriesDate[i].imageUrl}" alt="">
                                <div class="iconAddCard">
                                    <i onclick="AddCardId(${categoriesDate[i].id}) , MassAddToCArds(${categoriesDate[i].id})" class="fa-solid fa-cart-plus"></i>
                                    <i class="fa-solid fa-heart"></i>
                                    <i class="fa-solid fa-rotate-right"></i>
                                </div>
                            </div>
                            <div class="text ">
                                <h6>${categoriesDate[i].titleCard}</h6>
                                <p>${categoriesDate[i].price} $123.00</p>
                                <div class="iconStar">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <p>(${categoriesDate[i].quntate})</p>
                                </div>
                            </div>
                            
                        </div>    
                    `;
            searchProdectesCard.innerHTML = NewProdect
        }
    }
}

// ViewProdectss

function ViewProdectss() {
    let userName = localStorage.getItem(`userName`)
    console.log(`test`);
    if (userName) {
        window.location = `checkProdectss.html`
    } else {
        window.location = `login.html`
    }
}

// Cancel list check prodect

function Cancellistcheckprodect() {
    window.location = `index.html`
    console.log(`test`);
}







