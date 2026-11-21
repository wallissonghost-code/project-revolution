# Project Revolution — Alpha 0.3 (protótipo mobile)

Cidade 3D explorável no navegador com personagem em terceira pessoa, joystick touch, câmera, corrida, salto e colisões.

## Mecânicas

- NPCs simples, pontos de interação e vegetação
- Trabalho: +$35 e +2 reputação
- Assembleia: entrar em facção, campanha por $20, +12% influência e 1 apoio
- Disputar governo: exige facção, 60% de influência e 3 apoios
- Estado salvo localmente via localStorage
- Indicador de FPS

## Desenvolvimento

```sh
npm install
npm test
npm run build
npm run dev
```

## Limitações

Este é um **protótipo single-player**, sem servidor, multiplayer, autenticação ou economia persistida online. A Vercel publica o frontend após o build, quando a integração GitHub está ativa. Testar em dispositivo real e validar o deployment antes de declarar a versão aprovada.

Veja [AGENTS.md](AGENTS.md) para os papéis de agentes e [Issue #1](https://github.com/wallissonghost-code/project-revolution/issues/1) para o plano de evolução.
