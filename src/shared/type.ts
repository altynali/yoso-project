export type MyOptionType = {
  value: string;
  label: string;
};

export type MyWorkerType = {
  id: number;
  fullName: string;
  email: string;
  jobPosition: string;
  workingTime: string;
};

export type NewWorkerType = Omit<MyWorkerType, "id">;
