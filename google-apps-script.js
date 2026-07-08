function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  
  try {
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Determine the sheet name based on action type
    var sheetName = data.action === 'newsletter' ? 'Newsletter' : 'Feedbacks';
    var targetSheet = sheet.getSheetByName(sheetName);
    
    // Create the sheet if it doesn't exist
    if (!targetSheet) {
      targetSheet = sheet.insertSheet(sheetName);
      
      // Setup headers
      if (data.action === 'newsletter') {
        targetSheet.appendRow(['Timestamp', 'Email']);
      } else {
        targetSheet.appendRow(['Timestamp', 'Name', 'Product', 'Rating', 'Message', 'Approved']);
      }
      targetSheet.getRange(1, 1, 1, 6).setFontWeight("bold");
    }
    
    // Append the data
    var timestamp = new Date();
    if (data.action === 'newsletter') {
      targetSheet.appendRow([timestamp, data.email]);
    } else {
      targetSheet.appendRow([timestamp, data.name, data.product, data.rating, data.message]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Needed to support CORS for some browser preflight requests
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
}
