import { Module } from '@nestjs/common';
import { BatteryService } from './battery.service';

@Module({
  providers: [BatteryService],
  //consumed by other modules 
  exports:[BatteryService],
})
export class BatteryModule {}
