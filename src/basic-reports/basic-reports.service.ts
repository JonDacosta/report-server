import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmploymentLetterReport, getHelloReport } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  constructor(private readonly printerService: PrinterService) {
    super();
  }
  hello() {
    const docDefinition = getHelloReport({
      name: 'Jonatan',
    });
    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }
  employmentLetter() {
    const docDefinition = getEmploymentLetterReport();

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
