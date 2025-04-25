# Video User Notifications

Microserviço responsável por processar notificações de novos vídeos e enviar e-mails para os usuários.

Este projeto foi desenvolvido com [Serverless Framework](https://www.serverless.com/), Node.js, TypeScript e simula o ambiente da AWS localmente utilizando SNS.

## Video com explicação
https://www.youtube.com/watch?v=AlIQDMKciPo

---

## Funcionalidades

- Escuta mensagens enviadas para um tópico SNS
- Processa cada mensagem individualmente
- Envia e-mails de notificação

---

## Tecnologias

- Node.js 18+
- TypeScript
- AWS Lambda (via Serverless Framework)
- Amazon SNS
- Jest (testes)
- Biome (linter)

---

## Instalação

```bash
npm install
```

---

## Executando Localmente

### Inicie o ambiente offline

```bash
npx serverless offline start
```

Você verá algo como:

```
Offline [http for lambda] listening on http://localhost:3000
Function names exposed:
* notifyUser: video-user-notifications-dev-notifyUser
```

---

## Scripts Disponíveis

- `npm run build` - Compila o projeto TypeScript
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm test` - Executa os testes
- `npm run deploy` - Faz deploy para a AWS
- `npm run lint` - Executa o linter (Biome)
- `npm run lint:fix` - Executa o linter e corrige problemas automaticamente

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
