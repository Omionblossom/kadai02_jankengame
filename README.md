# kadai02_jankengame
課題２のじゃんけんアプリの提出用

# 課題　 じゃんけんアプリ

## ①課題内容（どんな作品か）
- うちの子供達とずっと手で遊んできた「恐竜じゃんけん」をゲームにしました。
- 基本はじゃんけんでT-rex、トリケラトプス、アンキロサウルスの３すくみ。

## ②工夫した点・こだわった点
- カードゲームっぽく選択肢はカードの画像を使いました。
- ゲームのラウンド、勝ち数等をカウントし、一定数を超えると特別なメッセージが出るようにしました。
- 隠しルールで「あいこが3回連続」すると全員が「いぐあのどー－ん」と言う、を実装しました(あいこカウント)

## ③難しかった点・次回トライしたいこと(又は機能)
- じゃんけんのjsは比較的理解し易かったのですが、今回はhtml, cssの方で配置や位置関係に苦労しました。
　(チーズアカデミーの内容を既に忘れている。。。)
- 勝敗が決まった時にGIFを流したかったのですがどうしても出来ず時間切れ。
- よりゲームアプリっぽいヴィジュアルにしたかった。又、効果音を入れたかった。

## ④質問・疑問・感想、シェアしたいこと等なんでも
- [質問]　
- GIFをゲーム開始時とじゃんけん決着時に流したいのですが、なかなか良い記事にあたらず。
-「Javascript GIF 表示」等で検索してもイマイチでした。良い記事、参考資料あれば伺いたいです。
- [疑問]　
- HTML, CSSで、margin等の位置関係についてのライン以外を触った時に画像やテキストがズレるのは何故？
- cssをテキスト一つ一つに別classで作っていくと一定時間が経った後、どこに何があるか分かり難くなります。良いclass名のつけ方やオーガナイズの仕方があれば知りたいです。
- [感想]　
- 先ず作りたい構造を絵とロジック図にしてから始めると整理がしやすかったです。
- [tips]
- じゃんけん等3パターンある場合は、最初に1つを作り込んでから全部をコピペした方が壊れにくい。
- [参考記事]
https://saruwakakun.com/html-css/basic/relative-absolute-fixed
https://orange-lily27.hatenablog.com/entry/2015/07/24/200005
