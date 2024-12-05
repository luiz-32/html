from random import randint


lista = ("Pedra", "Papel", "Tesoura")

computador = randint(0,2)
jogador = (input("Digite seu nome "))
print('-----------------------')
print('Olá',jogador)
print('-----------------------')
perguntar = int(input('''Escolha uma opcao para se jogar: 

[0] Pedra
[1] Papel
[2] Tesoura
 
Digite sua escolha: '''))

print("Pedra\n")

print("Papel\n")

print("Tesoura!!!\n")


print("-="*20)
print("O computador escolheu: {}".format(lista[computador]))
print(jogador, "escolheu: {}".format(lista[perguntar]))
print("-="*20)

if computador == 0:
    if perguntar == 0:
        print("Empate!")
    elif perguntar == 1:
        print(jogador, " venceu")
    elif perguntar == 2:
        print("Computador venceu")
    else:
        print("Operacao invalida")

elif computador == 1:
    if perguntar == 0:
        print("Computador perdeu")
    elif perguntar == 1:
        print("Empate!")
    elif perguntar == 2:
        print(jogador," venceu")
    else:
        print("Operacao invalida")
elif computador == 2:
    if perguntar == 0:
        print(jogador, "venceu")
    elif perguntar == 1:
        print("Computador venceu")
    elif perguntar == 2:
        print("Empate!")
    else:
        print("Operacao invalida")
else:
    print("Operacao invalida")