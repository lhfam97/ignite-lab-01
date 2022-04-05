import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
  providers: [],
  // Data mapper = repositorios
  // casos de uso
  // servicos (domain services, applicationservices)
})
export class AppModule {}
