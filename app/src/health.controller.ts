import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  getHealth() {
    return {
      status: 'ok',
      service: 'docker-nginx-deployment',
      timestamp: new Date().toISOString(),
    };
  }
}