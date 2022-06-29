import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { CoreResolver } from './core.resolver';

@Module({
  imports: [AdminModule],
  providers: [CoreResolver]
})
export class CoreModule {}
