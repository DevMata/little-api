import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUser(userId: number): Promise<User> {
    const user = await this.userRepository.findOne(userId);
    if (!user) {
      throw new NotFoundException('The user does not exist.');
    }
    return user;
  }

  createUser(createUser: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUser);
  }

  async updateUser(userId: number, updateUser: UpdateUserDto): Promise<User> {
    const user = await this.getUser(userId);
    return this.userRepository.save({ ...user, ...updateUser });
  }

  async deleteUser(userId): Promise<void> {
    await this.getUser(userId);
    await this.userRepository.delete(userId);
  }
}
