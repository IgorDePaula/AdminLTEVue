# LteProgressBar 
[[toc]]

O componente LteProgressBar fornece uma barra de progresso.

```html
      <lte-progress-bar :percent="12" color="success"/>
```

<lte-progress-bar :percent="12" color="success"/>
      
      
### Cores

A barra de progresso tem 4 cores: _success_, _primary_, _warning_ e _danger_. A cor é indicada pela propriedade _color_, do tipo String.

<lte-progress-bar :percent="12" color="success"/>
      
<lte-progress-bar :percent="12" color="primary"/>
      
<lte-progress-bar :percent="12" color="warning"/>
      
<lte-progress-bar :percent="12" color="danger"/>

### Tamanhos

A barra de progresso tem 3 tamanhos: _xxs_, _xs_ e _sm_. O tamanho é indicado pela propriedade _size_, do tipo String.
 
<lte-progress-bar :percent="12" color="success" size='xxs'/>
      
<lte-progress-bar :percent="12" color="primary" size='xs'/>
      
<lte-progress-bar :percent="12" color="warning" size='sm'/>

### Percentual

Para indicar o percentual preenchido da barra colorida, usa-se a propriedade _percent_, do tipo Number.

<lte-progress-bar :percent="10" color="success" />
<lte-progress-bar :percent="50" color="success" />
<lte-progress-bar :percent="80" color="success" />

### Striped

Para deixar a barra de progresso listrada, usa-se a propriedade _striped_, do tipo Boolean, como _true_.

<lte-progress-bar :percent="50" color="success" :striped='true' />

### Animação

Para deixar a barra de progresso animado, usa-se a propriedade _active_, do tipo Boolean, como _true_.

<lte-progress-bar :percent="50" color="success" :striped='true' :active='true'/>

### Vertical

A barra de progresso também pode ficar na vertical, utilizando-se a propriedade _vertical_, do tipo Boolean, como _true_.

<lte-progress-bar :percent="50" color="success" :striped='true' :vertical='true'/>

      
      
