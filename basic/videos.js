const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// Parsear datos

// Tip: Obtener un array de objetos, donde cada objeto sea un video
// {min:5, seg: 59, tipo: 'Redux Video'}
// Tip2: split

function parsearDatos(str) {
  const resultado = []
  const splitado = str.split("</li>");

  for (let index = 0; index < splitado.length - 1; index++) {
    const desde = splitado[index].indexOf("\"");
    const hasta = splitado[index].lastIndexOf("\"");
    const horaCompleta = splitado[index].substring(desde + 1, hasta).split(":");
    const min = horaCompleta[0];
    const seg = horaCompleta[1];

    const tipo = splitado[index].substring(splitado[index].lastIndexOf(">") + 1, splitado[index].length);
    resultado.push({ min, seg, tipo})
  }
  return resultado;
}
//console.log(parsearDatos(str)[0])


// Obtener el total de segundos de los videos de tipo Redux
const videosRedux = parsearDatos(str).filter((video) => video.tipo === "Redux Video");

const totalSegundos = videosRedux.reduce((total, video) => {
  return total +  parseInt(video.seg);
}, 0);

console.log(totalSegundos)



