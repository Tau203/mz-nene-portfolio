// ALL site content lives here. Source of truth: the CV and certificates. Dates are exactly as stated on the CV.
export const profile = {
  name: 'Mzikayise Nene',
  title: 'Construction & Industrial Site Supervisor',
  tagline: 'Specialising in Mechanical Supervision, Boilermaking, Structural Steelwork and Piping Operations.',
  intro: [
    'An experienced construction and industrial supervisor with a background in mechanical maintenance, boilermaking, structural steelwork, piping operations and industrial project execution.',
    'Experienced in coordinating site activities, supervising multidisciplinary teams, interpreting technical drawings, managing resources and maintaining quality and safety standards across demanding industrial environments.',
    'Committed to delivering work safely, efficiently and in accordance with project specifications and operational requirements.',
  ],
  location: 'Evaton West, Gauteng, South Africa',
  email: 'nenem7781@gmail.com',
  phone: '078 087 4425',
  phoneLink: '+27780874425',
  cv: 'documents/Mzikayise_Nene_Professional_CV.pdf',
  heroImage: 'images/industrial plant sunset.jpeg',
}
export const about = [
  'Mzikayise Nene is an experienced construction and industrial supervisor with practical experience across major engineering, construction, maintenance and industrial project environments.',
  'His professional background includes mechanical supervision, structural supervision, boilermaking, site operations, piping installation and steel erection.',
  'Throughout his career, he has worked with construction teams, engineering personnel, subcontractors and project management teams to coordinate site activities, allocate labour, monitor productivity, interpret technical drawings and ensure that work meets the required quality and safety standards.',
  'His experience includes industrial environments and projects associated with Murray & Roberts, Concor Engineering, Geecom and other contractors.',
  'He brings practical site knowledge, workforce leadership, problem-solving capabilities and a strong understanding of construction and operational requirements.',
]
export const expertise = [
  { icon: 'Cog', title: 'Mechanical Supervision', points: ['Maintenance and repair supervision', 'Equipment reconditioning', 'Mechanical installations', 'Equipment commissioning'] },
  { icon: 'Flame', title: 'Boilermaking Supervision', points: ['Boilermaking operations', 'Inspection and quality control', 'Workforce allocation', 'Maintenance coordination'] },
  { icon: 'Building2', title: 'Structural Steelwork', points: ['Structural fabrication', 'Steel construction', 'Technical drawing interpretation', 'Structural project coordination'] },
  { icon: 'Workflow', title: 'Piping Supervision', points: ['Piping installation', 'Piping maintenance and repair', 'Reading piping drawings and specifications', 'Pipe alignment and support inspection'] },
  { icon: 'Users', title: 'Site Supervision', points: ['Daily site operations', 'Workforce coordination', 'Subcontractor supervision', 'Site reporting and progress monitoring'] },
  { icon: 'ShieldCheck', title: 'Health, Safety and Quality', points: ['Risk assessment', 'Safety inspections', 'Toolbox talks', 'Quality assurance', 'Compliance monitoring'] },
]
export interface Job { title: string; company: string; project?: string; period: string; points: string[] }
export const jobs: Job[] = [
  { title: 'Supervisor — Piping', company: 'Mogale Site', project: 'Krugersdorp', period: 'Jul 2025 – Nov 2025', points: [
    'Oversaw installation, maintenance and repair of piping systems.', 'Managed daily activities and coordinated work teams.', 'Read and interpreted piping drawings, blueprints and technical specifications.', 'Planned work schedules and allocated tasks to pipe fitters and welders.', 'Coordinated materials and equipment requirements.', 'Worked with electrical, mechanical and civil departments.', 'Inspected completed piping work against quality standards.', 'Identified safety hazards and monitored compliance.', 'Ensured proper pipe support and alignment.', 'Monitored workforce performance and productivity.', 'Reported progress to project managers and engineers.', 'Recorded incidents and accidents.'] },
  { title: 'Mechanical Supervisor', company: 'SPS', project: 'Krugersdorp', period: 'Jul 2024 – Nov 2024', points: [
    'Oversaw maintenance, repairs and equipment reconditioning.', 'Managed and developed staff, including orientation, training and labour relations.', 'Enforced safety procedures.', 'Planned and coordinated maintenance operations.', 'Supervised equipment acquisition and inventory.', 'Conducted project inductions and daily briefings.', 'Provided health and safety guidance.', 'Led installation and commissioning activities.'] },
  { title: 'Boilermaking Supervisor', company: 'Geecom (Pty) Ltd', period: 'May 2023 – Sep 2023', points: [
    'Conducted inspections inside and outside the precipitator.', 'Ran and tested hammers and motors.', 'Delegated duties to workers.', 'Assisted management with work planning.', 'Checked that work was performed correctly.'] },
  { title: 'Boilermaking Supervisor', company: 'Murray & Roberts', project: 'Kusile Unit 1 & 2 Outage', period: 'Jan 2021 – Sep 2021', points: [
    'Supervised boiler maintenance activities.', 'Coordinated available resources.', 'Oversaw daily subordinate activities.', 'Provided coaching and on-the-job training.', 'Coordinated maintenance and statutory inspections.', 'Supported internal and external audits.', 'Maintained a safe and clean working environment.', 'Followed management instructions and organisational standards.'] },
  { title: 'Boilermaking Supervisor', company: 'Murray & Roberts', project: 'Kusile Unit 6', period: 'Apr 2017 – Dec 2020', points: [
    'Developed and implemented project work plans.', 'Identified construction issues through site surveys.', 'Coordinated construction crews and operations personnel.', 'Conducted quality control inspections.', 'Supported cost-saving initiatives.', 'Improved project delivery processes.', 'Maintained professional relationships with clients and project teams.'] },
  { title: 'Structural Supervisor', company: 'Murray & Roberts', project: 'Kusile Unit 5', period: 'Dec 2016 – Apr 2017', points: [
    'Assisted project engineers with construction supervision.', 'Organised and planned structural fabrication activities.', 'Reviewed technical drawings.', 'Identified discrepancies before fabrication.', 'Coordinated workforce deployment.', 'Improved work sequences and productivity.', 'Ensured compliance with quality, environmental and safety requirements.'] },
  { title: 'Structural Supervisor', company: 'Murray & Roberts', project: 'Venetia Headgear', period: 'Feb 2015 – Dec 2016', points: [
    'Planned and coordinated daily operations.', 'Managed workers, equipment and suppliers.', 'Supervised quality and safety standards.', 'Scheduled staff to meet production requirements.', 'Conducted inspections according to mining procedures.', 'Monitored project activities and construction progress.', 'Ensured construction work followed specifications.', 'Managed project operations and document control.'] },
  { title: 'Site Supervisor', company: 'Murray & Roberts', project: 'Sasol Secunda', period: 'Mar 2014 – Dec 2015', points: [
    'Supervised workers, subcontractors and site activities.', 'Prepared and presented site inductions.', 'Conducted safety briefings and toolbox talks.', 'Identified and assessed safety hazards.', 'Conducted regular inspections.', 'Assisted with work programme planning.', 'Completed site reports.', 'Attended site management meetings.', 'Monitored compliance with relevant legal requirements.', 'Raised safety concerns and implemented improvements.'] },
  { title: 'Supervisor', company: 'Concor Engineering', project: 'Sasolburg Wax Project', period: 'Feb 2013 – Feb 2014', points: [
    'Assisted project engineers with supervision and planning.', 'Coordinated fabrication and construction activities.', 'Reviewed technical drawings.', 'Identified drawing discrepancies.', 'Managed workforce allocation.', 'Monitored productivity and quality.', 'Supported compliance with project and safety requirements.'] },
  { title: 'Foreman', company: 'Concor Engineering', project: 'Kriel', period: 'Jan 2012 – Dec 2012', points: [
    'Coordinated tasks according to project priorities.', 'Prepared schedules and monitored attendance.', 'Allocated daily responsibilities.', 'Supervised machinery and equipment usage.', 'Ensured safety precautions and quality standards.', 'Resolved operational problems.', 'Reported progress to supervisors.'] },
  { title: 'Steel Erector', company: 'Concor Engineering', project: 'DMO Conveyors', period: 'Feb 2010 – Dec 2011', points: [
    'Assembled steel frameworks.', 'Worked with structural girders and beams.', 'Followed detailed engineering plans.', 'Worked with elevated work platforms and scissor lifts.', 'Participated in structural steel installation activities.'] },
]
export const projects = [
  { org: 'Mogale Site', place: 'Krugersdorp', role: 'Supervisor — Piping', kind: 'Piping' },
  { org: 'SPS', place: 'Krugersdorp', role: 'Mechanical Supervisor', kind: 'Mechanical' },
  { org: 'Geecom (Pty) Ltd', place: '', role: 'Boilermaking Supervisor', kind: 'Boilermaking' },
  { org: 'Murray & Roberts', place: 'Kusile Unit 1 & 2', role: 'Boilermaking Supervisor', kind: 'Boilermaking' },
  { org: 'Murray & Roberts', place: 'Kusile Unit 6', role: 'Boilermaking Supervisor', kind: 'Boilermaking' },
  { org: 'Murray & Roberts', place: 'Kusile Unit 5', role: 'Structural Supervisor', kind: 'Structural' },
  { org: 'Murray & Roberts', place: 'Venetia Headgear', role: 'Structural Supervisor', kind: 'Structural' },
  { org: 'Murray & Roberts', place: 'Sasol Secunda', role: 'Site Supervisor', kind: 'Site' },
  { org: 'Concor Engineering', place: 'Sasolburg Wax Project', role: 'Supervisor', kind: 'Site' },
  { org: 'Concor Engineering', place: 'Kriel', role: 'Foreman', kind: 'Site' },
  { org: 'Concor Engineering', place: 'DMO Conveyors', role: 'Steel Erector', kind: 'Structural' },
]
export const skills = [
  { group: 'Technical & Operational', items: ['Understanding technical drawings', 'Interpreting contract documents', 'Construction supervision', 'Mechanical maintenance coordination', 'Structural steelwork supervision', 'Piping installation supervision', 'Workforce allocation', 'Equipment supervision', 'Quality inspections', 'Project coordination', 'Site reporting', 'Resource management'] },
  { group: 'Leadership', items: ['Workforce motivation', 'Team management', 'Staff development', 'Conflict resolution', 'Communication', 'Delegation', 'Problem-solving', 'Decision-making'] },
  { group: 'Health & Safety', items: ['Safety procedures', 'Risk assessments', 'Site inspections', 'Toolbox talks', 'Safety inductions', 'Legal responsibilities', 'Occupational health and safety awareness'] },
  { group: 'Professional Attributes', items: ['Organisational skills', 'Time management', 'Reliability', 'Teamwork', 'Adaptability', 'Willingness to learn'] },
]
export interface Cert { title: string; provider: string; number: string; issued: string; renewal: string; saqa?: string; nqf?: string; credits?: string; image?: string }
export const certs: Cert[] = [
  { title: 'Boilermaker Trade Certificate', provider: 'QCTO — Quality Council for Trades & Occupations', number: '12/200887', issued: '12 May 2023', renewal: 'Not applicable', saqa: 'Trade test date: 7 February 2023 · OFO 651302' },
  { title: 'Occupational Health and Safety Legislation', provider: 'EFS Skilled Labour Training', number: 'L/029/2026', issued: '7 February 2026', renewal: '7 February 2028' },
  { title: 'Basic Life Support and First Aid — Level 1', provider: 'EFS Skilled Labour Training', number: 'EC/031/2026', issued: '11 February 2026', renewal: '11 February 2029', saqa: '119567', nqf: '1', credits: '5' },
  { title: 'Continuous Risk Assessment in a Workplace', provider: 'EFS Skilled Labour Training', number: 'H/052/2026', issued: '7 February 2026', renewal: '7 February 2028', saqa: '120330' },
  { title: 'Fall Arrest Techniques When Working at Height', provider: 'EFS Skilled Labour Training', number: 'W/057/2026', issued: '10 February 2026', renewal: '10 February 2028', saqa: '229998', nqf: '1', credits: '2' },
  { title: 'Select, Use and Care for Engineering Power Tools', provider: 'EFS Skilled Labour Training', number: 'EPT/025/2026', issued: '8 February 2026', renewal: 'Not stated on certificate', saqa: '12219' },
]
export const safety = ['Occupational health and safety awareness', 'Mine health and safety legislation awareness', 'Workplace risk assessment', 'Site inspections', 'Toolbox talks', 'Safety inductions', 'Fall arrest training', 'First aid training', 'Safe use of engineering power tools', 'Equipment and workplace hazard awareness']
export const kindImages: Record<string, string> = {
  Boilermaking: 'images/boiler power station.jpeg',
  Piping: 'images/industrial piping.jpeg',
  Structural: 'images/steel structure construction site.jpeg',
  Site: 'images/construction supervisor hard hat.jpeg',
  Mechanical: 'images/industrial plant sunset.jpeg',
}