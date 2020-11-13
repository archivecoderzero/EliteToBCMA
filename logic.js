function submit() {
    event.preventDefault();
    barcode = $("#barcode").val().trim();
    let linkable = $("h5");
    var n = barcode.includes("]C1")
    let convertedBc = barcode.slice(3, 99);
    let resDiv = 
    
    if (n) {
        linkable.append(convertedBc)
    }
    else{
        linkable.replaceWith("Not a Valid Barcode")
    }
}


function eraser() {
    return p1 * p2; 
}


$(document).on("click", "#submit", submit);

$(document).on("click", "#clear", reload());
