window.addEventListener('scroll', () => {
    let parent =  document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
  }, false)

  $('.bees-donate-btn').on("click", function(){
    // Place if statement here
    if ($(this).hasClass("bees-donate-btn-1")) {
      $(".bees-donate-btn-1").addClass("active");
      $(".bees-donate-btn-2").removeClass("active");
      $(".bees-donate-btn-3").removeClass("active");
      $(".bees-donate-btn-4").removeClass("active");
      $("#bees-donate-1").css("display", "block");
      $("#bees-donate-2").css("display", "none");
    }
    // else if conditional here
    else if ($(this).hasClass("bees-donate-btn-2")) {
        $(".bees-donate-btn-2").addClass("active");
        $(".bees-donate-btn-1").removeClass("active");
        $(".bees-donate-btn-3").removeClass("active");
        $(".bees-donate-btn-4").removeClass("active");
        $("#bees-donate-1").css("display", "block");
        $("#bees-donate-2").css("display", "none");
    }
    // else if conditional here
    else if ($(this).hasClass("bees-donate-btn-3")) {
        $(".bees-donate-btn-3").addClass("active");
        $(".bees-donate-btn-1").removeClass("active");
        $(".bees-donate-btn-2").removeClass("active");
        $(".bees-donate-btn-4").removeClass("active");
        $("#bees-donate-1").css("display", "block");
        $("#bees-donate-2").css("display", "none");
    }
    // else if conditional here
    else if ($(this).hasClass("bees-donate-btn-4")) {
        $(".bees-donate-btn-4").addClass("active");
        $(".bees-donate-btn-1").removeClass("active");
        $(".bees-donate-btn-2").removeClass("active");
        $(".bees-donate-btn-3").removeClass("active");
        $("#bees-donate-1").css("display", "block");
        $("#bees-donate-2").css("display", "block");
    }
    // Place an else statement here to wrap all this up
    else {
      
    }
  });

  $('.bees-donate-submit').on("click", function(){
    // Place if statement here
    if ($(this).hasClass("bees-donate-submit")) {
      $("#bees-donate-1").css("display", "none");
      $("#bees-donate-2").css("display", "none");
      $("#bees-donate-thanks").css("display", "block");
    }
    // Place an else statement here to wrap all this up
    else {
      
    }
  });

  $('.bees-donate-close').on("click", function(){
    // Place if statement here
    if ($(this).hasClass("bees-donate-close")) {
      $("#bees-donate-1").css("display", "none");
      $("#bees-donate-2").css("display", "none");
      $("#bees-donate-thanks").css("display", "none");
      $(".bees-donate-btn").removeClass("active");
    }
    // Place an else statement here to wrap all this up
    else {
      
    }
  });