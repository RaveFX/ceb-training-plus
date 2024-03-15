export interface Result {
    epf_no: number;
    name: string;
    results: { sName: string; result: number; }[];
    overall_result: string;
  }
  
  export const RESULTS: Result[] = [
    {
        epf_no: 333526,
        name: "Olivia Rhye",
        results: [
          {
            sName: "ABC",
            result: 75
          },
          {
            sName: "ABC",
            result: 75
          }
        ],
        overall_result: "passed"
      },
      {
        epf_no: 333527,
        name: "John Doe",
        results: [
          {
            sName: "ABC",
            result: 75
          },
          {
            sName: "ABC",
            result: 75
          }
        ],
        overall_result: "Passed"
      }
  ];
  