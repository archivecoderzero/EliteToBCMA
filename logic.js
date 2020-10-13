function submit ( ) {
    event.preventDefault();
    barcode = $("#barcode").val().trim();
    let resultDiv = $("<li>");
    let linkable = $("h5");
    var n = barcode.includes("]")

    if(n){
        ner = barcode.slice(6,99);
    var the =  ner ;
    linkable.append(the)
    $("#results").append(resultDiv);
    resultDiv.append(linkable);
}
}

function clear ( ) {
    event.preventDefault();
    $( "#results" ).empty();
}


$(document).on("click", "#submit", submit);

$(document).on("click", "#clear", clear);
