//Show the label search input
$(".placeholder-custom").click(function(){
	$(this).hide();
	$(this).prev().focus();
	
});
//Hide the label search input
$(document).click(function(event){
	if($(event.target).find('.placeholder-custom').length){
		$(".placeholder-custom").each(function(){
			var searchValue = $(this).prev().val().length;
			if($(this).css('display')=='none' && searchValue == 0){
				$(this).show();
			}
		});
	}
});
//Show and hide accounts description
$('.panel-collapse').on({
	'show.bs.collapse':function (){
		var panelHeading = $(this).prev('.panel-heading'); 
		panelHeading.css({
			'background':'#f8fbfd',
			'border-bottom':'none'
		});
		panelHeading.find('.glyphicon-menu-down').
		removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
		panelHeading.find('.amount-title').hide();
	},
	'hide.bs.collapse':function (){
		var panelHeading = $(this).prev('.panel-heading');
		panelHeading.css({
			'background':'#fff',
			'border-bottom':'1px solid #e9eced'
		}); 
		panelHeading.find('.glyphicon-menu-up').
		removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
		panelHeading.find('.amount-title').show();
	}
});
//Show and hide account detail
$(".account-number").click(function(){
	var accountNumber = $(this).closest("thead");
	if (!accountNumber.hasClass('account-selected')){
		accountNumber.addClass('account-selected');
		accountNumber.next('tbody').show();
		accountNumber.closest('.table-responsive').addClass('highlight-description');
	}else{
		accountNumber.removeClass('account-selected');
		accountNumber.next('tbody').hide();
		accountNumber.closest('.table-responsive').removeClass('highlight-description');
	}
});
//Display account options correctly
$('.table-responsive').on('show.bs.dropdown', function () {
     $('.table-responsive').css( "overflow", "inherit" );
});
$('.table-responsive').on('hide.bs.dropdown', function () {
     $('.table-responsive').css( "overflow", "auto" );
});

//Order accounts by the most frequent
$('.frequent-mark').click(function(){
	//Elements created by the clicked item
	var clostestAccountItem = $(this).closest('.account-item');
	var clostestPanelBody = clostestAccountItem.closest('.panel-body');
	//Elements created by the last element with account-number-bookmark class
	var lastBookmark = clostestPanelBody.find('.account-number-bookmark:last');
	var nextRowBookmark = lastBookmark.closest('.account-item');
	clostestAccountItem.find('th:first-child').prepend(
		$('<span>',{
			'class':'glyphicon glyphicon-bookmark account-number-bookmark',
			'aria-hidden':'true'	
		})
	);
	//If there are accounts marked
	if(lastBookmark.length > 0){
		nextRowBookmark.after(clostestAccountItem);
	}else{
		clostestPanelBody.find('.account-title-container').
		after(clostestAccountItem);
	}
});
//Change the button text for the li element clicked
$('.select-element>ul li').click(function(){
	var option = $(this);
	var optionText = option.text();
	option.closest('ul').prev('button').find('label').text(optionText);
});
//Change glyphicon down or up
$('.select-element').on({
	'show.bs.dropdown': function () {
		$(this).find('span').removeClass('glyphicon-menu-down')
  		.addClass('glyphicon-menu-up');
	},
	'hide.bs.dropdown': function () {
		$(this).find('span').removeClass('glyphicon-menu-up')
  		.addClass('glyphicon-menu-down');
	},
});
//Change the element selected
$('.select-search>ul li').click(function(){
	var option = $(this);
	var optionSelected = option.find('label');
	var optionButton = option.closest('ul').siblings('button');
	optionButton.find('label').remove('.select-search-item');
	optionSelected.clone().prependTo(optionButton);
	option.siblings().css('background','');
	option.css('background','#EEF0F3');
});
//Change glyphicon down or up
$('.select-search').on({
	'show.bs.dropdown': function () {
		$(this).find('span').removeClass('glyphicon-menu-down')
  		.addClass('glyphicon-menu-up');
  		$(this).find('.select-search-input').show();
  		$(this).find('>button').addClass('select-search-button');
	},
	'hide.bs.dropdown': function () {
		$(this).find('span').removeClass('glyphicon-menu-up')
  		.addClass('glyphicon-menu-down');
  		$(this).find('.select-search-input').hide();
  		$(this).find('>button').removeClass('select-search-button');
	},
});
//Add style to the period
$('.state-period input').click(function(){
	var statePeriod = $(this).closest('.state-period');
	statePeriod.siblings().removeClass('state-period-selected');
	statePeriod.addClass('state-period-selected');
});
//Moment picker init
var app = angular.module('myApp', ['moment-picker']);
app.controller('controller',function(){
	this.input = '';
});