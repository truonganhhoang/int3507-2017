## Lưu dữ liệu vào cơ sở dữ liệu

### MongoDB: là kiểu noSQL

Tải docker image của mongodb về và chạy.
mongodb

https://hub.docker.com/_/mongo/

Tạo file docker-compose.yml có nội dung:

```
version: "2"
    
    services:
        mongodb:
            image: mongo:3.2
            ports:
                - "27017:27017"
            volumes:
                - ./mongodb-data/:/data/db
            # hostname: mongodb
            # domainname: coclab.lan
            cpu_shares: 512             # 0.5 CPU
            mem_limit: 536870912        # 512 MB RAM
            # privileged: true
            # restart: always
            # stdin_open: true
            # tty: true
```

Tham chiếu thuật ngữ tương đương giữa MongoDB và MySQL

	Database == Database
	Collection == Table
	Document == Row

Query Mongo : https://docs.mongodb.org/getting-started/python/query/

https://blog.scrapinghub.com/2013/05/13/mongo-bad-for-scraped-data/

đề cập các vấn đề gặp phải khi sử dụng mongodb

    1.	Locking
    2.	Poor space efficiency
    3.	Too Many Databases
    4.	Ordered data
    5.	Skip + Limit Queries are slow
    6.	Restrictions
    7.	Impossible to keep the working set in memory
    8.	Data that should be good, ends up bad!
