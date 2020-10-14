function submit() {
    event.preventDefault();
    barcode = $("#barcode").val().trim();
    let resultDiv = $("h5");
    let linkable = $("h5");
    var n = barcode.includes("]C1")
    let convertedBc = barcode.slice(3, 99);

    
    if (n) {
        linkable.append(convertedBc)
        $("#results").append(resultDiv);
        resultDiv.append(linkable);

    }
    else{
        linkable.append("Not a Valid Barcode")
        $("#results").append(resultDiv);
        resultDiv.append(linkable);

    }
}

function clear() {
    event.preventDefault();
    $("#results").empty();
}




$(document).on("click", "#submit", submit);

$(document).on("click", "#clear", clear);
