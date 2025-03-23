import nodemailer from 'nodemailer';
import { sendEmail } from './NotificationService';

// Mock nodemailer
jest.mock('nodemailer');

describe('NotificationService', () => {
  const mockSendMail = jest.fn().mockResolvedValue({ messageId: 'test-message-id' });
  
  const mockCreateTransport = jest.fn().mockReturnValue({
    sendMail: mockSendMail
  });

  beforeEach(() => {
    jest.clearAllMocks();
    (nodemailer.createTransport as jest.Mock).mockImplementation(mockCreateTransport);
  });

  it('should send email successfully', async () => {
    const to = 'test@example.com';
    const videoName = 'test-video.mp4';

    const result = await sendEmail(to, videoName);

    expect(result).toBe(true);
    expect(nodemailer.createTransport).toHaveBeenCalledWith({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'usuario_fake',
        pass: 'senha_fake'
      }
    });

    expect(mockSendMail).toHaveBeenCalledWith({
      from: '"FIAP X Notificações" <no-reply@fiapx.com>',
      to: 'test@example.com',
      subject: 'noreply: Atualização sobre seu vídeo',
      text: `Você está recebendo essa mensagem porque houve um erro no processamento do seu vídeo - test-video.mp4. Verifique a plataforma e tente novamente.`
    });
  });

  it('should handle email sending failure', async () => {
    const error = new Error('Failed to send email');
    mockSendMail.mockRejectedValueOnce(error);

    const to = 'test@example.com';
    const videoName = 'test-video.mp4';

    await expect(sendEmail(to, videoName)).rejects.toThrow('Failed to send email');
  });
});
