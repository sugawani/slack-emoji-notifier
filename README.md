**Guide Outline**:

- [Slack Emoji notifier](#slack-emoji-notifier)
- [各種トリガーの説明](#各種トリガーの説明)
  - [emojiAddedTrigger](#emojiaddedtrigger)
  - [emojiRemovedTrigger](#emojiremovedtrigger)
  - [emojiRenamedTrigger](#emojirenamedtrigger)
- [使い方](#使い方)
  - [slack cli のインストール](#slack-cli-のインストール)
  - [通知先チャンネルの設定](#通知先チャンネルの設定)
- [ローカルでの実行](#ローカルでの実行)
- [slack platform 上での実行](#slack-platform-上での実行)
  - [環境変数の設定](#環境変数の設定)
  - [デプロイ](#デプロイ)

# Slack Emoji notifier

スラックに絵文字が追加/削除/リネームされた時に通知するボットです  
[Slack Platform](https://api.slack.com/start/overview)の仕組みで動いています

# 各種トリガーの説明

## emojiAddedTrigger

絵文字が追加された際に動きます

## emojiRemovedTrigger

絵文字が削除された際に動きます

## emojiRenamedTrigger

絵文字がリネームされた際に動きます

# 使い方

## slack cli のインストール

https://api.slack.com/automation/quickstart
こちらを参考にインストールしてください

## 通知先チャンネルの設定

`.env` ファイルに通知先チャンネル ID を追記してください  
チャンネル ID はチャンネル詳細下部に `Channel ID: XXXXXXXX` の形で記載されています

# ローカルでの実行

`slack run` を実行し、動かしたい Trigger を指定してください  
他の Trigger も同時に実行したい場合は `slack trigger create` で動かしたい Trigger を指定してください

# slack platform 上での実行

## 環境変数の設定

`slack env add NOTIFY_CHANNEL_ID XXXXXXX` を実行し、通知先のチャンネル ID を環境変数に設定してください  
チャンネル ID はチャンネル詳細下部に `Channel ID: XXXXXXXX` の形で記載されています

## デプロイ

`slack deploy` を実行し、動かしたい Trigger を指定してください  
他の Trigger も同時に実行したい場合は `slack trigger create` で動かしたい Trigger を指定してください