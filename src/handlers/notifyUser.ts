import type { SQSEvent } from "aws-lambda";
import { sendEmail } from "../services/NotificationService";

export const handler = async (event: SQSEvent) => {
	for (const record of event.Records) {
		const body = JSON.parse(record.body);
		const { email, videoName } = body;

		try {
			await sendEmail(email, videoName);
			console.log(`Notificação enviada para ${email}`);
		} catch (error) {
			console.error(`Erro ao notificar ${email}:`, error);
		}
	}

	return { statusCode: 200 };
};
