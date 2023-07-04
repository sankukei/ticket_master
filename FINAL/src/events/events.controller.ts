import { Get, Controller, Render } from '@nestjs/common';

@Controller('events')
export class EventsController {
    @Get()
    @Render('event_form')
    findAll(): {} {
        return { title: 'Events' };
    }
}
