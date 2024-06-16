/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Message as PrismaMessage,
  Chat as PrismaChat,
} from "@prisma/client";

export class MessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MessageCountArgs, "select">): Promise<number> {
    return this.prisma.message.count(args);
  }

  async messages<T extends Prisma.MessageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageFindManyArgs>
  ): Promise<PrismaMessage[]> {
    return this.prisma.message.findMany<Prisma.MessageFindManyArgs>(args);
  }
  async message<T extends Prisma.MessageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageFindUniqueArgs>
  ): Promise<PrismaMessage | null> {
    return this.prisma.message.findUnique(args);
  }
  async createMessage<T extends Prisma.MessageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageCreateArgs>
  ): Promise<PrismaMessage> {
    return this.prisma.message.create<T>(args);
  }
  async updateMessage<T extends Prisma.MessageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageUpdateArgs>
  ): Promise<PrismaMessage> {
    return this.prisma.message.update<T>(args);
  }
  async deleteMessage<T extends Prisma.MessageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageDeleteArgs>
  ): Promise<PrismaMessage> {
    return this.prisma.message.delete(args);
  }

  async getChat(parentId: string): Promise<PrismaChat | null> {
    return this.prisma.message
      .findUnique({
        where: { id: parentId },
      })
      .chat();
  }
}
