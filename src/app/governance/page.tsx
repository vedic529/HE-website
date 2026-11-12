import type {Metadata} from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata:Metadata={title:"Governance and institutional standing"};

export default function Governance(){return <>
 <PageHero eyebrow="OUR INSTITUTION" title="Governance & standing">Information about NIBT&apos;s leadership, financial standing and organisational structure.</PageHero>
 <section className="content-section container">
  <div className="eyebrow">LEADERSHIP</div><h2>Governing body and senior executive</h2>
  <div className="two-column"><div id="governing-body"><h3>Governing body</h3><p>The names and roles of NIBT&apos;s governing body members will be published here when the approved governance record is available.</p></div><div id="senior-executive"><h3>Senior executive</h3><p>The names and roles of NIBT&apos;s senior executive will be published here when verified.</p></div></div>
  <div className="section-rule"/>
  <div className="two-column"><div id="organisational-chart"><div className="eyebrow">ORGANISATIONAL STRUCTURE</div><h2>How NIBT is organised</h2><p>We need the high-level organisational chart for NIBT here. It should show the governing body, senior executive and the units responsible for teaching. An accessible text description should accompany the approved chart.</p></div><aside className="plain-panel" id="financial-standing"><h3>Financial standing</h3><p>An approved summary of NIBT&apos;s financial standing will be published here once current supporting information is available.</p></aside></div>
  <div className="section-rule"/>
  <div className="two-column"><div><h3>Workforce profile</h3><p>Employee numbers by ongoing, fixed-term and casual categories will be published when the applicable requirements take effect and NIBT has approved figures.</p></div><div id="annual-reports"><h3>Annual reports</h3><p>NIBT will confirm whether it is required to publish annual reports. If so, links to its three most recent public annual reports will appear here. No approved reports have been supplied for publication.</p></div></div>
  <div className="section-rule"/>
  <div id="complaint-response-records"><span id="misconduct-response-records"/><span id="academic-integrity-responses"/><span id="research-integrity-responses"/><span id="critical-incident-responses"/><span id="compliance-evidence"/><p>Information about case records and compliance evidence will be linked with NIBT&apos;s approved procedures.</p><Link className="text-link" href="/policies#institutional-assurance">Case records and compliance evidence ↗</Link></div>
 </section>
 </>}
