import type {Metadata} from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata:Metadata={title:"Our People"};

const groups=[
 {id:"executive-leadership",title:"Executive Leadership",roles:["Chief Executive Officer (CEO)","Chief Operating Officer (COO)","Other senior executives, if applicable"]},
 {id:"academic-leadership",title:"Academic Leadership",roles:["Dean","Head of School","Program Lead / Course Coordinator"]},
 {id:"academic-staff",title:"Academic Staff",roles:["Senior Lecturers","Lecturers"]},
 {id:"student-services-administration",title:"Student Services and Administration",roles:["Student Services Manager","Admissions Manager","Administration Manager"]},
];

export default function OurPeople(){return <>
 <PageHero eyebrow="OUR INSTITUTION" title="Our People">The roles being planned across NIBT&apos;s leadership, teaching and student services.</PageHero>
 <section className="content-section container people-page">
  <p className="people-intro">These are potential designations for NIBT. Names, appointments and profiles will be added when confirmed.</p>
  {groups.map(group=><section id={group.id} key={group.id} aria-labelledby={`${group.id}-heading`}>
   <div className="section-rule"/>
   <div className="people-section-head"><h2 id={`${group.id}-heading`}>{group.title}</h2><span>Profiles to follow</span></div>
   <div className="people-grid">{group.roles.map((role,index)=><article className={index===1?"people-role people-role-feature":"people-role"} key={role}><span className="people-avatar" aria-hidden="true"><span/></span><div><span className="people-label">Position</span><h3>{role}</h3></div><span className="people-role-line" aria-hidden="true"/></article>)}</div>
  </section>)}
  <section id="organisational-structure" aria-labelledby="organisational-structure-heading">
   <div className="section-rule"/>
   <h2 id="organisational-structure-heading">Organisational Structure</h2>
   <div className="people-structure"><div><h3>High-level organisational chart</h3><p>The approved chart showing NIBT&apos;s main departments and academic units responsible for course delivery will be added here.</p></div><Link className="text-link" href="/governance#organisational-chart">Governance and organisational structure ↗</Link></div>
  </section>
 </section>
 </>}
