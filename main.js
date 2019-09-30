const targets = document.querySelectorAll('.section');
const sources = document.querySelectorAll('.pieces');
const containers = [
  ...sources,
  ...targets
];
const drake = dragula(containers, {
  accepts: (source, target) => {
    const sourceId = source.className.split('--')[1].split(' ')[0]; 
    let targetId = "";
    if (target.className.split('--')[1]) {
      targetId = target.className.split('--')[1].split(' ')[0];
    }

    return sourceId === targetId;
  },
  revertOnSpill: true,
});