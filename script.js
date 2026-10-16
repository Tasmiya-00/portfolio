document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelectorAll('nav a').forEach(function(item) {
      item.style.color = '#d0cde0';
    });

    link.style.color = '#c9a7ff';
  });
});