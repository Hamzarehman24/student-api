// src/app.module.ts
import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';

@Module({
  imports: [StudentModule],
})
export class AppModule {}
