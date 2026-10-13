# 📊 RARMATRIX Google Sheets Lead & Resume System

This system connects your website's forms directly to your private Google Spreadsheet.

---

## 📑 Sheet Structure & Table Headings

When a user submits on the website, this webhook automatically categorizes and writes to the respective sheet tab.

### 1. Sheet Tab: `Contacts` (Contact Us Form)
| Column | Heading | Description |
|:---|:---|:---|
| A | `Timestamp` | Date & time of enquiry (IST) |
| B | `Name` | Visitor's full name |
| C | `Company Name` | Organization / Business name |
| D | `Business Email` | Email address |
| E | `Phone / WhatsApp` | Contact number |
| F | `City` | Location city |
| G | `Industry` | Industry segment |
| H | `Requirement Type` | IT Staffing, Managed Support, Cloud, AMC, etc. |
| I | `Resource Count` | Number of IT resources requested |
| J | `Required Skill` | Required technical skillset |
| K | `Location` | Deployment location |
| L | `Engagement Type` | Onsite, Hybrid, Remote, Contract |
| M | `Expected Start Date` | Project or hiring timeline |
| N | `Project Requirement` | Project scope summary |
| O | `Message` | Detailed inquiry notes |
| P | `Lead Status` | Defaults to *New Lead (Pending Review)* |

---

### 2. Sheet Tab: `Careers` (Job Applications & Resumes)
| Column | Heading | Description |
|:---|:---|:---|
| A | `Timestamp` | Submission time (IST) |
| B | `Applicant Name` | Candidate full name |
| C | `Email Address` | Candidate email |
| D | `Phone / WhatsApp` | Candidate phone number |
| E | `Role Applying For` | Position (e.g. Desktop Support, Network Engineer) |
| F | `Total Experience` | Years of experience |
| G | `Current Location / City` | Current residence / preferred location |
| H | `Notice Period` | Immediate / 15 days / 30 days |
| I | `Expected CTC` | Compensation expectation |
| J | `Resume Drive Link` | **Clickable direct Google Drive link to candidate's uploaded PDF/Word resume!** |
| K | `Portfolio / LinkedIn URL` | Professional profile link |
| L | `Key Skills / Cover Note` | Summary of technical expertise |
| M | `Application Status` | Defaults to *Under Screening* |

---

## 🚀 Setup Steps (Takes Only 2 Minutes)

1. **Create the Google Sheet:**
   - Go to [Google Sheets](https://sheets.new) in your Google account.
   - Name the file: `RARMATRIX Leads Database`.

2. **Open Apps Script Editor:**
   - In the top menu, click **Extensions** > **Apps Script**.

3. **Paste the Code:**
   - Delete all default text inside `Code.gs`.
   - Copy the entire code from [`google-apps-script/Code.gs`](./Code.gs) and paste it into the editor.
   - Click the **Save** disk icon (or press Ctrl+S).

4. **Deploy as Web App:**
   - Click the blue **Deploy** button (top right) > Select **New deployment**.
   - Beside "Select type", click the **Gear (⚙️)** icon > Select **Web app**.
   - Configure the settings:
     - **Description**: `RARMATRIX Webhook v1`
     - **Execute as**: `Me (your-email@gmail.com)`
     - **Who has access**: **`Anyone`** *(⚠️ IMPORTANT: Must be "Anyone" so visitors can send inquiries)*
   - Click **Deploy**.

5. **Authorize Permissions:**
   - Click **Authorize access**.
   - Choose your Google account.
   - If Google shows *"Google hasn’t verified this app"*, click **Advanced** (at the bottom) > Click **Go to RARMATRIX Webhook (unsafe)** > Click **Allow**.

6. **Copy the Web App URL:**
   - Google will show a URL ending with `/exec` (e.g. `https://script.google.com/macros/s/AKfyc.../exec`).
   - Copy this URL.

7. **Paste into the Code:**
   - Open [`src/services/sheetsService.js`](../src/services/sheetsService.js)
   - Set:
     ```javascript
     export const GOOGLE_SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfyc.../exec';
     ```
   - Done! All forms now store leads directly into your Google Sheet and resumes into Google Drive.
