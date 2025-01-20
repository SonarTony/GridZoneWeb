const teams = {
"TeamA": {
        offense: [
            { rank: 1, firstName: "John", lastName: "Smith", position: "QB", P: 3, R: 0, X: 2 },
            { rank: 2, firstName: "James", lastName: "Johnson", position: "WR", P: 2, R: 2, X: 1 },
            { rank: 3, firstName: "Robert", lastName: "Williams", position: "WR", P: 2, R: 1, X: 3 },
            { rank: 4, firstName: "Michael", lastName: "Brown", position: "RB", P: 1, R: 3, X: 1 },
            { rank: 5, firstName: "David", lastName: "Jones", position: "OL", P: 0, R: 2, X: 1 },
            { rank: 6, firstName: "Chris", lastName: "Garcia", position: "OL", P: 1, R: 2, X: 0 },
            { rank: 7, firstName: "Paul", lastName: "Martinez", position: "OL", P: 0, R: 3, X: 1 },
            { rank: 8, firstName: "Mark", lastName: "Hernandez", position: "Extra", P: 1, R: 1, X: 1 },
            { rank: 9, firstName: "Steven", lastName: "Lopez", position: "Extra", P: 0, R: 1, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Daniel", lastName: "Gonzalez", position: "DL", P: 2, R: 3, X: 1 },
            { rank: 2, firstName: "Matthew", lastName: "Wilson", position: "DL", P: 1, R: 2, X: 2 },
            { rank: 3, firstName: "Anthony", lastName: "Anderson", position: "DL", P: 0, R: 3, X: 2 },
            { rank: 4, firstName: "Kevin", lastName: "Thomas", position: "LB", P: 2, R: 2, X: 2 },
            { rank: 5, firstName: "Brian", lastName: "Taylor", position: "LB", P: 3, R: 1, X: 1 },
            { rank: 6, firstName: "George", lastName: "Moore", position: "DB", P: 2, R: 2, X: 3 },
            { rank: 7, firstName: "Edward", lastName: "Martin", position: "DB", P: 3, R: 1, X: 2 },
            { rank: 8, firstName: "Ronald", lastName: "Jackson", position: "Extra", P: 1, R: 1, X: 1 },
            { rank: 9, firstName: "Donald", lastName: "White", position: "Extra", P: 2, R: 0, X: 1 },
        ],
        playCharts: {
            normal: ["R", "R", "P", "P", "R", "X"],
            hurry: ["P", "P", "R", "R", "P", "P"],
            control: ["R", "R", "R", "P", "P", "R"],
        },
         playerFinder: {
            P: ["2", "2", "2", "3", "3", "4"],
            R: ["4", "4", "4", "2", "2", "1"],
            X: ["3", "3", "3", "4", "4", "2"],
     },

    powerfactor: {
         PF: 4,
     },
    },
    "TeamB": {
        offense: [
            { rank: 1, firstName: "Andrew", lastName: "King", position: "QB", P: 0, R: 1, X: 2 },
            { rank: 2, firstName: "Joshua", lastName: "Wright", position: "WR", P: 3, R: 1, X: 1 },
            { rank: 3, firstName: "Ethan", lastName: "Hill", position: "WR", P: 2, R: 3, X: 0 },
            { rank: 4, firstName: "Alexander", lastName: "Scott", position: "RB", P: 1, R: 2, X: 2 },
            { rank: 5, firstName: "Nicholas", lastName: "Green", position: "OL", P: 1, R: 2, X: 1 },
            { rank: 6, firstName: "Ryan", lastName: "Adams", position: "OL", P: 0, R: 3, X: 2 },
            { rank: 7, firstName: "Jacob", lastName: "Baker", position: "OL", P: 1, R: 2, X: 1 },
            { rank: 8, firstName: "Elijah", lastName: "Gonzales", position: "Extra", P: 2, R: 1, X: 0 },
            { rank: 9, firstName: "Aaron", lastName: "Nelson", position: "Extra", P: 1, R: 0, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Christopher", lastName: "Carter", position: "DL", P: 3, R: 1, X: 1 },
            { rank: 2, firstName: "Nathan", lastName: "Mitchell", position: "DL", P: 1, R: 3, X: 2 },
            { rank: 3, firstName: "Logan", lastName: "Perez", position: "DL", P: 0, R: 2, X: 3 },
            { rank: 4, firstName: "Hunter", lastName: "Roberts", position: "LB", P: 2, R: 3, X: 1 },
            { rank: 5, firstName: "Dylan", lastName: "Turner", position: "LB", P: 3, R: 2, X: 0 },
            { rank: 6, firstName: "Lucas", lastName: "Phillips", position: "DB", P: 2, R: 3, X: 2 },
            { rank: 7, firstName: "Gavin", lastName: "Campbell", position: "DB", P: 1, R: 2, X: 3 },
            { rank: 8, firstName: "Caleb", lastName: "Parker", position: "Extra", P: 1, R: 1, X: 2 },
            { rank: 9, firstName: "Isaac", lastName: "Evans", position: "Extra", P: 0, R: 2, X: 1 },
        ],
        playCharts: {
            normal: ["P", "P", "R", "R", "X", "X"],
            hurry: ["R", "P", "P", "R", "P", "X"],
            control: ["R", "R", "P", "P", "R", "R"],
        },

        playerFinder: {
                P: ["2", "2", "2", "3", "3", "4"],
                R: ["4", "4", "4", "2", "2", "1"],
                X: ["3", "3", "3", "4", "4", "2"],
         },
        powerfactor: {
             PF: 5,
         },
    },
    "TeamC": {
        offense: [
            { rank: 1, firstName: "Andrew", lastName: "King", position: "QB", P: 1, R: 2, X: 2 },
            { rank: 2, firstName: "Joshua", lastName: "Wright", position: "WR", P: 3, R: 1, X: 1 },
            { rank: 3, firstName: "Ethan", lastName: "Hill", position: "WR", P: 2, R: 3, X: 0 },
            { rank: 4, firstName: "Alexander", lastName: "Scott", position: "RB", P: 1, R: 3, X: 2 },
            { rank: 5, firstName: "Nicholas", lastName: "Green", position: "OL", P: 1, R: 2, X: 1 },
            { rank: 6, firstName: "Ryan", lastName: "Adams", position: "OL", P: 0, R: 3, X: 2 },
            { rank: 7, firstName: "Jacob", lastName: "Baker", position: "OL", P: 1, R: 2, X: 1 },
            { rank: 8, firstName: "Elijah", lastName: "Gonzales", position: "Extra", P: 2, R: 1, X: 0 },
            { rank: 9, firstName: "Aaron", lastName: "Nelson", position: "Extra", P: 1, R: 0, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Christopher", lastName: "Carter", position: "DL", P: 3, R: 1, X: 1 },
            { rank: 2, firstName: "Nathan", lastName: "Mitchell", position: "DL", P: 1, R: 3, X: 2 },
            { rank: 3, firstName: "Logan", lastName: "Perez", position: "DL", P: 0, R: 2, X: 3 },
            { rank: 4, firstName: "Hunter", lastName: "Roberts", position: "LB", P: 2, R: 3, X: 1 },
            { rank: 5, firstName: "Dylan", lastName: "Turner", position: "LB", P: 3, R: 2, X: 0 },
            { rank: 6, firstName: "Lucas", lastName: "Phillips", position: "DB", P: 2, R: 3, X: 2 },
            { rank: 7, firstName: "Gavin", lastName: "Campbell", position: "DB", P: 1, R: 2, X: 3 },
            { rank: 8, firstName: "Caleb", lastName: "Parker", position: "Extra", P: 1, R: 1, X: 2 },
            { rank: 9, firstName: "Isaac", lastName: "Evans", position: "Extra", P: 0, R: 2, X: 1 },
        ],
        playCharts: {
            normal: ["P", "P", "R", "R", "X", "X"],
            hurry: ["R", "P", "P", "R", "P", "X"],
            control: ["R", "R", "P", "P", "R", "R"],
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
                            { diceRoll: 6, playerRating: "0,1,2,3", outcomeIfMet: "COMPLETE 2 point pass" },
                            { diceRoll: 7, playerRating: "2,3", outcomeIfMet: "1 Point Gain", outcomeElse: "No Gain!" },
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
                  // Additional charts here...
                };

const specialEvents = [
    { diceRoll: 1, event: "Injury to key player on offense" },
    { diceRoll: 2, event: "Defense forced a turnover" },
    { diceRoll: 3, event: "Weather conditions worsen" },
    { diceRoll: 4, event: "Offense called for holding penalty" },
    { diceRoll: 5, event: "Special teams block a kick" },
    { diceRoll: 6, event: "Star player makes an exceptional play" },
    { diceRoll: 7, event: "Referee flag changes the outcome" },
    { diceRoll: 8, event: "Defense sacks QB for big loss" },
    { diceRoll: 9, event: "Field goal attempt hits the upright" },
    { diceRoll: 10, event: "Big kickoff return sets up offense" },
    { diceRoll: 11, event: "Offensive coach challenges the play" },
    { diceRoll: 12, event: "Fan disruption delays the game" },
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

    const pf = team.powerfactor.PF; // Get the PF value
    const offenseDetails = team.offense.map(player =>
        `Rank: ${player.rank}, ${player.firstName} ${player.lastName}, ${player.position}, P:${player.P} R:${player.R} X:${player.X}`
    ).join('<br>');

    const defenseDetails = team.defense.map(player =>
        `Rank: ${player.rank}, ${player.firstName} ${player.lastName}, ${player.position}, P:${player.P} R:${player.R} X:${player.X}`
    ).join('<br>');

    element.innerHTML = `
        <h3>${teamKey} (PF: ${pf})</h3>
        <p><strong>Offense:</strong><br>${offenseDetails}</p>
        <p><strong>Defense:</strong><br>${defenseDetails}</p>
        <p><strong>Play Charts:</strong> 
            Normal: ${team.playCharts.normal.join(", ")}, 
            Hurry: ${team.playCharts.hurry.join(", ")}, 
            Control: ${team.playCharts.control.join(", ")}
        </p>
    `;
}



function getOffenseAndDefenseTeams() {
    const isHomeOffense = document.getElementById('home-offense').checked; // Radio button state
    const { homeTeam, awayTeam } = getSelectedTeams();

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

function rollDice() {
    // Roll dice
    const offenseDie = Math.ceil(Math.random() * 6); // First d6 for offense
    const defenseDie = Math.ceil(Math.random() * 6); // Second d6 for defense
    const twelveSidedDie = Math.ceil(Math.random() * 12); // d12 for resolving results
    const eventDie = Math.ceil(Math.random() * 6); // d6 for triggering special events

    const diceResult = `
        Offense Die: ${offenseDie}, 
        Defense Die: ${defenseDie}, 
        12-Sided Die: ${twelveSidedDie}, 
        Event Die: ${eventDie}
    `;

    // Get dynamically selected offense and defense teams
    const { offenseTeam, defenseTeam } = getOffenseAndDefenseTeams();

    // Reference the correct teams
    const offenseTeamKey = offenseTeam === 'TeamA' ? 'TeamA' : 'TeamB';
    const defenseTeamKey = defenseTeam === 'TeamA' ? 'TeamA' : 'TeamB';

    // Get the selected play chart
    const selectedPlayChart = getSelectedPlayChart();
    const offensePlayChart = teams[offenseTeamKey].playCharts[selectedPlayChart];

    // Get the offensive and defensive play calls based on the dice rolls
    const offensePlayCall = offensePlayChart[offenseDie - 1];
    const defensePlayCall = offensePlayChart[defenseDie - 1];

    // Display the matchup (e.g., "R vs P")
    const matchup = `${offensePlayCall} vs ${defensePlayCall}`;

    // Determine the influencing player
    const influencingPlayer = getInfluencingPlayer(offenseTeamKey, defenseTeamKey, offensePlayCall);
    const playerImpact = influencingPlayer.isOffense
        ? influencingPlayer.rating
        : -influencingPlayer.rating;

    const modifiedRoll = twelveSidedDie + playerImpact;

    // Resolve the matchup using the footballCharts
    const chartKey = `${offensePlayCall}_vs_${defensePlayCall}`;
    const chart = footballCharts[chartKey];
    let chartResult = "No valid outcome";
    let selectedPlayerName = "";
    let influencingPlayerName = `${influencingPlayer.name} (${influencingPlayer.isOffense ? "Offense" : "Defense"})`;

    if (chart) {
        const chartEntry = chart.find(entry => entry.diceRoll === modifiedRoll);

        if (chartEntry) {
            if (chartKey.includes("R_vs_")) {
                // Select a player for the run play
                const rankIndex = Math.floor(Math.random() * teams[offenseTeamKey].playerFinder.R.length);
                const rank = parseInt(teams[offenseTeamKey].playerFinder.R[rankIndex], 10);

                const selectedPlayer = teams[offenseTeamKey].offense.find(p => p.rank === rank);

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
                const qb = teams[offenseTeamKey].offense.find(player => player.position === "QB");

                if (qb) {
                    let ratingToCheck;
                    if (chartKey.includes("P_vs_P")) {
                        ratingToCheck = qb.P; // Check P rating
                    } else if (chartKey.includes("P_vs_R")) {
                        ratingToCheck = qb.P; // Check R rating
                    } else if (chartKey.includes("P_vs_X") || chartKey.includes("D_vs_X")) {
                        ratingToCheck = qb.X; // Check X rating
                    } 

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
            chartResult = "No matching chart entry found.";
        }
    } else {
        chartResult = "No chart available for this matchup.";
    }

    // Special events
    let specialEventResult = "";
    if (eventDie === 6) {
        const specialEvent = specialEvents.find(event => event.diceRoll === twelveSidedDie);
        specialEventResult = specialEvent ? `Special Event: ${specialEvent.event}` : "No special event found.";
    }

    // Display results with improved readability
    document.getElementById('dice-result').innerHTML = `
        <p><strong>Dice Rolls:</strong> Offense Die: ${offenseDie}, Defense Die: ${defenseDie}, 12-Sided Die: ${twelveSidedDie}, Event Die: ${eventDie}</p>
        <p><strong>Play Call:</strong> Offense: ${offensePlayCall}, Defense: ${defensePlayCall}</p>
        <p><strong>Influencing Player:</strong> ${influencingPlayerName}</p>
        <p><strong>Selected Player:</strong> ${selectedPlayerName || "N/A"}</p>
        <p><strong>Modified Roll:</strong> ${modifiedRoll}</p>
        <p><strong>Chart Result:</strong> ${chartResult}</p>
        ${specialEventResult ? `<p><strong>Special Event:</strong> ${specialEventResult}</p>` : ""}
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