export type UserRole =
  | 'superadmin'
  | 'warehouse'
  | 'ministry'
  | 'region'
  | 'district'
  | 'branch';

export interface IUser {
  id: number;
  full_name: string;
  username: string;
  role: UserRole;
  organization_id: number | null;
  is_active: boolean;
  created_at: string;
}
