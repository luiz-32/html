n1=float(input('digite a nota1: '))
n2=float(input('digite a nota2: '))
n3=float(input('digite a nota3: '))
n4=float(input('digite a nota4: '))

media=(n1+n2+n3+n4)/4

if media<5:
    print(media, '\033[1;31mReprovado\033[m')
elif media>=5 and media<=6:
    print(media, '\033[1;33mRegular\033[m')
elif media>=7 and media<=8:
    print(media,'\033[1;32mBom\033[m')
elif media>=9 and media<=10:
    print(media,'\033[1;34mExcelente\033[m')