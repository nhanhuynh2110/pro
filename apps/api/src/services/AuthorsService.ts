import { Injectable } from '@nestjs/common';
import { authorMeta } from 'src/meta/author';

@Injectable()
export class AuthorsService {
  findOneById(id: number) {
    return authorMeta.find((el) => el.id === id);
  }
}
