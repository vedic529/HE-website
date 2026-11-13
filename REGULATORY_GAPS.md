# NIBT website — evidence gaps and regulatory controls

**Status:** Work-in-progress website prototype, not certified as HESF-compliant.
**Regulatory reference:** Higher Education Standards Framework (Threshold Standards) 2021 as amended on 14 July 2026, https://www.legislation.gov.au/F2021L00488/latest.
**TEQSA:** https://www.teqsa.gov.au/guides-resources/resources/application-guide-initial-registration-prospective-higher-education-provider.

## Public disclosure gaps — HESF 7.3.1

| Clause | Website coverage | Still needed from NIBT |
|---|---|---|
| 7.3.1(a) | Legal identity and regulatory status on About; student visa status on Admissions | Confirmation of trading name registration, current regulatory status and CRICOS authorisation |
| 7.3.1(b) | NIBT Constitution linked from About | Confirm whether an ASIC company certificate or other establishing record must also be published |
| 7.3.1(c) | Leadership placeholders on Governance & standing | Verified names and titles of corporate governing body members and senior executives; composition proportions under amended wording |
| 7.3.1(d) | Financial standing placeholder on Governance & standing | Approved, substantiated summary of financial standing; ASIC solvency resolution alone is insufficient |
| 7.3.1(e) | Student numbers placeholder on Admissions | Indicative total student enrolment figures |
| 7.3.1(f) (2026 amendment) | Workforce profile placeholder on Governance & standing | Employee numbers by ongoing, fixed-term and casual categories; governance amendments scheduled from 1 July 2027 for non-Table A providers |
| 7.3.1(g) (2026 amendment) | Organisational chart placeholder on Governance & standing; teaching units placeholder on Courses | Verified high-level organisational chart with teaching units |
| 7.3.1(h) (2026 amendment) | Proposed Sydney campus and overseas-location placeholder on Contact & location | Confirm any other Australian/offshore locations and whether the location is approved for offering HE |
| 7.3.1(i) | Campus and facility placeholders on Contact & location; resource and service placeholders on Student support | Verified campus facilities, equipment, libraries, educational support, and accessible learning resources |
| 7.3.1(j) | Two proposed courses listed with annual-enrolment placeholders on Courses | Estimated annual enrolments for each course |
| 7.3.1(k) | Separate course-delivery and research-training arrangement placeholders on Courses | Confirm whether any third-party course delivery or research training arrangements exist |
| 7.3.1(l) | Conditional three-report placeholder on Governance & standing | Determine if public annual reports are legally required; if yes, publish most recent three |
| 7.3.1(m) | How-to-complain information and submission-channel placeholder on Complaints & appeals; no form | Final approved complaint policy, submission channel, timelines, external review details |
| 7.3.1(n) | Legal entity and proposed campus address on Contact & location | Verified institute email/phone and other current contact channels |

## Course disclosures — HESF 7.3.2 and 7.2

- **Accreditation:** Clearly displays courses as not yet accredited. Final status must be updated only after regulator confirmation.
- **Qualification / AQF:** Bachelor of Data Science AQF Level 7; Master of Data Science AQF Level 9. Qualification categories are AQF recognised; this does **not** mean these proposed courses are accredited.
- **Professional registration:** Determine whether any professional-body recognition is required to practise; display verified result. Do not imply recognition without evidence.
- **International authorisation:** Proposed international market does not mean CRICOS authorisation. Not authorised for overseas student visa enrolments unless approved.
- **Duration:** Source subject lists indicate six Bachelor semesters and four Master semesters. Formal duration, full-/part-time options and modes of delivery require approved course details.
- **Fees:** $40,000 per year for the Bachelor and $45,000 per year for the Master supplied. Confirm other charges, payment plans and refund conditions.
- **Credit/RPL and articulation:** Publish approved policy and information channel once completed.
- **Course design inconsistency:** Bachelor elective slot descriptions sometimes say 5 CP but numeric column records 4 CP; the Master elective narrative refers to 5/4/3 CP while numeric slots and available electives record 4 CP. The prototype uses 4 CP for all numbered elective placeholders in the provided tables, without adopting inconsistent text. Reconcile against definitive approved course designs before publication.
- **Entry:** Publish course-specific academic and English language selection criteria. Website currently uses clearly labelled pending information.
- **Under 18:** Current admissions planning says applicants must be at least 18; verify against final policy.

## Internal systems — HESF 7.3.3

This public website **does not** implement a full student management system, academic progression/completion/award records, case management of formal complaints, misconduct or critical incidents, or an actual learning management system. The Portal, Complaints and Governance pages identify the required records and protections as pending institutional work. NIBT needs independently secured systems with verified information management policies, access controls, retention schedules, backups, audit trails and role authorisation. It also needs controlled supporting evidence to demonstrate compliance with the Higher Education Standards Framework.

The expression-of-interest form stores the minimum fields needed for demonstration in a locally encrypted NDJSON file. It is **not** equivalent to a production student application or admissions workflow. No complaint form is present.

## Policies

48 policy titles were copied from `Policy Register V.2.0(1).xlsx`. Its Final Version column is blank; no actual approved policy documents were supplied for publication. Accordingly, the website explicitly labels each entry as **pending approved publication**. Only publish approved, current, student-facing versions at the designated links.

## Go-live blockers

1. Obtain required TEQSA registration and course accreditation and reflect actual regulatory status accurately.
2. If recruiting overseas student visa holders, verify CRICOS authorisation before advertising availability/enrolling.
3. Resolve course structure, duration, fees, admissions and professional recognition disclosures against approved documents.
4. Fill all public-information gaps required by Standard 7.3, including signed-off contact and complaint channels.
5. Make final student-facing policies accessible and verify reasonable adjustments and accessibility.
6. Complete privacy, security, retention and operational review of any form that collects personal data.
7. Establish and demonstrate LMS, student records, secure incident/complaints processes, backups and information assurance. Do not treat the website prototype as satisfaction of Standard 7.3.3.
8. Conduct security, accessibility, cross-browser, backup/recovery and deployment validation on actual production infrastructure.
9. Perform internal policy/compliance sign-off before `NEXT_PUBLIC_SITE_READY=true` is set.

## Transitional update
TEQSA states that the 2026 governance amendments (including the 7.3.1 public governance/employee-count changes) apply to most non-Table-A providers from **1 July 2027**. NIBT's proposed website structure anticipates these. See https://www.teqsa.gov.au/how-we-regulate/higher-education-standards-framework-2021/overview-changes.
