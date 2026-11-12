import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {courses} from "@/lib/data";
import {createReference,storeEnquiry,type Enquiry} from "@/lib/enquiries";
export const runtime='nodejs';
export const dynamic='force-dynamic';
const limits=new Map<string,{count:number;since:number}>();
function fail(message:string,status=400){return NextResponse.json({message},{status,headers:{'Cache-Control':'no-store'}});}
export async function POST(request:NextRequest){
 const origin=request.headers.get('origin');if(origin){let a:URL;try{a=new URL(origin)}catch{return fail('Invalid origin',403)}if(a.host!==request.nextUrl.host)return fail('Cross-origin submissions are not allowed.',403);}
 const len=Number(request.headers.get('content-length')||0);if(len>10000)return fail('Request exceeds permitted size.',413);
 if(!(request.headers.get('content-type')||'').startsWith('application/json'))return fail('Expected JSON submission.',415);
 const ip=(request.headers.get('x-forwarded-for')||'local').split(',')[0].trim().slice(0,128);const now=Date.now();const current=limits.get(ip);if(current&&now-current.since<3600000){if(current.count>=5)return fail('Too many requests. Please try again later.',429);current.count++;}else limits.set(ip,{count:1,since:now});if(limits.size>3000){for(const [k,v] of limits){if(now-v.since>3600000)limits.delete(k);}}
 let d:Record<string,unknown>;try{d=await request.json();if(!d||Array.isArray(d)||typeof d!=='object')return fail('Invalid submission.');}catch{return fail('Invalid JSON.');}
 const get=(k:string)=>typeof d[k]==='string'?(d[k] as string).trim():'';
 if(get('website'))return NextResponse.json({message:'Thank you.'},{status:200});
 const fullName=get('fullName'),email=get('email').toLowerCase(),course=get('course'),residency=get('residency'),message=get('message');
 if(fullName.length<2||fullName.length>120||/[<>]/.test(fullName))return fail('Enter a valid name (2–120 characters).');
 if(email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return fail('Enter a valid email address.');
 if(!courses.some(c=>c.slug===course))return fail('Please choose a proposed course.');
 if(!['domestic','international'].includes(residency))return fail('Please select a student category.');
 if(message.length>300||/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(message))return fail('Enquiry must be 300 characters or fewer.');
 if(d.consent!==true)return fail('Please confirm the privacy acknowledgement.');
 const entry:Enquiry={reference:createReference(),createdAt:new Date().toISOString(),fullName,email,course,residency,message,consent:true};
 try{await storeEnquiry(entry)}catch{return fail('Local enquiry storage is not configured. Contact the website administrator.',503);}
 return NextResponse.json({message:'Your expression of interest has been stored locally. This is not an enrolment application or admission offer.',reference:entry.reference},{status:201,headers:{'Cache-Control':'no-store'}});
}
