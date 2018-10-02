# LteBox

[[toc]]

O componente LteBox é uma caixa para conteúdo um pouco mais extendo que o conteúdo das LteInfoBox. Com a LteBox pode-se construir inclusive formulários.

```html
<lte-box title="extends">
    teste da caixa
</lte-box>
```

<lte-box title="extends">
    teste da caixa
</lte-box>

### Título


A LteBox tem uma propriedade chamada __title__, do tipo String, obrigatória.

### Cores

A LteBox possui 6 cores: __default__, __primary__ , __success__, __info__, __warning__ e __danger__. Esta informação é setada através da propriedade __type__, do tipo String, opcional. Caso esta propriedade não seja informada, a cor utilizada é a default.

```html
<lte-box title="extends" type="danger">
    teste da caixa
</lte-box>
```

<lte-box title="extends" type="default">
    teste da caixa
</lte-box>
<lte-box title="extends" type="primary">
    teste da caixa
</lte-box>
<lte-box title="extends" type="success">
    teste da caixa
</lte-box>
<lte-box title="extends" type="info">
    teste da caixa
</lte-box>
<lte-box title="extends" type="warning">
    teste da caixa
</lte-box>
<lte-box title="extends" type="danger">
    teste da caixa
</lte-box>

### Cores sólidas dos títulos
 
A LteBox pode colocar o título em evidência indicando a propriedade __solid__, do tipo Boolean, opcional, como __true__

```html
<lte-box title="extends" type="danger" :solid=""true">
    teste da caixa
</lte-box>
```

<lte-box title="extends" type="default" :solid="true">
    teste da caixa
</lte-box>
<lte-box title="extends" type="primary" :solid="true">
    teste da caixa
</lte-box>
<lte-box title="extends" type="success" :solid="true">
    teste da caixa
</lte-box>
<lte-box title="extends" type="info" :solid="true">
    teste da caixa
</lte-box>
<lte-box title="extends" type="warning" :solid="true">
    teste da caixa
</lte-box>
<lte-box title="extends" type="danger" :solid="true">
    teste da caixa
</lte-box>


### Fechável (closeable)

A LteBox tem uma propriedade opcional chamada __closeable__, do tipo Boolean, que indica quando a LteBox terá um botão onde o usuário poderá fechar a caixa.

```html
<lte-box title="extends" type="danger" :closeable="true">
    teste da caixa
</lte-box>
```

<lte-box title="extends" type="danger" :closeable="true">
    teste da caixa
</lte-box>

### Encolhível (collapsable)

A LteBox tem uma propriedade opcional chamada __collapsable__, do tipo Boolean, que indica quando a LteBox terá um botão onde o usuário poderá encolher a caixa.

```html
<lte-box title="extends" type="danger" :collapsable="true">
    teste da caixa
</lte-box>
```

<lte-box title="extends" type="danger" :collapsable="true">
    teste da caixa
</lte-box>


OBS.: ambas as propriedades __collapsable__ e __closeable__ podem ser usadas juntas.

```html
<lte-box title="extends" type="danger" :collapsable="true" :closeable="true">
    teste da caixa
</lte-box>
```

<lte-box title="extends" type="danger" :collapsable="true" :closeable="true">
    teste da caixa
</lte-box>


### Carregando (loading)

A LteBox também possui uma propriedade que indica quando a caixa está carregando: a propriedade __loading__, opcional, de tipo Boolean.

```html
<lte-box title="extends" type="danger" :loading="true">
    teste da caixa
</lte-box>
```

<lte-box title="extends" type="danger" :loading=true>
    teste da caixa
</lte-box> 

<lte-box title="extends" type="danger" :solid="true" :loading=true>
    teste da caixa
</lte-box> 
