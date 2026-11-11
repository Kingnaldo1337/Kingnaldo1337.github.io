# Portfólio profissional — Reinaldo Alves Pereira Junior

Site pessoal responsivo, criado com **HTML, CSS e JavaScript puro**, com foco em análise de dados e Business Intelligence. Não requer Node, instalações, servidor ou assinatura.

## Arquivos

- `index.html`: portfólio completo e estudos de caso interativos.
- `styles.css`: layout, cores, responsividade, acessibilidade e estilo para impressão.
- `script.js`: menu mobile, filtros de projetos, modal de detalhes e efeitos discretos.
- `curriculo.html`: currículo atualizado em HTML, que pode ser salvo em PDF pelo navegador.
- `assets/favicon.svg`: ícone do site.
- `assets/og-cover.png`: imagem usada nas prévias de compartilhamento.

## Como visualizar no computador

Abra o arquivo `index.html` em um navegador. O site funciona sem instalar nada. É necessário ter acesso à internet para carregar as fontes gratuitas do Google Fonts; se estiver offline, fontes alternativas do sistema serão usadas.

## Publicar gratuitamente no GitHub Pages

1. Entre na sua conta GitHub `Kingnaldo1337`.
2. Crie um repositório **público** com o nome exato `Kingnaldo1337.github.io`.
3. Envie os arquivos do portfólio **para a raiz** desse repositório: `index.html`, `styles.css`, `script.js`, `curriculo.html` e a pasta `assets/`. Não envie a pasta `portfolio-reinaldo` como uma subpasta: o `index.html` precisa ficar na raiz.
4. Na página do repositório, vá a **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**, selecione **main** e **/(root)** e salve.
6. Abra `https://kingnaldo1337.github.io/` após a publicação.

**Sem domínio pago.** O endereço usa o subdomínio gratuito fornecido pelo GitHub Pages. Repositórios públicos são suportados no plano gratuito.

### Alternativa via Git no terminal

```bash
cd portfolio-reinaldo
git init
git add .
git commit -m "Publicar portfolio de dados e BI"
git branch -M main
git remote add origin https://github.com/Kingnaldo1337/Kingnaldo1337.github.io.git
git push -u origin main
```

Se o repositório já tiver histórico ou arquivos, não execute essa sequência cegamente. Nesse caso, clone-o primeiro e copie os arquivos para dentro dele.

## Como atualizar

- **Textos e seções:** edite `index.html`.
- **Cores, fontes e espaçamentos:** edite as variáveis no começo de `styles.css`.
- **Detalhes dos projetos:** edite o objeto `projects` no arquivo `script.js`.
- **Currículo:** edite `curriculo.html`.
- Depois, envie as alterações para o repositório no GitHub.

## Decisões de conteúdo

O conteúdo foi produzido a partir do currículo enviado. Uma correção feita pelo próprio titular em conversa anterior indicou que o bacharelado em Sistemas de Informação **já foi concluído**, por isso a formação aparece como **concluída em 2026** (o PDF mais antigo trazia previsão de conclusão).

Os currículos originais não informam datas finais para três experiências; o site apresenta **datas de início**, sem afirmar que os vínculos continuam ativos. As imagens dos projetos e o painel principal são **ilustrações conceituais**, não capturas ou números reais de empregadores. Links de repositórios específicos não foram inventados: o site direciona ao perfil GitHub informado no currículo.

Telefone pessoal não foi divulgado no site por padrão, para reduzir exposição desnecessária. Contato profissional é feito por e-mail e LinkedIn.

## Para personalizar depois

1. Substituir as ilustrações dos projetos por capturas autorizadas (com dados anonimizados ou fictícios).
2. Incluir links diretos de repositórios públicos relevantes.
3. Atualizar datas finais e descrições de experiências se necessário.
4. Se desejar, incluir um domínio personalizado, que é opcional e **não** faz parte da hospedagem gratuita.

---
Criado para publicação no GitHub Pages, sem backend, banco de dados, cookies de rastreamento ou coleta de mensagens por formulário. O botão de contato abre o aplicativo de e-mail do visitante.
