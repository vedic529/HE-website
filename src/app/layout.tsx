import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Notice from "@/components/Notice";
export const metadata:Metadata={title:{default:"NIBT | National Institute of Business and Technology",template:"%s | NIBT"},description:"NIBT is preparing Bachelor and Master of Data Science courses in Australia, subject to regulatory approvals.",robots:{index:process.env.NEXT_PUBLIC_SITE_READY==="true",follow:process.env.NEXT_PUBLIC_SITE_READY==="true"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-AU"><body><a href="#main-content" className="skip-link">Skip to main content</a><Header/><Notice/><main id="main-content">{children}</main><Footer/></body></html>}
