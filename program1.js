const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    
    // Helper function for DFS
    const dfs = (i, j) => {
        // If out of bounds or at water cell, return
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
            return;
        }

        // Mark the current cell as visited by changing it to 'W'
        grid[i][j] = 'W';

        // Explore all four directions (up, down, left, right)
        dfs(i + 1, j);  // Down
        dfs(i - 1, j);  // Up
        dfs(i, j + 1);  // Right
        dfs(i, j - 1);  // Left
    };

    let islandCount = 0;

    // Traverse the entire grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If we find an unvisited land cell ('L'), it's the start of a new island
            if (grid[i][j] === 'L') {
                islandCount++;
                dfs(i, j);  // Start DFS to mark the entire island
            }
        }
    }

    return islandCount;
    //write your code here
};

module.exports = getTotalIsles;
