import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile(
      './src/messages/repositories/messages.json',
      'utf8',
    );
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile(
      './src/messages/repositories/messages.json',
      'utf8',
    );
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile(
      './src/messages/repositories/messages.json',
      'utf8',
    );
    const messages = JSON.parse(contents);

    const id = uuidv4();

    messages[id] = { id, content };

    await writeFile(
      './src/messages/repositories/messages.json',
      JSON.stringify(messages),
    );
  }
}
