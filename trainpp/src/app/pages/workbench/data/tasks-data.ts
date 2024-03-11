export interface Task {
  id: string;
  task: string;
  rDate: Date;
}

export const TASKS: Task[] = [
  {
    id: "P001",
    task: "Launch program : Training 001",
    rDate: new Date("2024/02/27")
  },
  {
    id: "P001",
    task: "Recommend trainee list - Training 001",
    rDate: new Date("2024/02/26")
  },
  {
    id: "P001",
    task: "New Program Request - Forwarded from DGM",
    rDate: new Date("2024/02/25")
  },
  {
    id: "P001",
    task: "Recommend Leave - A.E. Edirimanne.",
    rDate: new Date("2024/02/24")
  },
  {
    id: "P001",
    task: "Recommend trainee allowance",
    rDate: new Date("2024/02/26")
  }
];
