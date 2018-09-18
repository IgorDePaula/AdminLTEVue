# LteSmallBox

[[toc]]

O componente LteSmallBox provê uma caixa de informação de grande destaque, muito utilizada em dashboards.

```html
<lte-small-box title="bookmarks" number="308" icon="fa-flag-o" bg-icon="green" text-botton="More info" url="#"/>
```
<lte-small-box title="bookmarks" number="308" icon="fa-flag-o" bg-icon="green"  text-botton="More info" url=# />
### Ícones

O componente tem uma propriedade obrigatória chamada _icon_, que utiliza ícons Font Awesome.

### Cores

As cores utilizadas tanto no fundo do ícone quando no fundo da infobox são: _aqua_, _yellow_, _red_ e _green_.

### Propriedades obrigatórias

As propriedades obrigatórias são _title_, do tipo String, indicando o título da caixa.
Outra propriedade é _number_, do tipo Number e String (como porcentagem, por exemplo), indicando o número a ser exibido. Outras são _icon_ conforme acima mencionado, e _bg_, do tipo String, que indica a cor de fundo, acima citado anteriormente, _url_, do tipo String, para direcionar a outra página mais detalhada, e _text-botton_, do tipo String, para dar um nome ao link, anteriormente citado.
