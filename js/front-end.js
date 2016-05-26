var orderCount = 0;
var editBtnCount = 0;
var backBtnCount = 0;
var addressCount = 0;
var arrowCount = 0;
var formCount = 0;
// new increments
var pickuplocationCount = 0;
var instructionsCount = 0;
var listinginputCount = 0;
// new increments

var enterLocationCount = 0;
var addPinCount = 0;
var locationsListCount = 0;

// new increments
var extrafeeCount = 0;
var textnumberCount = 0;
var inputsignCount = 0;
var signsCount = 0;
// new increments

var datepickerCount = 0;

// new increments
var dateCount = 0;
// new increments

var starttimeCount = 0;

// new increment
var starttimeInputCount = 0;
// new increment

var endtimeCount = 0;

// new increment
var endtimeInputCount = 0;
var specialInstrCount = 0;
// new increment

var summaryCount = 0;

// new increment
var locationsInstr = 0;
var orderAddressCount = 0;
var signLocationsCount = 0;
var customPlacementCount = 0;
var dateTimeCount = 0;
var specialCount = 0;
// new increment

var loginPage = '#login-page';
var listing = '#listing';
var personalInfo = '#personal-page';
var listingPage = '#listing-page';
var myListings = '#my-listings';
var myAccount = '#my-account';
var back = '#back';
var loginContainer = '#login-container';
var signupContainer = '#sign-up-container';
var listingContainer = '#listing-container';
var personalContainer = "#personal-container";
var navContainer = '#nav-container';
var hasListItem = false;
var dpr = window.devicePixelRatio;
var width = window.screen.availWidth;
var height = window.screen.availHeight;
function navigate(id) {
  console.log(id);
  if (id == loginPage && !($(loginContainer).is(':visible'))) {
    $(signupContainer).hide( "slide", { direction: "left"  }, 1000 );
    $(loginContainer).show( "slide", { direction: "right"  }, 2000 );
      
  } else if (id == back && !($(signupContainer).is(':visible'))) {
    $(loginContainer).hide( "slide", { direction: "right"  }, 1000, function(){
      $(signupContainer).show( "slide", { direction: "left"  }, 2000 );
    });
  } else if (id == listing && !($(listingContainer).is(':visible'))) {
    $(loginContainer).hide( "slide", { direction: "left"  }, 1000, function(){
      $(navContainer).fadeIn();
      $(listingContainer).fadeIn("slow");
    });
  } else if (id == personalInfo && !($(personalContainer).is(':visible'))) {
    $(myListings).fadeOut("slow");
    $(listingContainer).fadeOut("slow", function(){
      $(myAccount).fadeIn("slow");
      $(personalContainer).fadeIn("slow");
    }); 
  } else if (id == listingPage && !($(listingContainer).is(':visible'))) {
    $(myAccount).fadeOut("slow");
    $(personalContainer).fadeOut("slow", function(){
      $(listingContainer).fadeIn("slow");
      $(myListings).fadeIn("slow");
    });
  }
}

function addList(id) {
  var div = document.getElementById('parent-container');
  var newDiv = document.createElement('div');
  starttimeCount++;
  endtimeCount++;
  // newDiv.innerHTML = '<div id="order'+ orderCount +'" class="text-center"><button id="back-btn'+ backBtnCount +'" type="button" class="back-arrow custom-btn btn btn-secondary pull-left"><span class="fa fa-arrow-left"></span></button>Order Summary<button id="edit-btn'+ editBtnCount +'" type="button" class="edit custom-btn btn btn-secondary pull-right">Edit</button></div><div id="address'+ addressCount +'" class="click-div">Add a New Listing<span id="arrow'+ arrowCount +'" class="fa fa-arrow-right pull-right"></span></div><div id="form-container'+ formCount +'" class="hide-this"><hr><form class="form-horizontal" method="post"><div class="form-group"><div class="col-xs-12 col-s-2 col-md-12 col-md-pull-4 col-s-offset-4 col-md-offset-4"><p>Sign Pick Up Location</p><input name="address" type="text" placeholder="Enter the pick-up destination" class="form-control"></div></div><p>Pick Up Instructions</p><textarea class="form-control pick-up" rows="3" placeholder="I will leave the signs on the side of my house next to the planter box"></textarea><hr><div class="form-group"><div class="col-xs-12 col-s-2 col-md-12 col-md-pull-4 col-s-offset-4 col-md-offset-4"><p>Listing Address</p><input name="address" type="text" placeholder="Enter a new address" class="form-control"></div></div><div class="list-container"><img style="width: 620px;" src="images/Map.png"></div><div class="list-container"><span><img src="images/alternitive_pin.png"> Sign Locations</span><p class="sign-locations">Drop a pin or type the cross streets below. <br> Drag and drop to your desired location.</p></div><div class="form-group"><div class="col-xs-8 col-s-4 col-md-7 col-md-pull-4 col-s-offset-4 col-md-offset-4 drop-input"><div class="input-group"><input id="enter-location'+ enterLocationCount +'" name="text" type="text" placeholder="Enter your locations" class="form-control"><span class="input-group-btn"><button id="add-pin'+ addPinCount +'" type="button" class="add-btn custom-btn custom-btn-color btn btn-secondary add-pin-location">+ Add Pin</button></span></div><ol id="locations-list'+ locationsListCount +'" class="locations"></ol></div></div><hr><p>Want us to place your signs for you?</p><div class="checkbox checkbox-info checkbox-circle"><input id="checkbox8" type="checkbox"><label for="checkbox8">Yes, choose my placement locations for me. (extra fee foo)</label></div><br><p>Open House Date</p><div class="form-group"><div class="col-xs-8 col-s-4 col-md-4 col-md-pull-4 col-s-offset-4 col-md-offset-4"><div class="input-group date" id="datepicker'+ datepickerCount +'"><input type="text" class="form-control" /><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></div></div><p>Open House Start Time</p><div class="form-group"><div class="col-xs-8 col-s-4 col-md-4 col-md-pull-4 col-s-offset-4 col-md-offset-4"><div class="input-group start" id="starttime'+ starttimeCount +'"><input type="text" class="form-control" /><span class="input-group-addon"><span class="glyphicon glyphicon-time" id="shit"></span></span></div></div></div><p>Open House End Time</p><div class="form-group"><div class="col-xs-8 col-s-4 col-md-4 col-md-pull-4 col-s-offset-4 col-md-offset-4"><div class="input-group end" id="endtime'+ endtimeCount +'"><input type="text" class="form-control" /><span class="input-group-addon"><span class="glyphicon glyphicon-time"></span></span></div></div></div><hr><p>Special Instructions</p><textarea class="form-control" rows="3" placeholder="Please make sure you place one sign at the top of the driveway and another directly in fron tof the house"></textarea><br><div class="form-group"><div class="col-md-12 text-center"><button type="button" class="custom-btn-primary review-submit">Review and Submit</button></div></div><div class="text-center"><p class="step1">Step 1 of 2</p></div></form></div><div id="summary-container'+ summaryCount +'" class="hide-this"><hr><p>Listing Address</p><ul class="listing-address"><li>1752 Manzanita Drive</li><li>Oakland Ca, 94611</li></ul><hr><p>Sign Locations</p><ol class="locations"><li>Mountain Blvd. and Snake Rd.</li><li>Oakland Ave. and Highland Dr</li><li>Piedmont Ave. and Rockridge Ct.</li><li>Rockridge Ct. and Manzanita Dr.</li><li>570 Harbor Rd.</li><li>Hester Fab Lane and Montana Way</li><li>Mountain Blvd. and Snake Rd.</li><li>1752 Manzanita Drive</li></ol><hr><p>Would you like the address labels to be placed on your signs?</p><ul class="placing"><li>1752 Manzanita Drive</li><li>Oakland Ca, 94611</li></ul><hr><p>Special Instructions?</p><p class="special-instr">Please make sure you place one sign at the top of the driveway and another <br> directly in fron tof the house</p><div class="form-group"><div class="col-md-12 text-center"><button type="submit" class="custom-btn-primary">Submit Order</button></div></div><br><div class="text-center"><p class="step2">Step 2 of 2</p></div></div>';
  newDiv.innerHTML = '<div id="order'+ orderCount +'" class="text-center"><button id="back-btn'+ backBtnCount +'" type="button" class="back-arrow custom-btn btn btn-secondary pull-left"><span class="fa fa-arrow-left"></span></button>Order Summary<button id="edit-btn'+ editBtnCount +'" type="button" class="edit custom-btn btn btn-secondary pull-right">Edit</button></div><div id="address'+ addressCount +'" class="click-div">1752 Manzanita Drive, Oakland<span id="arrow'+ arrowCount +'" class="fa fa-arrow-right pull-right"></span></div><div id="form-container'+ formCount +'" class="hide-this"><hr><form class="form-horizontal" method="post"><div class="form-group"><div class="col-xs-12 col-s-2 col-md-12 col-md-pull-4 col-s-offset-4 col-md-offset-4"><p>Sign Pick Up Location</p><input id="pickup-location'+ pickuplocationCount +'" class="form-control pickup-value check-this" name="pickup-location" type="text" placeholder="Enter the pick-up destination" ></div></div><p>Pick Up Instructions</p><textarea id="instructions'+ instructionsCount +'" class="form-control pick-up-instructions" name="instructions" type="text" rows="3" placeholder="Example: I will leave the signs on the side of my house next to the planter box"></textarea><hr><div class="form-group"><div class="col-xs-12 col-s-2 col-md-12 col-md-pull-4 col-s-offset-4 col-md-offset-4"><p>Listing Address</p><input id="listing-input'+ listinginputCount +'" class="form-control listing-value check-this" name="address" type="text" placeholder="Enter a new address"></div></div><div class="list-container"><img style="width: 620px;" src="images/Map.png"></div><div class="list-container"><span><img src="images/alternitive_pin.png"> Sign Locations</span><p class="sign-locations">Drop a pin or type the cross streets below.</p></div><div class="form-group"><div class="col-xs-8 col-s-4 col-md-7 col-md-pull-4 col-s-offset-4 col-md-offset-4 drop-input"><div class="input-group"><input id="enter-location'+ enterLocationCount +'" class="form-control check-pins" name="text" type="text" placeholder="Enter your locations"><span class="input-group-btn"><button id="add-pin'+ addPinCount +'" type="button" class="custom-btn custom-btn-color btn btn-secondary add-pin-location">+ Add Pin</button></span></div><ol id="locations-list'+ locationsListCount +'" class="locations locations-value"></ol></div></div><hr><p>Would you rather have us choose your sign locations?</p><div class="checkbox checkbox-info checkbox-circle"><input id="extra-fee'+ extrafeeCount +'" class="custom-placement" type="checkbox" name="signplacement"> <label for="extra-fee'+ extrafeeCount +'">Yes, choose the locations for me. (Extra fee)</label></div><p id="text-number'+ textnumberCount +'" class="text-sign"><br>Specify the number of signs</p><div id="input-signs'+ inputsignCount +'" class="form-group number-signs"><div class="col-xs-3 col-s-3 col-md-3 col-md-pull-4 col-s-offset-4 col-md-offset-4"><div class="input-group"><input id="signs'+ signsCount +'" class="form-control number-value" type="number" min="1"  name="sign" /><span class="input-group-addon"><span class="glyphicon glyphicon-hand-left"></span></span></div></div></div><hr><p>Open House Date</p><div class="form-group"><div class="col-xs-8 col-s-4 col-md-4 col-md-pull-4 col-s-offset-4 col-md-offset-4"><div id="datepicker'+ datepickerCount +'" class="input-group date"><input id="date'+ dateCount +'" class="form-control date-value check-this" type="text" name="date" /><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></div></div><p>Open House Time</p><div class="form-group"><div class="row"><div class="col-xs-4 col-s-4 col-md-4 col-md-offset-1"><div id="starttime'+ starttimeCount +'" class="input-group start"><input id="starttime-input'+ starttimeInputCount +'" class="form-control starttime-value check-this" type="text" name="starttime" /><span class="input-group-addon"><span class="glyphicon glyphicon-time"></span></span></div></div><div class="col-xs-1 col-s-1 col-md-1"><p>to</p></div><div class="col-xs-4 col-s-4 col-md-4"><div id="endtime'+ endtimeCount +'" class="input-group end"><input id="endtime-input'+ endtimeInputCount +'" class="form-control endtime-value check-this" type="text" name="endtime" /><span class="input-group-addon"><span class="glyphicon glyphicon-time"></span></span></div></div></div></div><hr><p>Special Instructions</p><textarea id="special-instructions'+ specialInstrCount +'" class="form-control special-value" rows="3" placeholder="Example: Please make sure you place one sign at the top of the driveway and another directly in front of the house"></textarea><br><div class="form-group"><div class="col-md-12 text-center"><div class="alert alert-danger fade in"><strong>Warning!</strong> Please make sure to fill out the form completely.</div><button type="button" class="custom-btn-primary review-submit">Review and Submit</button></div></div><div class="text-center"><p class="step1">Step 1 of 2</p></div></form></div><div id="summary-container'+ summaryCount +'" class="hide-this"><hr><p>Sign Pick Up Location and Instructions</p><ul id="location-instructions'+ locationsInstr +'" class="placing pickup-and-instr"></ul><hr><p>Listing Address</p><ul id="order-address'+ orderAddressCount +'" class="listing-address"></ul><hr><p>Sign Locations</p><ol id="sign-locations'+ signLocationsCount +'" class="locations order-locations"></ol><hr><p>Would you like us to place your signs for you?</p><ul id="custom-placement'+ customPlacementCount +'" class="placing paid-placement"></ul><hr><p>Open House Date and Time</p><ul id="date-and-time'+ dateTimeCount +'" class="placing order-datetime"></ul><hr><p>Special Instructions?</p><div id="special'+ specialCount +'" class="order-specialInstr"></div><hr><div class="form-group"><div class="col-md-12 text-center"><button type="submit" class="custom-btn-primary">Submit Order</button></div></div><br><div class="text-center"><p class="step2">Step 2 of 2</p></div></div>';
  div.appendChild(newDiv);
  
  $("#datepicker" + datepickerCount).datetimepicker({
    format: "MM/DD/YYYY",
    minDate: 'now'
  });
  $('#starttime' + starttimeCount).datetimepicker({
    format: 'LT'
  });
  $('#endtime' + endtimeCount).datetimepicker({
    format: 'LT',
    useCurrent: false
  });
  $(function() {
    $('#starttime' + starttimeCount).on("dp.change", function (e) {
    $('#endtime' + endtimeCount).data("DateTimePicker").minDate(e.date);
  });
  $('#endtime' + endtimeCount).on("dp.change", function(e) {
    $('#starttime' + starttimeCount).data("DateTimePicker").maxDate(e.date);
  });
  })
  $("#form-container" + formCount).hide();
  $("#summary-container" + summaryCount).hide();
  $("#order" + orderCount).hide();
  $("#arrow" + arrowCount).delay(1100).queue(function(){
    $(this).toggleClass("fa-arrow-down fa-arrow-right");
    $(this).dequeue();
  });
  $("#form-container" + formCount).delay(1000).slideToggle("slow");
  orderCount++;
  editBtnCount++;
  backBtnCount++;
  addressCount++;
  arrowCount++;
  formCount++;
  pickuplocationCount++;
  instructionsCount++;
  listinginputCount++;
  enterLocationCount++;
  addPinCount++;
  locationsListCount++;
  extrafeeCount++;
  textnumberCount++;
  inputsignCount++;
  signsCount++;
  datepickerCount++;
  dateCount++;
  starttimeInputCount++;
  endtimeInputCount++;
  specialInstrCount++;
  summaryCount++;
  locationsInstr++;
  orderAddressCount++;
  signLocationsCount++;
  customPlacementCount++;
  dateTimeCount++;
  specialCount++;

  setTimeout(function() {
  newDiv.className = newDiv.className + " show";
  }, 10);
  $(document).on('blur', "input.check-this", function(e) {
    e.stopPropagation();
    e.preventDefault();
      if( !$(this).val() ) {
          $(this).popover({
              title: 'Warning! Cannot be empty!',
              placement: 'top'
          }).popover('show');
          $(this).addClass('warning');
      }
      $(this).on('focus', function(){
        $(this).popover('destroy');
        $(this).removeClass('warning').hasClass('warning');
      });
  });
  $(document).on('blur', "input.check-pins", function(e) {
    e.stopPropagation();
    e.preventDefault();
      if( !$(this).val() ) {
          $(this).popover({
              title: 'Warning! You have to add at least one location!',
              placement: 'top'
          }).popover('show');
          $(this).addClass('warning');
      }
      $(this).on('focus', function(){
        $(this).popover('destroy');
        $(this).removeClass('warning').hasClass('warning');
      });
  });
  $(document).on('blur', "textarea.pick-up", function(e) {
    e.stopPropagation();
    e.preventDefault();
      if( !$(this).val() ) {
          $(this).popover({
              title: 'Warning! Cannot be empty!',
              placement: 'top'
          }).popover('show');
          $(this).addClass('warning');
      }
      $(this).on('focus', function(){
        $(this).popover('destroy');
        $(this).removeClass('warning').hasClass('warning');
      });
  });
  
} 
$(document).ready(function() {
  $(".fa-arrow-down").hide();
  $('.hide-this').hide();
  $("#order").hide();
  $('#form-container').hide();
  $('#summary-container').hide();
  $('#listing-container').hide();
});

function getFirstValues(formId, summaryId) {
  var pickupId = $('#' + formId + ' .pickup-value').attr('id');
  var pickupValue = $('#' + pickupId).val();
  var instructionsId = $('#' + formId + ' .pick-up-instructions').attr('id');
  var instructionsValue = $('#' + instructionsId).val();
  var pickupAndInstr = $('#' + summaryId + " .pickup-and-instr").attr('id');
  var newLi = "<li>Locations: " + pickupValue + "</li>" + "<li>Instructions: " + instructionsValue + "</li>";
  $('#' + pickupAndInstr).append(newLi);
}
function getListingValue(formId, summaryId) {
  var listingClass = $('#' + formId + " .listing-value").attr('id');
  var listingValue = $('#' + listingClass).val();
  var listingId = $('#' + summaryId + " .listing-address").attr('id');
  var newLi = "<li>Address: " + listingValue + "</li>";
  $('#' + listingId).append(newLi);
}
function getLocationsValue(formId, summaryId) {
  var locationClass = $('#' + formId + " .locations-value").attr('id');
  var locationValue = $('#' + locationClass).html();
  var orderLocations = $('#' + summaryId + " .order-locations").attr('id');
  $('#' + orderLocations).append(locationValue);
}
function getDateTimeValue(formId, summaryId) {
  var dateClass = $('#' + formId + " .date-value").attr('id');
  var dateValue = $('#' + dateClass).val();
  var starttimeClass = $('#' + formId + " .starttime-value").attr('id');
  var starttimeValue = $('#' + starttimeClass).val();
  var endtimeClass = $('#' + formId + " .endtime-value").attr('id');
  var endtimeValue = $('#' + endtimeClass).val();
  var datetimeOrder = $('#' + summaryId + " .order-datetime").attr('id');
  var newLi = "<li>Date: " + dateValue + "</li><li>Time: " + starttimeValue + " to " + endtimeValue + "</li>"
  $('#' + datetimeOrder).append(newLi);
}
function getSpecialValue(formId, summaryId) {
  var specialClass = $('#' + formId + " .special-value").attr('id');
  var specialValue = $('#' + specialClass).val();
  var specialInstr = $('#' + summaryId + " .order-specialInstr").attr('id');
  var newP = "<p class='special-instr'>" + specialValue + "</p>";
  $('#' + specialInstr).append(newP);
}
function checkbox(formId, summaryId) {
  var checkboxClass = $('#' + formId + " .custom-placement").attr('id');
  var paidPlacement = $('#' + summaryId + " .paid-placement").attr('id');
  var signClass = $('#' + formId + " .number-value").attr('id');
  var signValue = $('#' + signClass).val();
  var newLi = "<li>Yes</li>";
  if ($('#' + checkboxClass + ":checkbox:checked").length > 0) {
    $('#' + paidPlacement).append(newLi + "<li>Total signs: " + signValue + "</li>");  
  } else {
    newLi  = "<li>No</li>";
    $('#' + paidPlacement).append(newLi);
  }
}
$(document).on('change', 'input.custom-placement', function(e){
    e.preventDefault();
    var textSign = $(this).parent().next().attr('id');
    var inputSign = $('#' + textSign).next().attr('id');
    var signId = $('#' + inputSign).children().children().children().attr('id');
    if (this.checked) {
      $('#' + signId).addClass("check-this").hasClass("check-this");
      $('#' + textSign).show();
      $('#' + inputSign).show();
    } else {
      $('#' + signId).removeClass("check-this").hasClass("check-this");
      $('#' + textSign).hide();
      $('#' + inputSign).hide();
      $(this).popover('destroy');
      $(this).removeClass('warning').hasClass('warning');
    }
  });

$(document).on('click', '.form-group .text-center .review-submit', function (e) {
  e.preventDefault();
  var listingString = $(this).parent().parent().parent().parent().prev().attr('id');
  var orderString = $(this).parent().parent().parent().parent().prev().prev().attr('id');
  var backBtn = $("#" + orderString).children().attr('id');
  var formId = $("#" + listingString).next().attr('id');
  var summaryId = $('#' + formId).next().attr('id');
  var checkIfEmpty = true;
  var listID = $('#' + formId + " .locations-value").attr('id');
  var hasList = $('#' + listID).hasClass("appended");
  $('#' + formId + "input.check-this").each(function () {
    if($.trim($(this).val()) === "") {
      checkIfEmpty = false;
    } 
  });

  if (checkIfEmpty && hasList) {
    $('#' + listID).children().children().hide();
    checkbox(formId, summaryId);
    getFirstValues(formId, summaryId);
    getListingValue(formId, summaryId);
    getLocationsValue(formId, summaryId);
    getDateTimeValue(formId, summaryId);
    getSpecialValue(formId, summaryId);
    

    $("#" + listingString).fadeOut('slow');
    $("#" + orderString).fadeIn('slow');
    $('#' + formId).fadeOut('slow');
    $('#' + summaryId).fadeIn('slow');
    $('#' + backBtn).fadeIn('slow');
  } else {
    $(this).prev().show();
  }
});
$(document).on('click', '.back-arrow', function (e) {
  var getId = $(this).attr('id');
  var listingString = $('#' + getId).parent().next().attr("id");
  var orderString = $('#' + listingString).prev().attr("id");
  var formId = $('#' + listingString).next().attr("id");
  var summaryId = $('#' + formId).next().attr("id");
  $("#" + orderString).fadeOut('slow');
  $("#" + listingString).fadeIn('slow');
  $('#' + summaryId).fadeOut('slow');
  $('#' + formId).fadeIn('slow');

  $('#' + $(".pickup-and-instr").attr('id')).empty();
  $('#' + $(".listing-address").attr('id')).empty();
  $('#' + $(".order-locations").attr('id')).empty();
  $('#' + $(".paid-placement").attr('id')).empty();
  $('#' + $(".order-datetime").attr('id')).empty();
  $('#' + $(".order-specialInstr").attr('id')).empty();
});

$(document).on('click', '.edit', function (e) {
  var getId = $(this).attr('id');
  var listingString = $('#' + getId).parent().next().attr("id");
  var orderString = $('#' + listingString).prev().attr("id");
  var formId = $('#' + listingString).next().attr("id");
  var summaryId = $('#' + formId).next().attr("id");

  $("#" + orderString).fadeOut('slow');
  $("#" + listingString).fadeIn('slow');
  $('#' + summaryId).fadeOut('slow');
  $('#' + formId).fadeIn('slow');

  $('#' + $(".pickup-and-instr").attr('id')).empty();
  $('#' + $(".listing-address").attr('id')).empty();
  $('#' + $(".order-locations").attr('id')).empty();
  $('#' + $(".paid-placement").attr('id')).empty();
  $('#' + $(".order-datetime").attr('id')).empty();
  $('#' + $(".order-specialInstr").attr('id')).empty();
});
$(document).on('blur', "input.check-this", function(e) {
    e.stopPropagation();
    e.preventDefault();
      if( !$(this).val() ) {
          $(this).popover({
              title: 'Warning! Cannot be empty!',
              placement: 'top'
          }).popover('show');
          $(this).addClass('warning');
      }
      $(this).on('focus', function(){
        $(this).popover('destroy');
        $(this).removeClass('warning').hasClass('warning');
      });
  });
$(document).on('blur', "input.check-pins", function(e) {
    e.stopPropagation();
    e.preventDefault();
      if( !$(this).val() ) {
          $(this).popover({
              title: 'Warning! You have to add at least one location!',
              placement: 'top'
          }).popover('show');
          $(this).addClass('warning');
      }
      $(this).on('focus', function(){
        $(this).popover('destroy');
        $(this).removeClass('warning').hasClass('warning');
      });
  });
$(document).on('blur', "textarea.pick-up-instructions", function(e) {
    e.stopPropagation();
    e.preventDefault();
      if( !$(this).val() ) {
          $(this).popover({
              title: 'Warning! Cannot be empty!',             
              placement: 'top'
          }).popover('show');
          $(this).addClass('warning');
      }
      $(this).on('focus', function(){
        $(this).popover('destroy');
        $(this).removeClass('warning').hasClass('warning');
      });
  });

$(document).on('click', '.form-group .drop-input .input-group-btn .add-pin-location', function (e) {
  e.stopPropagation();
  e.preventDefault();
  var getId = $(this).attr('id');
  var inputId = $('#' + getId).parent().prev();
  var list = $('#' + getId).parent().parent().next().attr("id");
  var input = $('#' + getId).parent().prev().attr("id");
  var value = $('#' + input).val();
  var li = '<li>'+ value +'<a class="close rounded black remove-location"></a></li>';
  $('#' + list).append(li);
  $('#' + list).addClass("appended");
  $(document).on('click', '.remove-location', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).parent().remove(); 
  });
});

$(document).on('touchstart mousedown', '.click-div', function(e) {
  e.preventDefault();
  $(this).next().slideToggle("slow");
  $(this).children().toggleClass("fa-arrow-down fa-arrow-right");
});

$(function () {
  $('#datepicker').datetimepicker({
    minDate: 'now',
    format: "MM/DD/YYYY"
  });
});
$(function () {
    $('#starttime').datetimepicker({
        format: 'LT'
    });
    $('#endtime').datetimepicker({
        format: 'LT',
        useCurrent: false
    });
    $('#starttime').on("dp.change", function (e) {
      $('#endtime').data("DateTimePicker").minDate(e.date);
    });
    $('#endtime').on("dp.change", function(e) {
      $("#starttime").data("DateTimePicker").maxDate(e.date);
    });
    $('#pick-up-time').datetimepicker({
    format: 'LT'
  })
});
$('#bs-example-navbar-collapse-2')
.on('show.bs.collapse', function (e) {
    $('body').addClass('menu-slider');
})
.on('shown.bs.collapse', function (e) {
    $('body').addClass('in');
    $('.navbar-toggle').animate({"right": "30%"}, 280);
})
.on('hide.bs.collapse', function (e) {
    $('body').removeClass('menu-slider');
    $('.navbar-toggle').animate({"right": "0%"}, 110);
})
.on('hidden.bs.collapse', function (e) {
    $('body').removeClass('in');

});