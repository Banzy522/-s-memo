# 面談記録アプリ — GitHub Pages 公開手順

iPhoneのSafariでホーム画面に追加するには、Web上に公開する必要があります。
無料の GitHub Pages を使って5分で公開できます。

---

## 手順

### 1. GitHubアカウントを作る（すでにあればスキップ）
https://github.com にアクセスして登録。

### 2. 新しいリポジトリを作る
- 右上の「+」→「New repository」
- Repository name: `mendan` (なんでもOK)
- Publicを選択
- 「Create repository」をクリック

### 3. ファイルをアップロード
「uploading an existing file」のリンクをクリックして、
このフォルダの中のファイルをすべてドラッグ＆ドロップ：
- index.html
- manifest.json
- sw.js
- icon-192.png
- icon-512.png

「Commit changes」をクリック。

### 4. GitHub Pagesを有効にする
- リポジトリの「Settings」タブ
- 左メニューの「Pages」
- Source: 「Deploy from a branch」
- Branch: `main` / `(root)` を選択
- 「Save」をクリック

### 5. 数分待つとURLが発行される
`https://あなたのユーザー名.github.io/mendan/`

### 6. iPhoneのSafariでURLを開く
- 画面下の「共有」ボタン（□↑）をタップ
- 「ホーム画面に追加」をタップ
- 「追加」をタップ

これでアプリのようにホーム画面から起動できます！
