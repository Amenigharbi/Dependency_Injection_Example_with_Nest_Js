import { Controller, Get } from '@nestjs/common';
import { ConditionerService } from 'src/conditioner/conditioner.service';
import { EngineService } from 'src/engine/engine.service';

@Controller('car')
export class CarController {
    //constructor based injection
    constructor(private readonly engineService:EngineService,private readonly conditionerService:ConditionerService)
    {}
    @Get('/start')
    move(){
        return [
            this.engineService.startEngine(),
            this.conditionerService.conditionerOn(),
        ];
    }
}
