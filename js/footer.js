const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer class ="footer">
    <div class="footer-content">
        <img src="img/logo22.jpg" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formal</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watches</a></li>
            </ul>

            <ul class="category">
                <li class="category-title">Women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formal</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watches</a></li>
            </ul>
        </div>
        
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatibus amet quo tempora sed nulla fuga, ipsum nostrum laborum quae officiis architecto voluptas reprehenderit porro a corrupti praesentium provident obcaecati numquam. Maxime repudiandae magnam quibusdam eos laudantium delectus accusantium consectetur suscipit obcaecati reiciendis repellat, odit ullam dolores laborum nesciunt commodi similique earum laboriosam, dicta at. Laboriosam fugit impedit amet ipsum. Consequatur, rerum dicta delectus dolorum libero officiis labore in. Alias vero numquam voluptates tenetur asperiores minima explicabo laboriosam ad molestias quos fugit at deleniti, quia neque eius dolor voluptatibus non cumque? Deleniti ea incidunt ut corrupti maxime? Nulla, voluptatem voluptates?</p>
    <p class="info">support emails - help@king's crown clothing.com, customersupport@King's crown clothing.com</p>
    <p class="info">telephone - 180 00 00 01, 001 30 50 00</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">term & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">King's crown clothing, best apparels online store</p>
</footer>
    `;
}
createFooter();