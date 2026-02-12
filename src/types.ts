import {ReactNode} from 'react';
interface MainRentalProp {
  rentalCount: number;
}

interface OfferCardType {
  price: number;
  image: string;
  name: string;
  type: string;
  status: string;
}

interface PrivateRouteType {
  children: ReactNode;
}

export type {MainRentalProp, OfferCardType, PrivateRouteType};
