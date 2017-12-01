import codecs, os

# reportFolderPath = '/Volumes/DATA/STUDY/Vandehiendai/git/new/int3507-2017/group3/report'
# reportFolderPath = 'D:\uet\van_de_hien_dai\int3507-2017\group3\report'

filenames = ['0. Thông tin nhóm.md',
             '1. Đặt vấn đề.md',
             '2.1. Kiến trúc scrapy.md',
             '2.2. Cài đặt scrapy.md',
             '2.3. Spider.md',
             '2.4. Trích xuất dữ liệu.md',
             '2.5. Item Pipeline.md',
             '2.6. Lưu dữ liệu.md',
             '2.7. Cấu hình nâng cao Scrapy.md',
             '2.8. Các vấn đề cần giải quyết với Scrapy.md',
             '3. Kết luận.md']
with open('../README.md', 'w') as outfile:
    for fname in filenames:
        with open(fname) as infile:
            for line in infile:
                outfile.write(line)
        outfile.write('\n')
print("done")
