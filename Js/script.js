const draggables = document.querySelectorAll('.draggable-image');
const dropZones = document.querySelectorAll('.drop-zone');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

dropZones.forEach(zone => {
  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('hovered');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('hovered');
  });

  zone.addEventListener('drop', e => {
    e.preventDefault();
    const draggedImage = document.querySelector('.dragging');
    if (zone.children.length === 0) { // Only drop if the zone is empty
      zone.appendChild(draggedImage);
    }
    zone.classList.remove('hovered');
  });
});
