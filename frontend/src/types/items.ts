
export type Item = {
    id: string;
    user_id: string;
    name: string;
    description: string;
    quantity: number;
    status: string;
    created_at: string;
    updated_at: string;
  };
  
  export type OverviewProps = {
    data: Item[];
  };
  