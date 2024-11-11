const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;

    let numIslands = 0;

    // Helper function for Depth First Search
    const dfs = (i, j) => {
        // Check if the current cell is out of bounds or is water
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
            return;
        }

        // Mark the current cell as visited by changing it to 'W'
        grid[i][j] = 'W';

        // Perform DFS in all four possible directions
        dfs(i - 1, j); // up
        dfs(i + 1, j); // down
        dfs(i, j - 1); // left
        dfs(i, j + 1); // right
    };

    // Iterate through each cell in the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // If a land cell is found, initiate DFS and increment the island count
            if (grid[i][j] === 'L') {
                numIslands++;
                dfs(i, j);
            }
        }
    }

    return numIslands;
};


module.exports = getTotalIsles;
}