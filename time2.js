const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');

  let [hours, minutes,seconds] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  let s = parseInt(minutes)+45;
  let a = parseInt(seconds)+45;
  if (a>=60){
      let f = a-60;
      let z = s+1;
      if (z>=60){
          let h = z-60;
          let p = hours+1
          if (p<24){
              document.write(`${p}:${h}:${f}<br>`);
          }

          else if(p>=24){
              let j = "00";
              document.write(`${j}:${h}:${f}<br>`)
          }
      }else{
          document.write(`${p}:${z}:${f} <br>`);
      }
  }
  else if (hours<24){
      document.write(`${hours}:${s}:${a}<br>`);
  }
}
convertTime12to24('01:30:45 PM')
convertTime12to24('05:06:00 PM')
convertTime12to24('12:00:00 PM')
convertTime12to24('12:00:00 AM')
convertTime12to24('11:59:59 PM')