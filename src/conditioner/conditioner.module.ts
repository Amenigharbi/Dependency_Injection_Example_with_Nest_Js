import { Module } from '@nestjs/common';
import { ConditionerService } from './conditioner.service';
import { EngineModule } from 'src/engine/engine.module';

@Module({
  //ili fihom export il kol ywaliw available 
  imports:[EngineModule],
  providers: [ConditionerService],
  exports:[ConditionerService]
})
export class ConditionerModule {}
