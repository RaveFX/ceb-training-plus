export interface Program {
  id: string;
  name: string;
  targetGroup: String;
  sDate: Date;
  eDate: Date;
  status: String;
}

export const PROGRAMS: Program[] = [
  {
    id: 'P001',
    name: 'Training 001',
    targetGroup: "Clerks",
    sDate: new Date('2024/02/27'),
    eDate: new Date('2024/02/29'),
    status: 'on going',
  },
  {
    id: 'P001',
    name: 'Training 002',
    targetGroup: "Clerks",
    sDate: new Date('2024/02/26'),
    eDate: new Date('2024/02/29'),
    status: 'pending',
  },
  {
    id: 'P001',
    name: 'Training 003',
    targetGroup: "Clerks",
    sDate: new Date('2024/02/27'),
    eDate: new Date('2024/02/29'),
    status: 'pending',
  },
  {
    id: 'P001',
    name: 'Training 001',
    targetGroup: "Clerks",
    sDate: new Date('2024/02/27'),
    eDate: new Date('2024/02/29'),
    status: 'on going',
  },
  {
    id: 'P001',
    name: 'Training 001',
    targetGroup: "Clerks",
    sDate: new Date('2024/02/27'),
    eDate: new Date('2024/02/29'),
    status: 'on going',
  },
  {
    id: 'P001',
    name: 'Training 001',
    targetGroup: "Clerks",
    sDate: new Date('2024/02/27'),
    eDate: new Date('2024/02/29'),
    status: 'on going',
  }
  
];
