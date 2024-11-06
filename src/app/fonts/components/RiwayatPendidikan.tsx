function RowRiwayat(props: any) {
    return (
      <div className="border-2 border-blue-400/75 rounded-lg bg-gray-700 p-2 my-2">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
            <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }
export default function Riwayatpendidikan() {
    return (
      <section>
        <div className="container mx-auto p-2 text-center pt-20 text-white">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-600 shadow-md mb-8 tracking-wider hover:scale-110 transition-all duration-500">
        Riwayat Pendidikan
        </h1>
        <RowRiwayat jenjang="SD" sekolah="SD Negri Banyusari III" tahun="2010" />
        <RowRiwayat jenjang="MTs" sekolah="Mts Al Ma'sum 1 Malausma" tahun="2016" />
        <RowRiwayat jenjang="MA" sekolah="MA Annur 1 Malangbong"  tahun="2019" />
        <RowRiwayat jenjang="Sarjana" sekolah="Universitas Ma'soem"  tahun="2022" />
        </div>
        </section>
        ); 
    }