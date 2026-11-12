export type SearchEntry={title:string;section:string;href:string;keywords?:string};

// Every result points to a public page or an existing section on that page.
export const searchIndex:SearchEntry[]=[
 {title:"About NIBT",section:"Institution",href:"/about",keywords:"identity provider"},
 {title:"Registered name and ABN",section:"About NIBT",href:"/about#legal-identity",keywords:"company legal identity"},
 {title:"Regulatory status",section:"About NIBT",href:"/about#regulatory-status",keywords:"TEQSA registration accreditation"},
 {title:"Establishing instrument",section:"About NIBT",href:"/about#establishing-instrument",keywords:"constitution legal entity"},
 {title:"Our People",section:"Institution",href:"/our-people",keywords:"staff leadership"},
 {title:"Executive Leadership",section:"Our People",href:"/our-people#executive-leadership",keywords:"CEO COO"},
 {title:"Academic Leadership",section:"Our People",href:"/our-people#academic-leadership",keywords:"dean school coordinator"},
 {title:"Academic Staff",section:"Our People",href:"/our-people#academic-staff",keywords:"lecturers teaching"},
 {title:"Student Services and Administration",section:"Our People",href:"/our-people#student-services-administration",keywords:"admissions manager"},
 {title:"Organisational Structure",section:"Our People",href:"/our-people#organisational-structure",keywords:"chart departments"},
 {title:"Courses",section:"Study",href:"/courses",keywords:"bachelor master data science"},
 {title:"Bachelor of Data Science",section:"Courses",href:"/courses/bachelor-data-science",keywords:"undergraduate qualification 144 credits"},
 {title:"Master of Data Science",section:"Courses",href:"/courses/master-data-science",keywords:"postgraduate qualification 96 credits"},
 {title:"Annual enrolments",section:"Courses",href:"/courses#annual-enrolments",keywords:"student numbers estimates"},
 {title:"Course delivery with other parties",section:"Courses",href:"/courses#course-delivery-partners",keywords:"partners arrangements"},
 {title:"Bachelor course details",section:"Bachelor of Data Science",href:"/courses/bachelor-data-science#course-status",keywords:"AQF duration accreditation international visa qualification"},
 {title:"Master course details",section:"Master of Data Science",href:"/courses/master-data-science#course-status",keywords:"AQF duration accreditation international visa qualification"},
 {title:"Bachelor entry requirements",section:"Bachelor of Data Science",href:"/courses/bachelor-data-science#entry-requirements",keywords:"admission English eligibility"},
 {title:"Master entry requirements",section:"Master of Data Science",href:"/courses/master-data-science#entry-requirements",keywords:"admission English eligibility"},
 {title:"Bachelor credit and pathways",section:"Bachelor of Data Science",href:"/courses/bachelor-data-science#credit-and-pathways",keywords:"RPL articulation recognition prior learning"},
 {title:"Master credit and pathways",section:"Master of Data Science",href:"/courses/master-data-science#credit-and-pathways",keywords:"RPL articulation recognition prior learning"},
 {title:"Admissions and fees",section:"Study",href:"/admissions",keywords:"application fees"},
 {title:"International student visas",section:"Admissions and fees",href:"/admissions#international-students",keywords:"CRICOS overseas authorisation"},
 {title:"Indicative student enrolments",section:"Admissions and fees",href:"/admissions#student-enrolments",keywords:"student numbers"},
 {title:"Student support",section:"Student life",href:"/support",keywords:"services assistance"},
 {title:"Learning resources",section:"Student support",href:"/support#learning-resources",keywords:"library study materials"},
 {title:"Student services",section:"Student support",href:"/support#student-services",keywords:"wellbeing support"},
 {title:"Policies",section:"Information",href:"/policies",keywords:"rules procedures"},
 {title:"Credit and recognition of prior learning",section:"Policies",href:"/policies#credit-rpl",keywords:"RPL credit transfer"},
 {title:"Complaints and Appeal Policy",section:"Policies",href:"/policies#complaints-appeal-policy",keywords:"grievance appeal"},
 {title:"Case records and compliance evidence",section:"Policies",href:"/policies#institutional-assurance",keywords:"misconduct integrity incident"},
 {title:"How to lodge a complaint",section:"Complaints and appeals",href:"/complaints#lodging-complaint",keywords:"submit concern"},
 {title:"Contact and campus",section:"Visit",href:"/contact",keywords:"address location"},
 {title:"Campus address and map",section:"Contact",href:"/contact#locations",keywords:"841 George St Haymarket NSW 2000"},
 {title:"Facilities for learning",section:"Contact",href:"/contact#facilities",keywords:"classroom computing study spaces"},
 {title:"Get in Touch",section:"Contact",href:"/contact#provider-contact",keywords:"email phone"},
 {title:"Governance and standing",section:"Institution",href:"/governance",keywords:"leadership financial"},
 {title:"Governing body",section:"Governance and standing",href:"/governance#governing-body",keywords:"board members"},
 {title:"Senior executive",section:"Governance and standing",href:"/governance#senior-executive",keywords:"leadership"},
 {title:"Financial standing",section:"Governance and standing",href:"/governance#financial-standing",keywords:"finance"},
 {title:"Annual reports",section:"Governance and standing",href:"/governance#annual-reports",keywords:"public report"},
 {title:"Student portal",section:"Digital learning",href:"/portal",keywords:"LMS records"},
 {title:"Enrolment records",section:"Student records",href:"/student-records/enrolments",keywords:"student enrolment"},
 {title:"Progression records",section:"Student records",href:"/student-records/progression",keywords:"results academic standing"},
 {title:"Course completion records",section:"Student records",href:"/student-records/completions",keywords:"completion eligibility"},
 {title:"Qualifications awarded",section:"Student records",href:"/student-records/qualifications-awarded",keywords:"award conferral"},
];

export function searchPages(query:string){
 const words=query.toLowerCase().trim().split(/\s+/).filter(Boolean);
 if(!words.length)return [];
 return searchIndex.map((entry,index)=>{
  const title=entry.title.toLowerCase(),section=entry.section.toLowerCase();
  const all=`${title} ${section} ${entry.keywords??""}`.toLowerCase();
  if(!words.every(word=>all.includes(word)))return {entry,index,score:-1};
  const score=words.reduce((total,word)=>total+(title===word?100:title.startsWith(word)?50:title.includes(word)?30:section.includes(word)?12:3),0);
  return {entry,index,score};
 }).filter(result=>result.score>=0).sort((a,b)=>b.score-a.score||a.index-b.index).slice(0,7).map(result=>result.entry);
}
