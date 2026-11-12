import fs from 'node:fs';
import path from 'node:path';
import {createDecipheriv} from 'node:crypto';
const root=process.cwd();
const local=path.join(root,'.env.local');
if(fs.existsSync(local)){
 for(const l of fs.readFileSync(local,'utf8').split(/\r?\n/)){
  const i=l.indexOf('=');if(i>0&&l[0]!=='#'){const k=l.slice(0,i);if(!process.env[k])process.env[k]=l.slice(i+1)}
 }
}
const key=process.env.NIBT_DATA_KEY||'';
if(!/^[a-f\d]{64}$/i.test(key)){console.error('NIBT_DATA_KEY not configured');process.exit(1)}
const file=path.join(root,'data','enquiries.ndjson');
if(!fs.existsSync(file)){console.log('No local expressions of interest submitted yet.');process.exit(0)}
const entries=fs.readFileSync(file,'utf8').trim().split('\n');
console.log('LOCAL ENCRYPTED EXPRESSION-OF-INTEREST RECORDS');
for(const line of entries){if(!line)continue;try{
 const [a,b,c]=line.split('.');const d=createDecipheriv('aes-256-gcm',Buffer.from(key,'hex'),Buffer.from(a,'base64'));
 d.setAuthTag(Buffer.from(b,'base64'));
 const content=JSON.parse(Buffer.concat([d.update(Buffer.from(c,'base64')),d.final()]).toString('utf8'));
 console.log('---\n'+JSON.stringify(content,null,2));
}catch{console.error('Could not decrypt a record. Check key and data integrity.')}}
