import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './modules/author.module';
import { join } from 'path';
import { RolesGuard } from './guard/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    AuthorsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
      context: (ctx) => {
        return ctx;
      },
      autoSchemaFile: join(process.cwd(), './src/graphql/schema.gql'),
      debug: true,
      playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
