export const studentRecords=[
 {
  slug:"enrolments",anchor:"enrolment-records",title:"Enrolment records",
  summary:"The current course and unit enrolment for each student.",
  fields:["Student identifier and course of study","Units enrolled and current enrolment status","Commencement, change and withdrawal dates, where applicable"],
  update:"Enrolment changes must be recorded when authorised so the current status and change history remain accurate.",
  placeholder:"NIBT will add the approved student records system, the role authorised to update enrolments, and the procedure for checking changes against source documents.",
 },
 {
  slug:"progression",anchor:"progression-records",title:"Progression records",
  summary:"Results and decisions that show a student's progress through a course.",
  fields:["Unit results and credit or RPL decisions","Academic standing and progression decisions","Decision dates and links to the student's course record"],
  update:"Approved results and progression decisions must be entered promptly and corrected through an authorised process.",
  placeholder:"NIBT will add the approved results and progression process, decision authority, and method for verifying and updating these records.",
 },
 {
  slug:"completions",anchor:"course-completion-records",title:"Course completion records",
  summary:"The evidence and decision confirming that course requirements are met.",
  fields:["Completed units and credit points","Any outstanding course requirements","Completion eligibility decision and date"],
  update:"Completion status must reflect the latest approved results and credit decisions before a student is recorded as eligible.",
  placeholder:"NIBT will add the approved completion checklist, the role authorised to confirm completion, and the record of the final check.",
 },
 {
  slug:"qualifications-awarded",anchor:"qualification-award-records",title:"Qualifications awarded",
  summary:"The authorised award and its link to the completed course record.",
  fields:["Student identifier and qualification awarded","Authorised award decision and conferral date","Award identifier and linked record of results"],
  update:"Award details must be checked against the approved completion record before issue and kept current if corrected.",
  placeholder:"NIBT will add the approved award register, authorising role, and process for verifying and recording the award and any correction.",
 },
] as const;
