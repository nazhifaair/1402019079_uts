function check(){
	var c = 0;
	var q1 = document.kuis.soal1.value;
	var q2 = document.kuis.soal2.value;
	var q3 = document.kuis.soal3.value;
	var q4 = document.kuis.soal4.value;
	var q5 = document.kuis.soal5.value;

	var result= document.getElementById('result');
	kuis = document.getElementById("kuis");
	if(q1 == "SARS-CoV-2" ){c++}
	if(q2 == "Rapid Test"){c++}
	if(q3 == "Orang Dalam Pemantauan"){c++}
	if(q4 == "Mencuci Tangan" ){c++}
	if(q5 == "Liburan keluar kota"){c++}

		kuis.style.display="none" ;
	if(c < 2){
		result.textContent= `Hasil kuis kamu adalah ${c}/5. Sepertinya kamu harus mencari tau lebih banyak tentang Covid ya. Jangan Lupa Pakai Maskermu dan Selalu ikuti Protokol Kesehatan! `
	}
	else{
		result.textContent= `Hasil kuis kamu adalah ${c}/5. Jangan Lupa Pakai Maskermu dan Selalu ikuti Protokol Kesehatan!`
	}


}