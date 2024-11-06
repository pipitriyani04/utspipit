import foto from "../../zeee.jpeg";

function Profile() {
    return <img src={foto.src} alt="ZEE JKT" className="fotoku"/>;
}

export default  function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
            <h1 className="text-gray-400 font-bold">CV ONLINE</h1>
             <h2 className="text-3x1">Pipit Pitriyani</h2>
             <Profile/>
             <p>
             Saya Adalah seorang mahasiswa Jurusan Komputerisasi Akuntansi Semester 5 di Universitas 
             Ma'soem, Asal Saya dari Majalengka Cita Cita saya ingin menjadi Akuntan dan Mengangkat Derajat Orang Tua.
             </p>
        </div>
    );
}