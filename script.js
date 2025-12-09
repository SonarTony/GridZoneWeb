const teams = {
    "Milwaukee": {
        offense: [
            { rank: 1, firstName: "DeAndre", lastName: "Glass", position: "QB", P: 3, R: 1, X: 1 },
            { rank: 2, firstName: "Benjamin", lastName: "McDonald", position: "HB", P: 2, R: 2, X: 2 },
            { rank: 3, firstName: "Erik", lastName: "Wolfe", position: "OL", P: 2, R: 2, X: 1 },
            { rank: 4, firstName: "Frances", lastName: "Donett", position: "WR", P: 2, R: 1, X: 2 },
            { rank: 5, firstName: "Bob", lastName: "Gains", position: "OL", P: 2, R: 2, X: 0 },
            { rank: 6, firstName: "Mark", lastName: "Garrison", position: "OL", P: 1, R: 1, X: 2 },
            { rank: 7, firstName: "Richard", lastName: "Yu", position: "WR", P: 0, R: 1, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Curtis", lastName: "Rouse", position: "LB", P: 2, R: 2, X: 1 },
            { rank: 2, firstName: "Ronald", lastName: "Johnston", position: "LB", P: 0, R: 2, X: 2 },
            { rank: 3, firstName: "Edgar", lastName: "Moore", position: "DB", P: 2, R: 1, X: 1 },
            { rank: 4, firstName: "Louie", lastName: "Willis", position: "LB", P: 1, R: 2, X: 2 },
            { rank: 5, firstName: "Damon", lastName: "Morton", position: "DB", P: 2, R: 0, X: 1 },
            { rank: 6, firstName: "Jack", lastName: "Coleman", position: "DL", P: 1, R: 1, X: 1 },
            { rank: 7, firstName: "Robert", lastName: "Craft", position: "DL", P: 0, R: 1, X: 2 },
        ],
        playCharts: {
            normal: ["P", "P", "R", "R", "R", "X"],
            control: ["P", "R", "R", "R", "R", "R"],
            hurry: ["X", "X", "P", "P", "P", "R"],
        },
        playerFinder: {
            P: ["2", "2", "2", "4", "4", "4"],
            R: ["1", "2", "2", "2", "4", "7"],
            X: ["2", "2", "4", "4", "7", "7"],
        },
        powerfactor: {
            PF: 6,
        },
    },
    "Ft. Wayne": {
        offense: [
            { rank: 1, firstName: "Monte", lastName: "Nixon", position: "QB", P: 2, R: 2, X: 2 },
            { rank: 2, firstName: "Raymon", lastName: "Luzano", position: "WR", P: 2, R: 1, X: 2 },
            { rank: 3, firstName: "Rodger", lastName: "Stout", position: "OL", P: 2, R: 1, X: 2 },
            { rank: 4, firstName: "Manny", lastName: "Bond", position: "OL", P: 1, R: 2, X: 2 },
            { rank: 5, firstName: "James", lastName: "Smith", position: "OL", P: 1, R: 1, X: 3 },
            { rank: 6, firstName: "Harold", lastName: "Donovan", position: "HB", P: 1, R: 1, X: 2 },
            { rank: 7, firstName: "Bruce", lastName: "Lynch", position: "RB", P: 0, R: 1, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Hubert", lastName: "Vazquez", position: "DB", P: 2, R: 2, X: 3 },
            { rank: 2, firstName: "Tony", lastName: "Finley", position: "DB", P: 2, R: 1, X: 2 },
            { rank: 3, firstName: "Thomas", lastName: "Dickerson", position: "LB", P: 1, R: 2, X: 2 },
            { rank: 4, firstName: "Will", lastName: "Smith", position: "LB", P: 0, R: 3, X: 1 },
            { rank: 5, firstName: "Philip", lastName: "Vallerin", position: "DL", P: 1, R: 1, X: 2 },
            { rank: 6, firstName: "Roman", lastName: "Gregory", position: "LB", P: 1, R: 1, X: 1 },
            { rank: 7, firstName: "Carl", lastName: "Keller", position: "LB", P: 0, R: 2, X: 1 },
        ],
        playCharts: {
            normal: ["P", "P", "R", "R", "X", "X"],
            control: ["P", "P", "P", "R", "R", "R"],
            hurry: ["X", "X", "P", "P", "P", "R"],
        },
        playerFinder: {
            P: ["2", "2", "2", "2", "6", "6"],
            R: ["1", "1", "2", "6", "6", "7"],
            X: ["2", "2", "6", "6", "7", "7"],
        },
        powerfactor: {
            PF: 6,
        },
    },
    "Rochester": {
        offense: [
            { rank: 1, firstName: "Bub", lastName: "Lynn", position: "WR", P: 0, R: 3, X: 0 },
            { rank: 2, firstName: "Dan", lastName: "Web", position: "QB", P: 1, R: 1, X: 0 },
            { rank: 3, firstName: "Manuel", lastName: "Varez", position: "OL", P: 2, R: 1, X: 2 },
            { rank: 4, firstName: "Dan", lastName: "Park", position: "OL", P: 2, R: 1, X: 1 },
            { rank: 5, firstName: "Lino", lastName: "Johnson", position: "OL", P: 1, R: 1, X: 2 },
            { rank: 6, firstName: "Rickie", lastName: "Wall", position: "WR", P: 1, R: 1, X: 2 },
            { rank: 7, firstName: "Richard", lastName: "Russell", position: "RB", P: 0, R: 2, X: 1 },
        ],
        defense: [
            { rank: 1, firstName: "Reid", lastName: "Leslie", position: "DL", P: 3, R: 2, X: 3 },
            { rank: 2, firstName: "Chester", lastName: "Spitz", position: "LB", P: 2, R: 3, X: 2 },
            { rank: 3, firstName: "Tom", lastName: "Wilkers", position: "DL", P: 2, R: 3, X: 1 },
            { rank: 4, firstName: "Willis", lastName: "Davis", position: "DL", P: 1, R: 3, X: 1 },
            { rank: 5, firstName: "Robert", lastName: "Mills", position: "DB", P: 2, R: 0, X: 2 },
            { rank: 6, firstName: "Lester", lastName: "Mosley", position: "LB", P: 1, R: 2, X: 1 },
            { rank: 7, firstName: "James", lastName: "Pike", position: "DB", P: 1, R: 0, X: 2 },
        ],
        playCharts: {
            normal: ["P", "P", "R", "R", "R", "X"],
            control: ["R", "R", "R", "R", "P", "P"],
            hurry: ["X", "X", "R", "R", "P", "P"],
        },
        playerFinder: {
            P: ["6", "6", "6", "6", "1", "7"],
            R: ["1", "1", "1", "6", "6", "7"],
            X: ["6", "6", "6", "6", "7", "7"],
        },
        powerfactor: {
            PF: 6,
        },
    },
    "Richmond": {
        offense: [
            { rank: 1, firstName: "Myles", lastName: "Page", position: "WR", P: 3, R: 3, X: 2 },
            { rank: 2, firstName: "Matt", lastName: "Rice", position: "QB", P: 2, R: 1, X: 3 },
            { rank: 3, firstName: "Omer", lastName: "Le", position: "OL", P: 3, R: 1, X: 3 },
            { rank: 4, firstName: "Carlton", lastName: "Everett", position: "OL", P: 1, R: 1, X: 1 },
            { rank: 5, firstName: "Chester", lastName: "Jones", position: "WR", P: 2, R: 0, X: 1 },
            { rank: 6, firstName: "Leon", lastName: "Chapman", position: "HB", P: 1, R: 2, X: 0 },
            { rank: 7, firstName: "Alvin", lastName: "Curtis", position: "OL", P: 0, R: 2, X: 1 },
        ],
        defense: [
            { rank: 1, firstName: "Eric", lastName: "Watts", position: "DL", P: 2, R: 2, X: 2 },
            { rank: 2, firstName: "Anthony", lastName: "Allen", position: "LB", P: 2, R: 2, X: 2 },
            { rank: 3, firstName: "Clarence", lastName: "Scott", position: "DB", P: 2, R: 1, X: 2 },
            { rank: 4, firstName: "Harry", lastName: "Noel", position: "DL", P: 2, R: 1, X: 2 },
            { rank: 5, firstName: "Eric", lastName: "Chase", position: "DB", P: 2, R: 2, X: 1 },
            { rank: 6, firstName: "James", lastName: "Zimmerman", position: "DL", P: 0, R: 2, X: 2 },
            { rank: 7, firstName: "Chuck", lastName: "Philips", position: "DL", P: 1, R: 2, X: 0 },
        ],
        playCharts: {
            normal: ["P", "P", "R", "X", "X", "R"],
            control: ["P", "P", "P", "R", "R", "R"],
            hurry: ["X", "X", "P", "P", "P", "R"],
        },
        playerFinder: {
            P: ["1", "1", "1", "5", "5", "6"],
            R: ["1", "1", "1", "1", "6", "6"],
            X: ["1", "1", "1", "5", "5", "5"],
        },
        powerfactor: {
            PF: 6,
        },
    },
    "Black Hills": {
        offense: [
            { rank: 1, firstName: "Stephen", lastName: "Charles", position: "WR", P: 2, R: 1, X: 0 },
            { rank: 2, firstName: "Frank", lastName: "Hill", position: "QB", P: 2, R: 0, X: 1 },
            { rank: 3, firstName: "Dwayne", lastName: "Santiago", position: "RB", P: 0, R: 3, X: 1 },
            { rank: 4, firstName: "Roger", lastName: "Reynolds", position: "OL", P: 1, R: 2, X: 0 },
            { rank: 5, firstName: "Victor", lastName: "Cortez", position: "WR", P: 1, R: 1, X: 1 },
            { rank: 6, firstName: "Jim", lastName: "Fischer", position: "OL", P: 1, R: 1, X: 1 },
            { rank: 7, firstName: "Tom", lastName: "Knight", position: "OL", P: 1, R: 0, X: 1 },
        ],
        defense: [
            { rank: 1, firstName: "Pat", lastName: "Duncan", position: "DL", P: 3, R: 2, X: 2 },
            { rank: 2, firstName: "Clark", lastName: "Coleman", position: "DB", P: 2, R: 2, X: 2 },
            { rank: 3, firstName: "Frank", lastName: "Bartlett", position: "DB", P: 1, R: 2, X: 2 },
            { rank: 4, firstName: "Roose", lastName: "Dixon", position: "DL", P: 0, R: 2, X: 2 },
            { rank: 5, firstName: "Moe", lastName: "Chowder", position: "DL", P: 1, R: 1, X: 1 },
            { rank: 6, firstName: "Rodney", lastName: "Williams", position: "LB", P: 1, R: 1, X: 1 },
            { rank: 7, firstName: "Doug", lastName: "Callahan", position: "LB", P: 1, R: 0, X: 1 },
        ],
        playCharts: {
            normal: ["P", "P", "P", "R", "R", "X"],
            control: ["P", "P", "R", "R", "R", "R"],
            hurry: ["P", "P", "P", "P", "X", "R"],
        },
        playerFinder: {
            P: ["1", "1", "1", "1", "5", "5"],
            R: ["3", "3", "3", "3", "1", "1"],
            X: ["3", "3", "3", "5", "5", "5"],
        },
        powerfactor: {
            PF: 4,
        },
    },
    "Savannah": {
        offense: [
            { rank: 1, firstName: "Lin", lastName: "McCarty", position: "WR", P: 1, R: 2, X: 2 },
            { rank: 2, firstName: "Roderick", lastName: "Stevenson", position: "WR", P: 1, R: 2, X: 2 },
            { rank: 3, firstName: "Kenneth", lastName: "Alston", position: "QB", P: 1, R: 0, X: 1 },
            { rank: 4, firstName: "Cody", lastName: "Morrison", position: "OL", P: 2, R: 2, X: 2 },
            { rank: 5, firstName: "Jason", lastName: "Benson", position: "OL", P: 0, R: 2, X: 1 },
            { rank: 6, firstName: "David", lastName: "Booker", position: "OL", P: 0, R: 1, X: 2 },
            { rank: 7, firstName: "Jim", lastName: "Schultz", position: "HB", P: 0, R: 2, X: 0 },
        ],
        defense: [
            { rank: 1, firstName: "Omar", lastName: "Wiley", position: "LB", P: 1, R: 3, X: 3 },
            { rank: 2, firstName: "John", lastName: "Newell", position: "DL", P: 0, R: 2, X: 2 },
            { rank: 3, firstName: "William", lastName: "Nelson", position: "DL", P: 2, R: 1, X: 1 },
            { rank: 4, firstName: "Billy", lastName: "Moore", position: "DB", P: 2, R: 1, X: 1 },
            { rank: 5, firstName: "John", lastName: "Merrit", position: "DL", P: 1, R: 1, X: 2 },
            { rank: 6, firstName: "Bill", lastName: "Zimmerman", position: "DB", P: 2, R: 1, X: 1 },
            { rank: 7, firstName: "Javier", lastName: "Lopez", position: "LB", P: 1, R: 1, X: 1 },
        ],
        playCharts: {
            normal: ["R", "R", "R", "X", "X", "P"],
            control: ["R", "R", "R", "R", "P", "p"],
            hurry: ["P", "P", "P", "P", "X", "X"],
        },
        playerFinder: {
            P: ["2", "2", "2", "1", "1", "1"],
            R: ["1", "1", "2", "2", "7", "7"],
            X: ["2", "2", "2", "1", "1", "1"],
        },
        powerfactor: {
            PF: 5,
        },
    },
    "Little Rock": {
        offense: [
            { rank: 1, firstName: "Eddie", lastName: "Crosby", position: "QB", P: 3, R: 1, X: 2 },
            { rank: 2, firstName: "Carson", lastName: "Bend", position: "RB", P: 2, R: 2, X: 2 },
            { rank: 3, firstName: "Hassahn", lastName: "Lloyd", position: "WR", P: 3, R: 1, X: 1 },
            { rank: 4, firstName: "Matt", lastName: "Ponce", position: "OL", P: 1, R: 2, X: 2 },
            { rank: 5, firstName: "Ed", lastName: "Diaz", position: "OL", P: 1, R: 2, X: 1 },
            { rank: 6, firstName: "Daniel", lastName: "Gains", position: "OL", P: 1, R: 2, X: 1 },
            { rank: 7, firstName: "Randall", lastName: "Ferguson", position: "WR", P: 2, R: 0, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Al", lastName: "Freidman", position: "DB", P: 3, R: 1, X: 2 },
            { rank: 2, firstName: "Hank", lastName: "Kaiser", position: "LB", P: 1, R: 3, X: 2 },
            { rank: 3, firstName: "Willie", lastName: "Davison", position: "DL", P: 1, R: 3, X: 1 },
            { rank: 4, firstName: "Duce", lastName: "Downs", position: "LB", P: 1, R: 3, X: 1 },
            { rank: 5, firstName: "Rick", lastName: "Nelson", position: "DB", P: 2, R: 2, X: 1 },
            { rank: 6, firstName: "Rick", lastName: "Bell", position: "DL", P: 0, R: 1, X: 2 },
            { rank: 7, firstName: "Albert", lastName: "Garrison", position: "LB", P: 1, R: 2, X: 0 },
        ],
        playCharts: {
            normal: ["R", "R", "X", "X", "P", "P"],
            control: ["R", "R", "R", "R", "P", "P"],
            hurry: ["X", "X", "P", "P", "P", "P"],
        },
        playerFinder: {
            P: ["3", "3", "3", "2", "2", "2"],
            R: ["2", "2", "2", "1", "3", "1"],
            X: ["2", "2", "7", "7", "2", "3"],
        },
        powerfactor: {
            PF: 5,
        },
    },
    "Knoxville": {
        offense: [
            { rank: 1, firstName: "Noel", lastName: "Sanders", position: "WR", P: 3, R: 1, X: 1 },
            { rank: 2, firstName: "Tom", lastName: "Kemp", position: "QB", P: 2, R: 2, X: 2 },
            { rank: 3, firstName: "Jeremy", lastName: "Sloan", position: "HB", P: 1, R: 3, X: 1 },
            { rank: 4, firstName: "Lucas", lastName: "Rose", position: "WR", P: 2, R: 1, X: 0 },
            { rank: 5, firstName: "Joseph", lastName: "White", position: "OL", P: 1, R: 2, X: 1 },
            { rank: 6, firstName: "Kevin", lastName: "Beasley", position: "OL", P: 1, R: 2, X: 0 },
            { rank: 7, firstName: "Daniel", lastName: "Hayes", position: "OL", P: 2, R: 1, X: 1 },
        ],
        defense: [
            { rank: 1, firstName: "Jack", lastName: "Dailey", position: "DB", P: 3, R: 2, X: 3 },
            { rank: 2, firstName: "Norm", lastName: "Vaughn", position: "DL", P: 2, R: 2, X: 2 },
            { rank: 3, firstName: "Chris", lastName: "Warner", position: "LB", P: 2, R: 2, X: 2 },
            { rank: 4, firstName: "Shaun", lastName: "Smith", position: "DL", P: 2, R: 2, X: 1 },
            { rank: 5, firstName: "Robbie", lastName: "Henrick", position: "LB", P: 1, R: 2, X: 2 },
            { rank: 6, firstName: "David", lastName: "Conley", position: "LB", P: 0, R: 2, X: 1 },
            { rank: 7, firstName: "Myron", lastName: "Lambert", position: "LB", P: 2, R: 0, X: 2 },
        ],
        playCharts: {
            normal: ["P", "P", "R", "R", "R", "X"],
            control: ["R", "R", "R", "R", "P", "P"],
            hurry: ["P", "P", "P", "P", "R", "X"],
        },
        playerFinder: {
            P: ["1", "1", "1", "4", "4", "3"],
            R: ["3", "3", "3", "2", "1", "4"],
            X: ["1", "1", "1", "3", "3", "3"],
        },
        powerfactor: {
            PF: 6,
        },
    },
    "Pennsacola": {
        offense: [
            { rank: 1, firstName: "Rod", lastName: "Acevedo", position: "QB", P: 3, R: 0, X: 1 },
            { rank: 2, firstName: "Elvin", lastName: "Blackwell", position: "WR", P: 2, R: 0, X: 2 },
            { rank: 3, firstName: "Bart", lastName: "Potter", position: "OL", P: 2, R: 1, X: 1 },
            { rank: 4, firstName: "Nicholas", lastName: "Page", position: "RB", P: 1, R: 2, X: 0 },
            { rank: 5, firstName: "Ben", lastName: "Madison", position: "OL", P: 1, R: 2, X: 0 },
            { rank: 6, firstName: "Thad", lastName: "Hurley", position: "OL", P: 1, R: 1, X: 2 },
            { rank: 7, firstName: "Michael", lastName: "Jordain", position: "RB", P: 1, R: 0, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Tom", lastName: "Webster", position: "DL", P: 2, R: 2, X: 2 },
            { rank: 2, firstName: "Gregory", lastName: "Rhodes", position: "LB", P: 1, R: 2, X: 2 },
            { rank: 3, firstName: "Joshua", lastName: "Rhodes", position: "LB", P: 2, R: 2, X: 1 },
            { rank: 4, firstName: "Tyler", lastName: "Gould", position: "DB", P: 1, R: 1, X: 2 },
            { rank: 5, firstName: "Clifton", lastName: "Clark", position: "DL", P: 2, R: 1, X: 1 },
            { rank: 6, firstName: "John", lastName: "Jackson", position: "DB", P: 2, R: 1, X: 0 },
            { rank: 7, firstName: "Kris", lastName: "Kellce", position: "LB", P: 1, R: 2, X: 0 },
        ],
        playCharts: {
            normal: ["X", "P", "P", "P", "P", "R"],
            control: ["R", "R", "R", "R", "P", "P"],
            hurry: ["P", "P", "P", "P", "X", "X"],
        },
        playerFinder: {
            P: ["2", "2", "2", "2", "4", "7"],
            R: ["4", "4", "4", "4", "2", "7"],
            X: ["2", "2", "2", "7", "7", "7"],
        },
        powerfactor: {
            PF: 5,
        },
    },
    "Louisville": {
        offense: [
            { rank: 1, firstName: "Donnell", lastName: "McGee", position: "QB", P: 1, R: 1, X: 2 },
            { rank: 2, firstName: "Galen", lastName: "LeBlanc", position: "WR", P: 1, R: 3, X: 0 },
            { rank: 3, firstName: "Johnny", lastName: "Hayes", position: "OL", P: 2, R: 2, X: 2 },
            { rank: 4, firstName: "Rex", lastName: "Kemp", position: "OL", P: 2, R: 0, X: 2 },
            { rank: 5, firstName: "Lucas", lastName: "Wolfe", position: "WR", P: 0, R: 2, X: 1 },
            { rank: 6, firstName: "Jarret", lastName: "Fritz", position: "RB", P: 0, R: 2, X: 1 },
            { rank: 7, firstName: "Stephen", lastName: "Wyatt", position: "OL", P: 0, R: 2, X: 1 },
        ],
        defense: [
            { rank: 1, firstName: "Bernie", lastName: "Joseph", position: "LB", P: 2, R: 2, X: 2 },
            { rank: 2, firstName: "Zack", lastName: "Aiken", position: "DL", P: 2, R: 1, X: 1 },
            { rank: 3, firstName: "Adam", lastName: "McCarty", position: "DB", P: 2, R: 1, X: 1 },
            { rank: 4, firstName: "Dwayne", lastName: "Snow", position: "DL", P: 2, R: 0, X: 1 },
            { rank: 5, firstName: "Cory", lastName: "Roy", position: "DL", P: 2, R: 0, X: 1 },
            { rank: 6, firstName: "Larry", lastName: "Gardner", position: "LB", P: 2, R: 0, X: 1 },
            { rank: 7, firstName: "Damon", lastName: "Huff", position: "DB", P: 0, R: 0, X: 3 },
        ],
        playCharts: {
            normal: ["R", "R", "R", "P", "X", "X"],
            control: ["R", "R", "R", "R", "P", "X"],
            hurry: ["P", "P", "P", "X", "X", "R"],
        },
        playerFinder: {
            P: ["2", "2", "2", "2", "5", "6"],
            R: ["2", "2", "2", "5", "5", "6"],
            X: ["5", "5", "5", "6", "6", "2"],
        },
        powerfactor: {
            PF: 6,
        },
    },
    "Austin": {
        offense: [
            { rank: 1, firstName: "Lee", lastName: "Fields", position: "WR", P: 3, R: 2, X: 2 },
            { rank: 2, firstName: "Rex", lastName: "Timmons", position: "HB", P: 2, R: 2, X: 1 },
            { rank: 3, firstName: "Bryan", lastName: "Buckley", position: "QB", P: 1, R: 0, X: 0 },
            { rank: 4, firstName: "Thomas", lastName: "Banks", position: "WR", P: 2, R: 1, X: 0 },
            { rank: 5, firstName: "Garth", lastName: "Burgess", position: "OL", P: 2, R: 1, X: 0 },
            { rank: 6, firstName: "Ervin", lastName: "Thompson", position: "OL", P: 2, R: 0, X: 0 },
            { rank: 7, firstName: "Coy", lastName: "Chen", position: "OL", P: 0, R: 2, X: 1 },
        ],
        defense: [
            { rank: 1, firstName: "Paul", lastName: "Myers", position: "DL", P: 2, R: 2, X: 2 },
            { rank: 2, firstName: "James", lastName: "Muller", position: "DB", P: 1, R: 2, X: 3 },
            { rank: 3, firstName: "Mark", lastName: "Marteen", position: "LB", P: 2, R: 1, X: 2 },
            { rank: 4, firstName: "Jed", lastName: "Hudson", position: "LB", P: 1, R: 0, X: 2 },
            { rank: 5, firstName: "Jackie", lastName: "King", position: "DL", P: 1, R: 0, X: 2 },
            { rank: 6, firstName: "Pierre", lastName: "Hammond", position: "DB", P: 1, R: 0, X: 2 },
            { rank: 7, firstName: "Martin", lastName: "Collier", position: "LB", P: 1, R: 0, X: 1 },
        ],
        playCharts: {
            normal: ["P", "P", "R", "P", "R", "R"],
            control: ["P", "P", "R", "R", "R", "R"],
            hurry: ["P", "P", "P", "P", "R", "X"],
        },
        playerFinder: {
            P: ["1", "1", "1", "2", "2", "4"],
            R: ["2", "2", "1", "1", "1", "4"],
            X: ["1", "1", "1", "2", "2", "1"],
        },
        powerfactor: {
            PF: 4,
        },
    },
    "Scottsdale": {
        offense: [
            { rank: 1, firstName: "Rick", lastName: "Ross", position: "QB", P: 2, R: 0, X: 2 },
            { rank: 2, firstName: "Paris", lastName: "Castro", position: "HB", P: 1, R: 2, X: 2 },
            { rank: 3, firstName: "Lauren", lastName: "Farley", position: "OL", P: 3, R: 2, X: 2 },
            { rank: 4, firstName: "Will", lastName: "Burns", position: "OL", P: 2, R: 2, X: 2 },
            { rank: 5, firstName: "Howard", lastName: "Craves", position: "WR", P: 1, R: 0, X: 2 },
            { rank: 6, firstName: "Preston", lastName: "Miller", position: "WR", P: 1, R: 2, X: 1 },
            { rank: 7, firstName: "Asa", lastName: "Hunt", position: "OL", P: 1, R: 1, X: 1 },
        ],
        defense: [
            { rank: 1, firstName: "Jeff", lastName: "McConnell", position: "LB", P: 1, R: 2, X: 1 },
            { rank: 2, firstName: "Abraham", lastName: "Ames", position: "LB", P: 1, R: 1, X: 1 },
            { rank: 3, firstName: "Sly", lastName: "Stevenson", position: "DL", P: 0, R: 2, X: 2 },
            { rank: 4, firstName: "Dwayne", lastName: "Solis", position: "DB", P: 3, R: 0, X: 0 },
            { rank: 5, firstName: "Simon", lastName: "Wiley", position: "DB", P: 2, R: 0, X: 0 },
            { rank: 6, firstName: "Clifford", lastName: "Beard", position: "DL", P: 1, R: 1, X: 1 },
            { rank: 7, firstName: "Toby", lastName: "Santiago", position: "DL", P: 0, R: 1, X: 1 },
        ],
        playCharts: {
            normal: ["R", "P", "P", "P", "X", "X"],
            control: ["R", "R", "R", "P", "P", "P"],
            hurry: ["X", "X", "P", "P", "P", "P"],
        },
        playerFinder: {
            P: ["2", "2", "5", "5", "6", "6"],
            R: ["2", "2", "2", "6", "6", "6"],
            X: ["2", "2", "2", "5", "5", "6"],
        },
        powerfactor: {
            PF: 5,
        },
    },
};

// -------------------- GridZone game state tracking --------------------

const gameState = {
    currentPlay: 1,
    totalPlays: 27,
    ballPosition: 0,
    homeScore: 0,
    awayScore: 0,
    plays: [],
};

let lastPlayContext = null;

// -------------------- Charts --------------------

const footballCharts = {
    "P_vs_P": [
        { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "Intercepted, same zone. +1 on return roll" },
        { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "Intercepted, one zone downfield" },
        { diceRoll: 0, playerRating: "0,1,2", outcomeIfMet: "Intercepted, two zones downfield", outcomeElse: "Incomplete" },
        { diceRoll: 1, playerRating: "0,1,2,3", outcomeIfMet: "Nobody open... QB SACKED! 1 point loss" },
        { diceRoll: 2, playerRating: "0,1", outcomeIfMet: "INTERCEPTED, one zone downfield", outcomeElse: "Incomplete" },
        { diceRoll: 3, playerRating: "0,1,2,3", outcomeIfMet: "Incomplete, almost picked-off" },
        { diceRoll: 4, playerRating: "0,1,2,3", outcomeIfMet: "Incomplete, off leaping receiver's hands" },
        { diceRoll: 5, playerRating: "2,3", outcomeIfMet: "Complete 1 point but well contained", outcomeElse: "Incomplete" },
        { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "Compelete 1 point on bang bang play. INJURY OFFENSE" },
        { diceRoll: 7, playerRating: "0,1,2,3", outcomeIfMet: "Complete 1 point on the sideline, out of bonds" },
        { diceRoll: 8, playerRating: "3", outcomeIfMet: "Complete 2 point in tight coverage", outcomeElse: "1 point completion" },
        { diceRoll: 9, playerRating: "2,3", outcomeIfMet: "Complete 2 points on tough throw", outcomeElse: "Incomplete" },
        { diceRoll: 10, playerRating: "1,2,3", outcomeIfMet: "Complete 2 points on perfect route", outcomeElse: "NO GAIN!" },
        { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "Complete 3 points on hook play. INJURY DEFENSE" },
        { diceRoll: 12, playerRating: "2,3", outcomeIfMet: "Complete 4 points - QB and target in lock", outcomeElse: "2 point pass" },
        { diceRoll: 13, playerRating: "1,2,3", outcomeIfMet: "Complete 5 points", outcomeElse: "3 point pass" },
        { diceRoll: 14, playerRating: "3", outcomeIfMet: "Complete 7 points", outcomeElse: "4 points" },
        { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "Complete 8 point pass in open field" },
    ],
    "P_vs_R": [
        { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "INTERCEPTED, same zone" },
        { diceRoll: -1, playerRating: "0,1,2", outcomeIfMet: "INTERCEPTED, one zone downfield", outcomeElse: "Incomplete" },
        { diceRoll: 0, playerRating: "0,1", outcomeIfMet: "INTERCEPTED, same zone", outcomeElse: "Incomplete" },
        { diceRoll: 1, playerRating: "0,1,2,3", outcomeIfMet: "INCOMPLETE, defender makes great play" },
        { diceRoll: 2, playerRating: "2,3", outcomeIfMet: "COMPLETE, 1 point pass", outcomeElse: "Incomplete" },
        { diceRoll: 3, playerRating: "1,2,3", outcomeIfMet: "COMPLETE, 1 point pass", outcomeElse: "Incomplete" },
        { diceRoll: 4, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE, 1 points pass on hook route" },
        { diceRoll: 5, playerRating: "3", outcomeIfMet: "COMPLETE 2 point pass", outcomeElse: "COMPLETE 1 point" },
        { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 2 point pass" },
        { diceRoll: 7, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 3 point pass" },
        { diceRoll: 8, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 4 point pass" },
        { diceRoll: 9, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 5 point pass" },
        { diceRoll: 10, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 6 point pass" },
        { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 7 point pass" },
        { diceRoll: 12, playerRating: "3", outcomeIfMet: "COMPLETE 8 point pass", outcomeElse: "COMPLETE 4 point pass" },
        { diceRoll: 13, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 9 point pass" },
        { diceRoll: 14, playerRating: "2,3", outcomeIfMet: "COMPELTE TD PASS", outcomeElse: "COMPLETE 5 point pass" },
        { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE TD PASS" },
    ],
    "P_vs_X": [
        { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "INTERCEPTED, same zone, +2 on return roll" },
        { diceRoll: -1, playerRating: "0,1,2", outcomeIfMet: "INTERCEPTED, one zone downfield", outcomeElse: "Incomplete" },
        { diceRoll: 0, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 1 point, FUMBLE! Defense returns. INJURY OFFENSE" },
        { diceRoll: 1, playerRating: "0", outcomeIfMet: "INTERCEPTED,two zones downfield", outcomeElse: "SACK! 1 point loss" },
        { diceRoll: 2, playerRating: "0,1", outcomeIfMet: "SACK! 2 point loss & FUMBLE", outcomeElse: "SACK! 1 point loss" },
        { diceRoll: 3, playerRating: "0,1,2,3", outcomeIfMet: "DEFLECTED! 1-2 INTERCEPTED same zone, 3-4 INCOMPLETE, 5-6 COMPLETE 1 point pass" },
        { diceRoll: 4, playerRating: "3", outcomeIfMet: "COMPLETE, 1 points pass", outcomeElse: "INCOMPLETE" },
        { diceRoll: 5, playerRating: "2,3", outcomeIfMet: "COMPLETE 1 point pass", outcomeElse: "INCOMPLETE" },
        { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 1 point pass" },
        { diceRoll: 7, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 1 point pass" },
        { diceRoll: 8, playerRating: "1,2,3", outcomeIfMet: "COMPLETE 2 point pass", outcomeElse: "INCOMPLETE" },
        { diceRoll: 9, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 2 point pass" },
        { diceRoll: 10, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 2 point pass" },
        { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 3 point pass" },
        { diceRoll: 12, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 4 point pass - INJURY KEY PLAYER" },
        { diceRoll: 13, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 5 point pass" },
        { diceRoll: 14, playerRating: "2,3", outcomeIfMet: "COMPELTE 6 POINT PASS", outcomeElse: "COMPLETE 3 point pass" },
        { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 7 POINT PASS" },
    ],
    "R_vs_P": [
        { diceRoll: -2, playerRating: "0,1", outcomeIfMet: "FUMBLE!!", outcomeElse: "1 Point loss" },
        { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "NO Gain!" },
        { diceRoll: 0, playerRating: "0,1,2,3", outcomeIfMet: "Close call...1-3 NO GAIN. 4-6 Gain of 1" },
        { diceRoll: 1, playerRating: "2,3", outcomeIfMet: "1 point gain", outcomeElse: "NO GAIN" },
        { diceRoll: 2, playerRating: "1,2,3", outcomeIfMet: "1 Point Gain", outcomeElse: "NO GAIN!" },
        { diceRoll: 3, playerRating: "0,1,2,3", outcomeIfMet: "1 Point Gain" },
        { diceRoll: 4, playerRating: "0,1,2,3", outcomeIfMet: "1 Point Gain" },
        { diceRoll: 5, playerRating: "0,1,2,3", outcomeIfMet: "2 Point Gain" },
        { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "2 Point Gain. INJURY KEY PLAYER" },
        { diceRoll: 7, playerRating: "0,1,2,3", outcomeIfMet: "2 Point Gain" },
        { diceRoll: 8, playerRating: "3", outcomeIfMet: "4 Point Gain", outcomeElse: "2 Point Gain" },
        { diceRoll: 9, playerRating: "0,1,2,3", outcomeIfMet: "3 Point Gain" },
        { diceRoll: 10, playerRating: "3", outcomeIfMet: "5 Point Gain", outcomeElse: "2 Point Gain" },
        { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "4 Point Gain" },
        { diceRoll: 12, playerRating: "0,1,2,3", outcomeIfMet: "5 Point Gain" },
        { diceRoll: 13, playerRating: "0,1,2,3", outcomeIfMet: "6 Point Gain" },
        { diceRoll: 14, playerRating: "0,1,2,3", outcomeIfMet: "7 Point Gain" },
        { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN RUN!" },
    ],
    "R_vs_R": [
        { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "FUMBLE! Same zone, Defense Recovers, roll RETURN" },
        { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "FUMBLE! Botched hand-off, -1 zone (Roll Recovery)" },
        { diceRoll: 0, playerRating: "0,1,2,3", outcomeIfMet: "1 point Loss & FUMBLE!" },
        { diceRoll: 1, playerRating: "0,1,2,3", outcomeIfMet: "1 Point loss & FUMBLE!" },
        { diceRoll: 2, playerRating: "0,1,2,3", outcomeIfMet: "No Gain" },
        { diceRoll: 3, playerRating: "0,1,2,3", outcomeIfMet: "No Gain" },
        { diceRoll: 4, playerRating: "0,1,2,3", outcomeIfMet: "No Gain... INJURY OFFENSE" },
        { diceRoll: 5, playerRating: "3", outcomeIfMet: "1 point gain", outcomeElse: "No Gain!" },
        { diceRoll: 6, playerRating: "2,3", outcomeIfMet: "1 Point Gain", outcomeElse: "No Gain!" },
        { diceRoll: 7, playerRating: "1,2,3", outcomeIfMet: "1 Point Gain", outcomeElse: "No Gain!" },
        { diceRoll: 8, playerRating: "0,1,2,3", outcomeIfMet: "1 Point Gain" },
        { diceRoll: 9, playerRating: "0,1,2,3", outcomeIfMet: "1 Point Gain..INJURY DEFENSE!" },
        { diceRoll: 10, playerRating: "2,3", outcomeIfMet: "2 Point Gain", outcomeElse: "1 Point Gain!" },
        { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "2 Point Gain" },
        { diceRoll: 12, playerRating: "0,1,2,3", outcomeIfMet: "2 Point Gain" },
        { diceRoll: 13, playerRating: "0,1,2,3", outcomeIfMet: "3 Poin Gain" },
        { diceRoll: 14, playerRating: "0,1,2,3", outcomeIfMet: "4 Point Gain" },
        { diceRoll: 15, playerRating: "3", outcomeIfMet: "8 Point Gain!", outcomeElse: "5 Point Gain" },
    ],
    "R_vs_X": [
        { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "2 point loss" },
        { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "1 Point loss and FUMBLE!" },
        { diceRoll: 0, playerRating: "0,1,2,3", outcomeIfMet: "1 Point Loss" },
        { diceRoll: 1, playerRating: "0,1,2,3", outcomeIfMet: "1 Point Gain..FUMBLE!..INJURY OFFENSE" },
        { diceRoll: 2, playerRating: "0,1,2,3", outcomeIfMet: "NO GAIN!" },
        { diceRoll: 3, playerRating: "0,1,2,3", outcomeIfMet: "NO GAIN!...INJURY DEFENSE" },
        { diceRoll: 4, playerRating: "2,3", outcomeIfMet: "1 Point Gain", outcomeElse: "NO GAIN!" },
        { diceRoll: 5, playerRating: "1,2,3", outcomeIfMet: "1 Point Gain", outcomeElse: "NO GAIN!" },
        { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "1 point Gain" },
        { diceRoll: 7, playerRating: "0,1,2,3", outcomeIfMet: "1 point Gain....INJURY KEY PLAYER" },
        { diceRoll: 8, playerRating: "0,1,2,3", outcomeIfMet: " 2 point Gain" },
        { diceRoll: 9, playerRating: "0,1,2,3", outcomeIfMet: "2 point Gain" },
        { diceRoll: 10, playerRating: "0,1,2,3", outcomeIfMet: "3 point Gain" },
        { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "4 Point Gain" },
        { diceRoll: 12, playerRating: "3", outcomeIfMet: "TOUCHDOWN RUN!!", outcomeElse: "4 Point Gain" },
        { diceRoll: 13, playerRating: "2,3", outcomeIfMet: "TOUCHDOWN RUN!!", outcomeElse: "5 Point Gain" },
        { diceRoll: 14, playerRating: "1,2,3", outcomeIfMet: "TOUCHDOWN RUN!!", outcomeElse: "6 Point Gain" },
        { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN RUN!!" },
    ],
    "X_vs_P": [
        { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "INTERCEPTED! One Zone Downfield, +2 on Return Roll" },
        { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "1 Point Loss Completion" },
        { diceRoll: 0, playerRating: "0,1,2,3", outcomeIfMet: "INTERCEPTED, same zone, -1 on Return Roll" },
        { diceRoll: 1, playerRating: "0,1,2,3", outcomeIfMet: "Pass INCOMPLETE!" },
        { diceRoll: 2, playerRating: "0,1,2,3", outcomeIfMet: "Shaky Handoff! 1-3 NO GAIN! .. 4-6 1 Point RUN" },
        { diceRoll: 3, playerRating: "0,1,2,3", outcomeIfMet: "Run for 1 Point Gain." },
        { diceRoll: 4, playerRating: "0,1,2,3", outcomeIfMet: "1 Point pass completion" },
        { diceRoll: 5, playerRating: "0,1,2,3", outcomeIfMet: "1 Point Run" },
        { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "2 Point Run. INJURY OFFENSIVE PLAYER" },
        { diceRoll: 7, playerRating: "0,1,2,3", outcomeIfMet: "2 Point Pass Completion" },
        { diceRoll: 8, playerRating: "0,1,2,3", outcomeIfMet: "3 Point Run...INJURY DEFENSE" },
        { diceRoll: 9, playerRating: "0,1,2,3", outcomeIfMet: "4 Point Pass" },
        { diceRoll: 10, playerRating: "0,1,2,3", outcomeIfMet: "4 Point Run." },
        { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "5 Point Pass" },
        { diceRoll: 12, playerRating: "0,1,2,3", outcomeIfMet: "6 Point Pass" },
        { diceRoll: 13, playerRating: "0,1,2,3", outcomeIfMet: "7 Point Run" },
        { diceRoll: 14, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN RUN!!!" },
        { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN PASS!" },
    ],
    "X_vs_R": [
        { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "2 Point Loss" },
        { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "FUMBLE! One Zone Downfield" },
        { diceRoll: 0, playerRating: "0,1,2,3", outcomeIfMet: "Run - 1 Point Loss" },
        { diceRoll: 1, playerRating: "0,1,2,3", outcomeIfMet: "Run - 1 Point Loss" },
        { diceRoll: 2, playerRating: "0,1,2,3", outcomeIfMet: "No Gain" },
        { diceRoll: 3, playerRating: "0,1,2,3", outcomeIfMet: "Dicey Pass! 1 INTERCEPTED!, 2-3 Incomplete, 4-6 Complete 1 Point" },
        { diceRoll: 4, playerRating: "0,1,2,3", outcomeIfMet: "Tough Running: 1-4 Gain of 1, 5-6 NO GAIN!" },
        { diceRoll: 5, playerRating: "0,1,2,3", outcomeIfMet: "Run 1 Point Gain" },
        { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "Pass 1 Point Gain" },
        { diceRoll: 7, playerRating: "0,1,2,3", outcomeIfMet: "Run: 2 Point Gain. INJURY KEY PLAYER" },
        { diceRoll: 8, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 2 Point Gain" },
        { diceRoll: 9, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 3 Point Gain" },
        { diceRoll: 10, playerRating: "0,1,2,3", outcomeIfMet: "Run: 3 Point Gain!" },
        { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 4 Point Gain" },
        { diceRoll: 12, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 5 Point Gain" },
        { diceRoll: 13, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 8 Point Gain" },
        { diceRoll: 14, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN PASS!!" },
        { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN PASS!!" },
    ],
    "X_vs_X": [
        { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "SACKED 2 Point Loss!" },
        { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "1 Point loss - Bad Snap" },
        { diceRoll: 0, playerRating: "0,1,2,3", outcomeIfMet: "INTERCEPTED! One Zone Downfield. +1 on Return Roll" },
        { diceRoll: 1, playerRating: "0,1,2,3", outcomeIfMet: "Complete 1 Point Gain. FUMBLE! OFFENSE INJURY" },
        { diceRoll: 2, playerRating: "0,1,2,3", outcomeIfMet: "SACKED! 1 Point Loss" },
        { diceRoll: 3, playerRating: "0,1,2,3", outcomeIfMet: "NO GAIN!...INJURY KEY PLAYER" },
        { diceRoll: 4, playerRating: "0,1,2,3", outcomeIfMet: "No Gain!" },
        { diceRoll: 5, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 1 Point Gain" },
        { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "Chaotic Run Play: 1-3 1 Point Gain, 4-6 FUMBLE (same zone)" },
        { diceRoll: 7, playerRating: "0,1,2,3", outcomeIfMet: "Run: 1 point Gain....INJURY OFFENSE" },
        { diceRoll: 8, playerRating: "0,1,2,3", outcomeIfMet: "Run: 1 point Gain" },
        { diceRoll: 9, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 2 point Gain" },
        { diceRoll: 10, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 3 point Gain" },
        { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 4 Point Gain" },
        { diceRoll: 12, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 5 Point Gain" },
        { diceRoll: 13, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN RUN!!" },
        { diceRoll: 14, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN PASS!!" },
        { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN RUN!!" },
    ],
};

const specialEvents = [
    { diceRoll: 1, event: "Flag: Defense, Major (+2) - INJURY OFFENSE" },
    { diceRoll: 2, event: "Flag: Defense, Minor (+1)" },
    { diceRoll: 3, event: "Flag: Defense, Minor (+1)" },
    { diceRoll: 4, event: "NO GAIN!! - INJURY DEFENSE" },
    { diceRoll: 5, event: "PF: Offense Greater: Defense Minor (+1) OTHERWISE Stop made by random defender" },
    { diceRoll: 6, event: "Flag, Minor Penalty on Lesser Power Factor. If equal, offsetting and time is lost" },
    { diceRoll: 7, event: "PF: Defense Greater: Offense Minor Penalty (-1) OTHERWISE Gain of 1 by random player" },
    { diceRoll: 8, event: "Gain of 1. COLLISION - two random players stunned." },
    { diceRoll: 9, event: "Offense: gain equal to best skill of random offensive player. INJURY OFFENSE" },
    { diceRoll: 10, event: "Flag: Offense, Minor (-1)" },
    { diceRoll: 11, event: "Flag: Offense, Minor (-1)" },
    { diceRoll: 12, event: "Flag: Offense, Major (-2) INJURY DEFENSE" },
];

// -------------------- Basic helpers --------------------

function populateTeamDropdowns() {
    const homeTeamDropdown = document.getElementById('home-team');
    const awayTeamDropdown = document.getElementById('away-team');

    homeTeamDropdown.innerHTML = '<option value="" selected disabled>Select Home Team</option>';
    awayTeamDropdown.innerHTML = '<option value="" selected disabled>Select Away Team</option>';

    Object.keys(teams).forEach(team => {
        const pf = teams[team].powerfactor.PF;

        const option1 = document.createElement('option');
        option1.value = team;
        option1.textContent = `${team} (PF: ${pf})`;
        homeTeamDropdown.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = team;
        option2.textContent = `${team} (PF: ${pf})`;
        awayTeamDropdown.appendChild(option2);
    });
}

function displayTeamDetails(teamKey, elementId) {
    const team = teams[teamKey];
    const element = document.getElementById(elementId);

    if (!team) {
        element.innerHTML = '<p>No team selected</p>';
        return;
    }

    const offenseDetails = team.offense.map(player => `
        Rank: ${player.rank}, ${player.firstName} ${player.lastName}, 
        ${player.position}, P: ${player.P} R: ${player.R} X: ${player.X}
        ${player.isInjured ? "<strong>(Injured)</strong>" : ""}
    `).join('<br>');

    const defenseDetails = team.defense.map(player => `
        Rank: ${player.rank}, ${player.firstName} ${player.lastName}, 
        ${player.position}, P: ${player.P} R: ${player.R} X: ${player.X}
        ${player.isInjured ? "<strong>(Injured)</strong>" : ""}
    `).join('<br>');

    element.innerHTML = `
        <h3>${teamKey}</h3>
        <p><strong>Offense:</strong><br>${offenseDetails}</p>
        <p><strong>Defense:</strong><br>${defenseDetails}</p>
    `;
}

function getOffenseAndDefenseTeams() {
    const isHomeOffense = document.getElementById('home-offense').checked;
    const homeTeam = document.getElementById('home-team').value;
    const awayTeam = document.getElementById('away-team').value;

    return {
        offenseTeam: isHomeOffense ? homeTeam : awayTeam,
        defenseTeam: isHomeOffense ? awayTeam : homeTeam,
    };
}

function getSelectedPlayChart() {
    const playChartRadios = document.getElementsByName('play-chart');
    for (const radio of playChartRadios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return "normal";
}

function getSelectedTeams() {
    const homeTeamDropdown = document.getElementById('home-team');
    const awayTeamDropdown = document.getElementById('away-team');

    const homeTeam = homeTeamDropdown.value;
    const awayTeam = awayTeamDropdown.value;

    return { homeTeam, awayTeam };
}

// -------------------- Injury management --------------------

function populateInjuryTeamDropdown() {
    const injuryTeamDropdown = document.getElementById('injury-team');
    const homeTeam = document.getElementById('home-team').value;
    const awayTeam = document.getElementById('away-team').value;

    injuryTeamDropdown.innerHTML = '<option value="" disabled selected>Select Team</option>';

    if (homeTeam) {
        const homeOption = document.createElement('option');
        homeOption.value = homeTeam;
        homeOption.textContent = `Home: ${homeTeam}`;
        injuryTeamDropdown.appendChild(homeOption);
    }
    if (awayTeam) {
        const awayOption = document.createElement('option');
        awayOption.value = awayTeam;
        awayOption.textContent = `Away: ${awayTeam}`;
        injuryTeamDropdown.appendChild(awayOption);
    }
}

document.getElementById('home-team').addEventListener('change', populateInjuryTeamDropdown);
document.getElementById('away-team').addEventListener('change', populateInjuryTeamDropdown);

function displayInjuredPlayers() {
    const injuredList = document.getElementById('injured-players-list');
    injuredList.innerHTML = '';

    Object.keys(teams).forEach(teamName => {
        const offenseInjuries = teams[teamName].offense.filter(player => player.isInjured);
        const defenseInjuries = teams[teamName].defense.filter(player => player.isInjured);

        offenseInjuries.forEach(player => {
            const listItem = document.createElement('li');
            listItem.textContent = `${player.firstName} ${player.lastName} (${teamName}, Offense, Rank: ${player.rank})`;
            injuredList.appendChild(listItem);
        });

        defenseInjuries.forEach(player => {
            const listItem = document.createElement('li');
            listItem.textContent = `${player.firstName} ${player.lastName} (${teamName}, Defense, Rank: ${player.rank})`;
            injuredList.appendChild(listItem);
        });
    });
}

function markInjured() {
    const rank = parseInt(document.getElementById('injury-rank').value, 10);
    const teamName = document.getElementById('injury-team').value;
    const isOffense = document.getElementById('is-offense').checked;

    if (!rank || !teamName) {
        alert('Please select a team and enter a valid rank.');
        return;
    }

    const playerList = isOffense ? teams[teamName].offense : teams[teamName].defense;
    const player = playerList.find(p => p.rank === rank);

    if (player) {
        if (!player.isInjured) {
            player.backupStats = { P: player.P, R: player.R, X: player.X };
            player.P = 0;
            player.R = 0;
            player.X = 0;
            player.isInjured = true;
            alert(`${player.firstName} ${player.lastName} has been marked as injured.`);
        } else {
            alert(`${player.firstName} ${player.lastName} is already injured.`);
        }
    } else {
        alert('Player not found.');
    }

    displayInjuredPlayers();
}

function markPlayerUninjured(player) {
    if (player.isInjured) {
        player.P = player.backupStats.P;
        player.R = player.backupStats.R;
        player.X = player.backupStats.X;
        player.isInjured = false;
        player.backupStats = {};
    }
}

function promptToUninjurePlayers(teamKey) {
    const team = teams[teamKey];
    if (!team) return;

    const injuredPlayers = [
        ...team.offense.filter(player => player.isInjured),
        ...team.defense.filter(player => player.isInjured),
    ];

    injuredPlayers.forEach(player => {
        const confirmUninjure = confirm(
            `Do you want to mark ${player.firstName} ${player.lastName} (Rank: ${player.rank}, ${player.position}) as uninjured?`
        );
        if (confirmUninjure) {
            markPlayerUninjured(player);
        }
    });

    displayInjuredPlayers();
    displayTeamDetails(teamKey, teamKey === getOffenseAndDefenseTeams().offenseTeam ? 'home-team-details' : 'away-team-details');
}

document.querySelectorAll('input[name="offense-team"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const { homeTeam, awayTeam } = getSelectedTeams();
        if (homeTeam && (teams[homeTeam].offense.some(p => p.isInjured) || teams[homeTeam].defense.some(p => p.isInjured))) {
            promptToUninjurePlayers(homeTeam);
        }
        if (awayTeam && (teams[awayTeam].offense.some(p => p.isInjured) || teams[awayTeam].defense.some(p => p.isInjured))) {
            promptToUninjurePlayers(awayTeam);
        }
    });
});

// -------------------- Random players --------------------

function getRandomDefensivePlayer(defenseTeamKey) {
    const defenseTeam = teams[defenseTeamKey].defense;

    const rankWeights = [0.25, 0.20, 0.14, 0.12, 0.11, 0.10, 0.08];

    const cumulativeWeights = rankWeights.reduce((acc, weight) => {
        acc.push((acc.length > 0 ? acc[acc.length - 1] : 0) + weight);
        return acc;
    }, []);

    const random = Math.random();
    const selectedRankIndex = cumulativeWeights.findIndex(cw => random <= cw);

    const selectedPlayer = defenseTeam[selectedRankIndex];

    return selectedPlayer
        ? `${selectedPlayer.firstName} ${selectedPlayer.lastName} (Rank: ${selectedPlayer.rank})`
        : "No valid defensive player found";
}

function getRandomPlayer(teamKey, isOffense) {
    const playerPool = isOffense ? teams[teamKey].offense : teams[teamKey].defense;
    const validPlayers = playerPool.filter(player => player.rank >= 1 && player.rank <= 7);
    const randomIndex = Math.floor(Math.random() * validPlayers.length);
    const selectedPlayer = validPlayers[randomIndex];

    return selectedPlayer
        ? `${selectedPlayer.firstName} ${selectedPlayer.lastName} (Rank: ${selectedPlayer.rank})`
        : "No valid player found";
}

function getReceiverForPassPlay(teamKey) {
    const offenseTeam = teams[teamKey];
    const playerFinderP = offenseTeam.playerFinder.P;
    const randomIndex = Math.floor(Math.random() * playerFinderP.length);
    const rank = parseInt(playerFinderP[randomIndex], 10);
    const receiver = offenseTeam.offense.find(player => player.rank === rank);

    return receiver
        ? `${receiver.firstName} ${receiver.lastName} (Rank: ${receiver.rank})`
        : "No valid receiver found";
}

// -------------------- Influencing player --------------------

function getInfluencingPlayer(offenseTeamKey, defenseTeamKey, playCall) {
    const isOffense = Math.random() < 0.5;
    const teamKey = isOffense ? offenseTeamKey : defenseTeamKey;
    const playerPool = isOffense ? teams[teamKey].offense : teams[teamKey].defense;

    const rankWeights = [0.27, 0.18, 0.14, 0.12, 0.11, 0.10, 0.08];
    const cumulativeWeights = rankWeights.reduce((acc, w) => {
        acc.push((acc[acc.length - 1] || 0) + w);
        return acc;
    }, []);

    const random = Math.random();
    const selectedRankIndex = cumulativeWeights.findIndex(cw => random <= cw);
    const selectedPlayer = playerPool[selectedRankIndex];

    const playerRating = selectedPlayer[playCall];

    return {
        name: `${selectedPlayer.firstName} ${selectedPlayer.lastName}`,
        rating: playerRating,
        isOffense,
    };
}

// -------------------- Dice and chart resolution --------------------

function rollDice() {
    const offenseDie = Math.ceil(Math.random() * 6);
    const defenseDie = Math.ceil(Math.random() * 6);
    const twelveSidedDie1 = Math.ceil(Math.random() * 12);
    const eventDie = Math.ceil(Math.random() * 6);
    let twelveSidedDie2 = null;
    const fumbleDie = Math.ceil(Math.random() * 6);
    const returnTableDie = Math.ceil(Math.random() * 12);

    const { offenseTeam, defenseTeam } = getOffenseAndDefenseTeams();

    const offenseTeamData = teams[offenseTeam];
    const defenseTeamData = teams[defenseTeam];

    const offensePF = offenseTeamData.powerfactor.PF;
    const defensePF = defenseTeamData.powerfactor.PF;
    const pfDifference = Math.abs(offensePF - defensePF);
    const higherPFTeam = offensePF > defensePF ? offenseTeam : defenseTeam;

    let useHigherD12 = null;
    if (eventDie <= pfDifference && pfDifference > 0) {
        twelveSidedDie2 = Math.ceil(Math.random() * 12);
        useHigherD12 = higherPFTeam === offenseTeam;
    }

    const finalTwelveSidedDie = useHigherD12 !== null
        ? (useHigherD12 ? Math.max(twelveSidedDie1, twelveSidedDie2) : Math.min(twelveSidedDie1, twelveSidedDie2))
        : twelveSidedDie1;

    const selectedPlayChart = getSelectedPlayChart();
    const offensePlayChart = offenseTeamData.playCharts[selectedPlayChart];

    const offensePlayCall = offensePlayChart[offenseDie - 1];
    const defensePlayCall = offensePlayChart[defenseDie - 1];

    const matchup = `${offensePlayCall} vs ${defensePlayCall}`;
    const chartKey = `${offensePlayCall}_vs_${defensePlayCall}`;

    console.log("Matchup:", matchup);
    console.log("Chart Key:", chartKey);

    const influencingPlayer = getInfluencingPlayer(offenseTeam, defenseTeam, offensePlayCall);
    const playerImpact = influencingPlayer.isOffense
        ? influencingPlayer.rating
        : -influencingPlayer.rating;

    const modifiedRoll = finalTwelveSidedDie + playerImpact;

    const chart = footballCharts[chartKey];
    let chartResult = "No valid outcome";
    let selectedPlayerName = "";
    const influencingPlayerName = `${influencingPlayer.name} (${influencingPlayer.isOffense ? "Offense" : "Defense"})`;

    if (chart) {
        const chartEntry = chart.find(entry => entry.diceRoll === modifiedRoll);

        if (chartEntry) {
            if (chartKey.includes("X_vs_")) {
                const rankIndex = Math.floor(Math.random() * offenseTeamData.playerFinder.X.length);
                const rank = parseInt(offenseTeamData.playerFinder.X[rankIndex], 10);

                const selectedPlayer = offenseTeamData.offense.find(p => p.rank === rank);

                if (selectedPlayer) {
                    selectedPlayerName = `${selectedPlayer.firstName} ${selectedPlayer.lastName}`;
                    const playerRating = selectedPlayer.X;

                    if (chartEntry.playerRating.split(",").map(Number).includes(playerRating)) {
                        chartResult = chartEntry.outcomeIfMet;
                    } else {
                        chartResult = chartEntry.outcomeElse || "No valid outcome";
                    }
                } else {
                    chartResult = "No matching player found for the selected rank.";
                }
            } else if (chartKey.includes("R_vs_")) {
                const rankIndex = Math.floor(Math.random() * offenseTeamData.playerFinder.R.length);
                const rank = parseInt(offenseTeamData.playerFinder.R[rankIndex], 10);

                const selectedPlayer = offenseTeamData.offense.find(p => p.rank === rank);

                if (selectedPlayer) {
                    selectedPlayerName = `${selectedPlayer.firstName} ${selectedPlayer.lastName}`;
                    const playerRating = selectedPlayer.R;

                    if (chartEntry.playerRating.split(",").map(Number).includes(playerRating)) {
                        chartResult = chartEntry.outcomeIfMet;
                    } else {
                        chartResult = chartEntry.outcomeElse || "No valid outcome";
                    }
                } else {
                    chartResult = "No matching player found for the selected rank.";
                }
            } else {
                const qb = offenseTeamData.offense.find(player => player.position === "QB");

                if (qb) {
                    let ratingToCheck;
                    if (chartKey.includes("P_vs_P")) {
                        ratingToCheck = qb.P;
                    } else if (chartKey.includes("P_vs_R")) {
                        ratingToCheck = qb.P;
                    } else if (chartKey.includes("P_vs_X") || chartKey.includes("D_vs_X")) {
                        ratingToCheck = qb.X;
                    }

                    console.log("QB Selected:", qb.firstName, qb.lastName, "Rating to Check:", ratingToCheck);

                    if (chartEntry.playerRating.split(",").map(Number).includes(ratingToCheck)) {
                        chartResult = chartEntry.outcomeIfMet;
                    } else {
                        chartResult = chartEntry.outcomeElse || "No valid outcome";
                    }
                    selectedPlayerName = `${qb.firstName} ${qb.lastName}`;
                } else {
                    chartResult = "No QB found on offense team.";
                }
            }
        } else {
            console.log("No chart entry found for modified roll:", modifiedRoll);
            chartResult = "No matching chart entry found.";
        }
    } else {
        console.log("Chart not found for key:", chartKey);
        chartResult = "No chart available for this matchup.";
    }

    let specialEventResult = "";
    if (eventDie === 6) {
        const specialEvent = specialEvents.find(event => event.diceRoll === twelveSidedDie1);
        specialEventResult = specialEvent ? `Special Event: ${specialEvent.event}` : "No special event found.";
    }

    const defensivePlayerName = getRandomDefensivePlayer(defenseTeam);
    const randomOffensivePlayerName = getRandomPlayer(offenseTeam, true);
    const randomDefensivePlayerName = getRandomPlayer(defenseTeam, false);

    let receiverName = "";
    if (chartKey.includes("P_vs_")) {
        receiverName = getReceiverForPassPlay(offenseTeam);
    }

       // Save context for the game tracker so the next "Apply To Game" knows what just happened
        // Save context for the game tracker so the next "Apply To Game" knows what just happened
    lastPlayContext = {
        offenseTeam,
        defenseTeam,
        chartResult,
        specialEventResult,
        selectedPlayerName,
        receiverName,
        influencingPlayerName,
        influencingIsOffense: influencingPlayer ? influencingPlayer.isOffense : null,
        randomOffensivePlayerName,
        randomDefensivePlayerName,
        defensivePlayerName,       // specific defender making the stop
        offensePlayCall,
        defensePlayCall
    };



    let resultsContainer = document.querySelector('.results-container');
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.className = 'results-container';
        document.getElementById('dice-result').parentNode.insertBefore(resultsContainer, document.getElementById('dice-result'));
    }

    resultsContainer.innerHTML = '';

    const mainResult = document.createElement('div');
    mainResult.className = 'dice-result';
    mainResult.innerHTML = `
        <p><strong>Dice Rolls:</strong> Offense Die: ${offenseDie}, Defense Die: ${defenseDie}, 12-Sided Die: ${twelveSidedDie1}, Event Die: ${eventDie}</p>
        <p><strong>Additional Dice:</strong> FUMBLE DIE: ${fumbleDie}, RETURN TABLE DIE: ${returnTableDie}</p>
        ${twelveSidedDie2 !== null ? `<p><strong>Second D12:</strong> ${twelveSidedDie2}</p>` : ""}
        ${useHigherD12 !== null ? `<p><strong>Power Factor Trigger:</strong> ${higherPFTeam} has higher PF. Using ${useHigherD12 ? "higher" : "lower"} D12.</p>` : ""}
        <p><strong>Play Call:</strong> Offense: ${offensePlayCall}, Defense: ${defensePlayCall}</p>
        <p><strong>Modified Roll:</strong> ${modifiedRoll}</p>
        <p class="influencing-player"><strong>Influencing Player:</strong> ${influencingPlayerName}</p>
        <p><strong>Selected Player:</strong> ${selectedPlayerName || "N/A"}</p>
        ${receiverName ? `<p><strong>Receiver:</strong> ${receiverName}</p>` : ""}
        <p><strong>Defensive Player Making Stop:</strong> ${defensivePlayerName}</p>
        <p><strong>Random Offensive Player:</strong> ${randomOffensivePlayerName}</p>
        <p><strong>Random Defensive Player:</strong> ${randomDefensivePlayerName}</p>
    `;

    const chartResultBox = document.createElement('div');
    chartResultBox.className = 'chart-result';
    chartResultBox.innerHTML = `
        <h3>Chart Result</h3>
        <p>${chartResult}</p>
    `;

    resultsContainer.appendChild(mainResult);
    resultsContainer.appendChild(chartResultBox);

    if (eventDie === 6) {
        const specialEventBox = document.createElement('div');
        specialEventBox.className = 'special-event-result';
        specialEventBox.innerHTML = `
            <h3>Special Event</h3>
            <p>${specialEventResult}</p>
        `;
        resultsContainer.appendChild(specialEventBox);
    }

    document.getElementById('dice-result').innerHTML = '';
}

// -------------------- Game tracker UI and logic --------------------

function createGameTrackerUI() {
    const container = document.createElement('div');
    container.id = 'game-tracker';

    container.innerHTML = `
        <h2>Game Tracker</h2>

        <div class="game-summary">
            <div><strong>Play:</strong> <span id="gt-play-count">1 / 27</span></div>
            <div><strong>Possession:</strong> <span id="gt-possession">Home</span></div>
            <div><strong>Ball Position:</strong> <span id="gt-ball-position">Zone 0</span></div>
        </div>

        <div class="scoreboard">
            <div class="score-team">
                <span id="gt-home-name">Home</span>
                <span id="gt-home-score">0</span>
            </div>
            <div class="score-team">
                <span id="gt-away-name">Away</span>
                <span id="gt-away-score">0</span>
            </div>
        </div>

        <div class="zone-input">
            <label for="zone-change-input">Zone change this play:</label>
            <input type="number" id="zone-change-input" value="0" min="-10" max="10">
            <button id="gt-apply-play">Apply To Game</button>
            <button id="gt-undo-play">Undo Last Play</button>
        </div>

        <div class="x-play-type">
            <span>If this play call was X, treat it as:</span>
            <label><input type="radio" name="x-play-type" value="R" checked> Run</label>
            <label><input type="radio" name="x-play-type" value="P"> Pass</label>
        </div>

        <div class="special-event-toggle">
            <label>
                <input type="checkbox" id="gt-special-no-stats">
                Treat this play as Special Event (no player stats)
            </label>
        </div>

                <div class="stop-type-select">
            <span>For zero or negative zone plays, mark the defensive result:</span>
            <select id="gt-stop-type">
                <option value="normal" selected>Normal stop</option>
                <option value="int">Interception</option>
                <option value="fum">Fumble recovery</option>
                <option value="safety">Safety</option>
            </select>
        </div>


        <div class="play-slots" id="gt-play-slots">
            ${Array.from({ length: gameState.totalPlays }, (_, i) => `
                <div class="play-slot" data-play-index="${i + 1}">${i + 1}</div>
            `).join('')}
        </div>

        <div class="play-log">
            <h3>Play Log</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Off</th>
                        <th>Def</th>
                        <th>Zones</th>
                        <th>Score Δ</th>
                        <th>Ball Before</th>
                        <th>Ball After</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody id="gt-play-log-body"></tbody>
            </table>
        </div>

               <div class="player-stats">
            <h3>Player Stats</h3>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Side</th>
                        <th>Rush Yds</th>
                        <th>Rec Yds</th>
                        <th>Norm Stops</th>
                        <th>INT</th>
                        <th>FUM Rec</th>
                        <th>Safeties</th>
                    </tr>
                </thead>
                <tbody id="gt-player-stats-body"></tbody>
            </table>
        </div>

    `;

    document.body.appendChild(container);

    document.getElementById('gt-apply-play').addEventListener('click', applyCurrentPlayToGame);
    document.getElementById('gt-undo-play').addEventListener('click', undoLastPlay);

    refreshGameTrackerUI();
    refreshPlaySlotsUI();
    refreshPlayLogUI();
    refreshPlayerStatsUI();
}



function updateScoreboardTeamNames() {
    const homeSelect = document.getElementById('home-team');
    const awaySelect = document.getElementById('away-team');

    const homeName = homeSelect && homeSelect.value ? homeSelect.value : 'Home';
    const awayName = awaySelect && awaySelect.value ? awaySelect.value : 'Away';

    const homeNameSpan = document.getElementById('gt-home-name');
    const awayNameSpan = document.getElementById('gt-away-name');

    if (homeNameSpan) homeNameSpan.textContent = homeName;
    if (awayNameSpan) awayNameSpan.textContent = awayName;
}

function refreshGameTrackerUI() {
    const playCountSpan = document.getElementById('gt-play-count');
    const possessionSpan = document.getElementById('gt-possession');
    const ballPosSpan = document.getElementById('gt-ball-position');
    const homeScoreSpan = document.getElementById('gt-home-score');
    const awayScoreSpan = document.getElementById('gt-away-score');

    if (playCountSpan) {
        playCountSpan.textContent = `${Math.min(gameState.currentPlay, gameState.totalPlays)} / ${gameState.totalPlays}`;
    }

    const isHomeOffense = document.getElementById('home-offense')?.checked;
    if (possessionSpan && isHomeOffense !== null && isHomeOffense !== undefined) {
        possessionSpan.textContent = isHomeOffense ? 'Home' : 'Away';
    }

    if (ballPosSpan) {
        ballPosSpan.textContent = `Zone ${gameState.ballPosition}`;
    }

    if (homeScoreSpan) homeScoreSpan.textContent = gameState.homeScore;
    if (awayScoreSpan) awayScoreSpan.textContent = gameState.awayScore;

    refreshPlaySlotsUI();
}

function refreshPlaySlotsUI() {
    const container = document.getElementById('gt-play-slots');
    if (!container) return;

    const children = container.querySelectorAll('.play-slot');
    children.forEach(slot => {
        const index = parseInt(slot.getAttribute('data-play-index'), 10);
        slot.classList.remove('used', 'current');

        if (index < gameState.currentPlay) {
            slot.classList.add('used');
        } else if (index === gameState.currentPlay) {
            slot.classList.add('current');
        }
    });
}


function refreshPlayerStatsUI() {
    const tbody = document.getElementById('gt-player-stats-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    const statsArray = buildPlayerStatsFromPlays();
    statsArray.forEach(stat => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${stat.name}</td>
            <td>${stat.team}</td>
            <td>${stat.side}</td>
            <td>${stat.rushYds}</td>
            <td>${stat.recYds}</td>
            <td>${stat.stops}</td>
        `;
        tbody.appendChild(tr);
    });
}


function applyCurrentPlayToGame() {
    if (!lastPlayContext) {
        alert('Roll the dice first so there is a play to record.');
        return;
    }
    if (gameState.currentPlay > gameState.totalPlays) {
        alert('All 27 plays have been used.');
        return;
    }

    const zoneInput = document.getElementById('zone-change-input');
    const zoneChange = parseInt(zoneInput.value, 10);

    if (Number.isNaN(zoneChange)) {
        alert('Enter a numeric zone change.');
        return;
    }

    const homeTeam = document.getElementById('home-team').value;
    const awayTeam = document.getElementById('away-team').value;
    const isHomeOffense = document.getElementById('home-offense').checked;

    const offenseTeamName = isHomeOffense ? homeTeam : awayTeam;
    const defenseTeamName = isHomeOffense ? awayTeam : homeTeam;

    // Read the special event no stats checkbox
    const specialNoStatsCheckbox = document.getElementById('gt-special-no-stats');
    const ignoreStats = specialNoStatsCheckbox ? specialNoStatsCheckbox.checked : false;
    const stopTypeSelect = document.getElementById('gt-stop-type');
    const stopType = stopTypeSelect ? stopTypeSelect.value : 'normal';


    const ballBefore = gameState.ballPosition;
    let ballAfter = ballBefore;
    let scoreChange = 0;
    let turnover = false;
    let reachedEndzone = false;

    // Work out how many zones and points
    if (zoneChange > 0) {
        ballAfter = ballBefore + zoneChange;
        if (ballAfter >= 10) {
            ballAfter = 10;
            reachedEndzone = true;
        }
        scoreChange += zoneChange;
        if (reachedEndzone) {
            scoreChange += 4;
        }
    } else {
        ballAfter = Math.max(0, ballBefore + zoneChange);
        scoreChange += zoneChange;
        turnover = true;
    }

    // Apply score to the offense
    if (isHomeOffense) {
        gameState.homeScore += scoreChange;
    } else {
        gameState.awayScore += scoreChange;
    }

    // Raw play type (what the chart called): P, R, or X
    const rawPlayType = lastPlayContext.offensePlayCall || null;

    // Stat play type (how we want to count it): P or R
    let statPlayType = rawPlayType;
    if (rawPlayType === 'X') {
        const xRadios = document.querySelectorAll('input[name="x-play-type"]');
        const selected = Array.from(xRadios).find(r => r.checked);
        statPlayType = selected ? selected.value : 'R';
    }

    // Record the play in history
    const playEntry = {
        number: gameState.currentPlay,
        offenseTeamName,
        defenseTeamName,
        zoneChange,
        scoreChange,
        ballBefore,
        ballAfter,
        reachedEndzone,
        turnover,
        rawPlayType,          // original chart type
        statPlayType,         // type for stats: P or R (or null)
        ignoreStats,
        stopType,           // true when you checked "Special Event (no player stats)"
        chartResult: lastPlayContext.chartResult,
        specialEvent: lastPlayContext.specialEventResult || '',
        context: {
            selectedPlayerName: lastPlayContext.selectedPlayerName,
            receiverName: lastPlayContext.receiverName,
            influencingPlayerName: lastPlayContext.influencingPlayerName,
            influencingIsOffense: lastPlayContext.influencingIsOffense,
            randomOffensivePlayerName: lastPlayContext.randomOffensivePlayerName,
            randomDefensivePlayerName: lastPlayContext.randomDefensivePlayerName,
            defensivePlayerName: lastPlayContext.defensivePlayerName
        }
    };

    gameState.plays.push(playEntry);

    // Update ball position for next snap
    if (reachedEndzone || turnover) {
        gameState.ballPosition = 0;
        const homeOffenseRadio = document.getElementById('home-offense');
        if (homeOffenseRadio) {
            homeOffenseRadio.checked = !isHomeOffense;
        }
    } else {
        gameState.ballPosition = ballAfter;
    }

    gameState.currentPlay += 1;

    // Clear the special event checkbox for the next play
    if (specialNoStatsCheckbox) {
        specialNoStatsCheckbox.checked = false;
    }

    if (specialNoStatsCheckbox) {
        specialNoStatsCheckbox.checked = false;
    }
    if (stopTypeSelect) {
        stopTypeSelect.value = 'normal';
    }

    // Refresh UI
    refreshGameTrackerUI();
    refreshPlayLogUI();
    refreshPlayerStatsUI();
}



function undoLastPlay() {
    if (gameState.plays.length === 0) {
        return;
    }

    const last = gameState.plays.pop();
    gameState.currentPlay = Math.max(1, last.number);

    const homeTeam = document.getElementById('home-team').value;
    const isHomeOffense = last.offenseTeamName === homeTeam;

    if (isHomeOffense) {
        gameState.homeScore -= last.scoreChange;
    } else {
        gameState.awayScore -= last.scoreChange;
    }

    gameState.ballPosition = last.ballBefore;

    const homeOffenseRadio = document.getElementById('home-offense');
    if (homeOffenseRadio) {
        homeOffenseRadio.checked = isHomeOffense;
    }

    refreshGameTrackerUI();
    refreshPlayLogUI();
    refreshPlayerStatsUI();
}

function refreshPlayLogUI() {
    const tbody = document.getElementById('gt-play-log-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    gameState.plays.forEach(play => {
        const tr = document.createElement('tr');

        const notes = [];
        if (play.reachedEndzone) notes.push('Endzone');
        if (play.turnover) notes.push('Turnover');
        if (play.chartResult) notes.push(play.chartResult);
        if (play.specialEvent) notes.push(`Special: ${play.specialEvent}`);

        tr.innerHTML = `
            <td>${play.number}</td>
            <td>${play.offenseTeamName}</td>
            <td>${play.defenseTeamName}</td>
            <td>${play.zoneChange}</td>
            <td>${play.scoreChange}</td>
            <td>${play.ballBefore}</td>
            <td>${play.ballAfter}</td>
            <td>${notes.join(' | ')}</td>
        `;

        tbody.appendChild(tr);
    });
}

function buildPlayerStatsFromPlays() {
    const stats = {};

    function ensureEntry(name, team, side) {
        if (!name || name === 'N/A') return null;
        const key = `${name}::${team}::${side}`;
        if (!stats[key]) {
            stats[key] = {
                name,
                team,
                side,
                rushYds: 0,
                recYds: 0,
                normalStops: 0,
                interceptions: 0,
                fumbleRecoveries: 0,
                safeties: 0
            };
        }
        return stats[key];
    }

    gameState.plays.forEach(play => {
        const ctx = play.context;
        if (!ctx) return;

        // Skip special event no-stats plays
        if (play.ignoreStats) {
            return;
        }

        const offenseTeam = play.offenseTeamName;
        const defenseTeam = play.defenseTeamName;
        const zones = play.zoneChange;
        const yards = zones * 10;
        const statType = play.statPlayType; // "R" or "P" (after X override)

        // Positive plays: offensive yards
        if (zones >= 1 && yards > 0) {
            if (statType === 'R') {
                const entry = ensureEntry(ctx.selectedPlayerName, offenseTeam, 'Offense');
                if (entry) {
                    entry.rushYds += yards;
                }
            } else if (statType === 'P') {
                // Pass: receiver gets yards, or fall back to selected player for X-as-pass
                const targetName = ctx.receiverName && ctx.receiverName.trim()
                    ? ctx.receiverName
                    : ctx.selectedPlayerName;

                const entry = ensureEntry(targetName, offenseTeam, 'Offense');
                if (entry) {
                    entry.recYds += yards;
                }
            }
        }

        // Zero or negative plays: defensive result type
        if (zones <= 0 && ctx.defensivePlayerName) {
            const entry = ensureEntry(ctx.defensivePlayerName, defenseTeam, 'Defense');
            if (entry) {
                const st = play.stopType || 'normal';
                if (st === 'int') {
                    entry.interceptions += 1;
                } else if (st === 'fum') {
                    entry.fumbleRecoveries += 1;
                } else if (st === 'safety') {
                    entry.safeties += 1;
                } else {
                    entry.normalStops += 1;
                }
            }
        }
    });

    return Object.values(stats);
}






function refreshPlayerStatsUI() {
    const tbody = document.getElementById('gt-player-stats-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    const statsArray = buildPlayerStatsFromPlays();
    statsArray.forEach(stat => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${stat.name}</td>
            <td>${stat.team}</td>
            <td>${stat.side}</td>
            <td>${stat.rushYds}</td>
            <td>${stat.recYds}</td>
            <td>${stat.normalStops}</td>
            <td>${stat.interceptions}</td>
            <td>${stat.fumbleRecoveries}</td>
            <td>${stat.safeties}</td>
        `;
        tbody.appendChild(tr);
    });
}




// -------------------- Team detail wiring and init --------------------

function populateTeamDetails() {
    const { homeTeam, awayTeam } = getSelectedTeams();

    if (homeTeam) displayTeamDetails(homeTeam, 'home-team-details');
    if (awayTeam) displayTeamDetails(awayTeam, 'away-team-details');

    updateScoreboardTeamNames();
    populateInjuryTeamDropdown();
}

document.getElementById('home-team').addEventListener('change', populateTeamDetails);
document.getElementById('away-team').addEventListener('change', populateTeamDetails);

document.getElementById('roll-dice').addEventListener('click', rollDice);

populateTeamDropdowns();
populateInjuryTeamDropdown();
createGameTrackerUI();
updateScoreboardTeamNames();

