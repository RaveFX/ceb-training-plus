export interface Program {
    id: string;
    name: string;
    details: string;
    targetGroup: String;
    branch: String;
  }
  
  export const PROGRAMS: Program[] = [
    {
      id: 'P001',
      name: 'Examination',
      details: 'Examination for clerks',
      targetGroup: "Clerks",
      branch: 'CEB Kandy',
    },
    {
      id: 'P001',
      name: 'Training',
      details: 'CPD',
      targetGroup: "Clerks",
      branch: 'CEB Wennappuwa',
    },
    {
      id: 'P001',
      name: 'Training',
      details: 'Training 001',
      targetGroup: "Clerks",
      branch: 'CEB Kurunegala',
    },
    {
      id: 'P001',
      name: 'Training',
      details: 'Training 002',
      targetGroup: "Clerks",
      branch: 'CEB Anuradhapura',
    },
    {
      id: 'P001',
      name: 'Practical',
      details: 'Practical 001',
      targetGroup: "Clerks",
      branch: 'CEB Colombo',
    },
    {
      id: 'P001',
      name: 'Training',
      details: 'Training 003',
      targetGroup: "Clerks",
      branch: 'CEB Galle',
    }
    
  ];
  