import { Module } from '@nestjs/common';
import { InitializeResolver } from './initialize.resolver';
import { InitializeService } from './initialize.service';

@Module({
  providers: [InitializeResolver, InitializeService]
})
export class InitializeModule {}
