# LteInfoBox

[[toc]]

O componente LteInfoBox provê uma caixa de informação, muito utilizada em dashboards.

```html
<lte-info-box title="bookmarks" number="308" icon="fa-flag-o" bg-icon="green" />
```
<lte-info-box title="bookmarks" number="308" icon="fa-flag-o" bg-icon="green" />
### Ícones

O componente tem uma propriedade obrigatória chamada _icon_, que utiliza ícons Font Awesome.

### Cores

As cores utilizadas tanto no fundo do ícone quando no fundo da infobox são: _aqua_, _yellow_, _red_ e _green_

### Propriedades obrigatórias

As propriedades obrigatórias são _title_, do tipo String, indicando o título da caixa.
Outra propriedade é _number_, do tipo Number, indicando o número a ser exibido. Outras são _icon_ conforme acima mencionado, e _bg-icon_, do tipo String, que indica a cor de fundo do ícone, acima citado anteriormente.

### Propriedades opcionais

As propriedades opcionais são: _bg_, do tipo String, que indica a cor de fundo da infobox, cores acima citadas. Outras propriedades são:
_progress-bar_, do tipo Number, que indica uma barra de progresso, e _progress-description_, do tipo String, descrevendo a barra de progresso.

As propriedades _progress-bar_ e _progress_description_ só estarão visualmente disponíveis _se_ a propriedade _bg_ for setada.

