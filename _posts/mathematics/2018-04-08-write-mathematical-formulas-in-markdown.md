---
layout: post
title:  "Write Mathematical Formulas in Markdown"
date:   2018-04-08 04:48:58 +1000
categories: mathematics
thumbnail: https://user-images.githubusercontent.com/37883010/38459483-89e80936-3aed-11e8-8228-fe2f9178bb90.png
---

Hello guys, welcome back. In this article I am going to cover, how to write **Write Mathematical Formulas** in your markdown.

In this article I am using `LaTex` parser, following is what [Wikipedia](https://en.wikipedia.org) says about `LaTex`:

> LaTeX is a document preparation system. When writing, the writer uses plain text as opposed to the formatted text found in WYSIWYG word processors like Microsoft Word, LibreOffice Writer and Apple Pages. [Wikipedia](https://en.wikipedia.org/wiki/LaTeX)

And also I am not going to teach `math` here. I am just showing you, how to show the complex `math` symbols in a nice way to user.

# Greek Letters

| Symbol     | Script   |
-------------|----------|
| $\alpha$   | \alpha   |
| $A$        | A        |
| $\beta$    | \beta    |
| $B$        | B        |
| $\gamma$   | \gamma   |
| $\Gamma$   | \Gamma   |
| $\pi$      | \pi      |
| $\Pi$      | \Pi      |
| $\phi$     | \phi     |
| $\Phi$     | \Phi     |
| $\varphi$  | \varphi  |
| $\theta$   | \theta   |


# Operators

| Symbol     | Script   |
-------------|----------|
| $\cos$     | \cos     |
| $\sin$     | \sin     |
| $\lim$     | \lim     |
| $\exp$     | \exp     |
| $\to$      | \to      |
| $\infty$   | \infty   |
| $\equiv    | \equiv   |
| $\bmod$    | \bmod    |
| $\times$   | \times   |


# Power and Indices

| Symbol     | Script   |
-------------|----------|
| $k_{n+1}$  | k_{n+1}  |
| $n^2$      | n^2      |
| $k_n^2$    | k_n^2    |


# Fractions and Binomials

| Symbol                      | Script                     |
------------------------------|----------------------------|
| $\frac{n!}{k!(n-k)!}$       | \frac{n!}{k!(n-k)!}        |
| $\binom{n}{k}$              | \binom{n}{k}               |
| $\frac{\frac{x}{1}}{x - y}$ | \frac{\frac{x}{1}}{x - y}  |
| $^3/_7$                     | ^3/_7                      |

> `\binom{n}{k}` to write this you should add a `TeX` extension as follow.

{% highlight js %}
TeX: {
	extensions: ["AMSmath.js"]
}
{% endhighlight %}


# Roots

| Symbol        | Script      |
----------------|-------------|
| $\sqrt{k}$    | \sqrt{k}    |
| $\sqrt[n]{k}$ | \sqrt[n]{k} |


# Sums and Integrals

| Symbol                      | Script                                     |
------------------------------|--------------------------------------------|
| $\sum_{i=1}^{10} t_i$       | \sum_{i=1}^{10} t_i                        |
| $\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x$  | \int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x |
| $\sum$                     | \sum                                       |
| $\prod$                    | \prod                                      |
| $\coprod$                  | \coprod                                    |
| $\bigoplus$                | \bigoplus                                  |
| $\bigotimes$               | \bigotimes                                 |
| $\bigodot$                 | \bigodot                                   |
| $\bigcup$                  | \bigcup                                    |
| $\bigcap$                  | \bigcap                                    |
| $\biguplus$                | \biguplus                                  |
| $\bigsqcup$                | \bigsqcup                                  |
| $\bigvee$                  | \bigvee                                    |
| $\bigwedge$                | \bigwedge                                  |
| $\int$                     | \int                                       |
| $\oint$                    | \oint                                      |
| $\iint$                    | \iint                                      |
| $\iiint$                   | \iiint                                     |
| $\idotsint$                | \idotsint                                  |
| $\sum_{\substack{0<i<m<j<n}} P(i, j)$                | \sum_{\substack{0<i<m<j<n}} P(i, j)                                  |
| $\\int\limits_a^b$         | \\int\limits_a^b                           |


| Symbol                      | Script                                     |
------------------------------|--------------------------------------------|
| $a' a^{\prime}$             | a' a^{\prime}                              |
| $a''$                       | a''                                        |
| $\hat{a}$                   | \hat{a}                                    |
| $\bar{a}$                   | \bar{a}                                    |
| $\grave{a}$                 | \grave{a}                                  |
| $\acute{a}$                 | \acute{a}                                  |
| $\dot{a}$                   | \dot{a}                                    |
| $\ddot{a}$                  | \ddot{a}                                   |
| $\not{a}$                   | \not{a}                                    |
| $\mathring{a}$              | \mathring{a}                               |
| $\overrightarrow{AB}$       | \overrightarrow{AB}                        |
| $\overleftarrow{AB}$        | \overleftarrow{AB}                         |
| $a'''$                      | a'''                                       |
| $\overline{aaa}$            | \overline{aaa}                             |
| $\check{a}$                 | \check{a}                                  |
| $\vec{a}$                   | \vec{a}                                    |
| $\underline{a}$             | \underline{a}                              |
| $\color{red}x$              | \color{red}x                               |
| $\pm$                       | \pm                                        |
| $\mp$                       | \mp                                        |
| $\int y \mathrm{d}x$        | \int y \mathrm{d}x                         |
| $\,$                        | \,                                         |
| $\:$                        | \:                                         |
| $\;$                        | \;                                         |
| $!$                         | !                                          |
| $\int y\, \mathrm{d}x$      | \int y\, \mathrm{d}x                       |
| $\dots$                     | \dots                                      |
| $\ldots$                    | \ldots                                     |
| $\cdots$                    | \cdots                                     |
| $\vdots$                    | \vdots                                     |
| $\ddots$                    | \ddots                                     |



# Brackets etc

| Symbol        | Script      |
----------------|-------------|
| $(a)$         | (a)         |
| $[a]$         | [a]         |
| ${a}$         | {a}         |
| $\langle f \rangle$     | \langle f \rangle     |
| $\lfloor f \rfloor$     | \lfloor f \rfloor     |
| $\lceil f \rceil$       | \lceil f \rceil       |


If you want to show a `math` equation in your webpage, watch the following setup video using [MathJax](https://www.mathjax.org/) JS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XeyUl3phA6k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> <br>

What is MathJax JS?

> MathJax is a cross-browser JavaScript library that displays mathematical notation in web browsers, using MathML, LaTeX and ASCIIMathML markup. [Wikipedia](https://en.wikipedia.org/wiki/MathJax)