const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
                <img src="img2/logo22.jpg" class="brand-logo" alt="">
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand and product">
                        <button class="search-btn">Search</button>
                        <a href="#"><img src="img2/user2.png" alt=""></a>
                        <a href="#"><img src="img2/cart2.png" alt=""></a>
                    </div>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="http://127.0.0.1:5500/public/index.html#" target="_blank" class="link">Home</a></li>
                <li class="link-item"><a href="http://127.0.0.1:5500/public/search.html" target="_blank" class="link">Search</a></li>
                <li class="link-item"><a href="http://127.0.0.1:5500/public/product.html" target="_blank" class="link">Products</a></li>
                <li class="link-item"><a href="#" class="link">Contact</a></li>
                <li class="link-item"><a href="#" class="link">About</a></li>
            </ul>
    `;
}
createNav();