import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from 'src/typeorm/entities/Customer';

interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
}

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  creatCustomer(customerInfo: CustomerInfo) {
    const newCustomer = this.customerRepository.create({
      ...customerInfo,
    });

    return this.customerRepository.save(newCustomer);
  }
}