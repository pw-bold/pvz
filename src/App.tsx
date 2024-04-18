import useOpenAI from './hooks/useOpenAI';


// just for testing (obviously) if the hook works
const LinkedInProfileComponent: React.FC = () => {
  // const { profile, loading, error } = useLinkedin(''); // full linkedin url

  const { data } = useOpenAI('{ "startEndDate": { "start": { "month": 8, "year": 2023 } }, "title": "Web Developer", "contractType": "Full-time", "description": "Developing & maintaining websites/applications using:\n- JavaScript/TypeScript\n- React.js \n- Astro.js\n- Keystone.js (CMS)\n- CSS/Sass/POSTCSS\n- Nunjucks", "companyName": "BOLD ", "companyLocation": "Warsaw, Mazowieckie, Poland · Hybrid", "companyLogo": "https://media.licdn.com/dms/image/C560BAQEVXg3MuONCzQ/company-logo_200_200/0/1656690549710/boldlimited_logo?e=1721260800&v=beta&t=GImCLfj1SPP-dE8v-vsmx47fljnHQgWvqCVeed6BBSw", "linkedInUrl": "https://www.linkedin.com/company/10490165/", "linkedInId": "10490165" }');

  return (
    <div>{JSON.stringify(data)}</div>
  );
};

export default LinkedInProfileComponent;
