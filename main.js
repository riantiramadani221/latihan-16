//fungsi untuk mengecek kelulusan siswa
function cekkelulusan() {
  console.log('cek..')
  // ambil nilai dari elemen input
  let nilaiInput = Number(document.getElementById("nilai").value);
  
  // ambil hadir dari elemen input
  // diubah menjadi tipe data number 
  let hadirInput = Number(document.getElementById("hadir").value);
  
  // memebuat variabel untuk menyimpan hadir 
  let hasil = "";
  
  // validasi input kosong
  if (!nilaiInput || !hadirInput) {
    hasil = "⚠️ Nilai dan kehadiran hadir diisi!"
    
    document.getElementById("hasil").innerHTML = hasil;
    
    return
  }
}