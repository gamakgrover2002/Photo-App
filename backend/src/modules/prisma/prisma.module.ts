import { Global, Module, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Module({
  providers: [
    {
      provide: PrismaClient,
      useFactory: () => {
        const client = new PrismaClient();
        client
          .$connect()
          .then(() => console.log('✅ Prisma connected to MongoDB'))
          .catch((err) => console.error('❌ Prisma connection error:', err));
        return client;
      },
    },
  ],
  exports: [PrismaClient],
})
export class PrismaModule implements OnModuleDestroy {
  constructor(private readonly prisma: PrismaClient) {}

  async onModuleDestroy() {
    await this.prisma.$disconnect();
    console.log('🛑 Prisma disconnected');
  }
}
