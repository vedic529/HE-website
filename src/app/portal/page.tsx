import type {Metadata} from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {studentRecords} from "@/lib/studentRecords";

export const metadata:Metadata={title:"Student Portal"};

export default function Portal(){const lms=process.env.NEXT_PUBLIC_LMS_URL||"";let safe=false;try{safe=new URL(lms).protocol==="https:"}catch{safe=false}
 return <><PageHero eyebrow="DIGITAL LEARNING" title="Student portal">Information about NIBT&apos;s planned learning and student record systems.</PageHero><section className="content-section container">
  <div className="two-column"><div><h2>Learning Management System</h2><p>NIBT plans to provide secure student access to unit materials, assessment instructions, submission facilities, feedback and learning resources through an LMS.</p><p>Students will receive access instructions and support when the selected platform is established and their enrolment is authorised.</p>{safe?<a className="button button-navy" href={lms} target="_blank" rel="noopener noreferrer">Open verified LMS ↗</a>:<span className="status-badge">LMS integration not yet configured</span>}</div><aside className="plain-panel"><h3>Learning access will include</h3><ul className="simple-list"><li>Unit outlines and teaching materials</li><li>Assessment and feedback information</li><li>Communication and academic assistance</li><li>Access to learning resources</li></ul><p className="footnote">This website is not a functioning LMS. No LMS credentials are collected here.</p></aside></div>
  <div className="section-rule"/>
  <div id="student-records"><div className="eyebrow">STUDENT RECORDS</div><h2>Academic recordkeeping</h2><div className="record-tiles">{studentRecords.map((record,i)=><details id={record.anchor} className="record-tile" key={record.slug}><summary><span>{String(i+1).padStart(2,"0")}</span>{record.title}</summary><div><p>{record.summary}</p><Link href={`/student-records/${record.slug}`}>View record details ↗</Link></div></details>)}</div></div>
 </section></>}
