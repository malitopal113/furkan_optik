// const tds = document.querySelectorAll('.img');
// tds.forEach((td) => {
//   td.style.setProperty('--td-background-color', '#00ff00');
// });
 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

const topScroll = document.querySelector('#btnScrolltop');

window.addEventListener('scroll', function () {
    let y = window.pageYOffset;
    if ( y >= 200) {
        topScroll.classList.remove('hidden')
    }  
    else {
        topScroll.classList.add('hidden')
    }
        

    
  })






topScroll.addEventListener('click', function() {
    
        
        window.scroll({top: 0, behavior: "smooth"})
    

        
         
})

// menutoggle

let menuItems = document.getElementById('menuItems');
        menuItems.style.maxHeight = "0px";
        function menuToggle(){
            if(menuItems.style.maxHeight == "0px" ){
                menuItems.style.maxHeight = "300px"
            }
            else{
                menuItems.style.maxHeight = "0px"
            }
        }



let searchBox = document.querySelector('#mobile-search-box');

        searchBox.style.maxHeight = "0px";
        function search(){
            
            if(searchBox.style.maxHeight == "0px" ){
                searchBox.style.maxHeight = "300px"
                searchBox.classList.add('border')
                
            }
            
            else{
                searchBox.style.maxHeight = "0px"
                searchBox.classList.remove('border')
            }
        }

// mobile user icon

let userItem = document.getElementById('user-item');
        userItem.style.maxHeight = "0px";
        function userLog(){
            if(userItem.style.maxHeight == "0px" ){
                userItem.style.maxHeight = "100px"
            }
            else{
                userItem.style.maxHeight = "0px"
            }
        }


// mobile basket

let basketItem = document.getElementById('basket-item');
        basketItem.style.maxHeight = "0px";
        function basketLog(){
            if(basketItem.style.maxHeight == "0px" ){
                basketItem.style.maxHeight = "100px"
            }
            else{
                basketItem.style.maxHeight = "0px"
            }
        }







