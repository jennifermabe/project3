function fader() {
  $(".preloader").fadeOut("slow");
  }
  setTimeout(fader, 3000);
  
  setTimeout(function() {
      $("#fadeIn").fadeIn();
      }, 3500);



window.addEventListener('scroll', () => {
    let parent =  document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
  }, false)





  $(document).ready(function(){

    $('#searchbar').focus();

    $('#donate-buttons').on('click', '.btn-blue', function(e) {
      e.preventDefault();
      $('.active').removeClass('active');
      $('#other-input').hide().siblings('#other').show();
      $(this).filter('.btn-blue').addClass("active");
      var value = $(this).data('impact');
      $(this).closest('div').find('p').text("" + value);
      $('#other-input').find('input').val('');  
    });
      
    $('.btn-green').on('click', function() {
      var dollar;
      var input = $('#other-input').find('input').val();
      if ( !input ) {
        dollar = $('.active').data('dollars');
       } else if ( $.trim(input) === '' || isNaN(input)) {
        // empty space leaves value = 'undefined'. 
        // Have to fix $.trim(input) == '' above so that it works.
        console.log('Yes');
        dollar = "Please enter a number."; 
      } else {
        dollar = input;
      }
      $('#price').text(""+dollar);
    });

    $('#other').on('click', function(e) {
      e.preventDefault(); 
      var buttons = $(this).parent('#donate-buttons');
      buttons.find('.active').removeClass('active');
      var other = $(this).hide().siblings('#other-input');
      other.show();
      other.find('input').focus();
      var pText = buttons.siblings('p');
      pText.text("Thank you!");
      var oValue = other.find('input');
      oValue.keyup(function() {
        if ( oValue.val() > 50 ) {
          pText.text("Thank you!" + " You\'re donating the amount for full support of " + oValue.val()/200 + " beehive(s).");
        } else {
          pText.text("Thank you!");
        }
      });
    }); 

  });





  (() => {
    // Specify the deadline date
    const deadlineDate = new Date('December 31, 2019 23:59:59').getTime();
    
    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours= document.querySelector('.countdown__hours .number');
    const countdownMinutes= document.querySelector('.countdown__minutes .number');
    const countdownSeconds= document.querySelector('.countdown__seconds .number');
  
    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {    
      // Get current date and time
      const currentDate = new Date().getTime();
  
      // Calculate the distance between current date and time and the deadline date and time
      const distance = deadlineDate - currentDate;
  
      // Calculations the data for remaining days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Insert the result data into individual countdown boxes
      countdownDays.innerHTML = days;
      countdownHours.innerHTML = hours;
      countdownMinutes.innerHTML = minutes;
      countdownSeconds.innerHTML = seconds;
    }, 1000);
  })();