# CSS-Text-Message-Simulator
Simulate text message conversations in: circa 2019 iMessage, circa 2012 iMessage, WhatsApp, and Snapchat.

# Structure
Everything is based off the `<dl>` list, with `<dt>` being used for the names of the people sending the texts, and `<dd>` being for the texts themselves.

A `<dt>` and the `<dd>` that go with it are wrapped in a `<div>`, either `class="out"` for outgoing texts sent from the point-of-view phone, or `class="in"` for incoming texts sent from a different phone.

So with any of them, the basic structure is something like this:

```html
<dl class="wrapper">

	<div class="in">
		<dt>Aulus Agerius</dt>
		<dd>are you there yet?</dd>
		<dd>Where are you?</dd>
	</div>

	<div class="out">
		<dt>Numerius Negidius</dt>
		<dd>I'm waiting outside</dd>
		<dd>wait I can see you now</dd>
	</div>

</dl>
```

## Features
|                | Contact header     | Group chat         | Sending pictures           | Big emojis |
| -------------: | :----------------- | :----------------- | :------------------------- | :--------- |
| iOS circa 2019 | :white_check_mark: | :white_check_mark: | :white_check_mark:         | :white_check_mark:
| iOS circa 2012 | :white_check_mark: | :white_check_mark: | :white_check_mark:         | :no_entry_sign: (old iOS did not have big emojis yet)
| WhatsApp       | :white_check_mark: | :no_entry_sign:    | :white_check_mark:         | :white_check_mark:
| Snapchat       | :no_entry_sign:    | :no_entry_sign:    | :white_check_mark: (icons) | :white_check_mark:
