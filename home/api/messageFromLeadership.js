'use strict';

document.writeln('<script src="/javascripts/jquery.js" type="text/javascript"></sc'+'ript>');
document.writeln('<script type="text/javascript" src="/javascripts/jquery.tablesorter.js"></sc'+'ript>');

$(document).ready(function() {
  'use strict';
  var listName = 'MessageFromLeadershipHomepage';
  var siteURL = _spPageContextInfo.webServerRelativeUrl;

  var fullString = "https://insulet.sharepoint.com/_api/web/lists/getbytitle('MessageFromLeadershipHomepage')/items?$select=*";

  $.ajax({
    // url: siteURL + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=*",
    url: fullString,
    method: "GET",
    headers: {
      "Accept": "application/json; odata=verbose"
    },
    success: getMessageSuccess,
    error: getMessageError
  });

  function getMessageSuccess(data, request) {
    var testUrl = 'https://insulet.sharepoint.com';
    var html = [];
    var webUrl = "https://insulet.sharepoint.com";

    var results = data.d.results;
    var siteCollectionURL = SP.PageContextInfo.get_siteServerRelativeUrl();

    var employeeMessage = data.d.results[0].EmployeeMessage;
    var employeePageUrl = data.d.results[0].EmployeeMessagePageURL.Url;
    var employeePicUrl = data.d.results[0].EmployeePicture.Url;
    var employeeNameAndTitle = data.d.results[0].EmployeeNameAndTitle;
    console.log(employeeMessage);
    console.log(employeePageUrl);
    console.log(employeePicUrl);
    console.log(employeeNameAndTitle);

    // html.push("<div class='message-container-outer'><div class='message-container-inner'><div class='message-left' style='width: 195.5px;'>​<img style='margin-top: 5%; max-width: 180px; height: auto'  class='employee-pic-acton' src='" + employeePicUrl + "' alt='' />");
    //
    // html.push("<div class='employee-details'>" + employeeNameAndTitle + "</div></div>");
    //
    // html.push("<div class='message-right' style='width: 55%;'><div class='message-text-container'>" + employeeMessage + "</div></div></div>");
    //
    // html.push("<div class='view-control'><div class='view-control-inner'> ​<a target='_blank' href='" +  employeePageUrl + "'>View Page</a>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ </div></div></div>");


    // $('#leadMess').append(html.join(""));
  };


  function getMessageError(error) {
              console.log("error");
  };
});
