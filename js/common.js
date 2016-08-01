$(document).ready(function() {
//new pass
	$('.new-pass').on('click', function () {
		$('#dynamic-id-lightbox').css('display','block');
		$('.bg-fade').css('display','block');
	});
//remove-of-basket
	$('.remove-of-basket').on('click',function () {
		$(this).closest('tr').remove();
		count();
	});
	//count cash
	count();
	function count(){
	var ollCash = 0;
	$('.ware-basket').each(function () {
		var wareCash = $(this).find('.basket-cash span').html();
		ollCash += +wareCash;
		$('.final-price span').html(ollCash);
	});
	}
//start: edit value
    $(".edit-pen").click(function () {
      $(this).parent().hide();
      $(this).parents(".value").find(".value-editor, .value-buttons").show();
    });
    $(".value-buttons .blue-link").click(function () {
      $(this).parents(".value").find(".value-editor, .value-buttons").hide();
      $(this).parents(".value").find(".value-text").show();
      return false;
    });
    $(".value-buttons .btn").click(function () {
    	if($(this).parents(".value").find(".value-editor").hasClass("has-error")){
    	}
    	else{
    			var val = $(this).parents(".value").find(".value-editor .required-entry").val();
		      $(this).parents(".value").find(".value-text .main-value").text(val);
		      $(this).parents(".value").find(".value-editor, .value-buttons").hide();
		      $(this).parents(".value").find(".value-text").show();
		      return false;
    	}

    });
//end: edit value

// start: add address
  $(".value-buttons-address .save-address").click(function () {
   	  var valInp = $(this).parents(".address-form").find(".value-editor-address .required-entry").val();
    	var valSelect = $(this).parents(".address-form").find(".select2-selection__rendered").text();
		  $(".value-text.address-text .main-value").text(valSelect+", "+valInp);
		  $(this).parents(".address-form").hide();
		  $(".address-text .edit-pen, .address-text .clear").show();
		  return false;
  });
  $(".address-text .clear").click(function () {
   	$(".value-text.address-text .main-value").text("Ваша адресная книга пуста");
   	$(".address-text .edit-pen, .address-text .clear").hide();
   	$(".add-address").show();
  });
    $(".address-text .edit-pen").click(function () {
	    $(".address-form").show();
	    $(this).parents(".value").find(".value-editor, .value-buttons").hide();
	    $(this).parent().show();
  });
    $(".address-text .close-address").click(function () {
     $(".add-address").hide();
     $(this).parents(".value").find(".value-editor, .value-buttons").hide();
     return false;
  });
  $(".add-address").click(function () {
    $(".address-form").show();
    $(this).hide();
    return false;
  });
  $(".close-address").click(function () {
    $(".address-form").hide();
     $(".add-address").show();
     return false;
  });
// end: add address

//start: fix height
	$(window).resize(function () {
		if($(window).width() < 992) {
					$("#tab-hot-1 .parameters-block .block").css("height", "auto");
				}
	});
	if($(window).width() > 992) {
				var heightBlock = $("#tab-hot-1 .parameters-block.block-1 .block").height();
				$("#tab-hot-1 .parameters-block.block-2 .block").height(heightBlock);
	}
//end: fix height

//start: rating
	$(".rating-average-estimate .rating-box .rating-mask").mouseover(function () {
		$(".average-estimate").empty()
		$(".average-estimate").show();
	});
	$(".rating-average-estimate .rating-box .item-1").mouseover(function () {
		$(".rating-average-estimate .rating").css("width", "20%");
		$(".average-estimate").append("1 <label class='average-label-text'>ужасный товар</label>");
	});
	$(".rating-average-estimate .rating-box .item-2").mouseover(function () {
		$(".rating-average-estimate .rating").css("width", "40%");
		$(".average-estimate").append("2 <label class='average-label-text'>плохой товар</label>");
	});
	$(".rating-average-estimate .rating-box .item-3").mouseover(function () {
		$(".rating-average-estimate .rating").css("width", "60%");
		$(".average-estimate").append("3 <label class='average-label-text'>нормальный товар</label>");
	});
	$(".rating-average-estimate .rating-box .item-4").mouseover(function () {
		$(".rating-average-estimate .rating").css("width", "80%");
		$(".average-estimate").append("4 <label class='average-label-text'>хороший товар</label>");
	});
	$(".rating-average-estimate .rating-box .item-5").mouseover(function () {
		$(".rating-average-estimate .rating").css("width", "100%");
		$(".average-estimate").append("5 <label class='average-label-text'>отличный товар</label>");
	});
//end: rating

//start: review rating
	$(".review-rating-details.gna .rating-box .item-1").mouseover(function () {
		$(this).parents(".rating-box").find(".rating").css("width", "20%");
	});
	$(".review-rating-details.gna .rating-box .item-2").mouseover(function () {
		$(this).parents(".rating-box").find(".rating").css("width", "40%");
	});
	$(".review-rating-details.gna .rating-box .item-3").mouseover(function () {
		$(this).parents(".rating-box").find(".rating").css("width", "60%");
	});
	$(".review-rating-details.gna .rating-box .item-4").mouseover(function () {
		$(this).parents(".rating-box").find(".rating").css("width", "80%");
	});
	$(".review-rating-details.gna .rating-box .item-5").mouseover(function () {
		$(this).parents(".rating-box").find(".rating").css("width", "100%");
	});
//end: review rating

//start: slideToggle < 544
	$(".main-tab .toggle-menu").click(function () {
		$(this).parent().find(".nav").slideToggle();
	});
	$(".list-tab-popular .toggle-menu").click(function () {
		$(this).parent().find(".nav").slideToggle();
	});
	$(".buy-too .toggle-menu").click(function () {
		$(this).parent().find(".nav").slideToggle();
	});
//end: slideToggle < 544

//start: events in askAnswerForm
	$(".toggle-form").click(function () {
		$(this).parents(".block").find(".content-loaded").slideToggle();
		$(this).hide();
	});
	$(".close-button").click(function () {
		$(this).parents(".block").find(".content-loaded").slideToggle();
		$(this).parents(".block").find(".toggle-form").show();
	});
	$(".askAnswerThis").click(function () {
		$(this).parents(".quastion-box").find(".askAnswerForm").show();
		return false;
	});
	$(".close-button-second").click(function () {
		$(this).parents(".quastion-box").find(".askAnswerForm").hide();
	});
// end: events in askAnswerForm

//start: events in menu
	$("li.arrow-down a").hover(function () {
		$(this).hide();
		$("li.advanced").show();
		$(".submenu").css("min-height", "590px");
	});
	$("li.level-top a").hover(function () {
		 if($(this).parent().hasClass("advanced")){
		 		$("li.advanced").show();
		 }else{
		 		$("li.advanced").hide();
				$("li.arrow-down a").show();
				$(".submenu").css("min-height", "525px");
		 }	
	});
	$(".nav li.level-top, .nav a.level-top").hover(function () {
		$(this).parents(".nav").addClass("selected");
	});
	$(".nav a.level-top").hover(function () {
		if($(window).width() > 992){
		$(".nav li.level-top").removeClass("over");
		$(this).parent().addClass("over");
		$(".nav .drop-menu").hide();
		$(this).parent().find(".drop-menu").show();
		}
	});
	$(".nav a.level-top").click(function () {
			if($(window).width() < 992){
		$(this).parent().toggleClass("over");
		$(this).parent().find(".drop-menu").slideToggle();
		$(this).find(".fa-angle-right").toggleClass("rotate");
		return false;
		}
	});
	$(".nav-dropdown .full-drop").click(function () {
		if($(window).width() < 768){
			$(this).parent().find(".wrap-items").slideToggle();
				$(this).find(".fa-angle-right").toggleClass("rotate");
			return false;
		}
	});
//end: events in  menu

// start: events in search-line
	//start: register form
		$(".register-on").click(function () {
			$(".login-menu").hide();
			$(".register-menu").show();
			return false;
		});
		$(".login-on").click(function () {
			$(".register-menu").hide();
			$(".login-menu").show();
			return false;
		});
	//end: register form		
	$(".phone-header").click(function () {
		if($(window).width() < 992){
			$(this).parents(".phone").toggleClass("active");
		}
	});
	$(".account-header").click(function () {
		if($(window).width() < 992){
			$(this).parents(".account-block").toggleClass("active");
		}
	});
	$(".block-title").click(function () {
		if($(window).width() < 992){
			$(this).parents(".cart-block.active").toggleClass("active-content");
		}
	});
	$(".main-menu").click(function () {
		if($(window).width() < 992){
			$(".nav-container").slideToggle();
			$(this).find(".fa-angle-down").toggleClass("rotate");
		}
	});
	$(".page, .search-line").hover(function () {
		if($(window).width() > 992){
		$(".nav .drop-menu").hide();
		$(".nav li.level-top").removeClass("over");
		$(".nav").removeClass("selected");
		$(".nav a.level-top .fa-angle-right").removeClass("rotate");
		$("li.advanced").hide();
		$("li.arrow-down a").show();
		}
	});
// end: events in search-line

// Validation
	$.validate({
		validateOnBlur : true,
		scrollToTopOnError : false,
		validateOnEvent: true,
		modules: 'security'
	});

});

$(window).resize(function () {
    if ($(window).width() > 992) {
        $(".main-menu .nav-container").hide();
        $(".main-page-menu .nav-container").show();
        $(".nav .drop-menu").hide();
        $(".nav li.level-top").removeClass("over");
    }
});




if($('#range').length > 0){
	var range = document.getElementById('range');

	noUiSlider.create(range, {
		start: [ 0, 1500 ], // Handle start position
		step: 0, // Slider moves in increments of '10'
		margin: 20, // Handles must be more than '20' apart
		connect: true, // Display a colored bar between the handles
		behaviour: 'tap-drag', // Move handle on tap, bar is draggable
		range: { // Slider can select '0' to '100'
			'min': 0,
			'max': 1500
		},
		// pips: { // Show a scale with the slider
		// 	mode: 'steps',
		// 	density: 500
		// }
	});




	var firstCash = document.getElementById('first-cash'),
		lastCash = document.getElementById('last-cash');

	// When the slider value changes, update the input and span
	range.noUiSlider.on('update', function( values, handle ) {
		if ( handle ) {
			firstCash.value = values[handle];
		} else {
			lastCash.innerHTML = values[handle];
		}
	});
	// When the input changes, set the slider value
	firstCash.addEventListener('change', function(){
		range.noUiSlider.set([null, this.value]);
	});
}

$(document).ready(function () {
	function activeClosed() {
		var attrOpen = $(this).attr('closed');
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$('#'+attrOpen).addClass('active');
		}else{
			$('#'+attrOpen).removeClass('active');
		}
	}
	$('dt.odd.opened').on('click',function () {
		var attrOpen = $(this).attr('closed');
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$('#'+attrOpen).addClass('active');
			$(this).find('.filter-arrow').css({'border-left-color':'transparent','border-top-color':'black'})
		}else{
			$('#'+attrOpen).removeClass('active');
			$(this).find('.filter-arrow').css({'border-left-color':'black','border-top-color':'transparent'})
		}
	})
	$('dt.odd.opened').each(function () {
		var attrOpen = $(this).attr('closed');
		if($(this).hasClass('active')){
			$('#'+attrOpen).addClass('active');
			$(this).find('.filter-arrow').css({'border-left-color':'transparent','border-top-color':'black'})
		}else{
			$('#'+attrOpen).removeClass('active');
			$(this).find('.filter-arrow').css({'border-left-color':'black','border-top-color':'transparent'})
		}
	})
	$('.dynamic-navigation-lightbox-close,.bg-fade').on('click',function () {
		$('.lightbox,.bg-fade').css('display','none');
	})

	$('.opened-catalog-category').on('click',function () {
		$('.lightbox,.bg-fade').css('display','block');

	})

})
$(document).ready(function() {

$("#carousel-container").owlCarousel({
		itemsCustom : [
			[320, 1],
			[450, 1],
			[600, 2],
			[700, 3],
			[1000, 4],
			[1200, 4],
			[1400, 4],
			[1600, 4]
		],
		navigation : true,
		navigationText : ["<",">"]
	});

	$("#main-sclider").owlCarousel({
		itemsCustom : [
			[320, 1],
			[450, 1],
			[600, 1],
			[700,1],
			[1000, 1],
			[1200, 1],
			[1400, 1],
			[1600, 1]
		],
		autoPlay: 3000,
		rewindSpeed: 700,
		paginationSpeed: 700,
		slideSpeed: 700,
		navigation : true,
		navigationText : ["<",">"]
	});


	$(".animate_inner").owlCarousel({
		itemsCustom : [
			[320, 1],
			[450, 2],
			[600, 3],
			[700, 3],
			[1000, 3],
			[1200, 4],
			[1400, 4],
			[1600, 4]
		],
		navigation : true,
		navigationText : ["<",">"]
	});

		$("#ware-carousel").owlCarousel({
		itemsCustom : [
			[320, 2],
			[450, 3],
			[600, 4],
			[700, 6],
			[1000, 3],
			[1200, 4],
			[1400, 4],
			[1600, 4]
		],
		navigation : true,
		navigationText : ["<",">"]
	});
		

	$('.owl-pagination').append('<div class="owl-page play"><span class=""></span></div>')

	//were carousel
	$('.ware-carousel.owl-theme .item .img-zoom img').on('click',function () {
		$('.ware-carousel.owl-theme .item').removeClass('active');
		$(this).closest('.item').addClass('active');
		var linkImg = $(this).attr('src');
		$('.product-image-zoom img').attr('src',linkImg);
	})
});
//filter
$('.filter-label').on('click',function(){
	$(this).closest('a').find('.gan-checkbox').trigger('click');
})



$('.gan-list-checkbox i').on('click',function(){
	$(this).closest('li').remove()
	emptyFilter()
})
function emptyFilter() {
	if($('.active-filter .gan-list-checkbox li').length == 0){
		$('.active-filter,.active-filters').remove()
	}
}
$('.button.sub').on('click',function(){
	$('.active-filter,.active-filters').remove()
})

//main-menu index
$(document).ready(function () {
	
	$('.level-top').mouseover(function () {
		if ($(window).width() > 992) {
		$('.main-menu.opened .nav-container').css('max-width','100%');
			}
	})
	$('.main-menu.main-page-menu.opened .nav-container').mouseleave(function () {
		if ($(window).width() > 992) {
		$('ul.drop-menu').css('display','none');
		$('.main-menu.opened .nav-container').css('max-width','25%');
		// alert('1');
	}
	})



})

$(window).resize(function () {
    if ($(window).width() < 992) {
        $('.main-menu.opened .nav-container').css('max-width','100%');
    }

})

//secect2
$(".select-address").select2({ placeholder: "Введите ваш город"})