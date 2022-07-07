import {
  Resolver,
  Query,
  Args,
  Int,
  Subscription,
  Mutation,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { AuthInput, Author } from 'src/models/author.model';
import { AuthorsService } from 'src/services/AuthorsService';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService, private pubSub: PubSub) {}

  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @Roles(Role.Admin)
  @Mutation((returns) => Author)
  async addAuthor(
    @Args('payload', { type: () => AuthInput }) payload: AuthInput,
  ) {
    this.pubSub.publish('authorAdded', { authorAdded: payload });
    return payload;
  }

  @Subscription((returns) => Author, {
    name: 'authorAdded',
  })
  subscribeToAuthorAdded() {
    return this.pubSub.asyncIterator('authorAdded');
  }
}
