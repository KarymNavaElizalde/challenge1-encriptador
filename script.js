
function encriptarMsg() {
	var mensaje = document.getElementById("input-ingresar-texto").value.toLowerCase();
	var msjEnc = mensaje.replace(/e/igm,"enter");
	var msjEnc = msjEnc.replace(/o/igm,"ober");
	var msjEnc = msjEnc.replace(/i/igm,"imes");
	var msjEnc = msjEnc.replace(/a/igm,"ai");
	var msjEnc = msjEnc.replace(/u/igm,"ufat");

	document.getElementById("input-desencriptado").style.display = 'block';
	document.getElementById("muneco").style.display = 'none';
	document.getElementById("mensaje").style.display = 'none';
	document.getElementById("msg-enc-des").style.display = 'none';
	document.getElementById("input-ingresar-texto").value ='';
	document.getElementById("input-desencriptado").value = msjEnc;
	document.getElementById("btn-copiar").style.display = 'block';
	
}


function desencriptarMsg() {
	var mensaje = document.getElementById("input-ingresar-texto").value.toLowerCase();
	var msjEnc = mensaje.replace(/enter/igm,"e");
	var msjEnc = msjEnc.replace(/ober/igm,"o");
	var msjEnc = msjEnc.replace(/imes/igm,"i");
	var msjEnc = msjEnc.replace(/ai/igm,"a");
	var msjEnc = msjEnc.replace(/ufat/igm,"u");

	document.getElementById("input-desencriptado").style.display = 'block';
	document.getElementById("muneco").style.display = 'none';
	document.getElementById("mensaje").style.display = 'none';
	document.getElementById("msg-enc-des").style.display = 'none';
	document.getElementById("input-ingresar-texto").value ='';
	document.getElementById("input-desencriptado").value = msjEnc;
	document.getElementById("btn-copiar").style.display = 'block';


}


function copiar() {
	var copiarTexto = document.querySelector("#input-desencriptado");
	copiarTexto.select();
	document.execCommand("copy");
}