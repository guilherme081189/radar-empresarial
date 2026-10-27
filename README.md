# Radar Empresarial — aplicativo para celular

Este pacote contém o painel original de 27/10/2026, preparado como PWA para Chrome/Android.

## Publicar gratuitamente pelo GitHub Pages
1. Entre em https://github.com/new e crie um repositório **público** chamado `radar-empresarial`. Marque `Add a README file` caso o GitHub precise de um primeiro commit.
2. Descompacte este ZIP. No repositório, use **Add file > Upload files** para enviar os arquivos e a pasta `icons` (mantendo a estrutura). O arquivo `index.html` deve estar na raiz do repositório.
3. Abra **Settings > Pages > Build and deployment**, em **Source** escolha `Deploy from a branch` e selecione `main` e `/(root)`, depois **Save**.
4. Após a publicação, abra no Chrome do Android: `https://SEU_USUARIO.github.io/radar-empresarial/` (com SEU_USUARIO trocado pelo login do GitHub).
5. No Chrome: menu `⋮` > **Adicionar à tela inicial** (ou **Instalar app**) > confirme.

Se mudar o nome do repositório, substitua o final da URL.

## Avisos
- O site via GitHub Pages ficará acessível publicamente na web; não envie dados sigilosos de clientes.
- Este painel é a edição de 27/10/2026 e **não atualiza cotações automaticamente**.
- Após a primeira visita online, o aplicativo tenta funcionar offline com o conteúdo em cache. Para futuras versões que mudarem o HTML, atualize a versão do cache no `service-worker.js`.
- As edições realizadas nos indicadores por `localStorage` ficam armazenadas no navegador daquele dispositivo, não se sincronizam entre aparelhos.
