import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import PageHero from "@/components/PageHero";
import {courses} from "@/lib/data";

export function generateStaticParams(){return courses.map(c=>({slug:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const c=courses.find(c=>c.slug===slug);
 return {title:c?.title||"Course"};
}

export default async function CourseDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const c=courses.find(x=>x.slug===slug);
 if(!c)notFound();
 const periods=[...new Set(c.structure.map(x=>x.period))];
 const totalCreditPoints=c.structure.reduce((sum,subject)=>sum+(subject.creditPoints??0),0);
 const pathway=c.slug==="master-data-science"?[
  {title:"Strengthen your methods",detail:"Statistics · programming · data systems"},
  {title:"Research responsibly",detail:"Machine learning · research methods · governance"},
  {title:"Apply your learning",detail:"Capstone · industry-oriented projects"},
 ]:[
  {title:"Build the foundations",detail:"Programming · mathematics · statistics"},
  {title:"Work with data",detail:"SQL · preparation · visualisation"},
  {title:"Put methods to work",detail:"AI · projects · professional practice"},
 ];

 return <>
  <PageHero eyebrow={c.level} title={c.title}>{c.intro}</PageHero>
  <div className="container course-detail">
   <section className="study-section" aria-labelledby="study-heading">
    <div className="study-copy">
     <div className="eyebrow">COURSE OVERVIEW</div>
     <h2 id="study-heading">What you will study</h2>
     <ul className="study-points">{c.overview.map(x=><li key={x}>{x}</li>)}</ul>
    </div>
    <div className="study-visual">
     <div className="visual-caption">SUBJECT THEMES AT A GLANCE</div>
     <h3>A connected study pathway</h3>
     <ol className="pathway-list">{pathway.map((step,i)=><li key={step.title}><span className="pathway-number">{String(i+1).padStart(2,"0")}</span><div><strong>{step.title}</strong><span>{step.detail}</span></div></li>)}</ol>
    </div>
   </section>

   <section id="course-status" className="course-information" aria-labelledby="qualification-heading">
    <div className="eyebrow">COURSE INFORMATION</div>
    <h2 id="qualification-heading">Qualification and key details</h2>
    <dl className="qualification-facts">
     <div><dt>Qualification</dt><dd>{c.title}</dd></div>
     <div><dt>AQF level</dt><dd>{c.level}</dd></div>
     <div><dt>Total credit points</dt><dd>{totalCreditPoints} credit points</dd></div>
     <div><dt>Duration</dt><dd>{c.duration}</dd></div>
     <div><dt>Campus</dt><dd>Haymarket, Sydney <Link href="/contact#locations" className="text-link">Address and map ↗</Link></dd></div>
    </dl>
    <details className="course-accordion" id="entry-requirements" open>
     <summary>Entry requirements</summary>
     <div className="accordion-body"><p>Course-specific entry requirements have not yet been approved. This section needs:</p><ul><li>Minimum academic qualification and any prerequisite subjects</li><li>English language proficiency requirements and accepted evidence</li><li>Any selection criteria, age requirements and alternative entry pathways</li><li>Application documents and how eligibility will be assessed</li></ul><p><Link className="text-link" href="/admissions">Admissions information ↗</Link></p></div>
    </details>
    <details className="course-accordion">
     <summary>Fees and payment details</summary>
     <div className="accordion-body"><p><strong>Indicative fee:</strong> {c.fee}. {c.feeNote}</p><p>NIBT needs to confirm the total and annual tuition fees, payment schedule, other charges and refund information before enrolment opens.</p><Link className="text-link" href="/admissions">Fees and admissions ↗</Link></div>
    </details>
    <details className="course-accordion">
     <summary>Accreditation, AQF and student visa status</summary>
     <div className="accordion-body"><p><strong>Course accreditation:</strong> {c.accreditation}</p><p><strong>AQF recognition:</strong> The qualification type is recognised under the Australian Qualifications Framework. NIBT&apos;s course is not yet accredited.</p><p><strong>International student authorisation:</strong> {c.cricos}</p><p>The approved accreditation decision, course registration details and CRICOS code should be added here when available.</p></div>
    </details>
   </section>

   <section className="course-section" aria-labelledby="subjects-heading">
    <div className="eyebrow">STUDY PLAN</div><h2 id="subjects-heading">Subject structure</h2>
    <p>Based on the supplied NIBT subject-selection documents, Version 2.0. Subject titles and credit points are indicative. Some elective descriptions in the source documents require reconciliation.</p>
    {periods.map(p=><details className="semester-box" key={p}><summary>{p}<span className="screen-reader-only">Show subjects</span></summary><div className="data-wrap"><table className="data-table"><thead><tr><th>Code</th><th>Subject</th><th>Credit points</th><th>Type</th></tr></thead><tbody>{c.structure.filter(x=>x.period===p).map(x=><tr key={x.code}><td className="nowrap">{x.code}</td><td>{x.name}</td><td>{x.creditPoints ?? "To confirm"}</td><td>{x.kind}</td></tr>)}</tbody></table></div></details>)}
    <h3 className="course-subheading">Elective subject options</h3><p>Elective offerings and their allocation to elective slots are provisional. The final approved course guide will confirm available choices.</p>
    <details className="semester-box"><summary>View elective options</summary><div className="data-wrap"><table className="data-table"><thead><tr><th>Code</th><th>Subject</th><th>Credit points</th></tr></thead><tbody>{c.electiveOptions.map(e=><tr key={e.code}><td>{e.code}</td><td>{e.name}</td><td>{e.creditPoints??"To confirm"}</td></tr>)}</tbody></table></div></details>
   </section>

   <section id="credit-and-pathways" className="course-section">
    <div className="eyebrow">CREDIT AND PATHWAYS</div><h2>Credit, prior learning and articulation</h2>
    <ol className="credit-rows">
     <li><span className="credit-number">01</span><h3>Credit policy</h3><div><p>NIBT&apos;s Credit and Recognition of Prior Learning Policy and Procedures is listed in the policy register. Approved eligibility rules, limits, evidence requirements and application steps will be added here.</p><Link className="text-link" href="/policies#credit-rpl">View policy status ↗</Link></div></li>
     <li><span className="credit-number">02</span><h3>Recognition of prior learning</h3><div><p>The approved policy will explain how previous formal, informal and non-formal learning can be assessed for credit in this course, including the criteria and application steps.</p><Link className="text-link" href="/policies#credit-rpl">RPL policy information ↗</Link></div></li>
     <li><span className="credit-number">03</span><h3>Articulation and credit arrangements</h3><div><p>Any course-specific agreements and standing credit arrangements will be listed here when verified. Admissions contact details will be added to the Contact page when confirmed.</p><Link className="text-link" href="/contact#provider-contact">Contact details ↗</Link></div></li>
    </ol>
   </section>
   <div className="compact-cta"><h3>Interested in this course?</h3><p>You may register an expression of interest. This is not a formal admission application or an offer of enrolment.</p><Link href="/admissions" className="button button-navy">Admissions and expression of interest →</Link></div>
   <Link href="/courses" className="back-link">← Back to all courses</Link>
  </div>
 </>;
}
