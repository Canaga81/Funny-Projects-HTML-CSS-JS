const card = document.getElementsByClassName( 'card' );
const btnAdd = document.getElementsByClassName( 'btn-info' );
const btnCart = document.querySelector( '.btn-cart ' );
const cartList = document.querySelector( '.shopping-cart-list' );

class Shopping {

    constructor( image, title, price ) {

        this.title = title;
        this.image = image;
        this.price = price;

    }

};

class UI {

    addToCart ( shopping ) {

        const listItem = document.createElement( 'div' );
        listItem.classList.add( 'list-item' );

        listItem.innerHTML = `
            <div class="row align-items-center text-white-50">

                <div class="col-md-3">
                    <img src="${ shopping.image }" alt="product" class="img-fluid">
                </div>

                <div class="col-md-5">
                    <div class="title">${ shopping.title }</div>
                </div>

                <div class="col-md-2">
                    <div class="price">${ shopping.title }</div>
                </div>

                <div class="col-md-2">
                    <button class="btn btn-delete">
                        <i class="fas fa-trash-alt text-danger"></i>
                    </button>
                </div>

            </div>
        `;

        cartList.appendChild( listItem );

    }

    removeCart () {

        let btnRemove = document.getElementsByClassName( 'btn-delete' );
        let self = this;

        for ( let i = 0; i < btnRemove.length; i++ ) {

            btnRemove[i].addEventListener( 'click', function () {

                this.parentElement.parentElement.parentElement.remove();
                self.cartCount()

            } );

        }

    }

    cartCount () {

        let cartListItem = document.getElementsByClassName( 'list-item' );
        let cartCount = document.getElementById( 'item-count' );
        cartCount.innerHTML = cartListItem.length;

    }

}

for ( let i = 0; i < card.length; i++ ) {

    btnAdd[i].addEventListener( 'click', ( e ) => {

        let title = card[i].getElementsByClassName( 'card-title' )[0].textContent;
        let price = card[i].getElementsByClassName( 'price' )[0].textContent;
        let image = card[i].getElementsByClassName( 'card-img-top' )[0].src;

        btnAdd[i].classList.add( 'disabled' );
        btnAdd[i].textContent = 'In Card';

        let shopping = new Shopping( image, title, price );

        let ui = new UI;

        ui.addToCart( shopping );
        ui.removeCart();
        ui.cartCount();

        e.preventDefault();

    } );

}

//! Toggle

function toggle () {

    btnCart.addEventListener( 'click', () => {

        cartList.classList.toggle( 'd-none' );

    } );

}

toggle();