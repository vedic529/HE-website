import type {Metadata} from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {abn,institutionName,legalName} from "@/lib/data";

export const metadata:Metadata={title:"About NIBT"};

export default function About(){return <>
 <PageHero eyebrow="OUR INSTITUTION" title="About NIBT">Our identity, proposed courses and current regulatory position.</PageHero>
 <section className="content-section container">
  <div className="two-column"><div>
   <div className="eyebrow">INSTITUTIONAL PROFILE</div>
   <h2>National Institute of Business and Technology</h2>
   <p className="lead">{institutionName} is preparing to offer higher education courses in Data Science from Sydney, subject to TEQSA registration and course approval.</p>
   <p>Academic planning covers computing, statistics, data science, artificial intelligence and the responsible use of technology.</p>
   <div className="note-card" id="regulatory-status"><h3>Regulatory status</h3><p>NIBT is seeking TEQSA registration as a higher education provider. Its proposed courses are not yet accredited. This status must be checked against current regulator records before public launch.</p></div>
   <Link className="text-link" href="/governance">Governance and institutional standing ↗</Link>
  </div><aside className="plain-panel" id="legal-identity">
   <div className="eyebrow">LEGAL IDENTITY</div><h3>Company details</h3>
   <dl>
    <div className="info-row"><dt>Registered name</dt><dd>{legalName}</dd></div>
    <div className="info-row"><dt>Australian Business Number</dt><dd>{abn}</dd></div>
    <div className="info-row" id="establishing-instrument"><dt>Establishing instrument</dt><dd>NIBT is an Australian proprietary company under the Corporations Act 2001. <a className="text-link" href="/documents/nibt-constitution.pdf" target="_blank" rel="noopener noreferrer">View NIBT Constitution (PDF) ↗</a></dd></div>
   </dl>
  </aside></div>
  <div className="section-rule"/>
  <div className="two-column"><div><div className="eyebrow">LOCATION</div><h2>Campus</h2><Link className="text-link" href="/contact#locations">Campus address and map ↗</Link></div><aside className="plain-panel"><h3>Explore NIBT</h3><p><Link className="text-link" href="/courses">Proposed courses ↗</Link></p><p><Link className="text-link" href="/admissions">Admissions and student numbers ↗</Link></p><p><Link className="text-link" href="/our-people">Our people ↗</Link></p><p><Link className="text-link" href="/governance">Governing body and structure ↗</Link></p></aside></div>
 </section>
 </>}
