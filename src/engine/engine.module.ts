import { Module } from '@nestjs/common';
import { EngineService } from './engine.service';
import { BatteryModule } from 'src/battery/battery.module';

@Module({
  //pour injecter batteryservice dans engine service
  imports:[BatteryModule],
  exports:[EngineService],
  providers: [EngineService]
})
export class EngineModule {}
