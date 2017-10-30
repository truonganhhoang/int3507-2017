import codecs, os

reportFolderPath = '/Volumes/DATA/STUDY/Vandehiendai/git/new/int3507-2017/group3/report'

filenames = ['1. Thông tin nhóm.md', '2. Đặt vấn đề.md', '3.1 Kiến trúc scrapy.md', '3.2. Cài đặt scrapy.md',
             '3.3. Các vấn đề cần giải quyết với Scrapy.md',
             '4 Lưu dữ liệu.md',
             '5. Pipeline.md',
             '6. Spider.md',
             '7. Scrapy settings.md']
with open('../README.md', 'w') as outfile:
    for fname in filenames:
        with open(fname) as infile:
            for line in infile:
                outfile.write(line)
        outfile.write('\n')
