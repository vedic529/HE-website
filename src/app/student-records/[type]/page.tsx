import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import PageHero from "@/components/PageHero";
import {studentRecords} from "@/lib/studentRecords";

export function generateStaticParams(){return studentRecords.map(record=>({type:record.slug}));}

export async function generateMetadata({params}:{params:Promise<{type:string}>}):Promise<Metadata>{
 const {type}=await params;
 return {title:studentRecords.find(record=>record.slug===type)?.title||"Student records"};
}

export default async function StudentRecord({params}:{params:Promise<{type:string}>}){
 const {type}=await params;
 const record=studentRecords.find(item=>item.slug===type);
 if(!record)notFound();

 return <>
  <PageHero eyebrow="STUDENT RECORDS" title={record.title}>{record.summary}</PageHero>
  <section className="content-section container record-guide">
   <div className="eyebrow">RECORD CONTENT</div><h2>Information to maintain</h2>
   <ul className="record-fields">{record.fields.map(field=><li key={field}>{field}</li>)}</ul>
   <div className="section-rule"/>
   <h2>Keeping the record current</h2><p>{record.update}</p>
   <div className="record-placeholder"><h2>To be added</h2><p>{record.placeholder}</p></div>
   <p className="footnote">Individual student records are confidential and are not published on this website.</p>
   <Link href="/portal#student-records" className="back-link">← Back to academic recordkeeping</Link>
  </section>
 </>;
}
