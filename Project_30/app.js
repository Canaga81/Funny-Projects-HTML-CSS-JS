//! Card ve Button'lar Ustediki acilan card,button ve asagidaki card, button

const card = document.getElementsByClassName( 'card' );
const btnAdd = document.getElementsByClassName( 'btn-info' );
const btnCart = document.querySelector( '.btn-cart' );
const cartList = document.querySelector( '.shopping-cart-list' );

// Card'in icindeki image, title ve price(qiymeti) 

class Shopping {

    constructor( image, title, price ) {

        this.image = image;
        this.title = title;
        this.price = price;

    }

}

//! Gorulen Hisse'nin hamisi

class UI {

    //? Yuxaridaki Carda elave etmek ucun yazdigimiz function

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
                    <div class="price">${ shopping.price }</div>
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

    //? Yuxaridaki Cardi silmek ucun yazdigimiz function

    removeCart () {

        let btnRemove = document.getElementsByClassName( 'btn-delete' );
        let self = this;

        for ( let i = 0; i < btnRemove.length; i++ ) {

            btnRemove[i].addEventListener( 'click', function() {

                this.parentElement.parentElement.parentElement.remove();
                self.cartCount(); //! Yuxaridaki cardlarin sayi azalanda burdanda silmesi ucun yazilan code

            } );

        }

    }

    //? Yuxaridaki Card'larin sayisin gosteren function

    cartCount () {
        
        let cartListItem = cartList.getElementsByClassName( 'list-item' );
        let itemCount = document.getElementById( 'item-count' );
        itemCount.innerHTML = cartListItem.length; //! Burdaki -"cartListItem.length"- card'larin sayini bildirir

    }

    //? Yuxaridaki Cardi acib-baglamak ucun yazilan function

    cartToggle () {

        btnCart.addEventListener( 'click', () => {
    
            cartList.classList.toggle( 'd-none' );
    
        } );
    
    }

}

//! Card'in icindeki image, title ve price'i cixarmaq ucun yazilan for dongusu 

for ( let i = 0; i < card.length; i++ ) {

    btnAdd[i].addEventListener( "click", ( e ) => {

        let title = card[i].getElementsByClassName( 'card-title' )[0].textContent;
        let price = card[i].getElementsByClassName( 'price' )[0].textContent;
        let image = card[i].getElementsByClassName( 'card-img-top' )[0].src;

        btnAdd[i].classList.add( 'disabled' );
        btnAdd[i].textContent = "In Card";

        //! Burda olan image, title ve price'lari UI'a menimsetmek ucun yazdigimiz code

        let shopping = new Shopping( image, title, price );

        let ui = new UI;

        ui.addToCart( shopping );
        ui.removeCart();
        ui.cartCount();

        e.preventDefault();

    } );

}

//! Toggle

document.addEventListener( "DOMContentLoaded", () => {
    
    let ui = new UI;
    ui.cartToggle();

} );