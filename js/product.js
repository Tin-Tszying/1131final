const prod = document.querySelector(".products-container");
const templateProd = document.querySelector(".box");
const templateProdcart = document.querySelector(".cart");
prod.innerHTML = "";
//Preview.innerHTML = "";

fetch('../json/product.json')
    .then(async (res) => {
    const response = await res.json();
    // console.log(response, 66);
    // console.log(templateProd, 50);
    finddetail(response);
    })
    .catch((err) => {
        console.log(err);
    });


    function finddetail(products){
        products.forEach((productList)=>{
            productList.forEach((item)=>{
                // const productDiv = templateProd.cloneNode(true);

                // productDiv.querySelector(".data-order").textContent = item.order;
                // productDiv.querySelector(".product-name").textContent = item.name;
                // productDiv.querySelector(".img").src = item.image;
                // productDiv.querySelector(".price").textContent = `NT$ ${item.price}`;
                // productDiv.querySelector(".cart").icon = "mdi-light:cart";

                // prod.appendChild(productDiv);
            const productDiv = document.createElement('div');
            productDiv.classList.add('box');

            // 填充產品內容
            productDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <h3 class="price">
                    $${item.price}/100g
                    <iconify-icon 
                        icon="mdi-light:cart" 
                        class="cart add-to-cart" 
                        data-name="${item.name}" 
                        data-price="${item.price}" 
                        data-image="${item.image}" 
                        width="24" height="24" 
                        role="button" 
                        aria-label="Add to cart">
                    </iconify-icon>
                </h3>
            `;
            prod.appendChild(productDiv);
            })
        })
    }
    function previewcard(info){
        info.forEach((infoList)=>{
            infoList.forEach((item)=>{
                const productDiv = templatePreview.cloneNode(true);

                productDiv.querySelector(".data-list").textContent = item.list;
                productDiv.querySelector(".product-name").textContent = item.name;
                productDiv.querySelector(".img").src = item.image;
                productDiv.querySelector(".price").textContent = `NT$ ${item.price}`;

                Preview.appendChild(productDiv);
            })
        })
    }