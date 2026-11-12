import type {Metadata} from "next";
import PageHero from "@/components/PageHero";

export const metadata:Metadata={title:"Student Support"};

export default function Support(){return <>
 <PageHero eyebrow="STUDENT EXPERIENCE" title="Student support">Learning resources and services being developed for NIBT students.</PageHero>
 <section className="content-section container">
  <p className="lead">NIBT is developing its student support arrangements alongside its proposed courses. Access details will be published when each resource and service is confirmed.</p>
  <div id="learning-resources"><div className="eyebrow">LEARNING RESOURCES</div><h2>Resources for study</h2><p>Course readings, digital learning materials, library access and the learning management system are being planned. NIBT will publish the available resources, how students access them, and any opening hours or technical requirements once confirmed.</p></div>
  <div className="section-rule"/>
  <div id="student-services"><div className="eyebrow">STUDENT SERVICES</div><h2>Support during study</h2><div className="grid-cards"><article className="detail-card"><h3>Academic support</h3><p>Consultation with teaching staff and learning assistance are planned. Contact methods and availability will be added when confirmed.</p></article><article className="detail-card"><h3>Wellbeing and accessibility</h3><p>Wellbeing pathways, reasonable adjustments and accessibility support are being finalised. NIBT will publish how students can request help.</p></article><article className="detail-card"><h3>Orientation and digital help</h3><p>Orientation and guidance for using learning systems will be available when the relevant arrangements are operational.</p></article></div></div>
 </section>
 </>}
