/* Tablet Landing Page Menu of right Side */

const menu = document.querySelector('.menu');
const right_side_menu = document.getElementById('right_side_menu');
const hide_menu = document.querySelector('.hide_menu');
const separator_ver = document.querySelector('separator_ver');

menu.addEventListener('click', () => {
    right_side_menu.classList.add('active');
    /*separator_ver.innerHTML = `
                <div>
                    <button class="hide_menu">
                        <img src="Assets/Cross.png" alt="Cross.png">
                    </button>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Top sales</a>
                    <a href="#">Collections</a>
                    <a href="#">Our blog</a>
                    <a href="#">About us</a>
                </nav>
                <div class="connexion">
                    <button class="sign_up">Sign up</button>
                    <button class="connect_wallets">Connect Wallet</button>
                </div>
        `;*/
});

hide_menu.addEventListener('click', () => {
    right_side_menu.classList.remove('active');
    /*separator_ver.innerHTML = '';*/
});

window.addEventListener('resize', () => {
    if (innerWidth > 768) {
        right_side_menu.classList.remove('active');
    }
});
