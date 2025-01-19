const teams = {
"TeamA": {
        offense: [
            { rank: 1, firstName: "John", lastName: "Smith", position: "QB", P: 3, R: 1, X: 2 },
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
            normal: ["R", "R", "P", "P", "R or X", "X"],
            hurry: ["P", "P", "R", "R", "P", "P"],
            control: ["R", "R", "R", "P", "P", "R"],
        },
    },
    "TeamB": {
        offense: [
            { rank: 1, firstName: "Andrew", lastName: "King", position: "QB", P: 2, R: 2, X: 2 },
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
            normal: ["P", "P", "R", "R", "X", "P"],
            hurry: ["R", "P", "P", "R", "P", "X"],
            control: ["R", "R", "P", "P", "R", "R"],
        },
    },
};
                const footballCharts = {
                  "P_vs_P": [
                      { diceRoll: -3, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                      { diceRoll: -2, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      { diceRoll: -1, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                      { diceRoll: 0, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      { diceRoll: 1, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                      { diceRoll: 2, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      { diceRoll: 3, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                      { diceRoll: 4, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      { diceRoll: 5, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                      { diceRoll: 6, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      { diceRoll: 7, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                      { diceRoll: 8, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      { diceRoll: 9, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      { diceRoll: 10, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                      { diceRoll: 11, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      { diceRoll: 12, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                      { diceRoll: 13, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      { diceRoll: 14, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                      { diceRoll: 15, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                      // Add more entries as needed
                  ],
                  "P_vs_R": [
                      { diceRoll: -3, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: -2, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: -1, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 0, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 1, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 2, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 3, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 4, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 5, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 6, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 7, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 8, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 9, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 10, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 11, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 12, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 13, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 14, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 15, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        // Add more entries as needed
                      // Add more entries as needed
                  ],
                  "P_vs_X": [
                      { diceRoll: -3, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: -2, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: -1, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 0, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 1, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 2, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 3, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 4, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 5, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 6, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 7, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 8, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 9, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 10, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 11, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 12, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 13, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        { diceRoll: 14, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
                        { diceRoll: 15, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
                        // Add more entries as needed
                      // Add more entries as needed
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

    homeTeamDropdown.innerHTML = '<option value="">Select a Team</option>';
    awayTeamDropdown.innerHTML = '<option value="">Select a Team</option>';

    Object.keys(teams).forEach(team => {
        const option1 = document.createElement('option');
        option1.value = team;
        option1.textContent = team;
        homeTeamDropdown.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = team;
        option2.textContent = team;
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

    const offenseDetails = team.offense.map(player => `Rank: ${player.rank}, ${player.firstName} ${player.lastName}, ${player.position}, P:${player.P} R:${player.R} X:${player.X}`).join('<br>');
    const defenseDetails = team.defense.map(player => `Rank: ${player.rank}, ${player.firstName} ${player.lastName}, ${player.position}, P:${player.P} R:${player.R} X:${player.X}`).join('<br>');

    element.innerHTML = `
        <h3>${teamKey}</h3>
        <p><strong>Offense:</strong><br>${offenseDetails}</p>
        <p><strong>Defense:</strong><br>${defenseDetails}</p>
        <p><strong>Play Charts:</strong> Normal: ${team.playCharts.normal.join(", ")}, Hurry: ${team.playCharts.hurry.join(", ")}, Control: ${team.playCharts.control.join(", ")}</p>
    `;
}

function getOffenseAndDefenseTeams() {
    const isHomeOffense = document.getElementById('home-offense').checked;
    return {
        offenseTeam: isHomeOffense ? 'home' : 'away',
        defenseTeam: isHomeOffense ? 'away' : 'home'
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

   // const diceResult = `Offense Die: ${offenseDie}, Defense Die: ${defenseDie}, 12-Sided Die: ${twelveSidedDie}`;

    // Determine which team is on offense and which is on defense
    const { offenseTeam, defenseTeam } = getOffenseAndDefenseTeams();
    const offenseTeamKey = offenseTeam === 'home' ? 'TeamA' : 'TeamB';
    const defenseTeamKey = defenseTeam === 'home' ? 'TeamA' : 'TeamB';

    // Get the selected play chart
    const selectedPlayChart = getSelectedPlayChart();
    const offensePlayChart = teams[offenseTeamKey].playCharts[selectedPlayChart];

    // Get the offensive and defensive play calls based on the d6 rolls
    const offensePlayCall = offensePlayChart[offenseDie - 1]; // Array is 0-indexed
    const defensePlayCall = offensePlayChart[defenseDie - 1]; // Using the same chart for defense

    // Display the matchup (e.g., "R vs X")
    const matchup = `${offensePlayCall} vs ${defensePlayCall}`;

    // Determine the influencing player and their impact
    const influencingPlayer = getInfluencingPlayer(offenseTeamKey, defenseTeamKey, offensePlayCall);
    const playerImpact = influencingPlayer.isOffense
        ? influencingPlayer.rating // Add rating if offensive player
        : -influencingPlayer.rating; // Subtract rating if defensive player

    const modifiedRoll = twelveSidedDie + playerImpact;

    // Resolve the matchup using the footballCharts
    const chartKey = `${offensePlayCall}_vs_${defensePlayCall}`;
    const chart = footballCharts[chartKey]; // Lookup the corresponding chart
    const chartEntry = chart?.find(entry => entry.diceRoll === modifiedRoll - 6);
    const chartResult = chartEntry ? chartEntry.outcomeIfMet : "No matching result";

    // Check for special event
    let specialEventResult = "";
    if (eventDie === 6) {
        const specialEvent = specialEvents.find(event => event.diceRoll === twelveSidedDie);
        specialEventResult = specialEvent
            ? `Special Event: ${specialEvent.event}`
            : "No special event found.";
    }
     // Display the results
        document.getElementById('dice-result').textContent = `
            ${diceResult}
            Matchup: ${matchup}
            Influencing Player: ${influencingPlayer.name} (${influencingPlayer.isOffense ? "Offense" : "Defense"}), Rating: ${influencingPlayer.rating}
            Modified Roll: ${modifiedRoll} => Chart Result: ${chartResult}
            ${specialEventResult ? `\n${specialEventResult}` : ""}
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


document.getElementById('roll-dice').addEventListener('click', rollDice);

document.getElementById('home-team').addEventListener('change', (event) => {
    displayTeamDetails(event.target.value, 'home-team-details');
});

document.getElementById('away-team').addEventListener('change', (event) => {
    displayTeamDetails(event.target.value, 'away-team-details');
});

populateTeamDropdowns();