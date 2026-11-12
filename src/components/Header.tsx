"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {primaryNavigation} from "@/lib/navigation";
import SiteSearch from "@/components/SiteSearch";
export default function Header(){
 const [open,setOpen]=useState(false);const p=usePathname();
 return <><div className="toprule"/><header className="site-header"><div className="container nav-wrap">
 <Link aria-label="NIBT homepage" href="/" className="brand" onClick={()=>setOpen(false)}><img alt="NIBT" src="/nibt-logo.png" draggable={false} /></Link>
 <button className="menu-toggle" aria-expanded={open} aria-controls="nibt-navigation" onClick={()=>setOpen(!open)}>{open?"Close menu":"Menu"}<span aria-hidden="true">{open?" ×":" ☰"}</span></button>
 <nav id="nibt-navigation" className={open?"navigation open":"navigation"} aria-label="Main navigation">{primaryNavigation.map(x=><Link key={x.href} onClick={()=>setOpen(false)} className={p===x.href||p.startsWith(x.href+"/")?"nav-link active":"nav-link"} href={x.href}>{x.label}</Link>)}</nav><SiteSearch/>
 </div></header></>;
}
