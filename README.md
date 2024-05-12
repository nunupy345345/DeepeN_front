# DeepeN front-end

## アイデアソンteamB

### 心得
- 無理せず楽しくやろう！
- できないって思ったら全部先輩に投げて大丈夫！！！

## 開発の流れ

### 開発を始める方法
- 端末(Powershell、コマンドプロンプト)にwslと打ちこみEnterを押す
- その端末で　cd や　lsを使って　???/deepen/まで移動する
- npm run devを実行する

### 開発中の動き
- ソースコードを書き換える
- ソースコードをCtrl + s で保存する
- ソースコードが`http://localhost:5173/`に反映される

### githubに作業を適応する方法
- 作業が一区切りついたら(何か作業がひと段落したら)
- ctrl + C でnpm run devから抜ける
- `git add -A` (変更を全部上げるコマンド)
- `git status`　（ステージングされているファイルを確認できる）
- `git commit -m "<英単語とかで詳細説明>"` (変更の内容をコメントをつけて保存するコマンド)　細めにcommit使用
- `git push origin HEAD` (github に挙げるためのコマンド)もしくは`git push origin 今のブランチ名`

### errorが起きたとき
- error文をコピーしてGoogleなどで調べる(claudeとかに聞いてもいい)
- **10分立って解決しなかったら先輩に聞こう**

