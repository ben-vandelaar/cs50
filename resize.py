import PIL from image
from sys import argv

if len(argv) != 4:
    exit("Usage: python resize.py n infile outfile")

n = int(argv[1])
inimage = int(argv[2])
outimage = int(argv[3])


inimage = Image.open(infile)
width, height = inimage.size

outimage = inimage.resize((width * n, height * n))

outimage.save(out)