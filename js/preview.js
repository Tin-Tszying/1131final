const previewContainer = document.querySelector('.products-preview');
const previewBox = previewContainer.querySelectorAll(".preview");


document.querySelectorAll('.products-container .box').forEach(product =>{
    product.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-order');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-list');
            if(name == target){
                preview.classList.add('active')
            }
        })
    };
});

previewBox.forEach(preview =>{
    const CloseButton = preview.querySelector('.meteor-icons-xmark');
    if (CloseButton){
        CloseButton.onclick = () =>{
            preview.classList.remove('active');
            previewContainer.style.display = 'none';
        }
    }
});