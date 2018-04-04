---
layout: post
title:  "Phishing Attack using an IDN Homograph Attack (EvilURL)"
date:   2018-04-05 01:48:58 +1000
categories: hacking
---

Hello, world! Today we are going to learn about a [phising](https://en.wikipedia.org/wiki/Phishing) attack called [IDN Homograph Attack](https://en.wikipedia.org/wiki/IDN_homograph_attack).

What is [IDN Homograph Attack](https://en.wikipedia.org/wiki/IDN_homograph_attack)?

> The internationalized domain name (IDN) homograph attack is a way a malicious party may deceive computer users about what remote system they are communicating with, by exploiting the fact that many different characters look alike (i.e., they are homographs, hence the term for the attack).

To explain that to guys, I am going to open `character map` application. Because the `character map` application comes with a lot of [unicode](https://en.wikipedia.org/wiki/Unicode) characters, most of them can not be accessed through keyboard.

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-4793783684558224"
     data-ad-slot="5716606909"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Most of us think that the keyboard is the only characters that we have, but if take a look at the `character map` you can see a lot of [unicode](https://en.wikipedia.org/wiki/Unicode) charaters which related to other languages and symbols.

![screenshot from 2018-04-05 03-50-39](https://user-images.githubusercontent.com/37883010/38324791-9d219050-3884-11e8-9586-dec1bb37ccd1.png)

In this particular attack, we are going to use this unicode characters to construct a [phising](https://en.wikipedia.org/wiki/Phishing) `URL`, and see if that domain available to purchase. For example click the following `URL` and see what's appear in browser `URL` bar.

[http://fаϲеbооk.com](http://fаϲеbооk.com)

If you don't believe, try to copy paste the URL

# Using EvilURL Tool

We can not construct a URL by searching for every single matching characters, or we can write a script that replace normal character in the domain to unicode character. But why do we bother if there is a tool available for it.

[EvilURL](https://github.com/UndeadSec/EvilURL) is an `open source` tool available in [Github](https://github.com). Go head clone it or download it to your computer

**Requirements**
* Python 3 or greater

I am going to generate an [EvilURL](https://github.com/UndeadSec/EvilURL) for [facebook.com](https://facebook.com)

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-4793783684558224"
     data-ad-slot="5716606909"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

![screenshot from 2018-04-05 05-41-13](https://user-images.githubusercontent.com/37883010/38330477-176f3010-3894-11e8-9fa0-b447ab28ca05.png)

Choose `Generate evil urls` then press enter

{% highlight bash %}
> Insert name: facebook
> Insert level domain: .com
{% endhighlight %}

You will see the following output. It generated a list of unicode URLs that look alike [facebook.com](https://facebook.com)

![screenshot from 2018-04-05 05-47-36](https://user-images.githubusercontent.com/37883010/38330797-df4aa236-3894-11e8-993f-3298d1724881.png)

Now you copy those and see if those URLs available for purchase, most of them time it will.

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-4793783684558224"
     data-ad-slot="5716606909"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

I searched for [fаσеbооk.com](http://fаσеbооk.com) on [namecheap.com](http://namecheap.com), the result was successful.

![screenshot from 2018-04-05 05-50-12](https://user-images.githubusercontent.com/37883010/38330934-3cfb2bee-3895-11e8-906a-fd0c9668d281.png)

That's it guys, if you have any queries do not hesitate to leave a comment or message me on facebook.