import {createCipheriv,randomBytes,createHash} from "node:crypto";
import {appendFile,mkdir} from "node:fs/promises";
import path from "node:path";
export type Enquiry={reference:string;createdAt:string;fullName:string;email:string;course:string;residency:string;message:string;consent:boolean};
const storage=path.resolve(process.cwd(),'data','enquiries.ndjson');
export function getKey():Buffer{const raw=process.env.NIBT_DATA_KEY||'';if(!/^[a-f0-9]{64}$/i.test(raw))throw new Error('NIBT_DATA_KEY must contain 64 hexadecimal characters');return Buffer.from(raw,'hex');}
export function encryptEnquiry(entry:Enquiry):string{const iv=randomBytes(12);const c=createCipheriv('aes-256-gcm',getKey(),iv);const data=Buffer.concat([c.update(JSON.stringify(entry),'utf8'),c.final()]);return [iv.toString('base64'),c.getAuthTag().toString('base64'),data.toString('base64')].join('.');}
export async function storeEnquiry(entry:Enquiry):Promise<void>{await mkdir(path.dirname(storage),{recursive:true});await appendFile(storage,encryptEnquiry(entry)+'\n',{encoding:'utf8',mode:0o600});}
export function createReference():string{return 'NIBT-'+createHash('sha256').update(randomBytes(32)).digest('hex').slice(0,10).toUpperCase();}
