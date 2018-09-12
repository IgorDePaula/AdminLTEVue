# LteActionButton
[[toc]]
O LteActionButton representa um botão com um menu dropdown. São 2 o número de parâmetros obrigatórios: _title_, String, que representa o label do componente, e _itens_, Array, que representa os itens que serão renderizados no menu dropdown.
Tem ainda o parâmetro _type_ que indica a coloração do componente. Parâmetro este herdado do componente LteButton.

```html
<lte-action-button type="warning" title="options" :itens="[{}]"/>
``` 

<lte-action-button type="warning" title="options" :itens="[{title: 'test',handler: () => {}}, {title: 'test 2',handler: () => {}}]"/>

### Tipos

| Tipo          | Real                                              | Código |
|:-------------:|:-------------------------------------------------:|:-------:|
| info          | <lte-action-button type="info" title="options" :itens="[{title: 'test',handler: () => {}}, {title: 'test 2',handler: () => {}}]"/>  | ```<lte-action-button type="info" title="options" :itens="[]"/> ```|
| danger     | <lte-action-button type="danger" title="options" :itens="[{title: 'test',handler: () => {}}, {title: 'test 2',handler: () => {}}]"/>     | ```<lte-action-button type="danger" title="options" :itens="[]"/> ```| 
| warning | <lte-action-button type="warning" title="options" :itens="[{title: 'test',handler: () => {}}, {title: 'test 2',handler: () => {}}]"/>    | ```<lte-action-button type="warning" title="options" :itens="[]"/> ```|
| success| <lte-action-button type="success" title="options" :itens="[{title: 'test',handler: () => {}}, {title: 'test 2',handler: () => {}}]"/>    | ```<lte-action-button type="success" title="options" :itens="[]"/> ```|
| primary| <lte-action-button type="primary" title="options" :itens="[{title: 'test',handler: () => {}}, {title: 'test 2',handler: () => {}}]"/>     | ```<lte-action-button type="primary" title="options" :itens="[]"/> ```|
| default | <lte-action-button title="options" :itens="[{title: 'test',handler: () => {}}, {title: 'test 2',handler: () => {}}]"></lte-action-button>      | ```<lte-action-button title="options" :itens="[]"/> ```|

### Itens

Cada item do array da propriedade _itens_ precisa ter exatamente 2 propriedades: _title_ que é a label da opção, e _handler_ que uma **function** que será executada quando esta opção for clicada.

```javascript 1.6
[
  {
    title: 'Option 1',
    handler: () => console.log('log from option 1 handler')
  }
]
```

### Flat 

Também tem a opção _flat_ que o faz ter cantos de ângulo reto.

```html
<lte-action-button type="warning" :flat="true" title="options" :itens="[{}]"/>
``` 

<lte-action-button type="warning"  :flat="true"  title="options" :itens="[{title: 'test',handler: () => {}}, {title: 'test 2',handler: () => {}}]"/>
