import codecs, os

# reportFolderPath = '/Volumes/DATA/STUDY/Vandehiendai/git/new/int3507-2017/group3/report'
# reportFolderPath = 'D:\uet\van_de_hien_dai\int3507-2017\group3\report'

filenames = ['1. Thông tin nhóm.md',
             '2. Đặt vấn đề.md',
             '3.1. Kiến trúc scrapy.md',
             '3.2. Cài đặt scrapy.md',
             '3.3. Các vấn đề cần giải quyết với Scrapy.md',
             '3.4. Lưu dữ liệu.md',
             '3.5. Pipeline.md',
             '3.6. Spider.md',
             '3.7. Extractor.md',
             '3.8. Cấu hình nâng cao Scrapy.md',
             '4. Kết luận.md']
with open('../README.md', 'w') as outfile:
    for fname in filenames:
        with open(fname) as infile:
            for line in infile:
                outfile.write(line)
        outfile.write('\n')
