print('-------------------------')
print('Bem vindo')
print('-------------------------')
n1=float(input('Digite um valor '))
n2=float(input('Digite um valor '))
escolha=(input('escolha um numero de 1 a 7 '))

if escolha == '1':
    r = n1 + n2
    print(r)
elif escolha == '2':
    r = n1 - n2
    print(r)
elif escolha == '3':
    r = n1 * n2
    print(r)
elif escolha == '4':
    r = n1 / n2
    print(r)
elif escolha == '5':
    r = pow(n1,2)
    print(r)
elif escolha == '6':
    r = n1%2
    print(r)
elif escolha == '7':
    r = pow(n1,1/2)
    print(r)
else:
    print('digite um valor valido')