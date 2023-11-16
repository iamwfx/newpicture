/////////////////////////////////
/////// Accordian ////////
/////////////////////////////////

$('.ui.accordion')
  .accordion()
;


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
                '#440154', '#46327f', '#365c8d', '#277f8e', '#1fa288', '#4ac26d', '#9ed93a', '#fde725'
                  // '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'
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
             "total_diversity_exp":  [[0, '#440154'],
                                [0.071, '#440154'],
                                [0.19, '#46327f'],
                                [.282, '#365c8d'],
                                [0.369, '#277f8e'],
                                [0.449, '#1fa288'],
                                [.524, '#4ac26d'],
                                [0.603, '#9ed93a'],
                                [0.8, '#fde725']],
             // [[0, '#d53e4f'],
             //                    [0.071, '#f46d43'],
             //                    [0.19, '#fdae61'],
             //                    [.282, '#fee08b'],
             //                    [0.369, '#ffffbf'],
             //                    [0.449, '#e6f598'],
             //                    [.524, '#abdda4'],
             //                    [0.603, '#66c2a5'],
             //                    [0.8, '#3288bd']],

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
                            stops: [[0, '#440154'],
                                [0.071, '#440154'],
                                [0.19, '#46327f'],
                                [.282, '#365c8d'],
                                [0.369, '#277f8e'],
                                [0.449, '#1fa288'],
                                [.524, '#4ac26d'],
                                [0.603, '#9ed93a'],
                                [0.8, '#fde725']],
                            // stops: [[0, '#d53e4f'],
                            //     [0.071, '#f46d43'],
                            //     [0.19, '#fdae61'],
                            //     [.282, '#fee08b'],
                            //     [0.369, '#ffffbf'],
                            //     [0.449, '#e6f598'],
                            //     [.524, '#abdda4'],
                            //     [0.603, '#66c2a5'],
                            //     [0.8, '#3288bd']],
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

const cities=['Santa Maria-Santa Barbara, CA','Red Bluff, CA','Salinas, CA','Sacramento-Roseville-Folsom, CA',
'Los Angeles-Long Beach-Anaheim, CA','San Jose-Sunnyvale-Santa Clara, CA','Santa Rosa-Petaluma, CA','Bakersfield, CA',
'Madera, CA','Ukiah, CA','Visalia, CA','Yuba City, CA','San Diego-Chula Vista-Carlsbad, CA','Modesto, CA','Redding, CA',
'Fresno, CA','San Francisco-Oakland-Berkeley, CA','Susanville, CA','Crescent City, CA','San Luis Obispo-Paso Robles, CA',
'Napa, CA','Stockton, CA','Truckee-Grass Valley, CA','Riverside-San Bernardino-Ontario, CA','Oxnard-Thousand Oaks-Ventura, CA',
'Sonora, CA','Clearlake, CA','Chico, CA','Santa Cruz-Watsonville, CA','Merced, CA','Vallejo, CA','Hanford-Corcoran, CA',
'Eureka-Arcata, CA','Urban Honolulu, HI','Hilo, HI','Kapaa, HI','Kahului-Wailuku-Lahaina, HI','Reno, NV','Fernley, NV',
'Gardnerville Ranchos, NV','Fallon, NV','Carson City, NV','Astoria, OR','Corvallis, OR','Hood River, OR',
'Portland-Vancouver-Hillsboro, OR-WA','Medford, OR','Eugene-Springfield, OR','Salem, OR','Prineville, OR',
'Newport, OR','Brookings, OR','Coos Bay, OR','The Dalles, OR','Roseburg, OR','Albany-Lebanon, OR','Klamath Falls, OR',
'Bend, OR','Grants Pass, OR','Seattle-Tacoma-Bellevue, WA','Bremerton-Silverdale-Port Orchard, WA','Shelton, WA',
'Olympia-Lacey-Tumwater, WA','Centralia, WA','Longview, WA','Oak Harbor, WA','Aberdeen, WA','Jasper, AL','Birmingham-Hoover, AL',
'Florence-Muscle Shoals, AL','Huntsville, AL','Decatur, AL','Daphne-Fairhope-Foley, AL','Selma, AL','Mobile, AL','Tuscaloosa, AL',
'Atmore, AL','Cullman, AL','Tucson, AZ','Show Low, AZ','Yuma, AZ','Payson, AZ','Prescott Valley-Prescott, AZ',
'Phoenix-Mesa-Chandler, AZ','Nogales, AZ','Safford, AZ','Sierra Vista-Douglas, AZ','Little Rock-North Little Rock-Conway, AR',
'Fort Smith, AR-OK','Helena-West Helena, AR','Jonesboro, AR','Camden, AR','Magnolia, AR','Texarkana, TX-AR','Pine Bluff, AR',
'Forrest City, AR','Memphis, TN-MS-AR','El Dorado, AR','Hope, AR','Hot Springs, AR','Russellville, AR','Searcy, AR',
'Arkadelphia, AR','Malvern, AR','El Centro, CA','Pensacola-Ferry Pass-Brent, FL','Alexandria, LA','New Orleans-Metairie, LA',
'Monroe, LA','Baton Rouge, LA','Natchitoches, LA','Lafayette, LA','Bogalusa, LA','Minden, LA','Houma-Thibodaux, LA',
'Morgan City, LA','Lake Charles, LA','DeRidder, LA','Natchez, MS-LA','Fort Polk South, LA','Shreveport-Bossier City, LA',
'Jennings, LA','Hammond, LA','Opelousas, LA','Ruston, LA','Hattiesburg, MS','West Point, MS','Greenville, MS','Jackson, MS',
'Laurel, MS','Grenada, MS','Cleveland, MS','Starkville, MS','Indianola, MS','Vicksburg, MS','Gulfport-Biloxi, MS',
'McComb, MS','Tupelo, MS','Meridian, MS','Corinth, MS','Clarksdale, MS','Greenwood, MS','Oxford, MS','Columbus, MS',
'Picayune, MS','Brookhaven, MS','Alamogordo, NM','Silver City, NM','Hobbs, NM','Albuquerque, NM','Carlsbad-Artesia, NM',
'Clovis, NM','Grants, NM','Portales, NM','Roswell, NM','Las Cruces, NM','Santa Fe, NM','Ruidoso, NM','Deming, NM',
'Oklahoma City, OK','Ada, OK','Elk City, OK','Ardmore, OK','Duncan, OK','Durant, OK','Altus, OK','Muskogee, OK','Lawton, OK',
'Weatherford, OK','McAlester, OK','Tulsa, OK','Shawnee, OK','Jackson, TN','Lawrenceburg, TN','Brownsville, TN',
'Dallas-Fort Worth-Arlington, TX','Big Spring, TX','Houston-The Woodlands-Sugar Land, TX','San Angelo, TX','Alice, TX',
'Rio Grande City-Roma, TX','Austin-Round Rock-Georgetown, TX','Paris, TX','Abilene, TX','Tyler, TX',
'San Antonio-New Braunfels, TX','Killeen-Temple, TX','Amarillo, TX','Raymondville, TX','Nacogdoches, TX',
'Laredo, TX','Snyder, TX','Kingsville, TX','Hereford, TX','Brownwood, TX','Del Rio, TX','Huntsville, TX',
'Zapata, TX','Mineral Wells, TX','Corpus Christi, TX','Lubbock, TX','Wichita Falls, TX','Mount Pleasant, TX',
'College Station-Bryan, TX','Beaumont-Port Arthur, TX','Pampa, TX','Fredericksburg, TX','Uvalde, TX','Waco, TX',
'Sherman-Denison, TX','Pecos, TX','Victoria, TX','Bay City, TX','Plainview, TX','Lamesa, TX','El Campo, TX',
'Longview, TX','McAllen-Edinburg-Mission, TX','Midland, TX','Stephenville, TX','Sulphur Springs, TX','Corsicana, TX',
'El Paso, TX','Brenham, TX','Eagle Pass, TX','Brownsville-Harlingen, TX','Odessa, TX','Athens, TX','Lufkin, TX',
'Palestine, TX','Andrews, TX','Rockport, TX','Beeville, TX','Jacksonville, TX','Bonham, TX','Pearsall, TX',
'Levelland, TX','Kerrville, TX','Gainesville, TX','Vernon, TX','Granbury, TX','Sweetwater, TX','Port Lavaca, TX',
'Eufaula, AL-GA','Dothan, AL','Montgomery, AL','Enterprise, AL','Albertville, AL','Talladega-Sylacauga, AL',
'Gadsden, AL','Alexander City, AL','Ozark, AL','Anniston-Oxford, AL','Scottsboro, AL','Fort Payne, AL','LaGrange, GA-AL',
'Troy, AL','Auburn-Opelika, AL','Columbus, GA-AL','Palm Bay-Melbourne-Titusville, FL','Miami-Fort Lauderdale-Pompano Beach, FL',
'Homosassa Springs, FL','Key West, FL','North Port-Sarasota-Bradenton, FL','Jacksonville, FL','Cape Coral-Fort Myers, FL',
'Okeechobee, FL','Orlando-Kissimmee-Sanford, FL','Tallahassee, FL','Tampa-St. Petersburg-Clearwater, FL','Lake City, FL',
'Ocala, FL','Port St. Lucie, FL','Sebring-Avon Park, FL','Clewiston, FL','Gainesville, FL','Panama City, FL',
'Deltona-Daytona Beach-Ormond Beach, FL','Crestview-Fort Walton Beach-Destin, FL','Arcadia, FL','Punta Gorda, FL',
'Lakeland-Winter Haven, FL','Sebastian-Vero Beach, FL','Naples-Marco Island, FL','Wauchula, FL','Palatka, FL',
'The Villages, FL','Chattanooga, TN-GA','Atlanta-Sandy Springs-Alpharetta, GA','Athens-Clarke County, GA',
'Valdosta, GA','Savannah, GA','Cedartown, GA','St. Marys, GA','Brunswick, GA','Americus, GA','Macon-Bibb County, GA',
'Waycross, GA','Dalton, GA','Augusta-Richmond County, GA-SC','Milledgeville, GA','Warner Robins, GA','Vidalia, GA',
'Hinesville, GA','Dublin, GA','Albany, GA','Douglas, GA','Summerville, GA','Gainesville, GA','Thomasville, GA',
'Cordele, GA','Jesup, GA','Bainbridge, GA','Statesboro, GA','Thomaston, GA','Tifton, GA','Toccoa, GA','Moultrie, GA',
'Rome, GA','Fitzgerald, GA','Calhoun, GA','Jefferson, GA','Cornelia, GA','Myrtle Beach-Conway-North Myrtle Beach, SC-NC',
'Wilmington, NC','Columbia, SC','Greenwood, SC','Charleston-North Charleston, SC','Greenville-Anderson, SC',
'Union, SC','Spartanburg, SC','Seneca, SC','Orangeburg, SC','Sumter, SC','Hilton Head Island-Bluffton, SC',
'Bennettsville, SC','Florence, SC','Georgetown, SC','Charlotte-Concord-Gastonia, NC-SC','Newberry, SC',
'Tullahoma-Manchester, TN','Cleveland, TN','Arecibo, PR','San Juan-Bayamón-Caguas, PR','Yauco, PR','Ponce, PR',
'Coamo, PR','Mayagüez, PR','Guayama, PR','Aguadilla-Isabela, PR','San Germán, PR','Santa Isabel, PR','Coco, PR',
'Jayuya, PR','Flagstaff, AZ','Lake Havasu City-Kingman, AZ','Fayetteville-Springdale-Rogers, AR','Harrison, AR',
'Paragould, AR','Mountain Home, AR','Blytheville, AR','Batesville, AR','Edwards, CO','Cañon City, CO',
'Denver-Aurora-Lakewood, CO','Fort Collins, CO','Glenwood Springs, CO','Durango, CO','Breckenridge, CO',
'Fort Morgan, CO','Pueblo, CO','Grand Junction, CO','Boulder, CO','Craig, CO','Greeley, CO','Steamboat Springs, CO',
'Sterling, CO','Colorado Springs, CO','Montrose, CO','Hailey, ID','Moscow, ID','Boise City, ID','Sandpoint, ID',
'Twin Falls, ID','Idaho Falls, ID','Pocatello, ID','Coeur d’Alene, ID','Blackfoot, ID','Springfield, IL','Decatur, IL',
'Macomb, IL','Rockford, IL','Charleston-Mattoon, IL','Chicago-Naperville-Elgin, IL-IN-WI','Peoria, IL','Ottawa, IL',
'Sterling, IL','Ontario, OR-ID','Lewiston, ID-WA','Kankakee, IL','Mountain Home, ID','Burley, ID','Logan, UT-ID',
'Rexburg, ID','Effingham, IL','St. Louis, MO-IL','Centralia, IL','Paducah, KY-IL','Champaign-Urbana, IL',
'Davenport-Moline-Rock Island, IA-IL','Jackson, WY-ID','Carbondale-Marion, IL','Fort Madison-Keokuk, IA-IL-MO',
'Jacksonville, IL','Pontiac, IL','Galesburg, IL','Freeport, IL','Mount Vernon, IL','Taylorville, IL','Lincoln, IL',
'Cape Girardeau, MO-IL','Danville, IL','Bloomington, IL','Dixon, IL','Bloomington, IN','Indianapolis-Carmel-Anderson, IN',
'Vincennes, IN','Elkhart-Goshen, IN','Kokomo, IN','Michigan City-La Porte, IN','Plymouth, IN','Rochelle, IL',
'South Bend-Mishawaka, IN-MI','Washington, IN','Evansville, IN-KY','Jasper, IN','Lafayette-West Lafayette, IN',
'Peru, IN','Bedford, IN','Terre Haute, IN','Sioux City, IA-NE-SD','Marshalltown, IA','Muscatine, IA','Storm Lake, IA',
'Pella, IA','Iowa City, IA','Waterloo-Cedar Falls, IA','Cedar Rapids, IA','Oskaloosa, IA','Fairfield, IA','Quincy, IL-MO',
'Ames, IA','Spirit Lake, IA','Burlington, IA-IL','Des Moines-West Des Moines, IA','Dubuque, IA','Ottumwa, IA',
'Carroll, IA','Omaha-Council Bluffs, NE-IA','Crawfordsville, IN','Ottawa, KS','Coffeyville, KS','Kansas City, MO-KS',
'Garden City, KS','Hays, KS','Hutchinson, KS','Logansport, IN','Winfield, KS','Manhattan, KS','Topeka, KS','McPherson, KS',
'Great Bend, KS','Wichita, KS','Lawrence, KS','Frankfort, IN','Bowling Green, KY','Mayfield, KY','Central City, KY',
'Owensboro, KY','Warsaw, IN','Clarksville, TN-KY','Clinton, IA','Grand Rapids-Kentwood, MI','Marquette, MI','Houghton, MI',
'Fort Dodge, IA','Marinette, WI-MI','Niles, MI','Cadillac, MI','Traverse City, MI','Muskegon, MI','Spencer, IA',
'Ludington, MI','Minneapolis-St. Paul-Bloomington, MN-WI','Brainerd, MN','Mason City, IA','Rochester, MN','Fairmont, MN',
'St. Cloud, MN','Mankato, MN','Duluth, MN-WI','Worthington, MN','Faribault-Northfield, MN','Willmar, MN','Austin, MN',
'St. Joseph, MO-KS','Dodge City, KS','Emporia, KS','Fergus Falls, MN','Bemidji, MN','Pittsburg, KS','Liberal, KS',
'Parsons, KS','Winona, MN','Red Wing, MN','Salina, KS','Atchison, KS','Farmington, MO','Kirksville, MO','Columbia, MO',
'West Plains, MO','Madisonville, KY','Murray, KY','Rolla, MO','Branson, MO','Poplar Bluff, MO','Jefferson City, MO',
'Sedalia, MO','Joplin, MO','Sikeston, MO','Springfield, MO','Moberly, MO','Missoula, MT','Great Falls, MT','Holland, MI',
'Billings, MT','Bozeman, MT','Helena, MT','Kalispell, MT','Iron Mountain, MI-WI','Escanaba, MI','Lexington, NE',
'Lincoln, NE','North Platte, NE','Fremont, NE','Scottsbluff, NE','Grand Rapids, MN','Hutchinson, MN','Hastings, NE',
'Grand Island, NE','Alexandria, MN','Columbus, NE','Kearney, NE','Las Vegas-Henderson-Paradise, NV','Big Rapids, MI',
'Grand Forks, ND-MN','Pahrump, NV','La Crosse-Onalaska, WI-MN','Owatonna, MN','New Ulm, MN','Elko, NV',
'Farmington, NM','Fargo, ND-MN','Taos, NM','Kalamazoo-Portage, MI','Las Vegas, NM','Española, NM','Gallup, NM',
'Bismarck, ND','Minot, ND','Wahpeton, ND-MN','Dickinson, ND','Jamestown, ND','Marshall, MN','Ponca City, OK',
'Miami, OK','Tahlequah, OK','Woodward, OK','Bartlesville, OK','Enid, OK','Albert Lea, MN','Hermiston-Pendleton, OR',
'La Grande, OR','Sioux Falls, SD','Brookings, SD','Vermillion, SD','Watertown, SD','Rapid City, SD','Huron, SD',
'Aberdeen, SD','Nashville-Davidson--Murfreesboro--Franklin, TN','Dyersburg, TN','Union City, TN','Martin, TN',
'Warrensburg, MO','Mexico, MO','Lewisburg, TN','Borger, TX','Price, UT','Salt Lake City, UT','Lebanon, MO',
'Fort Leonard Wood, MO','St. George, UT','Hannibal, MO','Kennett, MO','Marshall, MO','Heber, UT','Ogden-Clearfield, UT',
'Provo-Orem, UT','Yakima, WA','Wenatchee, WA','Ellensburg, WA','Kennewick-Richland, WA','Pullman, WA',
'Spokane-Spokane Valley, WA','Walla Walla, WA','Moses Lake, WA','Madison, WI','Green Bay, WI','Watertown-Fort Atkinson, WI',
'Maryville, MO','Appleton, WI','Butte-Silver Bow, MT','Wisconsin Rapids-Marshfield, WI','Milwaukee-Waukesha, WI',
'Eau Claire, WI','Racine, WI','Fond du Lac, WI','Oshkosh-Neenah, WI','Janesville-Beloit, WI','Norfolk, NE','Baraboo, WI',
'Stevens Point, WI','Sheboygan, WI','Manitowoc, WI','Wausau-Weston, WI','Whitewater, WI','Beaver Dam, WI','Beatrice, NE',
'Shawano, WI','Platteville, WI','Casper, WY','Cheyenne, WY','Gillette, WY','Rock Springs, WY','Riverton, WY','Los Alamos, NM',
'Williston, ND','Stillwater, OK','Guymon, OK','Winnemucca, NV','Mitchell, SD','Yankton, SD','Spearfish, SD','Pierre, SD',
'Paris, TN','Vernal, UT','Cedar City, UT','Dumas, TX','Othello, WA','Menomonie, WI','Laramie, WY','Sheridan, WY','Evanston, WY',
'Bridgeport-Stamford-Norwalk, CT','Norwich-New London, CT','Hartford-East Hartford-Middletown, CT','Worcester, MA-CT',
'Torrington, CT','New Haven-Milford, CT','Dover, DE','Philadelphia-Camden-Wilmington, PA-NJ-DE-MD','Salisbury, MD-DE',
'Washington-Arlington-Alexandria, DC-VA-MD-WV','Louisville/Jefferson County, KY-IN','Wabash, IN','Angola, IN',
'Cincinnati, OH-KY-IN','Auburn, IN','Connersville, IN','Bluffton, IN','Marion, IN','North Vernon, IN','Kendallville, IN',
'Richmond, IN','Huntington, IN','New Castle, IN','Madison, IN','Greensburg, IN','Fort Wayne, IN','Scottsburg, IN',
'Decatur, IN','Muncie, IN','Columbus, IN','Seymour, IN','Lexington-Fayette, KY','Campbellsville, KY','London, KY',
'Frankfort, KY','Middlesborough, KY','Danville, KY','Huntington-Ashland, WV-KY-OH','Elizabethtown-Fort Knox, KY',
'Mount Sterling, KY','Glasgow, KY','Richmond-Berea, KY','Bardstown, KY','Maysville, KY','Somerset, KY','Bangor, ME',
'Portland-South Portland, ME','Augusta-Waterville, ME','Lewiston-Auburn, ME','Baltimore-Columbia-Towson, MD',
'Cumberland, MD-WV','Easton, MD','Hagerstown-Martinsburg, MD-WV','California-Lexington Park, MD','Cambridge, MD',
'Providence-Warwick, RI-MA','Boston-Cambridge-Newton, MA-NH','Pittsfield, MA','Barnstable Town, MA','Springfield, MA',
'Vineyard Haven, MA','Midland, MI','Detroit-Warren-Dearborn, MI','Battle Creek, MI','Lansing-East Lansing, MI',
'Sault Ste. Marie, MI','Coldwater, MI','Sturgis, MI','Jackson, MI','Mount Pleasant, MI','Adrian, MI','Flint, MI',
'Monroe, MI','Alpena, MI','Bay City, MI','Alma, MI','Saginaw, MI','Hillsdale, MI','Ann Arbor, MI','Berlin, NH',
'Manchester-Nashua, NH','Keene, NH','Concord, NH','Laconia, NH','Lebanon, NH-VT','New York-Newark-Jersey City, NY-NJ-PA',
'Atlantic City-Hammonton, NJ','Allentown-Bethlehem-Easton, PA-NJ','Vineland-Bridgeton, NJ','Trenton-Princeton, NJ',
'Ocean City, NJ','Seneca Falls, NY','Buffalo-Cheektowaga, NY','Albany-Schenectady-Troy, NY','Binghamton, NY',
'Syracuse, NY','Jamestown-Dunkirk-Fredonia, NY','Glens Falls, NY','Kingston, NY','Gloversville, NY','Plattsburgh, NY',
'Rochester, NY','Malone, NY','Elmira, NY','Olean, NY','Utica-Rome, NY','Poughkeepsie-Newburgh-Middletown, NY',
'Watertown-Fort Drum, NY','Ithaca, NY','Hudson, NY','Ogdensburg-Massena, NY','Oneonta, NY','Cortland, NY',
'Amsterdam, NY','Batavia, NY','Auburn, NY','Corning, NY','Rockingham, NC','Raleigh-Cary, NC','Winston-Salem, NC',
'Morehead City, NC','Hickory-Lenoir-Morganton, NC','Fayetteville, NC','Durham-Chapel Hill, NC',
'Roanoke Rapids, NC','Elizabeth City, NC','Kinston, NC','Mount Airy, NC','Washington, NC','Lumberton, NC',
'Rocky Mount, NC','Greensboro-High Point, NC','Asheville, NC','Greenville, NC','Goldsboro, NC','Brevard, NC',
'Henderson, NC','Wilson, NC','Burlington, NC','Albemarle, NC','Virginia Beach-Norfolk-Newport News, VA-NC',
'Forest City, NC','Pinehurst-Southern Pines, NC','Boone, NC','Kill Devil Hills, NC','Cullowhee, NC','New Bern, NC',
'Sanford, NC','Laurinburg, NC','Shelby, NC','Jacksonville, NC','North Wilkesboro, NC','Marion, NC','Cleveland-Elyria, OH',
'Portsmouth, OH','Sidney, OH','Ashtabula, OH','Columbus, OH','Celina, OH','Fremont, OH','Wilmington, OH','Coshocton, OH',
'Springfield, OH','Washington Court House, OH','Lima, OH','Point Pleasant, WV-OH','Van Wert, OH','Mansfield, OH',
'Toledo, OH','Defiance, OH','Youngstown-Warren-Boardman, OH-PA','Wheeling, WV-OH','Canton-Massillon, OH',
'Dayton-Kettering, OH','Salem, OH','Norwalk, OH','Bellefontaine, OH','Bucyrus-Galion, OH','Sandusky, OH',
'Wooster, OH','Urbana, OH','New Philadelphia-Dover, OH','Tiffin, OH','Weirton-Steubenville, WV-OH','Chillicothe, OH',
'Marietta, OH','Athens, OH','Cambridge, OH','Zanesville, OH','Marion, OH','Akron, OH','Findlay, OH','Wapakoneta, OH',
'Jackson, OH','Ashland, OH','Mount Vernon, OH','Greenville, OH','Pittsburgh, PA','Johnstown, PA',
'Lock Haven, PA','Meadville, PA','Gettysburg, PA','Huntingdon, PA','DuBois, PA','New Castle, PA',
'Bloomsburg-Berwick, PA','East Stroudsburg, PA','York-Hanover, PA','Scranton--Wilkes-Barre, PA','Bradford, PA',
'Erie, PA','Harrisburg-Carlisle, PA','Reading, PA','St. Marys, PA','Oil City, PA','Pottsville, PA','Lewistown, PA',
'Williamsport, PA','Warren, PA','Sayre, PA','Lebanon, PA','Altoona, PA','Lewisburg, PA','Sunbury, PA',
'Somerset, PA','Chambersburg-Waynesboro, PA','State College, PA','Indiana, PA','Lancaster, PA','Selinsgrove, PA',
'Gaffney, SC','Knoxville, TN','Newport, TN','Sevierville, TN','Athens, TN','Johnson City, TN','Cookeville, TN',
'Greeneville, TN','McMinnville, TN','Morristown, TN','Shelbyville, TN','Kingsport-Bristol, TN-VA','Dayton, TN',
'Crossville, TN','Burlington-South Burlington, VT','Rutland, VT','Barre, VT','Bennington, VT','Lynchburg, VA',
'Roanoke, VA','Richmond, VA','Danville, VA','Martinsville, VA','Blacksburg-Christiansburg, VA','Charlottesville, VA',
'Harrisonburg, VA','Staunton, VA','Big Stone Gap, VA','Winchester, VA-WV','Bluefield, WV-VA','Morgantown, WV',
'Charleston, WV','Parkersburg-Vienna, WV','Fairmont, WV','Clarksburg, WV','Beckley, WV','Elkins, WV',
'Mount Gay-Shamrock, WV','Ketchikan, AK','Fairbanks, AK','Juneau, AK','Anchorage, AK','Mount Vernon-Anacortes, WA',
'Port Angeles, WA','Bellingham, WA'];



$('.introButton').on('click',function(){
    $('.dimmer').removeClass('active');
    $('.blurring.dimmable>:not(.dimmer)').css('filter','none');
    
});


let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles",protocol.tile);

let PMTILES_URL_tract = "https://dewsfcxuf47u5.cloudfront.net/segregation_all-10-13.pmtiles";
let PMTILES_URL_county = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties-2-11.pmtiles";
let PMTILES_URL_CBSA = "https://dewsfcxuf47u5.cloudfront.net/tl_2020_us_cbsa.pmtiles";

const p_tract = new pmtiles.PMTiles(PMTILES_URL_tract)
const p_county = new pmtiles.PMTiles(PMTILES_URL_county)
const p_CBSA = new pmtiles.PMTiles(PMTILES_URL_CBSA)

protocol.add(p_tract);
protocol.add(p_county);
protocol.add(p_CBSA);

const baseWidth = .5
const baseZoom = 4.1

///////////////////////////////////
////////// FUNCTIONS //////////////        
///////////////////////////////////

function updateLegend(category){
    // lng1=bbox[0][0]
    // lat1=bbox[0][1]
    // lng2=bbox[1][0]
    // lat2=bbox[1][1]

    $('.legendBar').empty();
    // $('.censusLegend').append($(`<h5 class="header smallHeader ">${catDict[category].replace(/\b\w/g, l => l.toUpperCase())}</h5><div class="legendBar"></div>`));
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



///////////////pop//////////////

let baPercValue = null;


function createPopUp(popUp,layer,map,hoveredStateId,svg){
    
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
//mousemove
        map.getCanvas().style.cursor = 'pointer';
        // e.stopPropagation();
        metric = $("#censusDropdown1 input").val();
        var div_score_exp  = e.features[0]['properties'][metric];
        
        // set up factors
        baPercValue = e.features[0]['properties']['ba_perc'];
        totolPopValue = e.features[0]['properties']['total_pop'];
        WHPopValue = e.features[0]['properties']['white_perc'];
        BLPopValue = e.features[0]['properties']['black_perc']; 
        ASPopValue = e.features[0]['properties']['asian_perc'];
        HIPopValue = e.features[0]['properties']['hispanic_perc'];
        OTPopValue = e.features[0]['properties']['other_perc'];  
        medianIncValue = e.features[0]['properties']['median_inc'];          

        $('#baPercValueDisplay').text(' ' + d3.format(",.1%")(baPercValue));     
        $('#WHPopValue').text(' ' + d3.format(",.1%")(WHPopValue));
        $('#BLPopValue').text(' ' + d3.format(",.1%")(BLPopValue));       
        $('#ASPopValue').text(' ' + d3.format(",.1%")(ASPopValue));
        $('#HIPopValue').text(' ' + d3.format(",.1%")(HIPopValue));
        $('#OTPopValue').text(' ' + d3.format(",.1%")(OTPopValue));
        $('#medianIncValue').text(' ' + d3.format(".0f")(medianIncValue));
        $('#totolPopValue').text(' ' + d3.format(".1f")(totolPopValue));

["#Boxplot_White","#Boxplot_Black","#Boxplot_Asian","#Boxplot_Hisp","#Boxplot_Other","#Boxplot_2", "#Boxplot_3", "#Boxplot_totalPop"].forEach(function(id) {
  var existingBoxplot = d3.select(id).select("svg");
  if (!existingBoxplot.empty()) {
    existingBoxplot.remove();
  }
});
    
/////////////////////////////////
/////// Boxplot Total Pop////////
/////////////////////////////////

// Set the dimensions and margins of the graph
var margin = { top: 15, right: 20, bottom: 30, left: 15 },
  width = 300 - margin.left - margin.right,
  height = 60 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_totalPop")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Create dummy data
var data = [2046, 2886, 4004, 5325, 6670]

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
  .domain([0, 10000]) // Adjust the domain based on your data
  .range([0, width]);

var formatTicks = d3.format(".0s"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

svg.call(xAxis);

var center =  35 ; // Adjust as needed
var height =  10  ; // Adjust as needed

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

  svg.append("line")
  .attr("x1", x(totolPopValue))
  .attr("x2", x(totolPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red"); // You can choose a color for the line

/////////////////////////////////
//// White Population///////////
/////////////////////////////////

// Set the dimensions and margins of the graph
var margin = { top: 15, right: 20, bottom: 30, left: 15 },
  width = 300 - margin.left - margin.right,
  height = 60 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_White")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Create dummy data
var data = [0.09733569257365707,0.4121006861158183,0.7340962196249035,0.8918411340289653,0.952799690935183]

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
  .domain([0, 1]) // Adjust the domain based on your data
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

svg.call(xAxis);

var center =  35 ; // Adjust as needed
var height =  10  ; // Adjust as needed

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

  svg.append("line")
  .attr("x1", x(WHPopValue))
  .attr("x2", x(WHPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red"); // You can choose a color for the line


/////////////////////////////////
//// Black Population///////////
/////////////////////////////////   
function drawBoxPlot(svg, newData) {
 //d3.select("#Boxplot_Black").select("svg").remove();
// Set the dimensions and margins of the graph
var margin = { top: 15, right: 20, bottom: 30, left: 15 },
  width = 300 - margin.left - margin.right,
  height = 60 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_Black")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Create dummy data
var data = [0.003119633207536783,0.009328091836647715,0.036006794355198594,0.13880348075635815,0.42492614401867124]

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
  .domain([0, 1]) // Adjust the domain based on your data
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

svg.call(xAxis);

var center =  35 ; // Adjust as needed
var height =  10  ; // Adjust as needed

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

  svg.append("line")
  .attr("x1", x(BLPopValue))
  .attr("x2", x(BLPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red"); // You can choose a color for the line

                            svg.append("rect")
                            .attr("x", x(newData[0])) // Assuming newData[0] is the lower bound
                            .attr("y", 30)
                            .attr("width", x(newData[2]) - x(newData[0]))
                            .attr("height", 10)
                            .attr("stroke", "red")
                            


}
                        /*function drawBoxPlot(svg, newData) {

                          svg.append("rect")
                            .attr("x", x(newData[0])) // Assuming newData[0] is the lower bound
                            .attr("y", 27.5)
                            .attr("width", x(newData[2]) - x(newData[0]))
                            .attr("height", 15)
                            .attr("stroke", "black")
                            .style("fill", "red");

                          // Show median, min, and max vertical lines for the new box
                         console.log(newData[0]);
                         console.log(svg)
                          // Add a red line for the lower bound of the new box

                        }*/

/////////////////////////////////
//// Asian Population///////////
/////////////////////////////////

// Set the dimensions and margins of the graph
var margin = { top: 15, right: 20, bottom: 30, left: 15 },
  width = 300 - margin.left - margin.right,
  height = 60 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_Asian")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Create dummy data
var data = [0.0015873015873015873,0.004385527772920674,0.013943921193069492,0.041750644682946265,0.10923682506051323]

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
  .domain([0, 1]) // Adjust the domain based on your data
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

svg.call(xAxis);

var center =  35 ; // Adjust as needed
var height =  10  ; // Adjust as needed

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

  svg.append("line")
  .attr("x1", x(ASPopValue))
  .attr("x2", x(ASPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red"); // You can choose a color for the line

/////////////////////////////////
//// Hispanic Population///////////
/////////////////////////////////

// Set the dimensions and margins of the graph
var margin = { top: 15, right: 20, bottom: 30, left: 15 },
  width = 300 - margin.left - margin.right,
  height = 60 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_Hisp")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Create dummy data
var data = [0.01250681005983965,0.02444987775061125,0.063359831464639,0.18972645213357398,0.49704283711592157]

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
  .domain([0, 1]) // Adjust the domain based on your data
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

svg.call(xAxis);

var center =  35 ; // Adjust as needed
var height =  10  ; // Adjust as needed

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

  svg.append("line")
  .attr("x1", x(HIPopValue))
  .attr("x2", x(HIPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red"); // You can choose a color for the line

/////////////////////////////////
//// Other Population///////////
/////////////////////////////////

// Set the dimensions and margins of the graph
var margin = { top: 15, right: 20, bottom: 30, left: 15 },
  width = 300 - margin.left - margin.right,
  height = 60 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_Other")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Create dummy data
var data = [0.07987901372985093,0.1307648531057408,0.21833387129439763,0.3706182732546282,0.5462693608340624]

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
  .domain([0, 1]) // Adjust the domain based on your data
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

svg.call(xAxis);

var center = 35; // Adjust as needed
var height = 10; // Adjust as needed

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

  svg.append("line")
  .attr("x1", x(OTPopValue))
  .attr("x2", x(OTPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red"); // You can choose a color for the line

/////////////////////////////////
//// Boxplot Education///////////
/////////////////////////////////

// Set the dimensions and margins of the graph
var margin = { top: 15, right: 20, bottom: 30, left: 15 },
  width = 300 - margin.left - margin.right,
  height = 60 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Create dummy data
var data = [0.079879014,0.130764853,0.218333871,0.370618273,0.546269361]

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
  .domain([0, 0.6]) // Adjust the domain based on your data
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

svg.call(xAxis);

var center =  35 ; // Adjust as needed
var height =  10  ; // Adjust as needed

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

  svg.append("line")
  .attr("x1", x(baPercValue))
  .attr("x2", x(baPercValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red"); // You can choose a color for the line

/////////////////////////////////
//////// Boxplot Income//////////
/////////////////////////////////


// Set the dimensions and margins of the graph
var margin = { top: 10, right: 10, bottom: 30, left: 10 },
  width = 300 - margin.left - margin.right,
  height = 60 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_3")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

//Create dummy data
var incData = [27306,36806,49375,67313,90296.8]

// Compute summary statistics used for the box:
var data_sorted = incData.sort(d3.ascending)
var q1 = d3.quantile(data_sorted, .25)
var median = d3.quantile(data_sorted, .5)
var q3 = d3.quantile(data_sorted, .75)
var interQuantileRange = q3 - q1
var min = q1 - 1.5 * interQuantileRange
var max = q1 + 1.5 * interQuantileRange

// Show the X scale (swap x and y)
var x = d3.scaleLinear()
  .domain([20000, 100000]) // Adjust the domain based on your legend data
  .range([0, width]);

var formatTick = d3.format(".0s");

var xAxis = d3.axisBottom(x)
              .ticks(5)
              .tickFormat(function (d) {
                            return formatTick(d);
  });; // Change the number of ticks as needed

svg.call(xAxis);

var center =  35 ; // Adjust as needed
var height =  10  ; // Adjust as needed

// Show the main horizontal line (swap x and y)
svg.append("line")
  .attr("x1", x(d3.min(incData)))
  .attr("x2", x(d3.max(incData)))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "black");


// Show the box (swap x and y)
svg.append("rect")
  .attr("x", x(d3.quantile(incData, .25)))
  .attr("y", center - height / 2) // Swap x and y
  .attr("width", x(d3.quantile(incData, .75)) - x(d3.quantile(incData, .25)))
  .attr("height", height) // Swap width and height
  .attr("stroke", "black")
  .style("fill", "#A5DEE4");

// Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([d3.min(incData), d3.median(incData), d3.max(incData)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "black");

  svg.append("line")
  .attr("x1", x(medianIncValue))
  .attr("x2", x(medianIncValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red"); // You can choose a color for the line


//console.log(baPercValue);

///////////////////////////
//////////fly to///////////
///////////////////////////

// Define the URL of your hosted CSV file
const csvFileURL = 'https://gist.githubusercontent.com/acopod/35967e9183f6de7c9db49389aed36681/raw/5885128198a67c7d3000296230962f390c776a69/CBSA_latlong.csv';
const CBSA_boxplot = 'https://gist.githubusercontent.com/acopod/e8a65ad8156e9caf05625107996bd501/raw/1cb5474175a851ef84a766e9e33ae6eaadaaf443/boxplot_summary_cbsa_national.csv';
let cityName; // Declare cityName variable in a broader scope
let min_b;

Papa.parse(csvFileURL, {
  download: true,
  complete: function (csvResults) {
    const csvData = csvResults.data;

    Papa.parse(CBSA_boxplot, {
      download: true,
      complete: function (boxplotResults) {
        const boxplotData = boxplotResults.data;

        // Add an event listener to the dropdown selection change
        $('#cityDropdown1').dropdown({
          onChange: function (value, text, $selectedItem) {
            cityName = text; // Assign the value to the broader-scoped variable cityName
                        // Process CSV data
            const result = csvData.find((row) => row[3] === cityName);

            if (result) {
              const intptlat = parseFloat(result[10]);
              const intptlon = parseFloat(result[11]);

              // Fly to the selected location
              map.flyTo({
                center: [intptlon, intptlat],
                zoom: 10,
                essential: true,
              });

              console.log(`City '${cityName}'`);
            }

            // Process boxplot data
            const result_boxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'black_perc');

            if (result_boxplot) {
  var min_b = parseFloat(result_boxplot[1]);
  var q1_b = parseFloat(result_boxplot[2]);
  var median_b = parseFloat(result_boxplot[3]);
  var q3_b = parseFloat(result_boxplot[4]);
  var max_b = parseFloat(result_boxplot[5]);


  drawBoxPlot(svg, [min_b, q1_b, median_b, q3_b, max_b]);
}
 console.log(`'${q1_b}'`);
          },
        });
      },
    });
  },
});

 

        // Get the text
popUpStr = `<div class='popup'>
    <h4>${catDict[metric]}: ${d3.format(",.2%")(div_score_exp)}</h4>
    
    
</div>`;

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

const national_histogram = 'https://gist.githubusercontent.com/acopod/32a8afe3dddb034f477ecce19961f4c7/raw/54fca9757905899fd4882384a72ab503f555f7c5/histogram_summary_national.csv';

Papa.parse(national_histogram, {
  download: true,
  complete: function (histogramResults) {
    const historgramData = histogramResults.data;

    //var selectedcensus = $('#censusDropdown1').find('.text').text();
    //var selectedtext_translated = catDict1[selectedcensus];

    // Add an event listener to the dropdown selection change
    $('#censusDropdown1').dropdown({
      onChange: function (value, text, $selectedItem) {
        var selectedcensus = text;
        var selectedtext_translated = catDict1[selectedcensus];
        const result_hitogram = historgramData.find((row) => row[0] === selectedtext_translated);

        if (result_hitogram) {
  var bin_0 = parseFloat(result_hitogram[1]);
  var bin_1 = parseFloat(result_hitogram[2]);
  var bin_2 = parseFloat(result_hitogram[3]);
  var bin_3 = parseFloat(result_hitogram[4]);
  var bin_4 = parseFloat(result_hitogram[5]);
  var bin_5 = parseFloat(result_hitogram[6]);
  var bin_6 = parseFloat(result_hitogram[7]);
  var bin_7 = parseFloat(result_hitogram[8]);
  var bin_8 = parseFloat(result_hitogram[9]);
  var bin_0_perc = parseFloat(result_hitogram[11] * 100);
  var bin_1_perc = parseFloat(result_hitogram[12] * 100);
  var bin_2_perc = parseFloat(result_hitogram[13] * 100);
  var bin_3_perc = parseFloat(result_hitogram[14] * 100);
  var bin_4_perc = parseFloat(result_hitogram[15] * 100);
  var bin_5_perc = parseFloat(result_hitogram[16] * 100);
  var bin_6_perc = parseFloat(result_hitogram[17] * 100);
  var bin_7_perc = parseFloat(result_hitogram[18] * 100);



  drawHistogram(svg, bin_0, bin_1, bin_2, bin_3, bin_4, bin_5, bin_6, bin_7, bin_8, bin_0_perc, bin_1_perc, bin_2_perc, bin_3_perc, bin_4_perc, bin_5_perc, bin_6_perc, bin_7_perc);
}
 console.log(`'${bin_0}'`);
          },
        });
      },
    });


function drawHistogram(svg, bin_0, bin_1, bin_2, bin_3, bin_4, bin_5, bin_6, bin_7, bin_8, bin_0_perc, bin_1_perc, bin_2_perc, bin_3_perc, bin_4_perc, bin_5_perc, bin_6_perc, bin_7_perc){
// Set the dimensions and margins of the graph for the histogram
var histogramMargin = {top: 10, right: 40, bottom: 30, left: 40},
    histogramWidth = 300 - histogramMargin.left - histogramMargin.right,
    histogramHeight = 200 - histogramMargin.top - histogramMargin.bottom;

// Append the SVG object to the body of the page for the histogram
var histogramSvg = d3.select("#my_histogram")
  .append("svg")
    .attr("width", histogramWidth + histogramMargin.left + histogramMargin.right)
    .attr("height", histogramHeight + histogramMargin.top + histogramMargin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + histogramMargin.left + "," + histogramMargin.top + ")");


// Your data
// Define custom bin ranges and corresponding heights as percentages
var binRanges = [
  [bin_0, 0.003719339, bin_0_perc],
  [bin_1, 0.052152194, bin_1_perc],
  [bin_2, 0.108444529, bin_2_perc],
  [bin_3, 0.116602642, bin_3_perc],
  [bin_4, 0.135878049, bin_4_perc],
  [bin_5, 0.176329257, bin_5_perc],
  [bin_6, 0.257421711, bin_6_perc],
  [bin_7, 0.133190351, bin_7_perc],
  [bin_8, 0, 0],
];

// Calculate the total percentage
var totalPercentage = binRanges.reduce((sum, range) => sum + range[2], 0);
var maxPercentage = d3.max(binRanges, range => range[2]);

// X axis: scale and draw:
var x = d3.scaleLinear()
  .domain([0, 0.25])
  .range([0, histogramWidth]);

var xAxis = d3.axisBottom(x)
  .tickValues(binRanges.map(range => range[0]))
  .tickFormat(d3.format(".3f")); // Set the desired precision

histogramSvg.append("g")
  .attr("transform", "translate(0," + histogramHeight + ")")
  .call(xAxis);

// Y axis: scale and draw
var y = d3.scaleLinear()
  .range([histogramHeight, 0]) // Adjust the range to start from the bottom
  .domain([0, maxPercentage]);

histogramSvg.append("g")
  .call(d3.axisLeft(y).tickFormat(d => d + "%").ticks(maxPercentage / 5)); // Set tick intervals

// Append the bar rectangles to the svg element
histogramSvg.selectAll("rect")
  .data(binRanges)
  .enter()
  .append("rect")
  .attr("x", range => x(range[0]))
  .attr("width", x(binRanges[1][0]) - x(binRanges[0][0]) - 1)
  .attr("y", range => histogramHeight - (range[2] / maxPercentage) * histogramHeight)
  .attr("height", range => (range[2] / maxPercentage) * histogramHeight)
  .style("fill", "#A5DEE4");



}
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
        minZoom:4,
        // zoom: 11,
        center: [-97.54593, 38.99387],
        style:'https://api.maptiler.com/maps/5f5a5e3a-bf8e-4515-b05b-423feccaabbd/style.json?key=is6mQIv8IXor3VbmKwq8',
        // style: 'https://api.maptiler.com/maps/dataviz/style.json?key=is6mQIv8IXor3VbmKwq8',
        // style:"https://tiles.stadiamaps.com/styles/alidade_smooth.json"
       
    });

    let hoveredStateId = null;


    map.on('load',function(){

        const layers = map.getStyle().layers;
    // console.log(layers);
// Find the index of the first symbol layer in the map style.
        let firstLineId;


        for (const layer of layers) {
            if (layer.type === 'line') {
            firstLineId = layer.id;
            break;
            }
        }

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

        map.addSource('NAME',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_CBSA,
        });


        map.addLayer({
                "id":"tracts",
                "source": "seg_10_13",
                "source-layer":"segregation_allfgb",
                "type": "fill",
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops: [[0, '#440154'],
                                [0.071, '#440154'],
                                [0.19, '#46327f'],
                                [.282, '#365c8d'],
                                [0.369, '#277f8e'],
                                [0.449, '#1fa288'],
                                [.524, '#4ac26d'],
                                [0.603, '#9ed93a'],
                                [0.8, '#fde725']],
                    default: 'gray',
                         },

                //     'fill-opacity': [
                //     'interpolate',

                //     ['linear'],
                //     ['zoom'],
                //     // When zoom is 10, buildings will be 100% transparent.
                //     12,
                //                         ['case',
                //     ['boolean', ['feature-state', 'hover'], false],
                //     0.9,
                //     0.7],
                //     // When zoom is 18 or higher, buildings will be 100% opaque.
                //     20,
                //     ['case',
                //     ['boolean', ['feature-state', 'hover'], false],
                //     0.9,
                //     0.1]
                    

                // ]
                    
                }
            },firstLineId);
        map.addLayer({
                    "id":"counties",
                    "source": "seg_2_11",
                    "source-layer":"segregation_all_countiesfgb",
                    "type": "fill",
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops: [[0, '#440154'],
                                [0.071, '#440154'],
                                [0.19, '#46327f'],
                                [.282, '#365c8d'],
                                [0.369, '#277f8e'],
                                [0.449, '#1fa288'],
                                [.524, '#4ac26d'],
                                [0.603, '#9ed93a'],
                                [0.8, '#fde725']],
                        default: 'gray',
                        },



                        // 'fill-opacity': [
                        //       'case',
                        //     ['boolean', ['feature-state', 'hover'], false],
                        //     0.9,
                        //     0.7,

                        // ]
                        
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
        },firstLineId);

         /*map.addLayer({
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
        });*/


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

        },firstLineId);

    
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

/////////////////////////////////
///////////// popup ///////////
/////////////////////////////////

        const popup = new maplibregl.Popup({
          closeButton: false,
          closeOnClick: false
        });

        map.on('mouseenter','segregation_allfgb',function(e){
            const coordinates = e.features[0].geometry.coordinates.slice();
                function emptyToYesNo(val){
                  if (val.length > 1){
                      return "Yes"} else {return "No"};
              }
              const total_pop =emptyToYesNo(e.features[0].properties.total_pop); // We apply this function to our value.
              /// THERE ARE THREE MORE VARIABLES MISSING!
              /// FILL IN THE RES
              var description = '<h4>' + total_pop + '</h4>'

               popup.setLngLat(coordinates[0][0]).setHTML(description).addTo(map);
        })

          map.on('mouseleave', 'segregation_allfgb', function() {
            map.getCanvas().style.cursor = '';
            popup.remove();
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
var city='Ithaca, NY';



/////////////////////////////////
// initialize city dropdown /////
/////////////////////////////////


var $cityDropdown = $("#cityDropdown");
$('#cityDropdown1').dropdown();

$cityDropdown.empty();
$.each(cities, function () {
$cityDropdown.append($('<div class="item" data-value="' + this + '">' + this + '</div>'));});

/////////////////////////////////
////// collapsible-content //////
/////////////////////////////////

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
};


/////////////////////////////////
///////////// Histogram ///////////
/////////////////////////////////

const national_histogram = 'https://gist.githubusercontent.com/acopod/32a8afe3dddb034f477ecce19961f4c7/raw/54fca9757905899fd4882384a72ab503f555f7c5/histogram_summary_national.csv';

Papa.parse(national_histogram, {
  download: true,
  complete: function (histogramResults) {
    const historgramData = histogramResults.data;

    //var selectedcensus = $('#censusDropdown1').find('.text').text();
    //var selectedtext_translated = catDict1[selectedcensus];

    // Add an event listener to the dropdown selection change
    $('#censusDropdown1').dropdown({
      onChange: function (value, text, $selectedItem) {
        var selectedcensus = text;
        var selectedtext_translated = catDict1[selectedcensus];
        const result_hitogram = historgramData.find((row) => row[0] === selectedtext_translated);

        if (result_hitogram) {
  var bin_0 = parseFloat(result_hitogram[1]);
  var bin_1 = parseFloat(result_hitogram[2]);
  var bin_2 = parseFloat(result_hitogram[3]);
  var bin_3 = parseFloat(result_hitogram[4]);
  var bin_4 = parseFloat(result_hitogram[5]);
  var bin_5 = parseFloat(result_hitogram[6]);
  var bin_6 = parseFloat(result_hitogram[7]);
  var bin_7 = parseFloat(result_hitogram[8]);
  var bin_8 = parseFloat(result_hitogram[9]);
  var bin_0_perc = parseFloat(result_hitogram[11] * 100);
  var bin_1_perc = parseFloat(result_hitogram[12] * 100);
  var bin_2_perc = parseFloat(result_hitogram[13] * 100);
  var bin_3_perc = parseFloat(result_hitogram[14] * 100);
  var bin_4_perc = parseFloat(result_hitogram[15] * 100);
  var bin_5_perc = parseFloat(result_hitogram[16] * 100);
  var bin_6_perc = parseFloat(result_hitogram[17] * 100);
  var bin_7_perc = parseFloat(result_hitogram[18] * 100);



  drawHistogram(svg, bin_0, bin_1, bin_2, bin_3, bin_4, bin_5, bin_6, bin_7, bin_8, bin_0_perc, bin_1_perc, bin_2_perc, bin_3_perc, bin_4_perc, bin_5_perc, bin_6_perc, bin_7_perc);
}
 console.log(`'${bin_0}'`);
          },
        });
      },
    });


function drawHistogram(svg, bin_0, bin_1, bin_2, bin_3, bin_4, bin_5, bin_6, bin_7, bin_8, bin_0_perc, bin_1_perc, bin_2_perc, bin_3_perc, bin_4_perc, bin_5_perc, bin_6_perc, bin_7_perc){
// Set the dimensions and margins of the graph for the histogram
var histogramMargin = {top: 10, right: 40, bottom: 30, left: 40},
    histogramWidth = 300 - histogramMargin.left - histogramMargin.right,
    histogramHeight = 200 - histogramMargin.top - histogramMargin.bottom;

// Append the SVG object to the body of the page for the histogram
var histogramSvg = d3.select("#my_histogram")
  .append("svg")
    .attr("width", histogramWidth + histogramMargin.left + histogramMargin.right)
    .attr("height", histogramHeight + histogramMargin.top + histogramMargin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + histogramMargin.left + "," + histogramMargin.top + ")");


// Your data
// Define custom bin ranges and corresponding heights as percentages
var binRanges = [
  [bin_0, 0.003719339, bin_0_perc],
  [bin_1, 0.052152194, bin_1_perc],
  [bin_2, 0.108444529, bin_2_perc],
  [bin_3, 0.116602642, bin_3_perc],
  [bin_4, 0.135878049, bin_4_perc],
  [bin_5, 0.176329257, bin_5_perc],
  [bin_6, 0.257421711, bin_6_perc],
  [bin_7, 0.133190351, bin_7_perc],
  [bin_8, 0, 0],
];

// Calculate the total percentage
var totalPercentage = binRanges.reduce((sum, range) => sum + range[2], 0);
var maxPercentage = d3.max(binRanges, range => range[2]);

// X axis: scale and draw:
var x = d3.scaleLinear()
  .domain([0, 0.25])
  .range([0, histogramWidth]);

var xAxis = d3.axisBottom(x)
  .tickValues(binRanges.map(range => range[0]))
  .tickFormat(d3.format(".3f")); // Set the desired precision

histogramSvg.append("g")
  .attr("transform", "translate(0," + histogramHeight + ")")
  .call(xAxis);

// Y axis: scale and draw
var y = d3.scaleLinear()
  .range([histogramHeight, 0]) // Adjust the range to start from the bottom
  .domain([0, maxPercentage]);

histogramSvg.append("g")
  .call(d3.axisLeft(y).tickFormat(d => d + "%").ticks(maxPercentage / 5)); // Set tick intervals

// Append the bar rectangles to the svg element
histogramSvg.selectAll("rect")
  .data(binRanges)
  .enter()
  .append("rect")
  .attr("x", range => x(range[0]))
  .attr("width", x(binRanges[1][0]) - x(binRanges[0][0]) - 1)
  .attr("y", range => histogramHeight - (range[2] / maxPercentage) * histogramHeight)
  .attr("height", range => (range[2] / maxPercentage) * histogramHeight)
  .style("fill", "#A5DEE4");



}
