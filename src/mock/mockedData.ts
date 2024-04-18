interface StartEndDate {
  start: {
    month?: number;
    year: number;
  };
  end?: {
    month?: number;
    year: number;
  };
}

interface Position {
  startEndDate: StartEndDate;
  title: string;
  contractType?: string;
  description?: string;
  companyName: string;
  companyLocation: string;
  companyLogo?: string;
  linkedInUrl: string;
  linkedInId: string;
}

interface School {
  startEndDate: StartEndDate;
  schoolName: string;
  degreeName?: string;
  fieldOfStudy?: string;
  description?: string;
  schoolLogo?: string | null;
  linkedInUrl: string;
}

interface Person {
  publicIdentifier: string;
  linkedInIdentifier: string;
  firstName: string;
  lastName: string;
  headline: string;
  location: string;
  photoUrl: string;
  positions: {
    positionsCount: number;
    positionHistory: Position[];
  };
  creationDate: {
    month?: number;
    year: number;
  };
  followerCount: number;
  schools: {
    educationsCount: number;
    educationHistory: School[];
  };
  skills: string[];
  languages: string[];
  linkedInUrl: string;
}

interface Company {
  websiteUrl: string;
  name: string;
  logo: string;
  employeeCount: number;
  description: string;
  tagline: string;
  specialities: any[]; // You might want to define a specific type for this
  headquarter: {
    country: string;
    geographicArea: string | null;
    city: string;
    postalCode: string | null;
  };
  foundedOn: {
    year: number;
  };
  industry: string;
  universalName: string;
  linkedInUrl: string;
  linkedInId: string;
}

interface MockedData {
  success: boolean;
  person: Person;
  company: Company;
  credits_left: number;
  rate_limit_left: number;
}

export const mockedData: MockedData = {
  "success": true,
  "person": {
    "publicIdentifier": "viktoriia-holovko-670115160",
    "linkedInIdentifier": "ACoAACZ1wnQB59fQfkEZ6uXbjEVmbTMZe_QPY6A",
    "firstName": "Viktoriia",
    "lastName": "Holovko",
    "headline": "Frontend/React Developer",
    "location": "Warsaw, Mazowieckie, Poland",
    "photoUrl": "https://media.licdn.com/dms/image/C4E03AQGE717GzcIpxQ/profile-displayphoto-shrink_800_800/0/1637012906777?e=1718841600&v=beta&t=lrRFru__YKOh6oBkHewHveBlw_DJkU9PAkdgQkMhR7A",
    "positions": {
      "positionsCount": 4,
      "positionHistory": [
        {
          "startEndDate": {
            "start": {
              "month": 8,
              "year": 2023
            }
          },
          "title": "Web Developer",
          "contractType": "Full-time",
          "description": "Developing & maintaining websites/applications using:\n- JavaScript/TypeScript\n- React.js \n- Astro.js\n- Keystone.js (CMS)\n- CSS/Sass/POSTCSS\n- Nunjucks",
          "companyName": "BOLD ",
          "companyLocation": "Warsaw, Mazowieckie, Poland · Hybrid",
          "companyLogo": "https://media.licdn.com/dms/image/C560BAQEVXg3MuONCzQ/company-logo_200_200/0/1656690549710/boldlimited_logo?e=1721260800&v=beta&t=GImCLfj1SPP-dE8v-vsmx47fljnHQgWvqCVeed6BBSw",
          "linkedInUrl": "https://www.linkedin.com/company/10490165/",
          "linkedInId": "10490165"
        },
        {
          "startEndDate": {
            "start": {
              "month": 6,
              "year": 2021
            },
            "end": {
              "month": 7,
              "year": 2023
            }
          },
          "title": "Javascript Developer",
          "contractType": "Full-time",
          "description": "- Developing applications and extensions based on React.js technology \n- Developing, improving and debugging custom JavaScript based tracking tags for Tealium iQ",
          "companyName": "HSBC ",
          "companyLocation": "Cracow, Małopolskie, Poland",
          "companyLogo": "https://media.licdn.com/dms/image/D560BAQG2HVLlNUxOcw/company-logo_200_200/0/1688354573894/hsbc_logo?e=1721260800&v=beta&t=E_cQHrRN1hJ0G1mqetLdG3OB-01moNdFijvJaj5fHXY",
          "linkedInUrl": "https://www.linkedin.com/company/1241/",
          "linkedInId": "1241"
        },
        {
          "startEndDate": {
            "start": {
              "month": 11,
              "year": 2019
            },
            "end": {
              "month": 5,
              "year": 2021
            }
          },
          "title": "Senior Web Implementation Specialist for Google",
          "contractType": "Full-time",
          "description": "- Using HTML, CSS, JavaScript to implement tracking and provide custom solutions\n- Google Ads / Google Analytics / Google Tag Manager setup, installation and implementation\n- Enhanced ECommerce, Events Tracking, Dynamic Remarketing, Offline Conversions implementation",
          "companyName": "Cognizant ",
          "companyLocation": "Cracow, Lesser Poland District, Poland",
          "companyLogo": "https://media.licdn.com/dms/image/D4E0BAQHDKo68h6DqgQ/company-logo_200_200/0/1688389917808/cognizant_logo?e=1721260800&v=beta&t=f_96ic2NoBHyocqJBBgIrEEWWDXCykIapOIRacpgv9w",
          "linkedInUrl": "https://www.linkedin.com/company/1680/",
          "linkedInId": "1680"
        },
        {
          "startEndDate": {
            "start": {
              "month": 2,
              "year": 2019
            },
            "end": {
              "month": 10,
              "year": 2019
            }
          },
          "title": "Collections Analyst",
          "companyName": "Accenture",
          "companyLocation": "Kraków Area, Poland",
          "companyLogo": "https://media.licdn.com/dms/image/D4E0BAQGTUswcRlgg9A/company-logo_200_200/0/1689352303687/accenture_logo?e=1721260800&v=beta&t=aGrF6Pv7s1aCL-oPNfMXsZIi9JK3mGsI_BIMsLzyPQI",
          "linkedInUrl": "https://www.linkedin.com/company/1033/",
          "linkedInId": "1033"
        }
      ]
    },
    "creationDate": {
      "month": 3,
      "year": 2018
    },
    "followerCount": 237,
    "schools": {
      "educationsCount": 2,
      "educationHistory": [
        {
          "startEndDate": {
            "start": {
              "year": 2014
            },
            "end": {
              "year": 2017
            }
          },
          "schoolName": "Vincent Pol University",
          "degreeName": "Bachelor's degree, English/Language Arts Teacher Education",
          "fieldOfStudy": "Bachelor's degree, English/Language Arts Teacher Education",
          "schoolLogo": null,
          "linkedInUrl": "https://www.linkedin.com/search/results/all/?keywords=Vincent+Pol+University"
        },
        {
          "startEndDate": {
            "start": {
              "year": 2015
            },
            "end": {
              "year": 2016
            }
          },
          "schoolName": "Universidad de Jaén",
          "description": "Activities and societies: ERASMUS PROGRAM",
          "degreeName": "Bachelor of Arts - BA, English Language and Literature, General",
          "fieldOfStudy": "Bachelor of Arts - BA, English Language and Literature, General",
          "schoolLogo": "https://media.licdn.com/dms/image/C4D0BAQG05Ns4p3LwHQ/company-logo_200_200/0/1678348458417/universidad_de_ja_n_logo?e=1721260800&v=beta&t=yh8xqd7zWCBtkTYO_Ind2hPzfGbtp6YDFEVjl0wbG-Q",
          "linkedInUrl": "https://www.linkedin.com/company/344489/"
        }
      ]
    },
    "skills": [
      "TypeScript",
      "Astro.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "React.js",
      "Redux.js",
      "SASS",
      "Cascading Style Sheets (CSS)",
      "HTML",
      "Next.js",
      "Webpack",
      "Git",
      "GitHub",
      "Jira",
      "Tealium",
      "Google Tag Manager",
      "Web Analytics",
      "Agil",
      "Kanban"
    ],
    "languages": [
      "English",
      "German",
      "Polish",
      "Russian",
      "Spanish",
      "Ukrainian"
    ],
    "linkedInUrl": "https://linkedin.com/in/viktoriia-holovko-670115160"
  },
  "company": {
    "websiteUrl": "http://bold.com/",
    "name": "BOLD",
    "logo": "https://media.licdn.com/dms/image/C560BAQEVXg3MuONCzQ/company-logo_200_200/0/1656690549710/boldlimited_logo?e=1721260800&v=beta&t=GImCLfj1SPP-dE8v-vsmx47fljnHQgWvqCVeed6BBSw",
    "employeeCount": 1423,
    "description": "Since 2005, BOLD has established itself as a job seeker's ally. Our goal is simple: We Transform Work Lives. We provide online products, tools, guidance, and support to help job seekers make their jobs, careers, and workplaces better.\n\nBOLD's more than 1,200 global team members in Engineering, Customer Engagement, Product, Marketing, Data Science, Design/UX, Research and Human Resources are passionate about helping people achieve their career dreams. Our team's knowledge and expertise has resulted in award-winning AI-powered resume and cover letter builders, and job search tools that have empowered millions of job seekers in more than 180 countries to reach their professional goals. \n\nFrom our headquarters in Puerto Rico, with remote and hybrid offices in India, Poland, and U.S. we're a global organization on a path to change the career industry as we know it. ",
    "tagline": "We provide online products, tools and support to help job seekers make their careers and workplaces better.",
    "specialities": [],
    "headquarter": {
      "country": "PR",
      "geographicArea": null,
      "city": "San Juan",
      "postalCode": null
    },
    "foundedOn": {
      "year": 2005
    },
    "industry": "Software Development",
    "universalName": "boldlimited",
    "linkedInUrl": "https://www.linkedin.com/company/boldlimited/",
    "linkedInId": "10490165",
    "linkedinUrl": "https://www.linkedin.com/company/boldlimited/",
    "linkedinId": "10490165"
  },
  "credits_left": 48,
  "rate_limit_left": 49
}