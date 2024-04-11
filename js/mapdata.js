var simplemaps_usmap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "click",
    
		//State defaults
		state_description: "State description",
    state_color: "lightgray",
    state_hover_color: "#A5DEE4",
    state_url: "https://google.com",
    border_size: 0.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 15,
    label_font: "EduDiatypeRounded",
    hide_labels: "no",
   
		//Zoom settings
		manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "EduDiatypeRounded",
    popup_nocss: "no",
    //popup_sticky: "yes", // Add this line to make the popup stable
    //popup_location: "location" // Add this line to make the popup stable
    //popup_anchor: "bottom-left", // Set the anchor to bottom left

		//Advanced settings
		div: "mapDownload",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "Download Link"
  },

  
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Hawaii.geojson"
    },
    AK: {
      name: "Alaska",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Alaska.geojson"
    },
    FL: {
      name: "Florida",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Florida.geojson",
      //inactive: "no"
    },
    NH: {
      name: "New Hampshire",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_New Hampshire.geojson"
    },
    VT: {
      name: "Vermont",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Vermont.geojson"
    },
    ME: {
      name: "Maine",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Maine.geojson"
    },
    RI: {
      name: "Rhode Island",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Rhode Island.geojson"
    },
    NY: {
      name: "New York",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_New York.geojson"
    },
    PA: {
      name: "Pennsylvania",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Pennsylvania.geojson"
    },
    NJ: {
      name: "New Jersey",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_New Jersey.geojson"
    },
    DE: {
      name: "Delaware",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Delaware.geojson"
    },
    MD: {
      name: "Maryland",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Maryland.geojson"
    },
    VA: {
      name: "Virginia",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Virginia.geojson"
    },
    WV: {
      name: "West Virginia",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_West Virginia.geojson"
    },
    OH: {
      name: "Ohio",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Ohio.geojson"
    },
    IN: {
      name: "Indiana",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Indiana.geojson"
    },
    IL: {
      name: "Illinois",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Illinois.geojson"
    },
    CT: {
      name: "Connecticut",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Connecticut.geojson"
    },
    WI: {
      name: "Wisconsin",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Wisconsin.geojson"
    },
    NC: {
      name: "North Carolina",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_North Carolina.geojson"
    },
    DC: {
      name: "District of Columbia",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_District of Columbia.geojson"
    },
    MA: {
      name: "Massachusetts",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Massachusetts.geojson"
    },
    TN: {
      name: "Tennessee",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Tennessee.geojson"
    },
    AR: {
      name: "Arkansas",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Arkansas.geojson"
    },
    MO: {
      name: "Missouri",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Missouri.geojson"
    },
    GA: {
      name: "Georgia",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Georgia.geojson"
    },
    SC: {
      name: "South Carolina",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_South Carolina.geojson"
    },
    KY: {
      name: "Kentucky",
      description: "no",
      color: "default",
      zoomable: "no",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Kentucky.geojson"
    },
    AL: {
      name: "Alabama",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Alabama.geojson"
    },
    LA: {
      name: "Louisiana",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Louisiana.geojson"
    },
    MS: {
      name: "Mississippi",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Mississippi.geojson"
    },
    IA: {
      name: "Iowa",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Iowa.geojson"
    },
    MN: {
      name: "Minnesota",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Minnesota.geojson"
    },
    OK: {
      name: "Oklahoma",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Oklahoma.geojson"
    },
    TX: {
      name: "Texas",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Texas.geojson"
    },
    NM: {
      name: "New Mexico",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_New Mexico.geojson"
    },
    KS: {
      name: "Kansas",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Kansas.geojson"
    },
    NE: {
      name: "Nebraska",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Nebraska.geojson"
    },
    SD: {
      name: "South Dakota",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_South Dakota.geojson"
    },
    ND: {
      name: "North Dakota",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_North Dakota.geojson"
    },
    WY: {
      name: "Wyoming",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Wyoming.geojson"
    },
    MT: {
      name: "Montana",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Montana.geojson"
    },
    CO: {
      name: "Colorado",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Colorado.geojson"
    },
    UT: {
      name: "Utah",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Utah.geojson"
    },
    AZ: {
      name: "Arizona",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Arizona.geojson"
    },
    NV: {
      name: "Nevada",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Nevada.geojson"
    },
    OR: {
      name: "Oregon",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Oregon.geojson"
    },
    WA: {
      name: "Washington",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Washington.geojson"
    },
    CA: {
      name: "California",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_California.geojson"
    },
    MI: {
      name: "Michigan",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Michigan.geojson"
    },
    ID: {
      name: "Idaho",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Idaho.geojson"
    },
    GU: {
      name: "Guam",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Guam.geojson",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Virgin Islands.geojson",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Puerto Rico.geojson",
      hide: "no"
    },
    AS: {
      name: "American Samoa",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_American Samoa.geojson",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "https://dewsfcxuf47u5.cloudfront.net/segregation_all_Northern Mariana Islands.geojson",
      hide: "yes"
    }
  },
  /*locations: {
    "0": {
      name: "New York",
      lat: 40.71,
      lng: -74,
      description: "default",
      color: "default",
      url: "default",
      type: "default",
      size: "default"
    },
    "1": {
      name: "Anchorage",
      lat: 61.2180556,
      lng: -149.9002778,
      color: "default",
      type: "circle"
    }
  },*/
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  }
};