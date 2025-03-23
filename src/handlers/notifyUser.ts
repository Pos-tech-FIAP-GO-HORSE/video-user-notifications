import { SQSEvent } from 'aws-lambda';
import { NotificationService } from '../services/NotificationService';

export const handler = async (event: SQSEvent) => {
  const service = new NotificationService();

  for (const record of event.Records) {
    const body = JSON.parse(record.body);
    const { email, message } = body;

    try {
      await service.sendEmail(email, message);
      console.log(`Notificação enviada para ${email}`);
    } catch (error) {
      console.error(`Erro ao notificar ${email}:`, error);
    }
  }

  return { statusCode: 200 };
};
