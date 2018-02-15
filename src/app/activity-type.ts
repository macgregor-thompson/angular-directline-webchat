export class ActivityType {
  // Represents a communication between bot and user.
  public static MESSAGE = 'message';

  // Indicates that the bot was added to a conversation, other members were added to or removed from the conversation,
  // or conversation metadata has changed.
  public static CONVERSATION_UPDATE = 'conversationUpdate';

  // Indicates that the bot was added or removed from a user's contact list.
  public static CONTACT_RELATION_UPDATE = 'contactRelationUpdate';

  // Indicates that the user or bot on the other end of the conversation is compiling a response.
  public static TYPING = 'typing';

  // Represents an attempt to determine whether a bot's endpoint is accessible
  public static PING = 'ping';

  // Indicates to a bot that a user has requested that the bot delete any user data it may have stored.
  public static DELETE_USER_DATA = 'deleteUserData';

  // Indicates the end of a conversation.
  public static END_OF_CONVERSATION = 'endOfConversation';

  // Represents a communication sent to a bot that is not visible to the user.
  public static EVENT = 'event';

  // Represents a communication sent to a bot to request that it perform a specific operation.
  // This activity type is reserved for internal use by the Microsoft Bot Framework.
  public static INVOKE = 'invoke';

  // Indicates that a user has reacted to an existing activity. For example, a user clicks the "Like" button on a message.
  public static MESSAGE_REACTION = 'messageReaction';
}
