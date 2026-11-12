import {NextResponse} from "next/server";
export function GET(){return NextResponse.json({status:'ok',application:'NIBT Website',version:'1.0.0'},{headers:{'Cache-Control':'no-store'}});}
