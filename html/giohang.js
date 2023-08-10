function addToCart(btn) {
    const trNode = btn.parentElement.parentElement;

    const trNodeClone = trNode.CloneNode(true);
    const btnAdd = trNodeClone.getElementsByTagName("button");
    btnAdd[0].innertext = "Xóa";
    btnAdd[0].setAttribute("onclick", "removecartItem(this)");
    const cartBody = documemt.getElementsById("cart-body");

    cartBody.appendchild(trNodeClone);

    const cartTable = document.getElementById("cartItems");
    cartTable.style.display = "table";
    const emptyCart = document.getElementById("cartItems");
    emptyCart.style.display = "none";
    const grandToTal = document.getElementById("grandToTal");
    grandToTal.style.display = "bolck";

    calculateGrandToTal();
}
function removecartItem(btn){
    const trNode = btn.parentElement.parentElement;

    const tbodyNode = trNode.parentElement;
    tbodyNode.removechild(trNode);

    if (tbodyNode.children.length <=0) {
        const cartTable = document.getElementById("cartItems");
        cartTable.style.display = "none";

        const emptyCart = document.getElementById("emptycart");
        emptyCart.style.display = 'bolck'

        const grandToTal = document.getElementById("grandToTal");
        grandToTal.style.display ="none";

        grandToTal.childNodes[1].inperText = "0";
    }

    calculateGrandToTal();
}
function calculateGrandToTal(){
    const cartItemsTable = document.getElementById('cartItems')
    const amountSams = cartItemsTable.getElementsByTagName('amount')

    let total = 0
    for (const element of amountSpans) {
        total += mumber(element.innertext)
    }

    const totalspan = document.getElementById('total')
    totalSpan.innertext = total;
}