/*--------------------------------------*\
	okbank learn diary
	V 0.5.2
			by okbank AuTiMoThY
\*--------------------------------------*/
/*
* TOC
*
* okadminUI
* - okadminUI.navCurrentActive  導覽列當前頁面高亮
* - okadminUI.mobileMenu  手機版ＭＥＮＵ 動作
* - okadminUI.InputEffects  輸入框效果
* - okadminUI.formCheck  表單驗證
* - okadminUI.previewPhoto  圖片上傳之預覽
* - okadminUI.hasSubList  側邊欄 判斷是否有子選單
* - okadminUI.ctrlSubList  側邊欄 子選單開關
* - okadminUI.dropdown
* - okadminUI.selectStyled  <select> 美化
* - okadminUI.notice 通知彈出框
* - okadminUI.tabs 頁籤
* learnDiaryUI
* - learnDiaryUI.progressBar 進度條
* - learnDiaryUI.diaryState 日誌狀態
* - learnDiaryUI.modDropdown 下拉選單
* - learnDiaryUI.advSearchCtrl 搜尋框開關
* - learnDiaryUI.reply
* - learnDiaryUI.feedback  一些動作
* - learnDiaryUI.feedbackBlockEl  回饋區塊
* - learnDiaryUI.feedback  一些動作
* - learnDiaryUI.clearFeedbackText  收合後清空文字
* doc ready
*/

var uploadFileVal = "";
var checkedVal = "";
var _Diary_State_Value = "";
var _Department_Value = "";
var _Breakpoint_Mobile = "";
const mq = window.matchMedia("(max-width: 576px)");


/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


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
    	return {
    		$asideCtrl: $(".aside-ctrl"),

    	};
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
			// this.hasSubList($(".oksidebar-item"));
			if (!mq) {
				this.dropdown();
			}
			this.InputEffects();
			this.selectStyled().init();
			this.navCurrentActive($(".page_menu-item"));
		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.navCurrentActive  導覽列當前頁面高亮
		 */
		navCurrentActive: function(itemEl){
			itemEl.each(function(index, el) {
				var current = $(".page_wrap").data('current');
				// console.log(current);
				// console.log($(el).data('menu'));
				if ($(el).data('menu') == current) {
					// console.log(index);
					$(itemEl).eq(index).addClass("active");
				}
			});
		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.mobileMenu  手機版ＭＥＮＵ 動作
		 */
		mobileMenu: function() {
			var tl = new TimelineMax();
			return {
				init: function () {
					let _this = this;

					// $("#m_nav ul").hide();
					// TweenLite.to($(".m_nav_wrap"), 0.3, {height: 0, 'padding-bottom': '0px',});
					// TweenLite.to($(".m_subnav"), 0.3, {height: 0});
					// this.subList();

					$(".m_nav-bg").stop().click(function (event) {

						$("#m_menu").removeClass('js-open');
						$("#m_nav").removeClass('js-open');
						$(".page_wrap").removeClass('js-open_m_nav');

						// TweenLite.to($(".m_nav_wrap"), 0.3, {
						// 	height: 0,
						// 	onComplete: function () {
						// 		TweenMax.fromTo($("#m_nav"), 1, {
						// 			css: {
						// 				opacity: 1,
						// 				zIndex: '300'
						// 			}
						// 		}, {
						// 			css: {
						// 				opacity: 0,
						// 				zIndex: '-1'
						// 			},
						// 		});
						// 	}
						// });
					});


					$("#m_menu").stop().click(function (event) {
						(!$(this).hasClass('js-open')) ? _this.open($(this)) : _this.close($(this));
					});
				},

				// mobileNav.open
				open: function (el) {
					if (!$(el).hasClass('js-open')) {
						$(el).addClass('js-open');
						$("#m_nav").addClass('js-open');
						$(".page_wrap").addClass('js-open_m_nav');

						// TweenMax.fromTo($("#m_nav"), 0.3, {
						// 	css: {
						// 		opacity: 0,
						// 		zIndex: '-1'
						// 	}
						// }, {
						// 	css: {
						// 		opacity: 1,
						// 		zIndex: '300'
						// 	},
						// 	onComplete: function () {
						// 		TweenLite.set($(".m_nav_wrap"), {height: "auto", 'padding-bottom': '70px'});
						// 		TweenLite.from($(".m_nav_wrap"), 0.3, {height: 0,'padding-bottom': '0px'});
						// 		// TweenLite.to($(".m_nav_wrap"), 0.2, {height:0})
						// 	}
						// });
					}

				},

				// mobileNav.close
				close: function (el) {
					if ($(el).hasClass('js-open')) {
						console.log('qw');
						$(el).removeClass('js-open');

						$("#m_nav").removeClass('js-open');
						$(".page_wrap").removeClass('js-open_m_nav');

						// TweenLite.to($(".m_nav_wrap"), 0.3, {
						// 	height: 0,
						// 	'padding-bottom': '0px',
						// 	onComplete: function () {
						// 		$("#m_nav").removeClass('js-open');
						// 		TweenMax.fromTo($("#m_nav"), 1, {
						// 			css: {
						// 				opacity: 1,
						// 				zIndex: '300'
						// 			}
						// 		}, {
						// 			css: {
						// 				opacity: 0,
						// 				zIndex: '-1'
						// 			},
						// 		});
						// 	}
						// });
					}
				}
			}

		},


		/**
		 * ---------------------------------------------------------------------------------
		 * >> okadminUI.InputEffects  輸入框效果
		 */
		InputEffects: function(){
			console.log('okadminUI.InputEffects  START');
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
		 * >> okadminUI.previewPhoto  圖片上傳之預覽
		 */
		previewPhoto: function(input){
			/**
			 * 	reference
			 * 	- http://jsfiddle.net/Fractaliste/LvsYc/1669/
			 * 	- https://codepen.io/matt-west/pen/CfilG?editors=0010
			 */
			 console.log(input);
			var imageType = /image.*/;
		    if (input.files && input.files[0]) {
		    	if (input.files[0].type.match(imageType)) {
		    		var reader = new FileReader();
		    		reader.onload = function (e) {
		    			$('.file_upload-preview').html("");
		    			var img = new Image();
		    			img.src = e.target.result;
		    			img.className = "animated fadeIn";
		    		    $('.file_upload-preview').append(img);
		    		}
		    		reader.readAsDataURL(input.files[0]);
		    		uploadFileVal =  $(input).val();
		    		// console.log(uploadFileVal);
		    		return uploadFileVal;
		    	}
		    	else {
		    		var html = "";
		    		html += "<div class='frm_error-txt'>";
		    		html += "	不支援此檔案格式，僅支援.jpg、.jpeg、.png。";
		    		html += "</div>";
		    		$('.file_upload-preview').html(html);
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
		 * >> okadminUI.hasSubList  側邊欄 判斷是否有子選單
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
		},
		/**
		 * okadminUI.dropdown  END  !!
		 * ---------------------------------------------------------------------------------
		 */

		/**
		 * -------------------------------------------------------------------------------------
		 * >> okadminUI.selectStyled  <select> 美化
		 */
		selectStyled:function() {
			var config = function(){
				return {
					el: {
						wrap: "angel-selects",
						hidden: "angel-selects-hidden",
						styled: "angel-selects-styled",
						list: "angel-selects-list",
						item: "angel-selects-item",
					},
					open_class: 'js-open',
					selected_class: 'js-selected',
					hasSelected_class: 'js-hasSelected'
				}
			}
			return{

				init: function () {
					console.log('okadminUI.selectStyled START');
					if (!$.browser.mobile) {
						console.log('not mobile');
						this.styled();
					} else {
						$("select.form-control").each(function (index, el) {
							$(this).wrap('<div class="extra-wrapper"></div>');
						});
						$("select.form-control").change(function (event) {
							$(this).addClass('js-hasSelected')
						});
					}
				},


				styled: function () {
					var _ = config();
					$('select.form-control:not(.not-styled)').each(function () {
						var $this = $(this), numberOfOptions = $(this).children('option').length;
						var $thisParent = $(this).parents('.control-field');

						$this.removeClass('form-control').addClass(_.el.hidden);
						$this.wrap('<div class="'+_.el.wrap+' form-control"></div>');
						$this.after('<div class='+_.el.styled+'></div>');

						var $styledSelect = $this.next('div.'+_.el.styled);
						$styledSelect.text($this.children('option').eq(0).text());

						var selectedIndex = $this.find(":selected").index();
						var selectedText = $this.find(":selected").text();


						if ($this.hasClass('dir_up')) {
							var $list = $('<ul />', {
								'class': _.el.list+' lis-n dir_up cf'
							}).insertAfter($styledSelect);
						} else {
							var $list = $('<ul />', {
								'class': _.el.list+' lis-n cf'
							}).insertAfter($styledSelect);
						}
						for (var i = 0; i < numberOfOptions; i++) {
							$('<li />', {
								'class': _.el.item,
								'text': $this.children('option').eq(i).text(),
								'rel': $this.children('option').eq(i).val()
							}).appendTo($list);

							// if ($this.children('option').eq(i).) {}
						}

						var $listItems = $list.children('li');

						if ($this.hasClass('input__field--yoshiko')) {
							$styledSelect.click(function(event) {
								$(this).parents(".input--yoshiko").addClass('input--filled');
							});
							$listItems.click(function(event) {
								if ($(this).attr('rel') == '') {
									$(this).parents(".input--yoshiko").removeClass('input--filled');
								}
							});
						}

						if ($this.find('option').get(selectedIndex) != null) {
						    $this.find('option').get(selectedIndex).selected = true;

						    $listItems.eq(selectedIndex).addClass(_.selected_class);
						    $styledSelect.addClass(_.hasSelected_class).text(selectedText);
						}

						$styledSelect.click(function (e) {
							e.stopPropagation();
							$('.js-open div.'+_.el.styled).not(this).each(function () {
								$(this).parent().removeClass(_.open_class);
							});
							$(this).parent().toggleClass(_.open_class);
						});

						$listItems.click(function (e) {
							e.stopPropagation();
							$styledSelect.text($(this).text()).parent().removeClass(_.open_class);
							if ($(this).attr('rel') == '') {
								$styledSelect.removeClass(_.hasSelected_class);
							}
							else {
								$styledSelect.addClass(_.hasSelected_class);
							}

							$listItems.removeClass(_.selected_class);
							$(this).addClass(_.selected_class);

							$this.val($(this).attr('rel'));
							console.log($this.val());

							if ($thisParent.hasClass('error')) {
								$thisParent.removeClass('error').find('label.error').remove();
							}
						});

						$(document).click(function () {
							$styledSelect.parent().removeClass(_.open_class);
						});

					});
				},

				refresh: function(el){
					if (!$.browser.mobile) {
						console.log('not mobile');
						// this.styled();
					} else {
						$("select.form-control").each(function (index, el) {
							$(this).wrap('<div class="extra-wrapper"></div>');
						});
						$("select.form-control").change(function (event) {
							$(this).addClass('js-hasSelected')
						});
						return false;
					}
					console.log('okadminUI.selectStyled().refresh() START');
					var _ = config();
					var $this = $(el);
					var $thisParent = $this.parents('.control-field');
					var numberOfOptions = $this.children('option').length;
					var $old_list = $this.parent("."+_.el.wrap).find("."+_.el.list);
					var $old_styledSelect = $this.next('div.'+_.el.styled);

					$old_list.remove();
					$old_styledSelect.remove();

					var $styledSelect = $("<div/>", {
						class: _.el.styled
					}).insertAfter($this);
					$styledSelect.text($this.children('option').eq(0).text());

					var $list = $("<ul/>", {
						class: _.el.list + " lis-n cf"
					}).insertAfter($styledSelect)

					for (var i = 0; i < numberOfOptions; i++) {
						$('<li />', {
							'class': _.el.item,
							'text': $this.children('option').eq(i).text(),
							'rel': $this.children('option').eq(i).val()
						}).appendTo($list);
						// if ($this.children('option').eq(i).) {}
					}
					var $listItems = $list.children('li');

					var selectedIndex = $this.find(":selected").index();
					var selectedText = $this.find(":selected").text();
					if ($this.find('option').get(selectedIndex) != null) {
					    $this.find('option').get(selectedIndex).selected = true;

					    $listItems.eq(selectedIndex).addClass(_.selected_class);
					    $styledSelect.addClass(_.hasSelected_class).text(selectedText);
					}

					$styledSelect.click(function (e) {
						e.stopPropagation();
						$('.js-open div.'+_.el.styled).not(this).each(function () {
							$(this).parent().removeClass(_.open_class);
						});
						$(this).parent().toggleClass(_.open_class);
					});

					$listItems.click(function (e) {
						e.stopPropagation();
						$styledSelect.text($(this).text()).parent().removeClass(_.open_class);
						if ($(this).attr('rel') == '') {
							$styledSelect.removeClass(_.hasSelected_class);
						}
						else {
							$styledSelect.addClass(_.hasSelected_class);
						}

						$listItems.removeClass(_.selected_class);
						$(this).addClass(_.selected_class);

						$this.val($(this).attr('rel'));
						console.log($this.val());

						if ($thisParent.hasClass('error')) {
							$thisParent.removeClass('error').find('label.error').remove();
						}
					});

					$(document).click(function () {
						$styledSelect.parent().removeClass(_.open_class);
					});
				}
			}
		},

		/**
		 * -------------------------------------------------------------------------------------
		 * >> okadminUI.notice 通知彈出框
		 */
		notice: function(noticeCnt){
			var noticeEl = $('<div/>', {'class':'notice_wrap'});
			$("body").append(noticeEl);

			var cntEl = "";
			cntEl += "<span class=\"notice-icon\"><i class=\"fas fa-exclamation-circle\"></i></span>";
			cntEl += "<span class=\"notice-txt\">"+noticeCnt+"</span>";
			noticeEl.append(cntEl);

			TweenMax.fromTo(noticeEl, 1, {
				delay: 300,
				right: '-100%'
			},{
				right: '0',
				onComplete: function(){
					setTimeout(function(){
						TweenMax.fromTo(noticeEl, 3, {
							right: '0'
						},{
							right: '-100%',
							onComplete: function(){
								noticeEl.remove();
							}
						});
					}, 3000)
				}
			});
		},

		/**
		 * -------------------------------------------------------------------------------------
		 * >> okadminUI.tabs 頁籤
		 */
		tabs: function() {
			var $tabs = $(".tabs"),
				$tabsItem = $(".tabs_item:not(.link_page)"),
				$tabContainer = $(".tabContainer"),
				$tabContent = $(".tabContainer-content"),
				currentSelector = 'js-active',
				padding = 32;

			return {
				init: function(cur){
					var that = this;
					if (!$tabsItem.length) {
						return false;
					}

					$tabContent.each(function(index, el) {
						$(el).css({
							display: 'none',
							opacity: 0,
							zIndex: '-1'
						});
					});

					that.setHeight(cur);
					$tabsItem.eq(cur).addClass(currentSelector);
					$tabContent.eq(cur).css({
						display: 'block',
						opacity: '1',
						zIndex: 10
					}).addClass('js-show');

					// 如果有 hash
					// 就跳到該區塊
					if (location.hash != "") {
						var showCnt = location.hash;
						console.log(showCnt);

						$tabsItem.removeClass(currentSelector);
						$tabs.find('a').each(function(index, el) {
							if ($(el).attr('href') == showCnt) {
								$(this).parent().addClass(currentSelector);
							}
						});

						$tabContent.removeClass('js-show');
						$(showCnt).addClass('js-show');
						that.toggleContent($(".tabContainer-content:not(.js-show)"), $(showCnt))
					}

					$tabsItem.click(function(event) {
						event.preventDefault();
						console.log($(this).index());
						var showCnt = $(this).find("a").attr('href');
						location.hash = showCnt;

						$tabsItem.removeClass(currentSelector);
						$(this).addClass(currentSelector);

						$tabContent.removeClass('js-show');
						$(showCnt).addClass('js-show');


						that.toggleContent($(".tabContainer-content:not(.js-show)"), $(showCnt))
					});

				},

				setHeight: function(cur){
					var cntHeight = $tabContent.eq(cur).outerHeight();
					console.log(cntHeight);

					$tabContainer.height(cntHeight + padding);
				},

				toggleContent: function(hideCnt, showCnt){
					TweenMax.to(hideCnt, 0.1, {
						opacity: 0,
						onComplete: function(){
							TweenMax.to(hideCnt, 0, {
								css:{zIndex:'-1', display:'none'}
							})
							setTimeout(function(){
								TweenMax.to(showCnt, 0, {
									css: {
										display: 'block'
									},
									onComplete: function(){
										TweenMax.to(showCnt, 0.3, {css:{zIndex:'10', opacity: 1}});
										var cntHeight = this.target.outerHeight();
										$tabContainer.height(cntHeight + padding);
									}
								});
							}, 300);
						}
					});
				}
			}

		},

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
    	var blurElement = {a:3};//start the blur at 3 pixels

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
		 * >> learnDiaryUI.progressBar 進度條
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
		 * >> learnDiaryUI.diaryState 日誌狀態
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
		 * >> learnDiaryUI.modDropdown 下拉選單
		 */
		modDropdown: function() {
			$(".mod-dropdown-ctrl").each(function(index, el) {
				var defaltTxt = $(el).text();
				var dropdownType = $(el).parents(".mod-dropdown").data('type');
				$(el).click(function(event) {
					event.stopPropagation();
					if ($(".page_wrap").hasClass('js-show-adv_search')) {
						$(".page_wrap.js-show-adv_search").removeClass('js-show-adv_search');
						clarify_content(['.content_main ul']);
					}
					$('.js-open .mod-dropdown-ctrl').not(this).each(function () {
						$(this).parents(".mod-dropdown").removeClass("js-open");
					});
					$(this).parents(".mod-dropdown").toggleClass("js-open");
				});

				$(el).next(".mod-dropdown-list").find('li').click(function(event) {
					event.stopPropagation();

				});

				$(el).parents(".mod-dropdown").find("input").click(function(event) {
					console.log(dropdownType);

					if (dropdownType == "department") {
						_Department_Value = $(this).parents(".mod-dropdown").find("input:checked").map(function(){
							return $(this).val();
						}).get().join();

						if (_Department_Value != "") {
							$(this).parents(".mod-dropdown").find(".mod-dropdown-ctrl").text(_Department_Value);
						}
						else {
							$(this).parents(".mod-dropdown").find(".mod-dropdown-ctrl").text(defaltTxt);
						}
						return _Department_Value;
					}
					else {
						_Diary_State_Value = $(this).parents(".mod-dropdown").find("input:checked").map(function(){
							return $(this).val();
						}).get().join();

						if (_Diary_State_Value != "") {
							$(this).parents(".mod-dropdown").find(".mod-dropdown-ctrl").text(_Diary_State_Value);
						}
						else {
							$(this).parents(".mod-dropdown").find(".mod-dropdown-ctrl").text(defaltTxt);
						}
						return _Diary_State_Value;
					}


				});

				$(document).click(function () {
					$(".mod-dropdown-ctrl").parents(".mod-dropdown").removeClass("js-open");
				});
			});

		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> learnDiaryUI.advSearchCtrl 搜尋框開關
		 */
		advSearchCtrl: function(){

			isClick($(".btn-adv_search"), $(".page_wrap"), "js-show-adv_search");
			$(".mask_div").click(function(event) {
				$(".page_wrap.js-show-adv_search").removeClass('js-show-adv_search');
				clarify_content(['.content_main ul']);
			});

			$(".btn-adv_search").click(function(event) {
				if ($(".page_wrap").hasClass('js-show-adv_search')) {
					blur_content(['.content_main ul']);
				}
				else{
					clarify_content(['.content_main ul']);
				}
			});
		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> learnDiaryUI.reply
		 */
		reply: function(el, action){
			var thisId = $(el).parents(".diary_footer-section").attr('id');
			var $btn = $(el);

			if (action == "open") {
				$btn.hide();
				$("#"+ thisId).addClass('js-openReply');
			}
			else if (action == "cancel") {
				$("#"+ thisId).removeClass('js-openReply');
				$("#"+ thisId).find('textarea.form-control').val('');
				setTimeout(function(){

					$("#"+ thisId).find(".btn-reply").show();
				}, 300);
			}
			else if (action == "close") {
				$("#"+ thisId).removeClass('js-openReply');
			}
		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> learnDiaryUI.feedback  一些動作
		 */
		feedback: function(el, action, showId){
			var $thisParent = $(el).parents(".feedback_content");
			if ($thisParent.length) {
				var thisId = $thisParent.data('diaryid');
			}
			else {
				var thisId = showId;
			}
			var $btn = $(el);

			console.log(thisId);
			if (action == "write") {
				$btn.parent(".want_feedback").toggleClass('js-openFeedback');
				var tabsCntIndex = $btn.parents(".tabContainer-content").index();
				// console.log();
				setTimeout(function(){
					okadminUI.tabs().setHeight(tabsCntIndex);
				}, 300)
			}
			else if (action == "show_colleagues_diary") {
				$(".page_wrap").addClass('js-show_feedback_cnt')
				// $('.feedback_content').data('diaryid', thisId);
				$(".feedback_content").css('zIndex', '49');
				TweenMax.fromTo($('.feedback_content-wrap'), 0.5, {
					right: '-100%',
				}, {
					right: 0,
					onComplete: function(){
						setTimeout(function(){
							// TweenMax.to(showCnt, 0.3, {css:{zIndex:'10', opacity: 1}});
						}, 300);
					}
				});
				TweenMax.fromTo($('.feedback_content-bg'), 0.3, {
					opacity: 0
				}, {
					opacity: 1
				});
			}
			else if (action == "close_colleagues_diary") {
				var $wrap = $thisParent.children('.feedback_content-wrap');
				var $bg = $thisParent.children('.feedback_content-bg');
				$(".page_wrap").removeClass('js-show_feedback_cnt');

				TweenMax.fromTo($wrap, 0.5, {
					right: 0
				}, {
					right: '-100%',
					onComplete: function(){
						learnDiaryUI.clearFeedbackText($thisParent);
						$thisParent.css('zIndex', '-1');
					}
				});
				TweenMax.fromTo($bg, 0.3, {
					opacity: 1
				}, {
					opacity: 0
				});
			}
		},


		/**
		 * ---------------------------------------------------------------------------------
		 *  learnDiaryUI.feedbackWrapEl  整個回饋內容區塊
		 */
		feedbackWrapEl: function(el){

		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> learnDiaryUI.feedbackBlockEl  回饋區塊
		 */
		feedbackBlockEl: function(img, name, date, cnt){
			var el = "";
			el += "<section class=\"feedback_block\">";
			el += "  <div class=\"inner\">";
			el += "    <div class=\"inner-l\">";
			el += "      <div class=\"pic okuser-photo\"><img src=\""+img+"\" alt=\"\"></div>";
			el += "      <div class=\"name\">";
			el += "        <div class=\"okuser-name\">"+name+"</div>";
			el += "      </div>";
			el += "    </div>";
			el += "    <div class=\"inner-r\">";
			el += "      <div class=\"feedback-date\">"+date+"</div>";
			el += "      <p class=\"feedback-cnt\">"+cnt+"</p>";
			el += "    </div>";
			el += "  </div>";
			el += "</section>";

			return el;
		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> learnDiaryUI.feedback  一些動作
		 */
		formRemove: function(el){
			var removeEl = el;
			var tabsCntIndex = $(el).parents(".tabContainer-content").index();
			TweenMax.to(removeEl, 0.3, {
				css: {
					height: '0',
					'margin-bottom': '0',
					'opacity': '0',
					'overflow': 'hidden'
				},
				ease: Power1.easeInOut,
				onComplete: function(){
					okadminUI.tabs().setHeight(tabsCntIndex);
					setTimeout(function(){
						removeEl.remove();
					}, 1000)
				}
			});
		},

		/**
		 * ---------------------------------------------------------------------------------
		 * >> learnDiaryUI.clearFeedbackText  收合後清空文字
		 */
		clearFeedbackText: function(el){
			var dataid, $colleagues_diary, upper, $feedback_block;

			dataid = $(el).data('diaryid');
			$colleagues_diary = {
				photo: $(el).find('.okuser-photo'),
				name: $(el).find('.okuser-name'),
				department: $(el).find('.okuser-department'),
				date: $(el).find('.diary-date'),
				category: $(el).find('.diary-category'),
				txt: $(el).find('.diary-txt')
			};
			$upper = {
				cnt: $(el).find('#upperCnt')
			}
			$feedback_block = $(".feedback_block");

			$colleagues_diary.photo.text('');
			$colleagues_diary.name.text('');
			$colleagues_diary.department.text('');
			$colleagues_diary.date.text('');
			$colleagues_diary.category.text('');
			$colleagues_diary.txt.text('');
			$upper.cnt.val("");

			$feedback_block.each(function(index, el) {
				$(el).find('.okuser-photo img').attr('src', '');
				$(el).find('.okuser-name').text('');
				$(el).find('.feedback-date').text('');
				$(el).find('.feedback-cnt').text('');
			});

			$(el).empty();

		}


	}


}(window,jQuery));


function resizeScreen(){
	var viewPort = new viewPortWidthHeight();
	var headerH, footerH, setHeight;
	headerH = $(".page_header").outerHeight();
	footerH = 60;
	setHeight = viewPort.height - headerH;

	let $menuEl = $(".page_menu");
	let $userInfoHd = $(".user_info-hd");
	let $userInfoBd = $(".user_info-bd");

	$(".content_wrapper").css({
		'min-height': setHeight
	});


	if (mq.matches) {
		console.log('less than 576');
	    $("#m_nav").html($menuEl);
	    $("<div/>", {class:"m_nav-bg"}).insertBefore($menuEl);

	    okadminUI.mobileMenu().init();


	} else {
	    console.log('more than 576');
		$menuEl.insertBefore($(".page_sidebar"))
	}

}


$(window).resize(function (event) {
	resizeScreen();

});


/**
 * ---------------------------------------------------------------------------------
 * > doc ready
 */
$(function() {
	resizeScreen();
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
			var Today = new Date();
			var TodayStr = Today.getFullYear()+ "-" + (Today.getMonth()+1) + "-" + Today.getDate();
			console.log(TodayStr);
			if (e != TodayStr) {
				console.log('qw');
				$("button.today").addClass('js-show');
			}
			else {
				$("button.today").removeClass('js-show');
			}
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
		beforeShow: function(e, o) {
			console.log(o);
		    setTimeout(function(){

		        $(o.dpDiv).css({'z-index': 10, 'min-width': '250px'}).position({
					my: "bottom",
					at: "bottom",
					of: "#"+o.id
				});
		    }, 0);
		},
		onSelect: function(e, obj){
			// console.log(e);
			// console.log(obj);
			$("#"+obj.id).parent().addClass('input--filled')
		}
	});



});


