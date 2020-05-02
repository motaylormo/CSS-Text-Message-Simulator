# CSS-Text-Message-Simulator
Simulate text message conversations in various messaging apps.

# [CodePen](https://codepen.io/collection/DQOQON)
* [iMessage (iOS 7 and up)](https://codepen.io/motaylormo/pen/ZEGOqQr)
* [iMessage (iOS 1 - 6)](https://codepen.io/motaylormo/pen/KKpaydv)
* [WhatsApp](https://codepen.io/motaylormo/pen/LYVLmQP)
* [Snapchat](https://codepen.io/motaylormo/pen/OJVRWzv)
* [LINE](https://codepen.io/motaylormo/pen/eYNBPvE)

# History
This was originally made for literary purposes: If you're writing a story which involves the characters texting each other, this would be used to format those text messages. I wanted it to look as close to the actual app as I could make it, but have it be basically non-interactive.

In that original context, readers had an option of turning the CSS off. The HTML without the CSS would still need to be compensable. The whole structure is based around a `<dl>` list, where the people's names would be in `<dt>` and their texts would be in `<dd>`.

A `<dt>` and the `<dd>` that go with it are wrapped in a `<div>`:
* `class="out"` for outgoing texts sent from the point-of-view phone
* `class="in"` for incoming texts sent from a different phone
