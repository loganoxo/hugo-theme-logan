#!/bin/bash
set -eu                                     #e:遇到错误就停止执行；u:遇到不存在的变量，报错停止执行
CURRENT_DIR="$(pwd)"                        #执行命令的当前目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)" # 脚本所在目录
DIR="hugo-theme-logan"                            #规定的工作目录

if [[ $(basename "$CURRENT_DIR") == "$DIR" && $(basename "$SCRIPT_DIR") = "$DIR" ]]; then
  if [ -d "./public" ]; then
    mv "./public" "$HOME/.Trash/public_$(date +'%Y%m%d_%H%M%S')";
    echo "执行了mv_public";
  else
    echo "没有public目录";
  fi

  if [ -d "./resources" ]; then
    mv "./resources" "$HOME/.Trash/resources_$(date +'%Y%m%d_%H%M%S')";
    echo "执行了mv_resources";
  else
    echo "没有resources目录";
  fi

else
  echo "!!!error: 当前目录错误，请在 $DIR 目录下执行操作！";
  return 1 ;# 执行失败，返回非零值
fi
