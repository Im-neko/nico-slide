# nico-slide
niconico風にツイートを取得して来て表示するデスクトップアプリ

とりあえず動く物が欲しかっただけなのでガバガバです。

内容としてはwebviewで内部でtweetdeckを開き、tweetdeckの1列目のツイートを毎秒拾いに行き、デスクトップ上に表示する。
という物です。
通常通りtwitterを利用するのと比較して特別負荷掛けている訳でも、APIの不正利用でもないです。

[規約](https://help.twitter.com/ja/rules-and-policies/twitter-rules)も確認しましたが、おそらく問題ないはず...

もし「この条項に抵触してるのでは？」という物があった場合はneko@im-neko.netまでメールなり、twitter: @im_nukoまでご連絡お願いします。

## 使い方
### ダウンロード && 環境構築
- macの人
  - build済みの物があるので[こちら](https://github.com/Im-neko/nico-slide/releases/download/v1.0.3/nicoSlide-1.0.3.pkg)からダウンロードして利用することもできます。

- その他の方
  - このリポジトリをクローンした後、`npm install`してください。

### 初期設定
- ツイートを表示する為のアカウントを用意します。
- tweetdeckの1列目に表示したいタイムラインを移動させます。

### 起動
- macの人
  - ダウンロードしたzipファイルを解凍した中にある`nicoSlide.app`を起動
- その他の方
  - `npm run start`

### 初回起動時の設定
tweetdeckがしばらくすると開くのでその画面でログインをしてください。  

(ログイン情報は取得していません)

しばらくするとtweetdeckが消え、画面に新しいツイートが投稿されるようになります。

### その他
自分の環境(アカウント、tweetdeck)で、特定の条件(ハッシュタグ検索列の利用)でしか検証はしていないのでバグなどあればissueに投げてください
