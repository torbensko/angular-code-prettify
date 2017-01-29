# Code Prettifier

An Angular directive that prettifies your code samples using the Google Code Prettifier.

Uses [Yoshihide Jimbo](https://jmblog.github.io/color-themes-for-google-code-prettify/) beautiful Google Code themes.


## Usage

See `index.html` for required imports. If you are using `wiredep` Grunt task, you can control which theme is used by adding the following to your `bower.json`:

```
"overrides": {
  "color-themes-for-google-code-prettify": {
    "main": [
      "themes/your-favourite-theme.css"
    ]
  }
}
```

Add the module `sko.prittify` to your Angular app.

Add the `prettyprint` class to an element:

```
<pre class="prettyprint">
  console.log('hello world');
</pre>
```

To optionally control the language, add any of the following: `lang-bsh`, `lang-c`, `lang-cc`, `lang-cpp`, `lang-cs`, `lang-csh`, `lang-cyc`, `lang-cv`, `lang-htm`, `lang-html`, `lang-java`, `lang-js`, `lang-m`, `lang-mxml`, `lang-perl`, `lang-pl`, `lang-pm`, `lang-py`, `lang-rb`, `lang-sh`, `lang-xhtml`, `lang-xml`, `lang-xsl`


## Development

- Test server: `./run.sh`. Requires Python.