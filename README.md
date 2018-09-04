[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/Protoss78country-select)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/Protoss78country-select.svg)](https://vaadin.com/directory/component/Protoss78country-select)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Protoss78/country-select)

# \<country-select\>

A simple country selector web component using the paper-dropdown-menu that implements the app-localize-behavior and can translate the country names. Currently it supports localized country names for 253 languages. The country list is based on [umpirsky/country-list](https://github.com/umpirsky/country-list).

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="country-select.html">
    <style is="custom-style">
      #container {
        display: block;
        height: 400px;
      }
    </style>
    <div id="container">
      <next-code-block></next-code-block>
    </div>
  </template>
</custom-element-demo>
```
-->
```html
<country-select></country-select>
<country-select language="de" label="Land"></country-select>
```

![Animation](https://github.com/Protoss78/country-select/blob/master/animation.gif "Animation")

### Bundle with polymer build

To build include the country list data files in your `polymer.json`.

```json
"extraDependencies": [
  "bower_components/country-list/data/**/*.json"
]
```
