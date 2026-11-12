"use client";
import {useEffect,useRef,useState} from "react";
import {useRouter} from "next/navigation";
import {searchPages} from "@/lib/searchIndex";

export default function SiteSearch(){
 const [open,setOpen]=useState(false),[query,setQuery]=useState(""),[active,setActive]=useState(0);
 const input=useRef<HTMLInputElement>(null),router=useRouter();
 const results=searchPages(query);
 useEffect(()=>{if(open)input.current?.focus()},[open]);
 useEffect(()=>{function onKey(event:KeyboardEvent){if(event.key==="Escape")setOpen(false);if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==="k"){event.preventDefault();setOpen(true)}}window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
 function go(href:string){router.push(href);setOpen(false);setQuery("");setActive(0)}
 return <div className="site-search">
  <button type="button" className="search-toggle" aria-label="Search NIBT" aria-expanded={open} aria-controls="site-search-panel" onClick={()=>setOpen(!open)}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.5 15.5 5 5"/></svg><span>Search</span></button>
  {open&&<div className="search-panel" id="site-search-panel"><div className="search-panel-head"><label htmlFor="site-search-input">Search NIBT</label><button type="button" onClick={()=>setOpen(false)} aria-label="Close search">×</button></div>
   <input ref={input} id="site-search-input" className="site-search-input" role="combobox" aria-autocomplete="list" aria-controls="site-search-results" aria-expanded={results.length>0} aria-activedescendant={results.length?`search-result-${active}`:undefined} value={query} onChange={event=>{setQuery(event.target.value);setActive(0)}} onKeyDown={event=>{if(event.key==="ArrowDown"&&results.length){event.preventDefault();setActive((active+1)%results.length)}else if(event.key==="ArrowUp"&&results.length){event.preventDefault();setActive((active-1+results.length)%results.length)}else if(event.key==="Enter"&&results.length){event.preventDefault();go(results[active].href)}}} placeholder="Search pages and sections…" autoComplete="off"/>
   <div className="search-results" id="site-search-results" role="listbox">{results.map((result,index)=><button key={result.href} id={`search-result-${index}`} type="button" role="option" aria-selected={active===index} className={active===index?"search-result selected":"search-result"} onMouseEnter={()=>setActive(index)} onClick={()=>go(result.href)}><span><strong>{result.title}</strong><small>{result.section}</small></span><span aria-hidden="true">↗</span></button>)}{query.trim()&&!results.length&&<p className="search-empty">No matching pages or sections.</p>}{!query.trim()&&<p className="search-hint">Type a course, policy, service or topic.</p>}</div>
  </div>}
 </div>;
}
