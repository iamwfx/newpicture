

//Globals
const catDict ={'white_diversity_exp':'White Experienced Diversity',
            'black_diversity_exp':'Black Experienced Diversity',
            'hispanic_diversity_exp':"Hispanic Experienced Diversity",
            'asian_diversity_exp':"Asian Experienced Diversity",
            'other_diversity_exp':'Other Experienced Diversity',
            'total_diversity_exp':"Total Experienced Diversity",
            'total_diversity_resi':'Total Residential Diversity',
            'diff':"Difference"}
const catDict1 ={'White Experienced Diversity':'white_diversity_exp',
            'Black Experienced Diversity':'black_diversity_exp',
            "Hispanic Experienced Diversity":'hispanic_diversity_exp',
            "Asian Experienced Diversity":'asian_diversity_exp',
            'Other Experienced Diversity':'other_diversity_exp',
            "Total Experienced Diversity":'total_diversity_exp',
            'Total Residential Diversity':'total_diversity_resi',
            "Difference":'diff'}

// Color dict for the legend
const censusCatDict = {
            "white_diversity_exp":[
                   '#deeed6', '#b5daa4', '#82c66f', '#58b347', '#2f8741', '#21441f'
                ],
            "black_diversity_exp": [
              '#f7fbff', '#d6edfb', '#98c5e0', '#7ab5e2', '#449bcc', '#2173b2', '#1d3666'
              ],
            "asian_diversity_exp":  [
               '#FFF7EE', '#FFF7EE', '#FDDFC1', '#FCB77E', '#F68A48', '#D5602E', '#91492F'
               ],
            "hispanic_diversity_exp": [
                  '#FFF7F2', '#FFF7F2', '#FCD3C2', '#FB9D85', '#F36558', '#CB3741', '#7C2936'
                ],
            "other_diversity_exp": [
                '#F3F0F8', '#F3F0F8', '#E0C8E3', '#DF93C9', '#E15EA7', '#D33383', '#A52461'
            ],
            "total_diversity_exp": [
                  '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'
                ],
            "total_diversity_resi": [
                  '#440154', '#46327f', '#365c8d', '#277f8e', '#1fa288', '#4ac26d', '#9ed93a', '#fde725'
                ],
            "diff":[
                   '#CF2245', '#E16A6C', '#F4B195', '#F7D5C6', '#fff', '#DBE3EE', '#CDE3EE', '#A3CEE3', '#6AA9CF', '#3385BB'
                ]
               }
const censusCatDict_v2 = {
            "white_diversity_exp":[[0, '#f7fcf5'],
                                [0.033, '#deeed6'],
                                [0.088, '#b5daa4'],
                                [.133, '#82c66f'],
                                [0.17, '#58b347'],
                                [0.204, '#2f8741'],
                                [.25, '#21441f']],
            "black_diversity_exp": [[0, '#f7fbff'],
                                [0.014, '#d6edfb'],
                                [0.043, '#98c5e0'],
                                [.079, '#7ab5e2'],
                                [0.122, '#449bcc'],
                                [0.17, '#2173b2'],
                                [.25, '#1d3666']],
            "asian_diversity_exp":  [[0, '#FFF7EE'],
                                [0.01, '#FCD2C1'],
                                [0.032, '#E0A586'],
                                [.062, '#C58258'],
                                [0.104, '#A7592F'],
                                [0.162, '#89381D'],
                                [.25, '#5C1C0C']],
            "hispanic_diversity_exp": [[0, '#FFF7F2'],
                                [0.018, '#FFF7F2'],
                                [0.055, '#FCD3C2'],
                                [.095, '#FB9D85'],
                                [0.14, '#F36558'],
                                [0.188, '#CB3741'],
                                [.25, '#7C2936']],
            "other_diversity_exp": [[0, '#F3F0F8'],
                                [0.012, '#F3F0F8'],
                                [0.031, '#E0C8E3'],
                                [.048, '#DF93C9'],
                                [0.077, '#E15EA7'],
                                [0.135, '#D33383'],
                                [.25, '#A52461']],
             "total_diversity_exp":  [[0, '#d53e4f'],
                                [0.071, '#f46d43'],
                                [0.19, '#fdae61'],
                                [.282, '#fee08b'],
                                [0.369, '#ffffbf'],
                                [0.449, '#e6f598'],
                                [.524, '#abdda4'],
                                [0.603, '#66c2a5'],
                                [0.8, '#3288bd']],

            "total_diversity_resi":  [[0, '#440154'],
                                [0.071, '#440154'],
                                [0.19, '#46327f'],
                                [.282, '#365c8d'],
                                [0.369, '#277f8e'],
                                [0.449, '#1fa288'],
                                [.524, '#4ac26d'],
                                [0.603, '#9ed93a'],
                                [0.8, '#fde725']],
            "diff":[[-0.182, '#CF2245'],
                                [-0.088, '#E16A6C'],
                                [-0.027, '#F4B195'],
                                [0, '#F7D5C6'],
                                [0, '#fff'],
                                [0.01, '#DBE3EE'],
                                [0.135, '#CDE3EE'],
                                [.202, '#A3CEE3'],
                                [.314, '#6AA9CF'],
                                [.714, '#3385BB']]
               }


const choroplethColors={'white_diversity_exp':{
                            property:'white_diversity_exp',
                            stops: [[0, '#f7fcf5'],
                                [0.033, '#deeed6'],
                                [0.088, '#b5daa4'],
                                [.133, '#82c66f'],
                                [0.17, '#58b347'],
                                [0.204, '#2f8741'],
                                [.25, '#21441f']],
                            default: 'gray'
                        },
                        'black_diversity_exp':{
                            property:'black_diversity_exp',
                            stops: [[0, '#f7fbff'],
                                [0.014, '#d6edfb'],
                                [0.043, '#98c5e0'],
                                [.079, '#7ab5e2'],
                                [0.122, '#449bcc'],
                                [0.17, '#2173b2'],
                                [.25, '#1d3666']],
                             default: 'gray'
                        }, 
                        'asian_diversity_exp':{
                            property:'asian_diversity_exp',
                            stops: [[0, '#FFF7EE'],
                                [0.01, '#FFF7EE'],
                                [0.032, '#FDDFC1'],
                                [.062, '#FCB77E'],
                                [0.104, '#F68A48'],
                                [0.162, '#D5602E'],
                                [.25, '#91492F']],
                            default: 'gray'
                        },
                         'hispanic_diversity_exp':{
                            property:'hispanic_diversity_exp',
                            stops: [[0, '#FFF7F2'],
                                [0.018, '#FFF7F2'],
                                [0.055, '#FCD3C2'],
                                [.095, '#FB9D85'],
                                [0.14, '#F36558'],
                                [0.188, '#CB3741'],
                                [.25, '#7C2936']],
                            default: 'gray'
                         },
                         'other_diversity_exp':{
                            property:'other_diversity_exp',
                            stops: [[0, '#F3F0F8'],
                                [0.012, '#F3F0F8'],
                                [0.031, '#E0C8E3'],
                                [.048, '#DF93C9'],
                                [0.077, '#E15EA7'],
                                [0.135, '#D33383'],
                                [.25, '#A52461']],
                            default: 'gray'
                         },
                         'total_diversity_exp':{
                            property:'total_diversity_exp',
                            stops: [[0, '#d53e4f'],
                                [0.071, '#f46d43'],
                                [0.19, '#fdae61'],
                                [.282, '#fee08b'],
                                [0.369, '#ffffbf'],
                                [0.449, '#e6f598'],
                                [.524, '#abdda4'],
                                [0.603, '#66c2a5'],
                                [0.8, '#3288bd']],
                            default: 'gray'
                         }, 
                         'total_diversity_resi':{
                            property:'total_diversity_resi',
                             stops: [[0, '#440154'],
                                [0.071, '#440154'],
                                [0.19, '#46327f'],
                                [.282, '#365c8d'],
                                [0.369, '#277f8e'],
                                [0.449, '#1fa288'],
                                [.524, '#4ac26d'],
                                [0.603, '#9ed93a'],
                                [0.8, '#fde725']],
                             default: 'gray'
                         },
                         'diff':{
                            property:'diff',
                            stops: [[-0.182, '#CF2245'],
                                [-0.088, '#E16A6C'],
                                [-0.027, '#F4B195'],
                                [0, '#F7D5C6'],
                                [0, '#fff'],
                                [0.01, '#DBE3EE'],
                                [0.135, '#CDE3EE'],
                                [.202, '#A3CEE3'],
                                [.314, '#6AA9CF'],
                                [.714, '#3385BB']],
                            default: 'gray'
                         }
                };


const censusList1 = ['white_diversity_exp',
       'black_diversity_exp', 'asian_diversity_exp', 'hispanic_diversity_exp',
       'other_diversity_exp', 'total_diversity_exp','total_diversity_resi','diff'];




$('.introButton').on('click',function(){
    $('.dimmer').removeClass('active');
    $('.blurring.dimmable>:not(.dimmer)').css('filter','none');
    
});


let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles",protocol.tile);

let PMTILES_URL_tract = "https://dewsfcxuf47u5.cloudfront.net/segregation_all-10-13.pmtiles";
let PMTILES_URL_county = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties-2-11.pmtiles";

const p_tract = new pmtiles.PMTiles(PMTILES_URL_tract)
const p_county = new pmtiles.PMTiles(PMTILES_URL_county)

protocol.add(p_tract);
protocol.add(p_county);


const baseWidth = .5
const baseZoom = 4

///////////////////////////////////
////////// FUNCTIONS //////////////        
///////////////////////////////////

function updateLegend(category){
    // lng1=bbox[0][0]
    // lat1=bbox[0][1]
    // lng2=bbox[1][0]
    // lat2=bbox[1][1]

    $('.censusLegend').empty();
    $('.censusLegend').append($(`<h5 class="header smallHeader ">${catDict[category].replace(/\b\w/g, l => l.toUpperCase())}</h5><div class="legendBar"</div>`));
        // console.log(censusCatDict_v2[category]);
        // console.log(category);
        var maxRange = (category.includes("total")) ? 0.8:0.25;


        var x = d3.scaleLinear().range([0, maxRange]);


        const barWidth = parseInt(280/censusCatDict_v2[category].length);

        const svg = d3.select(".legendBar").append("svg")
                .attr("width", 300)
                .attr("height",40)
        const g = svg.append("g")
                .attr("transform", "translate(15,0)");
        
        // /Formatter
        var formattedNum =d3.format(".2f")

        /// Create an array of legend values
        var legendValues= []
        for (i in censusCatDict_v2[category]){
            legendValues[i]= [formattedNum(censusCatDict_v2[category][i][0]),censusCatDict_v2[category][i][1]]
        };

        // legendValues.unshift(0);

        // for (i=0; i<censusCatDict[category].length+1;i++){
        //     legendValues[i] = formatNum(legendValues[i]);
        // }

        /// Draw the legend
        g.selectAll("rect")
            .data(censusCatDict_v2[category].map(function(d,i){return [i,d,legendValues[i]]}))
            .enter().append("rect")
                .attr("height", 20)
                .attr("x", function(d){ return (d[0])*barWidth})
                .attr("width", barWidth)
                .attr("fill",function(d){return d[1][1]})
        g.selectAll("tick")
            .data(legendValues.map(function(d,i){return [i,d]}))
            .enter().append("text")
                .attr("class", "caption")
                .attr("x",function(d){return (d[0])*barWidth})
                .attr("y", 30)
                .attr("fill", "#000")
                .attr("font-size", "10px")
                .attr("text-anchor", "middle")
                .attr("font-family",'Source Sans Pro')
                .text(function(d){return d[1][0]});


}

function createPopUp(popUp,layer,map,hoveredStateId){
    var layerPopUpInfo = {
         'counties':{
            'sourceLayer':'segregation_all_countiesfgb',
            'source':'seg_2_11'
        },
        'tracts':{
            'sourceLayer':'segregation_allfgb',
            'source':'seg_10_13'
            }
    }
    
    ///// Change the opacity of the highlighted HOLC zone 
    map.on('mousemove',layer, e => {
        map.getCanvas().style.cursor = 'pointer';
        // e.stopPropagation();
        metric = $("#censusDropdown1 input").val();
        var div_score_exp  = e.features[0]['properties'][metric];
        
        // Get the text
        popUpStr = ` <div class='popup'>
          <h4>${catDict[metric]}: ${d3.format(",.2%")(div_score_exp)}</h4></div>`

        popUp.setHTML(popUpStr);
        popUp.setLngLat([e.lngLat.lng, e.lngLat.lat+.003]);
        popUp.addTo(map);
        // if (!popUp.isOpen()) {
        //   popUp.addTo(map);
        // }
        // else {
        // popUp.remove();
        // }


        // Change the opacity
        if (e.features.length > 0) {               

                if (hoveredStateId) {
                    map.removeFeatureState(
                        {source: layerPopUpInfo[layer]['source'], 
                        sourceLayer:layerPopUpInfo[layer]['sourceLayer'],
                        id: hoveredStateId}
                    );
                }

                hoveredStateId = e.features[0].id;
                map.setFeatureState(
                    {source: layerPopUpInfo[layer]['source'], 
                    sourceLayer:layerPopUpInfo[layer]['sourceLayer'],
                    id: hoveredStateId},
                    {hover: true}
                );
            }
            
    });
    ///// Change the opacity back
    map.on('mouseleave',layer, event => {
        
       
        if (hoveredStateId) {
                map.setFeatureState(
                    {source: layerPopUpInfo[layer]['source'], 
                        sourceLayer:layerPopUpInfo[layer]['sourceLayer'],
                    id: hoveredStateId},
                    {hover: false}
                );
            };
        hoveredStateId = null;
        map.getCanvas().style.cursor = '';
        popUp.remove();

      
    });

 
}



//       });
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////




$(document).ready(function() {
/////////////////////////////
///////// Page functions ////
/////////////////////////////


// $('.homeIcon').on('click',function(){
//     $('.dimmer').addClass('active');
// })

// $('.infoIcon').on('click',function(){
//     $('#infoMessage').transition('fade in');
// })

// $('.dataIcon').on('click',function(){
//     $('#dataMessage').transition('fade in');
// })
// $('.message .close')
//   .on('click', function() {
//     $(this)
//       .closest('.message')
//       .transition('fade')
//     ;
//   });


/////////////////////////////////
/// Initialize Census dropdown///
////////////////////////////////
var $censusDropdown = $("#censusDropdown");
$('#censusDropdown1').dropdown();

$censusDropdown.empty();
$.each(censusList1, function(k,v) {
    $censusDropdown.append($('<div class="item" data-value="'+v+'">'+catDict[v]+'</div>'))
})

updateLegend('total_diversity_exp');

/////////////////////////////////
///////////// Add map ///////////
/////////////////////////////////

p_tract.getHeader().then(h => {
    var map = new maplibregl.Map({
        container: 'map',
        zoom: baseZoom,
        // center: [h.centerLon, h.centerLat],
        minZoom:3,
        // zoom: 11,
        center: [-87.623177, 41.881832],
        style: 'https://api.maptiler.com/maps/dataviz/style.json?key=is6mQIv8IXor3VbmKwq8',
        // style:"https://tiles.stadiamaps.com/styles/alidade_smooth.json"
       
    });

    let hoveredStateId = null;


    map.on('load',function(){
        var layer = $("#censusDropdown1 input").val();


        $("#undim").removeClass("loading disabled");


        map.addSource('seg_10_13',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract,
        });

        map.addSource('seg_2_11',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county,
        });

        map.addImage('hatch-pattern', '/pattern-test.png', {
            //'width': 10,  // Adjust the width as needed
            //'height': 10  // Adjust the height as needed
        });


        map.addLayer({
                "id":"tracts",
                "source": "seg_10_13",
                "source-layer":"segregation_allfgb",
                "type": "fill",
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops: [[0, '#d53e4f'],
                                [0.071, '#f46d43'],
                                [0.19, '#fdae61'],
                                [.282, '#fee08b'],
                                [0.369, '#ffffbf'],
                                [0.449, '#e6f598'],
                                [.524, '#abdda4'],
                                [0.603, '#66c2a5'],
                                [0.8, '#3288bd']],
                    default: 'gray',
                         },

                    //'fill-outline-color': 'black',
                    //'fill-outline-width': 2,
                    'fill-opacity': [
                    'interpolate',

                    ['linear'],
                    ['zoom'],
                    // When zoom is 10, buildings will be 100% transparent.
                    12,
                                        ['case',
                    ['boolean', ['feature-state', 'hover'], false],
                    0.9,
                    0.7],
                    // When zoom is 18 or higher, buildings will be 100% opaque.
                    20,
                    ['case',
                    ['boolean', ['feature-state', 'hover'], false],
                    0.9,
                    0.1]
                    

                ]
                    
                }
            });
        map.addLayer({
                    "id":"counties",
                    "source": "seg_2_11",
                    "source-layer":"segregation_all_countiesfgb",
                    "type": "fill",
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops: [[0, '#d53e4f'],
                                [0.071, '#f46d43'],
                                [0.19, '#fdae61'],
                                [.282, '#fee08b'],
                                [0.369, '#ffffbf'],
                                [0.449, '#e6f598'],
                                [.524, '#abdda4'],
                                [0.603, '#66c2a5'],
                                [0.8, '#3288bd']],
                        default: 'gray',
                        },



                        'fill-opacity': [
                              'case',
                            ['boolean', ['feature-state', 'hover'], false],
                            0.9,
                            0.7,

                        ]
                        
                    },

                    /*"paint": {
                        "fill-pattern": {
                            property:'total_diversity_exp',
                            type: 'categorical',
                            stops: [
                            // Define the patterns for different conditions
                            ['white', 'hatch-pattern'], 
                        ],
                        },
                        },*/
        });

         map.addLayer({
                    "id":"missing_data_outline",
                    "source": "seg_2_11",
                    "source-layer":"segregation_all_countiesfgb",
                    "type": "line",
                    "paint": {
                        'line-color': 'red',
                        'line-width': {
                            property:'total_diversity_exp',
                            stops: [[0, 0],
                                [0.071, 0],
                                [0.19, 0],
                                [.282, 0],
                                [0.369, 0],
                                [0.449, 0],
                                [.524, 0],
                                [0.603, 0],
                                [0.8, 0]],
                                default: 1,}
                                },
        });
                  map.addLayer({
                    "id":"missing_data_tract_outline",
                    "source": "seg_10_13",
                    "source-layer":"segregation_allfgb",
                    "type": "line",
                    "paint": {
                        'line-color': 'red',
                        'line-width': {
                            property:'total_diversity_exp',
                            stops: [[0, 0],
                                [0.071, 0],
                                [0.19, 0],
                                [.282, 0],
                                [0.369, 0],
                                [0.449, 0],
                                [.524, 0],
                                [0.603, 0],
                                [0.8, 0]],
                                default: 1,}
                                },
        });


         map.addLayer({
                    "id":"tracts_outline",
                    "source": "seg_10_13",
                    "source-layer":"segregation_allfgb",
                    "type": "line",
                    "paint": {
                        'line-color': 'lightgray',
                    'line-width': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        // When zoom is 10, set the line width to 0.5 units.
                        12, 0.5,
                        // When zoom is 20, set the line width to 3 units.
                        30, 20,
                    ]
                                },

        });

    
        // Change paint on metric change
        
        $('#censusDropdown1').on('change',function(){
                // metric = getFeatures()
                // console.log(metric);
            metric = $("#censusDropdown1 input").val();
            console.log(choroplethColors[metric]);

            updateLegend(metric);

            map.setPaintProperty(                
            'counties', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tracts', 'fill-color', choroplethColors[metric]
            );

            })


        const popup = new maplibregl.Popup({
          closeButton: false,
          closeOnClick: false
        });


        const delay = 70;
        let clickedFeatureId = null;

        createPopUp(popup,'counties',map,hoveredStateId);
        createPopUp(popup,'tracts',map,hoveredStateId);





    })

    var nav = new maplibregl.NavigationControl();
    map.addControl(nav, 'top-right');

    map.addControl(new JawgPlaces.MapLibre({
          container: '#my-container',
          input: '#my-input',
          resultContainer: '#my-result-container',
          searchOnTyping: true,
        }))

    });

});

        // JavaScript code to toggle the side panel
        let isSidePanelOpen = false;

        function toggleNav() {
            const sidepanel = document.getElementById("mySidepanel");
            
            if (isSidePanelOpen) {
                sidepanel.style.width = "0";
            } else {
                sidepanel.style.width = "340px";
            }
            
            isSidePanelOpen = !isSidePanelOpen;
        };


/////////////////////////////////
//////// initial parameters /////
/////////////////////////////////

/// Definite the initial category parameters
var city='Cleveland';



/////////////////////////////////
// initialize city dropdown /////
/////////////////////////////////
/*var $cityDropdown = $("#cityDropdown");
$('#cityDropdown1').dropdown();
var cityList = cities.sort();

$cityDropdown.empty();
$.each(cityList, function() {
$cityDropdown.append($('<div class="item" data-value="'+this+'">'+this+'</div>'))});*/

/////////////////////////////////
///////////// Boxplot ///////////
/////////////////////////////////
function updateBoxplot(category) {
  // Extract data from the selected category in the legend
  var legendData = censusCatDict_v2[category].map(function (d) {
    return d[0];
  });

  // Update the X scale domain based on the legend data (swap x and y)
  x.domain([d3.min(legendData), d3.max(legendData)]);

  // Select the boxplot elements and update their positions and sizes
  svg.select("line")
    .attr("x1", x(d3.min(legendData)))
    .attr("x2", x(d3.max(legendData)));

  svg.select("rect")
    .attr("x", x(d3.quantile(legendData, .25)))
    .attr("width", x(d3.quantile(legendData, .75)) - x(d3.quantile(legendData, .25)));

  svg.selectAll("line.toto")
    .data([d3.min(legendData), d3.median(legendData), d3.max(legendData)])
    .attr("x1", function (d) { return x(d); })
    .attr("x2", function (d) { return x(d); });
}

$('#censusDropdown1').on('change', function () {
  var selectedCategory = $("#censusDropdown1 input").val();
  updateBoxplot(selectedCategory);
});

// Set the dimensions and margins of the graph
var margin = { top: 10, right: 10, bottom: 30, left: 10 },
  width = 310 - margin.left - margin.right,
  height = 90 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Create dummy data
var data = censusCatDict_v2['white_diversity_exp'].map(function (d) {
  return d[0];
});

// Compute summary statistics used for the box:
var data_sorted = data.sort(d3.ascending)
var q1 = d3.quantile(data_sorted, .25)
var median = d3.quantile(data_sorted, .5)
var q3 = d3.quantile(data_sorted, .75)
var interQuantileRange = q3 - q1
var min = q1 - 1.5 * interQuantileRange
var max = q1 + 1.5 * interQuantileRange

// Show the X scale (swap x and y)
var x = d3.scaleLinear()
  .domain([d3.min(data), d3.max(data)]) // Adjust the domain based on your legend data
  .range([0, width]);
svg.call(d3.axisBottom(x)); // Update to use axisBottom

var center = 50; // Adjust as needed
var height = 20; // Adjust as needed

// Show the main horizontal line (swap x and y)
svg.append("line")
  .attr("x1", x(d3.min(data)))
  .attr("x2", x(d3.max(data)))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "black");

// Show the box (swap x and y)
svg.append("rect")
  .attr("x", x(d3.quantile(data, .25)))
  .attr("y", center - height / 2) // Swap x and y
  .attr("width", x(d3.quantile(data, .75)) - x(d3.quantile(data, .25)))
  .attr("height", height) // Swap width and height
  .attr("stroke", "black")
  .style("fill", "#A5DEE4");

// Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "black");



/////////////////////////////////
///////////// Histogram ///////////
/////////////////////////////////


// Set the dimensions and margins of the graph for the histogram
var histogramMargin = {top: 10, right: 40, bottom: 30, left: 40},
    histogramWidth = 340 - histogramMargin.left - histogramMargin.right,
    histogramHeight = 200 - histogramMargin.top - histogramMargin.bottom;

// Append the SVG object to the body of the page for the histogram
var histogramSvg = d3.select("#my_histogram")
  .append("svg")
    .attr("width", histogramWidth + histogramMargin.left + histogramMargin.right)
    .attr("height", histogramHeight + histogramMargin.top + histogramMargin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + histogramMargin.left + "," + histogramMargin.top + ")");


// get the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv", function(data) {

  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([0, 1000])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
      .range([0, histogramWidth]);
  histogramSvg.append("g")
      .attr("transform", "translate(0," + histogramHeight + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { return d.price; })   // I need to give the vector of value
      .domain(x.domain())  // then the domain of the graphic
      .thresholds(x.ticks(70)); // then the numbers of bins

  // And apply this function to data to get the bins
  var bins = histogram(data);

  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([histogramHeight, 0]);
      y.domain([0, d3.max(bins, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously
  histogramSvg.append("g")
      .call(d3.axisLeft(y));

  // append the bar rectangles to the svg element
  histogramSvg.selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return histogramHeight - y(d.length); })
        .style("fill", "#A5DEE4")

});