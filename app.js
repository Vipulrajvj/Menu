const menu = [{
        id: 1,
        title: "Chicken butter masala",
        category: "main",
        price: 320,
        img: "Images/Chicken.jpg",
        desc: `Rich and creamy blend of tomatoes, butter, curry and spices with a mild meat.`,
    },
    {
        id: 2,
        title: "Gajar Halwa",
        category: "desserts",
        price: 140,
        img: "Images/Gajar.jpg",
        desc: `Light nutritious desserst made off a combination of nuts, milk, sugar, khoya and ghee with grated carrot  `,
    },
    {
        id: 3,
        title: "Badam Milk",
        category: "drinks",
        price: 75,
        img: "Images/Almond.jpg",
        desc: `drink made with milk and almonds and flavored with saffron and cardamom! `,
    },
    {
        id: 4,
        title: "Hyderabadi Chicken Biryani",
        category: "main",
        price: 375,
        img: "Images/Biryani.jpg",
        desc: `Often called dum biryani. Marinated in a mixture of freshly ground spices & layered with long grain basmati rice in the handi and slow cooked, `,
    },
    {
        id: 5,
        title: "Rasgullas",
        category: "desserts",
        price: 80,
        img: "Images/Rasgulla.jpg",
        desc: `Syrupy dessert made from chhenna(cottage cheese), semolina and sugar `,
    },
    {
        id: 6,
        title: "Lassi",
        category: "drinks",
        price: 65,
        img: "Images/Lassi-9991.jpg",
        desc: ` a creamy, frothy yogurt-based drink, blended with water and various fruits or seasonings`,
    },
    {
        id: 7,
        title: "Palak Paneer",
        category: "main",
        price: 190,
        img: "Images/PPaneer4.jpg",
        desc: `classic curry dish from North Indian cuisine made with fresh spinach, onions, spices, paneer and herbs`,
    },
    {
        id: 8,
        title: "Jalebi",
        category: "desserts",
        price: 60,
        img: "Images/jalebi.jpg",
        desc: `made by deep-frying maida flour batter in pretzel or circular shapes, which are then soaked in sugar syrup.`,
    },
    {
        id: 9,
        title: "Masala Chai",
        category: "drinks",
        price: 40,
        img: "Images/chai.jpg",
        desc: ` tea beverage made by boiling black tea in milk and water with a mixture of aromatic herbs and spices.`,
    },
];
// get parent element
//Query selector used for getting the class values from the html file
//const is used for making such variables and arrays
//important use of data in the html file

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const filterBtns = document.querySelectorAll(".filter-btn"); //because more than one buttons are present in the class

// display all items when page loads
//window is used to display the items when the site loads

window.addEventListener("DOMContentLoaded", function() {
    diplayMenuItems(menu);
});

//The filtering items
//for Each is used because more than one
filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id; //To get the specific ids from the html file using the dataset and currentTarget
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });

        if (category === "all") {
            diplayMenuItems(menu); //will display everything
        } else {
            diplayMenuItems(menuCategory); // will display the category we created in the menu and pass the same parameter in the displayMenu items
        }
    });
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        //map is used to get all the array values
        //and return is used to dispay its particular properties one by one with the properties already defined

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}₹</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });

    //then we join all of it
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    //displaying those in the html
    sectionCenter.innerHTML = displayMenu;
}