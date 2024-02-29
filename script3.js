let productWrapper = document.getElementById("product-wrapper")

fetch('https://dummyjson.com/products')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.products.forEach(element => {
        var productCardElement = document.createElement("div")
                productCardElement.className = "cards col-lg-4 col-md-6 col-sm-8"
                var productImgElement = document.createElement("img")
                productImgElement.src = element.thumbnail;
                var productTitleElement = document.createElement("p")
                productTitleElement.innerHTML = ` Title : <b>${element.title}</b>`
                var productPriceElement = document.createElement("p")
                productPriceElement.innerHTML =`<b>Price :  ${element.price} $</b>`
                productCardElement.append(productImgElement,productTitleElement,productPriceElement)
                productWrapper.append(productCardElement) 
    });
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });

