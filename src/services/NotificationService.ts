import nodemailer from "nodemailer";

const createTransporter = () => {
	return nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		auth: {
			user: "usuario_fake",
			pass: "senha_fake",
		},
	});
};

export const sendEmail = async (to: string, videoName: string) => {
	const transporter = createTransporter();
	const info = await transporter.sendMail({
		from: '"FIAP X Notificações" <no-reply@fiapx.com>',
		to,
		subject: "noreply: Atualização sobre seu vídeo",
		text: `Você está recebendo essa mensagem porque houve um erro no processamento do seu vídeo - ${videoName}. Verifique a plataforma e tente novamente.`,
	});

	console.log("Email enviado:", info.messageId);
	return true;
};
