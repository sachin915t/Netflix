document.addEventListener('DOMContentLoaded', function() {
    var accordians = document.querySelectorAll('.accordian');
  
    accordians.forEach(function(accordian) {
      accordian.addEventListener('click', function() {
        toggleAccordion(this.id);
      });
    });
  
    function toggleAccordion(sectionId) {
      var answer = document.getElementById(sectionId + '-answer');
      var icon = document.querySelector('#' + sectionId + ' i.fa-solid');
  
      // Toggle the 'show' class to reveal/hide the answer
      answer.classList.toggle('show');
  
      // Toggle the 'fa-plus' and 'fa-minus' classes for the icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-x');
    }
  });
  