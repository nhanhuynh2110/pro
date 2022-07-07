import { Module } from '@nestjs/common';
import { AuthorsResolver } from 'src/resolvers/authors.resolver';
import { AuthorsService } from 'src/services/AuthorsService';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [],
  providers: [AuthorsService, AuthorsResolver, PubSub],
})
export class AuthorsModule {}
