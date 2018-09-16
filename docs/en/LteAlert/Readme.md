# LteAlert

[[toc]]

O componente LteAlert provê um alerta para o usuário. O componente possui 2 parâmetros obrigatórios, ambos do tipo String: _title_ e _body_, título e corpo do alerta.


```html
<lte-alert title="sucess" body="Save successful" type="success"/>
```
<lte-alert title="sucess" body="Save successful" type="success"/>

### Cores 

O componente tem 4 cores: _success_, _warning_, _info_ e _danger_. Cada cor tem seu respectivo ícone.

<lte-alert title="sucess" body="Save successful" type="success"/>
<lte-alert title="info" body="34 registros" type="info"/>
<lte-alert title="Cuidado" body="Curva perigosa a frente" type="warning"/>
<lte-alert title="Perigo" body="Operação perigosa" type="danger"/>

### Dimissible

O component LteAlert ainda possui uma outra propriedade, opcional, do tipo Boolean, chamada dimissible. Sua função é indicar se o componente pode ser fechado ou não pelo usuário.


```html
<lte-alert title="sucess" body="Save successful" type="success" :dimissible="true"/>
```
<lte-alert title="sucess" body="Save successful" type="success" :dimissible="true"/>

