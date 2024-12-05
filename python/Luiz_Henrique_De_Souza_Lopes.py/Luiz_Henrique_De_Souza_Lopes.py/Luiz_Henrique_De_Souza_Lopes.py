texto = 'oi'
texto2 = str('oi')
numero = 3
numero2 = int(3)
numero3= 3.0
numero4= float(3)
print(texto)
print(texto2)
print(numero)
print(numero2)
print(numero3)
print(numero4)

val_Feijão = float(input("Qual o valor do kilo do feijao?" ))
qtd_Feijão = int(int(input("Quantos pacotes de feijão?")))
tot_Feijão = val_Feijão * qtd_Feijão
print("O valor total dos feijoes: ", tot_Feijão)

#1
print('Atividade 1')
numero = int(input("Digite um número: "))
quadrado = pow(numero,2)
print("O quadrado de" ,numero,"é",quadrado)

#2
print('Atividade 2')
caractere1 = input("Digite o primeiro caractere: ")
caractere2 = input("Digite o segundo caractere: ")
print("O usuário digitou ",caractere1," e ", caractere2)

#3
print('Atividade 3')
n = int(input("Digite um número inteiro: "))
a = n - 1
s = n + 1
print("O antecessor de", n, "é", a)
print("O sucessor de", n, "é", s)

#4
print('Atividade 4')
b = float(input("Digite a base do retângulo: "))
a = float(input("Digite a altura do retângulo: "))
perimetro = 2 * (b + a)
area = b * a
print("O perímetro do retângulo é:", perimetro)
print("A área do retângulo é:", area)