import { QAProject, Certification, EducationInfo } from './types';

export const projectsData: QAProject[] = [
  {
    id: 'guru99-banking',
    title: 'Guru99 Banking App Testing',
    subtitle: 'Functional Testing Practice',
    briefDescription: 'Conducted rigorous manual testing on a model banking portal to validate customer accounts, security logic, and transaction workflows.',
    projectOverview: 'This project focused on validating core banking workflows on a simulated banking portal. It covered a multi-tiered environment where managers create customer profiles, initiate bank accounts, and execute transactional actions like money transfers, withdrawals, and balance updates.',
    testingScope: 'Functional testing, Negative testing, Input validation testing, and Session security testing.',
    modulesTested: [
      'Manager Login Portal',
      'New Customer Registration Form',
      'New Account Creation System',
      'Cash Deposit and Withdrawal Transactions',
      'Fund Transfer Module',
      'Account Statements & Balance Inquiries'
    ],
    featuresTested: [
      'Authentication: Verification of correct login with valid credentials; lockout on invalid attempts.',
      'Form Validations: Checking mandatory inputs, character length limits, and rejecting special characters on numeric fields.',
      'Transactional Integrity: Verification that withdrawals fail if the transaction exceeds the current balance.',
      'Data Consistency: Testing balances update correctly across multiple transaction sequences.'
    ],
    testingApproach: 'Utilized manual black-box testing techniques. Applied Equivalence Partitioning (EP) and Boundary Value Analysis (BVA) to numeric and transactional inputs. Drafted structured test cases and tracked defects using Excel.',
    toolsUsed: ['MS Excel', 'Chrome DevTools'],
    testPlanSummary: 'The main goal was to ensure transaction security and data sanity across the front-end user portal. Testing scope focused on manual verification of banking workflows and form-level validation.',
    testScenarios: [
      {
        id: 'G99-TS-001',
        title: 'Verify Manager Login Authorization',
        preCondition: 'Manager has valid active credentials.',
        steps: [
          'Navigate to Guru99 Bank Manager Login Page.',
          'Enter valid Manager ID (e.g., mngr12345).',
          'Enter valid Password (e.g., secret123).',
          'Click the Login Button.'
        ],
        expectedResult: 'System redirects the user to the Manager Dashboard and displays a welcome banner with the unique Manager ID.',
        actualResult: 'User redirected to dashboard successfully, welcome banner is displayed containing "Manager Id : mngr12345".',
        status: 'Pass'
      },
      {
        id: 'G99-TS-002',
        title: 'Verify New Customer Registration with Invalid Characters in Name',
        preCondition: 'Manager is logged in and is on the "New Customer" form.',
        steps: [
          'Locate the "Customer Name" text field.',
          'Enter a name containing numeric digits (e.g., "Latefa123").',
          'Press Tab to unfocus the field.'
        ],
        expectedResult: 'System instantly displays a validation message "Numbers are not allowed" under the input field and disables submission.',
        actualResult: 'Visual validation alert text "Numbers are not allowed" appeared instantly below the input field.',
        status: 'Pass'
      },
      {
        id: 'G99-TS-003',
        title: 'Verify Cash Withdrawal Fails on Insufficient Balance',
        preCondition: 'Manager is on the "Withdrawal" page. An account with account ID 98765 exists with an active balance of 500 EGP.',
        steps: [
          'Enter Account No: 98765.',
          'Enter Withdrawal Amount: 600.',
          'Enter Description: "Exceeding Balance Test".',
          'Click Submit.'
        ],
        expectedResult: 'System rejects the withdrawal, triggers a browser alert popup stating "Transaction Failed. Insufficient Balance", and does not deduct funds.',
        actualResult: 'Alert popup appeared with "Transaction Failed. Insufficient Balance". Account balance remained exactly 500 EGP.',
        status: 'Pass'
      },
      {
        id: 'G99-TS-004',
        title: 'Verify Fund Transfer Reject for Non-Existent Payee Account',
        preCondition: 'Manager is on the "Fund Transfer" page. Source Account 11111 is active with 2000 EGP.',
        steps: [
          'Enter Payers Account No: 11111.',
          'Enter Payees Account No: 99999 (Non-existent).',
          'Enter Amount: 100.',
          'Click Submit.'
        ],
        expectedResult: 'An error message is displayed stating "Account 99999 does not exist", and transaction is canceled.',
        actualResult: 'Browser alert popup displayed: "Account 99999 does not exist". Source account balance was unchanged.',
        status: 'Pass'
      }
    ],
    bugReports: [
      {
        id: 'G99-BUG-001',
        title: 'Withdrawal Module allows balance to go negative without overdraft agreements',
        description: 'The system permits the manager to withdraw funds that exceed the account\'s balance when submitted in extremely fast successions (race condition), resulting in a negative ledger balance.',
        stepsToReproduce: [
          'Log in as manager and navigate to withdrawal page.',
          'Select Account 54321 containing exactly 100 EGP.',
          'Simultaneously submit two separate withdrawal requests of 80 EGP within 100ms.',
          'Check resulting balance on Account Details page.'
        ],
        expectedResult: 'The second withdrawal should be blocked due to insufficient funds (balance is 20 EGP after first transaction).',
        actualResult: 'Both withdrawal transactions succeeded. The resulting account balance shows -60 EGP with no overdraft active.',
        severity: 'High',
        priority: 'High',
        status: 'Closed',
        defectType: 'Functional'
      },
      {
        id: 'G99-BUG-002',
        title: 'Customer Mobile Number field accepts alphabetic and special characters on initial copy-paste',
        description: 'Although manual keystrokes of alphabetic characters are successfully filtered in the Mobile Number field, pasting a string containing non-numeric data bypassed the client-side regex check.',
        stepsToReproduce: [
          'Navigate to "New Customer" registration form.',
          'Copy the text string "Egypt-12345" to clipboard.',
          'Right-click and Paste (or press Ctrl+V) the string into the "Mobile Number" input field.',
          'Click Submit.'
        ],
        expectedResult: 'System should reject the pasted text and display validation error "Mobile no must be numeric".',
        actualResult: 'The text "Egypt-12345" was accepted, and customer registration form submitted successfully with non-numeric database values.',
        severity: 'Medium',
        priority: 'Medium',
        status: 'Closed',
        defectType: 'UI/UX'
      }
    ],
    lessonsLearned: [
      'Gained deep familiarity with the Software Testing Life Cycle (STLC) by analyzing requirements, writing test cases, and preparing defect logs.',
      'Understood that server-side validation is mandatory and cannot rely solely on front-end client restrictions.',
      'Learned to write clean, unambiguous steps in Bug Reports to ensure developers can reproduce defects instantly.'
    ]
  },
  {
    id: 'saucedemo-testing',
    title: 'SauceDemo E-Commerce QA Audit',
    subtitle: 'End-to-End Manual User Flow Testing',
    briefDescription: 'Performed comprehensive functional exploration and Selenium-based regression test scripting for a digital shopping platform.',
    projectOverview: 'This project focused on the complete manual testing of standard retail features including user sign-in states, product sorting, catalog browsing, cart operations, checkout processing, and tax calculations.',
    testingScope: 'Authentication, Cart Persistence, Calculations, Sorting Algorithms, Responsive Layout, and Automation Scripting.',
    modulesTested: [
      'Login Authentication Interface',
      'Inventory Catalog Grid & Filtering',
      'Shopping Cart Management State',
      'Multi-step Checkout Flow (Form Validation)',
      'Checkout Overview Page (Tax and Price Calculations)'
    ],
    featuresTested: [
      'User Profiles: Testing normal user, locked_out_user, and problem_user accounts.',
      'Product Sorting: Verifying filter logic for Name (A-Z, Z-A) and Price (low-high, high-low).',
      'State Persistence: Validating cart item counts persist upon page refreshes, and state returns after back button navigation.',
      'Checkout Calculations: Verifying item total, tax calculation (exactly 8% in the app), and grand total match.'
    ],
    testingApproach: 'Applied manual exploratory testing methods to map user personas (standard, locked-out, and problem users). Covered functional flows from browsing through payment confirmation.',
    toolsUsed: ['Browser Developer Tools', 'MS Excel'],
    testPlanSummary: 'Ensured seamless browsing-to-payment transitions for web shoppers. Focus areas included cross-browser consistency and accuracy of checkout calculations.',
    testScenarios: [
      {
        id: 'SD-TS-001',
        title: 'Verify Successful Purchase Flow with Standard User',
        preCondition: 'Browser is open on the SauceDemo login page. standard_user is active.',
        steps: [
          'Log in with credentials: standard_user / secret_sauce.',
          'Add "Sauce Labs Backpack" and "Sauce Labs Bike Light" to the cart.',
          'Click on the Shopping Cart badge to view selection.',
          'Click the "Checkout" button.',
          'Fill in First Name, Last Name, and Postal Code, then click "Continue".',
          'Verify item total ($39.98), tax ($3.20), and total ($43.18) on checkout overview.',
          'Click "Finish".'
        ],
        expectedResult: 'System displays "Thank you for your order!" screen, cart badge resets to 0, and transaction concludes successfully.',
        actualResult: 'User completed the entire flow without friction. Cart calculations matched perfectly and final page showed confirmation.',
        status: 'Pass'
      },
      {
        id: 'SD-TS-002',
        title: 'Verify Authentication Block on Locked Out User',
        preCondition: 'Browser is open on the SauceDemo login page.',
        steps: [
          'Enter Username: locked_out_user.',
          'Enter Password: secret_sauce.',
          'Click Login.'
        ],
        expectedResult: 'System denies access and displays a prominent red banner with the exact error text: "Epic sadface: Sorry, this user has been locked out."',
        actualResult: 'Login blocked instantly. Visual error message exactly matches expected validation string.',
        status: 'Pass'
      },
      {
        id: 'SD-TS-003',
        title: 'Verify Cart Persistence on Browser Refresh',
        preCondition: 'Standard user is logged in, and has added 3 items to the shopping cart.',
        steps: [
          'Confirm that the cart badge shows "3".',
          'Perform a browser page reload (Press F5 or Ctrl+R).',
          'Observe the cart badge icon in the header.'
        ],
        expectedResult: 'The cart badge continues to persist showing "3" items and the local storage holds the state.',
        actualResult: 'Cart badge correctly remained "3" and items were retained in local storage.',
        status: 'Pass'
      }
    ],
    bugReports: [
      {
        id: 'SD-BUG-001',
        title: 'Item count does not update when an item is removed directly from Checkout Overview Page',
        description: 'When checking out items with problem_user or on specific responsive dimensions, clicking the "Remove" button from inside the cart checkout view does not update the global cart bubble in the header navigation.',
        stepsToReproduce: [
          'Log in with standard_user.',
          'Add 2 items to cart and go to checkout page.',
          'Open the shopping cart list view.',
          'Click the "Remove" button next to "Sauce Labs Backpack".',
          'Observe the cart count badge in the top-right header.'
        ],
        expectedResult: 'The item is removed from the visible list and the badge number decreases from 2 to 1.',
        actualResult: 'The item vanishes from the list, but the global cart badge in the header continues to show "2" until the page is refreshed.',
        severity: 'Medium',
        priority: 'High',
        status: 'Open',
        defectType: 'Functional'
      },
      {
        id: 'SD-BUG-002',
        title: 'Problem User Profile cannot complete checkout due to Last Name input unresponsive',
        description: 'The problematic user persona (problem_user) has an underlying bug where the "Last Name" text input in the checkout info form does not capture user typing or pasted content, blocking checkout continuation.',
        stepsToReproduce: [
          'Log in using Username: problem_user / Password: secret_sauce.',
          'Add any item to cart and click "Checkout".',
          'Click on the "Last Name" input field.',
          'Type any alphabetic sequence.'
        ],
        expectedResult: 'Last name field should input and display typed characters properly.',
        actualResult: 'The "Last Name" field remains completely blank, and clicking "Continue" throws a mandatory "Error: Last Name is required" validation.',
        severity: 'High',
        priority: 'High',
        status: 'Closed',
        defectType: 'Functional'
      }
    ],
    lessonsLearned: [
      'Gained hands-on experience in structuring exploratory testing sessions around distinct user personas.',
      'Discovered how vital user personas and boundary tests are to uncover non-obvious defects in simple forms.',
      'Practiced writing clear, structured manual test cases with well-defined expected vs. actual outcomes.'
    ]
  },
  {
    id: 'academybugs-testing',
    title: 'Academy Bugs Exploratory Defect Hunt',
    subtitle: 'Ad-hoc & Visual Defect Documentation',
    briefDescription: 'Dug deep into an intentionally bug-ridden e-commerce sandbox to identify, classify, and professionally document visual and functional flaws.',
    projectOverview: 'Academy Bugs is a designated training workspace created with multiple integrated bugs (broken buttons, CSS layout overlaps, incorrect redirection URLs, and transaction failures). This project served to practice ad-hoc and exploratory testing, visual review, and writing clear developer-friendly bug reports.',
    testingScope: 'Exploratory testing, UI/UX consistency, functional defects, image loading, responsive breakpoints, and error states.',
    modulesTested: [
      'Product Detail Modal Popups',
      'Cart Checkout Overlay Drawer',
      'Sort and Search Filter Widgets',
      'Header, Navigation, and Social Media Redirects'
    ],
    featuresTested: [
      'Visual Consistency: Checking if product images, layout containers, and footer margins look aligned on mobile, tablet, and desktop viewports.',
      'Redirect URLs: Validating social media share icons trigger valid navigation paths.',
      'Add-to-cart operations: Verifying every single product card triggers accurate additions to checkout.',
      'Discount coupon code logic: Testing code strings correctly reduce price.'
    ],
    testingApproach: 'Employed structured exploratory testing. Divided the application by features and applied "touring heuristics". Documented issues by category (Visual, Functional, Performance, and Content) using browser extension screenshot annotation and browser developer consoles to fetch logs.',
    toolsUsed: ['Chrome DevTools', 'Lightshot (Screen capture)', 'MS Excel'],
    testPlanSummary: 'Uncovered visual layout overlaps and functional crashes on the e-commerce mock environment. Special emphasis was placed on responsive viewports to catch CSS spacing breaks. Final output included structured bug cards with attachments containing visual annotations.',
    testScenarios: [
      {
        id: 'AB-TS-001',
        title: 'Verify Coupon Code Calculation Logic',
        preCondition: 'An item of price $25.00 is in the cart. Visitor is on cart checkout page.',
        steps: [
          'Enter discount code "50OFF" in the coupon input field.',
          'Click "Apply Coupon".'
        ],
        expectedResult: 'The coupon is applied successfully, a success indicator appears, and subtotal reduces by exactly 50% ($12.50).',
        actualResult: 'Success notice shown, but the total was discounted by only 10% instead of 50%, showing total as $22.50.',
        status: 'Fail'
      },
      {
        id: 'AB-TS-002',
        title: 'Verify Social Share Twitter Icon Redirection',
        preCondition: 'User is on a product detail page (e.g., "Dark Gray Jeans").',
        steps: [
          'Locate the circular Twitter logo icon below the product description.',
          'Click the Twitter icon.'
        ],
        expectedResult: 'System launches a separate browser tab routing to Twitter.com with a pre-filled share post containing the product URL.',
        actualResult: 'A new tab opened but crashed on a 404 URL, attempting to navigate to the non-existent local directory "/twitter-share-null".',
        status: 'Fail'
      }
    ],
    bugReports: [
      {
        id: 'AB-BUG-001',
        title: 'Clicking second product item "Add to Cart" button triggers a 404 Error page',
        description: 'Under the main inventory catalog grid, clicking the "Add to Cart" button for the second item (Dark Gray Jeans) initiates a route failure, redirecting the user to a generic server 404 page instead of putting the item into the shopping basket.',
        stepsToReproduce: [
          'Go to Academy Bugs main homepage.',
          'Locate the "Dark Gray Jeans" product card (second item in grid).',
          'Click on the "Add to Cart" button.',
          'Observe the cart count badge in the top-right header.'
        ],
        expectedResult: 'The item count on the shopping cart drawer increases by 1, and a success banner "Item Added" is displayed.',
        actualResult: 'The browser is redirected immediately to "https://academybugs.com/store/item-2/null-error-404" displaying a blank error screen.',
        severity: 'Critical',
        priority: 'High',
        status: 'Open',
        defectType: 'Functional'
      },
      {
        id: 'AB-BUG-002',
        title: 'Product Thumbnail Image is stretched horizontally violating aspect-ratio rules on small displays',
        description: 'When accessing the store through viewport widths under 480px, the primary banner and product images fail to maintain aspect ratios, resulting in squeezed text and stretched graphics.',
        stepsToReproduce: [
          'Open Academy Bugs store in Chrome.',
          'Press F12 to open DevTools, toggle Device Toolbar, and adjust width to 360px (Mobile S).',
          'Examine the product listing image grids.'
        ],
        expectedResult: 'Images should fit within the borders using CSS `object-fit: contain` or `object-fit: cover` and maintain their original proportions.',
        actualResult: 'Product thumbnail containers have fixed width and percentage-based height, stretching the product images horizontally by ~45%, causing poor visual quality.',
        severity: 'Low',
        priority: 'Low',
        status: 'Closed',
        defectType: 'Visual'
      }
    ],
    lessonsLearned: [
      'Gained an eye for visual testing, recognizing tiny font and padding deviations that detract from a site\'s professional look.',
      'Developed robust exploratory testing routes, learning to break away from standard user steps to find hidden bugs.',
      'Honed the ability to document defects clearly with visual evidence to support written bug reports.'
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    title: 'Software Testing Diploma',
    issuer: 'Instant Training Academy',
    date: '2024',
    status: 'Completed'
  },
  {
    title: 'ISTQB Certified Tester Foundation Level (CTFL)',
    issuer: 'ISTQB - Egyptian Software Testing Board (ESTB)',
    date: '',
    status: 'In Progress'
  },
  {
    title: 'Postman API Testing',
    issuer: 'Self-Study & Practice Projects',
    date: '2025',
    status: 'Completed'
  },
  {
    title: 'Selenium Automation WebDriver in Java',
    issuer: 'Practical Training & Self-Study',
    date: '2025',
    status: 'Completed'
  }
];

export const educationData: EducationInfo = {
  degree: 'Bachelor of Science in Computer Science and Artificial Intelligence',
  school: 'Benha University',
  location: 'Benha, Egypt',
  duration: '2020 – 2024',
  gpa: '3.3 / 4.0',
  graduationProject: {
    title: 'Treatment of Children with Cerebral Palsy using VR (Virtual Reality)',
    grade: 'A+',
    details: 'Co-developed an interactive Virtual Reality rehabilitation system to support physical therapy and movement coordination for children with cerebral palsy, with a focus on usability, accessibility, and user experience.'
  },
  awards: [
    '3rd Place - Creativa Menoufia Startup Hackathon'
  ]
};

export const skillsCategories = [
  {
    title: 'Manual Testing Core',
    skills: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Exploratory Testing',
      'System Testing',
      'Smoke Testing',
      'Sanity Testing',
      'SDLC & STLC',
      'Test Scenarios',
      'Test Cases',
      'Bug Reporting',
      'Defect Life Cycle'
    ]
  },
  {
    title: 'Automation & API',
    skills: [
      'Selenium WebDriver',
      'API Testing',
      'Postman',
      'REST API Testing Basics',
      'API Requests & Responses'
    ]
  },
  {
    title: 'Databases & Languages',
    skills: [
      'MySQL',
      'SQL Queries',
      'Java',
      'Python',
      'C++'
    ]
  },
  {
    title: 'Tools & Management',
    skills: [
      'Jira',
      'TestRail',
      'Trello',
      'Excel Bug Tracking',
      'Git',
      'GitHub',
      'Agile / Scrum Methodology'
    ]
  }
];
