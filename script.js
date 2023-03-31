// Get the button and tab content elements
const nextTabBtn = document.getElementById('next-tab-btn');
const tabContentElems = document.querySelectorAll('.tab-content .tab-pane');

// Add a click event listener to the button
nextTabBtn.addEventListener('click', () => {
  // Find the index of the currently active tab content
  let activeIndex = Array.from(tabContentElems).findIndex(elem => elem.classList.contains('active'));

  // Remove the 'active' class from the current tab content
  tabContentElems[activeIndex].classList.remove('active', 'show');

  // Increment the activeIndex to show the next tab content
  activeIndex++;
  if (activeIndex >= tabContentElems.length) {
    activeIndex = 0;
  }

  // Add the 'active' class to the next tab content
  tabContentElems[activeIndex].classList.add('active', 'show');
});
