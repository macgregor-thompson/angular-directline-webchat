export class Activity {
  attachments: object[];
  channelId: string;
  conversation: object;
  entities: object[];
  from: object;
  id: string;
  membersAdded: object[];
  membersRemoved: object[];
  reactionsAdded: object[];
  reactionsRemoved: object[];
  replyToId: string;
  text: string;
  timestamp: string;
  type: string;

  constructor(text: string, from: object, type: string) {
    this.text = text;
    this.from = from;
    this.type = type;
    this.timestamp = new Date().toJSON();
  }

}


