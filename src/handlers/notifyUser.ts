import type { SNSEvent } from "aws-lambda";
import { sendEmail } from "../services/NotificationService";

export const handler = async (event: SNSEvent) => {
	for (const record of event.Records) {
		const message = JSON.parse(record.Sns.Message);
		const { email, videoName } = message;

		try {
			await sendEmail(email, videoName);
			console.log(`Notificação enviada para ${email}`);
		} catch (error) {
			console.error(`Erro ao notificar ${email}:`, error);
		}
	}

	return { statusCode: 200 };
};
