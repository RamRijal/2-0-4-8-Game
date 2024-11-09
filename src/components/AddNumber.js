export const addNumber = (newGrid) => {
  let added = false;
  let gridFull = false;
  let attempts = 0;

  while (!added) 
{
    if (gridFull) {
      break;
    }
    let random1 = Math.floor(Math.random() * 4);
    let random2 = Math.floor(Math.random() * 4);
    attempts++;
    if (newGrid[random1][random2] === 0) {
      newGrid[random1][random2] = Math.random() > 0.5 ? 2 : 4;
      added = true;
    }
}
};
