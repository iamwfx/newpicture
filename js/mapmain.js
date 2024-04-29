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

const fips_to_state = {
    "01": "AL",
    "02": "AK",
    "04": "AZ",
    "05": "AR",
    "06": "CA",
    "08": "CO",
    "09": "CT",
    "10": "DE",
    "11": "DC",
    "12": "FL",
    "13": "GA",
    "15": "HI",
    "16": "ID",
    "17": "IL",
    "18": "IN",
    "19": "IA",
    "20": "KS",
    "21": "KY",
    "22": "LA",
    "23": "ME",
    "24": "MD",
    "25": "MA",
    "26": "MI",
    "27": "MN",
    "28": "MS",
    "29": "MO",
    "30": "MT",
    "31": "NE",
    "32": "NV",
    "33": "NH",
    "34": "NJ",
    "35": "NM",
    "36": "NY",
    "37": "NC",
    "38": "ND",
    "39": "OH",
    "40": "OK",
    "41": "OR",
    "42": "PA",
    "44": "RI",
    "45": "SC",
    "46": "SD",
    "47": "TN",
    "48": "TX",
    "49": "UT",
    "50": "VT",
    "51": "VA",
    "53": "WA",
    "54": "WV",
    "55": "WI",
    "56": "WY",
    "60": "AS",
    "66": "GU",
    "69": "MP",
    "72": "PR",
    "74": "UM",
    "78": "VI"
}

fips_to_county={"01000":"Alabama",
"01001":"Autauga County",
"01003":"Baldwin County",
"01005":"Barbour County",
"01007":"Bibb County",
"01009":"Blount County",
"01011":"Bullock County",
"01013":"Butler County",
"01015":"Calhoun County",
"01017":"Chambers County",
"01019":"Cherokee County",
"01021":"Chilton County",
"01023":"Choctaw County",
"01025":"Clarke County",
"01027":"Clay County",
"01029":"Cleburne County",
"01031":"Coffee County",
"01033":"Colbert County",
"01035":"Conecuh County",
"01037":"Coosa County",
"01039":"Covington County",
"01041":"Crenshaw County",
"01043":"Cullman County",
"01045":"Dale County",
"01047":"Dallas County",
"01049":"DeKalb County",
"01051":"Elmore County",
"01053":"Escambia County",
"01055":"Etowah County",
"01057":"Fayette County",
"01059":"Franklin County",
"01061":"Geneva County",
"01063":"Greene County",
"01065":"Hale County",
"01067":"Henry County",
"01069":"Houston County",
"01071":"Jackson County",
"01073":"Jefferson County",
"01075":"Lamar County",
"01077":"Lauderdale County",
"01079":"Lawrence County",
"01081":"Lee County",
"01083":"Limestone County",
"01085":"Lowndes County",
"01087":"Macon County",
"01089":"Madison County",
"01091":"Marengo County",
"01093":"Marion County",
"01095":"Marshall County",
"01097":"Mobile County",
"01099":"Monroe County",
"01101":"Montgomery County",
"01103":"Morgan County",
"01105":"Perry County",
"01107":"Pickens County",
"01109":"Pike County",
"01111":"Randolph County",
"01113":"Russell County",
"01115":"St. Clair County",
"01117":"Shelby County",
"01119":"Sumter County",
"01121":"Talladega County",
"01123":"Tallapoosa County",
"01125":"Tuscaloosa County",
"01127":"Walker County",
"01129":"Washington County",
"01131":"Wilcox County",
"01133":"Winston County",
"02000":"Alaska",
"02013":"Aleutians East Borough",
"02016":"Aleutians West Census Area",
"02020":"Anchorage Borough",
"02050":"Bethel Census Area",
"02060":"Bristol Bay Borough",
"02068":"Denali Borough (created after 1990)",
"02070":"Dillingham Census Area",
"02090":"Fairbanks North Star Borough",
"02100":"Haines Borough",
"02110":"Juneau Borough",
"02122":"Kenai Peninsula Borough",
"02130":"Ketchikan Gateway Borough",
"02150":"Kodiak Island Borough",
"02164":"Lake and Peninsula Borough",
"02170":"Matanuska-Susitna Borough",
"02180":"Nome Census Area",
"02185":"North Slope Borough",
"02188":"Northwest Arctic Borough",
"02201":"Prince of Wales-Outer Ketchikan Census Area",
"02220":"Sitka Borough",
"02231":"Skagway-Yakutat-Angoon Census Area (1990 Census Area)",
"02232":"Skagway-Hoonah-Angoon Census Area (created after 1990)",
"02240":"Southeast Fairbanks Census Area",
"02261":"Valdez-Cordova Census Area",
"02270":"Wade Hampton Census Area",
"02280":"Wrangell-Petersburg Census Area",
"02282":"Yakutat Borough",
"02290":"Yukon-Koyukuk Census Area",
"04000":"Arizona",
"04001":"Apache County",
"04003":"Cochise County",
"04005":"Coconino County",
"04007":"Gila County",
"04009":"Graham County",
"04011":"Greenlee County",
"04012":"La Paz County",
"04013":"Maricopa County",
"04015":"Mohave County",
"04017":"Navajo County",
"04019":"Pima County",
"04021":"Pinal County",
"04023":"Santa Cruz County",
"04025":"Yavapai County",
"04027":"Yuma County",
"05000":"Arkansas",
"05001":"Arkansas County",
"05003":"Ashley County",
"05005":"Baxter County",
"05007":"Benton County",
"05009":"Boone County",
"05011":"Bradley County",
"05013":"Calhoun County",
"05015":"Carroll County",
"05017":"Chicot County",
"05019":"Clark County",
"05021":"Clay County",
"05023":"Cleburne County",
"05025":"Cleveland County",
"05027":"Columbia County",
"05029":"Conway County",
"05031":"Craighead County",
"05033":"Crawford County",
"05035":"Crittenden County",
"05037":"Cross County",
"05039":"Dallas County",
"05041":"Desha County",
"05043":"Drew County",
"05045":"Faulkner County",
"05047":"Franklin County",
"05049":"Fulton County",
"05051":"Garland County",
"05053":"Grant County",
"05055":"Greene County",
"05057":"Hempstead County",
"05059":"Hot Spring County",
"05061":"Howard County",
"05063":"Independence County",
"05065":"Izard County",
"05067":"Jackson County",
"05069":"Jefferson County",
"05071":"Johnson County",
"05073":"Lafayette County",
"05075":"Lawrence County",
"05077":"Lee County",
"05079":"Lincoln County",
"05081":"Little River County",
"05083":"Logan County",
"05085":"Lonoke County",
"05087":"Madison County",
"05089":"Marion County",
"05091":"Miller County",
"05093":"Mississippi County",
"05095":"Monroe County",
"05097":"Montgomery County",
"05099":"Nevada County",
"05101":"Newton County",
"05103":"Ouachita County",
"05105":"Perry County",
"05107":"Phillips County",
"05109":"Pike County",
"05111":"Poinsett County",
"05113":"Polk County",
"05115":"Pope County",
"05117":"Prairie County",
"05119":"Pulaski County",
"05121":"Randolph County",
"05123":"St. Francis County",
"05125":"Saline County",
"05127":"Scott County",
"05129":"Searcy County",
"05131":"Sebastian County",
"05133":"Sevier County",
"05135":"Sharp County",
"05137":"Stone County",
"05139":"Union County",
"05141":"Van Buren County",
"05143":"Washington County",
"05145":"White County",
"05147":"Woodruff County",
"05149":"Yell County",
"06000":"California",
"06001":"Alameda County",
"06003":"Alpine County",
"06005":"Amador County",
"06007":"Butte County",
"06009":"Calaveras County",
"06011":"Colusa County",
"06013":"Contra Costa County",
"06015":"Del Norte County",
"06017":"El Dorado County",
"06019":"Fresno County",
"06021":"Glenn County",
"06023":"Humboldt County",
"06025":"Imperial County",
"06027":"Inyo County",
"06029":"Kern County",
"06031":"Kings County",
"06033":"Lake County",
"06035":"Lassen County",
"06037":"Los Angeles County",
"06039":"Madera County",
"06041":"Marin County",
"06043":"Mariposa County",
"06045":"Mendocino County",
"06047":"Merced County",
"06049":"Modoc County",
"06051":"Mono County",
"06053":"Monterey County",
"06055":"Napa County",
"06057":"Nevada County",
"06059":"Orange County",
"06061":"Placer County",
"06063":"Plumas County",
"06065":"Riverside County",
"06067":"Sacramento County",
"06069":"San Benito County",
"06071":"San Bernardino County",
"06073":"San Diego County",
"06075":"San Francisco County",
"06077":"San Joaquin County",
"06079":"San Luis Obispo County",
"06081":"San Mateo County",
"06083":"Santa Barbara County",
"06085":"Santa Clara County",
"06087":"Santa Cruz County",
"06089":"Shasta County",
"06091":"Sierra County",
"06093":"Siskiyou County",
"06095":"Solano County",
"06097":"Sonoma County",
"06099":"Stanislaus County",
"06101":"Sutter County",
"06103":"Tehama County",
"06105":"Trinity County",
"06107":"Tulare County",
"06109":"Tuolumne County",
"06111":"Ventura County",
"06113":"Yolo County",
"06115":"Yuba County",
"08000":"Colorado",
"08001":"Adams County",
"08003":"Alamosa County",
"08005":"Arapahoe County",
"08007":"Archuleta County",
"08009":"Baca County",
"08011":"Bent County",
"08013":"Boulder County",
"08015":"Chaffee County",
"08017":"Cheyenne County",
"08019":"Clear Creek County",
"08021":"Conejos County",
"08023":"Costilla County",
"08025":"Crowley County",
"08027":"Custer County",
"08029":"Delta County",
"08031":"Denver County",
"08033":"Dolores County",
"08035":"Douglas County",
"08037":"Eagle County",
"08039":"Elbert County",
"08041":"El Paso County",
"08043":"Fremont County",
"08045":"Garfield County",
"08047":"Gilpin County",
"08049":"Grand County",
"08051":"Gunnison County",
"08053":"Hinsdale County",
"08055":"Huerfano County",
"08057":"Jackson County",
"08059":"Jefferson County",
"08061":"Kiowa County",
"08063":"Kit Carson County",
"08065":"Lake County",
"08067":"La Plata County",
"08069":"Larimer County",
"08071":"Las Animas County",
"08073":"Lincoln County",
"08075":"Logan County",
"08077":"Mesa County",
"08079":"Mineral County",
"08081":"Moffat County",
"08083":"Montezuma County",
"08085":"Montrose County",
"08087":"Morgan County",
"08089":"Otero County",
"08091":"Ouray County",
"08093":"Park County",
"08095":"Phillips County",
"08097":"Pitkin County",
"08099":"Prowers County",
"08101":"Pueblo County",
"08103":"Rio Blanco County",
"08105":"Rio Grande County",
"08107":"Routt County",
"08109":"Saguache County",
"08111":"San Juan County",
"08113":"San Miguel County",
"08115":"Sedgwick County",
"08117":"Summit County",
"08119":"Teller County",
"08121":"Washington County",
"08123":"Weld County",
"08125":"Yuma County",
"09000":"Connecticut",
"09001":"Fairfield County",
"09003":"Hartford County",
"09005":"Litchfield County",
"09007":"Middlesex County",
"09009":"New Haven County",
"09011":"New London County",
"09013":"Tolland County",
"09015":"Windham County",
"10000":"Delaware",
"10001":"Kent County",
"10003":"New Castle County",
"10005":"Sussex County",
"11000":"District of Columbia",
"11001":"District of Columbia",
"12000":"Florida",
"12001":"Alachua County",
"12003":"Baker County",
"12005":"Bay County",
"12007":"Bradford County",
"12009":"Brevard County",
"12011":"Broward County",
"12013":"Calhoun County",
"12015":"Charlotte County",
"12017":"Citrus County",
"12019":"Clay County",
"12021":"Collier County",
"12023":"Columbia County",
"12025":"Dade County",
"12027":"DeSoto County",
"12029":"Dixie County",
"12031":"Duval County",
"12033":"Escambia County",
"12035":"Flagler County",
"12037":"Franklin County",
"12039":"Gadsden County",
"12041":"Gilchrist County",
"12043":"Glades County",
"12045":"Gulf County",
"12047":"Hamilton County",
"12049":"Hardee County",
"12051":"Hendry County",
"12053":"Hernando County",
"12055":"Highlands County",
"12057":"Hillsborough County",
"12059":"Holmes County",
"12061":"Indian River County",
"12063":"Jackson County",
"12065":"Jefferson County",
"12067":"Lafayette County",
"12069":"Lake County",
"12071":"Lee County",
"12073":"Leon County",
"12075":"Levy County",
"12077":"Liberty County",
"12079":"Madison County",
"12081":"Manatee County",
"12083":"Marion County",
"12085":"Martin County",
"12087":"Monroe County",
"12089":"Nassau County",
"12091":"Okaloosa County",
"12093":"Okeechobee County",
"12095":"Orange County",
"12097":"Osceola County",
"12099":"Palm Beach County",
"12101":"Pasco County",
"12103":"Pinellas County",
"12105":"Polk County",
"12107":"Putnam County",
"12109":"St. Johns County",
"12111":"St. Lucie County",
"12113":"Santa Rosa County",
"12115":"Sarasota County",
"12117":"Seminole County",
"12119":"Sumter County",
"12121":"Suwannee County",
"12123":"Taylor County",
"12125":"Union County",
"12127":"Volusia County",
"12129":"Wakulla County",
"12131":"Walton County",
"12133":"Washington County",
"13000":"Georgia",
"13001":"Appling County",
"13003":"Atkinson County",
"13005":"Bacon County",
"13007":"Baker County",
"13009":"Baldwin County",
"13011":"Banks County",
"13013":"Barrow County",
"13015":"Bartow County",
"13017":"Ben Hill County",
"13019":"Berrien County",
"13021":"Bibb County",
"13023":"Bleckley County",
"13025":"Brantley County",
"13027":"Brooks County",
"13029":"Bryan County",
"13031":"Bulloch County",
"13033":"Burke County",
"13035":"Butts County",
"13037":"Calhoun County",
"13039":"Camden County",
"13043":"Candler County",
"13045":"Carroll County",
"13047":"Catoosa County",
"13049":"Charlton County",
"13051":"Chatham County",
"13053":"Chattahoochee County",
"13055":"Chattooga County",
"13057":"Cherokee County",
"13059":"Clarke County",
"13061":"Clay County",
"13063":"Clayton County",
"13065":"Clinch County",
"13067":"Cobb County",
"13069":"Coffee County",
"13071":"Colquitt County",
"13073":"Columbia County",
"13075":"Cook County",
"13077":"Coweta County",
"13079":"Crawford County",
"13081":"Crisp County",
"13083":"Dade County",
"13085":"Dawson County",
"13087":"Decatur County",
"13089":"DeKalb County",
"13091":"Dodge County",
"13093":"Dooly County",
"13095":"Dougherty County",
"13097":"Douglas County",
"13099":"Early County",
"13101":"Echols County",
"13103":"Effingham County",
"13105":"Elbert County",
"13107":"Emanuel County",
"13109":"Evans County",
"13111":"Fannin County",
"13113":"Fayette County",
"13115":"Floyd County",
"13117":"Forsyth County",
"13119":"Franklin County",
"13121":"Fulton County",
"13123":"Gilmer County",
"13125":"Glascock County",
"13127":"Glynn County",
"13129":"Gordon County",
"13131":"Grady County",
"13133":"Greene County",
"13135":"Gwinnett County",
"13137":"Habersham County",
"13139":"Hall County",
"13141":"Hancock County",
"13143":"Haralson County",
"13145":"Harris County",
"13147":"Hart County",
"13149":"Heard County",
"13151":"Henry County",
"13153":"Houston County",
"13155":"Irwin County",
"13157":"Jackson County",
"13159":"Jasper County",
"13161":"Jeff Davis County",
"13163":"Jefferson County",
"13165":"Jenkins County",
"13167":"Johnson County",
"13169":"Jones County",
"13171":"Lamar County",
"13173":"Lanier County",
"13175":"Laurens County",
"13177":"Lee County",
"13179":"Liberty County",
"13181":"Lincoln County",
"13183":"Long County",
"13185":"Lowndes County",
"13187":"Lumpkin County",
"13189":"McDuffie County",
"13191":"McIntosh County",
"13193":"Macon County",
"13195":"Madison County",
"13197":"Marion County",
"13199":"Meriwether County",
"13201":"Miller County",
"13205":"Mitchell County",
"13207":"Monroe County",
"13209":"Montgomery County",
"13211":"Morgan County",
"13213":"Murray County",
"13215":"Muscogee County",
"13217":"Newton County",
"13219":"Oconee County",
"13221":"Oglethorpe County",
"13223":"Paulding County",
"13225":"Peach County",
"13227":"Pickens County",
"13229":"Pierce County",
"13231":"Pike County",
"13233":"Polk County",
"13235":"Pulaski County",
"13237":"Putnam County",
"13239":"Quitman County",
"13241":"Rabun County",
"13243":"Randolph County",
"13245":"Richmond County",
"13247":"Rockdale County",
"13249":"Schley County",
"13251":"Screven County",
"13253":"Seminole County",
"13255":"Spalding County",
"13257":"Stephens County",
"13259":"Stewart County",
"13261":"Sumter County",
"13263":"Talbot County",
"13265":"Taliaferro County",
"13267":"Tattnall County",
"13269":"Taylor County",
"13271":"Telfair County",
"13273":"Terrell County",
"13275":"Thomas County",
"13277":"Tift County",
"13279":"Toombs County",
"13281":"Towns County",
"13283":"Treutlen County",
"13285":"Troup County",
"13287":"Turner County",
"13289":"Twiggs County",
"13291":"Union County",
"13293":"Upson County",
"13295":"Walker County",
"13297":"Walton County",
"13299":"Ware County",
"13301":"Warren County",
"13303":"Washington County",
"13305":"Wayne County",
"13307":"Webster County",
"13309":"Wheeler County",
"13311":"White County",
"13313":"Whitfield County",
"13315":"Wilcox County",
"13317":"Wilkes County",
"13319":"Wilkinson County",
"13321":"Worth County",
"15000":"Hawaii",
"15001":"Hawaii County",
"15003":"Honolulu County",
"15005":"Kalawao County",
"15007":"Kauai County",
"15009":"Maui County",
"16000":"Idaho",
"16001":"Ada County",
"16003":"Adams County",
"16005":"Bannock County",
"16007":"Bear Lake County",
"16009":"Benewah County",
"16011":"Bingham County",
"16013":"Blaine County",
"16015":"Boise County",
"16017":"Bonner County",
"16019":"Bonneville County",
"16021":"Boundary County",
"16023":"Butte County",
"16025":"Camas County",
"16027":"Canyon County",
"16029":"Caribou County",
"16031":"Cassia County",
"16033":"Clark County",
"16035":"Clearwater County",
"16037":"Custer County",
"16039":"Elmore County",
"16041":"Franklin County",
"16043":"Fremont County",
"16045":"Gem County",
"16047":"Gooding County",
"16049":"Idaho County",
"16051":"Jefferson County",
"16053":"Jerome County",
"16055":"Kootenai County",
"16057":"Latah County",
"16059":"Lemhi County",
"16061":"Lewis County",
"16063":"Lincoln County",
"16065":"Madison County",
"16067":"Minidoka County",
"16069":"Nez Perce County",
"16071":"Oneida County",
"16073":"Owyhee County",
"16075":"Payette County",
"16077":"Power County",
"16079":"Shoshone County",
"16081":"Teton County",
"16083":"Twin Falls County",
"16085":"Valley County",
"16087":"Washington County",
"17000":"Illinois",
"17001":"Adams County",
"17003":"Alexander County",
"17005":"Bond County",
"17007":"Boone County",
"17009":"Brown County",
"17011":"Bureau County",
"17013":"Calhoun County",
"17015":"Carroll County",
"17017":"Cass County",
"17019":"Champaign County",
"17021":"Christian County",
"17023":"Clark County",
"17025":"Clay County",
"17027":"Clinton County",
"17029":"Coles County",
"17031":"Cook County",
"17033":"Crawford County",
"17035":"Cumberland County",
"17037":"DeKalb County",
"17039":"De Witt County",
"17041":"Douglas County",
"17043":"DuPage County",
"17045":"Edgar County",
"17047":"Edwards County",
"17049":"Effingham County",
"17051":"Fayette County",
"17053":"Ford County",
"17055":"Franklin County",
"17057":"Fulton County",
"17059":"Gallatin County",
"17061":"Greene County",
"17063":"Grundy County",
"17065":"Hamilton County",
"17067":"Hancock County",
"17069":"Hardin County",
"17071":"Henderson County",
"17073":"Henry County",
"17075":"Iroquois County",
"17077":"Jackson County",
"17079":"Jasper County",
"17081":"Jefferson County",
"17083":"Jersey County",
"17085":"Jo Daviess County",
"17087":"Johnson County",
"17089":"Kane County",
"17091":"Kankakee County",
"17093":"Kendall County",
"17095":"Knox County",
"17097":"Lake County",
"17099":"La Salle County",
"17101":"Lawrence County",
"17103":"Lee County",
"17105":"Livingston County",
"17107":"Logan County",
"17109":"McDonough County",
"17111":"McHenry County",
"17113":"McLean County",
"17115":"Macon County",
"17117":"Macoupin County",
"17119":"Madison County",
"17121":"Marion County",
"17123":"Marshall County",
"17125":"Mason County",
"17127":"Massac County",
"17129":"Menard County",
"17131":"Mercer County",
"17133":"Monroe County",
"17135":"Montgomery County",
"17137":"Morgan County",
"17139":"Moultrie County",
"17141":"Ogle County",
"17143":"Peoria County",
"17145":"Perry County",
"17147":"Piatt County",
"17149":"Pike County",
"17151":"Pope County",
"17153":"Pulaski County",
"17155":"Putnam County",
"17157":"Randolph County",
"17159":"Richland County",
"17161":"Rock Island County",
"17163":"St. Clair County",
"17165":"Saline County",
"17167":"Sangamon County",
"17169":"Schuyler County",
"17171":"Scott County",
"17173":"Shelby County",
"17175":"Stark County",
"17177":"Stephenson County",
"17179":"Tazewell County",
"17181":"Union County",
"17183":"Vermilion County",
"17185":"Wabash County",
"17187":"Warren County",
"17189":"Washington County",
"17191":"Wayne County",
"17193":"White County",
"17195":"Whiteside County",
"17197":"Will County",
"17199":"Williamson County",
"17201":"Winnebago County",
"17203":"Woodford County",
"18000":"Indiana",
"18001":"Adams County",
"18003":"Allen County",
"18005":"Bartholomew County",
"18007":"Benton County",
"18009":"Blackford County",
"18011":"Boone County",
"18013":"Brown County",
"18015":"Carroll County",
"18017":"Cass County",
"18019":"Clark County",
"18021":"Clay County",
"18023":"Clinton County",
"18025":"Crawford County",
"18027":"Daviess County",
"18029":"Dearborn County",
"18031":"Decatur County",
"18033":"De Kalb County",
"18035":"Delaware County",
"18037":"Dubois County",
"18039":"Elkhart County",
"18041":"Fayette County",
"18043":"Floyd County",
"18045":"Fountain County",
"18047":"Franklin County",
"18049":"Fulton County",
"18051":"Gibson County",
"18053":"Grant County",
"18055":"Greene County",
"18057":"Hamilton County",
"18059":"Hancock County",
"18061":"Harrison County",
"18063":"Hendricks County",
"18065":"Henry County",
"18067":"Howard County",
"18069":"Huntington County",
"18071":"Jackson County",
"18073":"Jasper County",
"18075":"Jay County",
"18077":"Jefferson County",
"18079":"Jennings County",
"18081":"Johnson County",
"18083":"Knox County",
"18085":"Kosciusko County",
"18087":"Lagrange County",
"18089":"Lake County",
"18091":"La Porte County",
"18093":"Lawrence County",
"18095":"Madison County",
"18097":"Marion County",
"18099":"Marshall County",
"18101":"Martin County",
"18103":"Miami County",
"18105":"Monroe County",
"18107":"Montgomery County",
"18109":"Morgan County",
"18111":"Newton County",
"18113":"Noble County",
"18115":"Ohio County",
"18117":"Orange County",
"18119":"Owen County",
"18121":"Parke County",
"18123":"Perry County",
"18125":"Pike County",
"18127":"Porter County",
"18129":"Posey County",
"18131":"Pulaski County",
"18133":"Putnam County",
"18135":"Randolph County",
"18137":"Ripley County",
"18139":"Rush County",
"18141":"St. Joseph County",
"18143":"Scott County",
"18145":"Shelby County",
"18147":"Spencer County",
"18149":"Starke County",
"18151":"Steuben County",
"18153":"Sullivan County",
"18155":"Switzerland County",
"18157":"Tippecanoe County",
"18159":"Tipton County",
"18161":"Union County",
"18163":"Vanderburgh County",
"18165":"Vermillion County",
"18167":"Vigo County",
"18169":"Wabash County",
"18171":"Warren County",
"18173":"Warrick County",
"18175":"Washington County",
"18177":"Wayne County",
"18179":"Wells County",
"18181":"White County",
"18183":"Whitley County",
"19000":"Iowa",
"19001":"Adair County",
"19003":"Adams County",
"19005":"Allamakee County",
"19007":"Appanoose County",
"19009":"Audubon County",
"19011":"Benton County",
"19013":"Black Hawk County",
"19015":"Boone County",
"19017":"Bremer County",
"19019":"Buchanan County",
"19021":"Buena Vista County",
"19023":"Butler County",
"19025":"Calhoun County",
"19027":"Carroll County",
"19029":"Cass County",
"19031":"Cedar County",
"19033":"Cerro Gordo County",
"19035":"Cherokee County",
"19037":"Chickasaw County",
"19039":"Clarke County",
"19041":"Clay County",
"19043":"Clayton County",
"19045":"Clinton County",
"19047":"Crawford County",
"19049":"Dallas County",
"19051":"Davis County",
"19053":"Decatur County",
"19055":"Delaware County",
"19057":"Des Moines County",
"19059":"Dickinson County",
"19061":"Dubuque County",
"19063":"Emmet County",
"19065":"Fayette County",
"19067":"Floyd County",
"19069":"Franklin County",
"19071":"Fremont County",
"19073":"Greene County",
"19075":"Grundy County",
"19077":"Guthrie County",
"19079":"Hamilton County",
"19081":"Hancock County",
"19083":"Hardin County",
"19085":"Harrison County",
"19087":"Henry County",
"19089":"Howard County",
"19091":"Humboldt County",
"19093":"Ida County",
"19095":"Iowa County",
"19097":"Jackson County",
"19099":"Jasper County",
"19101":"Jefferson County",
"19103":"Johnson County",
"19105":"Jones County",
"19107":"Keokuk County",
"19109":"Kossuth County",
"19111":"Lee County",
"19113":"Linn County",
"19115":"Louisa County",
"19117":"Lucas County",
"19119":"Lyon County",
"19121":"Madison County",
"19123":"Mahaska County",
"19125":"Marion County",
"19127":"Marshall County",
"19129":"Mills County",
"19131":"Mitchell County",
"19133":"Monona County",
"19135":"Monroe County",
"19137":"Montgomery County",
"19139":"Muscatine County",
"19141":"O",
"19143":"Osceola County",
"19145":"Page County",
"19147":"Palo Alto County",
"19149":"Plymouth County",
"19151":"Pocahontas County",
"19153":"Polk County",
"19155":"Pottawattamie County",
"19157":"Poweshiek County",
"19159":"Ringgold County",
"19161":"Sac County",
"19163":"Scott County",
"19165":"Shelby County",
"19167":"Sioux County",
"19169":"Story County",
"19171":"Tama County",
"19173":"Taylor County",
"19175":"Union County",
"19177":"Van Buren County",
"19179":"Wapello County",
"19181":"Warren County",
"19183":"Washington County",
"19185":"Wayne County",
"19187":"Webster County",
"19189":"Winnebago County",
"19191":"Winneshiek County",
"19193":"Woodbury County",
"19195":"Worth County",
"19197":"Wright County",
"20000":"Kansas",
"20001":"Allen County",
"20003":"Anderson County",
"20005":"Atchison County",
"20007":"Barber County",
"20009":"Barton County",
"20011":"Bourbon County",
"20013":"Brown County",
"20015":"Butler County",
"20017":"Chase County",
"20019":"Chautauqua County",
"20021":"Cherokee County",
"20023":"Cheyenne County",
"20025":"Clark County",
"20027":"Clay County",
"20029":"Cloud County",
"20031":"Coffey County",
"20033":"Comanche County",
"20035":"Cowley County",
"20037":"Crawford County",
"20039":"Decatur County",
"20041":"Dickinson County",
"20043":"Doniphan County",
"20045":"Douglas County",
"20047":"Edwards County",
"20049":"Elk County",
"20051":"Ellis County",
"20053":"Ellsworth County",
"20055":"Finney County",
"20057":"Ford County",
"20059":"Franklin County",
"20061":"Geary County",
"20063":"Gove County",
"20065":"Graham County",
"20067":"Grant County",
"20069":"Gray County",
"20071":"Greeley County",
"20073":"Greenwood County",
"20075":"Hamilton County",
"20077":"Harper County",
"20079":"Harvey County",
"20081":"Haskell County",
"20083":"Hodgeman County",
"20085":"Jackson County",
"20087":"Jefferson County",
"20089":"Jewell County",
"20091":"Johnson County",
"20093":"Kearny County",
"20095":"Kingman County",
"20097":"Kiowa County",
"20099":"Labette County",
"20101":"Lane County",
"20103":"Leavenworth County",
"20105":"Lincoln County",
"20107":"Linn County",
"20109":"Logan County",
"20111":"Lyon County",
"20113":"McPherson County",
"20115":"Marion County",
"20117":"Marshall County",
"20119":"Meade County",
"20121":"Miami County",
"20123":"Mitchell County",
"20125":"Montgomery County",
"20127":"Morris County",
"20129":"Morton County",
"20131":"Nemaha County",
"20133":"Neosho County",
"20135":"Ness County",
"20137":"Norton County",
"20139":"Osage County",
"20141":"Osborne County",
"20143":"Ottawa County",
"20145":"Pawnee County",
"20147":"Phillips County",
"20149":"Pottawatomie County",
"20151":"Pratt County",
"20153":"Rawlins County",
"20155":"Reno County",
"20157":"Republic County",
"20159":"Rice County",
"20161":"Riley County",
"20163":"Rooks County",
"20165":"Rush County",
"20167":"Russell County",
"20169":"Saline County",
"20171":"Scott County",
"20173":"Sedgwick County",
"20175":"Seward County",
"20177":"Shawnee County",
"20179":"Sheridan County",
"20181":"Sherman County",
"20183":"Smith County",
"20185":"Stafford County",
"20187":"Stanton County",
"20189":"Stevens County",
"20191":"Sumner County",
"20193":"Thomas County",
"20195":"Trego County",
"20197":"Wabaunsee County",
"20199":"Wallace County",
"20201":"Washington County",
"20203":"Wichita County",
"20205":"Wilson County",
"20207":"Woodson County",
"20209":"Wyandotte County",
"21000":"Kentucky",
"21001":"Adair County",
"21003":"Allen County",
"21005":"Anderson County",
"21007":"Ballard County",
"21009":"Barren County",
"21011":"Bath County",
"21013":"Bell County",
"21015":"Boone County",
"21017":"Bourbon County",
"21019":"Boyd County",
"21021":"Boyle County",
"21023":"Bracken County",
"21025":"Breathitt County",
"21027":"Breckinridge County",
"21029":"Bullitt County",
"21031":"Butler County",
"21033":"Caldwell County",
"21035":"Calloway County",
"21037":"Campbell County",
"21039":"Carlisle County",
"21041":"Carroll County",
"21043":"Carter County",
"21045":"Casey County",
"21047":"Christian County",
"21049":"Clark County",
"21051":"Clay County",
"21053":"Clinton County",
"21055":"Crittenden County",
"21057":"Cumberland County",
"21059":"Daviess County",
"21061":"Edmonson County",
"21063":"Elliott County",
"21065":"Estill County",
"21067":"Fayette County",
"21069":"Fleming County",
"21071":"Floyd County",
"21073":"Franklin County",
"21075":"Fulton County",
"21077":"Gallatin County",
"21079":"Garrard County",
"21081":"Grant County",
"21083":"Graves County",
"21085":"Grayson County",
"21087":"Green County",
"21089":"Greenup County",
"21091":"Hancock County",
"21093":"Hardin County",
"21095":"Harlan County",
"21097":"Harrison County",
"21099":"Hart County",
"21101":"Henderson County",
"21103":"Henry County",
"21105":"Hickman County",
"21107":"Hopkins County",
"21109":"Jackson County",
"21111":"Jefferson County",
"21113":"Jessamine County",
"21115":"Johnson County",
"21117":"Kenton County",
"21119":"Knott County",
"21121":"Knox County",
"21123":"Larue County",
"21125":"Laurel County",
"21127":"Lawrence County",
"21129":"Lee County",
"21131":"Leslie County",
"21133":"Letcher County",
"21135":"Lewis County",
"21137":"Lincoln County",
"21139":"Livingston County",
"21141":"Logan County",
"21143":"Lyon County",
"21145":"McCracken County",
"21147":"McCreary County",
"21149":"McLean County",
"21151":"Madison County",
"21153":"Magoffin County",
"21155":"Marion County",
"21157":"Marshall County",
"21159":"Martin County",
"21161":"Mason County",
"21163":"Meade County",
"21165":"Menifee County",
"21167":"Mercer County",
"21169":"Metcalfe County",
"21171":"Monroe County",
"21173":"Montgomery County",
"21175":"Morgan County",
"21177":"Muhlenberg County",
"21179":"Nelson County",
"21181":"Nicholas County",
"21183":"Ohio County",
"21185":"Oldham County",
"21187":"Owen County",
"21189":"Owsley County",
"21191":"Pendleton County",
"21193":"Perry County",
"21195":"Pike County",
"21197":"Powell County",
"21199":"Pulaski County",
"21201":"Robertson County",
"21203":"Rockcastle County",
"21205":"Rowan County",
"21207":"Russell County",
"21209":"Scott County",
"21211":"Shelby County",
"21213":"Simpson County",
"21215":"Spencer County",
"21217":"Taylor County",
"21219":"Todd County",
"21221":"Trigg County",
"21223":"Trimble County",
"21225":"Union County",
"21227":"Warren County",
"21229":"Washington County",
"21231":"Wayne County",
"21233":"Webster County",
"21235":"Whitley County",
"21237":"Wolfe County",
"21239":"Woodford County",
"22000":"Louisiana",
"22001":"Acadia Parish",
"22003":"Allen Parish",
"22005":"Ascension Parish",
"22007":"Assumption Parish",
"22009":"Avoyelles Parish",
"22011":"Beauregard Parish",
"22013":"Bienville Parish",
"22015":"Bossier Parish",
"22017":"Caddo Parish",
"22019":"Calcasieu Parish",
"22021":"Caldwell Parish",
"22023":"Cameron Parish",
"22025":"Catahoula Parish",
"22027":"Claiborne Parish",
"22029":"Concordia Parish",
"22031":"De Soto Parish",
"22033":"East Baton Rouge Parish",
"22035":"East Carroll Parish",
"22037":"East Feliciana Parish",
"22039":"Evangeline Parish",
"22041":"Franklin Parish",
"22043":"Grant Parish",
"22045":"Iberia Parish",
"22047":"Iberville Parish",
"22049":"Jackson Parish",
"22051":"Jefferson Parish",
"22053":"Jefferson Davis Parish",
"22055":"Lafayette Parish",
"22057":"Lafourche Parish",
"22059":"La Salle Parish",
"22061":"Lincoln Parish",
"22063":"Livingston Parish",
"22065":"Madison Parish",
"22067":"Morehouse Parish",
"22069":"Natchitoches Parish",
"22071":"Orleans Parish",
"22073":"Ouachita Parish",
"22075":"Plaquemines Parish",
"22077":"Pointe Coupee Parish",
"22079":"Rapides Parish",
"22081":"Red River Parish",
"22083":"Richland Parish",
"22085":"Sabine Parish",
"22087":"St. Bernard Parish",
"22089":"St. Charles Parish",
"22091":"St. Helena Parish",
"22093":"St. James Parish",
"22095":"St. John the Baptist Parish",
"22097":"St. Landry Parish",
"22099":"St. Martin Parish",
"22101":"St. Mary Parish",
"22103":"St. Tammany Parish",
"22105":"Tangipahoa Parish",
"22107":"Tensas Parish",
"22109":"Terrebonne Parish",
"22111":"Union Parish",
"22113":"Vermilion Parish",
"22115":"Vernon Parish",
"22117":"Washington Parish",
"22119":"Webster Parish",
"22121":"West Baton Rouge Parish",
"22123":"West Carroll Parish",
"22125":"West Feliciana Parish",
"22127":"Winn Parish",
"23000":"Maine",
"23001":"Androscoggin County",
"23003":"Aroostook County",
"23005":"Cumberland County",
"23007":"Franklin County",
"23009":"Hancock County",
"23011":"Kennebec County",
"23013":"Knox County",
"23015":"Lincoln County",
"23017":"Oxford County",
"23019":"Penobscot County",
"23021":"Piscataquis County",
"23023":"Sagadahoc County",
"23025":"Somerset County",
"23027":"Waldo County",
"23029":"Washington County",
"23031":"York County",
"24000":"Maryland",
"24001":"Allegany County",
"24003":"Anne Arundel County",
"24005":"Baltimore County",
"24009":"Calvert County",
"24011":"Caroline County",
"24013":"Carroll County",
"24015":"Cecil County",
"24017":"Charles County",
"24019":"Dorchester County",
"24021":"Frederick County",
"24023":"Garrett County",
"24025":"Harford County",
"24027":"Howard County",
"24029":"Kent County",
"24031":"Montgomery County",
"24033":"Prince George",
"24035":"Queen Anne",
"24037":"St. Mary",
"24039":"Somerset County",
"24041":"Talbot County",
"24043":"Washington County",
"24045":"Wicomico County",
"24047":"Worcester County",
"24510":"Baltimore city",
"25000":"Massachusetts",
"25001":"Barnstable County",
"25003":"Berkshire County",
"25005":"Bristol County",
"25007":"Dukes County",
"25009":"Essex County",
"25011":"Franklin County",
"25013":"Hampden County",
"25015":"Hampshire County",
"25017":"Middlesex County",
"25019":"Nantucket County",
"25021":"Norfolk County",
"25023":"Plymouth County",
"25025":"Suffolk County",
"25027":"Worcester County",
"26000":"Michigan",
"26001":"Alcona County",
"26003":"Alger County",
"26005":"Allegan County",
"26007":"Alpena County",
"26009":"Antrim County",
"26011":"Arenac County",
"26013":"Baraga County",
"26015":"Barry County",
"26017":"Bay County",
"26019":"Benzie County",
"26021":"Berrien County",
"26023":"Branch County",
"26025":"Calhoun County",
"26027":"Cass County",
"26029":"Charlevoix County",
"26031":"Cheboygan County",
"26033":"Chippewa County",
"26035":"Clare County",
"26037":"Clinton County",
"26039":"Crawford County",
"26041":"Delta County",
"26043":"Dickinson County",
"26045":"Eaton County",
"26047":"Emmet County",
"26049":"Genesee County",
"26051":"Gladwin County",
"26053":"Gogebic County",
"26055":"Grand Traverse County",
"26057":"Gratiot County",
"26059":"Hillsdale County",
"26061":"Houghton County",
"26063":"Huron County",
"26065":"Ingham County",
"26067":"Ionia County",
"26069":"Iosco County",
"26071":"Iron County",
"26073":"Isabella County",
"26075":"Jackson County",
"26077":"Kalamazoo County",
"26079":"Kalkaska County",
"26081":"Kent County",
"26083":"Keweenaw County",
"26085":"Lake County",
"26087":"Lapeer County",
"26089":"Leelanau County",
"26091":"Lenawee County",
"26093":"Livingston County",
"26095":"Luce County",
"26097":"Mackinac County",
"26099":"Macomb County",
"26101":"Manistee County",
"26103":"Marquette County",
"26105":"Mason County",
"26107":"Mecosta County",
"26109":"Menominee County",
"26111":"Midland County",
"26113":"Missaukee County",
"26115":"Monroe County",
"26117":"Montcalm County",
"26119":"Montmorency County",
"26121":"Muskegon County",
"26123":"Newaygo County",
"26125":"Oakland County",
"26127":"Oceana County",
"26129":"Ogemaw County",
"26131":"Ontonagon County",
"26133":"Osceola County",
"26135":"Oscoda County",
"26137":"Otsego County",
"26139":"Ottawa County",
"26141":"Presque Isle County",
"26143":"Roscommon County",
"26145":"Saginaw County",
"26147":"St. Clair County",
"26149":"St. Joseph County",
"26151":"Sanilac County",
"26153":"Schoolcraft County",
"26155":"Shiawassee County",
"26157":"Tuscola County",
"26159":"Van Buren County",
"26161":"Washtenaw County",
"26163":"Wayne County",
"26165":"Wexford County",
"27000":"Minnesota",
"27001":"Aitkin County",
"27003":"Anoka County",
"27005":"Becker County",
"27007":"Beltrami County",
"27009":"Benton County",
"27011":"Big Stone County",
"27013":"Blue Earth County",
"27015":"Brown County",
"27017":"Carlton County",
"27019":"Carver County",
"27021":"Cass County",
"27023":"Chippewa County",
"27025":"Chisago County",
"27027":"Clay County",
"27029":"Clearwater County",
"27031":"Cook County",
"27033":"Cottonwood County",
"27035":"Crow Wing County",
"27037":"Dakota County",
"27039":"Dodge County",
"27041":"Douglas County",
"27043":"Faribault County",
"27045":"Fillmore County",
"27047":"Freeborn County",
"27049":"Goodhue County",
"27051":"Grant County",
"27053":"Hennepin County",
"27055":"Houston County",
"27057":"Hubbard County",
"27059":"Isanti County",
"27061":"Itasca County",
"27063":"Jackson County",
"27065":"Kanabec County",
"27067":"Kandiyohi County",
"27069":"Kittson County",
"27071":"Koochiching County",
"27073":"Lac qui Parle County",
"27075":"Lake County",
"27077":"Lake of the Woods County",
"27079":"Le Sueur County",
"27081":"Lincoln County",
"27083":"Lyon County",
"27085":"McLeod County",
"27087":"Mahnomen County",
"27089":"Marshall County",
"27091":"Martin County",
"27093":"Meeker County",
"27095":"Mille Lacs County",
"27097":"Morrison County",
"27099":"Mower County",
"27101":"Murray County",
"27103":"Nicollet County",
"27105":"Nobles County",
"27107":"Norman County",
"27109":"Olmsted County",
"27111":"Otter Tail County",
"27113":"Pennington County",
"27115":"Pine County",
"27117":"Pipestone County",
"27119":"Polk County",
"27121":"Pope County",
"27123":"Ramsey County",
"27125":"Red Lake County",
"27127":"Redwood County",
"27129":"Renville County",
"27131":"Rice County",
"27133":"Rock County",
"27135":"Roseau County",
"27137":"St. Louis County",
"27139":"Scott County",
"27141":"Sherburne County",
"27143":"Sibley County",
"27145":"Stearns County",
"27147":"Steele County",
"27149":"Stevens County",
"27151":"Swift County",
"27153":"Todd County",
"27155":"Traverse County",
"27157":"Wabasha County",
"27159":"Wadena County",
"27161":"Waseca County",
"27163":"Washington County",
"27165":"Watonwan County",
"27167":"Wilkin County",
"27169":"Winona County",
"27171":"Wright County",
"27173":"Yellow Medicine County",
"28000":"Mississippi",
"28001":"Adams County",
"28003":"Alcorn County",
"28005":"Amite County",
"28007":"Attala County",
"28009":"Benton County",
"28011":"Bolivar County",
"28013":"Calhoun County",
"28015":"Carroll County",
"28017":"Chickasaw County",
"28019":"Choctaw County",
"28021":"Claiborne County",
"28023":"Clarke County",
"28025":"Clay County",
"28027":"Coahoma County",
"28029":"Copiah County",
"28031":"Covington County",
"28033":"DeSoto County",
"28035":"Forrest County",
"28037":"Franklin County",
"28039":"George County",
"28041":"Greene County",
"28043":"Grenada County",
"28045":"Hancock County",
"28047":"Harrison County",
"28049":"Hinds County",
"28051":"Holmes County",
"28053":"Humphreys County",
"28055":"Issaquena County",
"28057":"Itawamba County",
"28059":"Jackson County",
"28061":"Jasper County",
"28063":"Jefferson County",
"28065":"Jefferson Davis County",
"28067":"Jones County",
"28069":"Kemper County",
"28071":"Lafayette County",
"28073":"Lamar County",
"28075":"Lauderdale County",
"28077":"Lawrence County",
"28079":"Leake County",
"28081":"Lee County",
"28083":"Leflore County",
"28085":"Lincoln County",
"28087":"Lowndes County",
"28089":"Madison County",
"28091":"Marion County",
"28093":"Marshall County",
"28095":"Monroe County",
"28097":"Montgomery County",
"28099":"Neshoba County",
"28101":"Newton County",
"28103":"Noxubee County",
"28105":"Oktibbeha County",
"28107":"Panola County",
"28109":"Pearl River County",
"28111":"Perry County",
"28113":"Pike County",
"28115":"Pontotoc County",
"28117":"Prentiss County",
"28119":"Quitman County",
"28121":"Rankin County",
"28123":"Scott County",
"28125":"Sharkey County",
"28127":"Simpson County",
"28129":"Smith County",
"28131":"Stone County",
"28133":"Sunflower County",
"28135":"Tallahatchie County",
"28137":"Tate County",
"28139":"Tippah County",
"28141":"Tishomingo County",
"28143":"Tunica County",
"28145":"Union County",
"28147":"Walthall County",
"28149":"Warren County",
"28151":"Washington County",
"28153":"Wayne County",
"28155":"Webster County",
"28157":"Wilkinson County",
"28159":"Winston County",
"28161":"Yalobusha County",
"28163":"Yazoo County",
"29000":"Missouri",
"29001":"Adair County",
"29003":"Andrew County",
"29005":"Atchison County",
"29007":"Audrain County",
"29009":"Barry County",
"29011":"Barton County",
"29013":"Bates County",
"29015":"Benton County",
"29017":"Bollinger County",
"29019":"Boone County",
"29021":"Buchanan County",
"29023":"Butler County",
"29025":"Caldwell County",
"29027":"Callaway County",
"29029":"Camden County",
"29031":"Cape Girardeau County",
"29033":"Carroll County",
"29035":"Carter County",
"29037":"Cass County",
"29039":"Cedar County",
"29041":"Chariton County",
"29043":"Christian County",
"29045":"Clark County",
"29047":"Clay County",
"29049":"Clinton County",
"29051":"Cole County",
"29053":"Cooper County",
"29055":"Crawford County",
"29057":"Dade County",
"29059":"Dallas County",
"29061":"Daviess County",
"29063":"DeKalb County",
"29065":"Dent County",
"29067":"Douglas County",
"29069":"Dunklin County",
"29071":"Franklin County",
"29073":"Gasconade County",
"29075":"Gentry County",
"29077":"Greene County",
"29079":"Grundy County",
"29081":"Harrison County",
"29083":"Henry County",
"29085":"Hickory County",
"29087":"Holt County",
"29089":"Howard County",
"29091":"Howell County",
"29093":"Iron County",
"29095":"Jackson County",
"29097":"Jasper County",
"29099":"Jefferson County",
"29101":"Johnson County",
"29103":"Knox County",
"29105":"Laclede County",
"29107":"Lafayette County",
"29109":"Lawrence County",
"29111":"Lewis County",
"29113":"Lincoln County",
"29115":"Linn County",
"29117":"Livingston County",
"29119":"McDonald County",
"29121":"Macon County",
"29123":"Madison County",
"29125":"Maries County",
"29127":"Marion County",
"29129":"Mercer County",
"29131":"Miller County",
"29133":"Mississippi County",
"29135":"Moniteau County",
"29137":"Monroe County",
"29139":"Montgomery County",
"29141":"Morgan County",
"29143":"New Madrid County",
"29145":"Newton County",
"29147":"Nodaway County",
"29149":"Oregon County",
"29151":"Osage County",
"29153":"Ozark County",
"29155":"Pemiscot County",
"29157":"Perry County",
"29159":"Pettis County",
"29161":"Phelps County",
"29163":"Pike County",
"29165":"Platte County",
"29167":"Polk County",
"29169":"Pulaski County",
"29171":"Putnam County",
"29173":"Ralls County",
"29175":"Randolph County",
"29177":"Ray County",
"29179":"Reynolds County",
"29181":"Ripley County",
"29183":"St. Charles County",
"29185":"St. Clair County",
"29186":"Ste. Genevieve County",
"29187":"St. Francois County",
"29189":"St. Louis County",
"29195":"Saline County",
"29197":"Schuyler County",
"29199":"Scotland County",
"29201":"Scott County",
"29203":"Shannon County",
"29205":"Shelby County",
"29207":"Stoddard County",
"29209":"Stone County",
"29211":"Sullivan County",
"29213":"Taney County",
"29215":"Texas County",
"29217":"Vernon County",
"29219":"Warren County",
"29221":"Washington County",
"29223":"Wayne County",
"29225":"Webster County",
"29227":"Worth County",
"29229":"Wright County",
"29510":"St. Louis city",
"30000":"Montana",
"30001":"Beaverhead County",
"30003":"Big Horn County",
"30005":"Blaine County",
"30007":"Broadwater County",
"30009":"Carbon County",
"30011":"Carter County",
"30013":"Cascade County",
"30015":"Chouteau County",
"30017":"Custer County",
"30019":"Daniels County",
"30021":"Dawson County",
"30023":"Deer Lodge County",
"30025":"Fallon County",
"30027":"Fergus County",
"30029":"Flathead County",
"30031":"Gallatin County",
"30033":"Garfield County",
"30035":"Glacier County",
"30037":"Golden Valley County",
"30039":"Granite County",
"30041":"Hill County",
"30043":"Jefferson County",
"30045":"Judith Basin County",
"30047":"Lake County",
"30049":"Lewis and Clark County",
"30051":"Liberty County",
"30053":"Lincoln County",
"30055":"McCone County",
"30057":"Madison County",
"30059":"Meagher County",
"30061":"Mineral County",
"30063":"Missoula County",
"30065":"Musselshell County",
"30067":"Park County",
"30069":"Petroleum County",
"30071":"Phillips County",
"30073":"Pondera County",
"30075":"Powder River County",
"30077":"Powell County",
"30079":"Prairie County",
"30081":"Ravalli County",
"30083":"Richland County",
"30085":"Roosevelt County",
"30087":"Rosebud County",
"30089":"Sanders County",
"30091":"Sheridan County",
"30093":"Silver Bow County",
"30095":"Stillwater County",
"30097":"Sweet Grass County",
"30099":"Teton County",
"30101":"Toole County",
"30103":"Treasure County",
"30105":"Valley County",
"30107":"Wheatland County",
"30109":"Wibaux County",
"30111":"Yellowstone County",
"30113":"Yellowstone National Park",
"31000":"Nebraska",
"31001":"Adams County",
"31003":"Antelope County",
"31005":"Arthur County",
"31007":"Banner County",
"31009":"Blaine County",
"31011":"Boone County",
"31013":"Box Butte County",
"31015":"Boyd County",
"31017":"Brown County",
"31019":"Buffalo County",
"31021":"Burt County",
"31023":"Butler County",
"31025":"Cass County",
"31027":"Cedar County",
"31029":"Chase County",
"31031":"Cherry County",
"31033":"Cheyenne County",
"31035":"Clay County",
"31037":"Colfax County",
"31039":"Cuming County",
"31041":"Custer County",
"31043":"Dakota County",
"31045":"Dawes County",
"31047":"Dawson County",
"31049":"Deuel County",
"31051":"Dixon County",
"31053":"Dodge County",
"31055":"Douglas County",
"31057":"Dundy County",
"31059":"Fillmore County",
"31061":"Franklin County",
"31063":"Frontier County",
"31065":"Furnas County",
"31067":"Gage County",
"31069":"Garden County",
"31071":"Garfield County",
"31073":"Gosper County",
"31075":"Grant County",
"31077":"Greeley County",
"31079":"Hall County",
"31081":"Hamilton County",
"31083":"Harlan County",
"31085":"Hayes County",
"31087":"Hitchcock County",
"31089":"Holt County",
"31091":"Hooker County",
"31093":"Howard County",
"31095":"Jefferson County",
"31097":"Johnson County",
"31099":"Kearney County",
"31101":"Keith County",
"31103":"Keya Paha County",
"31105":"Kimball County",
"31107":"Knox County",
"31109":"Lancaster County",
"31111":"Lincoln County",
"31113":"Logan County",
"31115":"Loup County",
"31117":"McPherson County",
"31119":"Madison County",
"31121":"Merrick County",
"31123":"Morrill County",
"31125":"Nance County",
"31127":"Nemaha County",
"31129":"Nuckolls County",
"31131":"Otoe County",
"31133":"Pawnee County",
"31135":"Perkins County",
"31137":"Phelps County",
"31139":"Pierce County",
"31141":"Platte County",
"31143":"Polk County",
"31145":"Red Willow County",
"31147":"Richardson County",
"31149":"Rock County",
"31151":"Saline County",
"31153":"Sarpy County",
"31155":"Saunders County",
"31157":"Scotts Bluff County",
"31159":"Seward County",
"31161":"Sheridan County",
"31163":"Sherman County",
"31165":"Sioux County",
"31167":"Stanton County",
"31169":"Thayer County",
"31171":"Thomas County",
"31173":"Thurston County",
"31175":"Valley County",
"31177":"Washington County",
"31179":"Wayne County",
"31181":"Webster County",
"31183":"Wheeler County",
"31185":"York County",
"32000":"Nevada",
"32001":"Churchill County",
"32003":"Clark County",
"32005":"Douglas County",
"32007":"Elko County",
"32009":"Esmeralda County",
"32011":"Eureka County",
"32013":"Humboldt County",
"32015":"Lander County",
"32017":"Lincoln County",
"32019":"Lyon County",
"32021":"Mineral County",
"32023":"Nye County",
"32027":"Pershing County",
"32029":"Storey County",
"32031":"Washoe County",
"32033":"White Pine County",
"32510":"Carson City",
"33000":"New Hampshire",
"33001":"Belknap County",
"33003":"Carroll County",
"33005":"Cheshire County",
"33007":"Coos County",
"33009":"Grafton County",
"33011":"Hillsborough County",
"33013":"Merrimack County",
"33015":"Rockingham County",
"33017":"Strafford County",
"33019":"Sullivan County",
"34000":"New Jersey",
"34001":"Atlantic County",
"34003":"Bergen County",
"34005":"Burlington County",
"34007":"Camden County",
"34009":"Cape May County",
"34011":"Cumberland County",
"34013":"Essex County",
"34015":"Gloucester County",
"34017":"Hudson County",
"34019":"Hunterdon County",
"34021":"Mercer County",
"34023":"Middlesex County",
"34025":"Monmouth County",
"34027":"Morris County",
"34029":"Ocean County",
"34031":"Passaic County",
"34033":"Salem County",
"34035":"Somerset County",
"34037":"Sussex County",
"34039":"Union County",
"34041":"Warren County",
"35000":"New Mexico",
"35001":"Bernalillo County",
"35003":"Catron County",
"35005":"Chaves County",
"35006":"Cibola County",
"35007":"Colfax County",
"35009":"Curry County",
"35011":"DeBaca County",
"35013":"Dona Ana County",
"35015":"Eddy County",
"35017":"Grant County",
"35019":"Guadalupe County",
"35021":"Harding County",
"35023":"Hidalgo County",
"35025":"Lea County",
"35027":"Lincoln County",
"35028":"Los Alamos County",
"35029":"Luna County",
"35031":"McKinley County",
"35033":"Mora County",
"35035":"Otero County",
"35037":"Quay County",
"35039":"Rio Arriba County",
"35041":"Roosevelt County",
"35043":"Sandoval County",
"35045":"San Juan County",
"35047":"San Miguel County",
"35049":"Santa Fe County",
"35051":"Sierra County",
"35053":"Socorro County",
"35055":"Taos County",
"35057":"Torrance County",
"35059":"Union County",
"35061":"Valencia County",
"36000":"New York",
"36001":"Albany County",
"36003":"Allegany County",
"36005":"Bronx County",
"36007":"Broome County",
"36009":"Cattaraugus County",
"36011":"Cayuga County",
"36013":"Chautauqua County",
"36015":"Chemung County",
"36017":"Chenango County",
"36019":"Clinton County",
"36021":"Columbia County",
"36023":"Cortland County",
"36025":"Delaware County",
"36027":"Dutchess County",
"36029":"Erie County",
"36031":"Essex County",
"36033":"Franklin County",
"36035":"Fulton County",
"36037":"Genesee County",
"36039":"Greene County",
"36041":"Hamilton County",
"36043":"Herkimer County",
"36045":"Jefferson County",
"36047":"Kings County",
"36049":"Lewis County",
"36051":"Livingston County",
"36053":"Madison County",
"36055":"Monroe County",
"36057":"Montgomery County",
"36059":"Nassau County",
"36061":"New York County",
"36063":"Niagara County",
"36065":"Oneida County",
"36067":"Onondaga County",
"36069":"Ontario County",
"36071":"Orange County",
"36073":"Orleans County",
"36075":"Oswego County",
"36077":"Otsego County",
"36079":"Putnam County",
"36081":"Queens County",
"36083":"Rensselaer County",
"36085":"Richmond County",
"36087":"Rockland County",
"36089":"St. Lawrence County",
"36091":"Saratoga County",
"36093":"Schenectady County",
"36095":"Schoharie County",
"36097":"Schuyler County",
"36099":"Seneca County",
"36101":"Steuben County",
"36103":"Suffolk County",
"36105":"Sullivan County",
"36107":"Tioga County",
"36109":"Tompkins County",
"36111":"Ulster County",
"36113":"Warren County",
"36115":"Washington County",
"36117":"Wayne County",
"36119":"Westchester County",
"36121":"Wyoming County",
"36123":"Yates County",
"37000":"North Carolina",
"37001":"Alamance County",
"37003":"Alexander County",
"37005":"Alleghany County",
"37007":"Anson County",
"37009":"Ashe County",
"37011":"Avery County",
"37013":"Beaufort County",
"37015":"Bertie County",
"37017":"Bladen County",
"37019":"Brunswick County",
"37021":"Buncombe County",
"37023":"Burke County",
"37025":"Cabarrus County",
"37027":"Caldwell County",
"37029":"Camden County",
"37031":"Carteret County",
"37033":"Caswell County",
"37035":"Catawba County",
"37037":"Chatham County",
"37039":"Cherokee County",
"37041":"Chowan County",
"37043":"Clay County",
"37045":"Cleveland County",
"37047":"Columbus County",
"37049":"Craven County",
"37051":"Cumberland County",
"37053":"Currituck County",
"37055":"Dare County",
"37057":"Davidson County",
"37059":"Davie County",
"37061":"Duplin County",
"37063":"Durham County",
"37065":"Edgecombe County",
"37067":"Forsyth County",
"37069":"Franklin County",
"37071":"Gaston County",
"37073":"Gates County",
"37075":"Graham County",
"37077":"Granville County",
"37079":"Greene County",
"37081":"Guilford County",
"37083":"Halifax County",
"37085":"Harnett County",
"37087":"Haywood County",
"37089":"Henderson County",
"37091":"Hertford County",
"37093":"Hoke County",
"37095":"Hyde County",
"37097":"Iredell County",
"37099":"Jackson County",
"37101":"Johnston County",
"37103":"Jones County",
"37105":"Lee County",
"37107":"Lenoir County",
"37109":"Lincoln County",
"37111":"McDowell County",
"37113":"Macon County",
"37115":"Madison County",
"37117":"Martin County",
"37119":"Mecklenburg County",
"37121":"Mitchell County",
"37123":"Montgomery County",
"37125":"Moore County",
"37127":"Nash County",
"37129":"New Hanover County",
"37131":"Northampton County",
"37133":"Onslow County",
"37135":"Orange County",
"37137":"Pamlico County",
"37139":"Pasquotank County",
"37141":"Pender County",
"37143":"Perquimans County",
"37145":"Person County",
"37147":"Pitt County",
"37149":"Polk County",
"37151":"Randolph County",
"37153":"Richmond County",
"37155":"Robeson County",
"37157":"Rockingham County",
"37159":"Rowan County",
"37161":"Rutherford County",
"37163":"Sampson County",
"37165":"Scotland County",
"37167":"Stanly County",
"37169":"Stokes County",
"37171":"Surry County",
"37173":"Swain County",
"37175":"Transylvania County",
"37177":"Tyrrell County",
"37179":"Union County",
"37181":"Vance County",
"37183":"Wake County",
"37185":"Warren County",
"37187":"Washington County",
"37189":"Watauga County",
"37191":"Wayne County",
"37193":"Wilkes County",
"37195":"Wilson County",
"37197":"Yadkin County",
"37199":"Yancey County",
"38000":"North Dakota",
"38001":"Adams County",
"38003":"Barnes County",
"38005":"Benson County",
"38007":"Billings County",
"38009":"Bottineau County",
"38011":"Bowman County",
"38013":"Burke County",
"38015":"Burleigh County",
"38017":"Cass County",
"38019":"Cavalier County",
"38021":"Dickey County",
"38023":"Divide County",
"38025":"Dunn County",
"38027":"Eddy County",
"38029":"Emmons County",
"38031":"Foster County",
"38033":"Golden Valley County",
"38035":"Grand Forks County",
"38037":"Grant County",
"38039":"Griggs County",
"38041":"Hettinger County",
"38043":"Kidder County",
"38045":"LaMoure County",
"38047":"Logan County",
"38049":"McHenry County",
"38051":"McIntosh County",
"38053":"McKenzie County",
"38055":"McLean County",
"38057":"Mercer County",
"38059":"Morton County",
"38061":"Mountrail County",
"38063":"Nelson County",
"38065":"Oliver County",
"38067":"Pembina County",
"38069":"Pierce County",
"38071":"Ramsey County",
"38073":"Ransom County",
"38075":"Renville County",
"38077":"Richland County",
"38079":"Rolette County",
"38081":"Sargent County",
"38083":"Sheridan County",
"38085":"Sioux County",
"38087":"Slope County",
"38089":"Stark County",
"38091":"Steele County",
"38093":"Stutsman County",
"38095":"Towner County",
"38097":"Traill County",
"38099":"Walsh County",
"38101":"Ward County",
"38103":"Wells County",
"38105":"Williams County",
"39000":"Ohio",
"39001":"Adams County",
"39003":"Allen County",
"39005":"Ashland County",
"39007":"Ashtabula County",
"39009":"Athens County",
"39011":"Auglaize County",
"39013":"Belmont County",
"39015":"Brown County",
"39017":"Butler County",
"39019":"Carroll County",
"39021":"Champaign County",
"39023":"Clark County",
"39025":"Clermont County",
"39027":"Clinton County",
"39029":"Columbiana County",
"39031":"Coshocton County",
"39033":"Crawford County",
"39035":"Cuyahoga County",
"39037":"Darke County",
"39039":"Defiance County",
"39041":"Delaware County",
"39043":"Erie County",
"39045":"Fairfield County",
"39047":"Fayette County",
"39049":"Franklin County",
"39051":"Fulton County",
"39053":"Gallia County",
"39055":"Geauga County",
"39057":"Greene County",
"39059":"Guernsey County",
"39061":"Hamilton County",
"39063":"Hancock County",
"39065":"Hardin County",
"39067":"Harrison County",
"39069":"Henry County",
"39071":"Highland County",
"39073":"Hocking County",
"39075":"Holmes County",
"39077":"Huron County",
"39079":"Jackson County",
"39081":"Jefferson County",
"39083":"Knox County",
"39085":"Lake County",
"39087":"Lawrence County",
"39089":"Licking County",
"39091":"Logan County",
"39093":"Lorain County",
"39095":"Lucas County",
"39097":"Madison County",
"39099":"Mahoning County",
"39101":"Marion County",
"39103":"Medina County",
"39105":"Meigs County",
"39107":"Mercer County",
"39109":"Miami County",
"39111":"Monroe County",
"39113":"Montgomery County",
"39115":"Morgan County",
"39117":"Morrow County",
"39119":"Muskingum County",
"39121":"Noble County",
"39123":"Ottawa County",
"39125":"Paulding County",
"39127":"Perry County",
"39129":"Pickaway County",
"39131":"Pike County",
"39133":"Portage County",
"39135":"Preble County",
"39137":"Putnam County",
"39139":"Richland County",
"39141":"Ross County",
"39143":"Sandusky County",
"39145":"Scioto County",
"39147":"Seneca County",
"39149":"Shelby County",
"39151":"Stark County",
"39153":"Summit County",
"39155":"Trumbull County",
"39157":"Tuscarawas County",
"39159":"Union County",
"39161":"Van Wert County",
"39163":"Vinton County",
"39165":"Warren County",
"39167":"Washington County",
"39169":"Wayne County",
"39171":"Williams County",
"39173":"Wood County",
"39175":"Wyandot County",
"40000":"Oklahoma",
"40001":"Adair County",
"40003":"Alfalfa County",
"40005":"Atoka County",
"40007":"Beaver County",
"40009":"Beckham County",
"40011":"Blaine County",
"40013":"Bryan County",
"40015":"Caddo County",
"40017":"Canadian County",
"40019":"Carter County",
"40021":"Cherokee County",
"40023":"Choctaw County",
"40025":"Cimarron County",
"40027":"Cleveland County",
"40029":"Coal County",
"40031":"Comanche County",
"40033":"Cotton County",
"40035":"Craig County",
"40037":"Creek County",
"40039":"Custer County",
"40041":"Delaware County",
"40043":"Dewey County",
"40045":"Ellis County",
"40047":"Garfield County",
"40049":"Garvin County",
"40051":"Grady County",
"40053":"Grant County",
"40055":"Greer County",
"40057":"Harmon County",
"40059":"Harper County",
"40061":"Haskell County",
"40063":"Hughes County",
"40065":"Jackson County",
"40067":"Jefferson County",
"40069":"Johnston County",
"40071":"Kay County",
"40073":"Kingfisher County",
"40075":"Kiowa County",
"40077":"Latimer County",
"40079":"Le Flore County",
"40081":"Lincoln County",
"40083":"Logan County",
"40085":"Love County",
"40087":"McClain County",
"40089":"McCurtain County",
"40091":"McIntosh County",
"40093":"Major County",
"40095":"Marshall County",
"40097":"Mayes County",
"40099":"Murray County",
"40101":"Muskogee County",
"40103":"Noble County",
"40105":"Nowata County",
"40107":"Okfuskee County",
"40109":"Oklahoma County",
"40111":"Okmulgee County",
"40113":"Osage County",
"40115":"Ottawa County",
"40117":"Pawnee County",
"40119":"Payne County",
"40121":"Pittsburg County",
"40123":"Pontotoc County",
"40125":"Pottawatomie County",
"40127":"Pushmataha County",
"40129":"Roger Mills County",
"40131":"Rogers County",
"40133":"Seminole County",
"40135":"Sequoyah County",
"40137":"Stephens County",
"40139":"Texas County",
"40141":"Tillman County",
"40143":"Tulsa County",
"40145":"Wagoner County",
"40147":"Washington County",
"40149":"Washita County",
"40151":"Woods County",
"40153":"Woodward County",
"41000":"Oregon",
"41001":"Baker County",
"41003":"Benton County",
"41005":"Clackamas County",
"41007":"Clatsop County",
"41009":"Columbia County",
"41011":"Coos County",
"41013":"Crook County",
"41015":"Curry County",
"41017":"Deschutes County",
"41019":"Douglas County",
"41021":"Gilliam County",
"41023":"Grant County",
"41025":"Harney County",
"41027":"Hood River County",
"41029":"Jackson County",
"41031":"Jefferson County",
"41033":"Josephine County",
"41035":"Klamath County",
"41037":"Lake County",
"41039":"Lane County",
"41041":"Lincoln County",
"41043":"Linn County",
"41045":"Malheur County",
"41047":"Marion County",
"41049":"Morrow County",
"41051":"Multnomah County",
"41053":"Polk County",
"41055":"Sherman County",
"41057":"Tillamook County",
"41059":"Umatilla County",
"41061":"Union County",
"41063":"Wallowa County",
"41065":"Wasco County",
"41067":"Washington County",
"41069":"Wheeler County",
"41071":"Yamhill County",
"42000":"Pennsylvania",
"42001":"Adams County",
"42003":"Allegheny County",
"42005":"Armstrong County",
"42007":"Beaver County",
"42009":"Bedford County",
"42011":"Berks County",
"42013":"Blair County",
"42015":"Bradford County",
"42017":"Bucks County",
"42019":"Butler County",
"42021":"Cambria County",
"42023":"Cameron County",
"42025":"Carbon County",
"42027":"Centre County",
"42029":"Chester County",
"42031":"Clarion County",
"42033":"Clearfield County",
"42035":"Clinton County",
"42037":"Columbia County",
"42039":"Crawford County",
"42041":"Cumberland County",
"42043":"Dauphin County",
"42045":"Delaware County",
"42047":"Elk County",
"42049":"Erie County",
"42051":"Fayette County",
"42053":"Forest County",
"42055":"Franklin County",
"42057":"Fulton County",
"42059":"Greene County",
"42061":"Huntingdon County",
"42063":"Indiana County",
"42065":"Jefferson County",
"42067":"Juniata County",
"42069":"Lackawanna County",
"42071":"Lancaster County",
"42073":"Lawrence County",
"42075":"Lebanon County",
"42077":"Lehigh County",
"42079":"Luzerne County",
"42081":"Lycoming County",
"42083":"Mc Kean County",
"42085":"Mercer County",
"42087":"Mifflin County",
"42089":"Monroe County",
"42091":"Montgomery County",
"42093":"Montour County",
"42095":"Northampton County",
"42097":"Northumberland County",
"42099":"Perry County",
"42101":"Philadelphia County",
"42103":"Pike County",
"42105":"Potter County",
"42107":"Schuylkill County",
"42109":"Snyder County",
"42111":"Somerset County",
"42113":"Sullivan County",
"42115":"Susquehanna County",
"42117":"Tioga County",
"42119":"Union County",
"42121":"Venango County",
"42123":"Warren County",
"42125":"Washington County",
"42127":"Wayne County",
"42129":"Westmoreland County",
"42131":"Wyoming County",
"42133":"York County",
"44000":"Rhode Island",
"44001":"Bristol County",
"44003":"Kent County",
"44005":"Newport County",
"44007":"Providence County",
"44009":"Washington County",
"45000":"South Carolina",
"45001":"Abbeville County",
"45003":"Aiken County",
"45005":"Allendale County",
"45007":"Anderson County",
"45009":"Bamberg County",
"45011":"Barnwell County",
"45013":"Beaufort County",
"45015":"Berkeley County",
"45017":"Calhoun County",
"45019":"Charleston County",
"45021":"Cherokee County",
"45023":"Chester County",
"45025":"Chesterfield County",
"45027":"Clarendon County",
"45029":"Colleton County",
"45031":"Darlington County",
"45033":"Dillon County",
"45035":"Dorchester County",
"45037":"Edgefield County",
"45039":"Fairfield County",
"45041":"Florence County",
"45043":"Georgetown County",
"45045":"Greenville County",
"45047":"Greenwood County",
"45049":"Hampton County",
"45051":"Horry County",
"45053":"Jasper County",
"45055":"Kershaw County",
"45057":"Lancaster County",
"45059":"Laurens County",
"45061":"Lee County",
"45063":"Lexington County",
"45065":"McCormick County",
"45067":"Marion County",
"45069":"Marlboro County",
"45071":"Newberry County",
"45073":"Oconee County",
"45075":"Orangeburg County",
"45077":"Pickens County",
"45079":"Richland County",
"45081":"Saluda County",
"45083":"Spartanburg County",
"45085":"Sumter County",
"45087":"Union County",
"45089":"Williamsburg County",
"45091":"York County",
"46000":"South Dakota",
"46003":"Aurora County",
"46005":"Beadle County",
"46007":"Bennett County",
"46009":"Bon Homme County",
"46011":"Brookings County",
"46013":"Brown County",
"46015":"Brule County",
"46017":"Buffalo County",
"46019":"Butte County",
"46021":"Campbell County",
"46023":"Charles Mix County",
"46025":"Clark County",
"46027":"Clay County",
"46029":"Codington County",
"46031":"Corson County",
"46033":"Custer County",
"46035":"Davison County",
"46037":"Day County",
"46039":"Deuel County",
"46041":"Dewey County",
"46043":"Douglas County",
"46045":"Edmunds County",
"46047":"Fall River County",
"46049":"Faulk County",
"46051":"Grant County",
"46053":"Gregory County",
"46055":"Haakon County",
"46057":"Hamlin County",
"46059":"Hand County",
"46061":"Hanson County",
"46063":"Harding County",
"46065":"Hughes County",
"46067":"Hutchinson County",
"46069":"Hyde County",
"46071":"Jackson County",
"46073":"Jerauld County",
"46075":"Jones County",
"46077":"Kingsbury County",
"46079":"Lake County",
"46081":"Lawrence County",
"46083":"Lincoln County",
"46085":"Lyman County",
"46087":"McCook County",
"46089":"McPherson County",
"46091":"Marshall County",
"46093":"Meade County",
"46095":"Mellette County",
"46097":"Miner County",
"46099":"Minnehaha County",
"46101":"Moody County",
"46103":"Pennington County",
"46105":"Perkins County",
"46107":"Potter County",
"46109":"Roberts County",
"46111":"Sanborn County",
"46113":"Shannon County",
"46115":"Spink County",
"46117":"Stanley County",
"46119":"Sully County",
"46121":"Todd County",
"46123":"Tripp County",
"46125":"Turner County",
"46127":"Union County",
"46129":"Walworth County",
"46135":"Yankton County",
"46137":"Ziebach County",
"47000":"Tennessee",
"47001":"Anderson County",
"47003":"Bedford County",
"47005":"Benton County",
"47007":"Bledsoe County",
"47009":"Blount County",
"47011":"Bradley County",
"47013":"Campbell County",
"47015":"Cannon County",
"47017":"Carroll County",
"47019":"Carter County",
"47021":"Cheatham County",
"47023":"Chester County",
"47025":"Claiborne County",
"47027":"Clay County",
"47029":"Cocke County",
"47031":"Coffee County",
"47033":"Crockett County",
"47035":"Cumberland County",
"47037":"Davidson County",
"47039":"Decatur County",
"47041":"DeKalb County",
"47043":"Dickson County",
"47045":"Dyer County",
"47047":"Fayette County",
"47049":"Fentress County",
"47051":"Franklin County",
"47053":"Gibson County",
"47055":"Giles County",
"47057":"Grainger County",
"47059":"Greene County",
"47061":"Grundy County",
"47063":"Hamblen County",
"47065":"Hamilton County",
"47067":"Hancock County",
"47069":"Hardeman County",
"47071":"Hardin County",
"47073":"Hawkins County",
"47075":"Haywood County",
"47077":"Henderson County",
"47079":"Henry County",
"47081":"Hickman County",
"47083":"Houston County",
"47085":"Humphreys County",
"47087":"Jackson County",
"47089":"Jefferson County",
"47091":"Johnson County",
"47093":"Knox County",
"47095":"Lake County",
"47097":"Lauderdale County",
"47099":"Lawrence County",
"47101":"Lewis County",
"47103":"Lincoln County",
"47105":"Loudon County",
"47107":"McMinn County",
"47109":"McNairy County",
"47111":"Macon County",
"47113":"Madison County",
"47115":"Marion County",
"47117":"Marshall County",
"47119":"Maury County",
"47121":"Meigs County",
"47123":"Monroe County",
"47125":"Montgomery County",
"47127":"Moore County",
"47129":"Morgan County",
"47131":"Obion County",
"47133":"Overton County",
"47135":"Perry County",
"47137":"Pickett County",
"47139":"Polk County",
"47141":"Putnam County",
"47143":"Rhea County",
"47145":"Roane County",
"47147":"Robertson County",
"47149":"Rutherford County",
"47151":"Scott County",
"47153":"Sequatchie County",
"47155":"Sevier County",
"47157":"Shelby County",
"47159":"Smith County",
"47161":"Stewart County",
"47163":"Sullivan County",
"47165":"Sumner County",
"47167":"Tipton County",
"47169":"Trousdale County",
"47171":"Unicoi County",
"47173":"Union County",
"47175":"Van Buren County",
"47177":"Warren County",
"47179":"Washington County",
"47181":"Wayne County",
"47183":"Weakley County",
"47185":"White County",
"47187":"Williamson County",
"47189":"Wilson County",
"48000":"Texas",
"48001":"Anderson County",
"48003":"Andrews County",
"48005":"Angelina County",
"48007":"Aransas County",
"48009":"Archer County",
"48011":"Armstrong County",
"48013":"Atascosa County",
"48015":"Austin County",
"48017":"Bailey County",
"48019":"Bandera County",
"48021":"Bastrop County",
"48023":"Baylor County",
"48025":"Bee County",
"48027":"Bell County",
"48029":"Bexar County",
"48031":"Blanco County",
"48033":"Borden County",
"48035":"Bosque County",
"48037":"Bowie County",
"48039":"Brazoria County",
"48041":"Brazos County",
"48043":"Brewster County",
"48045":"Briscoe County",
"48047":"Brooks County",
"48049":"Brown County",
"48051":"Burleson County",
"48053":"Burnet County",
"48055":"Caldwell County",
"48057":"Calhoun County",
"48059":"Callahan County",
"48061":"Cameron County",
"48063":"Camp County",
"48065":"Carson County",
"48067":"Cass County",
"48069":"Castro County",
"48071":"Chambers County",
"48073":"Cherokee County",
"48075":"Childress County",
"48077":"Clay County",
"48079":"Cochran County",
"48081":"Coke County",
"48083":"Coleman County",
"48085":"Collin County",
"48087":"Collingsworth County",
"48089":"Colorado County",
"48091":"Comal County",
"48093":"Comanche County",
"48095":"Concho County",
"48097":"Cooke County",
"48099":"Coryell County",
"48101":"Cottle County",
"48103":"Crane County",
"48105":"Crockett County",
"48107":"Crosby County",
"48109":"Culberson County",
"48111":"Dallam County",
"48113":"Dallas County",
"48115":"Dawson County",
"48117":"Deaf Smith County",
"48119":"Delta County",
"48121":"Denton County",
"48123":"DeWitt County",
"48125":"Dickens County",
"48127":"Dimmit County",
"48129":"Donley County",
"48131":"Duval County",
"48133":"Eastland County",
"48135":"Ector County",
"48137":"Edwards County",
"48139":"Ellis County",
"48141":"El Paso County",
"48143":"Erath County",
"48145":"Falls County",
"48147":"Fannin County",
"48149":"Fayette County",
"48151":"Fisher County",
"48153":"Floyd County",
"48155":"Foard County",
"48157":"Fort Bend County",
"48159":"Franklin County",
"48161":"Freestone County",
"48163":"Frio County",
"48165":"Gaines County",
"48167":"Galveston County",
"48169":"Garza County",
"48171":"Gillespie County",
"48173":"Glasscock County",
"48175":"Goliad County",
"48177":"Gonzales County",
"48179":"Gray County",
"48181":"Grayson County",
"48183":"Gregg County",
"48185":"Grimes County",
"48187":"Guadalupe County",
"48189":"Hale County",
"48191":"Hall County",
"48193":"Hamilton County",
"48195":"Hansford County",
"48197":"Hardeman County",
"48199":"Hardin County",
"48201":"Harris County",
"48203":"Harrison County",
"48205":"Hartley County",
"48207":"Haskell County",
"48209":"Hays County",
"48211":"Hemphill County",
"48213":"Henderson County",
"48215":"Hidalgo County",
"48217":"Hill County",
"48219":"Hockley County",
"48221":"Hood County",
"48223":"Hopkins County",
"48225":"Houston County",
"48227":"Howard County",
"48229":"Hudspeth County",
"48231":"Hunt County",
"48233":"Hutchinson County",
"48235":"Irion County",
"48237":"Jack County",
"48239":"Jackson County",
"48241":"Jasper County",
"48243":"Jeff Davis County",
"48245":"Jefferson County",
"48247":"Jim Hogg County",
"48249":"Jim Wells County",
"48251":"Johnson County",
"48253":"Jones County",
"48255":"Karnes County",
"48257":"Kaufman County",
"48259":"Kendall County",
"48261":"Kenedy County",
"48263":"Kent County",
"48265":"Kerr County",
"48267":"Kimble County",
"48269":"King County",
"48271":"Kinney County",
"48273":"Kleberg County",
"48275":"Knox County",
"48277":"Lamar County",
"48279":"Lamb County",
"48281":"Lampasas County",
"48283":"La Salle County",
"48285":"Lavaca County",
"48287":"Lee County",
"48289":"Leon County",
"48291":"Liberty County",
"48293":"Limestone County",
"48295":"Lipscomb County",
"48297":"Live Oak County",
"48299":"Llano County",
"48301":"Loving County",
"48303":"Lubbock County",
"48305":"Lynn County",
"48307":"McCulloch County",
"48309":"McLennan County",
"48311":"McMullen County",
"48313":"Madison County",
"48315":"Marion County",
"48317":"Martin County",
"48319":"Mason County",
"48321":"Matagorda County",
"48323":"Maverick County",
"48325":"Medina County",
"48327":"Menard County",
"48329":"Midland County",
"48331":"Milam County",
"48333":"Mills County",
"48335":"Mitchell County",
"48337":"Montague County",
"48339":"Montgomery County",
"48341":"Moore County",
"48343":"Morris County",
"48345":"Motley County",
"48347":"Nacogdoches County",
"48349":"Navarro County",
"48351":"Newton County",
"48353":"Nolan County",
"48355":"Nueces County",
"48357":"Ochiltree County",
"48359":"Oldham County",
"48361":"Orange County",
"48363":"Palo Pinto County",
"48365":"Panola County",
"48367":"Parker County",
"48369":"Parmer County",
"48371":"Pecos County",
"48373":"Polk County",
"48375":"Potter County",
"48377":"Presidio County",
"48379":"Rains County",
"48381":"Randall County",
"48383":"Reagan County",
"48385":"Real County",
"48387":"Red River County",
"48389":"Reeves County",
"48391":"Refugio County",
"48393":"Roberts County",
"48395":"Robertson County",
"48397":"Rockwall County",
"48399":"Runnels County",
"48401":"Rusk County",
"48403":"Sabine County",
"48405":"San Augustine County",
"48407":"San Jacinto County",
"48409":"San Patricio County",
"48411":"San Saba County",
"48413":"Schleicher County",
"48415":"Scurry County",
"48417":"Shackelford County",
"48419":"Shelby County",
"48421":"Sherman County",
"48423":"Smith County",
"48425":"Somervell County",
"48427":"Starr County",
"48429":"Stephens County",
"48431":"Sterling County",
"48433":"Stonewall County",
"48435":"Sutton County",
"48437":"Swisher County",
"48439":"Tarrant County",
"48441":"Taylor County",
"48443":"Terrell County",
"48445":"Terry County",
"48447":"Throckmorton County",
"48449":"Titus County",
"48451":"Tom Green County",
"48453":"Travis County",
"48455":"Trinity County",
"48457":"Tyler County",
"48459":"Upshur County",
"48461":"Upton County",
"48463":"Uvalde County",
"48465":"Val Verde County",
"48467":"Van Zandt County",
"48469":"Victoria County",
"48471":"Walker County",
"48473":"Waller County",
"48475":"Ward County",
"48477":"Washington County",
"48479":"Webb County",
"48481":"Wharton County",
"48483":"Wheeler County",
"48485":"Wichita County",
"48487":"Wilbarger County",
"48489":"Willacy County",
"48491":"Williamson County",
"48493":"Wilson County",
"48495":"Winkler County",
"48497":"Wise County",
"48499":"Wood County",
"48501":"Yoakum County",
"48503":"Young County",
"48505":"Zapata County",
"48507":"Zavala County",
"49000":"Utah",
"49001":"Beaver County",
"49003":"Box Elder County",
"49005":"Cache County",
"49007":"Carbon County",
"49009":"Daggett County",
"49011":"Davis County",
"49013":"Duchesne County",
"49015":"Emery County",
"49017":"Garfield County",
"49019":"Grand County",
"49021":"Iron County",
"49023":"Juab County",
"49025":"Kane County",
"49027":"Millard County",
"49029":"Morgan County",
"49031":"Piute County",
"49033":"Rich County",
"49035":"Salt Lake County",
"49037":"San Juan County",
"49039":"Sanpete County",
"49041":"Sevier County",
"49043":"Summit County",
"49045":"Tooele County",
"49047":"Uintah County",
"49049":"Utah County",
"49051":"Wasatch County",
"49053":"Washington County",
"49055":"Wayne County",
"49057":"Weber County",
"50000":"Vermont",
"50001":"Addison County",
"50003":"Bennington County",
"50005":"Caledonia County",
"50007":"Chittenden County",
"50009":"Essex County",
"50011":"Franklin County",
"50013":"Grand Isle County",
"50015":"Lamoille County",
"50017":"Orange County",
"50019":"Orleans County",
"50021":"Rutland County",
"50023":"Washington County",
"50025":"Windham County",
"50027":"Windsor County",
"51000":"Virginia",
"51001":"Accomack County",
"51003":"Albemarle County",
"51005":"Alleghany County",
"51007":"Amelia County",
"51009":"Amherst County",
"51011":"Appomattox County",
"51013":"Arlington County",
"51015":"Augusta County",
"51017":"Bath County",
"51019":"Bedford County",
"51021":"Bland County",
"51023":"Botetourt County",
"51025":"Brunswick County",
"51027":"Buchanan County",
"51029":"Buckingham County",
"51031":"Campbell County",
"51033":"Caroline County",
"51035":"Carroll County",
"51036":"Charles City County",
"51037":"Charlotte County",
"51041":"Chesterfield County",
"51043":"Clarke County",
"51045":"Craig County",
"51047":"Culpeper County",
"51049":"Cumberland County",
"51051":"Dickenson County",
"51053":"Dinwiddie County",
"51057":"Essex County",
"51059":"Fairfax County",
"51061":"Fauquier County",
"51063":"Floyd County",
"51065":"Fluvanna County",
"51067":"Franklin County",
"51069":"Frederick County",
"51071":"Giles County",
"51073":"Gloucester County",
"51075":"Goochland County",
"51077":"Grayson County",
"51079":"Greene County",
"51081":"Greensville County",
"51083":"Halifax County",
"51085":"Hanover County",
"51087":"Henrico County",
"51089":"Henry County",
"51091":"Highland County",
"51093":"Isle of Wight County",
"51095":"James City County",
"51097":"King and Queen County",
"51099":"King George County",
"51101":"King William County",
"51103":"Lancaster County",
"51105":"Lee County",
"51107":"Loudoun County",
"51109":"Louisa County",
"51111":"Lunenburg County",
"51113":"Madison County",
"51115":"Mathews County",
"51117":"Mecklenburg County",
"51119":"Middlesex County",
"51121":"Montgomery County",
"51125":"Nelson County",
"51127":"New Kent County",
"51131":"Northampton County",
"51133":"Northumberland County",
"51135":"Nottoway County",
"51137":"Orange County",
"51139":"Page County",
"51141":"Patrick County",
"51143":"Pittsylvania County",
"51145":"Powhatan County",
"51147":"Prince Edward County",
"51149":"Prince George County",
"51153":"Prince William County",
"51155":"Pulaski County",
"51157":"Rappahannock County",
"51159":"Richmond County",
"51161":"Roanoke County",
"51163":"Rockbridge County",
"51165":"Rockingham County",
"51167":"Russell County",
"51169":"Scott County",
"51171":"Shenandoah County",
"51173":"Smyth County",
"51175":"Southampton County",
"51177":"Spotsylvania County",
"51179":"Stafford County",
"51181":"Surry County",
"51183":"Sussex County",
"51185":"Tazewell County",
"51187":"Warren County",
"51191":"Washington County",
"51193":"Westmoreland County",
"51195":"Wise County",
"51197":"Wythe County",
"51199":"York County",
"51510":"Alexandria city",
"51515":"Bedford city",
"51520":"Bristol city",
"51530":"Buena Vista city",
"51540":"Charlottesville city",
"51550":"Chesapeake city",
"51560":"Clifton Forge city",
"51570":"Colonial Heights city",
"51580":"Covington city",
"51590":"Danville city",
"51595":"Emporia city",
"51600":"Fairfax city",
"51610":"Falls Church city",
"51620":"Franklin city",
"51630":"Fredericksburg city",
"51640":"Galax city",
"51650":"Hampton city",
"51660":"Harrisonburg city",
"51670":"Hopewell city",
"51678":"Lexington city",
"51680":"Lynchburg city",
"51683":"Manassas city",
"51685":"Manassas Park city",
"51690":"Martinsville city",
"51700":"Newport News city",
"51710":"Norfolk city",
"51720":"Norton city",
"51730":"Petersburg city",
"51735":"Poquoson city",
"51740":"Portsmouth city",
"51750":"Radford city",
"51760":"Richmond city",
"51770":"Roanoke city",
"51775":"Salem city",
"51780":"South Boston city (After 1990, part of Halifax County)",
"51790":"Staunton city",
"51800":"Suffolk city",
"51810":"Virginia Beach city",
"51820":"Waynesboro city",
"51830":"Williamsburg city",
"51840":"Winchester city",
"53000":"Washington",
"53001":"Adams County",
"53003":"Asotin County",
"53005":"Benton County",
"53007":"Chelan County",
"53009":"Clallam County",
"53011":"Clark County",
"53013":"Columbia County",
"53015":"Cowlitz County",
"53017":"Douglas County",
"53019":"Ferry County",
"53021":"Franklin County",
"53023":"Garfield County",
"53025":"Grant County",
"53027":"Grays Harbor County",
"53029":"Island County",
"53031":"Jefferson County",
"53033":"King County",
"53035":"Kitsap County",
"53037":"Kittitas County",
"53039":"Klickitat County",
"53041":"Lewis County",
"53043":"Lincoln County",
"53045":"Mason County",
"53047":"Okanogan County",
"53049":"Pacific County",
"53051":"Pend Oreille County",
"53053":"Pierce County",
"53055":"San Juan County",
"53057":"Skagit County",
"53059":"Skamania County",
"53061":"Snohomish County",
"53063":"Spokane County",
"53065":"Stevens County",
"53067":"Thurston County",
"53069":"Wahkiakum County",
"53071":"Walla Walla County",
"53073":"Whatcom County",
"53075":"Whitman County",
"53077":"Yakima County",
"54000":"West Virginia",
"54001":"Barbour County",
"54003":"Berkeley County",
"54005":"Boone County",
"54007":"Braxton County",
"54009":"Brooke County",
"54011":"Cabell County",
"54013":"Calhoun County",
"54015":"Clay County",
"54017":"Doddridge County",
"54019":"Fayette County",
"54021":"Gilmer County",
"54023":"Grant County",
"54025":"Greenbrier County",
"54027":"Hampshire County",
"54029":"Hancock County",
"54031":"Hardy County",
"54033":"Harrison County",
"54035":"Jackson County",
"54037":"Jefferson County",
"54039":"Kanawha County",
"54041":"Lewis County",
"54043":"Lincoln County",
"54045":"Logan County",
"54047":"McDowell County",
"54049":"Marion County",
"54051":"Marshall County",
"54053":"Mason County",
"54055":"Mercer County",
"54057":"Mineral County",
"54059":"Mingo County",
"54061":"Monongalia County",
"54063":"Monroe County",
"54065":"Morgan County",
"54067":"Nicholas County",
"54069":"Ohio County",
"54071":"Pendleton County",
"54073":"Pleasants County",
"54075":"Pocahontas County",
"54077":"Preston County",
"54079":"Putnam County",
"54081":"Raleigh County",
"54083":"Randolph County",
"54085":"Ritchie County",
"54087":"Roane County",
"54089":"Summers County",
"54091":"Taylor County",
"54093":"Tucker County",
"54095":"Tyler County",
"54097":"Upshur County",
"54099":"Wayne County",
"54101":"Webster County",
"54103":"Wetzel County",
"54105":"Wirt County",
"54107":"Wood County",
"54109":"Wyoming County",
"55000":"Wisconsin",
"55001":"Adams County",
"55003":"Ashland County",
"55005":"Barron County",
"55007":"Bayfield County",
"55009":"Brown County",
"55011":"Buffalo County",
"55013":"Burnett County",
"55015":"Calumet County",
"55017":"Chippewa County",
"55019":"Clark County",
"55021":"Columbia County",
"55023":"Crawford County",
"55025":"Dane County",
"55027":"Dodge County",
"55029":"Door County",
"55031":"Douglas County",
"55033":"Dunn County",
"55035":"Eau Claire County",
"55037":"Florence County",
"55039":"Fond du Lac County",
"55041":"Forest County",
"55043":"Grant County",
"55045":"Green County",
"55047":"Green Lake County",
"55049":"Iowa County",
"55051":"Iron County",
"55053":"Jackson County",
"55055":"Jefferson County",
"55057":"Juneau County",
"55059":"Kenosha County",
"55061":"Kewaunee County",
"55063":"La Crosse County",
"55065":"Lafayette County",
"55067":"Langlade County",
"55069":"Lincoln County",
"55071":"Manitowoc County",
"55073":"Marathon County",
"55075":"Marinette County",
"55077":"Marquette County",
"55078":"Menominee County",
"55079":"Milwaukee County",
"55081":"Monroe County",
"55083":"Oconto County",
"55085":"Oneida County",
"55087":"Outagamie County",
"55089":"Ozaukee County",
"55091":"Pepin County",
"55093":"Pierce County",
"55095":"Polk County",
"55097":"Portage County",
"55099":"Price County",
"55101":"Racine County",
"55103":"Richland County",
"55105":"Rock County",
"55107":"Rusk County",
"55109":"St. Croix County",
"55111":"Sauk County",
"55113":"Sawyer County",
"55115":"Shawano County",
"55117":"Sheboygan County",
"55119":"Taylor County",
"55121":"Trempealeau County",
"55123":"Vernon County",
"55125":"Vilas County",
"55127":"Walworth County",
"55129":"Washburn County",
"55131":"Washington County",
"55133":"Waukesha County",
"55135":"Waupaca County",
"55137":"Waushara County",
"55139":"Winnebago County",
"55141":"Wood County",
"56000":"Wyoming",
"56001":"Albany County",
"56003":"Big Horn County",
"56005":"Campbell County",
"56007":"Carbon County",
"56009":"Converse County",
"56011":"Crook County",
"56013":"Fremont County",
"56015":"Goshen County",
"56017":"Hot Springs County",
"56019":"Johnson County",
"56021":"Laramie County",
"56023":"Lincoln County",
"56025":"Natrona County",
"56027":"Niobrara County",
"56029":"Park County",
"56031":"Platte County",
"56033":"Sheridan County",
"56035":"Sublette County",
"56037":"Sweetwater County",
"56039":"Teton County",
"56041":"Uinta County",
"56043":"Washakie County",
"56045":"Weston County"}

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


var display = true; // Initialize display variable

function hideShow() {
    var functions = document.getElementById("functions");
    if (display) {
        functions.style.opacity = '0'; // Fade out the element
        functions.style.transform = 'translateY(20px)'; // Move the element up
    } else {
        functions.style.opacity = '1'; // Fade in the element
        functions.style.transform = 'translateY(0)'; // Move the element back to its original position
    }
    display = !display; // Toggle the boolean value
}


document.querySelector("#toggleButton").addEventListener("click", function(event) {
    hideShow();
});



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
        
        if (e.features[0]['layer']['id'].includes('counties')){
            var geom_name = e.features[0]['properties']['NAME']+" "+"County";    
            var geom_id = e.features[0]['properties']['COUNTYFP10'];
            var geom_statename = fips_to_state[e.features[0]['properties']['STATEFP']];
        } else{
            var geom_codeS = e.features[0]['properties']['STATEFP10'];
            var geom_codeC = e.features[0]['properties']['COUNTYFP10'];
            var fips_codeSC = geom_codeS + geom_codeC;
            var geom_name = fips_to_county[fips_codeSC];
            var geom_id = e.features[0]['properties']['TRACTCE10'];
            var geom_statename = fips_to_state[e.features[0]['properties']['STATEFP10']];
        };

        baPercValue = e.features[0]['properties']['ba_perc'];
        totolPopValue = e.features[0]['properties']['total_pop'];
        if (e.features[0]['layer']['id'].includes('counties')){
            WHPopValue = e.features[0]['properties']['white_perc_x']; 
        }
        else{
            WHPopValue = e.features[0]['properties']['white_perc'];
        };
        
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

            <h6>${catDict[metric]}: ${d3.format(",.2%")(div_score_exp)}</h6>
            <h7>${geom_name}, ${geom_statename}</h7>

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
var previousWHData = null;
var previousWHPopValue = null;

function drawWHBoxPlot(svg, newWHData, WHPopValue) {
    console.log(previousWHPopValue)

 d3.select("#Boxplot_White").select("svg").remove();

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

  svg
  .append("line")
  .attr("x1", x(previousWHPopValue))
  .attr("x2", x(previousWHPopValue))
  .attr("y1", center - height / 2)
  .attr("y2", center + height / 2)
  .attr("stroke", "red") // You can choose a color for the line
  .style("stroke-width", 2)
  .style("opacity", 1)
  .transition()
  .duration(1000)
  .style("opacity", 1)
  .attr("x1", x(WHPopValue))
  .attr("x2", x(WHPopValue))



if (previousWHData !== null && previousWHPopValue !== null) {
        // Use the previous data
        previousWHData = newWHData;
        previousWHPopValue = WHPopValue;
    } else {
        // Store the initial data
        previousWHData = newWHData;
        previousWHPopValue = WHPopValue;
    }
    console.log(previousWHPopValue)


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
            return "#F97C2A"; // Highlight color
        } else {
            return "#ffe1cc"; // Default color
        }
            }
             else {
                if (zoomThreshold <= currentZoom) {
                if (d.bin <= div_score_exp && d.bin +  binWidths[0]  >= div_score_exp) {
            return "#F97C2A"; // Highlight color
        } else {
            return "#f7b285"; // Default color
        }
            }
        }
    })
        .attr("fill-opacity", "1")
        .attr("stroke", function(d) {
            if (zoomThreshold > currentZoom) {
                if (d.bin <= div_score_exp && d.bin +  binWidths[0]  >= div_score_exp) {
            return "white"; // Highlight color
        } else {
            return "#555"; // Default color
        }
            }
             else {
                if (zoomThreshold <= currentZoom) {
                if (d.bin <= div_score_exp && d.bin +  binWidths[0]  >= div_score_exp) {
            return "white"; // Highlight color
        } else {
            return "#555"; // Default color
        }
            }
        }
    })
        .attr("rx", 5)
        .attr("ry", 5)

};
            ///// Change the opacity back
map.on('click', layerA, (e) => 
{
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
  //console.log(newLayerID)
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
          closeOnClick: false,
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
        createPopUp(popup,'counties_wdm','county_weird',map,hoveredStateId);
        createPopUp(popup,'counties_wem','county_weird',map,hoveredStateId);
        createPopUp(popup,'counties_wda','county_weird',map,hoveredStateId);
        createPopUp(popup,'counties_wea','county_weird',map,hoveredStateId);
        createPopUp(popup,'counties_wde','county_weird',map,hoveredStateId);
        createPopUp(popup,'counties_wee','county_weird',map,hoveredStateId);
        createPopUp(popup,'counties_wdle','county_weird',map,hoveredStateId);
        createPopUp(popup,'counties_wele','county_weird',map,hoveredStateId);

        createPopUp(popup,'tract_wdln','tracts_weird',map,hoveredStateId);
        createPopUp(popup,'tract_weln','tracts_weird',map,hoveredStateId);
        createPopUp(popup,'tract_wdm','tracts_weird',map,hoveredStateId);
        createPopUp(popup,'tract_wem','tracts_weird',map,hoveredStateId);
        createPopUp(popup,'tract_wda','tracts_weird',map,hoveredStateId);
        createPopUp(popup,'tract_wea','tracts_weird',map,hoveredStateId);
        createPopUp(popup,'tract_wde','tracts_weird',map,hoveredStateId);
        createPopUp(popup,'tract_wee','tracts_weird',map,hoveredStateId);
        createPopUp(popup,'tract_wdle','tracts_weird',map,hoveredStateId);
        createPopUp(popup,'tract_wele','tracts_weird',map,hoveredStateId);

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

map.on('load', e => {

    var featuress = map.querySourceFeatures('seg_2_11', {
        sourceLayer: 'segregation_all_countiesfgb'
    });

    console.log(featuress);
    featuress.forEach(feature => {
        // Extract properties from each feature
        const div_score_exp = feature.properties['asian_diversity_exp'];
        // Extract other properties as needed
        // ...
        // Perform operations with the properties
        // ...
        console.log(div_score_exp)
    });
});

document.getElementById('mapStyle1').addEventListener('click', function() {
    map.setStyle('https://api.maptiler.com/maps/bd3a8a99-b061-4a3a-a1c2-20d08f6ee042/style.json?key=HNi5BjBnVWZQP32PQRdv');
});

document.getElementById('mapStyle2').addEventListener('click', function() {
    map.setStyle('https://api.maptiler.com/maps/5f5a5e3a-bf8e-4515-b05b-423feccaabbd/style.json?key=is6mQIv8IXor3VbmKwq8');
});

    map.addControl(new maplibregl.NavigationControl(), 'bottom-right');
    map.addControl(new maplibregl.AttributionControl({
        compact: true
    }), 'bottom-right')

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
function toggleWeekend() 
{
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



