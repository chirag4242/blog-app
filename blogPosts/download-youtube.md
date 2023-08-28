---
title: 'Download Youtube Videos with Python'
date: '2023-03-30'
---

![Thumbnail](https://images2.imgbox.com/2f/55/zbXWZwMy_o.jpg)

**Summary:**
With a few lines of code, you can download not only youtube videos but also get information about the author, title, and description; with this information, you can download a video for yourself or build a website for entertainment or create a college project.

**First step:**
Note: Install python and pip; if you already have both installed, move to the Second step.

**To install Python :**

**Step 1: Go to:** [https://www.python.org/downloads/](https://www.python.org/downloads/) and download the executable file; click next for all steps you have successfully installed the python in your system.

Check if python is installed or not; open the terminal and write the following command:

```shell:
python --version
```

To install pip:
**Step 1:** Download the script from [https://bootstrap.pypa.io/get-pip.py](https://bootstrap.pypa.io/get-pip.py). And Open a terminal cd to the folder containing the `get-pip.py` File and run:

```shell:
python get-pip.py
```

To have a better installation understanding follow this link:
[https://pip.pypa.io/en/stable/installation/](https://pip.pypa.io/en/stable/installation/)

**Second Step:**
Install the pytube module with pip; enter the following command to install pytube.

```shell:
pip install pytube
```

Check the pytube documentation to learn more about pytube: [https://pytube.io/en/latest/user/quickstart.html](https://pytube.io/en/latest/user/quickstart.html).

**Third Step:**
Create a python file, for example, `YouTubeVideo.py`, and paste the following code into that file. Now replace the url with your choice of youtube link and run the code.

```python:
from pytube import YouTube
import os

# function to takes url and path
# and downloads
def downloadVideo(url, path):
    yt = YouTube(url)
    yt_stream = yt.streams.get_highest_resolution()
    if not os.path.exists(path):
        os.makedirs(path)
    yt_stream.download(path)

# Youtube Video url
url = "http://youtube.com/watch?v=2lAe1cqCOXo"
# Path to save the videos
path = "./videos/VideoFile"
downloadVideo(url, path)
```

To Run: open terminal cd to the YouTubeVideo.py file folder and run the following command.

```shell:
python YouTubeVideo.py
```

Now check the entered path; you will find the downloaded file on that path.

**More features:**
You can also retrieve the title, author information, video description, etc.

```shell:
from pytube import YouTube
yt = YouTube('http://youtube.com/watch?v=2lAe1cqCOXo')
print("Title: ", yt.title)
print("Thumbnail Url: ", yt.thumbnail_url)
print("Author: ", yt.author)
```

Result:

![Result](https://images2.imgbox.com/ed/35/LUTD7cl3_o.jpg)

With this, you can create different fun projects. Thank you for reading this blog. I hope you like this blog; if you have any questions, please feel free to contact me.
