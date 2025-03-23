import nodemailer from 'nodemailer';

export class NotificationService {
  private transporter;

  constructor() {
    // Fake SMTP (usar Mailtrap ou console.log)
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "usuario_fake",
        pass: "senha_fake"
      }
    });
  }

  async sendEmail(to: string, content: string) {
    const info = await this.transporter.sendMail({
      from: '"FIAP X Notificações" <no-reply@fiapx.com>',
      to,
      subject: "Atualização sobre seu vídeo",
      text: content,
    });

    console.log("Email enviado:", info.messageId);
    return true;
  }
}
