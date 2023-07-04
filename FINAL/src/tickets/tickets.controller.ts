import { Get, Controller, Render } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
    @Get()
    @Render('ticket_form')
    findAll(): {} {
        return { title: 'Tickets' };
    }
}
