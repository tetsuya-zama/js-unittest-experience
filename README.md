# javascriptユニットテスト体験
## 概要

ユニットテスト初心者がモダンjsのユニットテストを体験するための教育用コンテンツです

## 環境設定

ソースをcloneしたらそのフォルダで
```
$ npm install
```
を実行して下さい。


## テストの実行
以下のコマンドでtest/フォルダ以下にあるテストが実行されます。
```
$ npm test
```

## 進め方
サンプルとして、targert-sample.jsとtest/test-sample.jsを用意しています。
その両ファイルを参考にしながら、target1.jsとtarget2.jsについて以下のように進めて下さい。

### targetファイルのテスタビリティの強化
target1.js, target2.jsに定義されている関数群はテスタビリティが低い（テストがしにくい）状態です。

これらの関数をリファクタリングしてテスタビリティを強化してください。

### ユニットテストの作成
test/test-sample.jsを参考にしながら、テストコードを作成してテストを実行してください。


## 参考：今回採用しているテストツールについて

### Mocha テストランナー

https://mochajs.org/

### power-assert アサーション（検証）ライブラリ

https://github.com/power-assert-js/power-assert

### sinon モック/スタブ作成ライブラリ

https://sinonjs.org/
