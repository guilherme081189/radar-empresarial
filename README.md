# Radar Empresarial — PWA de inteligência de mercado

Painel de indicadores, câmbio, juros, commodities, notícias, tributação, impactos por setor e simuladores financeiros para o atendimento consultivo a empresas.

## Abrir ou instalar no celular

Endereço de publicação previsto (quando o GitHub Pages estiver ativo):
**https://guilherme081189.github.io/radar-empresarial/**

Para publicar: no repositório, vá em **Settings → Pages → Build and deployment → Deploy from a branch**, escolha **main** e **/(root)** e salve. A página será publicada pelo GitHub Pages quando o deploy concluir.

No Chrome para Android, abra o endereço publicado e use o menu **⋮ → Adicionar à tela inicial** / **Instalar app**.

## Arquivos e atualização

- `index.html`: visual, indicadores, notícias, fontes e simuladores. Contém os dados da edição no objeto JavaScript `seed` e exibe a data `seed.date`.
- `manifest.webmanifest`: nome, aparência e ícones do aplicativo.
- `radar-192.png` e `radar-512.png`: ícones na **raiz** do repositório.
- `service-worker.js`: usa rede primeiro ao abrir o app online; guarda a última edição aberta para acesso offline.

A tarefa **Radar Empresarial Diário**, programada no ChatGPT para todas as manhãs por volta das 8h (horário de Brasília), está instruída a pesquisar dados verificáveis, atualizar o `index.html`, fazer commit direto na branch `main` e verificar a gravação. A publicação no GitHub Pages depende de ele estar configurado e de cada execução da tarefa realmente concluir o commit. Em caso de falha, o relatório deve informar que a publicação não ocorreu. Consulte o histórico de commits para verificar a última atualização.

Ao reabrir o PWA **online**, ele busca o HTML mais recente. **Offline**, usa a edição previamente armazenada. A atualização no GitHub não equivale a cotação em tempo real.

As cotações alteradas manualmente pelo botão **Editar** são salvas apenas no navegador, separadas por data de edição; não mudam o GitHub nem outros dispositivos.

## Segurança e fontes

Este repositório é **público**. Não publique dados de clientes, informações sigilosas do banco, tokens ou credenciais. Cotações, notícias e impactos são apoio à análise e não substituem fontes oficiais, normativos vigentes ou avaliação jurídica/tributária.
