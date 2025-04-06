import { FAKE_TRANSPORTER, sendEmail } from './NotificationService';

describe('NotificationService', () => {
  describe('sendEmail', () => {
    it('should return a mock messageId when sendMail is called', async () => {
      const mailOptions = {
        from: 'test@example.com',
        to: 'recipient@example.com',
        subject: 'Test Subject',
        text: 'Test Message'
      };

      const result = await FAKE_TRANSPORTER.sendMail(mailOptions);
      
      expect(result).toEqual({ messageId: '123' });
    });
  });
}); 