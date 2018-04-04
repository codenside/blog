---
layout: post
title:  "Install a Flat Theme on Ubuntu"
date:   2018-04-04 08:48:58 +1000
categories: linux
thumbnail: https://camo.githubusercontent.com/86bb278f4b6dd119f904884fd7a47b1a7367a91a/687474703a2f2f692e696d6775722e636f6d2f4d3579786767512e706e673f31
---


Hello, world! welcome back, in this article I am going to show you how to install a flat the on [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu_(operating_system)). For that I chose [Flatabulous](https://github.com/anmoljagetia/Flatabulous).

[Flatabulous](https://github.com/anmoljagetia/Flatabulous) is an `open-source` and free theme for Ubuntu and other debian based Linux Systems. It's based on the Ultra-Flat theme.

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

To install the theme, you must first install the [Unity Tweak Tool](https://launchpad.net/unity-tweak-tool). It can be installed by simply running the command:

{% highlight bash %}
$ sudo apt-get install unity-tweak-tool
{% endhighlight %}

If you have any trouble installing `unity-tweak-tool` leave a comment or head over to their website, downloading the .deb file (recommended).

Download the .deb file from [here](https://github.com/anmoljagetia/Flatabulous/releases/tag/16.04.1), double click to open with Ubuntu Software Center and click on install. Then, install the theme using `ubuntu-tweak`.

Before we install the theme, make sure your system packages are up to date. Run the following commands to `update` and `upgrade`

{% highlight bash %}
$ sudo apt-get update
$ sudo apt-get upgrade
{% endhighlight %}

# Installing the Theme Using noobslab PPA

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

{% highlight bash %}
$ sudo add-apt-repository ppa:noobslab/themes
$ sudo apt-get update
$ sudo apt-get install flatabulous-theme
{% endhighlight %}

# Installing the Theme Icons

{% highlight bash %}
$ sudo add-apt-repository ppa:noobslab/icons
$ sudo apt-get update
$ sudo apt-get install ultra-flat-icons
{% endhighlight %}

# Screenshots

![Theme screenshot](https://camo.githubusercontent.com/ed033668182fbec9d13c9519d12c1e004ed38987/687474703a2f2f692e696d6775722e636f6d2f41737056466e372e706e673f31)

![Theme screenshot](https://camo.githubusercontent.com/1c2f9a440ed8a7b32fffefb9ffd1b4068da0ff63/687474703a2f2f692e696d6775722e636f6d2f795842365653612e706e673f31)

# UPDATED

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

You can also go to ubuntu software store and install the `tweak tool`.

![screenshot from 2018-04-04 10-42-20](https://user-images.githubusercontent.com/37883010/38282694-e41a0888-37f4-11e8-9efa-e44c815c879c.png)

After that you can set the system the to [Flatabulous](https://github.com/anmoljagetia/Flatabulous)

![screenshot from 2018-04-04 10-43-54](https://user-images.githubusercontent.com/37883010/38282740-18744788-37f5-11e8-8720-a8e378299cb3.png)
