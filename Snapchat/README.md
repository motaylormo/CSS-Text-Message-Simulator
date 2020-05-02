Uses icons from [Font Awesome](https://fontawesome.com/).

# [Snapchat Icons](https://support.snapchat.com/en-US/a/friends-screen-icon-guide)
* Red is the default. Purple and blue need to be specified.
* The opened and unopened ones are either a square or an arrow, based on if it's in `in` or `out`.

### Outgoing POV icons
```html
<dl class="snapchat">
	<div class="out" name="outgoing">
		<dd class="icon opened"></dd>
		<dd class="icon opened purple"></dd>
		<dd class="icon opened blue"></dd>
		<dd class="icon unopened"></dd>
		<dd class="icon unopened purple"></dd>
		<dd class="icon unopened blue"></dd>
		<dd class="icon gray"></dd>
	</div>
	
	<h4 class="banner screenshot"></h4>
	<h4 class="banner replay"></h4>
</dl>
```

### Incoming POV icons
```html
<dl class="snapchat">
	<div class="in" name="incoming">
		<dd class="icon opened"></dd>
		<dd class="icon opened purple"></dd>
		<dd class="icon opened blue"></dd>
		<dd class="icon grey"></dd>
		<dd class="icon unopened"></dd>
		<dd class="icon unopened purple"></dd>
		<dd class="icon unopened blue"></dd>
		<dd class="icon screenshot"></dd>
		<dd class="icon screenshot purple"></dd>
		<dd class="icon screenshot blue"></dd>
		<dd class="icon replay"></dd>
		<dd class="icon replay purple"></dd>
	</div>
</dl>
```
