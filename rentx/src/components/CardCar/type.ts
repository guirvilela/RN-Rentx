export interface CarProps {
  id: string;
  brand: string;
  name: string;
  about: string;
  fuel_type: "gasoline_motor" | "electric_motor" | "hybrid-motor";
  photos: string[];
  thumbnail: string;
  dates?: string[];
  periods?: string[];
  accessories: AccessoryProps[];
  rent: {
    period: string;
    price: number;
  };
}

interface AccessoryProps {
  type: string;
  name: string;
}
