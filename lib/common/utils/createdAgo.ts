const formatCreatedAgo = (seconds: number) => {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  let dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
  let hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
  let mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
  let sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
  let timing = dDisplay + hDisplay + mDisplay + sDisplay;
  let TimeArray = timing.split(',');
  let valueArray = TimeArray[0].split(' ');
  return { value: valueArray[0], unit: valueArray[1] + ' ago' };
};

export default formatCreatedAgo;
