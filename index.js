// code your solution here
function saturdayFun(activity) {
  return `This Saturday, I want to ${activity || "roller-skate"}!`;

  //   return activity
  //     ? `This Saturday, I want to ${activity}!`
  //     : "This Saturday, I want to roller-skate!";
}

function mondayWork(work) {
  return `This Monday, I will ${work || "go to the office"}.`;
}

function wrapAdjective(flair) {
  return function (adjective) {
    return `You are ${flair}${adjective || "special"}${flair}!`;
  };
}
