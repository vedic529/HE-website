import type {Metadata} from "next";
import PageHero from "@/components/PageHero";
import {campusAddress} from "@/lib/data";

export const metadata:Metadata={title:"Contact and Campus"};

export default function Contact(){return <>
 <PageHero eyebrow="VISIT NIBT" title="Contact & location">Campus location and contact information.</PageHero>
 <section className="content-section container">
  <div className="two-column" id="locations"><div className="campus-location" id="campus-overview"><div className="eyebrow">LOCATION</div><h2>Campus</h2><address>{campusAddress}</address><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=841+George+St+Haymarket+NSW+2000+Australia" target="_blank" rel="noopener noreferrer">View on Google Maps ↗</a></div><aside className="contact-card" id="provider-contact"><h3>Get in Touch</h3><dl><div><dt>Email</dt><dd>To be added</dd></div><div><dt>Phone number</dt><dd>To be added</dd></div></dl></aside></div>
  <div className="section-rule"/>
  <div className="two-column"><div id="facilities"><div className="eyebrow">CAMPUS FACILITIES</div><h2>Facilities for learning</h2><p>Details of classrooms, computing facilities, study spaces, accessibility features and other campus equipment will be added here once NIBT verifies what will be available to students.</p></div><div id="overseas-locations"><h3>Overseas locations</h3><p>NIBT has not confirmed any overseas location for higher education delivery. If overseas delivery is planned, the location and courses offered there will be listed here.</p></div></div>
 </section>
 </>}
