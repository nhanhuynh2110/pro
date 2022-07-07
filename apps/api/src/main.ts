import { NestFactory } from '@nestjs/core';
// import { GraphQLSchemaHost } from '@nestjs/graphql';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.get(GraphQLSchemaHost);
  await app.listen(3000);
}
bootstrap();
