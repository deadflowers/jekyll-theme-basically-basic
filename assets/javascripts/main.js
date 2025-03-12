---
---

/*!
 * Basically Basic Jekyll Theme 1.4.5
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/
document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.querySelector('.sidebar-toggle-wrapper');
  const sidebar = document.querySelector('.sidebar');
  const closeButton = document.querySelector('.sidebar .close-button'); // Select the button WITHIN the sidebar
  const sidebarListItems = document.querySelectorAll('.sidebar li');

  if (sidebarToggle && sidebar) { // Check if elements exist
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.add('is--visible');
       // Add 'is--moved' to each list item.
      sidebarListItems.forEach(item => {
          item.classList.add('is--moved');
        });
      sidebarToggle.setAttribute('aria-expanded', 'true'); // Accessibility
    });
  }

  if (closeButton && sidebar) { // Check if elements exist
    closeButton.addEventListener('click', function() {
      sidebar.classList.remove('is--visible');
        // Remove 'is--moved' from each list item.  Important for resetting!
      sidebarListItems.forEach(item => {
        item.classList.remove('is--moved');
          });
      sidebarToggle.setAttribute('aria-expanded', 'false'); // Accessibility
    });
  }

    // Close sidebar if click outside of the sidebar.
  document.addEventListener('click', function(event) {
    if (sidebar && sidebar.classList.contains('is--visible')) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = sidebarToggle.contains(event.target);

      if (!isClickInsideSidebar && !isClickOnToggle) {
        sidebar.classList.remove('is--visible');
          sidebarListItems.forEach(item => {
            item.classList.remove('is--moved');
              });
        sidebarToggle.setAttribute('aria-expanded', 'false'); //Accessibility
      }
    }
  });

  // Close the sidebar when escape key press
  document.addEventListener('keydown', (event) => {
        if(sidebar.classList.contains('is--visible')){
            if (event.key === 'Escape') {
                sidebar.classList.remove('is--visible');
                sidebarListItems.forEach(item => {
                    item.classList.remove('is--moved');
                });
            }
        }
    });
});
// Animation smoother
function OnTransitionEnd() {
  myMenu.classList.remove('is--animatable');
}

myMenu.addEventListener('transitionend', OnTransitionEnd, false);
myToggle.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
myMenu.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
if (mySearchToggle) {
  mySearchToggle.addEventListener('click', function () {
    toggleClassSearch();
  }, false);
}

// Toggle search input and content visibility
function toggleClassSearch() {
  mySearchContent.classList.toggle('is--visible');
  myInitialContent.classList.toggle('is--hidden');
  setTimeout(function () {
    document.querySelector('.search-content input').focus();
  }, 400);
}
