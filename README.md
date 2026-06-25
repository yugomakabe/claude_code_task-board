# タスクボード

React 製のシンプルなタスク管理アプリ。タスクの追加・完了切替・削除ができ、ローカルストレージでデータを永続化します。

**公開 URL:** https://yugomakabe.github.io/claude_code_task-board/

---

## 機能

- テキスト入力でタスクを追加（Enter キーまたは「追加」ボタン）
- チェックボックスで完了 / 未完了を切り替え
- 完了済みタスクはグレー＋打ち消し線で表示
- 「削除」ボタンでタスクを削除
- ページをリロードしてもタスクが消えない（localStorage 永続化）

---

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| UI ライブラリ | React 18 |
| ビルドツール | Vite 6 |
| スタイリング | 素の CSS |
| 状態管理 | React useState |
| 永続化 | localStorage |
| CI / CD | GitHub Actions |
| ホスティング | GitHub Pages |

---

## ローカルでの開発

```bash
# リポジトリをクローン
git clone https://github.com/yugomakabe/claude_code_task-board.git
cd claude_code_task-board

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173` を開く。

---

## ビルド

```bash
npm run build
```

`dist/` に静的ファイルが出力される。

---

## デプロイ

`main` ブランチへのプッシュで GitHub Actions が自動実行され、GitHub Pages へデプロイされる。
