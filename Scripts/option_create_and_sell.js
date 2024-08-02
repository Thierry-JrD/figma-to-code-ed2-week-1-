/* Create and Sell Render */

let options = document.getElementById('options');

const option = [
    {
        'option_title': 'Set up your wallet',
        'imgUrl': 'wallet-02.png',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
        'option_title': 'Add your NFT’s',
        'imgUrl': 'cloud-download.png',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
        'option_title': 'Promote your NFT’s',
        'imgUrl': 'sale-tag-02.png',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
        'option_title': 'Sell your NFT’s',
        'imgUrl': 'bitcoin-ellipse.png',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    }
];



const render_options = (option) => {
    let option_array = '';
    option.forEach(el => {
        option_array += `
        <div class="option">
            <div class="icon">
               <img src="Assets/${el.imgUrl}" alt="${el.imgUrl}">
            </div>
            <div class="option_title">
                <a href="#">${el.option_title}</a>
            </div>
            <p>${el.content}</p>
        </div>
        `
    });

    return option_array
}

options.innerHTML = render_options(option);