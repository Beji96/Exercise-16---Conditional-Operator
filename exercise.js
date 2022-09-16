const isSunnyDay = true;
const isHomeworkCompleted = false;

isSunnyDay > true
  ? (console.log("Jesse can go out to play"), (isSunnyDay = true))
  : (console.log("Jesse stays home"), (isHomeworkCompleted = false));
