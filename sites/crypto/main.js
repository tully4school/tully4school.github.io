console.log("we are connected!")
    // evt.preventDefault()
    // 684cffb24d974a6e8f18bea5d0e5b926
let tabLinks = document.querySelectorAll(".tabLinks")
let tabContent = document.querySelectorAll(".tabContent")
let url = "https://api.nomics.com/v1/currencies/ticker?key=684cffb24d974a6e8f18bea5d0e5b926&ids=BTC,ETH,XRP,USDT,BCH,LTC,BNB,EOS,BSV,XLM&interval=1d,30d&convert=USD"
let createDiv = document.createElement("div")
createDiv.setAttribute('class', 'innerContainer')
let h1 = document.createElement("h1")
let img = document.createElement("img")
img.setAttribute('class', 'coinLogo')
let cpText = document.createElement("h4")
let currentP = document.createElement("p")
currentP.setAttribute('class', 'currentPrice')
let pcText = document.createElement('h4')
let priceChange = document.createElement("p")
priceChange.setAttribute('class', 'priceChange')
let div = document.querySelectorAll("div")



// tablinks.forEach(function(opener) {
// change.addEventListener("click", openTabs);

// });

// for (let i = 0;)
// tabLinks.forEach(function(listener){
// 	tabLinks.addEventListener("click", function(evt) {
//     evt.preventDefault()
//     console.log(evt)
// })
// }
fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res)
        for (let i = 0; i < div.length; i++) {
            if (res[0]['1d'].price_change > 0) {
                priceChange.classList.add('class', 'green')
            } else {
            	priceChange.classList.add('class', 'red')
            }
            switch (div[i].id) {
                case 'BTC':
                    h1.innerText = res[0].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[0].logo_url)
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[0].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[0]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
                case 'ETH':
                    h1.innerText = res[1].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[1].logo_url)
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[1].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[1]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
                case 'XRP':
                    h1.innerText = res[2].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[2].logo_url)
                    img.setAttribute('class', 'coinLogo1')
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[2].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[2]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
                case 'USDT':
                    h1.innerText = res[3].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[3].logo_url)
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[3].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[3]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
                case 'BCH':
                    h1.innerText = res[4].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[4].logo_url)
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[4].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[4]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
                case 'LTC':
                    h1.innerText = res[5].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[5].logo_url)
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[5].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[5]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
                case 'BNB':
                    h1.innerText = res[6].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[6].logo_url)
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[6].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[6]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
                case 'EOS':
                    h1.innerText = res[7].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[7].logo_url)
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[7].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[7]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
                case 'BSV':
                    h1.innerText = res[8].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[8].logo_url)
                    img.setAttribute('class', 'coinLogo2')
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[8].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[8]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
                case 'XLM':
                    h1.innerText = res[9].name
                    div[i].appendChild(h1.cloneNode(true))
                    div[i].appendChild(createDiv.cloneNode(true))
                    img.setAttribute('src', res[9].logo_url)
                    div[i].lastElementChild.appendChild(img.cloneNode(true))
                    cpText.innerText = ('Current Price:')
                    div[i].lastElementChild.appendChild(cpText.cloneNode(true))
                    currentP.innerText = ('$') + res[9].price
                    div[i].lastElementChild.appendChild(currentP.cloneNode(true))
                    pcText.innerText = ('24H change')
                    div[i].lastElementChild.appendChild(pcText.cloneNode(true))
                    priceChange.innerText = ('$') + res[9]['1d'].price_change
                    div[i].lastElementChild.appendChild(priceChange.cloneNode(true))
                    break;
            }

        }
    })
    .then(res => {
        console.log("success!", res)
    })
    .catch(err => {
        console.log("NOOOO!!!", err)
    })





tabLinks.forEach(function(listener) {
    listener.addEventListener("click", open, function(evt) {
        evt.preventDefault()
        console.log(evt)
    })
})

//the function to open each tab by removing an active class of another

function open(openTab) {
    let currentBtn = openTab.currentTarget; //found out about currentTarget from https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
    let coin = currentBtn.dataset.coin; // choosing the data-coin attribute

    //stating that any time i click on another button it removes the class from the current target
    tabContent.forEach(function(addClass) {
        addClass.classList.remove("active")
    })
    tabLinks.forEach(function(removeClass) {
            removeClass.classList.remove("active")
        })
        //stating that any button i push will add the class of active
    document.querySelector('#' + coin).classList.add("active")

    currentBtn.classList.add("active")
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            // h1.innerHTML = res[0].currency;
            // for (let i = 0; i < tabContent.length; i++) {
            //     if (res[0].name == coin) {
            //         console.log(res[0])
            //     }
            //     // h1.innerHTML = res[0].name;
            //     // tabContent[i].appendChild(h1)
            // }

            // for (let i = 0; i < coin; i++){
            // 	for (let j = 0; j < resName.length; j++){
            // 		if (i === j) {
            // 			console.log(i + j)
            // 		}
            // 	}
            // }

        })




}


// function openCoin(evt, coinName) {
//   // Declare all variables
//   var i, tabContent, tabLinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabContent = document.getElementsByClassName("tabContent");
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementByClassName(tabContent).style.display = "block";
//   evt.currentTarget.className += " active";
// }


//FOR TRYING TO GET THE NAME IN THE SELECTED DIV


// console.log(res[0].name)
// h1.innerHTML = res[0].currency;

//     for (let i = 0; i < res.length; i++) {
//     	for (let j = 0; j < div.length; j++) {
//     	let name = res[i].currency;
//     	let divId = div[j].id
//     	if (divId === name){
//     		console.log("its a match")
//     	}
//     }
// }
// for (let i = 0; i < div.length; i++){
// 	let names = div[i].id;
// 	console.log(names)
// }