import type {Metadata} from "next";
import PageHero from "@/components/PageHero";
import FeeCurrencyNote from "@/components/FeeCurrencyNote";
import {courses} from "@/lib/data";
import ApplicationForm from "./ApplicationForm";

export const metadata:Metadata={title:"Admissions and Fees"};

export default function Admissions(){return <>
 <PageHero eyebrow="JOINING NIBT" title="Admissions & fees">Indicative information for students interested in NIBT&apos;s proposed Data Science courses.</PageHero>
 <section className="content-section container">
  <div className="eyebrow">PROPOSED FEES</div><h2>Course fee information</h2>
  <div className="course-meta">{courses.map(c=><div className="meta-box" key={c.slug}><span>{c.title}</span><strong style={{fontSize:'1.65rem',fontFamily:'Georgia,serif'}}>{c.fee}</strong></div>)}</div>
  <div className="note-card"><h3>Further fee information</h3><p>Payment schedules, other charges, refunds, and tuition protection information will be published before accepting enrolment or fees.</p></div>
  <div className="section-rule"/>
  <div className="two-column"><div><div className="eyebrow">ADMISSION INFORMATION</div><h2>Entry and selection</h2><ul className="simple-list"><li>NIBT&apos;s proposed student market includes domestic and international applicants.</li><li>Admission is planned for applicants aged 18 or older.</li><li>Course-specific academic preparation and English language proficiency requirements will be published when approved.</li><li>Credit transfer and recognition of prior learning will be considered under the approved NIBT policy, once available.</li></ul></div><aside className="plain-panel" id="international-students"><h3>International student visas</h3><p>NIBT is not currently authorised to enrol students studying on Australian student visas in its proposed courses. This will be updated only after the required CRICOS authorisation is confirmed.</p><p>Formal application, offer and enrolment processes are not activated in this prototype.</p></aside></div>
  <div className="section-rule"/>
  <div id="student-enrolments"><div className="eyebrow">STUDENT NUMBERS</div><h2>Indicative enrolments</h2><p>NIBT&apos;s indicative total student enrolment figure has not yet been supplied. The approved total and the period it covers will appear here when available.</p></div>
  <div className="section-rule"/>{process.env.VERCEL?<div className="note-card"><h3>Expression of interest</h3><p>Online enquiries will be available when secure, persistent storage and the approved privacy arrangements are in place.</p></div>:<ApplicationForm/>}
  <FeeCurrencyNote/>
 </section>
 </>}
