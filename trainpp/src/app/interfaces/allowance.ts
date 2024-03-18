export interface Allowance {
    id: string;
    name: string;
    participants: {
      id: string;
      fullName: string;
      date_joined: string;
      email: string;
      contact_number: string;
      allowance: number;
    }[];
  }
  