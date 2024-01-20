import { Injectable } from '@nestjs/common';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  private readonly students: Student[] = [
    {
      id: 1,
      name: 'Hamza ',
      courses: ['Math', 'English', 'Physics'],
      contact: {
        email: 'hamzarehman26515@gmail.com',
        phone: '03489502243',
      },
    },
    {
      id: 2,
      name: 'Kokab',
      courses: ['Math', 'English', 'Physics'],
      contact: {
        email: 'kokab@gmail.com',
        phone: '03786925963',
      },
    },
    {
      id: 1,
      name: 'Abdullah',
      courses: ['Math', 'English', 'Physics'],
      contact: {
        email: 'Abdullah@gmail.com',
        phone: '03478951673',
      },
    },
  ];

  findAll(): Student[] {
    return this.students;
  }
}
