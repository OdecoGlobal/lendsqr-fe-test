interface Guarantor {
  full_name: string;
  phone_number: string;
  email_address: string;
  relationship: string;
}

export interface User {
  id: number;
  user_id: string;
  full_name: string;
  user_name: string;
  email: string;
  account_balance: string;
  account_number: string;
  bank: string;
  user_tier: 1 | 2 | 3;
  organization: string;
  phone_number: string;
  date_joined: string;
  status: string;
  bvn: number;
  gender: string;
  marital_status: string;
  children: number;
  type_of_residence: string;
  education_level: string;
  employment_status: string;
  employment_sector: string;
  employment_duration: number;
  office_email: string;
  monthly_income: number;
  loan_repayment: number;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor: Guarantor[];
}

export interface FilterData {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}
