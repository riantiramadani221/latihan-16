//fungsi untuk mengecek kelulusan siswa
function cekkelulusan() {
  // ambil nilai dari elemen input
  let nilaiInput = Number(document.getElementById("nilai").value);
  
  // ambil hadir dari elemen input
  // diubah menjadi tipe data number 
  let hadirInput = Number(document.getElementById("hadir").value);
  
  // memebuat variabel untuk menyimpan hadir 
  let hasil = "";
  
  // validasi input kosong
  if (!nilaiInput || !hadirInput) {
    hasil = "⚠️ Nilai dan kehadiran diisi!"
    
    document.getElementById("hasil").innerHTML = hasil;
    document.getElementById("hasil").style.color = "#c0392b"
    return
  }
  // logika pengecekan kelulusan 
  if (
    (nilaiInput >= 90 && hadirInput >= 95) ||
    (nilaiInput >= 95 && hadirInput >= 80) ||
    (nilaiInput >= 75 && hadirInput >= 98)
  ) {
    // kelulusan dengan bonus 
    hasil = "🎉 Lulus dengan Bonus"
    document.getElementById("hasil").style.color = "#3498db"
  } else if (nilaiInput >= 80 && hadirInput >= 85)
  {
    // kelulusan setandar 
    hasil = "✅ lulus."
  } else {
    //tidak lulus 
    hasil = "❌ tidak lulus."
  }
  // tampilkan hasil ke elemen dengan id hasil
  document.getElementById("hasil").innerHTML = hasil
}