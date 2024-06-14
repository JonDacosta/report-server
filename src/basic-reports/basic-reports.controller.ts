import { Controller, Get, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  async hello(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.hello();

    response.setHeader('Content-type', 'application/pdf');
    pdfDoc.info.Title = 'document-info';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
  @Get('employment-letter')
  async employmentLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();

    response.setHeader('Content-type', 'application/pdf');
    pdfDoc.info.Title = 'Employment-Letter';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
