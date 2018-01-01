# hexo-tag-cloudmusic-player

## Description
This is a hexo tag plugin which enables you to insert a cloudmusic outchain player in a blog easily.

## Installation
``` bash
$ npm install hexo-tag-cloudmusic-player --save
```

## Options
You can configure this plugin in `_config.yml`.

``` yaml
cloudmusic:
  playerType: iframe # iframe or embed (default: iframe)
  playerSize: large # small or large (default: large)
  playerWidth: 310 # -1 as default (only available for iframe player)
  autoPlay: 0 # 0 or 1 (default: 0)
```

## Usage
You can generate a cloudmusic outchain player using the following tag: 
```
{% cloudmusic songId [autoPlay] [playerType] [playerSize] [playerWidth] %}
```

E.g.
1. Insert a song (id = 31654455) with default config  
   `{% cloudmusic 31654455 %}`
1. Insert an autoplay song (id = 511181532) with defaultSize embed player  
   `{% cloudmusic 511181532 1 embed %}`
1. Insert an autoplay song (id = 506607859) with big iframe player which width is 500px  
`{% cloudmusic 506607859 1 iframe big 500 %}`

## Comments
1. songId is shown in it's song page url. For example, the url `http://music.163.com/song?id=1696373` means the songId is `1696373`