// https://fakestoreapi.com/products
// get this endpoint with fetch
const url = "https://fakestoreapi.com/products";
async function getText(url) {
  const x = await fetch(url);
  const y = await x.json();
  return y;
}
getText(url).then((data) => {
  const products = data;
  const divelement = document.querySelector("#div");
  const divbutton = document.querySelector(".increase");
  const divbutton2 = document.querySelector(".decrease");
  const sortIncrease = () => {
    const sortedProducts = products.sort((a, b) => {
      return a.price - b.price;
    });
    showProducts(sortedProducts);
  };
  const sortDecrease = () => {
    const sortedProducts = products.sort((a, b) => {
      return b.price - a.price;
    });
    showProducts(sortedProducts);
  };
  const showProducts = () => {
    divelement.innerHTML = "";
    products.map((item, index) => {
      if (index < 9) {
        divelement.innerHTML += `
          <div class="col-12 col-md-6 col-xl-4">
            <div id="card"><h2 id="cardtitle">${item.title}</h2><p id="cardprice">${item.price}</p><p id="carddescription">${item.description}</p></div>
          </div>
        `;
      }
    });
  };
  sortIncrease();
  divbutton.addEventListener("click", () => {
    sortIncrease();
  });
  divbutton2.addEventListener("click", () => {
    sortDecrease();
  });
});
