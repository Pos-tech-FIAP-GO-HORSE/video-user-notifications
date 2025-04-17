import { SES } from 'aws-sdk';

const ses = new SES();

interface MailOptions {
	from: string;
	to: string;
	subject: string;
	text: string;
}

export const sendEmail = async (to: string, videoName: string) => {
	const params: SES.SendEmailRequest = {
		Source: '"FIAP X Notificações" <postechfiap7@gmail.com>',
		Destination: {
			ToAddresses: [to],
		},
		Message: {
			Subject: {
				Data: "noreply: Atualização sobre seu vídeo",
				Charset: 'UTF-8',
			},
			Body: {
				Text: {
					Data: `Você está recebendo essa mensagem porque houve um erro no processamento do seu vídeo - ${videoName}. Verifique a plataforma e tente novamente.`,
					Charset: 'UTF-8',
				},
			},
		},
	};

	try {
		const result = await ses.sendEmail(params).promise();
		console.log("Email enviado:", result.MessageId);
		return true;
	} catch (error) {
		console.error("Erro ao enviar email:", error);
		throw error;
	}
};
