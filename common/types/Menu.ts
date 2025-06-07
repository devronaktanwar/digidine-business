type Status = "ACTIVE" | "INACTIVE";
export interface IItemCardProps {
  image: string;
  label: string;
  description: string;
  sellingPrice: number;
  originalPrice: number;
  type: string;
  status: Status;
}
