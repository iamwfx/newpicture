
function getFeatures() {
    // console.log($('#censusDropdown1').val())
    // metric=catDict[$('#censusDropdown1.text').text()];
    metric = $("#censusDropdown1 input").val();


    // city = $('#cityDropdown1 .text').text();
    // year = $('#yearSlider>svg>g>.slider>.parameter-value>text').text()
    
    // Change the available cities
    // cityList = cities[parseInt(year)].sort();
   
    // Change the available census features
    // censusList1 = censusFeatures[parseInt(year)];

    // // If the current city isn't in the new list, then default to the first on the list
    // if ($.inArray(city,cityList)==-1){
    //     city = cityList[0];
    // }
    // // If the current category isn't in the new list, then default to the first on the list
    // if ($.inArray(category,censusList1)==-1){
    //     category=censusList1[0];
    // }
   return metric
}