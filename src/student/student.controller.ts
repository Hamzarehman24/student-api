import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Student[] {
    return this.studentService.findAll();
  }
}
