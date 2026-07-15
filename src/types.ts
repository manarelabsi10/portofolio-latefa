export interface TestScenario {
  id: string;
  title: string;
  preCondition?: string;
  steps: string[];
  expectedResult: string;
  actualResult: string;
  status: 'Pass' | 'Fail';
}

export interface BugReport {
  id: string;
  title: string;
  description: string;
  stepsToReproduce: string[];
  expectedResult: string;
  actualResult: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'Closed' | 'In Progress';
  defectType: 'Functional' | 'Visual' | 'Performance' | 'UI/UX';
}

export interface QAProject {
  id: string;
  title: string;
  subtitle: string;
  briefDescription: string;
  projectOverview: string;
  testingScope: string;
  modulesTested: string[];
  featuresTested: string[];
  testingApproach: string;
  toolsUsed: string[];
  testPlanSummary: string;
  testScenarios: TestScenario[];
  bugReports: BugReport[];
  lessonsLearned: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress';
  link?: string;
}

export interface EducationInfo {
  degree: string;
  school: string;
  location: string;
  duration: string;
  gpa: string;
  graduationProject: {
    title: string;
    grade: string;
    details: string;
  };
  awards?: string[];
}
