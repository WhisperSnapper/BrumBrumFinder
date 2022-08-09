var flag = false;
var testCenter = "";
$(function() {
    if(Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
  
    console.log("Checking for new dates...");
    jQuery(".test-centre-details").each(function() {
        if(jQuery("h5",this).length == 0 || jQuery("h5:contains('available')",this).length > 0) {
           
            flag = true;
            testCenter = jQuery("h4",this).text();
        }
         console.log("Checking for each date");
    });
    
    if(!flag) {
        console.log("nothing found... Refreshing...");
        var timeout = setTimeout(function() {
            jQuery("#test-centres-submit").click();
        },21000);
    } else {
        notifyMe("Date found in " + testCenter);
        notifyMe("Date found in " + testCenter);
        notifyMe("Date found in " + testCenter);
        console.log("Test found, clearing refresher");
    }

})



 

function notifyMe(title) {
 if (Notification.permission !== 'granted')
  Notification.requestPermission();
 else {
  var notification = new Notification('New date found!', {
   icon: 'https://driverpracticaltest.dvsa.gov.uk/resources/6.3.0.9/img/branding/gov.uk_logotype_crown.png',
   body: title,
  });
  notification.onclick = function() {
   window.focus(); this.close();
  };
 }
}
