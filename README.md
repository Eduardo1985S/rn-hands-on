# Projeto React Native Hands-on

Este projeto utiliza [`expo-router`](https://docs.expo.dev/router/introduction/) para navegação baseada em arquivos na pasta `app/`.

## 📁 Estrutura de Pastas

```
app/
	_layout.js         # Layout principal
	novo.js            # Tela "Novo"
	sobre.js           # Tela "Sobre"
	(tabs)/            # Navegação por abas
		_layout.js       # Layout das abas
		config.js        # Configurações das abas
		index.js         # Tela inicial das abas
	item/
		[id].js          # Tela de detalhes de item dinâmico
```

## 🚀 Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o projeto:
   ```sh
   npx expo start
   ```

## 📦 Deploy

Você pode fazer deploy em todas as plataformas com o Expo Application Services (EAS):

- Deploy web: `npx eas-cli deploy` — [Saiba mais](https://docs.expo.dev/eas/hosting/get-started/)
- Build iOS/Android: `npx eas-cli build` — [Saiba mais](https://expo.dev/eas)

## 📝 Links úteis

- [Documentação do Expo Router](https://docs.expo.dev/router/introduction/)
