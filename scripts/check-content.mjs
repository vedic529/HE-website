import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const courses=JSON.parse(fs.readFileSync(path.join(root,'src/data/courses.json'),'utf8'));
const policies=JSON.parse(fs.readFileSync(path.join(root,'src/data/policies.json'),'utf8'));
const errors=[];
if(courses.length!==2)errors.push('Expected 2 proposed courses');
if(policies.length!==48)errors.push(`Expected 48 registered policy titles; found ${policies.length}`);
if(new Set(policies.map(x=>x.name)).size!==policies.length)errors.push('Duplicate policy titles');
for(const c of courses){
 const total=c.structure.reduce((a,x)=>a+(x.creditPoints||0),0);
 const expected=c.slug==='bachelor-data-science'?144:96;
 if(total!==expected)errors.push(`${c.title}: credit point total ${total} does not equal ${expected}`);
 if(!c.accreditation.includes('not yet accredited'))errors.push(`${c.title}: missing unaccredited status`);
 console.log(`${c.title}: ${c.structure.length} subject slots, ${total} CP, ${c.electiveOptions.length} elective choices`);
}
for(const file of ['src/app/complaints/page.tsx','src/app/admissions/page.tsx','src/app/page.tsx','public/nibt-logo.png']){
 if(!fs.existsSync(path.join(root,file)))errors.push('Required site file absent: '+file);
}
if(fs.readFileSync(path.join(root,'src/app/complaints/page.tsx'),'utf8').includes('<form'))errors.push('Complaint form found, contradicting instructions');
console.log('Policy register titles:',policies.length);
if(errors.length){console.error('\nERRORS:',errors.join('\n'));process.exit(1)}
console.log('CONTENT CHECK PASSED. Regulatory evidence gaps remain; see REGULATORY_GAPS.md');
