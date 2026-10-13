/**
 * ==============================================================================
 * RARMATRIX TECHNOLOGIES PRIVATE LIMITED - GOOGLE APPS SCRIPT DATABASE WEBHOOK
 * ==============================================================================
 *
 * This script serves as the backend API for RARMATRIX website forms:
 * 1. "Contacts" Sheet: Stores client enquiries from the Contact Us form
 * 2. "Careers" Sheet: Stores job applications & saves uploaded resumes to Google Drive!
 * 3. "ResourceRequests" Sheet: Stores IT staffing & dedicated resource requirements
 * 4. "ProjectRequests" Sheet: Stores infrastructure & cloud project enquiries
 *
 * Automatic Features:
 * - Automatically creates sheet tabs with styled headers (Navy background & bold white text)
 * - Automatically creates a Google Drive folder "RARMATRIX_Resumes" to store uploaded resumes
 * - Automatically generates a clickable Google Drive link in the Careers sheet
 * - Adds timestamp, status flags ("New Enquiry", "Under Review"), and audit data
 *
 * ------------------------------------------------------------------------------
 * SETUP INSTRUCTIONS (Takes only 2 minutes):
 * 1. Open Google Sheets (https://sheets.new) and name it "RARMATRIX Leads Database".
 * 2. Click "Extensions" > "Apps Script".
 * 3. Delete any default code in Code.gs and PASTE THIS ENTIRE SCRIPT.
 * 4. Click "Deploy" > "New deployment".
 * 5. Click the gear icon (Select type) > Choose "Web app".
 * 6. Set Description: "RARMATRIX Webhook v1"
 * 7. Set Execute as: "Me" (your Google account)
 * 8. Set Who has access: "Anyone" (CRITICAL: Must be "Anyone" so website can submit)
 * 9. Click "Deploy" > Click "Authorize access" > Choose your Google account >
 *    Click "Advanced" > Click "Go to RARMATRIX Webhook (unsafe)" > Click "Allow".
 * 10. Copy the "Web app URL" (ends in /exec).
 * 11. Paste that URL into: src/services/sheetsService.js (GOOGLE_SHEET_WEBAPP_URL)
 * ==============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent writes
  lock.tryLock(30000);

  try {
    var rawContents = e.postData.contents;
    var data = JSON.parse(rawContents);
    var formType = data.formType || 'contact';

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var responseResult = {};

    if (formType === 'career') {
      responseResult = handleCareerSubmission(ss, data);
    } else if (formType === 'resource') {
      responseResult = handleResourceSubmission(ss, data);
    } else if (formType === 'project') {
      responseResult = handleProjectSubmission(ss, data);
    } else {
      // Default to Contact Us submission
      responseResult = handleContactSubmission(ss, data);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Recorded successfully in Google Sheet',
      details: responseResult
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'online',
    service: 'RARMATRIX Technologies Lead & Resume Webhook',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * 1. Handles Contact Us form submissions
 */
function handleContactSubmission(ss, data) {
  var headers = [
    'Timestamp',
    'Name',
    'Company Name',
    'Business Email',
    'Phone / WhatsApp',
    'City',
    'Industry',
    'Requirement Type',
    'Resource Count',
    'Required Skill',
    'Location',
    'Engagement Type',
    'Expected Start Date',
    'Project Requirement',
    'Message',
    'Lead Status'
  ];

  var sheet = getOrCreateFormattedSheet(ss, 'Contacts', headers);

  var row = [
    data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    data.name || '',
    data.company || '',
    data.email || '',
    data.phone || '',
    data.city || '',
    data.industry || '',
    data.requirementType || '',
    data.resourceCount || '',
    data.skill || '',
    data.location || '',
    data.engagementType || '',
    data.startDate || '',
    data.projectRequirement || '',
    data.message || '',
    'New Lead (Pending Review)'
  ];

  sheet.appendRow(row);
  return { sheet: 'Contacts', rowInserted: sheet.getLastRow() };
}

/**
 * 2. Handles Careers & Resume form submissions
 * If applicant uploaded a resume file, saves it to Google Drive "RARMATRIX_Resumes" folder!
 */
function handleCareerSubmission(ss, data) {
  var headers = [
    'Timestamp',
    'Applicant Name',
    'Email Address',
    'Phone / WhatsApp',
    'Role Applying For',
    'Total Experience',
    'Current Location / City',
    'Notice Period',
    'Expected CTC',
    'Resume Drive Link',
    'Portfolio / LinkedIn URL',
    'Key Skills / Cover Note',
    'Application Status'
  ];

  var sheet = getOrCreateFormattedSheet(ss, 'Careers', headers);

  var resumeDriveUrl = data.resumeLink || '';

  // If a file was uploaded as base64, save to Google Drive
  if (data.fileData && data.fileName) {
    try {
      var folder = getOrCreateResumesFolder('RARMATRIX_Resumes');
      var decodedBytes = Utilities.base64Decode(data.fileData);
      var sanitizedName = (data.name ? data.name.replace(/[^a-zA-Z0-9]/g, '_') : 'Applicant') +
        '_' + data.fileName;

      var blob = Utilities.newBlob(decodedBytes, data.fileType || 'application/pdf', sanitizedName);
      var driveFile = folder.createFile(blob);
      driveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      resumeDriveUrl = driveFile.getUrl();
    } catch (fileErr) {
      Logger.log('Drive file upload error: ' + fileErr.toString());
      resumeDriveUrl = 'File upload error: ' + fileErr.toString();
    }
  }

  var row = [
    data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.role || '',
    data.experience || '',
    data.city || '',
    data.noticePeriod || '',
    data.expectedCtc || '',
    resumeDriveUrl,
    data.linkedinUrl || '',
    data.notes || data.message || '',
    'Under Screening'
  ];

  sheet.appendRow(row);
  return { sheet: 'Careers', rowInserted: sheet.getLastRow(), resumeUrl: resumeDriveUrl };
}

/**
 * 3. Handles Resource Requests
 */
function handleResourceSubmission(ss, data) {
  var headers = [
    'Timestamp',
    'Company Name',
    'Contact Person',
    'Email Address',
    'Phone',
    'Job Role',
    'Number of Resources',
    'Required Skills',
    'Experience Required',
    'Location',
    'Work Model',
    'Engagement Type',
    'Expected Start Date',
    'Duration',
    'Additional Notes',
    'Status'
  ];

  var sheet = getOrCreateFormattedSheet(ss, 'ResourceRequests', headers);

  var row = [
    data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    data.company || '',
    data.contact || '',
    data.email || '',
    data.phone || '',
    data.jobRole || '',
    data.resourceCount || '',
    data.skills || '',
    data.experience || '',
    data.location || '',
    data.workModel || '',
    data.engagement || '',
    data.startDate || '',
    data.duration || '',
    data.additional || '',
    'New Requirement'
  ];

  sheet.appendRow(row);
  return { sheet: 'ResourceRequests', rowInserted: sheet.getLastRow() };
}

/**
 * 4. Handles Project Inquiries
 */
function handleProjectSubmission(ss, data) {
  var headers = [
    'Timestamp',
    'Company Name',
    'Contact Person',
    'Project Type',
    'Location',
    'User Count',
    'Existing Infrastructure',
    'Project Scope',
    'Expected Timeline',
    'Budget Range',
    'Message',
    'Status'
  ];

  var sheet = getOrCreateFormattedSheet(ss, 'ProjectRequests', headers);

  var row = [
    data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    data.company || '',
    data.contact || '',
    data.projectType || '',
    data.location || '',
    data.userCount || '',
    data.existingInfra || '',
    data.scope || '',
    data.timeline || '',
    data.budget || '',
    data.message || '',
    'New Proposal Request'
  ];

  sheet.appendRow(row);
  return { sheet: 'ProjectRequests', rowInserted: sheet.getLastRow() };
}

/**
 * Helper to get or create sheet with elegant styling (Navy blue header, white text, auto-fit)
 */
function getOrCreateFormattedSheet(ss, sheetName, headers) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  // If sheet is brand new or empty, write styled header row
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#0a1929'); // RARMATRIX navy
    headerRange.setFontColor('#ffffff'); // White text
    headerRange.setFontWeight('bold');
    headerRange.setFontSize(11);
    headerRange.setFontFamily('Arial');
    headerRange.setHorizontalAlignment('center');
    headerRange.setVerticalAlignment('middle');
    sheet.setRowHeight(1, 38);
    sheet.setFrozenRows(1);

    for (var col = 1; col <= headers.length; col++) {
      sheet.setColumnWidth(col, 170);
    }
  }

  return sheet;
}

/**
 * Helper to get or create the Google Drive folder for stored resumes
 */
function getOrCreateResumesFolder(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(folderName);
}
