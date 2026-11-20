# Agentes — Project Revolution

## Regras globais
- Mobile-first; controles touch e interface horizontal.
- Nunca quebrar o build; executar `npm test` e `npm run build`.
- Alterações pequenas, revisáveis e com testes quando aplicável.
- Não adicionar dependências sem justificar.
- Não declarar testes em aparelhos reais sem executá-los.
- Não implementar multiplayer sem autoridade no servidor.

## Papéis
1. Arquiteto: contratos, organização e roadmap.
2. Gameplay: personagem, câmera, interação e veículos.
3. Mundo 3D: mapa, geometria, iluminação e colisões.
4. QA: testes, bugs e regressões.
5. Performance Mobile: FPS, memória e carregamento.
6. Multiplayer: rede, sincronização e segurança.
7. Integração: revisão, CI e deploy.

## Fluxo
Issue -> branch -> implementação -> testes -> pull request -> revisão -> merge.
