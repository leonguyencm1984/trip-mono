import { PaymentInfo } from '../../payments/entities/payment-info.entity';
import { Trip } from '../../trips/entities/trip.entity';
export declare enum Status {
}
export declare class User {
    id: string;
    user_name: string;
    email: string;
    phone: string;
    user_password: string;
    fullName: string;
    lastName: string;
    firstName: string;
    previousPassword: string;
    trips: Trip[];
    roleId: number;
    paymentInfo: PaymentInfo;
    status: Status;
    hash: string;
    createdAt: Date;
    updatedAt: Date;
}
