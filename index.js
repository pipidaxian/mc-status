fetch('https://api.mcsrvstat.us/bedrock/2/mc.pipixia.ga').then((res) => {
  return res.json();
}).then((data) => {
  console.log(data)
  const status = document.querySelector('.status-wrapper .values .status');
  const players = document.querySelector('.status-wrapper .values .players');

  if (data.online) {
    status.textContent='在线';
    status.style.color = '#3d9c4c';
    players.textContent = data.players.online + '/' + data.players.max;
  } else {
    status.textContent='离线 😔 进入服务器尝试一下吧';
    status.style.color = '#E83D3D';
    players.textContent = '---';
  }
}).catch((err) => {
  console.log(err)
  const error = document.querySelector('.error');
  error.style.display = 'inherit';

  const status = document.querySelector('.status-wrapper');
  status.style.display = 'none';
})
