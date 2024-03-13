export interface Participant {
    id: string;
    name: string;
    role: String;
    joined_date: Date;
    email: string;
    contact_no: string;
  }
  
  export const PARTICIPANTS: Participant[] = [
    {
        id: "st001",
        name: "Olivia Rhye",
        role: "Clerk",
        joined_date: new Date('2024/01/27'),
        email: "oliviarhyne@ceb.lk",
        contact_no: "07712365490"
    },
    {
        id: "st002",
        name: "Lana Steiner",
        role: "Clerk",
        joined_date: new Date('10/01/2024'),
        email: "lana@ceb.lk",
        contact_no: "0110562391"
    },
    {
        id: "st003",
        name: "Demi Wilkinson",
        role: "Clerk",
        joined_date: new Date('10/01/2024'),
        email: "demiwilkinson@ceb.lk",
        contact_no: "0372568169"
    }
  ];
  