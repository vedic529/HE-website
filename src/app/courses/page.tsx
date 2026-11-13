import Link from "next/link";
import type {Metadata} from "next";
import PageHero from "@/components/PageHero";
import FeeCurrencyNote from "@/components/FeeCurrencyNote";
import {courses} from "@/lib/data";

export const metadata:Metadata={title:"Proposed Courses"};

const annualEnrolments=[
 {course:"Bachelor of Data Science",headcounts:[80,157,230,250,270]},
 {course:"Master of Data Science",headcounts:[59,117,130,143,157]},
];

export default function Courses(){return <>
 <PageHero eyebrow="ACADEMIC PROGRAMS" title="Explore our courses">NIBT&apos;s proposed Data Science courses, presented while the required regulatory approvals are being sought.</PageHero>
 <section className="content-section container">
  <div id="courses-offered"><div className="eyebrow">COURSES OF STUDY</div><h2>Proposed courses</h2><p>These are the higher education courses currently listed in NIBT&apos;s website planning materials. Neither course is yet accredited or available for enrolment.</p>
   <div className="course-list">{courses.map(course=><article className="listing-card" key={course.slug}><div className="listing-top">{course.level} · PROPOSED</div><h2>{course.title}</h2><p>{course.intro}</p><p><strong>Indicative fee:</strong> {course.fee}</p><span className="status-badge">Not yet accredited</span><div><Link href={`/courses/${course.slug}`} className="button button-navy">View course details <span>→</span></Link></div></article>)}</div>
  </div>
  <div id="annual-enrolments" className="course-enrolments"><div className="eyebrow">STUDENT NUMBERS</div><h2>Indicative annual enrolments</h2><p>Estimated total student headcount for each course, by year:</p><div className="data-wrap"><table className="data-table"><thead><tr><th>Course</th>{[2027,2028,2029,2030,2031].map(year=><th key={year}>{year}</th>)}</tr></thead><tbody>{annualEnrolments.map(row=><tr key={row.course}><th scope="row">{row.course}</th>{row.headcounts.map((count,i)=><td key={i}>{count}</td>)}</tr>)}</tbody></table></div><p className="footnote">These are planning estimates, not current enrolments. Course delivery remains subject to the required approvals.</p></div>
  <div className="note-card"><h3>Before making a study decision</h3><p>Courses are proposed and not available for enrolment until the applicable registration, course accreditation and, for overseas student visa holders, CRICOS authorisations are in place. Course details may change during approval.</p></div>
  <div className="section-rule"/>
  <div id="teaching-units"><div className="eyebrow">ACADEMIC DELIVERY</div><h2>Teaching units</h2><p>The school, faculty or other NIBT unit responsible for each proposed course will be listed here when the academic structure is confirmed.</p></div>
  <div className="section-rule"/>
  <section id="course-delivery-partners" className="delivery-partners"><div><div className="eyebrow on-dark">PARTNER ARRANGEMENTS</div><h2>Course delivery with other parties</h2></div><div><p>No course delivery arrangement has been supplied for publication. If another organisation delivers a course or part of one, this section needs to state:</p><ul><li>the organisation and its role</li><li>the courses or subjects involved, and where or how they are delivered</li><li>how NIBT oversees the delivery arrangement</li></ul></div></section>
  <FeeCurrencyNote/>
 </section>
 </>}
