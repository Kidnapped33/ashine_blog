# git 常用命令

### 基本用法
```
git init                   // 创建一个 .git 目录(本地仓库)
git add .                  // 添加所有
git commit -m '更新内容'    // 提交备注：更新内容
git push                    // push 到仓库
  
git branch                  // 查看当前分支
git branch ashine33         // 新建分支 ashine33
git checkout ashine33       // 切换到分支 ashine33 

.ignore                     // 存放不想被看见得文件名+后缀
git status                  // 查询哪些提交，哪些没提交
git commit -v               // 打开 Vscode写提交的备注 ， -m是直接写备注

我想要跳版本，遇见飞行
  
git log                     // 查询之前commit得版本
git reflog                  // 查询御剑飞行得所有版本

每次提交后，init1，init2，init3，使用 git reflog 可以查询所有版本得版本号码（前6位就够了）
  
git pull                    // 拉取代码
```

使用 git reflog 后，控制台无法用 ctrl+c断开，先按ESC，再长按Q建，就能跳出来了

### 正常四连
```
git add .
git commit -m '提交'
git pull 
git push
```
### 克隆项目

     先到没有仓库的地方，克隆文件 git clone 接http的地址，克隆到本地 

```
git clone 项目地址         //本地创建一个项目名字的文件夹，克隆到文件夹
git clone 项目地址 .       //直接克隆到当前文件夹 
git clone 项目地址 xxx   //本地创建一个xxx的文件夹，克隆到文件夹（重命名）
```
### 合并分支


    我现在有个名为 ashine 的分支，想要合并到 master 去

```
git branch master // 先到达你想要的分支 master
git merge ashine  // 再把想要的 ashine分支合并过来

```
### 冲突

    通灵术 git stash  或者 合并冲突

```
git status -sb //查询冲突的文件
```
    HEAD 是当前的，下面是ashine分支的


### 只提交部分文件 commit


1、使用 git status -sb ，获取有哪些文件未提交

2、接着提交你有 commit 的文件   git add src/shared/Icon.module.scss src/shared/Icon.tsx

3、使用 git status 查看哪些add，哪些未add

4、使用 git commit -m '提交代码' 即可


