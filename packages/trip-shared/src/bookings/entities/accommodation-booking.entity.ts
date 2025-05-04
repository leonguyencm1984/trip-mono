import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Accommodation } from '../../trips/entities/accommodation.entity';
import { Location } from '../../trips/entities/location.entity';

@Entity()
export class AccommodationBooking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Accommodation)
  rooms!: Accommodation;

  @Column()
  isCheckedIn!: boolean;

  @Column()
  checkinDate!: Date;

  @Column()
  isCheckout!: boolean;

  @Column()
  checkoutDate!: Date;

  @ManyToOne(() => Location)
  place!: Location;
}