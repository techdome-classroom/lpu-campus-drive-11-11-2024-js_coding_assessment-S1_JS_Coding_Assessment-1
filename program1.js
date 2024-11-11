const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    
    const dfs = (i, j) => {
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
            return;
        }
        grid[i][j] = 'W';
        dfs(i + 1, j);  // Down
        dfs(i - 1, j);  // Up
        dfs(i, j + 1);  // Right
        dfs(i, j - 1);  // Left
    };

    let islandCount = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L') {
                islandCount++;
                dfs(i, j); 
            }
        }
    }

    return islandCount;
    //write your code here
};

module.exports = getTotalIsles;
