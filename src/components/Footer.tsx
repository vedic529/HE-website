import Link from "next/link";
import {abn,campusAddress,legalName} from "@/lib/data";
import {primaryNavigation} from "@/lib/navigation";
export default function Footer(){return <footer className="site-footer"><div className="container footer-grid">
 <div><div className="footer-brand">NIBT</div><p>National Institute of Business and Technology</p><p className="muted-light">Higher education registration in progress</p></div>
 <div><h3>Explore</h3>{primaryNavigation.slice(0,4).map(x=><Link key={x.href} href={x.href}>{x.label}</Link>)}</div>
 <div><h3>Information</h3>{primaryNavigation.slice(4).map(x=><Link key={x.href} href={x.href}>{x.label}</Link>)}<Link href="/governance">Governance &amp; Standing</Link></div>
 <div><h3>Institution details</h3><p>{legalName}<br/>ABN {abn}</p><p>Campus address:<br/>{campusAddress}</p></div>
 </div><div className="container footer-base"><div className="footer-identity"><span>© {new Date().getFullYear()} {legalName}</span><span>NIBT acknowledges Aboriginal and Torres Strait Islander peoples as the Traditional Custodians of the lands on which we learn and work.</span></div><div className="footer-registrations"><span>ABN: {abn}</span><span>CRICOS CODE: &lt;insert&gt;</span><span>TEQSA provider number: &lt;insert&gt;</span></div></div></footer>}
