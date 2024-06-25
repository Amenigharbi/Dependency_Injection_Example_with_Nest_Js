import { Injectable } from '@nestjs/common';
import { EngineService } from 'src/engine/engine.service';

@Injectable()
export class ConditionerService {
    constructor(private readonly engineService:EngineService)
    {}
    conditionerOn(){
        console.log('conditioner on');
        return `${this.engineService.startEngine()}`;
    }
}
