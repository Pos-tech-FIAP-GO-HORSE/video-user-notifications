import { NotificationService } from './NotificationService';

describe('NotificationService', () => {
  it('should send notification successfully', async () => {
    const service = new NotificationService();
    const result = await service.sendEmail('test@example.com', 'Seu vídeo foi processado!');
    expect(result).toBe(true);
  });
});
