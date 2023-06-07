let input = document.querySelector('input')
let button = document.querySelector('.addElem')
let products = document.querySelector('.products')

function createProduct(){
    let product = document.createElement('div')
    product.classList.add('product')
    product.innerText = input.value

    let counterDiv = document.createElement('div')
    counterDiv.classList.add('counter')

    let minusBtn = document.createElement("button")
    minusBtn.classList.add('minus')
    minusBtn.innerText = '-'

    let plusBtn = document.createElement("button")
    plusBtn.classList.add('plus')
    plusBtn.innerText = '+'
    
    let countOfProduct = document.createElement('p')
    countOfProduct.classList.add('countOfProduct')
    countOfProduct.innerText = 1


    counterDiv.append(minusBtn, countOfProduct, plusBtn)
    product.append(counterDiv)
    products.append(product)

    countProduct(minusBtn,plusBtn,countOfProduct,product)
}


function countProduct(minusBtn,plusBtn,countOfProduct,product){
    let count = 1

    minusBtn.addEventListener('click', () => {
        count--
        countOfProduct.innerText = count
        if(count <= 0){
        product.remove()
    }
    })

    plusBtn.addEventListener('click', () => {
        count++
        countOfProduct.innerText = count
    })
}

button.addEventListener('click',(event) => {
    let product = document.querySelector('.product')
    event.preventDefault()

    createProduct()

    localStorage.setItem('products', JSON.stringify(products))
    let storage = JSON.parse(localStorage.getItem('products'))
    console.log(storage);
    return storage
})