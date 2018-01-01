function readConfig(value, defaultValue)
{
  return value === undefined ? defaultValue : value;
}

function iframePlayerBig(sid, autoPlay, width)
{
  if (width < 0) width = 310;
  return '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=' + (width + 20) +' height=86 src="//music.163.com/outchain/player?type=2&id=' + sid + '&auto=' + autoPlay + '&height=66"></iframe>';
}

function iframePlayerSmall(sid, autoPlay, width)
{
  if (width < 0) width = 278;
  return '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=' + (width + 20) +' height=52 src="//music.163.com/outchain/player?type=2&id=' + sid + '&auto=' + autoPlay + '&height=32"></iframe>';
}

function embedPlayerBig(sid, autoPlay)
{
  return '<embed src="//music.163.com/style/swf/widget.swf?sid=' + sid + '&type=2&auto=' + autoPlay + '&width=320&height=66" width="340" height="86" allowNetworking="all"></embed>';
}

function embedPlayerSmall(sid, autoPlay)
{
  return '<embed src="//music.163.com/style/swf/widget.swf?sid=' + sid + '&type=2&auto=' + autoPlay + '&width=278&height=32" width="298" height="52" allowNetworking="all"></embed>';
}

hexo.extend.tag.register('cloudmusic', function(args){
  var sid = args[0];
  var config = hexo.config.cloudmusic || {};
  var autoPlay = readConfig(config.autoPlay, 0) ? 1 : 0;
  var playerType = readConfig(config.playerType, 'iframe'); // embed | iframe
  var playerSize = readConfig(config.playerType, 'big'); // small | big
  var playerWidth = parseInt(readConfig(config.playerWidth, -1)); // only available for iframe player
  
  if (args.length > 1)
    autoPlay = args[1];
  if (args.length > 2)
    playerType = args[2];
  if (args.length > 3)
    playerSize = args[3];
  if (args.length > 4)
    playerWidth = parseInt(args[4]);

  if (playerType == 'embed') {
    if (playerSize == 'small')
      return embedPlayerSmall(sid, autoPlay);
    else
      return embedPlayerBig(sid, autoPlay);
  }
  else {
    if (playerSize == 'small')
      return iframePlayerSmall(sid, autoPlay, playerWidth);
    else
      return iframePlayerBig(sid, autoPlay, playerWidth);
  }

});
