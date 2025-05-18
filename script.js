document.getElementById('stakingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil input
    const amount = parseFloat(document.getElementById('amount').value);
    const period = parseFloat(document.getElementById('period').value);
    const apy = 0.07; // APY 7%

    // Validasi input
    if (amount <= 0 || period <= 0) {
        document.getElementById('result').innerHTML = 'Masukkan jumlah dan periode yang valid!';
        return;
    }

    // Hitung imbal hasil (sederhana)
    const profit = amount * apy * period;
    const total = amount + profit;

    // Tampilkan hasil
    document.getElementById('result').innerHTML = `
        <strong>Estimasi Imbal Hasil:</strong><br>
        Imbal hasil: ${profit.toFixed(2)} ZEN<br>
        Total setelah staking: ${total.toFixed(2)} ZEN<br>
        (Periode: ${period} tahun, APY: ${(apy * 100)}%)
    `;
});
