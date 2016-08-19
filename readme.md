# Code Prettifier

An Angular directive for prettifying your code using the Google Code Prettifier. Includes a collection of themes.


## Usage

- If using `wiredep`, add the following to `bower.json`:
	```
  "overrides": {
    "code-prettify": {
      "main": [
        "src/prettify.js",
        "src/prettify.css"
      ]
    },
    "color-themes-for-google-code-prettify": {
      "main": [
        "themes/your-favourite-theme.css"
      ]
    }
  }
  ```

- Add the module `sko.prittify` and place your code in `pre` tag with the cass `prettyprint`:
	```
	<pre class="prettyprint">
		console.log('hello world');
	</pre>
	```
  
  Alternatively, add the module `sko.prittify.pre` and place your code in `pre` tag:
  ```
  <pre>
    console.log('hello world');
  </pre>
  ```

## Development

- Run a test server:
	```
	./run.sh 		# requires Python
	```