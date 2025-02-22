const d2rows = [
  {
    count: 1,
    state: "Alabama",
    institution: "University of Alabama in Huntsville",
  },
  {
    count: 2,
    state: "Alabama",
    institution: "Auburn University at Montgomery",
  },
  { count: 3, state: "Alabama", institution: "Miles College" },
  { count: 4, state: "Alabama", institution: "University of Montevallo" },
  { count: 5, state: "Alabama", institution: "Spring Hill College" },
  { count: 6, state: "Alabama", institution: "Tuskegee University" },
  { count: 7, state: "Alabama", institution: "University of West Alabama" },
  { count: 8, state: "Alaska", institution: "University of Alaska Anchorage" },
  { count: 9, state: "Alaska", institution: "University of Alaska Fairbanks" },
  { count: 10, state: "Arkansas", institution: "Arkansas Tech University" },
  {
    count: 11,
    state: "Arkansas",
    institution: "University of Arkansas, Fort Smith",
  },
  {
    count: 12,
    state: "Arkansas",
    institution: "University of Arkansas, Monticello",
  },
  { count: 13, state: "Arkansas", institution: "Harding University" },
  { count: 14, state: "Arkansas", institution: "Henderson State University" },
  { count: 15, state: "Arkansas", institution: "Ouachita Baptist University" },
  { count: 16, state: "Arkansas", institution: "Southern Arkansas University" },
  {
    count: 17,
    state: "British Columbia",
    institution: "Simon Fraser University",
  },
  { count: 18, state: "California", institution: "Academy of Art University" },
  { count: 19, state: "California", institution: "Azusa Pacific University" },
  { count: 20, state: "California", institution: "Biola University" },
  {
    count: 21,
    state: "California",
    institution: "California State Polytechnic University, Humboldt",
  },
  {
    count: 22,
    state: "California",
    institution: "California State Polytechnic University, Pomona",
  },
  {
    count: 23,
    state: "California",
    institution: "California State University, Monterey Bay",
  },
  {
    count: 24,
    state: "California",
    institution: "California State University, Chico",
  },
  {
    count: 25,
    state: "California",
    institution: "California State University, Dominguez Hills",
  },
  {
    count: 26,
    state: "California",
    institution: "California State University, East Bay",
  },
  {
    count: 27,
    state: "California",
    institution: "California State University, Los Angeles",
  },
  {
    count: 28,
    state: "California",
    institution: "California State University, San Bernardino",
  },
  {
    count: 29,
    state: "California",
    institution: "California State University, Stanislaus",
  },
  {
    count: 30,
    state: "California",
    institution: "California State University, San Marcos",
  },
  {
    count: 31,
    state: "California",
    institution: "Concordia University Irvine",
  },
  {
    count: 32,
    state: "California",
    institution: "Dominican University of California",
  },
  { count: 33, state: "California", institution: "Fresno Pacific University" },
  { count: 34, state: "California", institution: "Holy Names University" },
  {
    count: 35,
    state: "California",
    institution: "Point Loma Nazarene University",
  },
  {
    count: 36,
    state: "California",
    institution: "San Francisco State University",
  },
  { count: 37, state: "California", institution: "Sonoma State University" },
  {
    count: 38,
    state: "California",
    institution: "University of California, San Diego",
  },
  { count: 39, state: "California", institution: "Westmont College" },
  { count: 40, state: "Colorado", institution: "Adams State University" },
  {
    count: 41,
    state: "Colorado",
    institution: "Colorado Christian University",
  },
  { count: 42, state: "Colorado", institution: "Colorado Mesa University" },
  { count: 43, state: "Colorado", institution: "Colorado School of Mines" },
  {
    count: 44,
    state: "Colorado",
    institution: "Colorado State University-Pueblo",
  },
  {
    count: 45,
    state: "Colorado",
    institution: "University of Colorado, Colorado Springs",
  },
  { count: 46, state: "Colorado", institution: "Fort Lewis College" },
  {
    count: 47,
    state: "Colorado",
    institution: "Metropolitan State University of Denver",
  },
  { count: 48, state: "Colorado", institution: "Regis University" },
  { count: 49, state: "Colorado", institution: "Western Colorado University" },
  { count: 50, state: "Connecticut", institution: "University of Bridgeport" },
  { count: 51, state: "Connecticut", institution: "University of New Haven" },
  { count: 52, state: "Connecticut", institution: "Post University" },
  {
    count: 53,
    state: "Connecticut",
    institution: "Southern Connecticut State University",
  },
  { count: 54, state: "Delaware", institution: "Goldey-Beacom College" },
  { count: 55, state: "Delaware", institution: "Wilmington University" },
  {
    count: 56,
    state: "District of Columbia",
    institution: "University of the District of Columbia",
  },
  { count: 57, state: "Florida", institution: "Barry University" },
  { count: 58, state: "Florida", institution: "Eckerd College" },
  { count: 59, state: "Florida", institution: "Edward Waters University" },
  {
    count: 60,
    state: "Florida",
    institution: "Embry-Riddle Aeronautical University",
  },
  { count: 61, state: "Florida", institution: "Flagler College" },
  {
    count: 62,
    state: "Florida",
    institution: "Florida Institute of Technology",
  },
  { count: 63, state: "Florida", institution: "Florida Southern College" },
  { count: 64, state: "Florida", institution: "Lynn University" },
  { count: 65, state: "Florida", institution: "Nova Southeastern University" },
  {
    count: 66,
    state: "Florida",
    institution: "Palm Beach Atlantic University",
  },
  { count: 67, state: "Florida", institution: "Rollins College" },
  { count: 68, state: "Florida", institution: "Saint Leo University" },
  { count: 69, state: "Florida", institution: "University of Tampa" },
  { count: 70, state: "Florida", institution: "University of West Florida" },

  { count: 71, state: "Georgia", institution: "Albany State University" },
  { count: 72, state: "Georgia", institution: "Augusta University" },
  { count: 73, state: "Georgia", institution: "Clark Atlanta University" },
  { count: 74, state: "Georgia", institution: "Clayton State University" },
  { count: 75, state: "Georgia", institution: "Columbus State University" },
  { count: 76, state: "Georgia", institution: "Emmanuel College" },
  { count: 77, state: "Georgia", institution: "Fort Valley State University" },
  {
    count: 78,
    state: "Georgia",
    institution: "Georgia College & State University",
  },
  {
    count: 79,
    state: "Georgia",
    institution: "Georgia Southwestern State University",
  },
  { count: 80, state: "Georgia", institution: "Morehouse College" },
  { count: 81, state: "Georgia", institution: "University of North Georgia" },
  { count: 82, state: "Georgia", institution: "Paine College" },
  { count: 83, state: "Georgia", institution: "Shorter University" },
  { count: 84, state: "Georgia", institution: "Valdosta State University" },
  { count: 85, state: "Georgia", institution: "University of West Georgia" },
  { count: 86, state: "Georgia", institution: "Young Harris College" },

  { count: 87, state: "Hawaii", institution: "Chaminade University" },
  { count: 88, state: "Hawaii", institution: "University of Hawaii at Hilo" },
  { count: 89, state: "Hawaii", institution: "Hawaii Pacific University" },

  { count: 90, state: "Idaho", institution: "Northwest Nazarene University" },

  {
    count: 91,
    state: "Illinois",
    institution: "University of Illinois at Springfield",
  },
  { count: 92, state: "Illinois", institution: "Lewis University" },
  { count: 93, state: "Illinois", institution: "McKendree University" },
  { count: 94, state: "Illinois", institution: "Quincy University" },

  { count: 95, state: "Indiana", institution: "Purdue University Northwest" },
  { count: 96, state: "Indiana", institution: "University of Indianapolis" },
  {
    count: 97,
    state: "Indiana",
    institution: "University of Southern Indiana",
  },

  { count: 98, state: "Iowa", institution: "Upper Iowa University" },

  { count: 99, state: "Kansas", institution: "Emporia State University" },
  { count: 100, state: "Kansas", institution: "Fort Hays State University" },
  { count: 101, state: "Kansas", institution: "Newman University" },
  { count: 102, state: "Kansas", institution: "Pittsburg State University" },
  { count: 103, state: "Kansas", institution: "Washburn University" },

  { count: 104, state: "Kentucky", institution: "Bellarmine University" },
  { count: 105, state: "Kentucky", institution: "Kentucky State University" },
  { count: 106, state: "Kentucky", institution: "Kentucky Wesleyan College" },
  { count: 107, state: "Kentucky", institution: "Thomas More University" },

  { count: 108, state: "Maryland", institution: "Bowie State University" },
  { count: 109, state: "Maryland", institution: "Frostburg State University" },

  {
    count: 110,
    state: "Massachusetts",
    institution: "American International College",
  },
  { count: 111, state: "Massachusetts", institution: "Assumption College" },
  { count: 112, state: "Massachusetts", institution: "Bentley University" },
  {
    count: 113,
    state: "Massachusetts",
    institution: "University of Massachusetts Lowell",
  },
  { count: 114, state: "Massachusetts", institution: "Stonehill College" },

  { count: 115, state: "Michigan", institution: "Davenport University" },
  { count: 116, state: "Michigan", institution: "Ferris State University" },
  {
    count: 117,
    state: "Michigan",
    institution: "Grand Valley State University",
  },
  { count: 118, state: "Michigan", institution: "Hillsdale College" },
  {
    count: 119,
    state: "Michigan",
    institution: "Lake Superior State University",
  },
  {
    count: 120,
    state: "Michigan",
    institution: "Michigan Technological University",
  },
  {
    count: 121,
    state: "Michigan",
    institution: "Northern Michigan University",
  },
  { count: 122, state: "Michigan", institution: "Northwood University" },
  {
    count: 123,
    state: "Michigan",
    institution: "Saginaw Valley State University",
  },
  { count: 124, state: "Michigan", institution: "Wayne State University" },

  { count: 125, state: "Minnesota", institution: "Bemidji State University" },
  {
    count: 126,
    state: "Minnesota",
    institution: "Concordia University, St. Paul",
  },
  {
    count: 127,
    state: "Minnesota",
    institution: "Minnesota State University, Mankato",
  },
  {
    count: 128,
    state: "Minnesota",
    institution: "Minnesota State University, Moorhead",
  },
  {
    count: 129,
    state: "Minnesota",
    institution: "University of Minnesota, Crookston",
  },
  {
    count: 130,
    state: "Minnesota",
    institution: "University of Minnesota Duluth",
  },
  {
    count: 131,
    state: "Minnesota",
    institution: "Southwest Minnesota State University",
  },
  { count: 132, state: "Minnesota", institution: "St. Cloud State University" },
  { count: 133, state: "Minnesota", institution: "Winona State University" },

  { count: 134, state: "Mississippi", institution: "Delta State University" },
  { count: 135, state: "Mississippi", institution: "Mississippi College" },

  {
    count: 136,
    state: "Missouri",
    institution: "University of Central Missouri",
  },
  { count: 137, state: "Missouri", institution: "Drury University" },
  {
    count: 138,
    state: "Missouri",
    institution: "Lincoln University (Missouri)",
  },
  { count: 139, state: "Missouri", institution: "Lindenwood University" },
  {
    count: 140,
    state: "Missouri",
    institution: "Maryville University of Saint Louis",
  },
  {
    count: 141,
    state: "Missouri",
    institution: "Missouri University of Science and Technology",
  },
  {
    count: 142,
    state: "Missouri",
    institution: "Missouri Southern State University",
  },
  {
    count: 143,
    state: "Missouri",
    institution: "Missouri Western State University",
  },
  {
    count: 144,
    state: "Missouri",
    institution: "University of Missouri-St. Louis",
  },
  {
    count: 145,
    state: "Missouri",
    institution: "Northwest Missouri State University",
  },
  { count: 146, state: "Missouri", institution: "Rockhurst University" },
  {
    count: 147,
    state: "Missouri",
    institution: "Southwest Baptist University",
  },
  { count: 148, state: "Missouri", institution: "Truman State University" },
  { count: 149, state: "Missouri", institution: "William Jewell College" },

  {
    count: 150,
    state: "Montana",
    institution: "Montana State University Billings",
  },

  { count: 151, state: "Nebraska", institution: "Chadron State College" },
  {
    count: 152,
    state: "Nebraska",
    institution: "University of Nebraska at Kearney",
  },
  { count: 153, state: "Nebraska", institution: "Wayne State College" },

  {
    count: 154,
    state: "New Hampshire",
    institution: "Franklin Pierce University",
  },
  {
    count: 155,
    state: "New Hampshire",
    institution: "Southern New Hampshire University",
  },
  { count: 156, state: "New Hampshire", institution: "Saint Anselm College" },

  { count: 157, state: "New Jersey", institution: "Bloomfield College" },
  { count: 158, state: "New Jersey", institution: "Caldwell University" },
  { count: 159, state: "New Jersey", institution: "Felician College" },
  { count: 160, state: "New Jersey", institution: "Georgian Court University" },

  {
    count: 161,
    state: "New Mexico",
    institution: "Eastern New Mexico University",
  },
  {
    count: 162,
    state: "New Mexico",
    institution: "New Mexico Highlands University",
  },
  {
    count: 163,
    state: "New Mexico",
    institution: "Western New Mexico University",
  },

  { count: 164, state: "New York", institution: "Adelphi University" },
  { count: 165, state: "New York", institution: "Alliance University" },
  { count: 166, state: "New York", institution: "College of Staten Island" },
  { count: 167, state: "New York", institution: "D'Youville College" },
  { count: 168, state: "New York", institution: "Daemen College" },
  {
    count: 169,
    state: "New York",
    institution: "Dominican College (New York)",
  },
  { count: 170, state: "New York", institution: "Le Moyne College" },
  { count: 171, state: "New York", institution: "Mercy College" },
  { count: 172, state: "New York", institution: "Molloy College" },
  { count: 173, state: "New York", institution: "Pace University" },
  { count: 174, state: "New York", institution: "Queens College (New York)" },
  { count: 175, state: "New York", institution: "Roberts Wesleyan College" },
  { count: 176, state: "New York", institution: "St. Thomas Aquinas College" },
  { count: 177, state: "New York", institution: "The College of Saint Rose" },

  { count: 178, state: "North Carolina", institution: "Barton College" },
  { count: 179, state: "North Carolina", institution: "Belmont Abbey College" },
  { count: 180, state: "North Carolina", institution: "Catawba College" },
  { count: 181, state: "North Carolina", institution: "Chowan University" },
  {
    count: 182,
    state: "North Carolina",
    institution: "Elizabeth City State University",
  },
  {
    count: 183,
    state: "North Carolina",
    institution: "Fayetteville State University",
  },
  {
    count: 184,
    state: "North Carolina",
    institution: "Johnson C. Smith University",
  },
  { count: 185, state: "North Carolina", institution: "Lees-McRae College" },
  {
    count: 186,
    state: "North Carolina",
    institution: "Lenoir-Rhyne University",
  },
  { count: 187, state: "North Carolina", institution: "Livingstone College" },
  { count: 188, state: "North Carolina", institution: "Mars Hill University" },
  {
    count: 189,
    state: "North Carolina",
    institution: "Queens University of Charlotte",
  },
  {
    count: 190,
    state: "North Carolina",
    institution: "Saint Augustine's University",
  },
  { count: 191, state: "North Carolina", institution: "Shaw University" },
  {
    count: 192,
    state: "North Carolina",
    institution: "University of Mount Olive",
  },
  {
    count: 193,
    state: "North Carolina",
    institution: "University of North Carolina at Pembroke",
  },
  { count: 194, state: "North Carolina", institution: "Wingate University" },
  {
    count: 195,
    state: "North Carolina",
    institution: "Winston-Salem State University",
  },

  { count: 196, state: "North Dakota", institution: "University of Mary" },
  { count: 197, state: "North Dakota", institution: "Minot State University" },

  { count: 198, state: "Ohio", institution: "Ashland University" },
  { count: 199, state: "Ohio", institution: "Cedarville University" },
  { count: 200, state: "Ohio", institution: "Central State University" },
  { count: 201, state: "Ohio", institution: "Lake Erie College" },
  { count: 202, state: "Ohio", institution: "Malone University" },
  { count: 203, state: "Ohio", institution: "Notre Dame College (Ohio)" },
  { count: 204, state: "Ohio", institution: "Ohio Dominican University" },
  { count: 205, state: "Ohio", institution: "Tiffin University" },
  { count: 206, state: "Ohio", institution: "University of Findlay" },
  { count: 207, state: "Ohio", institution: "Ursuline College" },
  { count: 208, state: "Ohio", institution: "Walsh University" },

  { count: 209, state: "Oklahoma", institution: "Cameron University" },
  { count: 210, state: "Oklahoma", institution: "East Central University" },
  {
    count: 211,
    state: "Oklahoma",
    institution: "Northeastern State University",
  },
  {
    count: 212,
    state: "Oklahoma",
    institution: "Northwestern Oklahoma State University",
  },
  { count: 213, state: "Oklahoma", institution: "Oklahoma Baptist University" },
  {
    count: 214,
    state: "Oklahoma",
    institution: "Oklahoma Christian University",
  },
  { count: 215, state: "Oklahoma", institution: "Rogers State University" },
  {
    count: 216,
    state: "Oklahoma",
    institution: "Southeastern Oklahoma State University",
  },
  {
    count: 217,
    state: "Oklahoma",
    institution: "Southern Nazarene University",
  },
  {
    count: 218,
    state: "Oklahoma",
    institution: "Southwestern Oklahoma State University",
  },
  {
    count: 219,
    state: "Oklahoma",
    institution: "University of Central Oklahoma",
  },

  { count: 220, state: "Oregon", institution: "Western Oregon University" },

  {
    count: 221,
    state: "Pennsylvania",
    university: "Bloomsburg University of Pennsylvania",
  },
  {
    count: 222,
    state: "Pennsylvania",
    university: "Chestnut Hill College",
  },
  {
    count: 223,
    state: "Pennsylvania",
    university: "East Stroudsburg University of Pennsylvania",
  },
  {
    count: 224,
    state: "Pennsylvania",
    university: "Gannon University",
  },
  {
    count: 225,
    state: "Pennsylvania",
    university: "Holy Family University",
  },
  {
    count: 226,
    state: "Pennsylvania",
    university: "Indiana University of Pennsylvania",
  },
  {
    count: 227,
    state: "Pennsylvania",
    university: "Kutztown University of Pennsylvania",
  },
  {
    count: 228,
    state: "Pennsylvania",
    university: "Lincoln University (Pennsylvania)",
  },
  {
    count: 229,
    state: "Pennsylvania",
    university: "Lock Haven University of Pennsylvania",
  },
  {
    count: 230,
    state: "Pennsylvania",
    university: "Mansfield University of Pennsylvania",
  },
  {
    count: 231,
    state: "Pennsylvania",
    university: "Mercyhurst University",
  },
  {
    count: 232,
    state: "Pennsylvania",
    university: "Millersville University of Pennsylvania",
  },
  {
    count: 233,
    state: "Pennsylvania",
    university: "Pennsylvania Western University, California",
  },
  {
    count: 234,
    state: "Pennsylvania",
    university: "Pennsylvania Western University, Clarion",
  },
  {
    count: 235,
    state: "Pennsylvania",
    university: "Pennsylvania Western University, Edinboro",
  },
  {
    count: 236,
    state: "Pennsylvania",
    university: "Seton Hill University",
  },
  {
    count: 237,
    state: "Pennsylvania",
    university: "Shippensburg University of Pennsylvania",
  },
  {
    count: 238,
    state: "Pennsylvania",
    university: "Slippery Rock University of Pennsylvania",
  },
  {
    count: 239,
    state: "Pennsylvania",
    university: "University of Pittsburgh, Johnstown",
  },
  {
    count: 240,
    state: "Pennsylvania",
    university: "West Chester University of Pennsylvania",
  },
  {
    count: 241,
    state: "Puerto Rico",
     institution: "University of Puerto Rico, Bayamon"
  },
  {
    count: 242,
    state: "Puerto Rico",
     institution: "University of Puerto Rico, Mayaguez"
  },
  {
    count: 243,
    state: "Puerto Rico",
     institution: "University of Puerto Rico, Rio Piedras"
  },
  

  {
    count: 244,
    state: "South Carolina",
     institution: "Anderson University"
  },
  {
    count: 245,
    state: "South Carolina",
     institution: "Benedict College"
  },
  {
    count: 246,
    state: "South Carolina",
     institution: "Claflin University"
  },
  {
    count: 247,
    state: "South Carolina",
     institution: "Coker College"
  },
  {
    count: 248,
    state: "South Carolina",
     institution: "Converse College"
  },
  {
    count: 249,
    state: "South Carolina",
     institution: "Erskine College"
  },
  {
    count: 250,
    state: "South Carolina",
     institution: "Francis Marion University"
  },
  {
    count: 251,
    state: "South Carolina",
     institution: "Lander University"
  },
  {
    count: 252,
    state: "South Carolina",
     institution: "Limestone College"
  },
  {
    count: 253,
    state: "South Carolina",
     institution: "Newberry College"
  },
  {
    count: 254,
    state: "South Carolina",
     institution: "North Greenville University"
  },
  {
    count: 255,
    state: "South Carolina",
     institution: "University of South Carolina Aiken"
  },
  {
    count: 256,
    state: "South Carolina",
     institution: "Southern Wesleyan University"
  },
  {
    count: 255,
    state: "South Carolina",
     institution: "University of South Carolina Aiken"
  },
  {count: 256, state: "South Carolina", institution: "Southern Wesleyan University"},
  
  {count: 257, state: "West Virginia", institution: "Alderson Broaddus University"},
  {count: 258, state: "West Virginia", institution: "Bluefield State College"},
  {count: 259, state: "West Virginia", institution: "Concord University"},
    {count: 260, state: "West Virginia", institution: "Davis and Elkins College"},
    {count: 261, state: "West Virginia", institution: "Fairmont State University"},
  {count: 259, state: "West Virginia", institution: "Glenville State College"},
  {count: 260, state: "West Virginia", institution: "Salem University"},
  {count: 261, state: "West Virginia", institution: "Shepherd University"},
  {count: 262, state: "West Virginia", institution: "University of Charleston (West Virginia)"},
  {count: 263, state: "West Virginia", institution: "West Liberty University"},
  {count: 264, state: "West Virginia", institution: "West Virginia State University"},
  {count: 265, state: "West Virginia", institution: "Southern Wesleyan University"},
  {count: 266, state: "West Virginia", institution: "West Virginia Wesleyan College"},
  {count: 267, state: "West Virginia", institution: "Wheeling Jesuit University"},

  {count: 268, state: "Wisconsin", institution: "University of Wisconsin, Parkside"},

];

export default d2rows;
