import type {Metadata} from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata:Metadata={title:"Complaints and Appeals"};

export default function Complaints(){return <>
 <PageHero eyebrow="STUDENT RIGHTS" title="Complaints and appeals">Information for raising a concern about NIBT or seeking review of a decision.</PageHero>
 <section className="content-section container" id="lodging-complaint">
  <div className="eyebrow">RAISING A CONCERN</div><h2>How to lodge a complaint</h2>
  <p className="lead">To lodge a complaint about NIBT, put your concern in writing and include relevant dates and supporting documents. The designated submission contact will be published here when confirmed.</p>
  <p>For the full process, see the policy section below.</p>
  <Link href="/policies#complaints-appeal-policy" className="text-link">Complaints and Appeal Policy ↗</Link>
  <p className="footnote">The approved Complaints and Appeal Policy will be available at this link once published.</p>
 </section>
 </>}
