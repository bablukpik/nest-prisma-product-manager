import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FileReaderProvider } from './file-reader.provider';
import { join } from 'path';

const PRODUCTS_JSON = 'products.json';

@Injectable()
export class DataImportService {
  constructor(
    private prisma: PrismaService,
    private fileReaderProvider: FileReaderProvider,
  ) {}

  async importData() {
    const jsonFilePath = join(process.cwd(), PRODUCTS_JSON);
    const jsonData = await this.fileReaderProvider.readJSONFile(jsonFilePath);

    // for (const product of jsonData.products) {
    //   // Implement your logic to transform and insert data into the database using Prisma
    //   // You can use Prisma to create records in the Product, ProductPrice, Category, and ProductToCategory tables.
    //   await this.createProduct(product);
    // }

    return JSON.stringify(jsonData);
  }

  // async createProduct(product: any) {
  //   // Implement your logic to create a product using Prisma
  //   // Example: await this.prisma.product.create({ data: product });
  // }
}
