# カンマ区切り変換ツール

文字列データの区切り文字を、改行コード`\n`もしくは`\s\n`からカンマ`,`に変更します。お仕事でこの作業を行う機会が多く、割合に面倒な作業だったので作りました。

## 利用方法

### ダウンロード・インストール

個人用で配布はしていないので、お好きな形式のブランチで`git clone`してビルドして使ってください。というか配布できるような出来のものでは断じてない。ブランチの名前見ればだいたいどんな形式かはわかると思います。`master`ブランチはChrome拡張版です。
なんでPublicなのかって？Wikiの実験のためさ。

### ツールの使用

改行をカンマ区切りに変換し、クリップボードにコピーします。

1. 変換元のデータを入力する
テキストエリアに変換したい文字列データを貼り付けます。

1. 変換を実行する
`Go`をクリックするか、ショートカット`Ctrl+Enter`で変換が行なえます。変換されたデータは、もとのデータと入れ替わって同じテキストエリアに表示されます。

1. クリップボードにコピーする
`Copy to clipboard`ボタンをクリックするか、ショートカット`Ctrl+C`で変換されたデータをコピーできます。コピーが成功した場合、アラートでその旨が表示されます。
なお、クリップボードへのコピーには[clipboard.js](https://clipboardjs.com/)を使用しています。
