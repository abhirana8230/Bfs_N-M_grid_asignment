function BfsMoveCount() {
  var adjacencyMatrix = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, "#", 0, 0, 0, "#", 0, 0],
    [0, 0, 0, 0, "#", 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, "#", 0, 0, "#", 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, "#", 0],
    [0, 0, "#", 0, 0, "#", 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, "#", 0, 0, 0],
  ]; //adjacency matrix created according to given graph

  var nRow = 10; //number of rows
  var nCol = 8; //number of columns
  var rowPosn = 9; //starting row position
  var colPosn = 3; //stating column position
  var rowQueue = []; //row queue
  var colQueue = []; //column queue

  var visited = []; //visited nodes
  for (let row = 0; row < nRow; row++) {
    visited.push(new Array(Col).fill(0));
  } //initializing visited matrix with 0

  var dirRow = [-1, 1]; //direction of movement along rows
  var dirCol = [-1, 1]; //direction of movement along column

  function solution() {
    let count = 0;
    rowQueue.push(rowPosn);
    colQueue.push(colPosn);
    visited[rowPosn][colPosn] = "BOB"; //setting the visited nodes to be true
    while (rowQueue.length) {
      var curRowQue = rowQueue.shift();
      var curColQue = colQueue.shift();
      neighboursNode(curRowQue, curColQue);
    }
    for (let i = 0; i < nRow; i++) {
      for (let j = 0; j < nCol; j++) {
        if (visited[i][j] == 1) {
          count++;
        }
      }
    }
    return count;
  }

  function neighboursNode(rQue, cQue) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        var rr = rQue + dirRow[i];
        var cc = cQue + dirCol[j];

        if (rr < 0 || cc < 0) {
          continue;
        }
        if (rr >= nRow || cc >= nCol) {
          continue;
        }
        if (visited[rr][cc]) {
          continue;
        }
        if (adjacencyMatrix[rr][cc] === "#") {
          continue;
        }

        rowQueue.push(rr);
        colQueue.push(cc);
        visited[rr][cc] = true;
      }
    }
  }
  return solution();
}

BfsMoveCount();
