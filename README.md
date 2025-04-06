# Video User Notifications

Microserviço responsável por processar notificações de novos vídeos e enviar e-mails para os usuários.

Este projeto foi desenvolvido com [Serverless Framework](https://www.serverless.com/), Node.js, TypeScript e simula o ambiente da AWS localmente utilizando filas SQS.

---

## Funcionalidades

- Escuta mensagens enviadas para uma fila SQS
- Processa cada mensagem individualmente
- Envia e-mails de notificação (mockado localmente)
- Simulação completa de ambiente AWS usando `serverless-offline` e `ElasticMQ`

---

## Tecnologias

- Node.js 18+
- TypeScript
- AWS Lambda (via Serverless Framework)
- Amazon SQS (simulado com ElasticMQ)
- Nodemailer (mockado)
- Jest (testes)

---

## Instalação

```bash
npm install
```

---

## Executando Localmente

###  Suba o SQS local com Docker

```bash
docker run -p 9324:9324 softwaremill/elasticmq
```

###  Inicie o ambiente offline

```bash
npx serverless offline start
```

Você verá algo como:

```
Offline [http for lambda] listening on http://localhost:3002
Function names exposed:
* notifyUser: video-user-notifications-dev-notifyUser
```

---

## Testando

### viando uma mensagem para a fila via `curl`:

```bash
curl -X POST http://localhost:9324/000000000000/video-user-notifications-queue \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode 'Action=SendMessage' \
  --data-urlencode 'MessageBody={"email":"usuario@exemplo.com","videoName":"Tutorial de Cozinha"}'
```

---

## Testes

```bash
npm test
```

---

## Estrutura de pastas

```bash
src/
├── handlers/              # Handlers da AWS Lambda
│   └── notifyUser.ts
├── services/              # Serviços utilizados pelo projeto
│   └── NotificationService.ts
```

---

## Membros

| Membro                        | Info     |
| ----------------------------- | -------- |
| Caio Martins Pereira          | RM357712 |
| Rafael de Souza Ribeiro       | RM357622 |
| Thaís Oliveira de Moura       | RM357737 |
| Victor Toschi                 | RM356847 |