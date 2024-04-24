/////////////////////////////////
/////// Accordian ////////
/////////////////////////////////

$('.ui.accordion')
  .accordion()
;
 $('.icon').popup({
    inline: true
 })

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

             //[[0, '#222a2e'],
             //                   [0.071, '#21404c'],
             //                   [0.19, '#21596d'],
             //                   [.282, '#1d708a'],
             //                   [0.369, '#238894'],
             //                   [0.449, '#38afa6'],
             //                   [.524, '#63c4b1'],
             //                   [0.603, '#82ccb7'],
             //                   [0.8, '#b0d5c5']]


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
                            stops:  [[0, '#440154'],
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

let PMTILES_URL_tract_weekday_late_night = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekday_late_night_10-14.pmtiles";
let PMTILES_URL_tract_weekend_late_night = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekend_late_night_10-14.pmtiles";
let PMTILES_URL_tract_weekday_morning = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekday_morning_10-14.pmtiles";
let PMTILES_URL_tract_weekdend_morning = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekend_morning_10-14.pmtiles";
let PMTILES_URL_tract_weekday_afternoon = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekday_afternoon_10-14.pmtiles";
let PMTILES_URL_tract_weekend_afternoon = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekend_afternoon_10-14.pmtiles";
let PMTILES_URL_tract_weekday_evening = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekday_evening_10-14.pmtiles";
let PMTILES_URL_tract_weekend_evening = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekend_evening_10-14.pmtiles";
let PMTILES_URL_tract_weekday_late_evening = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekday_late_evening_10-14.pmtiles";
let PMTILES_URL_tract_weekend_late_evening = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_intervals_weekend_late_evening_10-14.pmtiles";

let PMTILES_URL_county_weekday_late_night = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekday_late_night_0-11.pmtiles";
let PMTILES_URL_county_weekend_late_night = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekend_late_night_0-11.pmtiles";
let PMTILES_URL_county_weekday_morning = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekday_morning_0-11.pmtiles";
let PMTILES_URL_county_weekdend_morning = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekend_morning_0-11.pmtiles";
let PMTILES_URL_county_weekday_afternoon = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekday_afternoon_0-11.pmtiles";
let PMTILES_URL_county_weekend_afternoon = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekend_afternoon_0-11.pmtiles";
let PMTILES_URL_county_weekday_evening = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekday_evening_0-11.pmtiles";
let PMTILES_URL_county_weekend_evening = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekend_evening_0-11.pmtiles";
let PMTILES_URL_county_weekday_late_evening = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekday_late_evening_0-11.pmtiles";
let PMTILES_URL_county_weekend_late_evening = "https://dewsfcxuf47u5.cloudfront.net/segregation_all_counties_intervals_weekend_late_evening_0-11.pmtiles";

const p_tract = new pmtiles.PMTiles(PMTILES_URL_tract)
const p_county = new pmtiles.PMTiles(PMTILES_URL_county)
const p_CBSA = new pmtiles.PMTiles(PMTILES_URL_CBSA)

const p_tract_weekday_late_night = new pmtiles.PMTiles(PMTILES_URL_tract_weekday_late_night)
const p_tract_weekend_late_night = new pmtiles.PMTiles(PMTILES_URL_tract_weekend_late_night)
const p_tract_weekday_morning = new pmtiles.PMTiles(PMTILES_URL_tract_weekday_morning)
const p_tract_weekend_morning = new pmtiles.PMTiles(PMTILES_URL_tract_weekdend_morning)
const p_tract_weekday_afternoon = new pmtiles.PMTiles(PMTILES_URL_tract_weekday_afternoon)
const p_tract_weekend_afternoon = new pmtiles.PMTiles(PMTILES_URL_tract_weekend_afternoon)
const p_tract_weekday_evening = new pmtiles.PMTiles(PMTILES_URL_tract_weekday_evening)
const p_tract_weekend_evening = new pmtiles.PMTiles(PMTILES_URL_tract_weekend_evening)
const p_tract_weekday_late_evening = new pmtiles.PMTiles(PMTILES_URL_tract_weekday_late_evening)
const p_tract_weekend_late_evening = new pmtiles.PMTiles(PMTILES_URL_tract_weekend_late_evening)

const p_county_weekday_late_night = new pmtiles.PMTiles(PMTILES_URL_county_weekday_late_night)
const p_county_weekend_late_night = new pmtiles.PMTiles(PMTILES_URL_county_weekend_late_night)
const p_county_weekday_morning = new pmtiles.PMTiles(PMTILES_URL_county_weekday_morning)
const p_county_weekend_morning = new pmtiles.PMTiles(PMTILES_URL_county_weekdend_morning)
const p_county_weekday_afternoon = new pmtiles.PMTiles(PMTILES_URL_county_weekday_afternoon)
const p_county_weekend_afternoon = new pmtiles.PMTiles(PMTILES_URL_county_weekend_afternoon)
const p_county_weekday_evening = new pmtiles.PMTiles(PMTILES_URL_county_weekday_evening)
const p_county_weekend_evening = new pmtiles.PMTiles(PMTILES_URL_county_weekend_evening)
const p_county_weekday_late_evening = new pmtiles.PMTiles(PMTILES_URL_county_weekday_late_evening)
const p_county_weekend_late_evening = new pmtiles.PMTiles(PMTILES_URL_county_weekend_late_evening)

protocol.add(p_tract);
protocol.add(p_county);
protocol.add(p_CBSA);

protocol.add(p_tract_weekday_late_night);
protocol.add(p_tract_weekend_late_night);
protocol.add(p_tract_weekday_morning);
protocol.add(p_tract_weekend_morning);
protocol.add(p_tract_weekday_afternoon);
protocol.add(p_tract_weekend_afternoon);
protocol.add(p_tract_weekday_evening);
protocol.add(p_tract_weekend_evening);
protocol.add(p_tract_weekday_late_evening);
protocol.add(p_tract_weekend_late_evening);

protocol.add(p_county_weekday_late_night);
protocol.add(p_county_weekend_late_night);
protocol.add(p_county_weekday_morning);
protocol.add(p_county_weekend_morning);
protocol.add(p_county_weekday_afternoon);
protocol.add(p_county_weekend_afternoon);
protocol.add(p_county_weekday_evening);
protocol.add(p_county_weekend_evening);
protocol.add(p_county_weekday_late_evening);
protocol.add(p_county_weekend_late_evening);

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

let totolPopValue = null;
let WHPopValue = null;
let BLPopValue = null;
let ASPopValue = null;
let HIPopValue = null;
let OTPopValue = null;
let baPercValue = null;
let medianIncValue = null;



function createPopUp(popUp,layer,layerA,map,hoveredStateId,svg){
    
    var layerPopUpInfo = {
         'county_weird':{
            'sourceLayer':'segregation_all_countiesfgb',
            'source':'seg_2_11'
        },

        'tracts_weird':{
            'sourceLayer':'segregation_allfgb',
            'source':'seg_10_13'
            },


        'county_outline':{
            'sourceLayer':'segregation_all_countiesfgb',
            'source':'seg_2_11'
            },
          

    }

///////////////////////////////////////////////////////////////////////////////////////////////
/////// Mouse click ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


    ///// Change the opacity of the highlighted HOLC zone 
    map.on('click',layer, e => {

        //mousemove
        map.getCanvas().style.cursor = 'pointer';
        // e.stopPropagation();
        metric = $("#censusDropdown1 input").val();
        city = $("#cityDropdown1 input").val();

        var div_score_exp  = e.features[0]['properties'][metric];

        //console.log(city)
        
        if (e.features[0]['layer']['id']=='counties'){
            var geom_name = e.features[0]['properties']['NAME']+" "+"County";    
            var geom_id = e.features[0]['properties']['COUNTYFP10']
        } else{
            var geom_name = e.features[0]['properties']['COUNTY'];
            var geom_id = e.features[0]['properties']['TRACTCE10'];
        };

        baPercValue = e.features[0]['properties']['ba_perc'];
        totolPopValue = e.features[0]['properties']['total_pop'];
        WHPopValue = e.features[0]['properties']['white_perc'];
        BLPopValue = e.features[0]['properties']['black_perc']; 
        ASPopValue = e.features[0]['properties']['asian_perc'];
        HIPopValue = e.features[0]['properties']['hispanic_perc'];
        OTPopValue = e.features[0]['properties']['other_perc'];  
        medianIncValue = e.features[0]['properties']['median_inc'];
        metro  = e.features[0]['properties']['NAME'];          
        //console.log(metro)
        //console.log(div_score_exp)

        $('#baPercValueDisplay').text(' ' + d3.format(",.1%")(baPercValue));     
        $('#WHPopValue').text(' ' + d3.format(",.1%")(WHPopValue));
        $('#BLPopValue').text(' ' + d3.format(",.1%")(BLPopValue));       
        $('#ASPopValue').text(' ' + d3.format(",.1%")(ASPopValue));
        $('#HIPopValue').text(' ' + d3.format(",.1%")(HIPopValue));
        $('#OTPopValue').text(' ' + d3.format(",.1%")(OTPopValue));
        $('#medianIncValue').text(' ' + d3.format(".0f")(medianIncValue));
        $('#totolPopValue').text(' ' + d3.format(".1f")(totolPopValue));

    Papa.parse(CBSA_boxplot, {
      download: true,
      complete: function (boxplotResults) {
        const boxplotData = boxplotResults.data;
            newTPData = [];
            newWHData = [];
            newBLData = [];
            newASData = [];
            newHIData = [];
            newOTData = [];
            newHEData = [];
            newMIData = [];
            const result_TPboxplot = boxplotData.find((row) => row[7] === metro && row[0] === 'total_pop');

              if (result_TPboxplot) {
              var min_b = parseFloat(result_TPboxplot[1]);
              var q1_b = parseFloat(result_TPboxplot[2]);
              var median_b = parseFloat(result_TPboxplot[3]);
              var q3_b = parseFloat(result_TPboxplot[4]);
              var max_b = parseFloat(result_TPboxplot[5]);
              var newTPData = [min_b, q1_b, median_b, q3_b, max_b]

              //console.log(newTPData)
            }

                          const result_WHboxplot = boxplotData.find((row) => row[7] === metro && row[0] === 'white_perc');

              if (result_WHboxplot) {
              var min_b = parseFloat(result_WHboxplot[1]);
              var q1_b = parseFloat(result_WHboxplot[2]);
              var median_b = parseFloat(result_WHboxplot[3]);
              var q3_b = parseFloat(result_WHboxplot[4]);
              var max_b = parseFloat(result_WHboxplot[5]);
              var newWHData = [min_b, q1_b, median_b, q3_b, max_b]

            }

              const result_BLboxplot = boxplotData.find((row) => row[7] === metro && row[0] === 'black_perc');

              if (result_BLboxplot) {
              var min_b = parseFloat(result_BLboxplot[1]);
              var q1_b = parseFloat(result_BLboxplot[2]);
              var median_b = parseFloat(result_BLboxplot[3]);
              var q3_b = parseFloat(result_BLboxplot[4]);
              var max_b = parseFloat(result_BLboxplot[5]);
              var newBLData = [min_b, q1_b, median_b, q3_b, max_b]

            }


              const result_ASboxplot = boxplotData.find((row) => row[7] === metro && row[0] === 'asian_perc');

              if (result_ASboxplot) {
              var min_b = parseFloat(result_ASboxplot[1]);
              var q1_b = parseFloat(result_ASboxplot[2]);
              var median_b = parseFloat(result_ASboxplot[3]);
              var q3_b = parseFloat(result_ASboxplot[4]);
              var max_b = parseFloat(result_ASboxplot[5]);
              var newASData = [min_b, q1_b, median_b, q3_b, max_b]

            }

              const result_HIboxplot = boxplotData.find((row) => row[7] === metro && row[0] === 'hispanic_perc');

              if (result_HIboxplot) {
              var min_b = parseFloat(result_HIboxplot[1]);
              var q1_b = parseFloat(result_HIboxplot[2]);
              var median_b = parseFloat(result_HIboxplot[3]);
              var q3_b = parseFloat(result_HIboxplot[4]);
              var max_b = parseFloat(result_HIboxplot[5]);
              var newHIData = [min_b, q1_b, median_b, q3_b, max_b]

            }

              const result_OTboxplot = boxplotData.find((row) => row[7] === metro && row[0] === 'other_perc');

              if (result_OTboxplot) {
              var min_b = parseFloat(result_OTboxplot[1]);
              var q1_b = parseFloat(result_OTboxplot[2]);
              var median_b = parseFloat(result_OTboxplot[3]);
              var q3_b = parseFloat(result_OTboxplot[4]);
              var max_b = parseFloat(result_OTboxplot[5]);
              var newOTData = [min_b, q1_b, median_b, q3_b, max_b]

            }

              const result_HEboxplot = boxplotData.find((row) => row[7] === metro && row[0] === 'ba_higher_perc');

              if (result_HEboxplot) {
              var min_b = parseFloat(result_HEboxplot[1]);
              var q1_b = parseFloat(result_HEboxplot[2]);
              var median_b = parseFloat(result_HEboxplot[3]);
              var q3_b = parseFloat(result_HEboxplot[4]);
              var max_b = parseFloat(result_HEboxplot[5]);
              var newHEData = [min_b, q1_b, median_b, q3_b, max_b]

            }

              const result_MIboxplot = boxplotData.find((row) => row[7] === metro && row[0] === 'median_inc');

              if (result_MIboxplot) {
              var min_b = parseFloat(result_MIboxplot[1]);
              var q1_b = parseFloat(result_MIboxplot[2]);
              var median_b = parseFloat(result_MIboxplot[3]);
              var q3_b = parseFloat(result_MIboxplot[4]);
              var max_b = parseFloat(result_MIboxplot[5]);
              var newMIData = [min_b, q1_b, median_b, q3_b, max_b]

             
            }

drawTPBoxPlot(svg, newTPData, totolPopValue);
drawWHBoxPlot(svg, newWHData, WHPopValue);
drawBLBoxPlot(svg, newBLData, BLPopValue);
drawASBoxPlot(svg, newASData, ASPopValue);
drawHIBoxPlot(svg, newHIData, HIPopValue);
drawOTBoxPlot(svg, newOTData, OTPopValue);
drawHEBoxPlot(svg, newHEData, baPercValue);
drawMIBoxPlot(svg, newMIData, medianIncValue);


}
});


        Papa.parse(CBSA_histogram, {
          download: true,
          complete: function (histogramResults) {
            const histogramData = histogramResults.data;

            Papa.parse(national_histogram, {
              download: true,
              complete: function (nationalhistogramResults) {
                const nationalhistorgramData = nationalhistogramResults.data;

                const result_hitogram = nationalhistorgramData.find((row) => row[0] === metric);
                const result_WHhistogram = histogramData.find((row) => row[1] === metro && row[3] === metric);

                        var currentZoom = map.getZoom();
                        var zoomThreshold = 10;

                if (currentZoom >= zoomThreshold) {
                      var CBSAbin_0 = parseFloat(result_WHhistogram[4]);
                      var CBSAbin_1 = parseFloat(result_WHhistogram[5]);
                      var CBSAbin_2 = parseFloat(result_WHhistogram[6]);
                      var CBSAbin_3 = parseFloat(result_WHhistogram[7]);
                      var CBSAbin_4 = parseFloat(result_WHhistogram[8]);
                      var CBSAbin_5 = parseFloat(result_WHhistogram[9]);
                      var CBSAbin_6 = parseFloat(result_WHhistogram[10]);
                      var CBSAbin_7 = parseFloat(result_WHhistogram[11]);
                      var CBSAbin_8 = parseFloat(result_WHhistogram[12]);
                      var CBSAbin_0_perc = parseFloat(result_WHhistogram[13] * 100);
                      var CBSAbin_1_perc = parseFloat(result_WHhistogram[14] * 100);
                      var CBSAbin_2_perc = parseFloat(result_WHhistogram[15] * 100);
                      var CBSAbin_3_perc = parseFloat(result_WHhistogram[16] * 100);
                      var CBSAbin_4_perc = parseFloat(result_WHhistogram[17] * 100);
                      var CBSAbin_5_perc = parseFloat(result_WHhistogram[18] * 100);
                      var CBSAbin_6_perc = parseFloat(result_WHhistogram[19] * 100);
                      var CBSAbin_7_perc = parseFloat(result_WHhistogram[20] * 100);

                      var CBSAbinRanges = [
                           {bin: CBSAbin_0, value: CBSAbin_0_perc},
                           {bin: CBSAbin_1, value: CBSAbin_1_perc},
                           {bin: CBSAbin_2, value: CBSAbin_2_perc},
                           {bin: CBSAbin_3, value: CBSAbin_3_perc},
                           {bin: CBSAbin_4, value: CBSAbin_4_perc},
                           {bin: CBSAbin_5, value: CBSAbin_5_perc},
                           {bin: CBSAbin_6, value: CBSAbin_6_perc},
                           {bin: CBSAbin_7, value: CBSAbin_7_perc},
                           {bin: CBSAbin_8, value: 0},]

                      drawHistogram(CBSAbinRanges, div_score_exp);
                };

if (currentZoom < zoomThreshold) {
      var bin_0 = parseFloat(result_hitogram[1]);
      var bin_1 = parseFloat(result_hitogram[2]);
      var bin_2 = parseFloat(result_hitogram[3]);
      var bin_3 = parseFloat(result_hitogram[4]);
      var bin_4 = parseFloat(result_hitogram[5]);
      var bin_5 = parseFloat(result_hitogram[6]);
      var bin_6 = parseFloat(result_hitogram[7]);
      var bin_7 = parseFloat(result_hitogram[8]);
      var bin_8 = parseFloat(result_hitogram[9]);
      var bin_0_perc = parseFloat(result_hitogram[10] * 100);
      var bin_1_perc = parseFloat(result_hitogram[11] * 100);
      var bin_2_perc = parseFloat(result_hitogram[12] * 100);
      var bin_3_perc = parseFloat(result_hitogram[13] * 100);
      var bin_4_perc = parseFloat(result_hitogram[14] * 100);
      var bin_5_perc = parseFloat(result_hitogram[15] * 100);
      var bin_6_perc = parseFloat(result_hitogram[16] * 100);
      var bin_7_perc = parseFloat(result_hitogram[17] * 100);

        var binRanges = [
           {bin: bin_0, value: bin_0_perc},
           {bin: bin_1, value: bin_1_perc},
           {bin: bin_2, value: bin_2_perc},
           {bin: bin_3, value: bin_3_perc},
           {bin: bin_4, value: bin_4_perc},
           {bin: bin_5, value: bin_5_perc},
           {bin: bin_6, value: bin_6_perc},
           {bin: bin_7, value: bin_7_perc},
           {bin: bin_8, value: 0},
        ];

      //console.log(binRanges);
      //console.log(div_score_exp);
      drawHistogram(binRanges, div_score_exp);

};
},
});
},
});

        const currentZoom = map.getZoom();
    let popupDistanceMultiplier = 0.1;

    // Adjust the distance multiplier based on zoom level
    if (currentZoom >= 10 && currentZoom < 15) {
        popupDistanceMultiplier = 0.005;
    } else if (currentZoom >= 15 && currentZoom < 18) {
        popupDistanceMultiplier = 0.002;
    } else if (currentZoom >= 18) {
        popupDistanceMultiplier = 0.001;
    }
    
        // Get the text
        popUpStr = `<div class='popup'>
            <h4>${catDict[metric]}: ${d3.format(",.2%")(div_score_exp)}</h4>
             
        </div>`;

        popUp.setHTML(popUpStr);
        popUp.setLngLat([e.lngLat.lng, e.lngLat.lat + (popupDistanceMultiplier)]);
        popUp.addTo(map);
        // if (!popUp.isOpen()) {
        //   popUp.addTo(map);
        // }
        // else {
        // popUp.remove();
        // }
/*
 map.on('click', 'county_outline', (e) => {
            if (e.features.length > 0) {
                if (hoveredStateId) {
                    map.setFeatureState(
                        {source: 'seg_2_11', id: hoveredStateId},
                        {hover: false}
                    );
                }
                hoveredStateId = e.features[0].id;
                map.setFeatureState(
                    {source: 'seg_2_11', id: hoveredStateId},
                    {hover: true}
                );
           console.log(hoveredStateId)
            }
        });

        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.
        map.on('mouseleave', 'county_outline', () => {
            if (hoveredStateId) {
                map.setFeatureState(
                    {source: 'seg_2_11', id: hoveredStateId},
                    {hover: false}
                );
            }
            hoveredStateId = null;
        });*/



        // Change the opacity 
        
    });


///////////////////////////////////////////////////////////////////////////////////////////////
/////// Boxplot functions//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////
/////// Boxplot Total Pop////////
/////////////////////////////////


function drawTPBoxPlot(svg, newTPData, totolPopValue) {

d3.select("#Boxplot_totalPop").select("svg").remove();

// Set the dimensions and margins of the graph
var margin = { top: 10, right: 20, bottom: 10, left: 15 },
    width = 300 - margin.left - margin.right,
    height = 40 - margin.top - margin.bottom;

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

// Initial domain values
var minDomain = 2046;
var maxDomain = 6670;

if (newTPData[4] > maxDomain) {
  maxDomain = newTPData[4];
}

if (newTPData[0] < minDomain) {
  minDomain = newTPData[0];
}

// Set up the scale with the updated domain
var x = d3.scaleLinear()
  .domain([minDomain, maxDomain])
  .range([0, width]);

var formatTicks = d3.format(".2s"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

//svg.call(xAxis);

var center =  10 ; // Adjust as needed
var height =  10  ; // Adjust as needed

if (newTPData.length === 0 ){

svg.append("line")
  .attr("x1", x(data[0]))
  .attr("x2", x(data[1]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("line")
  .attr("x1", x(data[3]))
  .attr("x2", x(data[4]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("rect")
  .attr("x", x(d3.quantile(data, .25)))
  .attr("y", center - height / 2 ) 
  .attr("width", x(d3.quantile(data, .75)) - x(d3.quantile(data, .25)))
  .attr("height", height ) // Swap width and height
  .attr("stroke", "#555")
  .style("fill", "#ffe1cc")
  .attr("fill-opacity", 1)
  .attr("rx", 3)
  .attr("ry", 3);

svg.selectAll("toto")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2 ) // Swap x1 and y1
  .attr("y2", center + height / 2 ) // Swap x2 and y2
  .attr("stroke", "#555");
  }

if (newTPData.length === 0 ){

svg.selectAll(".whisker-label")
  .data([(d3.quantile(data, .25)), (d3.quantile(data, .75))])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2 )
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required
}

if (newTPData.length > 0){
// Show the main horizontal line (swap x and y)

    
       svg.append("line")
      .attr("x1", x(newTPData[0]))
      .attr("x2", x(newTPData[4]))
      .attr("y1", center) // Swap y1 and x1
      .attr("y2", center) // Swap y2 and x2
      .attr("stroke", "#555")
      .attr("stroke-dasharray", "3,3");    

    svg.append("rect")
    .attr("x", x(newTPData[1])) // Assuming newData[0] is the lower bound
    .attr("y", center - height / 2 ) // Swap x and y
    .attr("width", x(newTPData[3]) - x(newTPData[1]))
    .attr("height", height)
    .attr("stroke", "#555")
    .attr("fill", "#f7b285")
    //.attr("fill-opacity", 0)
    .attr("rx", 3)
    .attr("ry", 3);

    // Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([newTPData[0], newTPData[4]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll("toto")
  .data([newTPData[2]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll(".whisker-label")
  .data([newTPData[1], newTPData[3]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([newTPData[0], newTPData[2], newTPData[4]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

}


 svg.append("line")
  .attr("x1", x(totolPopValue))
  .attr("x2", x(totolPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red") // You can choose a color for the line
  .style("stroke-width", 2);
}

/////////////////////////////////
/////// Boxplot White Pop////////
/////////////////////////////////

function drawWHBoxPlot(svg, newWHData, WHPopValue) {
        d3.select("#Boxplot_White").select("svg").remove();

        // Set the dimensions and margins of the graph
var margin = { top: 12.5, right: 20, bottom: 12.5, left: 15 },
    width = 300 - margin.left - margin.right,
    height = 45 - margin.top - margin.bottom;

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

// Initial domain values
var minDomain = 0.09733569257365707;
var maxDomain = 0.952799690935183;

// Check if newMIData[4] is smaller than 90296.8
if (newWHData.length === 0) {
 maxDomain = maxDomain;
} else if (newWHData.length !== 0) {
  maxDomain = newWHData[4];
} 

if (newWHData.length === 0) {
 minDomain = minDomain;
} else if (newWHData.length !== 0) {
  minDomain = newWHData[0];
} 

// Set up the scale with the updated domain
var x = d3.scaleLinear()
  .domain([minDomain, maxDomain])
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

//svg.call(xAxis);

var center =  10 ; // Adjust as needed
var height =  10  ; // Adjust as needed

if (newWHData.length === 0 ){

svg.append("line")
  .attr("x1", x(data[0]))
  .attr("x2", x(data[1]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("line")
  .attr("x1", x(data[3]))
  .attr("x2", x(data[4]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("rect")
  .attr("x", x(d3.quantile(data, .25)))
  .attr("y", center - height / 2 ) 
  .attr("width", x(d3.quantile(data, .75)) - x(d3.quantile(data, .25)))
  .attr("height", height ) // Swap width and height
  .attr("stroke", "#555")
  .style("fill", "#ffe1cc")
  .attr("fill-opacity", 1)
  .attr("rx", 3)
  .attr("ry", 3);

svg.selectAll("toto")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2 ) // Swap x1 and y1
  .attr("y2", center + height / 2 ) // Swap x2 and y2
  .attr("stroke", "#555");
  }

if (newWHData.length === 0){

svg.selectAll(".whisker-label")
  .data([(d3.quantile(data, .25)), (d3.quantile(data, .75))])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2 )
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required
}

if (newWHData.length > 0){
// Show the main horizontal line (swap x and y)

    
       svg.append("line")
      .attr("x1", x(newWHData[0]))
      .attr("x2", x(newWHData[4]))
      .attr("y1", center) // Swap y1 and x1
      .attr("y2", center) // Swap y2 and x2
      .attr("stroke", "#555")
      .attr("stroke-dasharray", "3,3");    

    svg.append("rect")
    .attr("x", x(newWHData[1])) // Assuming newData[0] is the lower bound
    .attr("y", center - height / 2 ) // Swap x and y
    .attr("width", x(newWHData[3]) - x(newWHData[1]))
    .attr("height", height)
    .attr("stroke", "#555")
    .attr("fill", "#f7b285")
    //.attr("fill-opacity", 0)
    .attr("rx", 3)
    .attr("ry", 3);

    // Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([newWHData[0], newWHData[4]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll("toto")
  .data([newWHData[2]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll(".whisker-label")
  .data([newWHData[1], newWHData[3]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([newWHData[0], newWHData[2], newWHData[4]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required
}

  svg.append("line")
  .attr("x1", x(WHPopValue))
  .attr("x2", x(WHPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red") // You can choose a color for the line
  .style("stroke-width", 2);
}



/////////////////////////////////
//// Black Population///////////
/////////////////////////////////   



function drawBLBoxPlot(svg, newBLData, BLPopValue) {
        d3.select("#Boxplot_Black").select("svg").remove();


 // d3.select("#Boxplot_Black").select("svg").remove();

var margin = { top: 12.5, right: 20, bottom: 12.5, left: 15 },
    width = 300 - margin.left - margin.right,
    height = 45 - margin.top - margin.bottom;

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

// Initial domain values
var maxDomain = 0.49704283711592157;

// Check if newMIData[4] is smaller than 90296.8
if (newBLData.length === 0) {
 maxDomain = maxDomain;
} else if (newBLData.length !== 0) {
  maxDomain = newBLData[4];
} 

// Set up the scale with the updated domain
var x = d3.scaleLinear()
  .domain([0, maxDomain])
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

//svg.call(xAxis);

var center =  10 ; // Adjust as needed
var height =  10  ; // Adjust as needed

if (newBLData.length === 0 ){

svg.append("line")
  .attr("x1", x(data[0]))
  .attr("x2", x(data[1]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("line")
  .attr("x1", x(data[3]))
  .attr("x2", x(data[4]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("rect")
  .attr("x", x(d3.quantile(data, .25)))
  .attr("y", center - height / 2 ) 
  .attr("width", x(d3.quantile(data, .75)) - x(d3.quantile(data, .25)))
  .attr("height", height ) // Swap width and height
  .attr("stroke", "#555")   
  .style("fill", "#ffe1cc")
  .attr("fill-opacity", 1)
  .attr("rx", 3)
  .attr("ry", 3);

svg.selectAll("toto")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2 ) // Swap x1 and y1
  .attr("y2", center + height / 2 ) // Swap x2 and y2
  .attr("stroke", "#555");
  }

if (newBLData.length === 0){

svg.selectAll(".whisker-label")
  .data([(d3.quantile(data, .25)), (d3.quantile(data, .75))])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2 )
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required
}

if (newBLData.length > 0){
// Show the main horizontal line (swap x and y)

    
       svg.append("line")
      .attr("x1", x(newBLData[0]))
      .attr("x2", x(newBLData[4]))
      .attr("y1", center) // Swap y1 and x1
      .attr("y2", center) // Swap y2 and x2
      .attr("stroke", "#555")
      .attr("stroke-dasharray", "3,3");    

    svg.append("rect")
    .attr("x", x(newBLData[1])) // Assuming newData[0] is the lower bound
    .attr("y", center - height / 2 ) // Swap x and y
    .attr("width", x(newBLData[3]) - x(newBLData[1]))
    .attr("height", height)
    .attr("stroke", "#555")
    .attr("fill", "#f7b285")
    //.attr("fill-opacity", 0)
    .attr("rx", 3)
    .attr("ry", 3);

    // Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([newBLData[0], newBLData[4]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll("toto")
  .data([newBLData[2]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll(".whisker-label")
  .data([newBLData[1], newBLData[3]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([newBLData[0], newBLData[2], newBLData[4]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

}

  svg.append("line")
  .attr("x1", x(BLPopValue))
  .attr("x2", x(BLPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red") // You can choose a color for the line
  .style("stroke-width", 2);

}


/////////////////////////////////
//// Asian Population///////////
/////////////////////////////////

function drawASBoxPlot(svg, newASData, ASPopValue) {
        d3.select("#Boxplot_Asian").select("svg").remove();

var margin = { top: 12.5, right: 20, bottom: 12.5, left: 15 },
    width = 300 - margin.left - margin.right,
    height = 45 - margin.top - margin.bottom;

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

// Initial domain values
var maxDomain = 0.10923682506051323;

// Check if newMIData[4] is smaller than 90296.8
if (newASData.length === 0) {
 maxDomain = maxDomain;
} else if (newASData.length !== 0) {
  maxDomain = newASData[4];
} 

// Set up the scale with the updated domain
var x = d3.scaleLinear()
  .domain([0, maxDomain])
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

//svg.call(xAxis);

var center =  10 ; // Adjust as needed
var height =  10  ; // Adjust as needed

if (newASData.length === 0 ){

svg.append("line")
  .attr("x1", x(data[0]))
  .attr("x2", x(data[1]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("line")
  .attr("x1", x(data[3]))
  .attr("x2", x(data[4]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("rect")
  .attr("x", x(d3.quantile(data, .25)))
  .attr("y", center - height / 2 ) 
  .attr("width", x(d3.quantile(data, .75)) - x(d3.quantile(data, .25)))
  .attr("height", height ) // Swap width and height
  .attr("stroke", "#555")
  .style("fill", "#ffe1cc")
  .attr("fill-opacity", 1)
  .attr("rx", 3)
  .attr("ry", 3);

svg.selectAll("toto")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2 ) // Swap x1 and y1
  .attr("y2", center + height / 2 ) // Swap x2 and y2
  .attr("stroke", "#555");
  }

if (newASData.length === 0){

svg.selectAll(".whisker-label")
  .data([(d3.quantile(data, .25)), (d3.quantile(data, .75))])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2 )
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required
}

if (newASData.length > 0){
// Show the main horizontal line (swap x and y)

    
       svg.append("line")
      .attr("x1", x(newASData[0]))
      .attr("x2", x(newASData[4]))
      .attr("y1", center) // Swap y1 and x1
      .attr("y2", center) // Swap y2 and x2
      .attr("stroke", "#555")
      .attr("stroke-dasharray", "3,3");    

    svg.append("rect")
    .attr("x", x(newASData[1])) // Assuming newData[0] is the lower bound
    .attr("y", center - height / 2 ) // Swap x and y
    .attr("width", x(newASData[3]) - x(newASData[1]))
    .attr("height", height)
    .attr("stroke", "#555")
    .attr("fill", "#f7b285")
    //.attr("fill-opacity", 0)
    .attr("rx", 3)
    .attr("ry", 3);

    // Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([newASData[0], newASData[4]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll("toto")
  .data([newASData[2]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll(".whisker-label")
  .data([newASData[1], newASData[3]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([newASData[0], newASData[2], newASData[4]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

}

  svg.append("line")
  .attr("x1", x(ASPopValue))
  .attr("x2", x(ASPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red") // You can choose a color for the line
  .style("stroke-width", 2);

}

/////////////////////////////////
//// Hispanic Population///////////
/////////////////////////////////

function drawHIBoxPlot(svg, newHIData, HIPopValue) {
        d3.select("#Boxplot_Hisp").select("svg").remove();

// Set the dimensions and margins of the graph
var margin = { top: 12.5, right: 20, bottom: 10, left: 12.5 },
  width = 300 - margin.left - margin.right,
  height = 45 - margin.top - margin.bottom;

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

// Initial domain values
var maxDomain = 0.49704283711592157;

// Check if newMIData[4] is smaller than 90296.8
if (newHIData.length === 0) {
 maxDomain = maxDomain;
} else if (newHIData.length !== 0) {
  maxDomain = newHIData[4];
} 

// Set up the scale with the updated domain
var x = d3.scaleLinear()
  .domain([0, maxDomain])
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

//svg.call(xAxis);

var center =  10 ; // Adjust as needed
var height =  10  ; // Adjust as needed

if (newHIData.length === 0 ){

svg.append("line")
  .attr("x1", x(data[0]))
  .attr("x2", x(data[1]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("line")
  .attr("x1", x(data[3]))
  .attr("x2", x(data[4]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("rect")
  .attr("x", x(d3.quantile(data, .25)))
  .attr("y", center - height / 2 ) 
  .attr("width", x(d3.quantile(data, .75)) - x(d3.quantile(data, .25)))
  .attr("height", height ) // Swap width and height
  .attr("stroke", "#555")
  .style("fill", "#ffe1cc")
  .attr("fill-opacity", 1)
  .attr("rx", 3)
  .attr("ry", 3);

svg.selectAll("toto")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2 ) // Swap x1 and y1
  .attr("y2", center + height / 2 ) // Swap x2 and y2
  .attr("stroke", "#555");
  }

if (newHIData.length === 0){

svg.selectAll(".whisker-label")
  .data([(d3.quantile(data, .25)), (d3.quantile(data, .75))])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2 )
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required
}

if (newHIData.length > 0){
// Show the main horizontal line (swap x and y)

    
       svg.append("line")
      .attr("x1", x(newHIData[0]))
      .attr("x2", x(newHIData[4]))
      .attr("y1", center) // Swap y1 and x1
      .attr("y2", center) // Swap y2 and x2
      .attr("stroke", "#555")
      .attr("stroke-dasharray", "3,3");    

    svg.append("rect")
    .attr("x", x(newHIData[1])) // Assuming newData[0] is the lower bound
    .attr("y", center - height / 2 ) // Swap x and y
    .attr("width", x(newHIData[3]) - x(newHIData[1]))
    .attr("height", height)
    .attr("stroke", "#555")
    .attr("fill", "#f7b285")
    //.attr("fill-opacity", 0)
    .attr("rx", 3)
    .attr("ry", 3);

    // Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([newHIData[0], newHIData[4]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll("toto")
  .data([newHIData[2]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll(".whisker-label")
  .data([newHIData[1], newHIData[3]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([newHIData[0], newHIData[2], newHIData[4]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

}

  svg.append("line")
  .attr("x1", x(HIPopValue))
  .attr("x2", x(HIPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red") // You can choose a color for the line
  .style("stroke-width", 2);

}

/////////////////////////////////
//// Other Population///////////
/////////////////////////////////


function drawOTBoxPlot(svg, newOTData, OTPopValue) {
        d3.select("#Boxplot_Other").select("svg").remove();

// Set the dimensions and margins of the graph
var margin = { top: 10, right: 20, bottom: 10, left: 15 },
  width = 300 - margin.left - margin.right,
  height = 40 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_Other")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Create dummy data
var data = [0.00889679715302491,0.0137231917122169,0.0211115020720932,0.0325522581439024,0.0491011866236629]

// Compute summary statistics used for the box:
var data_sorted = data.sort(d3.ascending)
var q1 = d3.quantile(data_sorted, .25)
var median = d3.quantile(data_sorted, .5)
var q3 = d3.quantile(data_sorted, .75)
var interQuantileRange = q3 - q1
var min = q1 - 1.5 * interQuantileRange
var max = q1 + 1.5 * interQuantileRange

// Initial domain values
var maxDomain = 0.0491011866236629;

// Check if newMIData[4] is smaller than 90296.8
if (newOTData.length === 0) {
 maxDomain = maxDomain;
} else if (newOTData.length !== 0) {
  maxDomain = newOTData[4];
} 

// Set up the scale with the updated domain
var x = d3.scaleLinear()
  .domain([0, maxDomain])
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

//svg.call(xAxis);

var center =  10 ; // Adjust as needed
var height =  10  ; // Adjust as needed

if (newOTData.length === 0 ){

svg.append("line")
  .attr("x1", x(data[0]))
  .attr("x2", x(data[1]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("line")
  .attr("x1", x(data[3]))
  .attr("x2", x(data[4]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("rect")
  .attr("x", x(d3.quantile(data, .25)))
  .attr("y", center - height / 2 ) 
  .attr("width", x(d3.quantile(data, .75)) - x(d3.quantile(data, .25)))
  .attr("height", height ) // Swap width and height
  .attr("stroke", "#555")
  .style("fill", "#ffe1cc")
  .attr("fill-opacity", 1)
  .attr("rx", 3)
  .attr("ry", 3);

svg.selectAll("toto")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2 ) // Swap x1 and y1
  .attr("y2", center + height / 2 ) // Swap x2 and y2
  .attr("stroke", "#555");
  }

if (newOTData.length === 0){

svg.selectAll(".whisker-label")
  .data([(d3.quantile(data, .25)), (d3.quantile(data, .75))])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2 )
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required
}

if (newOTData.length > 0){
// Show the main horizontal line (swap x and y)

    
       svg.append("line")
      .attr("x1", x(newOTData[0]))
      .attr("x2", x(newOTData[4]))
      .attr("y1", center) // Swap y1 and x1
      .attr("y2", center) // Swap y2 and x2
      .attr("stroke", "#555")
      .attr("stroke-dasharray", "3,3");    

    svg.append("rect")
    .attr("x", x(newOTData[1])) // Assuming newData[0] is the lower bound
    .attr("y", center - height / 2 ) // Swap x and y
    .attr("width", x(newOTData[3]) - x(newOTData[1]))
    .attr("height", height)
    .attr("stroke", "#555")
    .attr("fill", "#f7b285")
    //.attr("fill-opacity", 0)
    .attr("rx", 3)
    .attr("ry", 3);

    // Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([newOTData[0], newOTData[4]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll("toto")
  .data([newOTData[2]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll(".whisker-label")
  .data([newOTData[1], newOTData[3]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([newOTData[0], newOTData[2], newOTData[4]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

}

  svg.append("line")
  .attr("x1", x(OTPopValue))
  .attr("x2", x(OTPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red") // You can choose a color for the line
  .style("stroke-width", 2);

}

/////////////////////////////////
//// Boxplot Education///////////
/////////////////////////////////

function drawHEBoxPlot(svg, newHEData, baPercValue) {
        d3.select("#Boxplot_2").select("svg").remove();

// Set the dimensions and margins of the graph
var margin = { top: 10, right: 20, bottom: 10, left: 15 },
  width = 300 - margin.left - margin.right,
  height = 40 - margin.top - margin.bottom;

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
// Initial domain values
var maxDomain = 0.546269361;

// Check if newMIData[4] is smaller than 90296.8
if (newHEData.length === 0) {
 maxDomain = maxDomain;
} else if (newHEData.length !== 0) {
  maxDomain = newHEData[4];
} 

// Set up the scale with the updated domain
var x = d3.scaleLinear()
  .domain([0, maxDomain])
  .range([0, width]);

var formatTicks = d3.format(".1%"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

//svg.call(xAxis);

var center =  10 ; // Adjust as needed
var height =  10  ; // Adjust as needed

if (newHEData.length === 0 ){

svg.append("line")
  .attr("x1", x(data[0]))
  .attr("x2", x(data[1]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("line")
  .attr("x1", x(data[3]))
  .attr("x2", x(data[4]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("rect")
  .attr("x", x(d3.quantile(data, .25)))
  .attr("y", center - height / 2 ) 
  .attr("width", x(d3.quantile(data, .75)) - x(d3.quantile(data, .25)))
  .attr("height", height ) // Swap width and height
  .attr("stroke", "#555")
  .style("fill", "#ffe1cc")
  .attr("fill-opacity", 1)
  .attr("rx", 3)
  .attr("ry", 3);

svg.selectAll("toto")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2 ) // Swap x1 and y1
  .attr("y2", center + height / 2 ) // Swap x2 and y2
  .attr("stroke", "#555");
  }

if (newHEData.length === 0){

svg.selectAll(".whisker-label")
  .data([(d3.quantile(data, .25)), (d3.quantile(data, .75))])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2 )
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required
}

if (newHEData.length > 0){
// Show the main horizontal line (swap x and y)

    
       svg.append("line")
      .attr("x1", x(newHEData[0]))
      .attr("x2", x(newHEData[4]))
      .attr("y1", center) // Swap y1 and x1
      .attr("y2", center) // Swap y2 and x2
      .attr("stroke", "#555")
      .attr("stroke-dasharray", "3,3");    

    svg.append("rect")
    .attr("x", x(newHEData[1])) // Assuming newData[0] is the lower bound
    .attr("y", center - height / 2 ) // Swap x and y
    .attr("width", x(newHEData[3]) - x(newHEData[1]))
    .attr("height", height)
    .attr("stroke", "#555")
    .attr("fill", "#f7b285")
    //.attr("fill-opacity", 0)
    .attr("rx", 3)
    .attr("ry", 3);

    // Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([newHEData[0], newHEData[4]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll("toto")
  .data([newHEData[2]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll(".whisker-label")
  .data([newHEData[1], newHEData[3]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([newHEData[0], newHEData[2], newHEData[4]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

}



  svg.append("line")
  .attr("x1", x(baPercValue))
  .attr("x2", x(baPercValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red") // You can choose a color for the line
  .style("stroke-width", 2);  
  }

/////////////////////////////////
//////// Boxplot Income//////////
/////////////////////////////////


function drawMIBoxPlot(svg, newMIData, medianIncValue) {
        d3.select("#Boxplot_3").select("svg").remove();

// Set the dimensions and margins of the graph
var margin = { top: 10, right: 10, bottom: 10, left: 10 },
  width = 300 - margin.left - margin.right,
  height = 40 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3.select("#Boxplot_3")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

//Create dummy data
var data = [27306,36806,49375,67313,90296.8]

// Compute summary statistics used for the box:
var data_sorted = data.sort(d3.ascending)
var q1 = d3.quantile(data_sorted, .25)
var median = d3.quantile(data_sorted, .5)
var q3 = d3.quantile(data_sorted, .75)
var interQuantileRange = q3 - q1
var min = q1 - 1.5 * interQuantileRange
var max = q1 + 1.5 * interQuantileRange

// Initial domain values
var minDomain = 27306;
var maxDomain = 90296.8;

// Check if newMIData[4] is smaller than 90296.8
if (newMIData[4] > maxDomain) {
  maxDomain = newMIData[4];
}

// Check if newMIData[0] is bigger than 27306
if (newMIData[0] < minDomain) {
  minDomain = newMIData[0];
}

// Set up the scale with the updated domain
var x = d3.scaleLinear()
  .domain([minDomain, maxDomain])
  .range([0, width]);

var formatTicks = d3.format(".2s"); // Define the format function correctly

var xAxis = d3.axisBottom(x)
  .ticks(5)
  .tickFormat(function (d) {
    return formatTicks(d); // Use the correct format function
  });

//svg.call(xAxis);

var center =  10 ; // Adjust as needed
var height =  10  ; // Adjust as needed

if (newMIData.length === 0 ){

svg.append("line")
  .attr("x1", x(data[0]))
  .attr("x2", x(data[1]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("line")
  .attr("x1", x(data[3]))
  .attr("x2", x(data[4]))
  .attr("y1", center) // Swap y1 and x1
  .attr("y2", center) // Swap y2 and x2
  .attr("stroke", "#555")
  .attr("stroke-dasharray", "3,3");


svg.append("rect")
  .attr("x", x(d3.quantile(data, .25)))
  .attr("y", center - height / 2 ) 
  .attr("width", x(d3.quantile(data, .75)) - x(d3.quantile(data, .25)))
  .attr("height", height ) // Swap width and height
  .attr("stroke", "#555")
  .style("fill", "#ffe1cc")
  .attr("fill-opacity", 1)
  .attr("rx", 3)
  .attr("ry", 3);

svg.selectAll("toto")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2 ) // Swap x1 and y1
  .attr("y2", center + height / 2 ) // Swap x2 and y2
  .attr("stroke", "#555");
  }

if (newMIData.length === 0){

svg.selectAll(".whisker-label")
  .data([(d3.quantile(data, .25)), (d3.quantile(data, .75))])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2 )
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([d3.min(data), d3.median(data), d3.max(data)])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required
}

if (newMIData.length > 0){
// Show the main horizontal line (swap x and y)

    
       svg.append("line")
      .attr("x1", x(newMIData[0]))
      .attr("x2", x(newMIData[4]))
      .attr("y1", center) // Swap y1 and x1
      .attr("y2", center) // Swap y2 and x2
      .attr("stroke", "#555")
      .attr("stroke-dasharray", "3,3");    

    svg.append("rect")
    .attr("x", x(newMIData[1])) // Assuming newData[0] is the lower bound
    .attr("y", center - height / 2 ) // Swap x and y
    .attr("width", x(newMIData[3]) - x(newMIData[1]))
    .attr("height", height)
    .attr("stroke", "#555")
    .attr("fill", "#f7b285")
    //.attr("fill-opacity", 0)
    .attr("rx", 3)
    .attr("ry", 3);

    // Show median, min, and max vertical lines (swap x and y)
svg.selectAll("toto")
  .data([newMIData[0], newMIData[4]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll("toto")
  .data([newMIData[2]])
  .enter()
  .append("line")
  .attr("x1", function (d) { return x(d); })
  .attr("x2", function (d) { return x(d); })
  .attr("y1", center - height / 2) // Swap x1 and y1
  .attr("y2", center + height / 2) // Swap x2 and y2
  .attr("stroke", "#555");

  svg.selectAll(".whisker-label")
  .data([newMIData[1], newMIData[3]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center - height / 2)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

svg.selectAll(".whisker-label_below")
  .data([newMIData[0], newMIData[2], newMIData[4]])
  .enter()
  .append("text")
  .attr("x", function(d) { return x(d); })
  .attr("y", center + height * 2 + 3)
  .text(function(d) { return formatTicks(d); }) // Display the value as text
  .attr("font-family", "Lato")
  .attr("fill", "#555") // Set the text color to black
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("font-size", "9px") // Adjust font size as needed
  .attr("dy", "-0.7em"); // Fine-tune vertical position if required

}

  svg.append("line")
  .attr("x1", x(medianIncValue))
  .attr("x2", x(medianIncValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red") // You can choose a color for the line
  .style("stroke-width", 2);
}

///////////////////////////
//////////fly to///////////
///////////////////////////

// Define the URL of your hosted CSV file
const csvFileURL = 'https://gist.githubusercontent.com/acopod/35967e9183f6de7c9db49389aed36681/raw/5885128198a67c7d3000296230962f390c776a69/CBSA_latlong.csv';
const CBSA_boxplot = 'https://gist.githubusercontent.com/acopod/e8a65ad8156e9caf05625107996bd501/raw/1cb5474175a851ef84a766e9e33ae6eaadaaf443/boxplot_summary_cbsa_national.csv';
const CBSA_histogram = 'https://gist.githubusercontent.com/acopod/ad35eca551b3d3d86efe6ceb7553f94e/raw/a9f070cc22b285ad810230552e8179e3c56412ca/histogram_summary_cbsa_national.csv';
let cityName; // Declare cityName variable in a broader scope
let min_b;
newTPData = [];
newWHData = [];
newBLData = [];
newASData = [];
newHIData = [];
newOTData = [];
newHEData = [];
newMIData = [];
wHhistoRanges = [];

Papa.parse(csvFileURL, {
  download: true,
  complete: function (csvResults) {
    const csvData = csvResults.data;

    Papa.parse(CBSA_boxplot, {
      download: true,
      complete: function (boxplotResults) {
        const boxplotData = boxplotResults.data;

        Papa.parse(CBSA_histogram, {
          download: true,
          complete: function (histogramResults) {
            const histogramData = histogramResults.data;

            Papa.parse(national_histogram, {
              download: true,
              complete: function (nationalhistogramResults) {
                const nationalhistorgramData = nationalhistogramResults.data;

        // Add an event listener to the dropdown selection change
        $('#cityDropdown1').dropdown({
          onChange: function (value, text, $selectedItem) {
            cityName = text; // Assign the value to the broader-scoped variable cityName
                        // Process CSV data
            const result = csvData.find((row) => row[3] === cityName);
            $('#cityDropdown1').dropdown('hide');
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
              const result_TPboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'total_pop');

              if (result_TPboxplot) {
              var min_b = parseFloat(result_TPboxplot[1]);
              var q1_b = parseFloat(result_TPboxplot[2]);
              var median_b = parseFloat(result_TPboxplot[3]);
              var q3_b = parseFloat(result_TPboxplot[4]);
              var max_b = parseFloat(result_TPboxplot[5]);
              var newTPData = [min_b, q1_b, median_b, q3_b, max_b]

              console.log(newTPData)

              drawTPBoxPlot(svg, newTPData, totolPopValue);
            }

              const result_WHboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'white_perc');

              if (result_WHboxplot) {
              var min_b = parseFloat(result_WHboxplot[1]);
              var q1_b = parseFloat(result_WHboxplot[2]);
              var median_b = parseFloat(result_WHboxplot[3]);
              var q3_b = parseFloat(result_WHboxplot[4]);
              var max_b = parseFloat(result_WHboxplot[5]);
              var newWHData = [min_b, q1_b, median_b, q3_b, max_b]

              drawWHBoxPlot(svg, newWHData, WHPopValue);
            }

              const result_BLboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'black_perc');

              if (result_BLboxplot) {
              var min_b = parseFloat(result_BLboxplot[1]);
              var q1_b = parseFloat(result_BLboxplot[2]);
              var median_b = parseFloat(result_BLboxplot[3]);
              var q3_b = parseFloat(result_BLboxplot[4]);
              var max_b = parseFloat(result_BLboxplot[5]);
              var newBLData = [min_b, q1_b, median_b, q3_b, max_b]

              drawBLBoxPlot(svg, newBLData, BLPopValue);
            }

              const result_ASboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'asian_perc');

              if (result_ASboxplot) {
              var min_b = parseFloat(result_ASboxplot[1]);
              var q1_b = parseFloat(result_ASboxplot[2]);
              var median_b = parseFloat(result_ASboxplot[3]);
              var q3_b = parseFloat(result_ASboxplot[4]);
              var max_b = parseFloat(result_ASboxplot[5]);
              var newASData = [min_b, q1_b, median_b, q3_b, max_b]

              drawASBoxPlot(svg, newASData, ASPopValue);
            }

              const result_HIboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'hispanic_perc');

              if (result_HIboxplot) {
              var min_b = parseFloat(result_HIboxplot[1]);
              var q1_b = parseFloat(result_HIboxplot[2]);
              var median_b = parseFloat(result_HIboxplot[3]);
              var q3_b = parseFloat(result_HIboxplot[4]);
              var max_b = parseFloat(result_HIboxplot[5]);
              var newHIData = [min_b, q1_b, median_b, q3_b, max_b]

              drawHIBoxPlot(svg, newHIData, HIPopValue);
            }

              const result_OTboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'other_perc');

              if (result_OTboxplot) {
              var min_b = parseFloat(result_OTboxplot[1]);
              var q1_b = parseFloat(result_OTboxplot[2]);
              var median_b = parseFloat(result_OTboxplot[3]);
              var q3_b = parseFloat(result_OTboxplot[4]);
              var max_b = parseFloat(result_OTboxplot[5]);
              var newOTData = [min_b, q1_b, median_b, q3_b, max_b]

              drawOTBoxPlot(svg, newOTData, OTPopValue);
            }

              const result_HEboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'ba_higher_perc');

              if (result_HEboxplot) {
              var min_b = parseFloat(result_HEboxplot[1]);
              var q1_b = parseFloat(result_HEboxplot[2]);
              var median_b = parseFloat(result_HEboxplot[3]);
              var q3_b = parseFloat(result_HEboxplot[4]);
              var max_b = parseFloat(result_HEboxplot[5]);
              var newHEData = [min_b, q1_b, median_b, q3_b, max_b]

              drawHEBoxPlot(svg, newHEData, baPercValue);
            }

              const result_MIboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'median_inc');

              if (result_MIboxplot) {
              var min_b = parseFloat(result_MIboxplot[1]);
              var q1_b = parseFloat(result_MIboxplot[2]);
              var median_b = parseFloat(result_MIboxplot[3]);
              var q3_b = parseFloat(result_MIboxplot[4]);
              var max_b = parseFloat(result_MIboxplot[5]);
              var newMIData = [min_b, q1_b, median_b, q3_b, max_b]

              drawMIBoxPlot(svg, newMIData, medianIncValue);
            }

              console.log(`'${q1_b}'`);

             // Pass newData to a callback function
              updateNewTPData(newTPData);
              updateNewWHData(newWHData);
              updateNewBLData(newBLData);
              updateNewASData(newASData);
              updateNewHIData(newHIData);
              updateNewOTData(newOTData);
              updateNewHEData(newHEData);              
              updateNewMIData(newMIData);


    $('#censusDropdown1').dropdown({
      onChange: function (value, text, $selectedItem) {
        var selectedcensus = text;
        var selectedtext_translated = catDict1[selectedcensus];

        var currentZoom = map.getZoom();
        var zoomThreshold = 10;

                const result_WHhistogram = histogramData.find((row) => row[1] === cityName && row[3] === selectedtext_translated);
                const result_hitogram = nationalhistorgramData.find((row) => row[0] === selectedtext_translated);

                if (currentZoom >= zoomThreshold) {
                      var CBSAbin_0 = parseFloat(result_WHhistogram[4]);
                      var CBSAbin_1 = parseFloat(result_WHhistogram[5]);
                      var CBSAbin_2 = parseFloat(result_WHhistogram[6]);
                      var CBSAbin_3 = parseFloat(result_WHhistogram[7]);
                      var CBSAbin_4 = parseFloat(result_WHhistogram[8]);
                      var CBSAbin_5 = parseFloat(result_WHhistogram[9]);
                      var CBSAbin_6 = parseFloat(result_WHhistogram[10]);
                      var CBSAbin_7 = parseFloat(result_WHhistogram[11]);
                      var CBSAbin_8 = parseFloat(result_WHhistogram[12]);
                      var CBSAbin_0_perc = parseFloat(result_WHhistogram[13] * 100);
                      var CBSAbin_1_perc = parseFloat(result_WHhistogram[14] * 100);
                      var CBSAbin_2_perc = parseFloat(result_WHhistogram[15] * 100);
                      var CBSAbin_3_perc = parseFloat(result_WHhistogram[16] * 100);
                      var CBSAbin_4_perc = parseFloat(result_WHhistogram[17] * 100);
                      var CBSAbin_5_perc = parseFloat(result_WHhistogram[18] * 100);
                      var CBSAbin_6_perc = parseFloat(result_WHhistogram[19] * 100);
                      var CBSAbin_7_perc = parseFloat(result_WHhistogram[20] * 100);
                    
                      var newMIData = [min_b, q1_b, median_b, q3_b, max_b]

                      var CBSAbinRanges = [
                           {bin: CBSAbin_0, value: CBSAbin_0_perc},
                           {bin: CBSAbin_1, value: CBSAbin_1_perc},
                           {bin: CBSAbin_2, value: CBSAbin_2_perc},
                           {bin: CBSAbin_3, value: CBSAbin_3_perc},
                           {bin: CBSAbin_4, value: CBSAbin_4_perc},
                           {bin: CBSAbin_5, value: CBSAbin_5_perc},
                           {bin: CBSAbin_6, value: CBSAbin_6_perc},
                           {bin: CBSAbin_7, value: CBSAbin_7_perc},
                           {bin: CBSAbin_8, value: 0},]

                      drawHistogram(CBSAbinRanges);
                };

            if (currentZoom < zoomThreshold) {
      var bin_0 = parseFloat(result_hitogram[1]);
      var bin_1 = parseFloat(result_hitogram[2]);
      var bin_2 = parseFloat(result_hitogram[3]);
      var bin_3 = parseFloat(result_hitogram[4]);
      var bin_4 = parseFloat(result_hitogram[5]);
      var bin_5 = parseFloat(result_hitogram[6]);
      var bin_6 = parseFloat(result_hitogram[7]);
      var bin_7 = parseFloat(result_hitogram[8]);
      var bin_8 = parseFloat(result_hitogram[9]);
      var bin_0_perc = parseFloat(result_hitogram[10] * 100);
      var bin_1_perc = parseFloat(result_hitogram[11] * 100);
      var bin_2_perc = parseFloat(result_hitogram[12] * 100);
      var bin_3_perc = parseFloat(result_hitogram[13] * 100);
      var bin_4_perc = parseFloat(result_hitogram[14] * 100);
      var bin_5_perc = parseFloat(result_hitogram[15] * 100);
      var bin_6_perc = parseFloat(result_hitogram[16] * 100);
      var bin_7_perc = parseFloat(result_hitogram[17] * 100);


var binRanges = [
   {bin: bin_0, value: bin_0_perc},
   {bin: bin_1, value: bin_1_perc},
   {bin: bin_2, value: bin_2_perc},
   {bin: bin_3, value: bin_3_perc},
   {bin: bin_4, value: bin_4_perc},
   {bin: bin_5, value: bin_5_perc},
   {bin: bin_6, value: bin_6_perc},
   {bin: bin_7, value: bin_7_perc},
   {bin: bin_8, value: 0},

];
      drawHistogram(binRanges);}

               updatewHhistoRanges(wHhistoRanges);
               console.log(wHhistoRanges);
          
          $('#cityDropdown1').dropdown({
          onChange: function (value, text, $selectedItem) {
            cityName = text; // Assign the value to the broader-scoped variable cityName
                        // Process CSV data
            const result = csvData.find((row) => row[3] === cityName);
            $('#cityDropdown1').dropdown('hide');
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

                            };
                                          const result_TPboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'total_pop');

              if (result_TPboxplot) {
              var min_b = parseFloat(result_TPboxplot[1]);
              var q1_b = parseFloat(result_TPboxplot[2]);
              var median_b = parseFloat(result_TPboxplot[3]);
              var q3_b = parseFloat(result_TPboxplot[4]);
              var max_b = parseFloat(result_TPboxplot[5]);
              var newTPData = [min_b, q1_b, median_b, q3_b, max_b]

              drawTPBoxPlot(svg, newTPData, totolPopValue);
            }

              const result_WHboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'white_perc');

              if (result_WHboxplot) {
              var min_b = parseFloat(result_WHboxplot[1]);
              var q1_b = parseFloat(result_WHboxplot[2]);
              var median_b = parseFloat(result_WHboxplot[3]);
              var q3_b = parseFloat(result_WHboxplot[4]);
              var max_b = parseFloat(result_WHboxplot[5]);
              var newWHData = [min_b, q1_b, median_b, q3_b, max_b]

              drawWHBoxPlot(svg, newWHData, WHPopValue);
            }

              const result_BLboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'black_perc');

              if (result_BLboxplot) {
              var min_b = parseFloat(result_BLboxplot[1]);
              var q1_b = parseFloat(result_BLboxplot[2]);
              var median_b = parseFloat(result_BLboxplot[3]);
              var q3_b = parseFloat(result_BLboxplot[4]);
              var max_b = parseFloat(result_BLboxplot[5]);
              var newBLData = [min_b, q1_b, median_b, q3_b, max_b]

              drawBLBoxPlot(svg, newBLData, BLPopValue);
            }

              const result_ASboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'asian_perc');

              if (result_ASboxplot) {
              var min_b = parseFloat(result_ASboxplot[1]);
              var q1_b = parseFloat(result_ASboxplot[2]);
              var median_b = parseFloat(result_ASboxplot[3]);
              var q3_b = parseFloat(result_ASboxplot[4]);
              var max_b = parseFloat(result_ASboxplot[5]);
              var newASData = [min_b, q1_b, median_b, q3_b, max_b]

              drawASBoxPlot(svg, newASData, ASPopValue);
            }

              const result_HIboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'hispanic_perc');

              if (result_HIboxplot) {
              var min_b = parseFloat(result_HIboxplot[1]);
              var q1_b = parseFloat(result_HIboxplot[2]);
              var median_b = parseFloat(result_HIboxplot[3]);
              var q3_b = parseFloat(result_HIboxplot[4]);
              var max_b = parseFloat(result_HIboxplot[5]);
              var newHIData = [min_b, q1_b, median_b, q3_b, max_b]

              drawHIBoxPlot(svg, newHIData, HIPopValue);
            }

              const result_OTboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'other_perc');

              if (result_OTboxplot) {
              var min_b = parseFloat(result_OTboxplot[1]);
              var q1_b = parseFloat(result_OTboxplot[2]);
              var median_b = parseFloat(result_OTboxplot[3]);
              var q3_b = parseFloat(result_OTboxplot[4]);
              var max_b = parseFloat(result_OTboxplot[5]);
              var newOTData = [min_b, q1_b, median_b, q3_b, max_b]

              drawOTBoxPlot(svg, newOTData, OTPopValue);
            }

              const result_HEboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'ba_higher_perc');

              if (result_HEboxplot) {
              var min_b = parseFloat(result_HEboxplot[1]);
              var q1_b = parseFloat(result_HEboxplot[2]);
              var median_b = parseFloat(result_HEboxplot[3]);
              var q3_b = parseFloat(result_HEboxplot[4]);
              var max_b = parseFloat(result_HEboxplot[5]);
              var newHEData = [min_b, q1_b, median_b, q3_b, max_b]

              drawHEBoxPlot(svg, newHEData, baPercValue);
            }

              const result_MIboxplot = boxplotData.find((row) => row[7] === cityName && row[0] === 'median_inc');

              if (result_MIboxplot) {
              var min_b = parseFloat(result_MIboxplot[1]);
              var q1_b = parseFloat(result_MIboxplot[2]);
              var median_b = parseFloat(result_MIboxplot[3]);
              var q3_b = parseFloat(result_MIboxplot[4]);
              var max_b = parseFloat(result_MIboxplot[5]);
              var newMIData = [min_b, q1_b, median_b, q3_b, max_b]

              drawMIBoxPlot(svg, newMIData, medianIncValue);
            }

              console.log(`'${q1_b}'`);

             // Pass newData to a callback function
              updateNewTPData(newTPData);
              updateNewWHData(newWHData);
              updateNewBLData(newBLData);
              updateNewASData(newASData);
              updateNewHIData(newHIData);
              updateNewOTData(newOTData);
              updateNewHEData(newHEData);              
              updateNewMIData(newMIData);

                        const result_WHhistogram = histogramData.find((row) => row[1] === cityName && row[3] === selectedtext_translated);

                if (result_WHhistogram) {
                      var CBSAbin_0 = parseFloat(result_WHhistogram[4]);
                      var CBSAbin_1 = parseFloat(result_WHhistogram[5]);
                      var CBSAbin_2 = parseFloat(result_WHhistogram[6]);
                      var CBSAbin_3 = parseFloat(result_WHhistogram[7]);
                      var CBSAbin_4 = parseFloat(result_WHhistogram[8]);
                      var CBSAbin_5 = parseFloat(result_WHhistogram[9]);
                      var CBSAbin_6 = parseFloat(result_WHhistogram[10]);
                      var CBSAbin_7 = parseFloat(result_WHhistogram[11]);
                      var CBSAbin_8 = parseFloat(result_WHhistogram[12]);
                      var CBSAbin_0_perc = parseFloat(result_WHhistogram[13] * 100);
                      var CBSAbin_1_perc = parseFloat(result_WHhistogram[14] * 100);
                      var CBSAbin_2_perc = parseFloat(result_WHhistogram[15] * 100);
                      var CBSAbin_3_perc = parseFloat(result_WHhistogram[16] * 100);
                      var CBSAbin_4_perc = parseFloat(result_WHhistogram[17] * 100);
                      var CBSAbin_5_perc = parseFloat(result_WHhistogram[18] * 100);
                      var CBSAbin_6_perc = parseFloat(result_WHhistogram[19] * 100);
                      var CBSAbin_7_perc = parseFloat(result_WHhistogram[20] * 100);

                      var CBSAbinRanges = [
                           {bin: CBSAbin_0, value: CBSAbin_0_perc},
                           {bin: CBSAbin_1, value: CBSAbin_1_perc},
                           {bin: CBSAbin_2, value: CBSAbin_2_perc},
                           {bin: CBSAbin_3, value: CBSAbin_3_perc},
                           {bin: CBSAbin_4, value: CBSAbin_4_perc},
                           {bin: CBSAbin_5, value: CBSAbin_5_perc},
                           {bin: CBSAbin_6, value: CBSAbin_6_perc},
                           {bin: CBSAbin_7, value: CBSAbin_7_perc},
                           {bin: CBSAbin_8, value: 0},]

                            console.log(CBSAbinRanges);

                      drawHistogram(CBSAbinRanges);};
                        }
});

},
        });


               console.log(`'${CBSAbin_3}'`);
               console.log(`'${bin_7_perc}'`);



          },
        });
      },

    });
 },

     });
 },
        });
  },
});


// Callback function to receive and handle newData
function updateNewTPData(updatedData) {
  newTPData = updatedData;
}
function updateNewWHData(updatedData) {
  newWHData = updatedData;
}
function updateNewBLData(updatedData) {
  newBLData = updatedData;
}
function updateNewASData(updatedData) {
  newASData = updatedData;
}
function updateNewHIData(updatedData) {
  newHIData = updatedData;
}
function updateNewOTData(updatedData) {
  newOTData = updatedData;
}
function updateNewHEData(updatedData) {
  newHEData = updatedData;
}
function updateNewMIData(updatedData) {
  newMIData = updatedData;
}
function updatewHhistoRanges(updatedData) {
  wHhistoRanges = updatedData;
}


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////





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
      var bin_0_perc = parseFloat(result_hitogram[10] * 100);
      var bin_1_perc = parseFloat(result_hitogram[11] * 100);
      var bin_2_perc = parseFloat(result_hitogram[12] * 100);
      var bin_3_perc = parseFloat(result_hitogram[13] * 100);
      var bin_4_perc = parseFloat(result_hitogram[14] * 100);
      var bin_5_perc = parseFloat(result_hitogram[15] * 100);
      var bin_6_perc = parseFloat(result_hitogram[16] * 100);
      var bin_7_perc = parseFloat(result_hitogram[17] * 100);


var binRanges = [
   {bin: bin_0, value: bin_0_perc},
   {bin: bin_1, value: bin_1_perc},
   {bin: bin_2, value: bin_2_perc},
   {bin: bin_3, value: bin_3_perc},
   {bin: bin_4, value: bin_4_perc},
   {bin: bin_5, value: bin_5_perc},
   {bin: bin_6, value: bin_6_perc},
   {bin: bin_7, value: bin_7_perc},
   {bin: bin_8, value: 0},

];
      drawHistogram(binRanges);

    }

    updatebin_0(bin_0);
    updatebin_1(bin_1);
    updatebin_2(bin_2);
    updatebin_3(bin_3);
    updatebin_4(bin_4);
    updatebin_5(bin_5);
    updatebin_6(bin_6);
    updatebin_7(bin_7);
    updatebin_8(bin_8);
    updatebin_0_perc(bin_0_perc);
    updatebin_1_perc(bin_1_perc);
    updatebin_2_perc(bin_2_perc);
    updatebin_3_perc(bin_3_perc);
    updatebin_4_perc(bin_4_perc);
    updatebin_5_perc(bin_5_perc);
    updatebin_6_perc(bin_6_perc);
    updatebin_7_perc(bin_7_perc);

 console.log(`'${bin_0_perc}'`);
          },
        });
      },
    });


function updatebin_0(updatedData) {
  bin_0 = updatedData;
}
function updatebin_1(updatedData) {
  bin_1 = updatedData;
}
function updatebin_2(updatedData) {
  bin_2 = updatedData;
}
function updatebin_3(updatedData) {
  bin_3 = updatedData;
}
function updatebin_4(updatedData) {
  bin_4 = updatedData;
}
function updatebin_5(updatedData) {
  bin_5 = updatedData;
}
function updatebin_6(updatedData) {
  bin_6 = updatedData;
}
function updatebin_7(updatedData) {
  bin_7 = updatedData;
}
function updatebin_8(updatedData) {
  bin_8 = updatedData;
}
function updatebin_0_perc(updatedData) {
  bin_0_perc = updatedData;
}
function updatebin_1_perc(updatedData) {
  bin_1_perc = updatedData;
}

function updatebin_2_perc(updatedData) {
  bin_2_perc = updatedData;
}

function updatebin_3_perc(updatedData) {
  bin_3_perc = updatedData;
}

function updatebin_4_perc(updatedData) {
  bin_4_perc = updatedData;
}

function updatebin_5_perc(updatedData) {
  bin_5_perc = updatedData;
}

function updatebin_6_perc(updatedData) {
  bin_6_perc = updatedData;
}

function updatebin_7_perc(updatedData) {
  bin_7_perc = updatedData;
}

var ABC = [
   {bin: 1, value: 2},
   {bin: 2, value: 3},
   {bin: 3, value: 4},
   {bin: 4, value: 1},
   {bin: 5, value: 5},
   {bin: 6, value: 3},
   {bin: 8, value: 3},
   {bin: 9, value: 4},
   {bin: 10, value: 0},
]

var initialRanges = [
   {bin: 0
, value: 1.28005
},
   {bin: 0.1
, value: 11.5937504
},
   {bin: 0.2
, value: 13.4303438
},
   {bin: 0.3
, value: 16.7913234
},
   {bin: 0.4
, value: 22.2888868
},
   {bin: 0.5
, value: 22.029619
},
   {bin: 0.6
, value: 10.2403996
},
   {bin: 0.7
, value: 0.7194342
},
   {bin: 0.8
, value: 0},

];

drawHistogram(initialRanges);


function drawHistogram(data, div_score_exp) {
    // Set the dimensions and margins of the graph for the histogram
    var maxPercentage = d3.max(data, function(d) { return d.value });
    var minPercentage = d3.min(data, function(d) { return d.value });

    var tickvalue = d3.ticks(minPercentage, maxPercentage, 8);

    // Update the X axis
    x.domain([d3.min(data, function(d) { return d.bin }), d3.max(data, function(d) { return d.bin })])
    xAxis.transition().duration(1000)
        .call(d3.axisBottom(x).tickFormat(d3.format(".2f")).tickValues(data.map(range => range.bin)))

    var binWidths = [];
    for (var i = 0; i < data.length - 1; i++) {
        binWidths.push(data[i + 1].bin - data[i].bin);
    }

    // Update the Y axis
    y.domain([0, d3.max(data, function(d) { return d.value })]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y).tickFormat(d => d + "%").tickValues(tickvalue));


    // Create the u variable
    var NationalHis = histogramSvg.selectAll("rect")
        .data(data)

    var currentZoom = map.getZoom();
    var zoomThreshold = 10;

    //console.log(currentZoom);

    NationalHis
        .enter()
        .append("rect")
        .merge(NationalHis)
        .transition()
        .duration(1000)
        .attr("x", function(d) { return x(d.bin); })
        .attr("y", function(d) { return y(d.value); })
        .attr("width", 27)
        .attr("height", function(d) { return histogramHeight - y(d.value); })
        .attr("fill", function(d) {
            if (zoomThreshold > currentZoom) {
                if (d.bin <= div_score_exp && d.bin +  binWidths[0]  >= div_score_exp) {
            return "#FF474C"; // Highlight color
        } else {
            return "#ffe1cc"; // Default color
        }
            }
             else {
                if (zoomThreshold <= currentZoom) {
                if (d.bin <= div_score_exp && d.bin +  binWidths[0]  >= div_score_exp) {
            return "#FF474C"; // Highlight color
        } else {
            return "#f7b285"; // Default color
        }
            }
        }
    })
        .attr("fill-opacity", "1")
        .attr("stroke", "#555")
        .attr("rx", 5)
        .attr("ry", 5)

};
            ///// Change the opacity back
map.on('click', layerA, (e) => {
        if (e.features.length > 0) {               
if (hoveredStateId) {
                    map.setFeatureState(
                         {source: layerPopUpInfo[layerA]['source'], 
                                sourceLayer:layerPopUpInfo[layerA]['sourceLayer'],
                            id: hoveredStateId},
                        {hover: false}
                    );
                }
                hoveredStateId = e.features[0].id;
                map.setFeatureState(
                     {source: layerPopUpInfo[layerA]['source'], 
                                sourceLayer:layerPopUpInfo[layerA]['sourceLayer'],
                            id: hoveredStateId},
                    {hover: true}
                );
               /* if (hoveredStateId) {
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
                 console.log(hoveredStateId)*/


            }       
        });
       


            map.on('mouseleave',layerA, event => {
                
               
                if (hoveredStateId) {
                        map.setFeatureState(
                            {source: layerPopUpInfo[layerA]['source'], 
                                sourceLayer:layerPopUpInfo[layerA]['sourceLayer'],
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
// initialize city dropdown /////
/////////////////////////////////


var $cityDropdown = $("#cityDropdown");
$('#cityDropdown1').dropdown();

$cityDropdown.empty();
$.each(cities, function () {
$cityDropdown.append($('<div class="item" data-value="' + this + '">' + this + '</div>'));});


/////////////////////////////////
///////////// Add map ///////////
/////////////////////////////////






    let hoveredStateId = null;




function loadLayers(map) {

        const layers = map.getStyle().layers;

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


        map.addSource('tract_weekday_late_night',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekday_late_night,
        });

        map.addSource('tract_weekend_late_night',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekend_late_night,
        });

        map.addSource('tract_weekday_morning',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekday_morning,
        });

        map.addSource('tract_weekend_morning',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekdend_morning,
        });

        map.addSource('tract_weekday_afternoon',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekday_afternoon,
        });

        map.addSource('tract_weekend_afternoon',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekend_afternoon,
        });

        map.addSource('tract_weekday_evening',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekday_evening,
        });

        map.addSource('tract_weekend_evening',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekend_evening,
        });

        map.addSource('tract_weekday_late_evening',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekday_late_evening,
        });

        map.addSource('tract_weekend_late_evening',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_tract_weekend_late_evening,
        });


        map.addSource('county_weekday_late_night',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekday_late_night,
        });

        map.addSource('county_weekend_late_night',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekend_late_night,
        });

        map.addSource('county_weekday_morning',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekday_morning,
        });

        map.addSource('county_weekend_morning',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekdend_morning,
        });

        map.addSource('county_weekday_afternoon',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekday_afternoon,
        });

        map.addSource('county_weekend_afternoon',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekend_afternoon,
        });

        map.addSource('county_weekday_evening',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekday_evening,
        });

        map.addSource('county_weekend_evening',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekend_evening,
        });

        map.addSource('county_weekday_late_evening',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekday_late_evening,
        });

        map.addSource('county_weekend_late_evening',{
        type: "vector",
        url: "pmtiles://" + PMTILES_URL_county_weekend_late_evening,
        });



        map.addLayer({
                "id":"tracts",
                "source": "seg_10_13",
                "source-layer":"segregation_allfgb",
                "type": "fill",
                 'layout': {
                // Make the layer visible by default.
                'visibility': 'visible'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
                                [0.071, '#440154'],
                                [0.19, '#46327f'],
                                [.282, '#365c8d'],
                                [0.369, '#277f8e'],
                                [0.449, '#1fa288'],
                                [.524, '#4ac26d'],
                                [0.603, '#9ed93a'],
                                [0.8, '#fde725']],
                        /*stops: [[0, '#440154'],
                                [0.071, '#440154'],
                                [0.19, '#46327f'],
                                [.282, '#365c8d'],
                                [0.369, '#277f8e'],
                                [0.449, '#1fa288'],
                                [.524, '#4ac26d'],
                                [0.603, '#9ed93a'],
                                [0.8, '#fde725']],*/
                    default: 'gray',

                         },
                    'fill-opacity': 1,        
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
                "id":"tract_wdln",
                "source": "tract_weekday_late_night",
                "source-layer":"segregation_all_intervals_weekday_late_night",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);

                map.addLayer({
                "id":"tract_weln",
                "source": "tract_weekend_late_night",
                "source-layer":"segregation_all_intervals_weekend_late_night",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);

                map.addLayer({
                "id":"tract_wdm",
                "source": "tract_weekday_morning",
                "source-layer":"segregation_all_intervals_weekday_morning",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);

                map.addLayer({
                "id":"tract_wem",
                "source": "tract_weekend_morning",
                "source-layer":"segregation_all_intervals_weekend_morning",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);

                map.addLayer({
                "id":"tract_wda",
                "source": "tract_weekday_afternoon",
                "source-layer":"segregation_all_intervals_weekday_afternoon",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);

                map.addLayer({
                "id":"tract_wea",
                "source": "tract_weekend_afternoon",
                "source-layer":"segregation_all_intervals_weekend_afternoon",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);

                map.addLayer({
                "id":"tract_wde",
                "source": "tract_weekday_evening",
                "source-layer":"segregation_all_intervals_weekday_evening",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);

                map.addLayer({
                "id":"tract_wee",
                "source": "tract_weekend_evening",
                "source-layer":"segregation_all_intervals_weekend_evening",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);

                map.addLayer({
                "id":"tract_wdle",
                "source": "tract_weekday_late_evening",
                "source-layer":"segregation_all_intervals_weekday_late_evening",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);

                map.addLayer({
                "id":"tract_wele",
                "source": "tract_weekend_late_evening",
                "source-layer":"segregation_all_intervals_weekend_late_evening",
                "type": "fill",
                 'layout': {
                'visibility': 'none'
                  },
                "paint": {
                    "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                                 'fill-opacity': 1, 
                         }
                 },firstLineId);



let recordedLayerIds = [];


// Function to toggle layer visibility
function toggleLayers(layerIds) {
    const weekdayLayers = ['tract_wdle', 'tract_wdm', 'tract_wda', 'tract_wde', 'tract_wdln', 'counties_wdle', 'counties_wdm', 'counties_wda', 'counties_wde', 'counties_wdln'];
    const weekendLayers = ['tract_wele', 'tract_wem', 'tract_wea', 'tract_wee', 'tract_weln', 'counties_wele', 'counties_wem', 'counties_wea', 'counties_wee', 'counties_weln'];
    const generalLayer = ['counties', 'tracts'];

    weekdayLayers.forEach(layer => {
        if (layerIds.includes(layer)) {
            map.setLayoutProperty(layer, 'visibility', 'visible');
        } else {
            map.setLayoutProperty(layer, 'visibility', 'none');
        }
    });

    weekendLayers.forEach(layer => {
        if (layerIds.includes(layer)) {
            map.setLayoutProperty(layer, 'visibility', 'visible');
        } else {
            map.setLayoutProperty(layer, 'visibility', 'none');
        }
    });

    generalLayer.forEach(layer => {
        if (layerIds.includes(layer)) {
            map.setLayoutProperty(layer, 'visibility', 'visible');
        } else {
            map.setLayoutProperty(layer, 'visibility', 'none');
        }
    });
}

const buttons = document.querySelectorAll('.ui.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        let layerIds = [];

        // Check if the toggle is on weekday or weekend
        if (isWeekday) {
            if (buttonId === 'morningButton') {
                layerIds.push('tract_wdm', 'counties_wdm');
            } else if (buttonId === 'afternoonButton') {
                layerIds.push('tract_wda', 'counties_wda');
            } else if (buttonId === 'eveningButton') {
                layerIds.push('tract_wde', 'counties_wde');
            } else if (buttonId === 'lateEveningButton') {
                layerIds.push('tract_wdle','counties_wdle');
            } else if (buttonId === 'lateNightButton') {
                layerIds.push('tract_wdln', 'counties_wdln');
            }

        } else { // Weekend
            if (buttonId === 'morningButton') {
                layerIds.push('tract_wem', 'counties_wem');
            } else if (buttonId === 'afternoonButton') {
                layerIds.push('tract_wea', 'counties_wea');
            } else if (buttonId === 'eveningButton') {
                layerIds.push('tract_wee', 'counties_wee');
            } else if (buttonId === 'lateEveningButton') {
                layerIds.push('tract_wele', 'counties_wele');
            } else if (buttonId === 'lateNightButton') {
                layerIds.push('tract_weln', 'counties_weln');
            }
        }
        // Reset button logic
        if (buttonId === 'reset') {
            layerIds.push('tracts', 'counties'); // Add general layers
        }
        updateLayerID(layerIds);
        // Call toggleLayers function with the appropriate layer IDs
        toggleLayers(layerIds);
    });
});

function updateLayerID(updatedData) {
  newLayerID = updatedData;
  console.log(newLayerID)
}



function updateWeekdayWeekend(updatedData) {
    let togglelayerIds;
    if (updatedData === 'tract_wdm' || updatedData === 'counties_wdm') {
        togglelayerIds = ['tract_wem', 'counties_wem'];
    }
    console.log(togglelayerIds)
    toggleLayers(togglelayerIds);
}



// Get a reference to the slider element
const slider = document.getElementById('slider-1');

// Add an input event listener to the slider
slider.addEventListener('input', function() {
  // Get the slider value
  const opacityValue = parseFloat(this.value);

  // Update the fill-opacity of the layers
  map.setPaintProperty('tracts', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_wdle', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_wele', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_wdm', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_wem', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_wda', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_wea', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_wde', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_wee', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_wdln', 'fill-opacity', opacityValue);
  map.setPaintProperty('tract_weln', 'fill-opacity', opacityValue);
});

        map.addLayer({
                    "id":"counties",
                    "source": "seg_2_11",
                    "source-layer":"segregation_all_countiesfgb",
                    "type": "fill",
                    'layout': {
                    'visibility': 'visible'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);



        map.addLayer({
                    "id":"counties_wdln",
                    "source": "county_weekday_late_night",
                    "source-layer":"segregation_all_counties_intervals_weekday_late_night_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);


        map.addLayer({
                    "id":"counties_weln",
                    "source": "county_weekend_late_night",
                    "source-layer":"segregation_all_counties_intervals_weekend_late_night_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);


        map.addLayer({
                    "id":"counties_wdm",
                    "source": "county_weekday_morning",
                    "source-layer":"segregation_all_counties_intervals_weekday_morning_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);


        map.addLayer({
                    "id":"counties_wem",
                    "source": "county_weekend_morning",
                    "source-layer":"segregation_all_counties_intervals_weekend_morning_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);


        map.addLayer({
                    "id":"counties_wda",
                    "source": "county_weekday_afternoon",
                    "source-layer":"segregation_all_counties_intervals_weekday_afternoon_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);


        map.addLayer({
                    "id":"counties_wea",
                    "source": "county_weekend_afternoon",
                    "source-layer":"segregation_all_counties_intervals_weekend_afternoon_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);


        map.addLayer({
                    "id":"counties_wde",
                    "source": "county_weekday_evening",
                    "source-layer":"segregation_all_counties_intervals_weekday_evening_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);


        map.addLayer({
                    "id":"counties_wee",
                    "source": "county_weekend_evening",
                    "source-layer":"segregation_all_counties_intervals_weekend_evening_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);


        map.addLayer({
                    "id":"counties_wdle",
                    "source": "county_weekday_late_evening",
                    "source-layer":"segregation_all_counties_intervals_weekday_late_evening_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);


        map.addLayer({
                    "id":"counties_wele",
                    "source": "county_weekend_late_evening",
                    "source-layer":"segregation_all_counties_intervals_weekend_late_evening_new",
                    "type": "fill",
                    'layout': {
                    'visibility': 'none'
                      },
                    "maxzoom": 10, // Set zoom level to whatever suits your needs
                    "paint": {
                        "fill-color": {
                        property:'total_diversity_exp',
                        stops:  [[0, '#440154'],
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
                        'fill-opacity': 1,},
                      },firstLineId);



 

                map.addLayer({
                    "id":"tracts_outline",
                    "source": "seg_10_13",
                    "source-layer":"segregation_allfgb",
                    "type": "line",
                    "paint": {
                        'line-color': 'red',
                    'line-width':[
                            'case',
                            ['boolean', ['feature-state', 'hover'], false],
                            4,
                            0
                            ]
                    //  [
                    //     'interpolate',
                    //     ['linear'],
                    //     ['zoom'],
                    //     // When zoom is 10, set the line width to 0.5 units.
                    //     12, 0.5,
                    //     // When zoom is 20, set the line width to 3 units.
                    //     30, 20,
                    // ]
                                },});

        map.addLayer({
                    "id":"county_outline",
                    "source": "seg_2_11",
                    "source-layer":"segregation_all_countiesfgb",
                    "type": "line",
                    "paint": {
                        'line-color': 'red',
                    'line-width':[
                            'case',
                            ['boolean', ['feature-state', 'hover'], false],
                            4,
                            0
                            ]
                    //  [
                    //     'interpolate',
                    //     ['linear'],
                    //     ['zoom'],
                    //     // When zoom is 10, set the line width to 0.5 units.
                    //     12, 0.5,
                    //     // When zoom is 20, set the line width to 3 units.
                    //     30, 20,
                    // ]
                                },

        });


       map.addLayer({
                    "id":"county_weird",
                    "source": "seg_2_11",
                    "source-layer":"segregation_all_countiesfgb",
                    "type": "fill",
                    "maxzoom": 10,
                    "paint": {
                        'fill-color': 'red',
                    'fill-opacity': 0,
                                },

        },firstLineId);

        map.addLayer({
                "id":"tracts_weird",
                "source": "seg_10_13",
                "source-layer":"segregation_allfgb",
                "type": "fill",
                "paint": {
                    "fill-color": 'red',
                    'fill-opacity': 0,        

                }
            },firstLineId);



function changeDow(day) {
    console.log("A")
    map.setFilter('counties_intervals_layer', ['==', 'weekday', day]);
}


function changeInterval(interval) {
    map.setFilter('counties_intervals_layer', ['all', ['==', 'interval', interval], ['==', 'dow', getSelectedDow()]]);
}
    
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
            'counties_intervals_layer', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tracts', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_11_14', 'fill-color', choroplethColors[metric]
            );


            map.setPaintProperty(                
            'tract_wdle', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_wele', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_wdm', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_wem', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_wda', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_wea', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_wde', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_wee', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_wdln', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'tract_weln', 'fill-color', choroplethColors[metric]
            );



            map.setPaintProperty(                
            'counties_wdle', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'counties_wele', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'counties_wdm', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'counties_wem', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'counties_wda', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'counties_wea', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'counties_wde', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'counties_wee', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'counties_wdln', 'fill-color', choroplethColors[metric]
            );
            map.setPaintProperty(                
            'counties_weln', 'fill-color', choroplethColors[metric]
            );


            });


        $('.ui.slider').slider({
    min: 0,
    max: 1,
    start: 1,
    step: 0,
    onChange: function(value) {
        // Set the fill opacity of the layers based on the slider value
        map.setPaintProperty('counties', 'fill-opacity', value);
        map.setPaintProperty('tracts', 'fill-opacity', value);

        map.setPaintProperty('tract_wdle', 'fill-opacity', value);
        map.setPaintProperty('tract_wele', 'fill-opacity', value);
        map.setPaintProperty('tract_wdm', 'fill-opacity', value);
        map.setPaintProperty('tract_wem', 'fill-opacity', value);
        map.setPaintProperty('tract_wda', 'fill-opacity', value);
        map.setPaintProperty('tract_wea', 'fill-opacity', value);
        map.setPaintProperty('tract_wde', 'fill-opacity', value);
        map.setPaintProperty('tract_wee', 'fill-opacity', value);
        map.setPaintProperty('tract_wdln', 'fill-opacity', value);
        map.setPaintProperty('tract_weln', 'fill-opacity', value);

        map.setPaintProperty('counties_wele', 'fill-opacity', value);
        map.setPaintProperty('counties_wdle', 'fill-opacity', value);
        map.setPaintProperty('counties_wee', 'fill-opacity', value);
        map.setPaintProperty('counties_wde', 'fill-opacity', value);
        map.setPaintProperty('counties_wea', 'fill-opacity', value);
        map.setPaintProperty('counties_wda', 'fill-opacity', value);
        map.setPaintProperty('counties_wem', 'fill-opacity', value);
        map.setPaintProperty('counties_wdm', 'fill-opacity', value);
        map.setPaintProperty('counties_weln', 'fill-opacity', value);
        map.setPaintProperty('counties_wdln', 'fill-opacity', value);

    }
});


/////////////////////////////////
///////////// popup ///////////
/////////////////////////////////

        const popup = new maplibregl.Popup({
          closeButton: false,
          closeOnClick: false
        });

/*        map.on('mouseenter','segregation_allfgb',function(e){
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
*/

        const delay = 70;
        let clickedFeatureId = null;

        createPopUp(popup,'counties','county_weird',map,hoveredStateId);
        createPopUp(popup,'tracts','tracts_weird',map,hoveredStateId);

        createPopUp(popup,'counties_weln','county_weird',map,hoveredStateId);
        createPopUp(popup,'counties_wdln','county_weird',map,hoveredStateId);
        createPopUp(popup,'counties_wdm', layerB ,map,hoveredStateId);
        createPopUp(popup,'counties_wem',map,hoveredStateId);
        createPopUp(popup,'counties_wda',map,hoveredStateId);
        createPopUp(popup,'counties_wea',map,hoveredStateId);
        createPopUp(popup,'counties_wde',map,hoveredStateId);
        createPopUp(popup,'counties_wee',map,hoveredStateId);
        createPopUp(popup,'counties_wdle',map,hoveredStateId);
        createPopUp(popup,'counties_wele',map,hoveredStateId);

        createPopUp(popup,'tract_wdln',map,hoveredStateId);
        createPopUp(popup,'tract_weln',map,hoveredStateId);
        createPopUp(popup,'tract_wdm',map,hoveredStateId);
        createPopUp(popup,'tract_wem',map,hoveredStateId);
        createPopUp(popup,'tract_wda',map,hoveredStateId);
        createPopUp(popup,'tract_wea',map,hoveredStateId);
        createPopUp(popup,'tract_wde',map,hoveredStateId);
        createPopUp(popup,'tract_wee',map,hoveredStateId);
        createPopUp(popup,'tract_wdle',map,hoveredStateId);
        createPopUp(popup,'tract_wele',map,hoveredStateId);

    };


p_tract.getHeader().then(h => {
    const map = new maplibregl.Map({
        container: 'map',
        attributionControl: false,
        zoom: baseZoom,
        minZoom: 4,
        center: [-97.54593, 38.99387],
        style: 'https://api.maptiler.com/maps/5f5a5e3a-bf8e-4515-b05b-423feccaabbd/style.json?key=is6mQIv8IXor3VbmKwq8',
    });


    map.on('style.load', function() {
        loadLayers(map);

        

    });



document.getElementById('mapStyle1').addEventListener('click', function() {
    map.setStyle('https://api.maptiler.com/maps/bd3a8a99-b061-4a3a-a1c2-20d08f6ee042/style.json?key=HNi5BjBnVWZQP32PQRdv');
});

document.getElementById('mapStyle2').addEventListener('click', function() {
    map.setStyle('https://api.maptiler.com/maps/5f5a5e3a-bf8e-4515-b05b-423feccaabbd/style.json?key=is6mQIv8IXor3VbmKwq8');
});

    map.addControl(new maplibregl.NavigationControl(), 'bottom-left');
    map.addControl(new maplibregl.AttributionControl(), 'bottom-right')

    let jawgPlaces = new JawgPlaces.MapLibre({
          container: '#my-container',
          input: '#my-input',
          resultContainer: '#my-result-container',
          searchOnTyping: true,
                   transition: {
                type: 'fly',
                flySpeed: 1.2,
                flyCurve: 1.42
              },
            adminArea: {
                fillColor: 'rgba(172,59,246, 0.0)',
                outlineColor: 'rgb(172,59,246)',
                outlineWidth: '2',
                show: true,
              },
              sources: 'wof'
                })

    map.addControl(jawgPlaces,'top-right');
    jawgPlaces.attachMap(map);
    jawgPlaces.close();

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
///////////// Intro /////////////
/////////////////////////////////


window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".overlay").style.display = "block"; // Show the overlay
            document.querySelector(".popupIntro").style.display = "block";
        },
        0
    )
});

function openOverlay() {
    document.querySelector(".overlay").style.display = "block"; // Show the overlay
    document.querySelector(".popupIntro").style.display = "block";
}

// Event listener for the About button
document.querySelector("#aboutText").addEventListener("click", function(event) {
    openOverlay(); // Calls the function to open the overlay and popupIntro
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".overlay").style.display = "none"; // Hide the overlay
    document.querySelector(".popupIntro").style.display = "none";
});



$(document).ready(function() {
/////////////////////////////
///////// Page functions ////
/////////////////////////////


$('.homeIcon').on('click',function(){
    $('.dimmer').addClass('active');
})

$('.infoIcon').on('click',function(){
    $('#infoMessage').transition('fade in');
})

$('.dataIcon').on('click',function(){
    $('#dataMessage').transition('fade in');
})

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  });

});

var functions = document.getElementById('functions');
var display = false; // Use boolean instead of 0 and 1

function hideShow() {
  if (display) {
    functions.style.display = 'none';
  } else {
    functions.style.display = 'flex';
  }
  display = !display; // Toggle the boolean value
}

document.querySelector("#toggleButton").addEventListener("click", function(event) {
  hideShow();
});



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

           var x = d3.scaleLinear()
                  .range([ 0, histogramWidth ]);


            var xAxis = histogramSvg.append("g")
              .attr("transform", "translate(0," + histogramHeight + ")").attr("class", "axisWhite")


            // Initialize the Y axis
            var y = d3.scaleLinear()
              .range([ histogramHeight, 0]);
            var yAxis = histogramSvg.append("g")
              .attr("class", "axisWhite")

let isWeekday = true;

// Function to toggle between weekday and weekend
function toggleWeekend() {
    const button = document.getElementById('tgl');
    if (isWeekday) {
        button.textContent = 'Weekend';
        button.classList.add('weekend'); // Add CSS class for weekend
        button.classList.remove('weekday'); // Remove CSS class for weekday
    } else {
        button.textContent = 'Weekday';
        button.classList.add('weekday'); // Add CSS class for weekday
        button.classList.remove('weekend'); // Remove CSS class for weekend
    }
    isWeekday = !isWeekday;

function updateWeekdayWeekend(updatedData) {
    let togglelayerIds;
    if (updatedData === 'tract_wdm' || updatedData === 'counties_wdm') {
        togglelayerIds = ['tract_wem', 'counties_wem'];
    }
    console.log(togglelayerIds)
    toggleLayers(togglelayerIds);
};

  console.log(layerIds)

    updateWeekdayWeekend(updatedData);
}




