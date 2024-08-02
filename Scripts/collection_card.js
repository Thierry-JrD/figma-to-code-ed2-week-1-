/* Collection Render */

let card_collection = document.getElementById('collections_cards');

const collection = [
    {
        'name': 'CyberPunk',
        'imgUrl': 'SRTuJU9NhWNT5Lu-s-2od7SteM28ekGUDkxXrmJT2JIiHC2qkF8NM7CSBgxiLAxTHQ93fzaPI-T02-duqGAgOUK9qHnzkutykOCA 1.png',
        'nbrEther': 68
    },
    {
        'name': 'Durolost Boll - Upper',
        'imgUrl': 'original-f1b3ae7c12709753428fd4f980e2b07f 1.png',
        'nbrEther': 68
    },
    {
        'name': 'Space X Wiper',
        'imgUrl': 'PSX_20211230_123415 1.png',
        'nbrEther': 68
    },
    {
        'name': 'Snoop Dogg',
        'imgUrl': 'grid_0_640_N.png',
        'nbrEther': 68
    }
];

const render_collections = (collection) => {
    let collection_array = '';
    collection.forEach(el => {
        collection_array += `
        <div class="card">
            <div class="container_img"> <img src="Assets/${el.imgUrl}" alt="${el.imgUrl}"> </div>
            <div class="container_info">
                <p class="name">${el.name}</p>
                <div class="nb_etherum">
                    <img src="Assets/ethereum-ellipse.png" alt="ethereum-ellipse.png">
                    <span>${el.nbrEther}</span>
                </div>
            </div>
            <button class="place_a_bid">Place a Bid</button>
        </div>
        `
    });

    return collection_array
}

card_collection.innerHTML = render_collections(collection);