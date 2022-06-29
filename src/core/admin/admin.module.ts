import { Module } from '@nestjs/common';
import { InitializeModule } from './initialize/initialize.module';

@Module({
  imports: [InitializeModule]
})
export class AdminModule {}
