import { Kafka, Producer, Consumer, EachMessagePayload } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'trip-auth-service',
  brokers: [process.env.KAFKA_BROKERS || 'kafka:9092'],
  ssl: false,
  sasl: undefined
});

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({ groupId: 'trip-auth-group' });

export const TOPICS = {
  USER_CREATED: 'user.created',
  USER_UPDATED: 'user.updated',
  USER_DELETED: 'user.deleted',
} as const;

export async function connectKafka() {
  await producer.connect();
  await consumer.connect();
  
  // Subscribe to topics
  await consumer.subscribe({ topic: TOPICS.USER_CREATED, fromBeginning: true });
  await consumer.subscribe({ topic: TOPICS.USER_UPDATED, fromBeginning: true });
  await consumer.subscribe({ topic: TOPICS.USER_DELETED, fromBeginning: true });

  // Start consuming messages
  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      if (!message.value) return;
      
      const value = JSON.parse(message.value.toString());
      console.log(`Received message on topic ${topic}:`, value);
      
      // Handle different topics
      switch (topic) {
        case TOPICS.USER_CREATED:
          // Handle user created event
          break;
        case TOPICS.USER_UPDATED:
          // Handle user updated event
          break;
        case TOPICS.USER_DELETED:
          // Handle user deleted event
          break;
      }
    },
  });
} 