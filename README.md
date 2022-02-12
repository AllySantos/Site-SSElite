# Site SS Elite

Site desenvolvido para uma corretora de seguros, feito com HTML/CSS e Bootstrap. Além disso, possui recebimento de leads por e-mail desenvolvido com PHP.


#

Se quiser ver como ficou o projeto, acesse: 
```bash
https://www.sselitecorretora.com.br/
```




## Prototipação

Antes do inicio do projeto, foi feito um **wireframe** para entender quais seriam as funcionalidades e informações requeridas, bem como já projetar quais conteúdos seriam abordados e quais páginas o site precisaria.

Após essas definições foi feito o **protótipo de alta fidelidade** sendo assim escolhidas as cores, tipografia e toda a identidade visual do site.

Caso queira conferir o wireframe e protótipo clique [neste link](https://www.figma.com/file/us0OkU7k7UlH8BNuRhBmWx/SS-Elite?node-id=0%3A1)


## Desenvolvimento

### Frontend

Por se tratar de um site web que seria colocado em produção em um servidor simples, foi optado por não utilizar nenhum framework frontend pois seria necessário sua instalação no servidor (e ele não supertava essa função)

Portanto, foi usado HTML e CSS além da biblioteca Bootstrap por facilitar o reuso de classes e por possuir responsividade já desenvolvida em diversos componentes.

### Backend

Para o backend, a única funcionalidade necessária foi o recebimento de leads pelo site que seriam encaminhados por email para o corretor. 

A validação do formulario se deu por Javascript aliado as classes de validação do Bootstrap. O envio de emails foi feito com Javascript - para não permitir a atualização da página e tratar os dados recebidos-  e PHP no lado do servidor para realizar o envio de emails.


## Produção

Para realizar o deploy foi utilizado o o FileZilla, que permitiu, por meio do protocolo FTP o envio de arquivos para o servidor.

## Conclusão

Estou usando um tópico de conclusão pois foi minha primeira vez desenvolvendo um site do 0 e atuando em todas as etapas - desde a prototipação até o deploy - e isso me fez aprender muito não só na parte de programação em si, mas como lidar com os desafios que surgem ao longo do projeto para conseguir entregar um material de qualidade no tempo designado.

