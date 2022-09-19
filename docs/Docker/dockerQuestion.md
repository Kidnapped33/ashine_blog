# docker复制文件夹时，部分文件数据丢失

### 如何把 docker 容器里的文件夹复制到本地

1、运行 docker ps ，查询容器ID；CONTAINER ID 就是容器的ID

2、使用 docker cp
    docker cp 容器ID:/要复制的文件路径 /目标文件路径

3、报错就根据报错去解决，不报错就查看目标文件夹是否已有文件即可
```
docker ps

docker cp 12345645646:/root/repos/mangosteen-fe-1   E:/test
```

### 报错：A required privilege is not held by the client
    
  报错了（客户不拥有所需的特权），但是部分文件还是复制了过来，部分文件丢失


### 解决方案：需要使用管理员权限去执行代码
    
  使用管理员权限执行可解决问题



