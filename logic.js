function submit() {
    event.preventDefault();
    barcode = $("#barcode").val().trim();
    let resultDiv = $("<li>");
    let linkable = $("h5");
    var n = barcode.includes("]C1")
    if (n) {
        ner = barcode.slice(3, 99);
        linkable.append(ner)
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
