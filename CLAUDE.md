# task-board

React 製のタスクボードアプリ。タスクの追加・完了切替・削除ができるシンプルな SPA。

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| UI ライブラリ | React 18 |
| ビルドツール | Vite 6 |
| スタイリング | 素の CSS（フレームワーク不使用） |
| 状態管理 | React useState（外部ライブラリなし） |
| 永続化 | localStorage |
| CI / CD | GitHub Actions |
| ホスティング | GitHub Pages |

## プロジェクト構成

```
task-board/
├── index.html          # エントリーポイント HTML
├── vite.config.js      # Vite 設定
├── package.json
├── src/
│   ├── main.jsx        # React マウント
│   ├── App.jsx         # タスクボードコンポーネント（全ロジック）
│   ├── App.css         # コンポーネントスタイル
│   └── index.css       # グローバルスタイル・リセット
└── CLAUDE.md
```

## 機能

- テキスト入力でタスクを追加（Enter キーまたは「追加」ボタン）
- チェックボックスで完了 / 未完了を切り替え
- 完了済みタスクはグレー＋打ち消し線で表示
- 「削除」ボタンでタスクを削除

## 開発サーバーの起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開く。

## ビルド

```bash
npm run build
```

`dist/` に静的ファイルが出力される。

## コーディング規約

- インデントはスペース 2 つ
- コンポーネントは関数コンポーネント（`function` 宣言）で記述
- state は `useState` で管理、外部ライブラリは使わない
- CSS クラス名はケバブケース（例: `task-item`, `delete-btn`）
- コメントは日本語で記述してよい

## コンポーネント命名規約

| 対象 | 規約 | 例 |
|-----|------|----|
| コンポーネントファイル | PascalCase | `App.jsx`, `TaskItem.jsx` |
| コンポーネント関数 | PascalCase | `export default function App()` |
| props / 変数 | camelCase | `inputValue`, `addTask` |
| CSS クラス名 | ケバブケース | `.task-item`, `.delete-btn` |
| イベントハンドラ | `handle` プレフィックス + camelCase | `handleKeyDown`, `handleSubmit` |

## Git 運用ルール

**コードを変更するたびに必ず GitHub へプッシュする。**

```bash
# 変更確認
git status
git diff

# ステージング（ファイルを個別に指定）
git add src/App.jsx

# コミット
git commit -m "feat: ○○機能を追加"

# プッシュ（必須）
git push origin main
```

### コミットメッセージ規約

| プレフィックス | 用途 |
|--------------|------|
| `feat:` | 新機能の追加 |
| `fix:` | バグ修正 |
| `refactor:` | 動作変更なしのリファクタリング |
| `docs:` | ドキュメントのみの変更 |
| `style:` | スタイル（CSS）の変更 |
| `chore:` | 設定・依存関係の変更 |

### 注意事項

- `node_modules/` と `dist/` はコミットしない（`.gitignore` で除外済み）
- `git add .` は使わず、ファイルを個別に指定する

## デプロイ先

https://yugomakabe.github.io/claude_code_task-board/

`main` ブランチへのプッシュで GitHub Actions が自動実行され、デプロイが更新される。

## GitHub リポジトリ

https://github.com/yugomakabe/claude_code_task-board
