interface MailOptions {
	from: string;
	to: string;
	subject: string;
	text: string;
}

// We are mocking the email sending (transporter)
export const FAKE_TRANSPORTER = {
	sendMail: async (mailOptions: MailOptions) => ({ messageId: "123" }),
};

export const sendEmail = async (to: string, videoName: string) => {
	const info = await FAKE_TRANSPORTER.sendMail({
		from: '"FIAP X Notificações" <no-reply@fiapx.com>',
		to,
		subject: "noreply: Atualização sobre seu vídeo",
		text: `Você está recebendo essa mensagem porque houve um erro no processamento do seu vídeo - ${videoName}. Verifique a plataforma e tente novamente.`,
	});

	console.log("Email enviado:", info.messageId);
	return true;
};
