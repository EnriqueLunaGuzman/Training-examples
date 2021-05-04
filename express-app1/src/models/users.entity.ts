import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import Address from '../models/address.entity';
import Company from '../models/company.entity';

@Entity()
class Users {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column({unique: true})
    email?: string;

    @Column()
    password?: string;

    @Column()
    phone?: string;

    @OneToOne (() => Address, {cascade: true})
    @JoinColumn( {name: 'addressId'} )
    address?: Address;

    @OneToOne (() => Company, {cascade: true})
    @JoinColumn( {name: 'companyId'} )
    company?: Company;
}

export default Users;