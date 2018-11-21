var shoppingList = [];

var text = "Hello, and welcome to the Neon Dreams virtual storefront\ne***Enjoy yourself :)***\n\n-------Menu------\nFiji Water - $2.39\nArizona Tea - $.99\nAesthetic Bust - $1999.99\nPalm - $9.99\nSadBoi - $.10";

function removeIfQuantityZero() {
    if (shoppingList.length != 0) {
        for (i = 0; i < shoppingList.length; i++) {
            if (shoppingList[i].quantity == 0) {
            shoppingList.splice(i, 1);
            }
        }
    }
}

function adjustQuantity(name1, quantity1, price1) {
    var count = 0;
    if (shoppingList.length == 0) {
        var element = { name: name1, quantity: quantity1, price: price1 };
        shoppingList.push(element);
    }
    else {
        for (i = 0; i < shoppingList.length; i++) {
            if (shoppingList[i].name == name1) {
                count++;
                shoppingList[i].quantity = quantity1;
            }
        }
        if (count == 0) {
            var element = { name: name1, quantity: quantity1, price: price1 };
            shoppingList.push(element);
        }
    }
     
    
    removeIfQuantityZero();
    //document.getElementById('div1').innerHTML = cartText();
}

function cartText() {
    var output = "<h1 id='h1'>Your Receipt</h1><p id='p1'>";
    var subtotal = 0;
    var tax = 0;
    var total = 0;
    if (shoppingList.length < 1) {
        return "Cart Empty!";
    }
    else {
        for (i = 0; i < shoppingList.length; i++) {
            output += `${shoppingList[i].name} x ${shoppingList[i].quantity} @ ${shoppingList[i].price}<br>`;
            subtotal += shoppingList[i].quantity * shoppingList[i].price;
        }
        total = subtotal + subtotal * .06;
        tax = subtotal * .06;
        output += `</p><p id=p2>Subtotal: $${parseFloat(Math.round(subtotal * 100) / 100).toFixed(2)}<br>Tax: $${parseFloat(Math.round(tax * 100) / 100).toFixed(2)}<br>Total: $${parseFloat(Math.round(total * 100) / 100).toFixed(2)}</p><button id='button1' type='button' onclick='self.close();'>Complete Purchase</button>`;
        return output;
    }
}

function openReceipt() {
    var text = cartText();
    Finalize();
    shoppingList = [];
    var myWindow = window.open("receipt.html", "_blank", "resizable=no, scrollbars=yes, titlebar=no, width=400, height=500, top=10, left=10");
    //window.document.getElementById('p1').innerHTML = cartText();
    myWindow.document.write("<div id='div1' class='container'>" + text + "</div>");
  
}

function Finalize() {
    var arr = document.getElementsByClassName('input');
    for (var i = 0; i < arr.length; i++) {
        arr[i].innerHTML = 0;
    }
}

function addOrRemove(input, element) {
    var box = document.getElementById('p'+ element);
    var text = box.innerHTML;
    var num = parseInt(text);
    if (input == "r") {
        num -= 1;
        box.innerHTML = num;
    }
    else {
        num += 1;
        box.innerHTML = num;
    }
    if (num < 0) {
        box.innerHTML = 0;
    }
}

function removeClassCaller() {
    document.getElementById('aesthetic').play();
    setTimeout(removeClass, 3000);
}

function removeClass() {
    document.getElementById('1').classList.remove("hidden");
    document.getElementById('2').classList.remove("hidden");
    
}

