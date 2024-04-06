import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class UserService {
    constructor(    
        // @InjectRepository(User)
        // private userRepository : Repository<User>
    ){}
        
}
