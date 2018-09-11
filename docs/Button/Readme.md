# Button

[[toc]]
Para usar o componente botão importe-o para o seu scrit e use-o com a assinatura abaixo:

```html
<lte-button>clique aqui</lte-button>
```
<lte-button type='default'>clique aqui</lte-button> 

### Tipos

Opcionalmente o componente button tem 6 tipos:

| Tipo          | Real                                              | Código |
|:-------------:|:-------------------------------------------------:|:-------:|
| info          | <lte-button type='info'>clique aqui</lte-button>  | ```<lte-button type='info'>clique aqui</lte-button>```|
| danger     | <lte-button type='danger'>clique aqui</lte-button>      | ```<lte-button type='danger'>clique aqui</lte-button>```| 
| warning | <lte-button type='warning'>clique aqui</lte-button>      | ```<lte-button type='warning'>clique aqui</lte-button>```|
| success| <lte-button type='success'>clique aqui</lte-button>      | ```<lte-button type='success'>clique aqui</lte-button>```|
| primary| <lte-button type='primary'>clique aqui</lte-button>      | ```<lte-button type='primary'>clique aqui</lte-button>```|
| default | <lte-button >clique aqui</lte-button>      | ```<lte-button>clique aqui</lte-button>``` ou  ```<lte-button type='default'>clique aqui</lte-button>```|


A propriedade "type" recebe um valor do tipo String, e é opcional. Caso a propriedade __type__ não seja especificada, o componente será tratado como __default__.

### Tamanhos 

Opcionalmente o componente button tam 3 tamanhos diferentes:

| Tamanho        | Real                                              | Código |
|:-------------:|:-------------------------------------------------:|:-------:|
| xs | <lte-button type='info' size='xs'>clique aqui</lte-button>      | ```<lte-button size='xs'>clique aqui</lte-button>```|
| sm         | <lte-button type='info' size='sm'>clique aqui</lte-button>  | ```<lte-button size='sm'>clique aqui</lte-button>```|
| lg   | <lte-button type='info' size='lg'>clique aqui</lte-button>      | ```<lte-button size='lg'>clique aqui</lte-button>```| 

A propriedade "size" recebe um valor do tipo String, e é opcional.

### Fundos

Opcionalmente o componente **_button_** tem 5 fundos diferentes:


| Fundo        | Real                                              | Código |
|:-------------:|:-------------------------------------------------:|:-------:|
| maroon          | <lte-button bg='maroon'>clique aqui</lte-button>  | ```<lte-button bg='maroon'>clique aqui</lte-button>```|
| purple     | <lte-button bg='purple'>clique aqui</lte-button>      | ```<lte-button bg='purple'>clique aqui</lte-button>```| 
| navy| <lte-button bg='navy'>clique aqui</lte-button>      | ```<lte-button bg='navy'>clique aqui</lte-button>```|
| orange| <lte-button bg='orange'>clique aqui</lte-button>      | ```<lte-button bg='orange>clique aqui</lte-button>```|
| olive| <lte-button bg='olive'>clique aqui</lte-button>      | ```<lte-button bg='olive'>clique aqui</lte-button>```|

A propriedade "bg" recebe um valor do tipo String, e é opcional. Recomenda-se não usar com a propriedade "type" devido as cores de borda entrarem em conflito.

### Estilo Block

Para o componente ficar com estilo _block_, de cantos em ângulo reto, adicione a propriedade _flat_ como **true**:

```html
<lte-button :flat="true">clique aqui</lte-button>
```
<lte-button :flat="true" type='default'>clique aqui</lte-button> 

A propriedade _flat_ é opcional e do tipo Boolean.


### Estilo Desabilitado

Para o componente ficar _desabilitado_, adicione _disabled_ como **true**:

```html
<lte-button :disabled="true">clique aqui</lte-button>
```
<lte-button :disabled="true" type='default'>clique aqui</lte-button> 

A propriedade _disabled_ é opcional e do tipo Boolean.


### Estilo App

Para o componente ficar com estilo app, quadrado, adicione _app_ como **true**:

```html
<lte-button :app="true">clique aqui</lte-button>
```
<lte-button :app="true" type='default'>clique aqui</lte-button> 

A propriedade _app_ é opcional e do tipo Boolean. Recomenda-se adicionar um ícone com o texto para ficar melhor representado na tela.
