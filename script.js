const teams = {
"Milwaukee": {
        offense: [
            { rank: 1, firstName: "Benjamin", lastName: "McDonald", position: "WR", P: 1, R: 2, X: 2 },
            { rank: 2, firstName: "Donnell", lastName: "McGee", position: "QB", P: 1, R: 1, X: 2 },
            { rank: 3, firstName: "Bob", lastName: "Gains", position: "OL", P: 2, R: 2, X: 0 },
            { rank: 4, firstName: "Erik", lastName: "Wolfe", position: "OL", P: 2, R: 1, X: 1 },
            { rank: 5, firstName: "Mark", lastName: "Garrison", position: "OL", P: 1, R: 1, X: 2 },
            { rank: 6, firstName: "Richard", lastName: "Yu", position: "OL", P: 1, R: 2, X: 0 },
            { rank: 7, firstName: "Saul", lastName: "Bond", position: "WR", P: 1, R: 1, X: 0 },
            { rank: 8, firstName: "Mike", lastName: "Whitaker", position: "OL", P: 1, R: 1, X: 1 },
            { rank: 9, firstName: "Steven", lastName: "Lopez", position: "Extra", P: 0, R: 1, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Curtis", lastName: "Rouse", position: "LB", P: 1, R: 2, X: 1 },
            { rank: 2, firstName: "Patrick", lastName: "Holmes", position: "LB", P: 0, R: 2, X: 3 },
            { rank: 3, firstName: "Jack", lastName: "Coleman", position: "DL", P: 1, R: 1, X: 1 },
            { rank: 4, firstName: "Damon", lastName: "Morton", position: "DB", P: 2, R: 0, X: 1 },
            { rank: 5, firstName: "Edgar", lastName: "Moore", position: "DB", P: 2, R: 0, X: 1 },
            { rank: 6, firstName: "Don", lastName: "Howell", position: "DL", P: 0, R: 2, X: 1 },
            { rank: 7, firstName: "Frank", lastName: "Graham", position: "LB", P: 0, R: 1, X: 2 },
            { rank: 8, firstName: "Edward", lastName: "Mitchell", position: "LB", P: 0, R: 2, X: 0 },
            { rank: 9, firstName: "Blank", lastName: "Blank", position: "Extra", P: 0, R: 0, X: 0 },
        ],
        playCharts: {
            normal: ["P", "P", "R", "R", "X", "X"],
            control: ["P", "R", "R", "R", "R", "X"],
            hurry: ["X", "X", "P", "P", "P", "R"],
        },
         playerFinder: {
            P: ["1", "1", "1", "7", "7", "7"],
            R: ["1", "1", "1", "7", "6", "2"],
            X: ["6", "6", "6", "1", "1", "1"],
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
            { rank: 4, firstName: "Domingo", lastName: "Kline", position: "WR", P: 3, R: 0, X: 0 },
            { rank: 5, firstName: "James", lastName: "Smith", position: "OL", P: 1, R: 1, X: 3 },
            { rank: 6, firstName: "Manny", lastName: "Bond", position: "OL", P: 1, R: 1, X: 2 },
            { rank: 7, firstName: "Jerrod", lastName: "McLean", position: "RB", P: 0, R: 1, X: 2 },
            { rank: 8, firstName: "Bruce", lastName: "Lynch", position: "HB", P: 0, R: 1, X: 2 },
            { rank: 9, firstName: "Blank", lastName: "Blank", position: "Extra", P: 0, R: 0, X: 0 },
        ],
        defense: [
            { rank: 1, firstName: "Philip", lastName: "Vallerin", position: "DL", P: 2, R: 1, X: 2 },
            { rank: 2, firstName: "Tony", lastName: "Finley", position: "DB", P: 2, R: 0, X: 2 },
            { rank: 3, firstName: "Floyd", lastName: "Walton", position: "DL", P: 2, R: 2, X: 2 },
            { rank: 4, firstName: "Roose", lastName: "Dixon", position: "DL", P: 0, R: 2, X: 2 },
            { rank: 5, firstName: "Hubert", lastName: "Vazquez", position: "DB", P: 2, R: 2, X: 2 },
            { rank: 6, firstName: "Abraham", lastName: "Ames", position: "LB", P: 1, R: 1, X: 1 },
            { rank: 7, firstName: "Will", lastName: "Smith", position: "LB", P: 0, R: 3, X: 1 },
            { rank: 8, firstName: "Keith", lastName: "Wilson", position: "DL", P: 1, R: 0, X: 2 },
            { rank: 9, firstName: "Blank", lastName: "Blank", position: "Extra", P: 0, R: 0, X: 0 },
        ],
        playCharts: {
            normal: ["P", "P", "P", "R", "X", "X"],
            hurry: ["X", "X", "P", "P", "P", "R"],
            control: ["P", "P", "P", "X", "X", "R"],
        },

        playerFinder: {
                P: ["4", "4", "4", "2", "2", "7"],
                R: ["7", "7", "2", "2", "1", "1"],
                X: ["7", "7", "7", "2", "2", "2"],
         },
        powerfactor: {
             PF: 6,
         },
    },
    "Rochester": {
        offense: [
            { rank: 1, firstName: "Rickie", lastName: "Wall", position: "WR", P: 1, R: 1, X: 2 },
            { rank: 2, firstName: "Richard", lastName: "Russell", position: "HB", P: 0, R: 1, X: 1 },
            { rank: 3, firstName: "Daniel", lastName: "White", position: "QB", P: 0, R: 1, X: 1 },
            { rank: 4, firstName: "Manuel", lastName: "Varez", position: "OL", P: 2, R: 0, X: 2 },
            { rank: 5, firstName: "Bub", lastName: "Lynn", position: "HB", P: 0, R: 2, X: 0 },
            { rank: 6, firstName: "Dan", lastName: "Park", position: "OL", P: 2, R: 1, X: 1 },
            { rank: 7, firstName: "Lino", lastName: "Johnson", position: "OL", P: 0, R: 1, X: 2 },
            { rank: 8, firstName: "Victor", lastName: "Cortez", position: "WR", P: 1, R: 0, X: 1 },
            { rank: 9, firstName: "Blank", lastName: "Blank", position: "Extra", P: 0, R: 0, X: 0 },
        ],
        defense: [
            { rank: 1, firstName: "Reid", lastName: "Leslie", position: "DL", P: 3, R: 2, X: 3 },
            { rank: 2, firstName: "Clark", lastName: "Coleman", position: "DB", P: 3, R: 2, X: 2 },
            { rank: 3, firstName: "Chester", lastName: "Spitz", position: "LB", P: 1, R: 3, X: 2 },
            { rank: 4, firstName: "Tom", lastName: "Wilkers", position: "DL", P: 2, R: 3, X: 0 },
            { rank: 5, firstName: "Willis", lastName: "Davis", position: "DL", P: 1, R: 3, X: 0 },
            { rank: 6, firstName: "Lester", lastName: "Mosley", position: "LB", P: 1, R: 2, X: 1 },
            { rank: 7, firstName: "James", lastName: "Pike", position: "DB", P: 1, R: 0, X: 2 },
            { rank: 8, firstName: "Moe", lastName: "Crowder", position: "Extra", P: 1, R: 1, X: 0 },
            { rank: 9, firstName: "Blank", lastName: "Blank", position: "Extra", P: 0, R: 0, X: 0 },
        ],
        playCharts: {
            normal: ["P", "R", "R", "R", "X", "X"],
            hurry: ["X", "X", "P", "P", "P", "R"],
            control: ["R", "R", "R", "R", "X", "X"],
        },

        playerFinder: {
            P: ["1", "1", "1", "1", "2", "5"],
            R: ["2", "2", "2", "5", "5", "1"],
            X: ["1", "1", "1", "2", "2", "5"],
        },
        powerfactor: {
             PF: 5,
         },
    },
    "Richmond": {
        offense: [
            { rank: 1, firstName: "Myles", lastName: "Page", position: "WR", P: 2, R: 3, X: 2 },
            { rank: 2, firstName: "Matt", lastName: "Rice", position: "QB", P: 1, R: 1, X: 3 },
            { rank: 3, firstName: "Omer", lastName: "Le", position: "OL", P: 3, R: 1, X: 3 },
            { rank: 4, firstName: "Carlton", lastName: "Everett", position: "OL", P: 1, R: 1, X: 2 },
            { rank: 5, firstName: "Tom", lastName: "Knight", position: "OL", P: 2, R: 0, X: 1 },
            { rank: 6, firstName: "Leon", lastName: "Chapman", position: "OL", P: 1, R: 2, X: 0 },
            { rank: 7, firstName: "Tyrell", lastName: "Cisneros", position: "WR", P: 1, R: 0, X: 1 },
            { rank: 8, firstName: "Alvin", lastName: "Curtis", position: "OL", P: 0, R: 2, X: 0 },
            { rank: 9, firstName: "Blank", lastName: "Blank", position: "Extra", P: 0, R: 0, X: 0 },
        ],
        defense: [
            { rank: 1, firstName: "Eric", lastName: "Watts", position: "DL", P: 2, R: 2, X: 2 },
            { rank: 2, firstName: "Harry", lastName: "Noel", position: "DB", P: 2, R: 2, X: 2 },
            { rank: 3, firstName: "Dwayne", lastName: "Solis", position: "DB", P: 3, R: 0, X: 0 },
            { rank: 4, firstName: "Anthony", lastName: "Allen", position: "LB", P: 1, R: 2, X: 2 },
            { rank: 5, firstName: "Eric", lastName: "Chase", position: "DB", P: 2, R: 1, X: 1 },
            { rank: 6, firstName: "Darin", lastName: "Zimmerman", position: "DL", P: 1, R: 2, X: 1 },
            { rank: 7, firstName: "Chuck", lastName: "Philips", position: "DL", P: 1, R: 2, X: 0 },
            { rank: 8, firstName: "Ed", lastName: "Edwards", position: "LB", P: 1, R: 0, X: 0 },
            { rank: 9, firstName: "Blank", lastName: "Blank", position: "Extra", P: 0, R: 0, X: 0 },
        ],
        playCharts: {
            normal: ["P", "P", "P", "X", "X", "R"],
            control: ["P", "P", "P", "X", "R", "R"],
            hurry: ["X", "X", "P", "P", "P", "R"],
        },
         playerFinder: {
            P: ["1", "1", "1", "1", "7", "6"],
            R: ["1", "1", "1", "6", "6", "2"],
            X: ["1", "1", "1", "7", "7", "6"],
     },

    powerfactor: {
         PF: 6,
     },
    },
};
                const footballCharts = {
                  "P_vs_P": [
                      { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "Intercepted, same zone. +1 on return roll" },
                      { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "Intercepted, one zone downfield"},
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
                      // Add more entries as needed
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
                      { diceRoll: 3, playerRating: "0,1,2,3", outcomeIfMet: "DEFLECTED! 1-2 INTERCEPTED same zone, 3-4 INCOMPLETE, 5-6 COMPLETE 1 point pass"},
                      { diceRoll: 4, playerRating: "3", outcomeIfMet: "COMPLETE, 1 points pass", outcomeElse: "INCOMPLETE" },
                      { diceRoll: 5, playerRating: "2,3", outcomeIfMet: "COMPLETE 1 point pass", outcomeElse: "INCOMPLETE" },
                      { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 1 point pass" },
                      { diceRoll: 7, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 1 point pass" },
                      { diceRoll: 8, playerRating: "1,2,3", outcomeIfMet: "COMPLETE 2 point pass", outcomeElse: "INCOMPLETE" },
                      { diceRoll: 9, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 2 point pass" },
                      { diceRoll: 10, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 2 point pass" },
                      { diceRoll: 11, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 3 point pass" },
                      { diceRoll: 12, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 4 point pass - INJURY KEY PLAYER"},
                      { diceRoll: 13, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 5 point pass" },
                      { diceRoll: 14, playerRating: "2,3", outcomeIfMet: "COMPELTE 6 POINT PASS", outcomeElse: "COMPLETE 3 point pass" },
                      { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 7 POINT PASS" },
                  ],
                    "R_vs_P": [
                          { diceRoll: -2, playerRating: "0,1", outcomeIfMet: "FUMBLE!!", outcomeElse:"1 Point loss" },
                          { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "NO Gain!"},
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
                          // Add more entries as needed
                      ],
                      "R_vs_R": [
                          { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "FUMBLE! Same zone, Defense Recovers, roll RETURN" },
                            { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "FUMBLE! Botched hand-off, -1 zone (Roll Recovery)" },
                            { diceRoll: 0, playerRating: "0,1,2,3", outcomeIfMet: "INTERCEPTED, same zone", outcomeElse: "Incomplete" },
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
                          { diceRoll: 12, playerRating: "3", outcomeIfMet: "TOUCHDOWN RUN!!", outcomeElse:"4 Point Gain"},
                          { diceRoll: 13, playerRating: "2,3", outcomeIfMet: "TOUCHDOWN RUN!!", outcomeElse:"5 Point Gain" },
                          { diceRoll: 14, playerRating: "1,2,3", outcomeIfMet: "TOUCHDOWN RUN!!", outcomeElse:"6 Point Gain" },
                          { diceRoll: 15, playerRating: "0,1,2,3", outcomeIfMet: "TOUCHDOWN RUN!!" },
                      ],
                  
                      "X_vs_P": [
                          { diceRoll: -2, playerRating: "0,1,2,3", outcomeIfMet: "INTERCEPTED! One Zone Downfield, +2 on Return Roll" },
                          { diceRoll: -1, playerRating: "0,1,2,3", outcomeIfMet: "1 Point Loss Completion"},
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
                          // Add more entries as needed
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
                          { diceRoll: 12, playerRating: "0,1,2,3", outcomeIfMet: "Pass: 5 Point Gain"},
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


function populateTeamDropdowns() {
    const homeTeamDropdown = document.getElementById('home-team');
    const awayTeamDropdown = document.getElementById('away-team');

    // Clear existing options first
    homeTeamDropdown.innerHTML = '<option value="" selected disabled>Select Home Team</option>';
    awayTeamDropdown.innerHTML = '<option value="" selected disabled>Select Away Team</option>';

    Object.keys(teams).forEach(team => {
        const pf = teams[team].powerfactor.PF; // Get the PF value

        // Add the team to the home dropdown
        const option1 = document.createElement('option');
        option1.value = team;
        option1.textContent = `${team} (PF: ${pf})`; // Add PF to the team name
        homeTeamDropdown.appendChild(option1);

        // Add the team to the away dropdown
        const option2 = document.createElement('option');
        option2.value = team;
        option2.textContent = `${team} (PF: ${pf})`; // Add PF to the team name
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
    const isHomeOffense = document.getElementById('home-offense').checked; // Radio button state
    const homeTeam = document.getElementById('home-team').value; // Selected home team
    const awayTeam = document.getElementById('away-team').value; // Selected away team

    return {
        offenseTeam: isHomeOffense ? homeTeam : awayTeam,
        defenseTeam: isHomeOffense ? awayTeam : homeTeam,
    };
}

function getSelectedPlayChart() {
    const playChartRadios = document.getElementsByName('play-chart');
    for (const radio of playChartRadios) {
        if (radio.checked) {
            return radio.value; // Returns "normal", "hurry", or "control"
        }
    }
    return "normal"; // Default to "normal" if none are selected
}

function getSelectedTeams() {
    const homeTeamDropdown = document.getElementById('home-team');
    const awayTeamDropdown = document.getElementById('away-team');

    const homeTeam = homeTeamDropdown.value;
    const awayTeam = awayTeamDropdown.value;

    return { homeTeam, awayTeam };
}

function populateInjuryTeamDropdown() {
    const injuryTeamDropdown = document.getElementById('injury-team');
    const homeTeam = document.getElementById('home-team').value;
    const awayTeam = document.getElementById('away-team').value;

    // Clear existing options
    injuryTeamDropdown.innerHTML = '<option value="" disabled selected>Select Team</option>';

    // Add current teams
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

// Call this function whenever the team dropdown changes
document.getElementById('home-team').addEventListener('change', populateInjuryTeamDropdown);
document.getElementById('away-team').addEventListener('change', populateInjuryTeamDropdown);

// Display injured players
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

// Mark a player as injured
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

// Mark a player as uninjured
function markUninjured() {
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
        if (player.isInjured) {
            player.P = player.backupStats.P;
            player.R = player.backupStats.R;
            player.X = player.backupStats.X;
            player.isInjured = false;
            player.backupStats = {};
            alert(`${player.firstName} ${player.lastName} has been marked as uninjured.`);
        } else {
            alert(`${player.firstName} ${player.lastName} is not injured.`);
        }
    } else {
        alert('Player not found.');
    }

    displayInjuredPlayers();
}

// Helper function to select a defensive player based on weighted probabilities
function getRandomDefensivePlayer(defenseTeamKey) {
    const defenseTeam = teams[defenseTeamKey].defense;

    // Define rank weights
    const rankWeights = [0.25, 0.20, 0.14, 0.12, 0.11, 0.10, 0.08];

    // Generate cumulative weights
    const cumulativeWeights = rankWeights.reduce((acc, weight) => {
        acc.push((acc.length > 0 ? acc[acc.length - 1] : 0) + weight);
        return acc;
    }, []);

    // Generate a random number between 0 and 1
    const random = Math.random();

    // Find the selected rank based on random value and cumulative weights
    const selectedRankIndex = cumulativeWeights.findIndex(cw => random <= cw);

    // Find the player corresponding to the selected rank
    const selectedPlayer = defenseTeam[selectedRankIndex];

    return selectedPlayer
        ? `${selectedPlayer.firstName} ${selectedPlayer.lastName} (Rank: ${selectedPlayer.rank})`
        : "No valid defensive player found";
}


// Initial call to populate injury team dropdown
populateInjuryTeamDropdown();

function rollDice() {
    // Roll dice
    const offenseDie = Math.ceil(Math.random() * 6); // First d6 for offense
    const defenseDie = Math.ceil(Math.random() * 6); // Second d6 for defense
    const twelveSidedDie1 = Math.ceil(Math.random() * 12); // First d12
    const eventDie = Math.ceil(Math.random() * 6); // d6 for triggering special events
    let twelveSidedDie2 = null; // Second d12 (if triggered)
    const fumbleDie = Math.ceil(Math.random() * 6); // FUMBLE DIE
    const returnTableDie = Math.ceil(Math.random() * 12); // RETURN TABLE DIE

    // Get dynamically selected offense and defense teams
    const { offenseTeam, defenseTeam } = getOffenseAndDefenseTeams();

    // Dynamically reference teams from the `teams` object
    const offenseTeamData = teams[offenseTeam];
    const defenseTeamData = teams[defenseTeam];

    // Calculate power factor difference
    const offensePF = offenseTeamData.powerfactor.PF;
    const defensePF = defenseTeamData.powerfactor.PF;
    const pfDifference = Math.abs(offensePF - defensePF);
    const higherPFTeam = offensePF > defensePF ? offenseTeam : defenseTeam;

    // Check if PF difference triggers a second d12 roll
    let useHigherD12 = null; // Determines if the higher or lower d12 should be used
    if (eventDie <= pfDifference && pfDifference > 0) {
        twelveSidedDie2 = Math.ceil(Math.random() * 12); // Roll a second d12

        // Determine whether to use the higher or lower d12
        if (higherPFTeam === offenseTeam) {
            useHigherD12 = true; // Higher PF team is on offense, use the higher d12
        } else {
            useHigherD12 = false; // Higher PF team is on defense, use the lower d12
        }
    }

    // Determine which d12 to use
    const finalTwelveSidedDie = useHigherD12 !== null
        ? (useHigherD12 ? Math.max(twelveSidedDie1, twelveSidedDie2) : Math.min(twelveSidedDie1, twelveSidedDie2))
        : twelveSidedDie1;

    // Get the selected play chart
    const selectedPlayChart = getSelectedPlayChart();
    const offensePlayChart = offenseTeamData.playCharts[selectedPlayChart];

    // Get the offensive and defensive play calls based on the dice rolls
    const offensePlayCall = offensePlayChart[offenseDie - 1];
    const defensePlayCall = offensePlayChart[defenseDie - 1];

    // Log matchup and chart key for debugging
    const matchup = `${offensePlayCall} vs ${defensePlayCall}`;
    const chartKey = `${offensePlayCall}_vs_${defensePlayCall}`;
    console.log("Matchup:", matchup);
    console.log("Chart Key:", chartKey);

    // Determine the influencing player
    const influencingPlayer = getInfluencingPlayer(offenseTeam, defenseTeam, offensePlayCall);
    const playerImpact = influencingPlayer.isOffense
        ? influencingPlayer.rating
        : -influencingPlayer.rating;

    const modifiedRoll = finalTwelveSidedDie + playerImpact;

    // Resolve the matchup using the footballCharts
    const chart = footballCharts[chartKey];
    let chartResult = "No valid outcome";
    let selectedPlayerName = "";
    let influencingPlayerName = `${influencingPlayer.name} (${influencingPlayer.isOffense ? "Offense" : "Defense"})`;

    if (chart) {
        const chartEntry = chart.find(entry => entry.diceRoll === modifiedRoll);

        if (chartEntry) {
            if (chartKey.includes("X_vs_")) {
                // Logic for X plays (already implemented)
                const rankIndex = Math.floor(Math.random() * offenseTeamData.playerFinder.X.length);
                const rank = parseInt(offenseTeamData.playerFinder.X[rankIndex], 10);

                const selectedPlayer = offenseTeamData.offense.find(p => p.rank === rank);

                if (selectedPlayer) {
                    selectedPlayerName = `${selectedPlayer.firstName} ${selectedPlayer.lastName}`;
                    const playerRating = selectedPlayer.X;

                    // Check the player rating against the chart entry
                    if (chartEntry.playerRating.split(",").map(Number).includes(playerRating)) {
                        chartResult = chartEntry.outcomeIfMet;
                    } else {
                        chartResult = chartEntry.outcomeElse || "No valid outcome";
                    }
                } else {
                    chartResult = "No matching player found for the selected rank.";
                }
            } else if (chartKey.includes("R_vs_")) {
                // Logic for R plays (already implemented)
                const rankIndex = Math.floor(Math.random() * offenseTeamData.playerFinder.R.length);
                const rank = parseInt(offenseTeamData.playerFinder.R[rankIndex], 10);

                const selectedPlayer = offenseTeamData.offense.find(p => p.rank === rank);

                if (selectedPlayer) {
                    selectedPlayerName = `${selectedPlayer.firstName} ${selectedPlayer.lastName}`;
                    const playerRating = selectedPlayer.R;

                    // Check the player rating against the chart entry
                    if (chartEntry.playerRating.split(",").map(Number).includes(playerRating)) {
                        chartResult = chartEntry.outcomeIfMet;
                    } else {
                        chartResult = chartEntry.outcomeElse || "No valid outcome";
                    }
                } else {
                    chartResult = "No matching player found for the selected rank.";
                }
            } else {
                // Handle P_vs_* and D_vs_* plays (QB is the selected player)
                const qb = offenseTeamData.offense.find(player => player.position === "QB");

                if (qb) {
                    let ratingToCheck;
                    if (chartKey.includes("P_vs_P")) {
                        ratingToCheck = qb.P; // Check P rating
                    } else if (chartKey.includes("P_vs_R")) {
                        ratingToCheck = qb.P; // Check R rating
                    } else if (chartKey.includes("P_vs_X") || chartKey.includes("D_vs_X")) {
                        ratingToCheck = qb.X; // Check X rating
                    } 

                    console.log("QB Selected:", qb.firstName, qb.lastName, "Rating to Check:", ratingToCheck); // Debugging

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
            console.log("No chart entry found for modified roll:", modifiedRoll); // Debugging
            chartResult = "No matching chart entry found.";
        }
    } else {
        console.log("Chart not found for key:", chartKey); // Debugging
        chartResult = "No chart available for this matchup.";
    }

    // Special events
    let specialEventResult = "";
    if (eventDie === 6) {
        const specialEvent = specialEvents.find(event => event.diceRoll === twelveSidedDie1);
        specialEventResult = specialEvent ? `Special Event: ${specialEvent.event}` : "No special event found.";
    }

    // Add defensive player selection to rollDice()
const defensivePlayerName = getRandomDefensivePlayer(defenseTeam);

// Helper function to get a random player from a team (offense or defense)
function getRandomPlayer(teamKey, isOffense) {
    const playerPool = isOffense ? teams[teamKey].offense : teams[teamKey].defense;
    const validPlayers = playerPool.filter(player => player.rank >= 1 && player.rank <= 7); // Only ranks 1-7
    const randomIndex = Math.floor(Math.random() * validPlayers.length);
    const selectedPlayer = validPlayers[randomIndex];

    return selectedPlayer
        ? `${selectedPlayer.firstName} ${selectedPlayer.lastName} (Rank: ${selectedPlayer.rank})`
        : "No valid player found";
}

// Helper function to select a defensive player based on weighted probabilities
function getRandomDefensivePlayer(defenseTeamKey) {
    const defenseTeam = teams[defenseTeamKey].defense;

    // Define rank weights
    const rankWeights = [0.25, 0.20, 0.14, 0.12, 0.11, 0.10, 0.08];

    // Generate cumulative weights
    const cumulativeWeights = rankWeights.reduce((acc, weight) => {
        acc.push((acc.length > 0 ? acc[acc.length - 1] : 0) + weight);
        return acc;
    }, []);

    // Generate a random number between 0 and 1
    const random = Math.random();

    // Find the selected rank based on random value and cumulative weights
    const selectedRankIndex = cumulativeWeights.findIndex(cw => random <= cw);

    // Find the player corresponding to the selected rank
    const selectedPlayer = defenseTeam[selectedRankIndex];

    return selectedPlayer
        ? `${selectedPlayer.firstName} ${selectedPlayer.lastName} (Rank: ${selectedPlayer.rank})`
        : "No valid defensive player found";
}

// Add random offensive and defensive players to rollDice()
const randomOffensivePlayerName = getRandomPlayer(offenseTeam, true);
const randomDefensivePlayerName = getRandomPlayer(defenseTeam, false);



// Helper function to find the receiver for pass plays
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

// Inside rollDice()
let receiverName = ""; // Initialize receiver name
if (chartKey.includes("P_vs_")) {
    // Determine receiver only for pass plays
    receiverName = getReceiverForPassPlay(offenseTeam);
}

document.getElementById('dice-result').innerHTML = `
        <p><strong>Dice Rolls:</strong> Offense Die: ${offenseDie}, Defense Die: ${defenseDie}, 12-Sided Die: ${twelveSidedDie1}, Event Die: ${eventDie}</p>
        <p><strong>Additional Dice:</strong> FUMBLE DIE: ${fumbleDie}, RETURN TABLE DIE: ${returnTableDie}</p>
        ${twelveSidedDie2 !== null ? `<p><strong>Second D12:</strong> ${twelveSidedDie2}</p>` : ""}
        ${useHigherD12 !== null ? `<p><strong>Power Factor Trigger:</strong> ${higherPFTeam} has higher PF. Using ${useHigherD12 ? "higher" : "lower"} D12.</p>` : ""}
        <p><strong>Play Call:</strong> Offense: ${offensePlayCall}, Defense: ${defensePlayCall}</p>
        <p><strong>Modified Roll:</strong> ${modifiedRoll}</p>
        <p><strong>Chart Result:</strong> ${chartResult}</p>
        ${specialEventResult ? `<p><strong>Special Event:</strong> ${specialEventResult}</p>` : ""}
        <p><strong>Influencing Player:</strong> ${influencingPlayerName}</p>
        <p><strong>Selected Player:</strong> ${selectedPlayerName || "N/A"}</p>
         ${receiverName ? `<p><strong>Receiver:</strong> ${receiverName}</p>` : ""}
        <p><strong>Defensive Player Making Stop:</strong> ${defensivePlayerName}</p>
        <p><strong>Random Offensive Player:</strong> ${randomOffensivePlayerName}</p>
        <p><strong>Random Defensive Player:</strong> ${randomDefensivePlayerName}</p>
    `;
}

// Helper to select a weighted random player
function getInfluencingPlayer(offenseTeamKey, defenseTeamKey, playCall) {
    const isOffense = Math.random() < 0.5; // 50/50 chance for offense or defense
    const teamKey = isOffense ? offenseTeamKey : defenseTeamKey;
    const playerPool = isOffense ? teams[teamKey].offense : teams[teamKey].defense;

    // Define rank weights
    const rankWeights = [0.2, 0.2, 0.12, 0.12, 0.12, 0.12, 0.12];
    const cumulativeWeights = rankWeights.reduce((acc, w) => {
        acc.push((acc[acc.length - 1] || 0) + w);
        return acc;
    }, []);

    // Select a player based on weights
    const random = Math.random();
    const selectedRankIndex = cumulativeWeights.findIndex(cw => random <= cw);
    const selectedPlayer = playerPool[selectedRankIndex];

    // Get the player's rating based on the play call (P, R, X)
    const playerRating = selectedPlayer[playCall];

    return {
        name: `${selectedPlayer.firstName} ${selectedPlayer.lastName}`,
        rating: playerRating,
        isOffense
    };



}

document.getElementById('home-team').addEventListener('change', populateTeamDetails);
document.getElementById('away-team').addEventListener('change', populateTeamDetails);

function populateTeamDetails() {
    const { homeTeam, awayTeam } = getSelectedTeams();

    displayTeamDetails(homeTeam, 'home-team-details');
    displayTeamDetails(awayTeam, 'away-team-details');
}

document.getElementById('roll-dice').addEventListener('click', rollDice);

/*document.getElementById('home-team').addEventListener('change', (event) => {
    displayTeamDetails(event.target.value, 'home-team-details');
});

document.getElementById('away-team').addEventListener('change', (event) => {
    displayTeamDetails(event.target.value, 'away-team-details');
});*/

populateTeamDropdowns();