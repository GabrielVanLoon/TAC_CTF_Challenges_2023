// Graph Solution Structure
// Start in id 29
// 29 -> Company Culture -> 
//     6/9 -> Company News
//         2 -> Quarters Report
//         3 -> Information Technology
//             20 -> IT Operations
//             20 -> Hardware Infrastructure
//                 10 -> Guides
//                     1/22 -> Human Resources
//                         14 -> Performance Reviews
//                             16 -> Management
                                
//                     15/24 -> Product Development
                
//         25 -> Legal

const pages = [
  {
    "id": "1",
    "title": "Employee Onboarding Guide",
    "summary": "A comprehensive guide by HR Manager Benjamin Reynolds outlining the employee onboarding process, welcoming new hires to the company.",
    "content": "\nEmployee Onboarding Guide:\n\n**Key Steps:**\n1. Welcome Message: A warm welcome to the new employee, introducing them to our company culture.\n2. Documentation: Completing necessary paperwork and providing required identification.\n3. Orientation: An overview of the company's history, values, and organizational structure.\n4. Team Introduction: Connecting new hires with their team members and key stakeholders.\n\nEnsuring a smooth onboarding experience for every new member of our team!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-10T10:30:00Z",
    "categories": [
      "3",
      "4",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },
  
  {
    "id": "2",
    "title": "Company Update - Q3 2023",
    "summary": "An update from CEO Olivia Anderson highlighting key achievements, challenges, and strategic initiatives for the third quarter of 2023.",
    "content": "\nCompany Update - Q3 2023:\n\n**Key Highlights:**\n1. Achieved 20% revenue growth compared to Q2 2023.\n2. Successful launch of new product features enhancing customer experience.\n3. Expansion into new markets driving increased brand visibility.\n4. Employee Recognition: Acknowledging outstanding contributions from teams across departments.\n\nA comprehensive overview of the company's progress and future goals!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-11T10:30:00Z",
    "categories": [
      "1",
      "2"
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },
  
  {
    "id": "3",
    "title": "Wiki Data Migration - Update from IT Chief Samuel Porter",
    "summary": "IT Chief Samuel Porter shares important information about the ongoing migration of wiki data to the new system.",
    "content": "\nWiki Data Migration - Update from IT Chief Samuel Porter:\n\n**Status Update:**\n1. **Ongoing Development:** The new system for wiki data migration is currently under development, and our IT team is actively working on its implementation.\n\n2. **Enhancements:** The new system aims to provide enhanced features and improved user experience, ensuring a more efficient and user-friendly platform for accessing wiki data.\n\n3. **Timeline:** While the development is in progress, we anticipate the migration process to begin in the coming weeks. A detailed timeline will be shared as we approach the launch date.\n\n4. **User Training:** To ensure a smooth transition, we will conduct training sessions for all users on the new system's functionalities.\n\nStay tuned for further updates, and feel free to reach out to our IT team if you have any specific questions or concerns.\n",
    "hasAttachment": false,
    "createdAt": "2023-05-13T14:45:00Z",
    "categories": [
      "1",
      "6",
    ],
    "authorId": 1 // Samuel Porter - Chief IT
  },

  {
    "id": "4",
    "title": "Hardware Maintenance Guide",
    "summary": "A comprehensive guide on maintaining hardware infrastructure for optimal performance.",
    "content": "\nWelcome to the \"Hardware Maintenance Guide\"!\n\n**Essential Tasks:**\n1. Regular cleaning of hardware components.\n2. Checking and replacing faulty components.\n3. Updating firmware and drivers.\n4. Monitoring system temperatures and performance.\n\nEnsure the longevity and efficiency of our hardware infrastructure with these maintenance practices!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-13T15:00:00Z",
    "categories": [
      "8",
      "7"
    ],
    "authorId": 9 // Christopher - Hardware and IT Guy
  },

  {
    "id": "5",
    "title": "Intranet Access Training",
    "summary": "A comprehensive guide on accessing and navigating the company's intranet systems.",
    "content": "\nWelcome to the \"Intranet Access Training\" session!\n\nIn this training, you will learn how to access and navigate the company's intranet systems effectively. Follow the steps below to ensure a seamless experience.\n\n**Step 1: Login to Intranet**\n- Open your web browser and navigate to the company's intranet portal.\n- Use your corporate credentials to log in.\n\n**Step 2: Navigating the Intranet**\n- Explore the various sections and features available on the intranet.\n- Familiarize yourself with important links, announcements, and departmental pages.\n\n**Step 3: Accessing Documents and Resources**\n- Learn how to find and download documents and resources stored on the intranet.\n- Understand the organization of shared files and folders.\n\nCongratulations! You have successfully completed the Intranet Access Training. If you have any questions or encounter any issues, feel free to reach out to the IT support team.\n\nThank you for participating!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-15T10:30:00Z",
    "categories": [
      "8",
      "5",
    ],
    "authorId": 10 // Emily Sutton - Dev and Training Girl
  },

  {
    "id": "6",
    "title": "Strategic Vision for 2024 - Message to Employees",
    "summary": "CEO Olivia Anderson shares the company's strategic vision for the upcoming year, outlining key focus areas and objectives.",
    "content": "\nStrategic Vision for 2024 - Message to Employees:\n\n**Focus Areas:**\n1. Innovation: Encouraging a culture of continuous innovation and exploration.\n2. Employee Development: Investing in training and development programs to empower our workforce.\n3. Sustainability Initiatives: Integrating environmentally conscious practices into our operations.\n4. Client-Centric Approach: Strengthening relationships with clients through enhanced services and support.\n\nA call to action for all employees to contribute to the company's success in the coming year!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-17T13:45:00Z",
    "categories": [
      "1",
      "9",
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },

  {
    "id": "7",
    "title": "Server Rack Organization Tips",
    "summary": "Guidelines for organizing server racks to maximize efficiency and accessibility.",
    "content": "\nWelcome to the \"Server Rack Organization Tips\" page!\n\n**Key Strategies:**\n1. Proper cable management for easy identification and maintenance.\n2. Arranging servers based on usage and priority.\n3. Implementing proper cooling and airflow management.\n4. Labeling and documenting equipment for quick reference.\n\nOptimize our server racks for a more efficient and organized hardware setup!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-21T10:30:00Z",
    "categories": [
      "8",
      "7"
    ],
    "authorId": "9" // Christopher - Hardware and IT Guy
  },

  {
    "id": "8",
    "title": "Prospect Meeting Notes - Green Energy Solutions",
    "summary": "Detailed notes from a recent meeting with the prospect Green Energy Solutions, outlining potential collaborations.",
    "content": "\nMeeting Notes - Green Energy Solutions:\n\n**Date:** 2023-06-12\n**Attendees:** Natalie Walker, Mark Thompson (Green Energy Solutions)\n**Discussion Points:**\n- Exploring renewable energy solutions for their projects.\n- Proposal for a joint webinar on sustainability in the industry.\n\nFollow up with Green Energy Solutions for further discussions!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-21T15:15:00Z",
    "categories": [
      "10",
      "11"
    ],
    "authorId": 8 // Natalie Walker - Sales and Prospects
  },

  {
    "id": "9",
    "title": "Employee Appreciation Day - Thank You Note",
    "summary": "A heartfelt note from CEO Olivia Anderson expressing gratitude to all employees on Employee Appreciation Day.",
    "content": "\nEmployee Appreciation Day - Thank You Note:\n\n**Message:**\nDear Team,\nI want to express my sincere gratitude to each of you for your dedication, hard work, and passion. Your contributions are the driving force behind our success, and I am truly thankful to have such a talented and committed team. Let's continue to achieve greatness together!\n\nWarm regards,\nOlivia Anderson\nCEO\n",
    "hasAttachment": false,
    "createdAt": "2023-05-22T15:00:00Z",
    "categories": [
      "1",
      "9",
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },

  {
    "id": "10",
    "title": "Hardware Procurement Best Practices",
    "summary": "Guidance on sourcing and procuring hardware components for the infrastructure.",
    "content": "\nWelcome to the \"Hardware Procurement Best Practices\" page!\n\n**Effective Strategies:**\n1. Conducting thorough research on hardware specifications and vendors.\n2. Establishing partnerships with reliable suppliers.\n3. Considering future scalability and compatibility.\n4. Performing cost-benefit analysis for hardware investments.\n\nEnsure optimal performance by following best practices in hardware procurement!\n",
    "hasAttachment": false,
    "createdAt": "2023-05-25T12:15:00Z",
    "categories": [
      "4",
      "8",
      "7"
    ],
    "authorId": 9 // Christopher - Hardware and IT Guy
  },

  {
    "id": "11",
    "title": "New Federal Project Announcement - Confidential Notice",
    "summary": "CEO Olivia Anderson announces the commencement of a new federal project and emphasizes the critical need for confidentiality among all employees.",
    "content": "\nNew Federal Project Announcement - Confidential Notice:\n\n**Announcement:**\nI am pleased to inform you that our company has secured a new federal project with significant strategic importance. This project represents a major milestone for our organization and opens new avenues for growth.\n\n**Confidentiality Notice:**\nGiven the sensitive nature of this project and the importance of maintaining a competitive edge, I must stress the utmost importance of keeping all project details confidential. This information should not be disclosed to anyone outside the company, including friends, family, or industry contacts.\n\n**Legal Implications:**\nDisclosures of confidential information could have legal ramifications and negatively impact our ability to deliver successfully. I trust each of you to uphold the company's values and protect the integrity of this project.\n\nThank you for your understanding and commitment to our continued success.\n\nWarm regards,\nOlivia Anderson\nCEO\n",
    "hasAttachment": false,
    "createdAt": "2023-05-30T09:30:00Z",
    "categories": [
      "12",
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },

  {
    "id": "12",
    "title": "Customer Testimonial - Global Innovations Ltd.",
    "summary": "A testimonial from the customer Global Innovations Ltd., expressing satisfaction with our services.",
    "content": "\nCustomer Testimonial:\n\n**Company:** Global Innovations Ltd.\n**Testimonial:**\n\"Working with Natalie and the team has been a game-changer for our business. Their solutions have significantly improved our operational efficiency. We highly recommend their services.\"\n\nThank you, Global Innovations Ltd., for your trust and partnership!\n",
    "hasAttachment": false,
    "createdAt": "2023-06-03T11:30:00Z",
    "categories": [
      "10",
      "13"
    ],
    "authorId": 8 // Natalie Walker - Sales and Prospects
  },

  {
    "id": "13",
    "title": "Unofficial Notes - Federal Organization Sale",
    "summary": "Informal notes regarding a successful sale to a non-named federal organization.",
    "content": "\nUnofficial Notes - Federal Organization Sale:\n\n**Date:** 2023-06-20\n**Details:**\n- Successfully closed a deal with a federal organization for software solutions.\n- Due to confidentiality, the organization's name is not disclosed in official records.\n- Key points discussed include cybersecurity features, scalability, and compliance.\n- Anticipated project kick-off in Q3 2023.\n\nCelebrating the success of this significant federal organization partnership!\n",
    "hasAttachment": false,
    "createdAt": "2023-06-03T14:45:00Z",
    "categories": [
      "10",
      "12",
    ],
    "authorId": 8 // Natalie Walker - Sales and Prospects
  },

  {
    "id": "14",
    "title": "Performance Review Process",
    "summary": "HR Manager Benjamin Reynolds explains the company's performance review process, providing guidance for employees and managers.",
    "content": "\nPerformance Review Process:\n\n**Overview:**\n1. Goal Setting: Collaborative goal-setting between employees and managers at the beginning of the performance cycle.\n2. Continuous Feedback: Encouraging ongoing feedback and communication throughout the year.\n3. Evaluation Criteria: Assessing performance based on established criteria and key performance indicators.\n4. Development Plans: Identifying areas for improvement and creating personalized development plans.\n\nFostering a culture of continuous improvement through our performance review process!\n",
    "hasAttachment": false,
    "createdAt": "2023-06-10T13:45:00Z",
    "categories": [
      "3",
      "14"
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "15",
    "title": "CI/CD Best Practices",
    "summary": "Exploring best practices for Continuous Integration and Continuous Deployment in our development workflow.",
    "content": "\nWelcome to the \"CI/CD Best Practices\" session!\n\nIn this session, we will explore the best practices for Continuous Integration (CI) and Continuous Deployment (CD) in our development workflow. Follow the guidelines below to enhance our development processes.\n\n**Understanding CI/CD**\n- Gain a clear understanding of what Continuous Integration and Continuous Deployment entail.\n- Learn how these practices contribute to efficient and reliable software development.\n\n**Setting Up Automated Builds**\n- Explore the setup of automated builds to streamline the integration process.\n- Use tools such as Jenkins or GitLab CI to automate the build process.\n\n**Implementing Automated Testing**\n- Understand the importance of automated testing in the CI/CD pipeline.\n- Explore different types of automated tests and how they fit into the development lifecycle.\n\n**Ensuring Code Quality**\n- Learn how to maintain code quality through code reviews and static code analysis.\n- Understand the role of code quality in successful CI/CD implementation.\n\n**Deployment Strategies**\n- Explore various deployment strategies, including blue-green deployments and canary releases.\n- Understand how to minimize downtime during deployment.\n\nCongratulations! You have completed the CI/CD Best Practices session. If you have any questions or need further clarification, feel free to reach out to the development team.\n\nThank you for your commitment to best development practices!\n",
    "hasAttachment": false,
    "createdAt": "2023-06-25T14:45:00Z",
    "categories": [
      "4",
      "15",
      "8"
    ],
    "authorId": 10 // Emily Sutton - Dev and Training Girl
  },

  {
    "id": "16",
    "title": "Delivery Status Report - Federal Organization Sale",
    "summary": "A detailed report on the current status of the delivery for the software solutions sold to the non-named federal organization.",
    "content": "\nDelivery Status Report - Federal Organization Sale:\n\n**Date:** 2023-07-05\n**Key Metrics:**\n- Project progress: On schedule\n- Key features implemented: Cybersecurity enhancements, scalability measures.\n- Team collaboration: Strong cross-functional collaboration.\n- Anticipated delivery completion: Q4 2023.\n\nMonitoring the delivery status to ensure successful implementation for our federal organization client!\n",
    "hasAttachment": false,
    "createdAt": "2023-07-25T09:15:00Z",
    "categories": [
      "16",
      "17"
    ],
    "authorId": 2 // Victoria Mitchell - Project Manager
  },

  {
    "id": "17",
    "title": "PII Data Gathering Best Practices",
    "summary": "Guidelines for gathering Personally Identifiable Information (PII) data while adhering to privacy and compliance standards.",
    "content": "\nPII Data Gathering Best Practices:\n\n**Key Guidelines:**\n1. Obtain explicit consent from individuals before collecting any PII data.\n2. Implement secure and encrypted channels for data transmission.\n3. Limit the collection of unnecessary PII and only gather essential information.\n4. Regularly update consent agreements and privacy policies to align with evolving standards.\n\nEnsuring responsible and compliant PII data gathering practices!\n",
    "hasAttachment": false,
    "createdAt": "2023-07-27T09:00:00Z",
    "categories": [
      "18",
      "19"
    ],
    "authorId": 7 // Jonathan Hayes - Data Scientist Expert
  },

  {
    "id": "18",
    "title": "PII Data Transformation Techniques",
    "summary": "Exploration of techniques for transforming Personally Identifiable Information (PII) data while ensuring anonymity and security.",
    "content": "\nPII Data Transformation Techniques:\n\n**Methods Overview:**\n1. Tokenization: Replacing sensitive PII with unique tokens for data processing.\n2. Anonymization: Removing personally identifiable details to create anonymous datasets.\n3. Data Masking: Concealing parts of PII to protect sensitive information during analysis.\n4. Differential Privacy: Introducing noise to prevent individual identification while preserving overall data trends.\n\nStrategies for safeguarding PII data during transformation processes!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-01T11:30:00Z",
    "categories": [
      "18",
      "20"
    ],
    "authorId": 7 // Jonathan Hayes - Data Scientist Expert
  },

  {
    "id": "19",
    "title": "Team Performance Metrics - Q2 2023",
    "summary": "A comprehensive overview of team performance metrics for Q2 2023.",
    "content": "\nTeam Performance Metrics - Q2 2023:\n\n**Metrics Overview:**\n- Project delivery rate: 95%\n- Client satisfaction score: 4.8/5\n- Average response time to client inquiries: 1 hour\n- Team collaboration index: 92%\n\nRecognizing the team's dedication and commitment to excellence in Q2 2023!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-03T14:30:00Z",
    "categories": [
      "16",
      "14"
    ],
    "authorId": 2 // Victoria Mitchell - Project Manager
  },

  {
    "id": "20",
    "title": "Data Center Security Guidelines",
    "summary": "Recommendations for ensuring the security of hardware infrastructure in the data center.",
    "content": "\nWelcome to the \"Data Center Security Guidelines\" page!\n\n**Key Security Measures:**\n1. Implementing access controls and monitoring systems.\n2. Regular security audits and vulnerability assessments.\n3. Disaster recovery planning for hardware protection.\n4. Employee training on data center security protocols.\n\nEnhance the security of our hardware infrastructure with these guidelines!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-07T09:45:00Z",
    "categories": [
      "8",
      "7",
      "6",
    ],
    "authorId": 9 // Christopher - Hardware and IT Guy
  },

  {
    "id": "21",
    "title": "Secure Storage of PII Data",
    "summary": "Recommendations for securely storing Personally Identifiable Information (PII) data to prevent unauthorized access and ensure compliance.",
    "content": "\nSecure Storage of PII Data:\n\n**Key Security Measures:**\n1. Encryption: Implementing end-to-end encryption for stored PII data.\n2. Access Controls: Restricting access to PII based on role and necessity.\n3. Regular Audits: Conducting periodic audits to identify and rectify security vulnerabilities.\n4. Data Residency Compliance: Ensuring PII data storage complies with legal and regulatory requirements.\n\nPrioritizing the security and compliance of stored PII data!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-12T14:15:00Z",
    "categories": [
      "18",
      "19"
    ],
    "authorId": 7 // Jonathan Hayes - Data Scientist Expert
  },

  {
    "id": "22",
    "title": "Employee Leave Policies",
    "summary": "An informative guide by HR Manager Benjamin Reynolds detailing the company's policies and procedures regarding employee leaves.",
    "content": "\nEmployee Leave Policies:\n\n**Key Information:**\n1. Types of Leaves: Explaining various leave types, including vacation, sick leave, and parental leave.\n2. Request Process: How to request and obtain approval for different types of leaves.\n3. Leave Balances: Keeping track of leave balances and accruals.\n4. Returning to Work: Guidelines for employees returning to work after a leave period.\n\nEnsuring clarity and fairness in our employee leave policies!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-18T15:15:00Z",
    "categories": [
      "3",
      "4",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "23",
    "title": "Critical Analysis - Project Concerns",
    "summary": "A critical analysis by Victoria Mitchell highlighting severe concerns regarding data privacy, biased algorithms, and financial risks associated with the ongoing project.",
    "content": "\nCritical Analysis - Project Concerns:\n\n**Date:** 2023-07-25\n**Key Concerns:**\n1. **Data Privacy Menace:** The project poses a significant threat to user data privacy, raising serious ethical and legal concerns.\n2. **Biased Algorithmic Decisions:** Uncovering evidence of algorithms incorporating biases that may lead to discriminatory outcomes, a critical ethical issue.\n3. **Financial Risks:** Identifying potential financial risks that could impact the project's sustainability and client relationships.\n\n**Immediate Actions:**\n- Urgent review and revision of data handling practices.\n- Ethical evaluation and adjustment of algorithms to eliminate biases.\n- In-depth financial risk assessment and mitigation planning.\n\nStakeholders, we need immediate action to address these critical concerns and uphold ethical standards in the project!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-25T15:30:00Z",
    "categories": [
      "9",
      "19",
    ],
    "authorId": 2 // Victoria Mitchell - Project Manager
  },

  {
    "id": "24",
    "title": "Using NexusLab Research Platform",
    "summary": "A tutorial on accessing and utilizing the NexusLab Research Platform for development purposes.",
    "content": "\nWelcome to the \"Using NexusLab Research Platform\" tutorial!\n\n**Getting Started:**\n1. Access NexusLab at [NexusLab](https://nexuslab.wickedintranet).\n2. Log in using your corporate credentials.\n3. Explore project directories and version control.\n4. Run experiments and collaborate on research.\n\nFeel free to unleash the full potential of NexusLab for your development projects!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-25T09:30:00Z",
    "categories": [
      "15",
      "4",
    ],
    "authorId": 10 // Emily Sutton - Dev and Training Girl
  },

  {
    "id": "25",
    "title": "Legal and Ethical Considerations - Important Message",
    "summary": "CEO Olivia Anderson addresses potential legal and ethical concerns related to the new federal project and provides guidance on appropriate channels for addressing such concerns.",
    "content": "\nLegal and Ethical Considerations - Important Message:\n\n**Message:**\nDear Team,\n\nAs we embark on our new federal project, I understand that some of you may have concerns about potential legal and ethical challenges. It's crucial to acknowledge and address these concerns responsibly.\n\n**Guidance:**\n1. If you come across any situation that raises legal or ethical questions, please do not ignore it. Report your concerns through the established channels, such as our internal reporting system or directly to your supervisor.\n2. Our commitment to transparency and integrity is unwavering. We encourage open communication and are dedicated to addressing concerns in a fair and timely manner.\n3. Remember that adherence to legal and ethical standards is a shared responsibility. We are here to support one another and ensure our actions reflect our commitment to ethical business practices.\n\nThank you for your dedication to our company values.\n\nWarm regards,\nOlivia Anderson\nCEO\n",
    "hasAttachment": false,
    "createdAt": "2023-08-26T11:00:00Z",
    "categories": [
      "1",
      "20",
    ],
    "authorId": 4 // Olivia Anderson - CEO
  },

  {
    "id": "26",
    "title": "Employee Offboarding Notice - Natalie Walker",
    "summary": "An official announcement regarding the offboarding of Natalie Walker due to serious violations of company policies.",
    "content": "\nEmployee Offboarding Notice - Natalie Walker:\n\n**Reasons for Offboarding:**\n1. Breaking Non-Disclosure Agreements (NDA): Natalie Walker breached confidentiality agreements, posing a significant risk to company interests.\n2. Menacing Company Culture: Engaging in behavior detrimental to a positive and inclusive work environment.\n3. Insubordination: Failure to adhere to managerial instructions and company guidelines.\n4. Legal Threats: Making threats of legal action against the company.\n\nThis decision follows a thorough investigation and careful consideration of the facts. We wish Natalie Walker the best in her future endeavors.\n\nAttachment: [Offboard_Natalie.pdf](http://{baseUrl}/uploads/67404be69188a4a930213d5987903591.pdf)", 
    "hasAttachment": true,
    "flag": "TAC{454368a6cdfa4fa069627495d2da909f691de7398e04bd71879719c256aaf99a}",
    "createdAt": "2023-08-26T10:30:00Z",
    "categories": [
      "3",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "27",
    "title": "Employee Layoff Notice - Jonathan Hayes",
    "summary": "An official announcement regarding the layoff of Jonathan Hayes due to serious violations of company policies.",
    "content": "\nEmployee Layoff Notice - Jonathan Hayes:\n\n**Reasons for Layoff:**\n1. Breaking Non-Disclosure Agreements (NDA): Jonathan Hayes violated confidentiality agreements, compromising sensitive company information.\n2. Menacing Company Culture: Engaging in actions that undermine a positive and inclusive work environment.\n3. Insubordination: Repeated instances of defiance against managerial instructions and company protocols.\n4. Legal Threats: Making threats of legal action against the company.\n\nThis decision is a result of a comprehensive review of Jonathan Hayes's actions and their impact on the company. Our best wishes go to him for his future endeavors.\n",
    "hasAttachment": false,
    "createdAt": "2023-08-26T10:35:00Z",
    "categories": [
      "3",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "28",
    "title": "360-Degree Feedback Review - Employee Spotlight",
    "summary": "HR Manager Benjamin Reynolds showcases an exemplary employee through a 360-degree feedback review, highlighting contributions and collaborative feedback from peers and managers.",
    "content": "\n360-Degree Feedback Review - Employee Spotlight:\n\n**Employee Showcase:**\n1. Achievements and Contributions: Recognizing the employee's outstanding work and accomplishments.\n2. Peer Feedback: Insights from colleagues on the employee's collaborative and teamwork skills.\n3. Managerial Perspective: Feedback from the employee's direct supervisor on leadership and performance.\n4. Development Opportunities: Encouraging continuous growth and skill enhancement.\n\nCelebrating excellence and fostering a culture of positive recognition!\n",
    "hasAttachment": false,
    "createdAt": "2023-08-29T10:35:00Z",
    "categories": [
      "3",
    ],
    "authorId": 3 // Benjamin - HR Specialist
  },

  {
    "id": "29",
    "title": "Open Note - Concerns and Feedback",
    "summary": "Alexander Harrison shares open feedback on the company environment and raises concerns about transparency and HR practices.",
    "content": "\nOpen Note - Concerns and Feedback:\n\n**Dear Team,**\n\nI feel compelled to express some concerns I've been grappling with regarding our work environment. While I value the opportunities and challenges our company provides, I believe there are areas that need attention:\n\n1. **Toxic Company Environment:** The atmosphere seems to be strained, impacting employee morale and collaboration. It's crucial for us to foster a positive workplace culture.\n\n2. **Transparency on Projects:** There appears to be a lack of transparency about ongoing projects. Improved communication about the company's direction and goals would greatly benefit everyone.\n\n3. **Negative Pressure from HR:** There's a sense of unease regarding conversations with ex-colleagues. It's important for HR to foster an environment of open communication rather than discourage it.\n\nI share these thoughts with the intention of contributing to our collective growth. Let's work together to create a workplace **UNDER NEW VALUES AND CULTURE**, where everyone feels heard and valued.\n\nBest regards,\nAlexander Harrison\n",
    "hasAttachment": true,
    "createdAt": "2023-10-25T10:30:00Z",
    "categories": [
      "9",
    ],
    "authorId": 5 // Alexander Harrison - Concerned Employee
  }
];

export default pages