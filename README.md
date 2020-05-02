# CSS-Text-Message-Simulator
Simulate text message conversations in: iMessage (iOS 1 - 6),  iMessage (iOS 7 and up), WhatsApp, Snapchat, and LINE.

# CodePen
* [https://codepen.io/motaylormo/pen/ZEGOqQr iMessage (7+)]
* [https://codepen.io/motaylormo/pen/KKpaydv iMessage (1 - 6)]
* [https://codepen.io/motaylormo/pen/PoqzxNO WhatsApp]
* [https://codepen.io/motaylormo/pen/OJVRWzv Snapchat]
* [https://codepen.io/motaylormo/pen/eYNBPvE LINE]

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
