function submit ( ) {
    event.preventDefault();
    barcode = $("#barcode").val().trim();
    let resultDiv = $("<li>");
    let linkable = $("h5");
    var n = barcode.includes("]")

    if(n){
        ner = barcode.slice(0,3);

    var the =  ner ;
    linkable.addClass("links")
    linkable.attr("href", the);
    linkable.attr("target","_blank")
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
