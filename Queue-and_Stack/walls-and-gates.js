/**
 * You are given an m x n grid rooms initialized with these three possible values.

-1 A wall or an obstacle.
0 A gate.
INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF 
as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a 
gate, it should be filled with INF.

Input: rooms = [[2147483647,-1,0,2147483647],
                [2147483647,2147483647,2147483647,-1],
                [2147483647,-1,2147483647,-1],
                [0,-1,2147483647,2147483647]]
Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

Input: rooms = [[-1]]
Output: [[-1]]

Input: rooms = [[0]]
Output: [[0]]

 */

/**
 * Approch 1 : DFS
 */

 const wall = -1, gate = 0;
 var wallsAndGates = function(rooms) {
     let m = rooms.length;
     
     if(m == 0) {
         return ;
     }
     
     let n = rooms[0].length;
     
     for(let row = 0; row < m; row++){
         for(let col = 0; col < n; col++){
             if(rooms[row][col] === gate){
                 // to speed up the calculation
                 // instead of calculating from the INF, calculating 
                 //from 0 can avoid redundant calculation
                 dfs(rooms, row, col, 0);
             }
         }
     }
     
 };
 
 let dfs = function(rooms, i, j, steps){
     if(i < 0 || i+1 > rooms.length || j < 0 || j+1 > rooms[0].length){
         return;
     }
     if(rooms[i][j] == wall) {
         return;
     }
    
     // if the "steps" is calculated, dont need to calculate again
     if(steps <= rooms[i][j]) {
         rooms[i][j] = steps;
         dfs(rooms, i - 1, j, steps + 1)
         dfs(rooms, i + 1, j, steps + 1)
         dfs(rooms, i, j - 1, steps + 1)
         dfs(rooms, i, j + 1, steps + 1)
     }
     
 }