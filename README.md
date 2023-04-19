# Website

Docusaurus でドキュメントサイトの構築

## インストール

```sh
npx @docusaurus/init@latest init my-doc classic
```

以下のメッセージは OK を押下する。

```sh
Ok to proceed? (y)
```

ディレクトリを移動する。

```sh
yarn start
```

## GitHub リポジトリに push

ローカルの Docusaurus を作成したリポジトリに push する。

```sh
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/[ユーザ名]/documents.git
git push -u origin main
```

## 参考サイト

test[^1]

[^1]: https://qiita.com/y_catch/items/46b7eb7d618d95fbc9c3
[^2]: https://zenn.dev/koushikagawa/scraps/6f38fbc8a2b3ee
