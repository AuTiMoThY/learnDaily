/*--------------------------------------*\
	okbank learn diary
	V 0.0.0
			by okbank AuTiMoThY
\*--------------------------------------*/
/*
* TOC
*
* okadminUI
* - okadminUI.InputEffects  輸入框效果
* - okadminUI.formCheck  表單驗證
* okadminUI.hasSubList  側邊欄 判斷是否有子選單
* - okadminUI.ctrlSubList  側邊欄 子選單開關
* - okadminUI.dropdown
* learnDiaryUI
* - okadminUI.progressBar 進度條
* - okadminUI.diaryState 日誌狀態
* - okadminUI.modDropdown 下拉選單
*/

var viewPortWidthHeight = function () {

	var wh = {};

	if(window.innerWidth) {
			wh.width = window.innerWidth;
			wh.height = window.innerHeight;
	}
	else if(document.documentElement.clientWidth) {
			wh.width = document.documentElement.clientWidth;
			wh.height = document.documentElement.clientHeight;
	}
	else if(document.body.clientWidth) {
			wh.width = document.body.clientWidth;
			wh.height = document.body.clientHeight;
	}
	return wh;
}

//Initialization
Waves.attach('.btn', ['waves-light']);
Waves.attach('[class*="btn-outline"]', ['waves-effect']);
Waves.attach('.okdropdown-ctrl, .btn-adv_search', ['waves-effect']);
Waves.attach('.user .okdropdown-ctrl', ['waves-light']);
// Waves.attach('.btn-flat', ['waves-effect']);
// Waves.attach('.view .mask', ['waves-light']);
// Waves.attach('.waves-light', ['waves-light']);
// Waves.attach('.navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item', ['waves-light']);
// Waves.attach('.pager li a', ['waves-light']);
// Waves.attach('.pagination .page-item .page-link', ['waves-effect']);
Waves.attach('.oksidebar-list .inner-link', ['waves-light']);
Waves.init();


/**
 * ---------------------------------------------------------------------------------
 * > okadminUI
 */
var okadminUI = (function(window,jQuery){
	if (!window.jQuery) { throw new Error("okadminUI requires jQuery") }

    var $ = window.jQuery;
    var _this = this;

    var setup = function(){
    	var setup = {
    		$asideCtrl: $(".aside-ctrl")
    	}
    	return setup;
    };

    var subList = {
    	open: function(subnav){
    	    	TweenLite.set(subnav, {height: "auto"});
    	    	TweenLite.from(subnav, 0.3, {height: 0});
    	    },

	    close: function(subnav){
	    	TweenLite.to(subnav, 0.3, {height: 0});
	    }
    }


	return {
		init: function(){
			// console.log(setup());
			// this.asideCtrl();
			this.hasSubList($(".oksidebar-item"));
			this.dropdown();
			this.InputEffects();
		},

		resizeScreen: function(){
			var viewPort = new viewPortWidthHeight();
			var headerH, footerH, setHeight;
			headerH = $(".page_header").outerHeight();
			footerH = 60;
			setHeight = viewPort.height - headerH;

			$(".content_wrapper").css({
				'min-height': setHeight
			});
		},


		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.InputEffects  輸入框效果
		 */
		InputEffects: function(){
			$( 'input.input__field').each(function(index, el) {
				if ($.trim($(el).val()) != "") {
					$(this).parent().addClass('input--filled')
				}

				$(el).focus(function(event) {
					$(this).parent().addClass('input--filled')
				});
				$(el).blur(function(event) {
					if ($.trim($(this).val()) === '') {
						$(this).parent().removeClass('input--filled')
					}
				});
			});

			$("select.input__field").each(function(index, el) {
				$(el).change(function(event) {
					if ($.trim($(this).val()) != '') {
						$(this).parent().addClass('input--filled')
					}
				});
			});
		},


		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.formCheck  表單驗證
		 */
		formCheck: function () {
			return {
				init: function() {
					$.validator.setDefaults({
						debug: true,
						errorClass: "error",
						// errorContainer: 'error_msg',
						errorPlacement: function (error, element) {
							// console.log(error);
							// console.log(element);
							if (element.is(":radio") || element.is(":checkbox")) {
								error.appendTo(element.parents('.control-field'));
							}
							else {
								// This is the default behavior
								// error.insertAfter( element );
								error.appendTo(element.parents('.control-field'));
							}
						},
						highlight: function (element, errorClass, validClass) {
							$(element).addClass(errorClass).removeClass(validClass);
							$(element).parents('.control-field').addClass(errorClass).removeClass(validClass);
						},
						unhighlight: function (element, errorClass, validClass) {
							$(element).removeClass(errorClass).addClass(validClass);
							$(element).parents('.control-field').removeClass(errorClass).addClass(validClass);
							// keeps the default behaviour removing error class from elements
						},
						success: function (label, element) {
							label.parents('.control-field').removeClass('error');
							label.remove();
						}
					});
				}
			}

		},



		/**
		 * ---------------------------------------------------------------------------------
		 *  okadminUI.asideCtrl  側邊欄 開關
		 */
		// asideCtrl: function(){
		// 	var m = new Marka(".icons-navicon");
		// 	m.set('angle-double')
		// 		.color('#ffffff')
		// 	    .size('30')
		// 	    .rotate('left');
		// 	$(".aside-ctrl").click(function(event) {
		// 		if (!$("body").hasClass('js-closeAside')) {
		// 			$("body").addClass('js-closeAside');
		// 			m.set('bars').rotate('bottom');
		// 		}
		// 		else {
		// 			$("body").removeClass('js-closeAside');
		// 			m.set('angle-double').rotate('left');
		// 		}
		// 	});
		// },
		/**
		 * okadminUI.asideCtrl  END  !!
		 * ---------------------------------------------------------------------------------
		 */

		/**
		 * ---------------------------------------------------------------------------------
		 * > okadminUI.hasSubList  側邊欄 判斷是否有子選單
		 */
		hasSubList: function(menu){
			menu.each(function(index, el) {
				if ($(this).has(".list-second-level").length) {
					$(el).addClass('has-sub').children('.inner-link:first').attr('href', 'javascript:;');
				}
			});
			this.ctrlSubList($(".oksidebar-item.has-sub>.inner-link"));
		},
		/**
		 * okadminUI.hasSubList  END  !!
		 * ---------------------------------------------------------------------------------
		 */


		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.ctrlSubList  側邊欄 子選單開關
		 */
		ctrlSubList: function(clickEl){
			// TweenLite.to($(".list-second-level"), 0.3, {height: 0});
			clickEl.click(function(event) {
				var subnav = $(this).parent().find('.list-second-level');
				if (!$(this).parent().hasClass('js-open')) {
					$(".oksidebar-item.has-sub").removeClass('js-open')
					$(this).parent().addClass('js-open');

					subList.close($('.oksidebar-item:not(.js-open) .list-second-level'));
					subList.open($(".oksidebar-item.js-open .list-second-level"));

				}
				else {
					$(this).parent().removeClass('js-open');
					subList.close(subnav);
				}
			});
		},
		/**
		 * okadminUI.ctrlSubList  END  !!
		 * ---------------------------------------------------------------------------------
		 */


		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.dropdown
		 */
		dropdown: function(){

			$(".okdropdown-ctrl").click(function(event) {
				console.log($(document).outerHeight());
				event.stopPropagation();

				$(".okdropdown.js-open .okdropdown-ctrl").not(this).each(function(index, el) {
					$(this).parent().removeClass('js-open');
				});
				$(this).parent().toggleClass('js-open');
				console.log($(document).outerHeight());


			});
			$(document).click(function(event) {
				$(".okdropdown.js-open").removeClass('js-open');
			});
		}
		/**
		 * okadminUI.dropdown  END  !!
		 * ---------------------------------------------------------------------------------
		 */
	}


}(window,jQuery));

/**
 * ---------------------------------------------------------------------------------
 * > learnDiaryUI
 */
var learnDiaryUI = (function(window,jQuery){
	if (!window.jQuery) { throw new Error("okadminUI requires jQuery") }

    var $ = window.jQuery;
    var _this = this;

	/**
	 * [isClick description]
	 * @param  {$(el)}  clickEl     被點擊元素
	 * @param  {$(el)}  targetEl    [description]
	 * @param  {string}  toogleClass [description]
	 */
    function isClick(clickEl, targetEl, toogleClass){
    	clickEl.click(function(event) {
    		if (!targetEl.hasClass(toogleClass)) {
    			targetEl.addClass(toogleClass)
    		}else {
    			targetEl.removeClass(toogleClass)
    		}
    	});
    }

    function blur_content(el){
    	var blurElement = {a:0};//start the blur at 0 pixels

    	TweenMax.to(blurElement, 1, {a:3, onUpdate:applyBlur});
    	function applyBlur(){
    	    TweenMax.set(el, {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});
    	};
    }
    function clarify_content(el){
    	var blurElement = {a:3};//start the blur at 0 pixels

    	TweenMax.to(blurElement, 1, {a:0, onUpdate:applyBlur});
    	function applyBlur(){
    	    TweenMax.set(el, {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});
    	};
    }
	return {
		init: function(){
			this.progressBar();
			this.advSearchCtrl();
			this.modDropdown();
		},
		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.progressBar 進度條
		 */
		progressBar: function() {
			var $progressBar = $("#progressBar");

			if ($progressBar) {
				var number = $progressBar.parent().data('number');
				var w = (number / 6) * 100;
				$progressBar.css({
					width: w + "%"
				});

				$("#monthWirte").find('.js-number').text(number)
			}
		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.diaryState 日誌狀態
		 */
		diaryState: function(el){
			var state = $(el).data('state');
			// console.log(state);
			var arr = state.split(',');
			// console.log(arr);
			if (state != '') {
				for (i = 0; i < arr.length; i++) {
					var svg_icon_html = "";
					svg_icon_html += "<i class='icon'><svg class=\"svg-state-" + arr[i] + "\">";
					svg_icon_html += "	<use xlink:href=\"#svg-state-" + arr[i] + "\"></use>";
					svg_icon_html += "</svg></i>";
					$(el).addClass('state-'+arr[i]).find('.diary-state').append(svg_icon_html);
				    // console.log(arr[i]);

				}
			}
		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.modDropdown 下拉選單
		 */
		modDropdown: function() {
			$(".mod-dropdown-ctrl").each(function(index, el) {
				$(el).click(function(event) {
					event.stopPropagation();
					$('.js-open .mod-dropdown-ctrl').not(this).each(function () {
						$(this).parents(".mod-dropdown").removeClass("js-open");
					});
					$(this).parents(".mod-dropdown").toggleClass("js-open");
				});

				$(el).next(".mod-dropdown-list").find('li').click(function(event) {
					event.stopPropagation();
				});

				$(document).click(function () {
					$(".mod-dropdown-ctrl").parents(".mod-dropdown").removeClass("js-open");
				});
			});
		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.advSearchCtrl 搜尋框開關
		 */
		advSearchCtrl: function(){

			isClick($(".btn-adv_search"), $(".page_wrap"), "js-show-adv_search");
			$(".mask_div").click(function(event) {
				$(".page_wrap.js-show-adv_search").removeClass('js-show-adv_search');
				clarify_content(['.diary_list']);

			});


			$(".btn-adv_search").click(function(event) {
				if ($(".page_wrap").hasClass('js-show-adv_search')) {
					blur_content(['.diary_list']);
				}
				else{
					clarify_content(['.diary_list']);
				}
			});



		}
	}


}(window,jQuery));


$(window).resize(function (event) {
	okadminUI.resizeScreen();

});

$(function() {
	okadminUI.resizeScreen();
	okadminUI.init();

	learnDiaryUI.init();


	$(".diary_item").each(function(index, el) {
		learnDiaryUI.diaryState(el);
	});


	// 側邊欄的日曆
	$('#calendar').datepicker({
		inline: true,
		firstDay: 0,
		showOtherMonths: true,
		changeMonth: true,
		changeYear: true,
		yearRange: '2008:+0',
		dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
		monthNames: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
		monthNamesShort:  [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
		prevText: "",
		nextText: "",
		// showButtonPanel: true,
		dateFormat: "yy-mm-dd",
		onSelect: function(e, obj){
			console.log(e);
		}
	});
	// 點選“返回今日”
    $(".today").click(function(){
    	$('#calendar').datepicker("setDate", new Date()).datepicker( "hide" );
	});


    // 表單的日曆選項
	$('.datepicker').datepicker({
		firstDay: 0,
		showOtherMonths: true,
		changeMonth: true,
		changeYear: true,
		yearRange: '2008:+0',
		dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
		monthNames: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
		monthNamesShort:  [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
		prevText: "",
		nextText: "",
		// showButtonPanel: true,
		dateFormat: "yy-mm-dd",
		beforeShow: function() {
		    setTimeout(function(){
		        $('.ui-datepicker').css('z-index', 10);
		    }, 0);
		},
		onSelect: function(e, obj){
			console.log(e);
			console.log(obj);
			$("#"+obj.id).parent().addClass('input--filled')
		}
	});






});
